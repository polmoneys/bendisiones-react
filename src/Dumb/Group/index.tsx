import type { ReactNode, ElementType, CSSProperties } from "react";

import { clsx, has } from "../../utils";
import styles from "./index.module.css";

import type { Unit } from "../../interfaces";

export type GroupProps = {
  start?: ReactNode;
  startWidth?: Unit;
  end?: ReactNode;
  endWidth?: Unit;
  component?: ElementType;
  children?: ReactNode;
  gradient?: string | Unit;
  // dangerous="--end:calc(var(--slot-start) * 1.5);"
  dangerous?: CSSProperties;
  onSelect?: () => void;
};

export default function Group({
  start,
  end,
  component: Component = "div",
  // No need to wrap children with a div,
  // component does it to ensure line-clamp & ellipsis work
  children,
  dangerous,
  startWidth,
  endWidth,
  gradient,
}: GroupProps) {
  const sizes = {
    start: has(startWidth),
    end: has(endWidth),
    both: has(startWidth) && has(endWidth),
  };

  return (
    <Component
      className={clsx(
        styles.slot,
        has(start) && styles.hasStart,
        has(end) && styles.hasEnd,
      )}
      style={{
        ...dangerous,
        ...(has(gradient) && {
          backgroundImage: `linear-gradient(90deg,${gradient})`,
        }),
        ...(sizes.start && {
          "--start": startWidth,
        }),
        ...(sizes.end && {
          "--end": endWidth,
        }),
        ...(sizes.both && {
          "--start": startWidth,
          "--end": endWidth,
        }),
      }}
    >
      {has(start) && start}
      <div className={styles.main}> {has(children) && children}</div>
      {has(end) && end}
    </Component>
  );
}
