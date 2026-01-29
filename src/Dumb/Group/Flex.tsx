import { type ComponentProps, type ElementType, type ReactNode } from "react";

import { clsx } from "../../utils";

interface RowProps extends ComponentProps<"div"> {
  disabled?: boolean;
  component?: ElementType;
  children: ReactNode;
}

export function Row({
  children,
  className,
  component: Component = "div",
  ...rest
}: RowProps) {
  return (
    <Component {...rest} className={clsx(className, "row")}>
      {children}
    </Component>
  );
}

export function Col({
  children,
  className,
  component: Component = "div",
  ...rest
}: RowProps) {
  return (
    <Component {...rest} className={clsx(className, "col")}>
      {children}
    </Component>
  );
}

export function ColRow({
  children,
  className,
  component: Component = "div",
  ...rest
}: RowProps) {
  return (
    <Component {...rest} className={clsx(className, "ColRow")}>
      {children}
    </Component>
  );
}
