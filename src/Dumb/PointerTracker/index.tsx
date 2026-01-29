import { type ComponentProps, type ReactNode, useEffect, useRef } from "react";

import { createPortal } from "react-dom";

import { clsx, has } from "../../utils";

import styles from "./Tracker.module.css";

interface PointerTrackerProps extends ComponentProps<"div"> {
  children: ReactNode;
  offset?: { x: number; y: number };
  interactive?: boolean;
  container?: HTMLElement | null;
}

export default function PointerTracker({
  children,
  offset = { x: 0, y: 0 },
  interactive = false,
  container,
  className,
  style,
  ...rest
}: PointerTrackerProps) {
  const element = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const latestPos = useRef<{ x: number; y: number } | null>(null);

  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";

  useEffect(() => {
    if (!canUseDOM) return;

    function scheduleUpdate(x: number, y: number) {
      latestPos.current = { x: x + offset.x, y: y + offset.y };

      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          if (!element.current || !latestPos.current) return;

          const { x, y } = latestPos.current;
          element.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          element.current.style.visibility = "visible";
        });
      }
    }

    function onPointerMove(ev: PointerEvent) {
      scheduleUpdate(ev.clientX, ev.clientY);
    }

    function onPointerEnd() {
      if (element.current) {
        element.current.style.visibility = "hidden";
      }
    }

    if (window.PointerEvent) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerEnd);
      window.addEventListener("pointercancel", onPointerEnd);
      window.addEventListener("blur", onPointerEnd);
    } else {
      window.addEventListener("mousemove", (e) =>
        scheduleUpdate(e.clientX, e.clientY),
      );
      window.addEventListener("touchmove", (e) => {
        const t = e.touches[0];
        if (t) scheduleUpdate(t.clientX, t.clientY);
      });
      window.addEventListener("mouseup", onPointerEnd);
      window.addEventListener("touchend", onPointerEnd);
      window.addEventListener("blur", onPointerEnd);
    }

    return () => {
      if (window.PointerEvent) {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerEnd);
        window.removeEventListener("pointercancel", onPointerEnd);
        window.removeEventListener("blur", onPointerEnd);
      }

      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [offset.x, offset.y, canUseDOM]);

  if (!canUseDOM) return null;

  return createPortal(
    <div
      {...rest}
      ref={element}
      className={clsx(className, styles.root)}
      style={{
        ...(has(style) && style),
        pointerEvents: interactive ? "auto" : "none",
      }}
      aria-hidden={!interactive}
    >
      {children}
    </div>,
    container ?? document.body,
  );
}
