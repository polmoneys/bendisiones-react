import { Row } from "../../Dumb/Group/Flex";

import type { HoveredPoint } from "./interfaces";

interface TrendTooltipProps {
  point: HoveredPoint;
}

export default function TrendTooltip({ point }: TrendTooltipProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: point.x,
        top: point.y,
        transform: "translate(-50%, -115%)",
        pointerEvents: "none",
        zIndex: 10,
        background: point.color,
        border: "1px solid rgba(255,255,255,0.35)",
        color: "white",
        borderRadius: "var(--border-radius)",
        padding: "var(--gap-2) var(--gap-3)",
        boxShadow: "var(--shadow)",
        whiteSpace: "nowrap",
      }}
    >
      <Row style={{ gap: "var(--gap-2)" }}>
        {point.seriesLabel && (
          <p style={{ fontWeight: "var(--font-weight)" }}>
            {point.seriesLabel}
          </p>
        )}
        {point.label && <p style={{ opacity: 0.9 }}>{point.label}</p>}
      </Row>

      {point?.label !== String(point.value) && <strong>{point.value}</strong>}
    </div>
  );
}
