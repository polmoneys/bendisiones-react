import type { NumberFormatProps } from "./interfaces";
import renderParts from "./Parts";
import { first, resolveOptions } from "./utils";

export function NumberFormat(props: NumberFormatProps) {
  const { value, locale, children, className, fallback } = props;

  let formatter: Intl.NumberFormat;
  try {
    formatter = new Intl.NumberFormat(locale, resolveOptions(props));
  } catch {
    return <>{fallback ?? null}</>;
  }

  let parts: Array<Intl.NumberFormatPart>;
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
  parts: Array<Intl.NumberFormatPart>;
  className?: string;
};

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
