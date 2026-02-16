import React, { useMemo } from "react";

export type DataPoint =
  | number
  | { value: number; label?: string; timestamp?: number };

export type Series = {
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
};

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

export interface TrendProps {
  data?: Array<DataPoint>;
  series?: Array<Series>;
  width?: number;
  height?: number;
  color?: string;
  fillColor?: string;

  // v2 API
  pointMode?: "none" | "all" | "extrema"; // controls markers
  trendMode?: "none" | "segments" | "dots" | "both"; // controls trend visualization

  showArea?: boolean;
  strokeWidth?: number;
  dotRadius?: number;

  // series options
  showLegend?: boolean;
  stackedArea?: boolean;

  // viewport
  visibleStartPercent?: number;
  visibleEndPercent?: number;
  visibleStartTs?: number;
  visibleEndTs?: number;

  // colors
  upColor?: string;
  downColor?: string;
  flatColor?: string;
  peakColor?: string | undefined;
  valleyColor?: string | undefined;
}

/**
 * Helper: get numeric value from DataPoint
 */
function dpValue(d: DataPoint): number {
  return typeof d === "number" ? d : d.value;
}

/**
 * Plateau-aware extrema detection:
 * - For index i, find the plateau [l..r] of equal values around i.
 * - Only mark the center index Math.floor((l+r)/2) as the extremum.
 * - Compare the plateau value to the first elements outside the plateau (if both exist).
 */
function detectExtremumForIndex(
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

function processTrendData(
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

function generatePath(
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

export default function Trend({
  data,
  series,
  width = 200,
  height = 50,
  color = "#3b82f6",
  fillColor = "rgba(59, 130, 246, 0.1)",
  // v2
  pointMode = "all",
  trendMode = "none",
  showArea = true,
  strokeWidth = 2,
  dotRadius = 3,
  showLegend = false,
  stackedArea = false,
  visibleStartPercent,
  visibleEndPercent,
  visibleStartTs,
  visibleEndTs,
  upColor = "#10b981",
  downColor = "#ef4444",
  flatColor = "#94a3b8",
  peakColor,
  valleyColor,
}: TrendProps) {
  const legendHeight = showLegend ? 30 : 0;
  const chartHeight = Math.max(20, height - legendHeight);

  const processedSeries = useMemo(() => {
    if (data && !series) {
      const points = processTrendData(data, width, chartHeight);
      return [
        {
          id: "default",
          label: undefined,
          points,
          color,
          fillColor,
          showArea,
          strokeWidth,
        },
      ];
    }

    if (series) {
      const allValues = series.flatMap((s) => s.data.map((d) => dpValue(d)));
      const globalMin = Math.min(...allValues);
      const globalMax = Math.max(...allValues);

      return series.map((s) => {
        const points = processTrendData(
          s.data,
          width,
          chartHeight,
          s.id,
          globalMin,
          globalMax,
        );
        return {
          id: s.id,
          label: s.label,
          points,
          color: s.color ?? color,
          fillColor: s.fillColor ?? fillColor,
          showArea: s.showArea ?? showArea,
          strokeWidth: s.strokeWidth ?? strokeWidth,
        };
      });
    }

    return [];
  }, [
    data,
    series,
    width,
    chartHeight,
    color,
    fillColor,
    showArea,
    strokeWidth,
  ]);

  // viewport percent normalization
  const startPct =
    visibleStartPercent === undefined
      ? 0
      : Math.max(0, Math.min(100, visibleStartPercent));
  const endPct =
    visibleEndPercent === undefined
      ? 100
      : Math.max(0, Math.min(100, visibleEndPercent));
  const minPct = Math.min(startPct, endPct);
  const maxPct = Math.max(startPct, endPct);

  // Compute visible series by timestamp window OR percent window
  const visibleSeries = useMemo(() => {
    return processedSeries.map((s) => {
      if (visibleStartTs !== undefined && visibleEndTs !== undefined) {
        const minTs = Math.min(visibleStartTs, visibleEndTs);
        const maxTs = Math.max(visibleStartTs, visibleEndTs);
        const filtered = s.points.filter((p) =>
          p.timestamp == null
            ? true
            : p.timestamp >= minTs && p.timestamp <= maxTs,
        );
        return { ...s, points: filtered };
      }
      if (minPct === 0 && maxPct === 100) return s;
      const filtered = s.points.filter(
        (p) => p.percentile >= minPct && p.percentile <= maxPct,
      );
      return { ...s, points: filtered };
    });
  }, [processedSeries, visibleStartTs, visibleEndTs, minPct, maxPct]);

  const hasVisiblePoints = visibleSeries.some(
    (s) => s.points && s.points.length > 0,
  );

  if (processedSeries.length === 0 || !hasVisiblePoints) {
    return (
      <svg width={width} height={height}>
        <text
          x={width / 2}
          y={height / 2}
          textAnchor="middle"
          fill="#999"
          fontSize="12"
        >
          No data
        </text>
      </svg>
    );
  }

  return (
    <div>
      <svg width={width} height={height} style={{ overflow: "visible" }}>
        {visibleSeries.map((s) => {
          const linePath = generatePath(s.points, false, chartHeight);
          const areaPath = generatePath(s.points, true, chartHeight);

          const areas =
            s.showArea && s.points.length > 0
              ? [
                  <path
                    key={`area-${s.id}`}
                    d={areaPath}
                    fill={s.fillColor}
                    stroke="none"
                    opacity={stackedArea ? 0.6 : 1}
                  />,
                ]
              : [];

          const lines =
            s.points.length > 0
              ? [
                  <path
                    key={`line-${s.id}`}
                    d={linePath}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={s.strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />,
                ]
              : [];

          // dots: show depending on pointMode
          const dots =
            pointMode === "none"
              ? []
              : s.points.flatMap((point) => {
                  const isExt = point.isExtremum !== "none";
                  if (pointMode === "extrema" && !isExt) return [];

                  // compute fallbacks prefer series color when variant undefined
                  const seriesColor = s.color ?? color;
                  const peakFill = peakColor ?? seriesColor;
                  const valleyFill = valleyColor ?? seriesColor;
                  const upFill = upColor ?? seriesColor;
                  const downFill = downColor ?? seriesColor;
                  const flatFill = flatColor ?? seriesColor;

                  // decide fill color:
                  // extrema (peak/valley) use peak/valley fill (fallback to series color)
                  // otherwise, if trendMode is 'none' or 'segments' -> default to series color
                  // if trendMode includes dot-coloring ('dots' or 'both') -> color by trend
                  let fill: string;
                  if (point.isExtremum === "peak") fill = peakFill;
                  else if (point.isExtremum === "valley") fill = valleyFill;
                  else {
                    if (trendMode === "none" || trendMode === "segments")
                      fill = seriesColor;
                    else
                      fill =
                        point.trend === "up"
                          ? upFill
                          : point.trend === "down"
                            ? downFill
                            : flatFill;
                  }

                  const r =
                    point.isExtremum !== "none" ? dotRadius + 1 : dotRadius;
                  return [
                    <circle
                      key={`dot-${s.id}-${point.index}`}
                      cx={point.x}
                      cy={point.y}
                      r={r}
                      fill={fill}
                      stroke="white"
                      strokeWidth={1.25}
                    />,
                  ];
                });

          // trend segments (overlay) — shown when trendMode is "segments" or "both"
          const trendSegments =
            trendMode === "segments" || trendMode === "both"
              ? s.points.flatMap((point, i) => {
                  if (i === 0) return [];
                  const prev = s.points[i - 1];
                  const seriesColor = s.color ?? color;
                  const upFill = upColor ?? seriesColor;
                  const downFill = downColor ?? seriesColor;
                  const flatFill = flatColor ?? seriesColor;
                  const trendColor =
                    point.trend === "up"
                      ? upFill
                      : point.trend === "down"
                        ? downFill
                        : flatFill;
                  // render segments on top of the main line, slightly thicker but semi-transparent
                  return [
                    <line
                      key={`trend-${s.id}-${i}`}
                      x1={prev.x}
                      y1={prev.y}
                      x2={point.x}
                      y2={point.y}
                      stroke={trendColor}
                      strokeWidth={Math.max(1, s.strokeWidth + 1)}
                      opacity={0.6}
                      strokeLinecap="round"
                    />,
                  ];
                })
              : [];

          return (
            <g key={s.id}>
              {areas}
              {lines}
              {trendSegments}
              {dots}
            </g>
          );
        })}

        {showLegend && (
          <g transform={`translate(0, ${chartHeight + 10})`}>
            {processedSeries.flatMap((s, i) => {
              if (!s?.label) return [];
              const x = i * 100 + 10;
              return [
                <g key={`legend-${s.id}`}>
                  <line
                    x1={x}
                    y1={10}
                    x2={x + 20}
                    y2={10}
                    stroke={s.color}
                    strokeWidth={2}
                  />
                  <text x={x + 25} y={14} fontSize="10" fill="#666">
                    {s?.label ?? "-"}
                  </text>
                </g>,
              ];
            })}
          </g>
        )}
      </svg>
    </div>
  );
}
