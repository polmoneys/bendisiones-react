import type { CSSProperties } from "react";

export type TrendLegendItem = {
  id: string;
  label: string;
  color: string;
  active: boolean;
};

interface TrendLegendProps {
  items: Array<TrendLegendItem>;
  onChange?: (id: string) => void;
  className?: string;
  style?: CSSProperties;
  markerSize?: number;
  lineWidth?: number;
  textColor?: string;
}

export default function TrendLegend({
  items,
  onChange,
  className,
  style,
  markerSize = 12,
  lineWidth = 2,
  textColor = "#64748b",
}: TrendLegendProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px 16px",
        alignItems: "center",
        ...style,
      }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onChange?.(item.id)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
            fontSize: 11,
            color: textColor,
            background: "none",
            border: "none",
            padding: 0,
            cursor: onChange ? "pointer" : "default",
            opacity: item.active ? 1 : 0.35,
          }}
        >
          <svg width={markerSize + 8} height={markerSize} aria-hidden="true">
            <line
              x1={0}
              y1={markerSize / 2}
              x2={markerSize + 6}
              y2={markerSize / 2}
              stroke={item.color}
              strokeWidth={lineWidth}
              strokeLinecap="round"
            />
          </svg>
          {item.label}
        </button>
      ))}
    </div>
  );
}
