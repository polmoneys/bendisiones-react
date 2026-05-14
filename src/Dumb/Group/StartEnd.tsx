import type { CSSProperties, ReactNode } from "react";

import { toArray } from "../../utilities/collections";
import { toCssSize } from "../../utilities/imperativeStyles";

import styles from "./StartEnd.module.css";

/*

<StartEnd
  start={<Shape.Circle size={30} />}
  end={[<Shape.Square size={40} />, <Shape.Triangle size={40} />]}
>
  <TextInputUncontrolled />
</StartEnd>

*/

export type StartEnd = ReactNode | Array<ReactNode>;

interface StartEndProps {
  children: ReactNode;
  start?: StartEnd;
  end?: StartEnd;
  slotSize?: number | string;
  gap?: number | string;
}

function reserveSpace(
  count: number,
  slotSize: number | string,
  gap: number | string,
) {
  if (count <= 0) return "0px";

  const slot =
    typeof slotSize === "number" ? slotSize : Number.parseFloat(slotSize);
  const spacing = typeof gap === "number" ? gap : Number.parseFloat(gap);

  const total = count * slot + (count - 1) * spacing;
  return `${total}px`;
}

export default function StartEnd({
  children,
  start,
  end,
  slotSize = 44,
  gap = 2,
}: StartEndProps) {
  const startItems = toArray<StartEnd>(start);
  const endItems = toArray<StartEnd>(end);

  const startPadding = reserveSpace(startItems.length, slotSize, gap);
  const endPadding = reserveSpace(endItems.length, slotSize, gap);

  return (
    <div
      className={styles.container}
      style={
        {
          "--slot-size": toCssSize(slotSize),
          "--gap": toCssSize(gap),
          "--start-padding": startPadding,
          "--end-padding": endPadding,
        } as CSSProperties
      }
    >
      <div className={styles.primary}>{children}</div>

      {startItems.length > 0 && (
        <div className={styles.start}>
          {startItems.map((node, index) => (
            <div key={index} className={styles.affixItem}>
              {node}
            </div>
          ))}
        </div>
      )}

      {endItems.length > 0 && (
        <div className={styles.end}>
          {endItems.map((node, index) => (
            <div key={index} className={styles.affixItem}>
              {node}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
