import type { TimeFormatProps } from "./interfaces";
import { createPart } from "./Parts";
import useTimeFormat from "./useTimeFormat";

export default function TimeFormat({ children, ...props }: TimeFormatProps) {
  const { parts, text } = useTimeFormat(props);

  return <>{children ? children(parts) : text}</>;
}

export const Hour = createPart("hour");
export const Minute = createPart("minute");
export const Second = createPart("second");
export const DayPeriod = createPart("dayPeriod");
export const Weekday = createPart("weekday");
export const Month = createPart("month");
export const Day = createPart("day");
export const Year = createPart("year");
