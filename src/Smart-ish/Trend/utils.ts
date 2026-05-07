import type { DataPoint } from "./interfaces";

type ProcessedPoint = {
  x: number;
  y: number;
  value: number;
  index: number;
  percentile: number;
  trend: "up" | "down" | "flat";
  isExtremum: "peak" | "valley" | "none";
  label?: string;
  timestamp?: number;
  seriesId?: string;
};

export function dpValue(d: DataPoint): number {
  return typeof d === "number" ? d : d.value;
}

/**
 * Plateau-aware extrema detection:
 * - For index i, find the plateau [l..r] of equal values around i.
 * - Only mark the center index Math.floor((l+r)/2) as the extremum.
 * - Compare the plateau value to the first elements outside the plateau (if both exist).
 */
export function detectExtremumForIndex(
  arr: Array<DataPoint>,
  i: number,
): "peak" | "valley" | "none" {
  const val = dpValue(arr[i]);
  let l = i;
  while (l > 0 && dpValue(arr[l - 1]) === val) l--;
  let r = i;
  while (r < arr.length - 1 && dpValue(arr[r + 1]) === val) r++;

  // Only consider interior plateaus (need neighbors on both sides)
  if (l === 0 || r === arr.length - 1) return "none";

  // Only mark the center index of the plateau to avoid multiple markers
  const center = Math.floor((l + r) / 2);
  if (i !== center) return "none";

  const leftNeighbor = dpValue(arr[l - 1]);
  const rightNeighbor = dpValue(arr[r + 1]);

  if (val > leftNeighbor && val > rightNeighbor) return "peak";
  if (val < leftNeighbor && val < rightNeighbor) return "valley";
  return "none";
}

export function processTrendData(
  data: Array<DataPoint>,
  width: number,
  height: number,
  seriesId?: string,
  globalMin?: number,
  globalMax?: number,
): Array<ProcessedPoint> {
  const state = {
    min: globalMin ?? Infinity,
    max: globalMax ?? -Infinity,
    sum: 0,
    count: 0,
  };

  const normalized = data.map((d) => dpValue(d));

  if (globalMin === undefined || globalMax === undefined) {
    state.min = Math.min(...normalized);
    state.max = Math.max(...normalized);
  }

  state.sum = normalized.reduce((a, b) => a + b, 0);
  state.count = normalized.length;

  const range = state.max - state.min || 1;
  const xStep = width / Math.max(normalized.length - 1, 1);
  const padding = height * 0.1;

  return data.map((point, i, arr): ProcessedPoint => {
    const value = dpValue(point);
    const label = typeof point === "object" ? point.label : undefined;
    const timestamp = typeof point === "object" ? point.timestamp : undefined;

    const x = i * xStep;
    const normalizedValue = (value - state.min) / range;
    const y = height - (normalizedValue * (height - 2 * padding) + padding);

    const percentile = (i / Math.max(arr.length - 1, 1)) * 100;

    let trend: "up" | "down" | "flat" = "flat";
    if (i > 0) {
      const prevValue = dpValue(arr[i - 1]);
      if (value > prevValue) trend = "up";
      else if (value < prevValue) trend = "down";
    }

    const isExtremum = detectExtremumForIndex(arr, i);

    return {
      x,
      y,
      value,
      index: i,
      percentile,
      trend,
      isExtremum,
      label,
      timestamp,
      seriesId,
    };
  });
}

export function generatePath(
  points: Array<ProcessedPoint>,
  showArea: boolean,
  height: number,
): string {
  if (points.length === 0) return "";
  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`)
    .join(" ");
  if (!showArea) return linePath;
  const lastPoint = points[points.length - 1];
  const firstPoint = points[0];
  return `${linePath} L ${lastPoint.x},${height} L ${firstPoint.x},${height} Z`;
}
