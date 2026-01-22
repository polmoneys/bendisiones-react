import {
  type ChangeEvent,
  type ComponentProps,
  type ForwardedRef,
  forwardRef,
} from "react";

import { clsx } from "../../utils";
import Ring from "../Ring";

import styles from "./index.module.css";

export interface InputTextProps
  extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (val: string) => void;
  onChangeNative?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const TextInput = forwardRef<HTMLInputElement, Omit<InputTextProps, "endIcon">>(
  (
    props: Omit<InputTextProps, "endIcon">,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { id, onChange, onChangeNative, className, ...rest } = props;

    return (
      <Ring isTextInput>
        <input
          {...rest}
          className={clsx(styles.textInput, className)}
          id={id}
          name={id}
          type="text"
          {...(ref != null && { ref })}
          onChange={(event) => {
            onChangeNative?.(event);
            onChange(event.target.value);
          }}
        />
      </Ring>
    );
  },
);

export default TextInput;
