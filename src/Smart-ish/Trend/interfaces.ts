import type { ReactNode } from "react";

export type DataPoint =
  | number
  | { value: number; label?: string; timestamp?: number };

export interface HoveredPoint {
  x: number;
  y: number;
  value: number;
  label?: string;
  seriesLabel?: string;
  seriesId: string;
  color: string;
}

export type Series = {
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
};

export interface TrendProps {
  data?: Array<DataPoint>;
  series?: Array<Series>;
  width?: number;
  height?: number;
  color?: string;
  fillColor?: string;
  emptyState?: ReactNode;
  pointMode?: "none" | "all";
  trendMode?: "none" | "segments" | "dots" | "both";

  showArea?: boolean;
  strokeWidth?: number;
  dotRadius?: number;

  showLegend?: boolean;
  stackedArea?: boolean;
  showTooltip?: boolean;

  visibleStartPercent?: number;
  visibleEndPercent?: number;
  visibleStartTs?: number;
  visibleEndTs?: number;

  upColor?: string;
  downColor?: string;
  flatColor?: string;
  peakColor?: string | undefined;
  valleyColor?: string | undefined;
  showPointLabels?: "none" | "all";
}
