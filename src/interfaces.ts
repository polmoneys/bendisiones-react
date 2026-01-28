import type { ReactElement, ReactNode } from "react";

export interface RenderProp<TChildrenProps, TElement = unknown> {
  (props: TChildrenProps): ReactElement<TElement>;
}
// type RenderProp<T> = (props: T) => ReactNode;

export type WithChildrenProp<T> = T & { children?: ReactNode };

export type LooseT<T extends string> = T | (string & {});

export type RequireAtLeastOne<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];

export type Mood = "neutral" | "positive" | "negative";

export type CssVar = `var(--${string})`;
export type CssVar2 = `${string | number} var(--${string})`;
export type CssVar3 = `${string | number} var(--${string}) ${string | number}`;

export type NumericVar = `${number} ${CssVar}`;
export type StringVar = `${number}${UnitSuffix} ${CssVar}`;
export type MinMax = `min(${string})` | `max(${string})`;
export type Calc = `calc(${string})`;
export type UnitSuffix = "em" | "rem" | "px" | "%" | "fr" | "vh" | "vw";
export type WithSuffix = `${string}${UnitSuffix}` & `${number}${UnitSuffix}`;

export type Unit =
  | 0
  | CssVar
  | CssVar2
  | CssVar3
  | NumericVar
  | StringVar
  | MinMax
  | Calc
  | WithSuffix
  | "start"
  | "center"
  | "end"
  | "fit-content"
  | "wrap";
