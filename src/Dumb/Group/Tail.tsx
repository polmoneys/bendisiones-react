import type { CSSProperties, ReactNode } from "react";

import styles from "./Tail.module.css";

function getTailGridColumn(index: number, tailCount: number, cols = 12) {
  if (tailCount <= 0) return undefined;

  const safeTailCount = Math.min(tailCount, cols);
  const safeIndex = Math.min(index, safeTailCount - 1);

  const start = cols - safeTailCount + safeIndex + 1;

  return `${start} / span 1`;
}

type TailGroupProps = {
  primary: ReactNode;
  tail?: ReactNode[];
  cols?: number;
  minWidthSlot?: number | string;
};

export default function TailGroup({
  primary,
  tail = [],
  cols,
  minWidthSlot = 60,
}: TailGroupProps) {
  const tailCount = tail.length;
  console.log({ tailCount });
  return (
    <div
      className={styles.container}
      style={
        {
          ...(cols !== undefined && { "--cols": cols }),
          "--tail-count": tailCount,
          "--min-width-slot":
            typeof minWidthSlot === "number"
              ? `${minWidthSlot}px`
              : minWidthSlot,
        } as CSSProperties
      }
    >
      <div className={styles.primary}>{primary}</div>

      {tail.map((node, index) => {
        const gridColumn = getTailGridColumn(index, tailCount, cols);

        return (
          <div key={index} className={styles.slot} style={{ gridColumn }}>
            {node}
          </div>
        );
      })}
    </div>
  );
}
