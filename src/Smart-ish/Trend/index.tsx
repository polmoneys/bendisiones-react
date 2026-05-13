import { type CSSProperties, useMemo, useState } from "react";

import type { HoveredPoint, TrendProps } from "./interfaces";
import TrendLegend from "./Legend";
import TrendTooltip from "./Tooltip";
import { dpValue, generatePath, processTrendData } from "./utils";

export default function Trend({
  data,
  series,
  width = 200,
  height = 50,
  color = "#3b82f6",
  fillColor = "rgba(59, 130, 246, 0.1)",
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
  showPointLabels = "all",
  emptyState,
  showTooltip = false,
}: TrendProps) {
  const [hoveredPoint, setHoveredPoint] = useState<HoveredPoint | null>(null);
  const [hiddenSeriesIds, setHiddenSeriesIds] = useState<Set<string>>(
    () => new Set(),
  );
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

  const legendItems = useMemo(() => {
    if (!showLegend) return [];

    return processedSeries.map((s, i) => ({
      id: s.id,
      label:
        s.label ?? (processedSeries.length === 1 ? "Trend" : `Series ${i + 1}`),
      color: s.color ?? color,
      active: !hiddenSeriesIds.has(s.id),
    }));
  }, [showLegend, processedSeries, color, hiddenSeriesIds]);

  const visibleProcessedSeries = useMemo(() => {
    return processedSeries.filter((s) => !hiddenSeriesIds.has(s.id));
  }, [processedSeries, hiddenSeriesIds]);

  const visibleSeries = useMemo(() => {
    return visibleProcessedSeries.map((s) => {
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
  }, [visibleProcessedSeries, visibleStartTs, visibleEndTs, minPct, maxPct]);

  const toggleSeries = (id: string) => {
    setHiddenSeriesIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const hasVisiblePoints = visibleSeries.some(
    (s) => s.points && s.points.length > 0,
  );

  if (processedSeries.length === 0 || !hasVisiblePoints) {
    return emptyState !== undefined ? (
      emptyState
    ) : (
      <svg width={width} height={height}>
        <text
          x={width / 2}
          y={height / 2}
          textAnchor="middle"
          fill="var(--black)"
          fontSize="var(--font-md)"
        >
          No data
        </text>
      </svg>
    );
  }

  return (
    <div style={{ width, position: "relative" }}>
      <svg
        width="100%"
        preserveAspectRatio="none"
        height={height}
        style={{ overflow: "visible", display: "block" }}
      >
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

          const dots =
            pointMode === "none"
              ? []
              : s.points.flatMap((point) => {
                  const seriesColor = s.color ?? color;
                  const peakFill = peakColor ?? seriesColor;
                  const valleyFill = valleyColor ?? seriesColor;
                  const upFill = upColor ?? seriesColor;
                  const downFill = downColor ?? seriesColor;
                  const flatFill = flatColor ?? seriesColor;

                  let fill: string;
                  if (point.isExtremum === "peak") fill = peakFill;
                  else if (point.isExtremum === "valley") fill = valleyFill;
                  else {
                    if (trendMode === "none" || trendMode === "segments")
                      fill = seriesColor;
                    else {
                      fill =
                        point.trend === "up"
                          ? upFill
                          : point.trend === "down"
                            ? downFill
                            : flatFill;
                    }
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
                      onMouseEnter={() =>
                        setHoveredPoint({
                          x: point.x,
                          y: point.y,
                          value: point.value,
                          label: point.label,
                          seriesLabel: s.label ?? "Trend",
                          seriesId: s.id,
                          color: seriesColor,
                        })
                      }
                      onMouseLeave={() => setHoveredPoint(null)}
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

          // labels: controlled by showPointLabels prop ("none" |  "all")
          const labels = s.points.flatMap((point) => {
            if (showPointLabels === "none") return [];

            const text = point.label ?? String(point.value);
            // choose offset: 'up' trends -> place above; 'down' -> place below; flat -> above
            const labelAbove = point.trend === "up" || point.trend === "flat";
            const verticalOffset = labelAbove
              ? -(dotRadius + 10)
              : dotRadius + 14;
            const labelY = point.y + verticalOffset;

            return [
              <text
                key={`label-${s.id}-${point.index}`}
                x={point.x}
                y={labelY}
                fontSize={10}
                textAnchor="middle"
                style={{
                  paintOrder: "stroke" as CSSProperties["paintOrder"],
                }}
                stroke="#fff"
                strokeWidth={3}
                fill={s.color ?? color}
                dominantBaseline="central"
              >
                {text}
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
      </svg>

      {showLegend && legendItems.length > 0 && (
        <TrendLegend
          items={legendItems}
          onChange={toggleSeries}
          style={{ marginTop: 12 }}
        />
      )}

      {showTooltip && hoveredPoint && <TrendTooltip point={hoveredPoint} />}
    </div>
  );
}
