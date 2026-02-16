import { type ReactNode, useCallback } from "react";

import styles from "./index.module.css";

interface BadgeProps {
  index: number;
  // 0..1
  progress: number;
  // px diameter
  size?: number;
  onBadge?: (index: number) => void;
  children?: ReactNode;
  fill?: string;
  stroke?: string;
  strokeColorRing?: string;
  disabled?: boolean;
}

export default function Badge({
  index,
  progress,
  size = 44,
  onBadge,
  children,
  strokeColorRing = "var(--positive)",
  fill = "var(--transparent)",
  stroke = "var(--grey)",
  disabled = false,
}: BadgeProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  // 4px padding for ring
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - clamped);

  const half = size / 2;

  const onToggle = useCallback(
    () => (onBadge ? () => onBadge(index) : () => ({})),
    [index, onBadge],
  );

  return (
    <button
      type="button"
      {...(onBadge && { onClick: onBadge(index) })}
      onClick={onToggle}
      aria-current={
        clamped === 1 ? undefined : clamped > 0 ? "step" : undefined
      }
      aria-label={`Step ${index + 1}`}
      className={styles.badge}
      style={{
        width: size,
        height: size,
        cursor: onBadge ? "pointer" : "default",
      }}
      disabled={disabled}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden
      >
        <circle
          cx={half}
          cy={half}
          r={radius}
          fill={fill}
          stroke={stroke}
          strokeWidth={2}
        />

        <circle
          cx={half}
          cy={half}
          r={radius}
          fill="none"
          stroke={strokeColorRing}
          strokeWidth={3}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          className={styles.ring}
          transform={`rotate(-90 ${half} ${half})`}
        />

        <foreignObject
          x={0}
          y={0}
          width={size}
          height={size}
          style={{ pointerEvents: "none" }}
        >
          <div
            className={styles.content}
            style={{
              fontSize: Math.max(12, Math.floor(size / 4)),
              color: clamped === 1 ? "var(--white)" : "var(--black)",
              transform:
                clamped > 0 && clamped < 1 ? "scale(1.03)" : "scale(1)",
            }}
          >
            <div className={styles.label}>
              {children ?? (
                <span
                  style={{ color: clamped === 1 ? strokeColorRing : undefined }}
                >
                  {index + 1}
                </span>
              )}
            </div>
          </div>
        </foreignObject>
      </svg>
    </button>
  );
}
