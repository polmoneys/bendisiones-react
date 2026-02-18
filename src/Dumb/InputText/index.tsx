import {
  type ChangeEvent,
  type ComponentProps,
  type ForwardedRef,
  forwardRef,
} from "react";

import { GoX as IconX } from "react-icons/go";

import { clsx } from "../../utils";
import Button from "../Button";
import Ring from "../Ring";

import styles from "./index.module.css";

export interface InputTextProps
  extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (val: string) => void;
  onChangeNative?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  clear?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, Omit<InputTextProps, "endIcon">>(
  (
    props: Omit<InputTextProps, "endIcon">,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const {
      id,
      onChange,
      onChangeNative,
      className,
      clear = false,
      autoComplete = "off",
      ...rest
    } = props;

    return (
      <div
        {...(clear && {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(12,minmax(0, 1fr))",
            gridTemplateRows: 0,
          },
        })}
      >
        <Ring isTextInput>
          <input
            {...rest}
            autoComplete={autoComplete}
            {...(clear && {
              style: {
                ...rest.style,
                display: "grid",
                paddingRight: "var(--min-width)",
                gridColumn: "span 12",
              },
            })}
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
        {clear && (
          <Button
            isIcon
            dangerous={{
              display: "grid",
              gridColumn: "12 / 12",
            }}
            onClick={() => onChange("")}
            aria-label="Clear query"
          >
            <IconX />
          </Button>
        )}
      </div>
    );
  },
);

export default TextInput;
