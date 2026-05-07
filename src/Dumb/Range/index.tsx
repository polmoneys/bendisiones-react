import { type ChangeEvent, useEffect, useState } from "react";

import { clampBoundary, newMaxOr } from "../../utilities/clamp";
import { repeatGradient } from "../../utilities/gradients";

import styles from "./index.module.css";

interface RangeStartEndProps {
  min: number;
  max: number;
  showRuler?: boolean;
  initialMin?: number;
  initialMax?: number;
  valueMin?: number;
  valueMax?: number;

  onChange?: (min: number, max: number) => void;
  id: string;
}

/*
  Controlled if both valueMin & valueMax are provided.
  Otherwise uncontrolled and uses initialMin/initialMax (or min/max fallbacks).
 */

export default function Range({
  min,
  max,
  initialMin,
  initialMax,
  valueMin,
  valueMax,
  onChange,
  id,
  showRuler = false,
}: RangeStartEndProps) {
  const isControlled = valueMin !== undefined && valueMax !== undefined;

  // internal state 4 uncontrolled
  const [internalMin, setInternalMin] = useState<number>(() =>
    clampBoundary(initialMin ?? min, min, max),
  );
  const [internalMax, setInternalMax] = useState<number>(() =>
    clampBoundary(initialMax ?? max, min, max),
  );

  // If parent changes initialMin/initialMax for uncontrolled mode, sync them silently (no onChange)
  useEffect(() => {
    if (isControlled) return;
    setInternalMin(clampBoundary(initialMin ?? min, min, max));
    setInternalMax(clampBoundary(initialMax ?? max, min, max));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMin, initialMax, min, max]); // sync inputs only

  const curMin = isControlled
    ? clampBoundary(valueMin as number, min, max)
    : internalMin;
  const curMax = isControlled
    ? clampBoundary(valueMax as number, min, max)
    : internalMax;

  function onChangeMin(event: ChangeEvent<HTMLInputElement>) {
    const raw = parseInt(event.target.value, 10);
    const newMin = Number.isNaN(raw) ? min : clampBoundary(raw, min, max);

    // ensure ordering: min < max; preserve max if needed
    const adjustedMin = newMin < curMax ? newMin : curMax;

    if (!isControlled) {
      setInternalMin(adjustedMin);
    }

    // emit the change to parent (parent will update controlled values if it uses controlled mode)
    onChange?.(adjustedMin, curMax);
  }

  function onChangeMax(event: ChangeEvent<HTMLInputElement>) {
    const raw = parseInt(event.target.value, 10);
    const newMax = Number.isNaN(raw)
      ? max
      : clampBoundary(newMaxOr(raw, min, max), min, max);

    // ensure ordering: max > min
    const adjustedMax = newMax > curMin ? newMax : curMin;

    if (!isControlled) {
      setInternalMax(adjustedMax);
    }

    onChange?.(curMin, adjustedMax);
  }

  const css: Record<string, string | number> = {
    "--minVal": curMin,
    "--maxVal": curMax,
    "--minLimit": min,
    "--maxLimit": max,
  };

  return (
    <>
      {showRuler ? (
        <div
          style={{
            height: "10px",
            background: repeatGradient(
              { start: "transparent", end: "currentColor" },
              "2%",
              "x",
            ),
          }}
        />
      ) : null}
      <div className={styles.range} style={css}>
        <input
          type="range"
          id={`${id}-min`}
          min={min}
          max={max}
          step={1}
          value={curMin}
          onChange={onChangeMin}
        />
        <input
          type="range"
          id={`${id}-max`}
          min={min}
          max={max}
          step={1}
          value={curMax}
          onChange={onChangeMax}
        />
      </div>
    </>
  );
}
