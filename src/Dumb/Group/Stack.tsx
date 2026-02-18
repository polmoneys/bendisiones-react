import type { ComponentProps, ReactNode } from "react";

import { clsx } from "../../utils";

import styles from "./index.module.css";

// Should we useAnchor ?

interface Props extends ComponentProps<"div"> {
  children: ReactNode;
  over: ReactNode;
  isInput?: boolean;
}

export default function Stack(props: Props) {
  const { children, over, className, isInput = false, ...rest } = props;

  return (
    <div
      className={clsx(styles.stack, isInput && styles.input, className)}
      {...rest}
    >
      {over}
      {children}
    </div>
  );
}
