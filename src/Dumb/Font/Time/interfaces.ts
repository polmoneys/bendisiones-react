import type { ReactNode } from "react";

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

export type TimeFormatProps = {
  value: Date | number;
  locale?: string;
  preset?: TimePreset;
  options?: Intl.DateTimeFormatOptions;
  children?: (parts: Array<Intl.DateTimeFormatPart>) => ReactNode;
};
