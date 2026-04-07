import {
  type ComponentProps,
  type CSSProperties,
  type ForwardedRef,
  forwardRef,
  type ReactNode,
} from "react";

import type { Mood } from "../../interfaces";
import { clsx, has } from "../../utils";
import Ring from "../Ring";

import styles from "./index.module.css";

export interface ButtonProps extends Omit<ComponentProps<"button">, "style"> {
  children: ReactNode;
  start?: ReactNode;
  end?: ReactNode;
  isIcon?: boolean;
  isText?: boolean;
  isActive?: boolean;
  isPending?: boolean;
  isChip?: boolean;
  mood?: Mood;
  stretch?: boolean;
  unset?: boolean;
  dangerous?: CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      start,
      end,
      isIcon = false,
      isText = false,
      isActive = false,
      stretch = false,
      unset = false,
      isPending,
      className,
      dangerous,
      mood = "neutral",
      ...buttonProps
    } = props;
    return (
      <Ring>
        <button
          disabled={isPending}
          {...(ref != null && { ref })}
          {...buttonProps}
          className={clsx(
            className,
            styles.button,
            isIcon && styles.icon,
            isText && styles.text,
            isActive && styles.active,
            isPending && styles.isPending,
            stretch && styles.stretch,
            has(start) && styles.start,
            has(end) && styles.end,
            unset && "unset",
            mood === "positive" && "positive",
            mood === "negative" && "negative",
          )}
          {...(has(dangerous) && { style: dangerous })}
        >
          {has(start) && start}
          <span className={styles.span}>{children}</span>
          {has(end) && end}
        </button>
      </Ring>
    );
  },
);

export default Button;
