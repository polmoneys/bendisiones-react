import { useCallback, useRef } from "react";
import { useKeyboard } from "react-aria";

import TextInput from "../../Dumb/InputText";
import OptionsList from "./OptionsList";
import { clsx } from "../../utils";
import useClickContains from "../../utilities/useClickContains";
import styles from "./index.module.css";

import type { AutcompLiteProps } from "./interfaces";

export default function AutocompLite(props: AutcompLiteProps) {
  const {
    children,
    id,
    selected,
    placeholder,
    setQuery,
    query,
    options,
    toggleOption,
    onToggle,
    showPopover,
    debug = false,
  } = props;

  const rootRef = useRef<HTMLDivElement | null>(null);

  const onIn = useCallback(() => {
    return !showPopover ? onToggle() : () => ({});
  }, [showPopover, onToggle]);
  const onOut = useCallback(() => {
    return showPopover ? onToggle() : () => ({});
  }, [showPopover, onToggle]);

  useClickContains({
    ref: rootRef,
    onInside: onIn,
    onOutside: onOut,
  });

  const { keyboardProps } = useKeyboard({
    onKeyDown: (event) => {
      if ((event.key === "Escape" || event.key === "C") && showPopover) {
        event.preventDefault();
        onToggle();
      }
    },
  });

  return (
    <>
      <div
        ref={rootRef}
        className={clsx(styles.root, debug && styles.debug)}
        {...keyboardProps}
      >
        {children({
          input: (
            <TextInput
              placeholder={placeholder}
              id={id}
              value={query}
              onChange={(v) => setQuery(v)}
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded="true"
              aria-haspopup="listbox"
            />
          ),
        })}
        {showPopover ? (
          <OptionsList
            query={query}
            filteredOptions={options}
            selected={selected}
            toggleOption={toggleOption}
            idPrefix="dest"
          />
        ) : null}
      </div>
    </>
  );
}
