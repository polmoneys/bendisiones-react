import { type ReactNode } from "react";

type NumberValue = number | bigint;

export type NumberPreset = "money" | "compact" | "fixed";

type BaseProps = {
  value: NumberValue;
  locale?: string | string[];
  className?: string;
  fallback?: ReactNode;
  children?: (parts: Intl.NumberFormatPart[]) => ReactNode;
  options?: Intl.NumberFormatOptions;
};

export type NumberFormatProps =
  | (BaseProps & {
      preset: "money";
      currency: string;
      currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"];
    })
  | (BaseProps & {
      preset: "compact";
      compactDisplay?: "short" | "long";
    })
  | (BaseProps & {
      preset: "fixed";
      digits?: number;
    })
  | (BaseProps & {
      preset?: undefined;
    });

function resolveOptions(props: NumberFormatProps): Intl.NumberFormatOptions {
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

export function NumberFormat(props: NumberFormatProps) {
  const { value, locale, children, className, fallback } = props;

  let formatter: Intl.NumberFormat;
  try {
    formatter = new Intl.NumberFormat(locale, resolveOptions(props));
  } catch {
    return <>{fallback ?? null}</>;
  }

  let parts: Intl.NumberFormatPart[];
  try {
    parts = formatter.formatToParts(value);
  } catch {
    return <>{fallback ?? null}</>;
  }

  if (children) {
    return <>{children(parts)}</>;
  }

  return <span className={className}>{formatter.format(value)}</span>;
}

type PartsProps = {
  parts: Intl.NumberFormatPart[];
  className?: string;
};

function renderParts(
  parts: Intl.NumberFormatPart[],
  className?: string,
  types?: Intl.NumberFormatPartTypes[],
) {
  const allowed = types ? new Set(types) : null;

  return parts
    .filter((part) => (allowed ? allowed.has(part.type) : true))
    .map((part, index) => (
      <span key={`${part.type}-${index}`} className={className}>
        {part.value}
      </span>
    ));
}

function first(
  parts: Intl.NumberFormatPart[],
  types: Intl.NumberFormatPartTypes | Intl.NumberFormatPartTypes[],
) {
  const list = Array.isArray(types) ? types : [types];
  return parts.find((part) => list.includes(part.type));
}

export function NumberParts({ parts, className }: PartsProps) {
  return <>{renderParts(parts, className)}</>;
}

export function CurrencySymbol({ parts, className }: PartsProps) {
  const part = first(parts, "currency");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function Sign({ parts, className }: PartsProps) {
  const part = first(parts, ["minusSign", "plusSign"]);
  return part ? <span className={className}>{part.value}</span> : null;
}

export function Integer({ parts, className }: PartsProps) {
  return <>{renderParts(parts, className, ["integer"])}</>;
}

export function GroupSeparator({ parts, className }: PartsProps) {
  return <>{renderParts(parts, className, ["group"])}</>;
}

export function DecimalSeparator({ parts, className }: PartsProps) {
  const part = first(parts, "decimal");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function Fraction({ parts, className }: PartsProps) {
  return <>{renderParts(parts, className, ["fraction"])}</>;
}

export function CompactSuffix({ parts, className }: PartsProps) {
  const part = first(parts, "compact");
  return part ? <span className={className}>{part.value}</span> : null;
}

export function WholeNumber({ parts, className }: PartsProps) {
  return (
    <>
      {renderParts(parts, className, [
        "minusSign",
        "plusSign",
        "integer",
        "group",
      ])}
    </>
  );
}

export function FixedDecimal({ parts, className }: PartsProps) {
  return (
    <>
      {renderParts(parts, className, [
        "minusSign",
        "plusSign",
        "integer",
        "group",
        "decimal",
        "fraction",
      ])}
    </>
  );
}
