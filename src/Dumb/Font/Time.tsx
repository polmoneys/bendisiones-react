import type { ReactNode } from "react";

import { first, nth, toDate } from "../../utilities/intl";

export type TimePreset =
  | "time"
  | "time12"
  | "date"
  | "dateShort"
  | "dateLong"
  | "dateSlashes"
  | "monthYear"
  | "weekday"
  | "weekdayShort"
  | "dateWithWeekday";

type TimeFormatProps = {
  value: Date | number;
  locale?: string;
  preset?: TimePreset;
  options?: Intl.DateTimeFormatOptions;
  children?: (parts: Array<Intl.DateTimeFormatPart>) => ReactNode;
};

const PRESETS = {
  time: { hour: "2-digit", minute: "2-digit" },
  time12: { hour: "numeric", minute: "2-digit", hour12: true },
  date: { year: "numeric", month: "short", day: "numeric" },
  dateShort: {
    month: "short",
    day: "numeric",
  },
  dateLong: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  dateSlashes: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
  monthYear: {
    year: "numeric",
    month: "long",
  },
  dateWithWeekday: {
    weekday: "long",
    month: "long",
    day: "numeric",
  },
  weekday: { weekday: "long" },
  weekdayShort: {
    weekday: "short",
  },
} satisfies Record<TimePreset, Intl.DateTimeFormatOptions>;

// eslint-disable-next-line react-refresh/only-export-components
export function useTimeFormat({
  value,
  locale = "en-US",
  preset = "time",
  options,
}: TimeFormatProps) {
  const date = toDate(value);
  const formatter = new Intl.DateTimeFormat(locale, options ?? PRESETS[preset]);
  const parts = formatter.formatToParts(date);

  return {
    parts,
    text: formatter.format(date),
  };
}

export default function TimeFormat({ children, ...props }: TimeFormatProps) {
  const { parts, text } = useTimeFormat(props);

  return <>{children ? children(parts) : text}</>;
}

type PartProps = {
  parts: Array<Intl.DateTimeFormatPart>;
  className?: string;
};

function createPart(type: Exclude<Intl.DateTimeFormatPartTypes, "literal">) {
  return function Part({ parts, className }: PartProps) {
    const value = first(parts, type);
    if (value == null) return null;

    return <span className={className}>{value}</span>;
  };
}

export const Hour = createPart("hour");
export const Minute = createPart("minute");
export const Second = createPart("second");
export const DayPeriod = createPart("dayPeriod");
export const Weekday = createPart("weekday");
export const Month = createPart("month");
export const Day = createPart("day");
export const Year = createPart("year");

type LiteralProps = {
  parts: Array<Intl.DateTimeFormatPart>;
  index?: number;
  className?: string;
};

export const Literal = ({ parts, index = 0, className }: LiteralProps) => {
  const value = nth(parts, "literal", index);
  if (value == null) return null;

  return <span className={className}>{value}</span>;
};
