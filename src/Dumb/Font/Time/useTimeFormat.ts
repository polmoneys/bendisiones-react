import type { TimeFormatProps } from "./interfaces";
import { PRESETS } from "./utils";

export default function useTimeFormat({
  value,
  locale = "en-US",
  preset = "time",
  options,
}: TimeFormatProps) {
  const date = typeof value === "number" ? new Date(value) : value;
  const formatter = new Intl.DateTimeFormat(locale, options ?? PRESETS[preset]);
  const parts = formatter.formatToParts(date);

  return {
    parts,
    text: formatter.format(date),
  };
}
