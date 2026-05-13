import type { ReactNode } from "react";

import { first, formatRelative, nth, toDate } from "../../utilities/intl";

export type TimePreset =
  | "time"
  | "time12"
  | "date"
  | "datetime"
  | "weekday"
  | "relative";

type BaseProps = {
  value: Date | number;
  locale?: string;
};

type FormatProps = BaseProps & {
  preset?: Exclude<TimePreset, "relative">;
  options?: Intl.DateTimeFormatOptions;
  children?: (parts: Array<Intl.DateTimeFormatPart>) => ReactNode;

  unit?: never;
  rounding?: never;
};

type RelativeProps = BaseProps & {
  preset: "relative";
  unit?: Intl.RelativeTimeFormatUnit;
  rounding?: "round" | "floor" | "ceil";
};

export type TimeFormatProps = FormatProps | RelativeProps;

type DatePartsProps = {
  parts: Array<Intl.DateTimeFormatPart>;
};

type DatePartsIndexProps = DatePartsProps & {
  index?: number;
};

type TimeFormatState =
  | {
      kind: "relative";
      text: string;
    }
  | {
      kind: "format";
      parts: Array<Intl.DateTimeFormatPart>;
      text: string;
    };

// eslint-disable-next-line react-refresh/only-export-components
export function useTimeFormat(props: TimeFormatProps): TimeFormatState {
  const locale = props.locale ?? "en-US";

  if (props.preset === "relative") {
    const date = toDate(props.value);
    return {
      kind: "relative",
      text: formatRelative(date, locale, props.unit ?? "day", props.rounding),
    };
  }

  const date = toDate(props.value);

  const presets: Record<
    Exclude<TimePreset, "relative">,
    Intl.DateTimeFormatOptions
  > = {
    time: { hour: "2-digit", minute: "2-digit" },
    time12: { hour: "numeric", minute: "2-digit", hour12: true },
    date: { year: "numeric", month: "short", day: "numeric" },
    datetime: {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
    weekday: { weekday: "long" },
  };

  const formatter = new Intl.DateTimeFormat(
    locale,
    props.options ?? presets[props.preset ?? "time"],
  );

  const parts = formatter.formatToParts(date);

  return {
    kind: "format",
    parts,
    text: formatter.format(date),
  };
}

export default function TimeFormat(props: TimeFormatProps) {
  const state = useTimeFormat(props);

  if (state.kind === "relative") {
    return <>{state.text}</>;
  }

  if ("children" in props && props.children) {
    return <>{props.children(state.parts)}</>;
  }

  return <>{state.text}</>;
}

// part factory
function createPart(type: Exclude<Intl.DateTimeFormatPartTypes, "literal">) {
  return function Part({ parts }: DatePartsProps) {
    return <>{first(parts, type)}</>;
  };
}

// primitives
export const Hour = createPart("hour");
export const Minute = createPart("minute");
export const Second = createPart("second");
export const DayPeriod = createPart("dayPeriod");
export const Weekday = createPart("weekday");
export const Month = createPart("month");
export const Day = createPart("day");
export const Year = createPart("year");

export const Literal = ({ parts, index = 0 }: DatePartsIndexProps) => {
  const val = nth(parts, "literal", index);
  return val === null ? null : <>{val}</>;
};
