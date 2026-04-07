import {
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

// https://chatgpt.com/c/69bd06d1-8ac4-832d-9c27-219040807325

type Subscribe = (onStoreChange: () => void) => () => void;

export function createExternalStore<T>(options: {
  getSnapshot: () => T;
  subscribe: Subscribe;
  getServerSnapshot?: () => T;
}) {
  return function useStore(): T {
    return useSyncExternalStore(
      options.subscribe,
      options.getSnapshot,
      options.getServerSnapshot ?? options.getSnapshot,
    );
  };
}

/*


export function FavoriteButton() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const pressed = useAttributeStore(buttonRef, "aria-pressed", {
    defaultValue: false,
    parse: (value) => value === "true",
  });

  return (
    <div>
      <button
        ref={buttonRef}
        type="button"
        aria-pressed={pressed}
        onClick={(e) => {
          const el = e.currentTarget;
          const next = el.getAttribute("aria-pressed") !== "true";
          el.setAttribute("aria-pressed", String(next));
        }}
      >
        ★ Favorite
      </button>

      <p>{pressed ? "Saved to favorites." : "Not saved yet."}</p>
    </div>
  );
}


export function useAttributeStore<T = string | null>(
  ref: React.RefObject<Element | null>,
  attr: string,
  parse?: (value: string | null) => T,
) {
  return createElementStore(
    ref,
    (el, emit, set) => {
      const read = () => {
        const raw = el.getAttribute(attr);
        return parse ? parse(raw) : (raw as T);
      };

      set(read());

      const mo = new MutationObserver(() => {
        set(read());
        emit();
      });

      mo.observe(el, {
        attributes: true,
        attributeFilter: [attr],
      });

      return () => mo.disconnect();
    },
    null as T,
  )();
}

*/

export function useAttributeStore<T = string | null>(
  ref: RefObject<Element | null>,
  attr: string,
  {
    defaultValue = null as T,
    parse,
  }: {
    defaultValue?: T;
    parse?: (value: string | null) => T;
  } = {},
): T {
  const getSnapshot = useCallback(() => {
    const raw = ref.current?.getAttribute(attr) ?? null;
    return parse ? parse(raw) : ((raw ?? defaultValue) as T);
  }, [ref, attr, parse, defaultValue]);

  return useSyncExternalStore(
    useCallback(
      (onStoreChange) => {
        const el = ref.current;
        if (!el) return () => {};

        const observer = new MutationObserver(() => onStoreChange());
        observer.observe(el, {
          attributes: true,
          attributeFilter: [attr],
        });

        return () => observer.disconnect();
      },
      [ref, attr],
    ),
    getSnapshot,
    () => defaultValue,
  );
}

/*

export function ColorPickerListbox() {
  const listboxRef = useRef<HTMLDivElement | null>(null);
  const selected = useSelectedOption(listboxRef);

  const selectOption = (optionEl: HTMLElement) => {
    const listbox = listboxRef.current;
    if (!listbox) return;

    listbox.querySelectorAll<HTMLElement>('[role="option"]').forEach((el) => {
      el.setAttribute("aria-selected", "false");
    });

    optionEl.setAttribute("aria-selected", "true");
  };

  return (
    <div>
      <div
        ref={listboxRef}
        role="listbox"
        aria-label="Theme color"
        style={{ display: "grid", gap: 8 }}
      >
        {[
          ["Ocean", "Blue"],
          ["Forest", "Green"],
          ["Sunset", "Orange"],
        ].map(([label, swatch]) => (
          <div
            key={label}
            role="option"
            tabIndex={0}
            data-label={label}
            aria-selected={label === selected ? "true" : "false"}
            onClick={(e) => selectOption(e.currentTarget)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectOption(e.currentTarget);
              }
            }}
            style={{
              padding: 12,
              border: "1px solid currentColor",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            <strong>{label}</strong> <span>({swatch})</span>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 12 }}>
        Selected theme: <strong>{selected ?? "none"}</strong>
      </p>
    </div>
  );
}
*/

export function useSelectedOption(listboxRef: RefObject<HTMLElement | null>) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const el = listboxRef.current;
      if (!el) return () => {};

      const observer = new MutationObserver(onStoreChange);
      observer.observe(el, {
        subtree: true,
        attributes: true,
        attributeFilter: ["aria-selected"],
      });

      return () => observer.disconnect();
    },
    () => {
      const el = listboxRef.current;
      if (!el) return null;

      const selected = el.querySelector<HTMLElement>(
        '[role="option"][aria-selected="true"]',
      );
      return selected?.getAttribute("data-label") ?? null;
    },
    () => null,
  );
}

/*
function DropdownExample() {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const triggerSize = useElementSize(triggerRef);

  return (
    <div style={{ display: "grid", gap: 8, width: 280 }}>
      <button ref={triggerRef} type="button">
        Trigger
      </button>

      <div
        role="menu"
        style={{
          width: triggerSize.width,
          border: "1px solid",
          padding: 12,
        }}
      >
        Menu width follows the trigger
      </div>
    </div>
  );
}
*/

type ElementSize = {
  width: number;
  height: number;
  rect: DOMRectReadOnly;
};

const EMPTY_RECT: DOMRectReadOnly = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  toJSON() {},
};

const EMPTY_SIZE: ElementSize = {
  width: 0,
  height: 0,
  rect: EMPTY_RECT,
};

export function useElementSize(
  ref: RefObject<HTMLElement | null>,
): ElementSize {
  const storeRef = useRef<ElementSize>(EMPTY_SIZE);

  // 👇 track the actual element
  const [element, setElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current !== element) {
      setElement(ref.current);
    }
  });

  return useSyncExternalStore(
    useCallback(
      (onStoreChange) => {
        if (!element) return () => {};

        const ro = new ResizeObserver((entries) => {
          const entry = entries[0];
          if (!entry) return;

          const rect = entry.contentRect;

          const prev = storeRef.current;

          if (prev.width === rect.width && prev.height === rect.height) {
            return;
          }

          storeRef.current = {
            width: rect.width,
            height: rect.height,
            rect,
          };

          onStoreChange();
        });

        ro.observe(element);

        return () => ro.disconnect();
      },
      [element],
    ),
    () => storeRef.current,
    () => EMPTY_SIZE,
  );
}
