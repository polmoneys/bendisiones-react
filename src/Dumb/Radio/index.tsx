import {
  type ChangeEvent,
  type ComponentProps,
  type ReactElement,
} from "react";

import type { RenderProp } from "../../interfaces";
import { clsx } from "../../utils";
import Ring from "../Ring";

import styles from "./index.module.css";

export interface RadioProps extends Omit<ComponentProps<"input">, "children"> {
  id: string;
  children: RenderProp<{ checked: boolean }, HTMLElement>;
  onChangeAsString: (value: string) => void;
}

export interface GroupProps {
  children: Array<ReactElement>;
  initial: string | Array<string>;
  className?: string;
  gap?: string;
  radioSize?: string;
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >;
  onChange: (selection: string) => void;
  direction?: "row" | "column";
}

export default function Radio(props: RadioProps) {
  const {
    onChangeAsString,
    id,
    name,
    checked,
    value,
    children,
    className,
    ...rest
  } = props;

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChangeAsString?.(event.target.value);

  return (
    <label htmlFor={id} className={clsx(styles.radio, className)}>
      <Ring>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onRadioChange}
          {...rest}
        />
      </Ring>
      {children({
        checked: props?.checked ?? false,
      })}
    </label>
  );
}
