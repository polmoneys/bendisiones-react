import { first, nth } from "./utils";

type PartProps = {
  parts: Array<Intl.DateTimeFormatPart>;
  className?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export function createPart(
  type: Exclude<Intl.DateTimeFormatPartTypes, "literal">,
) {
  return function Part({ parts, className }: PartProps) {
    const value = first(parts, type);
    if (value == null) return null;

    return <span className={className}>{value}</span>;
  };
}

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
