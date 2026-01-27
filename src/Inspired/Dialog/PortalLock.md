Coming soon...

```tsx
<PortalParticipationProvider>
  <PortalTarget id="sidebar" behavior="modal" zone="sidebar" />
  <PortalTarget id="fullscreen" behavior="modal" zone="fullscreen" />

  <Participate target="sidebar">
    <button>Sidebar content</button>
  </Participate>

  <Participate target="fullscreen">
    <button>Fullscreen modal</button>
  </Participate>
</PortalParticipationProvider>
```

```tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
} from "react";
import { createPortal } from "react-dom";

type ModalZone = "fullscreen" | "sidebar" | "popover" | "global";

type FocusEntry = {
  id: string;
  element: HTMLElement;
  restoreFocusTo: HTMLElement | null;
};

type PortalContextValue = {
  targets: Map<string, HTMLElement>;
  registerTarget: (id: string, el: HTMLElement) => void;
  unregisterTarget: (id: string) => void;

  registerModal: (zone: ModalZone, entry: FocusEntry) => void;
  unregisterModal: (zone: ModalZone, id: string) => void;
  isTopModal: (zone: ModalZone, id: string) => boolean;
  getModalZIndex: (zone: ModalZone, id: string) => number | undefined;
  requestCloseTopModal: (zone: ModalZone) => void;
};

const PortalContext = createContext<PortalContextValue | null>(null);

const Z_BASE: Record<ModalZone, number> = {
  sidebar: 1000,
  global: 1500,
  fullscreen: 2000,
  popover: 3000,
};

const SCROLL_LOCK_ZONES: ModalZone[] = ["global", "fullscreen"];

export function PortalParticipationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [targets, setTargets] = useState<Map<string, HTMLElement>>(new Map());
  const [, forceRender] = useState(0);

  const zoneState = useRef(
    new Map<ModalZone, { stack: FocusEntry[] }>([
      ["fullscreen", { stack: [] }],
      ["sidebar", { stack: [] }],
      ["popover", { stack: [] }],
      ["global", { stack: [] }],
    ]),
  );

  const registerTarget = useCallback((id: string, el: HTMLElement) => {
    setTargets((prev) => new Map(prev).set(id, el));
  }, []);

  const unregisterTarget = useCallback((id: string) => {
    setTargets((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  /* ---------- modal stack management ---------- */

  const registerModal = useCallback((zone: ModalZone, entry: FocusEntry) => {
    zoneState.current.get(zone)!.stack.push(entry);
    forceRender((x) => x + 1);
  }, []);

  const unregisterModal = useCallback((zone: ModalZone, id: string) => {
    const state = zoneState.current.get(zone)!;
    state.stack = state.stack.filter((e) => e.id !== id);
    forceRender((x) => x + 1);
  }, []);

  const isTopModal = useCallback((zone: ModalZone, id: string) => {
    const stack = zoneState.current.get(zone)!.stack;
    return stack.at(-1)?.id === id;
  }, []);

  const getModalZIndex = useCallback((zone: ModalZone, id: string) => {
    const stack = zoneState.current.get(zone)!.stack;
    const index = stack.findIndex((e) => e.id === id);
    return index === -1 ? undefined : Z_BASE[zone] + index;
  }, []);

  const requestCloseTopModal = useCallback((zone: ModalZone) => {
    const top = zoneState.current.get(zone)!.stack.at(-1);
    if (!top) return;

    document.dispatchEvent(
      new CustomEvent("portal:close", {
        detail: { id: top.id, zone },
      }),
    );
  }, []);

  useEffect(() => {
    const shouldLock = SCROLL_LOCK_ZONES.some(
      (zone) => zoneState.current.get(zone)!.stack.length > 0,
    );

    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;

    if (shouldLock) {
      const scrollbar =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbar}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    };
  });

  return (
    <PortalContext.Provider
      value={{
        targets,
        registerTarget,
        unregisterTarget,
        registerModal,
        unregisterModal,
        isTopModal,
        getModalZIndex,
        requestCloseTopModal,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

function usePortalContext() {
  const ctx = useContext(PortalContext);
  if (!ctx) {
    throw new Error("Must be used inside PortalParticipationProvider");
  }
  return ctx;
}

function usePortalTarget(id: string) {
  const { registerTarget, unregisterTarget } = usePortalContext();
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!el) return;
    registerTarget(id, el);
    return () => unregisterTarget(id);
  }, [id, el]);

  return setEl;
}

function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(","),
    ),
  );
}

function useFocusTrap(ref: React.RefObject<HTMLElement>, active: boolean) {
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;
    restoreRef.current = document.activeElement as HTMLElement | null;

    const focusables = getFocusable(el);
    (focusables[0] ?? el).focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      const items = getFocusable(el);
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    el.addEventListener("keydown", onKeyDown);
    return () => {
      el.removeEventListener("keydown", onKeyDown);
      restoreRef.current?.focus?.();
    };
  }, [active]);
}

function FocusGuard({ onFocus }: { onFocus: () => void }) {
  return (
    <span
      tabIndex={0}
      aria-hidden
      style={{
        position: "fixed",
        width: 1,
        height: 1,
        opacity: 0,
        overflow: "hidden",
      }}
      onFocus={onFocus}
    />
  );
}

export function PortalTarget<T extends ElementType = "div">({
  id,
  as,
  behavior = "free",
  zone = "global",
  children,
  ...props
}: {
  id: string;
  as?: T;
  behavior?: "free" | "modal";
  zone?: ModalZone;
  children?: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as">) {
  const ref = usePortalTarget(id);
  const Component = (as || "div") as ElementType;

  return (
    <Component ref={ref} {...props}>
      {behavior === "modal" ? (
        <ModalTargetBehavior id={id} zone={zone}>
          {children}
        </ModalTargetBehavior>
      ) : (
        children
      )}
    </Component>
  );
}

function ModalTargetBehavior({
  id,
  zone,
  children,
}: {
  id: string;
  zone: ModalZone;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    registerModal,
    unregisterModal,
    isTopModal,
    getModalZIndex,
    requestCloseTopModal,
  } = usePortalContext();

  const active = isTopModal(zone, id);
  const zIndex = getModalZIndex(zone, id);

  useFocusTrap(ref, active);

  useEffect(() => {
    if (!ref.current) return;

    registerModal(zone, {
      id,
      element: ref.current,
      restoreFocusTo: document.activeElement as HTMLElement | null,
    });

    return () => unregisterModal(zone, id);
  }, [id, zone]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && active) {
        requestCloseTopModal(zone);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active, zone]);

  const focusFirst = () => {
    const el = ref.current;
    if (!el) return;
    getFocusable(el)[0]?.focus();
  };

  const focusLast = () => {
    const el = ref.current;
    if (!el) return;
    getFocusable(el).at(-1)?.focus();
  };

  return (
    <>
      <FocusGuard onFocus={focusLast} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        style={{
          position: "relative",
          zIndex,
          pointerEvents: active ? "auto" : "none",
        }}
      >
        {children}
      </div>
      <FocusGuard onFocus={focusFirst} />
    </>
  );
}

export function Participate({
  target,
  when = true,
  children,
}: {
  target: string;
  when?: boolean;
  children: ReactNode;
}) {
  const { targets } = usePortalContext();
  const el = targets.get(target);

  if (!when || !el) return null;
  return createPortal(children, el);
}
```
