import { type ReactNode } from "react";

/*

<NumberFormat value={1234.56} preset="money" currency="EUR">
  {(parts) => (
    <span>
      <CurrencySymbol parts={parts} />
      <Integer parts={parts} />
      <DecimalSeparator parts={parts} />
      <Fraction parts={parts} />
    </span>
  )}
</NumberFormat>

<NumberFormat value={1534000} preset="amount">
  {(parts) => (
    <span>
      <Integer parts={parts} />
      <CompactSuffix parts={parts} />
    </span>
  )}
</NumberFormat>

*/

type NumberValue = number | bigint;

export type NumberPreset =
  | "money"
  | "amount"
  | "preciseAmount"
  | "doubleDecimal";

type BaseProps = {
  value: NumberValue;
  locale?: string | string[];
  className?: string;
  fallback?: ReactNode;
  children?: (parts: Intl.NumberFormatPart[]) => ReactNode;
};

export type NumberFormatProps =
  | (BaseProps & { preset: "money"; currency: string })
  | (BaseProps & { preset: "amount" })
  | (BaseProps & { preset: "preciseAmount" })
  | (BaseProps & { preset: "doubleDecimal" })
  | (BaseProps & { preset?: undefined; options?: Intl.NumberFormatOptions });

function resolveOptions(props: NumberFormatProps): Intl.NumberFormatOptions {
  switch (props.preset) {
    case "money":
      return {
        style: "currency",
        currency: props.currency,
      };
    case "amount":
      return {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 1,
      };
    case "preciseAmount":
      return {
        notation: "compact",
        compactDisplay: "long",
        maximumFractionDigits: 2,
      };
    case "doubleDecimal":
      return {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };
    default:
      return props.options ?? {};
  }
}

export function NumberFormat(props: NumberFormatProps) {
  const { value, locale, children, className } = props;

  const formatter = new Intl.NumberFormat(locale, resolveOptions(props));
  const parts = formatter.formatToParts(value);
  if (children) {
    return <>{children(parts)}</>;
  }
  return <span className={className}>{formatter.format(value)}</span>;
}

function pick(
  parts: Intl.NumberFormatPart[],
  type: Intl.NumberFormatPartTypes,
) {
  return parts.filter((p) => p.type === type);
}

function first(
  parts: Intl.NumberFormatPart[],
  type: Intl.NumberFormatPartTypes,
) {
  return parts.find((p) => p.type === type);
}

type PartsProps = {
  parts: Intl.NumberFormatPart[];
  className?: string;
};

export function CurrencySymbol({ parts, className }: PartsProps) {
  const part = first(parts, "currency");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function Integer({ parts, className }: PartsProps) {
  const values = pick(parts, "integer")
    .map((p) => p.value)
    .join("");
  return <span className={className}>{values}</span>;
}

export function Fraction({ parts, className }: PartsProps) {
  const values = pick(parts, "fraction")
    .map((p) => p.value)
    .join("");
  return values ? <span className={className}>{values}</span> : null;
}

export function DecimalSeparator({ parts, className }: PartsProps) {
  const part = first(parts, "decimal");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function GroupSeparator({ parts, className }: PartsProps) {
  const groups = pick(parts, "group");
  return (
    <>
      {groups.map((g, i) => (
        <span key={i} className={className}>
          {g.value}
        </span>
      ))}
    </>
  );
}

export function CompactSuffix({ parts, className }: PartsProps) {
  const part = first(parts, "compact");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function Sign({ parts, className }: PartsProps) {
  const part = first(parts, "minusSign") || first(parts, "plusSign");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function DoubleDecimal({ parts, className }: PartsProps) {
  return (
    <span className={className}>
      <Integer parts={parts} />
      <DecimalSeparator parts={parts} />
      <Fraction parts={parts} />
    </span>
  );
}
