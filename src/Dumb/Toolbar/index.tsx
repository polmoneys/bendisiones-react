import type { CSSProperties, ReactNode } from "react";

import { Toolbar as ToolbarReactAria } from "react-aria-components";
import { clsx, has } from "../../utils";
import styles from "./index.module.css";

export interface ToolBarProps {
  children: ReactNode;
  label: string;
  className?: string;
}

export default function ToolBar(
  props: ToolBarProps & {
    orientation?: "vertical" | "horizontal";
    dangerous?: CSSProperties;
    className?: string;
  },
) {
  const {
    label,
    children,
    orientation = "horizontal",
    className,
    dangerous,
  } = props;
  return (
    <ToolbarReactAria
      orientation={orientation}
      aria-label={label}
      className={({ orientation }) =>
        clsx(styles.root, orientation === "vertical" && styles.col, className)
      }
      {...(has(dangerous) && { style: dangerous })}
    >
      {children}
    </ToolbarReactAria>
  );
}
