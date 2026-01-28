import { parseDate } from "@internationalized/date";
import type { ReactNode } from "react";

import DatePick from ".";

interface RangeProps {
  children?: ReactNode;
  oldestInceptionDate: string | null;
  start: string;
  end: string;
  setStart: (value: string) => void;
  setEnd: (value: string) => void;
}
export default function Range({
  oldestInceptionDate,
  start,
  end,
  setStart,
  setEnd,
  children,
}: RangeProps) {
  if (oldestInceptionDate === null) return null;
  return (
    <>
      <div
        style={{
          gap: "var(--gap-2)",
          gridTemplateColumns: "1f 1fr",
        }}
      >
        <DatePick
          label="Start"
          minValue={parseDate(oldestInceptionDate)}
          value={parseDate(start)}
          maxValue={parseDate(end)}
          onChange={(value) => {
            if (!value) return;
            setStart(value.toString());
          }}
        />
        <DatePick
          label="Test label"
          minValue={parseDate(start)}
          value={parseDate(end)}
          onChange={(value) => {
            if (!value) return;
            setEnd(value.toString());
          }}
        />
      </div>
      {children ?? null}
    </>
  );
}
