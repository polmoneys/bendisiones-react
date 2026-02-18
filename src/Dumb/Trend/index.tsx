import { useMemo } from "react";

import { dpValue, generatePath, processTrendData } from "./utils";

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

export interface TrendProps {
  data?: Array<DataPoint>;
  series?: Array<Series>;
  width?: number;
  height?: number;
  color?: string;
  fillColor?: string;

  pointMode?: "none" | "all" | "extrema";
  trendMode?: "none" | "segments" | "dots" | "both";

  showArea?: boolean;
  strokeWidth?: number;
  dotRadius?: number;

  showLegend?: boolean;
  stackedArea?: boolean;

  visibleStartPercent?: number;
  visibleEndPercent?: number;
  visibleStartTs?: number;
  visibleEndTs?: number;

  upColor?: string;
  downColor?: string;
  flatColor?: string;
  peakColor?: string | undefined;
  valleyColor?: string | undefined;
  showPointLabels?: "none" | "extrema" | "all";
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
  // new prop, default to "extrema" (auto-show only extrema labels)
  showPointLabels = "extrema",
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

          // labels: controlled by showPointLabels prop ("none" | "extrema" | "all")
          const labels = s.points.flatMap((point) => {
            if (!point.label) return [];

            // decide whether we should render based on showPointLabels
            if (showPointLabels === "none") return [];
            if (showPointLabels === "extrema" && point.isExtremum === "none")
              return [];

            // choose offset: extremums and 'up' trends -> place above; 'down' -> place below; flat -> above
            const labelAbove =
              point.isExtremum !== "none" ||
              point.trend === "up" ||
              point.trend === "flat";
            const verticalOffset = labelAbove
              ? -(dotRadius + 10)
              : dotRadius + 14;
            const labelY = point.y + verticalOffset;

            // text styling: small, centered, with a white "halo" stroke for readability
            return [
              <text
                key={`label-${s.id}-${point.index}`}
                x={point.x}
                y={labelY}
                fontSize={10}
                textAnchor="middle"
                style={{
                  paintOrder: "stroke" as React.CSSProperties["paintOrder"],
                }}
                stroke="#fff"
                strokeWidth={3}
                fill={s.color ?? color}
                dominantBaseline="central"
              >
                {point.label}
              </text>,
            ];
          });

          return (
            <g key={s.id}>
              {areas}
              {lines}
              {trendSegments}
              {dots}
              {labels}
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
