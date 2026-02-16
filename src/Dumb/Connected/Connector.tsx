import type { CSSProperties } from "react";

import type { Orientation } from ".";

import styles from "./index.module.css";

interface ConnectorProps {
  progress: number; // 0..1
  orientation?: Orientation;
  // px or css length; defaults to flex: 1
  length?: number | string;
  thickness?: number;
  className?: string;
  minWidth?: string;
  minHeight?: string;
}

export default function Connector({
  progress,
  orientation = "horizontal",
  length = "100%",
  thickness = 8,
  minWidth = "24px",
  minHeight = "24px",
}: ConnectorProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  const percent = Math.round(clamped * 10000) / 100; // keep 2 decimals

  const clipPath =
    orientation === "horizontal"
      ? `inset(0 ${100 - percent}% 0 0)`
      : `inset(0 0 ${100 - percent}% 0)`;

  const horizontal = orientation === "horizontal";

  const baseStyle: CSSProperties = horizontal
    ? {
        height: thickness,
        minWidth,
        width: typeof length === "number" ? `${length}px` : length,
      }
    : {
        width: thickness,
        minHeight,
        height: typeof length === "number" ? `${length}px` : length,
      };

  const fillStyle: CSSProperties = {
    clipPath,
    WebkitClipPath: clipPath,
  };

  return (
    <div className={styles.connector} aria-hidden="true">
      <div className={styles.bar} style={baseStyle}>
        <div className={styles.fill} style={fillStyle} />
      </div>
    </div>
  );
}
