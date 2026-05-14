import type { NumberFormatProps } from "./interfaces";

export function resolveOptions(
  props: NumberFormatProps,
): Intl.NumberFormatOptions {
  switch (props.preset) {
    case "money":
      return {
        style: "currency",
        currency: props.currency,
        currencyDisplay: props.currencyDisplay,
        ...props.options,
      };

    case "compact":
      return {
        notation: "compact",
        compactDisplay: props.compactDisplay ?? "short",
        maximumFractionDigits: 1,
        ...props.options,
      };

    case "fixed": {
      const digits = props.digits ?? 2;
      return {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
        ...props.options,
      };
    }

    default:
      return props.options ?? {};
  }
}

export function first(
  parts: Array<Intl.NumberFormatPart>,
  types: Intl.NumberFormatPartTypes | Array<Intl.NumberFormatPartTypes>,
) {
  const list = Array.isArray(types) ? types : [types];
  return parts.find((part) => list.includes(part.type));
}
