import { clsx } from "../../utils";
import Button from "../Button";
import ChevronsIcon from "../Icon/ChevronsIcon";

import type { RecursiveProps } from "./interfaces";

export default function Recursive<T = unknown>({
  items,
  multiple = false,
  selectedIds = new Set(),
  expandedIds = new Set(),
  onToggle,
  onSelect,
  renderItem,
  level = 0,
  indentSize = 20,
}: RecursiveProps<T>) {
  const onToggleItem = (id: string | number) => {
    const isCurrentlyExpanded = expandedIds.has(id);
    onToggle?.(id, !isCurrentlyExpanded, level);
  };

  const onSelectItem = (id: string | number) => onSelect?.(id, level);

  return (
    <>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedIds.has(item.id);
        const isSelected = selectedIds.has(item.id);
        return (
          <div key={item.id}>
            {renderItem({
              className: clsx(
                !isSelected && !isExpanded && "neutral",
                isExpanded && !isSelected && "info",
                isSelected && "positive",
              ),
              item,
              level,
              isExpanded,
              isSelected,
              onClick: () => onSelectItem(item.id),
              children: hasChildren ? (
                <Button
                  dangerous={{
                    backgroundColor: "var(--transparent)",
                    borderColor: "var(--transparent)",
                  }}
                  isIcon
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleItem(item.id);
                  }}
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  <ChevronsIcon status={isExpanded ? "active" : "idle"} />
                </Button>
              ) : null,
            })}

            {hasChildren && isExpanded && (
              <Recursive
                items={item.children!}
                multiple={multiple}
                selectedIds={selectedIds}
                expandedIds={expandedIds}
                onToggle={onToggle}
                onSelect={onSelect}
                renderItem={renderItem}
                level={level + 1}
                indentSize={indentSize}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
