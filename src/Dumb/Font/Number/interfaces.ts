import { type ReactNode } from "react";

type NumberValue = number | bigint;

export type NumberPreset = "money" | "compact" | "fixed";

type BaseProps = {
  value: NumberValue;
  locale?: string | string[];
  className?: string;
  fallback?: ReactNode;
  children?: (parts: Array<Intl.NumberFormatPart>) => ReactNode;
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
