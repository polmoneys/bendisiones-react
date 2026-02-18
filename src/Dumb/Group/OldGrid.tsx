import {
  type AriaAttributes,
  type ElementType,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import type { Unit } from "../../interfaces";
import { clsx } from "../../utils";

import styles from "./index.module.css";

interface GridProps extends AriaAttributes {
  children: ReactNode;
  component?: ElementType;
  className?: string;
  gap?: Unit;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  dangerous?: Record<string, string | number>;
}

const Grid = (props: GridProps) => {
  const { className, component: Component = "div", ...rest } = props;
  return (
    <Component {...rest} className={clsx(className, styles["old-grid"])} />
  );
};

Grid.Item = (props: GridProps & { span?: 2 | 3 | 4 | 6 | 12 }) => {
  const { className, component: Component = "div", span = 4, ...rest } = props;
  return (
    <Component
      {...rest}
      className={clsx(className, styles["old-grid-item"], styles[`_${span}`])}
    />
  );
};

export default Grid;
