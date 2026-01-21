import RowHeader from "./Header";
import Row from "./Row";

import type { RowsProps } from "./interfaces";
import type { SelectionAPI } from "../../Inspired/Thingie/interfaces";

export default function Rows<T>({
  gridTemplateColumns,
  columns,
  rows,
  id = "demo",
  // "Order 12345"
  label,
  api,
  selectedBackgroundColor,
  px,
  ...rest
}: RowsProps<T> & { api: SelectionAPI<T> }) {
  return (
    <div role="table" {...rest}>
      <RowHeader
        gridTemplateColumns={gridTemplateColumns}
        columns={columns}
        id={id}
        px={px}
      />

      <div role="rowgroup">
        {rows.map((r, pos) => {
          const selected = api?.isSelected(r);
          return (
            <Row<T>
              row={r}
              gridTemplateColumns={gridTemplateColumns}
              key={`${id}-${pos}`}
              columns={columns}
              label={label}
              rowIndex={pos}
              id={id}
              selected={selected}
              onSelect={() => api.toggle(r)}
              selectedBackgroundColor={selectedBackgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
}
