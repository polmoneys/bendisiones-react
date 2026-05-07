Coming soon...

```tsx

// Basic modal
<ModalPortalTarget
  id="modal"
  lockScroll
  returnFocus
  style={{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }}
/>

// Modal with escape key handling
<ModalPortalTarget
  id="dialog"
  closeOnEscape
  onEscape={() => setModalOpen(false)}
  initialFocus="first"
/>

// iOS-optimized modal
<ModalPortalTarget
  id="mobile-modal"
  lockScroll
  preventBackgroundScroll
  style={{
    position: "fixed",
    inset: 0,
    overflow: "auto",
    WebkitOverflowScrolling: "touch", // iOS momentum scrolling
  }}
/>

export function getFocusable(container: HTMLElement): HTMLElement[] {
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
  ).filter((el) => {
    // Additional visibility checks
    return (
      el.offsetParent !== null && // Element is visible
      !el.hasAttribute("hidden") &&
      !el.hasAttribute("inert")
    );
  });
}


import { useEffect, useRef } from "react";
import { getFocusable } from "../utils/focus";

export function useFocusTrap(
  ref: React.RefObject<HTMLElement>,
  active: boolean,
  options: {
    returnFocus?: boolean;
    initialFocus?: "first" | "container" | HTMLElement;
  } = {},
) {
  const { returnFocus = true, initialFocus = "first" } = options;
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;

    // Store the currently focused element
    restoreRef.current = document.activeElement as HTMLElement | null;

    // Set initial focus
    const focusables = getFocusable(el);
    const elementToFocus =
      initialFocus === "container"
        ? el
        : initialFocus instanceof HTMLElement
          ? initialFocus
          : focusables[0] ?? el;

    // Use setTimeout to ensure the element is ready for focus
    const focusTimeout = setTimeout(() => {
      elementToFocus.focus();
    }, 0);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      const items = getFocusable(el);
      if (!items.length) {
        // If no focusable elements, prevent tab from leaving container
        e.preventDefault();
        return;
      }

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
      clearTimeout(focusTimeout);
      el.removeEventListener("keydown", onKeyDown);

      if (returnFocus && restoreRef.current?.focus) {
        // Use setTimeout to avoid focus conflicts during unmounting
        setTimeout(() => {
          restoreRef.current?.focus();
        }, 0);
      }
    };
  }, [active, initialFocus, returnFocus]);
}


import { useEffect } from "react";

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Store original values
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const originalPosition = document.body.style.position;

    // iOS Safari fix: prevent background scrolling
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const scrollY = window.scrollY;

    if (isIOS) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      if (isIOS) {
        document.body.style.position = originalPosition;
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      }
    };
  }, [active]);
}


import { useEffect } from "react";

export function useEscapeKey(
  active: boolean,
  onEscape: () => void,
) {
  useEffect(() => {
    if (!active) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onEscape();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active, onEscape]);
}

import { useRef, useEffect } from "react";
import type { ElementType } from "react";
import type { PortalTargetProps } from "./interfaces";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useScrollLock } from "../hooks/useScrollLock";
import { useEscapeKey } from "../hooks/useEscapeKey";

export interface ModalPortalTargetProps {
  lockScroll?: boolean;
  returnFocus?: boolean;
  closeOnEscape?: boolean;
  onEscape?: () => void;
  initialFocus?: "first" | "container" | HTMLElement;
  // iOS specific
  preventBackgroundScroll?: boolean;
}

export function ModalPortalTarget<T extends ElementType = "div">({
  id,
  children,
  as,
  lockScroll = true,
  returnFocus = true,
  closeOnEscape = false,
  onEscape,
  initialFocus = "first",
  preventBackgroundScroll = true,
  ...props
}: PortalTargetProps<T> &
  ModalPortalTargetProps &
  Omit
    React.ComponentPropsWithoutRef<T>,
    keyof (PortalTargetProps<T> & ModalPortalTargetProps)
  >) {
  const ref = useRef<HTMLElement>(null);
  const setElement = usePortalTarget(id);
  const { targets } = usePortalContext();

  // Check if modal has content
  const hasContent = targets.get(id)?.childElementCount ?? 0 > 0;

  // Combine refs
  useEffect(() => {
    if (ref.current) {
      setElement(ref.current);
    }
  }, [setElement]);

  // Apply hooks
  useFocusTrap(ref, hasContent, { returnFocus, initialFocus });
  useScrollLock(lockScroll && preventBackgroundScroll && hasContent);
  useEscapeKey(
    closeOnEscape && hasContent,
    onEscape ?? (() => {}),
  );

  const Component = (as || "div") as ElementType;

  return (
    <Component
      ref={ref}
      role="dialog"
      aria-modal="true"
      inert={!hasContent ? "" : undefined} // Prevent interaction when empty
      {...props}
    >
      {/* iOS Focus Guards - prevent focus from escaping on iOS */}
      {hasContent && (
        <>
          <div
            tabIndex={0}
            aria-hidden="true"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "1px",
              height: 0,
              overflow: "hidden",
            }}
            onFocus={(e) => {
              // When top guard receives focus, move to last focusable in modal
              const focusables = getFocusable(ref.current!);
              if (focusables.length > 0) {
                focusables[focusables.length - 1].focus();
              }
            }}
          />
        </>
      )}

      {children}

      {hasContent && (
        <>
          <div
            tabIndex={0}
            aria-hidden="true"
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "1px",
              height: 0,
              overflow: "hidden",
            }}
            onFocus={(e) => {
              // When bottom guard receives focus, move to first focusable in modal
              const focusables = getFocusable(ref.current!);
              if (focusables.length > 0) {
                focusables[0].focus();
              }
            }}
          />
        </>
      )}
    </Component>
  );
}


import { getFocusable } from "../utils/focus";
import { usePortalContext } from "./PortalParticipationProvider";

function usePortalTarget(targetId: string) {
  const { registerTarget, unregisterTarget } = usePortalContext();
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (element) {
      registerTarget(targetId, element);
      return () => unregisterTarget(targetId);
    }
  }, [targetId, element, registerTarget, unregisterTarget]);

  return setElement;
}

```
