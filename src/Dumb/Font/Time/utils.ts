import type { TimePreset } from "./interfaces";

export const PRESETS = {
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

export function first(
  parts: Array<Intl.DateTimeFormatPart>,
  type: Intl.DateTimeFormatPartTypes,
): string | null {
  return parts.find((p) => p.type === type)?.value ?? null;
}

export function nth(
  parts: Array<Intl.DateTimeFormatPart>,
  type: Intl.DateTimeFormatPartTypes,
  index: number,
): string | null {
  let i = 0;

  for (const p of parts) {
    if (p.type !== type) continue;
    if (i === index) return p.value;
    i++;
  }

  return null;
}
