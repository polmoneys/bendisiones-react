import dayjs, { type ConfigType, Dayjs, type OpUnitType } from "dayjs";
import type { ReactNode } from "react";

/*

<Dateish
  content="Released"
  altContent="Not released"
  date="2024-06-01T23:59"
  compareTo="2024-06-01T00:00"
  operator="same"
/>

<Dateish
  content="Expired"
  altContent="Valid"
  date="2024-06-02"
  compareTo="2024-06-01"
  operator="after"
  inclusive={false}
/>

<Dateish
  content="Event live"
  altContent="Event inactive"
  date="2024-06-15"
  from="2024-06-10"
  to="2024-06-20"
  operator="between"
/>

<Dateish
  content="Office open"
  altContent="Office closed"
  date={Date.now()}
  from="2024-06-01T09:00"
  to="2024-06-01T17:00"
  operator="between"
  unit="minute"
  inclusive={false}
/>

*/

type DateishOperator =
  | "before"
  | "after"
  | "same"
  | "sameOrBefore"
  | "sameOrAfter"
  | "between";

type BaseArgs = {
  date: ConfigType;
  unit?: OpUnitType;
  inclusive?: boolean;
};

type CompareArgs = BaseArgs & {
  operator: Exclude<DateishOperator, "between">;
  compareTo: ConfigType | "now";
};

type RangeArgs = BaseArgs & {
  operator: "between";
  from: ConfigType;
  to: ConfigType;
};

type UseDateishArgs = CompareArgs | RangeArgs;

type CompareFn = (
  a: Dayjs,
  b: Dayjs,
  unit: OpUnitType,
  inclusive: boolean,
) => boolean;

type RangeFn = (
  a: Dayjs,
  from: Dayjs,
  to: Dayjs,
  unit: OpUnitType,
  inclusive: boolean,
) => boolean;

const operatorMap = {
  before: ((a, b, unit, inclusive) =>
    inclusive
      ? a.isSame(b, unit) || a.isBefore(b, unit)
      : a.isBefore(b, unit)) as CompareFn,

  after: ((a, b, unit, inclusive) =>
    inclusive
      ? a.isSame(b, unit) || a.isAfter(b, unit)
      : a.isAfter(b, unit)) as CompareFn,

  same: ((a, b, unit) => a.isSame(b, unit)) as CompareFn,

  sameOrBefore: ((a, b, unit) =>
    a.isSame(b, unit) || a.isBefore(b, unit)) as CompareFn,

  sameOrAfter: ((a, b, unit) =>
    a.isSame(b, unit) || a.isAfter(b, unit)) as CompareFn,

  between: ((a, from, to, unit, inclusive) =>
    inclusive
      ? (a.isSame(from, unit) || a.isAfter(from, unit)) &&
        (a.isSame(to, unit) || a.isBefore(to, unit))
      : a.isAfter(from, unit) && a.isBefore(to, unit)) as RangeFn,
} as const;

// eslint-disable-next-line react-refresh/only-export-components
export function useDateish(args: UseDateishArgs): boolean {
  const { unit = "day", inclusive = true } = args;

  const a = dayjs(args.date);

  if (args.operator === "between") {
    const from = dayjs(args.from);
    const to = dayjs(args.to);

    return operatorMap.between(a, from, to, unit, inclusive);
  }

  const b = args.compareTo === "now" ? dayjs() : dayjs(args.compareTo);

  return operatorMap[args.operator](a, b, unit, inclusive);
}

type DateishProps = UseDateishArgs & {
  content: ReactNode;
  altContent?: ReactNode;
};

export default function Dateish(props: DateishProps) {
  const show = useDateish(props);
  return <>{show ? props.content : (props.altContent ?? null)}</>;
}
