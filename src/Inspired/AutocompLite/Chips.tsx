import { useState } from "react";

import Button from "../../Dumb/Button";
import ToolBar from "../../Dumb/Toolbar";
import { GoX as IconX } from "react-icons/go";
import styles from "./index.module.css";

import type { ChipsProps } from "./interfaces";

export default function Chips(props: ChipsProps) {
  const { selected, onRemove, limit, label } = props;

  const [showAll, toggle] = useState(false);

  const onToggle = () => toggle((prev) => !prev);
  if (selected.length === 0) return null;

  return (
    <ToolBar label="Selected destinations" className={styles.chips}>
      <ToolBar label="Remove them" className={styles.chips}>
        {selected.slice(0, showAll ? selected.length : limit).map((item) => (
          <Button
            key={`${item.id}-i`}
            className={styles.chip}
            end={<IconX size={28} />}
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item);
            }}
          >
            {item[label]}
          </Button>
        ))}
      </ToolBar>

      <ToolBar
        label={`${showAll ? "Hide some" : "Show all"}`}
        className={styles.chipRemove}
      >
        {selected.length > limit && (
          <Button onClick={onToggle}>
            {!showAll ? `+ ${selected.length - limit}` : "Hide"}
          </Button>
        )}
      </ToolBar>
    </ToolBar>
  );
}
