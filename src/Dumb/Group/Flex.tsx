import { type ComponentProps, type ElementType, type ReactNode } from "react";

import { clsx } from "../../utils";

import styles from "./index.module.css";

interface RowProps extends ComponentProps<"div"> {
  disabled?: boolean;
  component?: ElementType;
  children: ReactNode;
  wrap?: boolean;
}

export function Row({
  children,
  className,
  component: Component = "div",
  wrap = false,
  ...rest
}: RowProps) {
  return (
    <Component
      {...rest}
      className={clsx(className, styles.row, wrap && styles.wrap)}
    >
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
    <Component {...rest} className={clsx(className, styles.col)}>
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
    <Component {...rest} className={clsx(className, styles.colROW)}>
      {children}
    </Component>
  );
}
