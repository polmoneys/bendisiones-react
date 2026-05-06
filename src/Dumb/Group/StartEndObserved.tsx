import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { toArray } from "../../utilities/collections";
import { toCssSize } from "../../utilities/imperativeStyles";

import type { StartEnd } from "./StartEnd";

import styles from "./StartEndObserved.module.css";

/*

<StartEndObserved
  startObserved={<Shape.Circle size={30} />}
  endObserved={[<Button key="1">Clear</Button>, <Button key="2">More</Button>]}
><TextInputUncontrolled /></StartEndObserved>

*/

interface StartEndProps {
  children: ReactNode;
  startObserved?: StartEnd;
  endObserved?: StartEnd;
  gap?: number | string;
}

export default function StartEndObserved({
  children,
  startObserved,
  endObserved,
  gap = 8,
}: StartEndProps) {
  const startObservedItems = toArray(startObserved);
  const endObservedItems = toArray(endObserved);

  const startObservedRef = useRef<HTMLDivElement | null>(null);
  const endObservedRef = useRef<HTMLDivElement | null>(null);

  const [startObservedWidth, setHeadWidth] = useState(0);
  const [endObservedWidth, setTailWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      setHeadWidth(
        startObservedRef.current?.getBoundingClientRect().width ?? 0,
      );
      setTailWidth(endObservedRef.current?.getBoundingClientRect().width ?? 0);
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => measure());

    if (startObservedRef.current) observer.observe(startObservedRef.current);
    if (endObservedRef.current) observer.observe(endObservedRef.current);

    return () => observer.disconnect();
  }, [startObservedItems.length, endObservedItems.length]);

  return (
    <div
      className={styles.container}
      style={
        {
          "--gapObserved": toCssSize(gap),
          "--startObserved-padding": `${startObservedWidth}px`,
          "--endObserved-padding": `${endObservedWidth}px`,
        } as CSSProperties
      }
    >
      <div className={styles.primary}>{children}</div>

      {startObservedItems.length > 0 && (
        <div ref={startObservedRef} className={styles.startObserved}>
          {startObservedItems.map((node, index) => (
            <div key={index} className={styles.item}>
              {node}
            </div>
          ))}
        </div>
      )}

      {endObservedItems.length > 0 && (
        <div ref={endObservedRef} className={styles.endObserved}>
          {endObservedItems.map((node, index) => (
            <div key={index} className={styles.item}>
              {node}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
