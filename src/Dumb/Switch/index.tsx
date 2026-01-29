import type { ChangeEvent, ComponentProps } from "react";

import styles from "./Switch.module.css";

interface Props extends ComponentProps<"input"> {
  initial: boolean;
  onChangeValue: (value: boolean) => void;
  label: string;
}

export default function Switch(props: Props) {
  const {
    initial = false,
    onChangeValue,
    id,
    label = "Switch",
    ...rest
  } = props;

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChangeValue(event.target.checked);
  return (
    <label htmlFor={id} className={styles.group}>
      <input
        {...rest}
        type="checkbox"
        {...(initial && { checked: true })}
        onChange={onChange}
      />
      <p>{label}</p>
    </label>
  );
}
