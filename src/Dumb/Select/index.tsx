import type { ComponentProps } from "react";
import { GoChevronDown as IconChevronDown } from "react-icons/go";
import ChevronsIcon from "../Icon/ChevronsIcon";

import Ring from "../Ring";

/*

<Select
    className="theme-inset"
    placeholder="Choose"
    value={newType}
    onChange={(e) => setNewType(e as NodeType)}
>
    <option value="file">File</option>
    <option value="folder">Folder</option>
</Select>

*/

interface SelectProps extends Omit<ComponentProps<"select">, "onChange"> {
  onChange: (selected: string) => void;
  placeholder: string;
}

export default function Select({
  value,
  onChange,
  children,
  placeholder,
  ...rest
}: SelectProps) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Ring>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {children}
        </select>
      </Ring>

      <div style={{ position: "relative", zIndex: 99 }}>
        <IconChevronDown size={33} transform="translate(-44px,3px)" />
      </div>
    </label>
  );
}
