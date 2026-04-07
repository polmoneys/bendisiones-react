import { type ComponentProps, type ForwardedRef, forwardRef } from "react";

import { clsx } from "../../utils";
import Ring from "../Ring";

import styles from "./index.module.css";

const TextInputUncontrolled = forwardRef<
  HTMLInputElement,
  ComponentProps<"input">
>((props: ComponentProps<"input">, ref: ForwardedRef<HTMLInputElement>) => {
  const { id, className, ...rest } = props;

  return (
    <Ring isTextInput>
      <input
        {...rest}
        className={clsx(styles.textInput, className)}
        id={id}
        name={id}
        type="text"
        {...(ref != null && { ref })}
        // aria-describedby={has(errorToDisplay) ? "email-error" : undefined}
        // aria-invalid={!!errorToDisplay}
      />
    </Ring>
  );
});

export default TextInputUncontrolled;
