import { useMemo, useState } from "react";

import { formatDate } from "../../utilities/intl";
import { Row } from "../Group/Flex";
import RangeMulti from "../RangePeriod";

import Trend, { type DataPoint, type Series } from "./";

type PointMode = "none" | "all" | "extrema";
type TrendMode = "none" | "segments" | "dots" | "both";

interface TrendNavigatorProps {
  series?: Array<Series>;
  data?: Array<DataPoint>;

  width?: number;
  height?: number;
  color?: string;
  fillColor?: string;

  pointMode?: PointMode;
  trendMode?: TrendMode;

  showArea?: boolean;
  strokeWidth?: number;
  dotRadius?: number;
  showLegend?: boolean;
  stackedArea?: boolean;

  rangeMin?: number; // default 0
  rangeMax?: number; // default 100
  initialMin?: number; // default rangeMin
  initialMax?: number; // default rangeMax

  timeBased?: boolean;

  upColor?: string;
  downColor?: string;
  flatColor?: string;
  peakColor?: string | undefined;
  valleyColor?: string | undefined;

  showRuler?: boolean;
}

function hasTimestamp(
  d: DataPoint,
): d is { value: number; label?: string; timestamp?: number } {
  return (
    typeof d === "object" &&
    d !== null &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (d as any).timestamp === "number"
  );
}

function Swatch({ color }: { color?: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 12,
        height: 12,
        borderRadius: 6,
        background: color ?? "transparent",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
      }}
    />
  );
}

export default function TrendNavigator({
  series,
  data,
  width = 300,
  height = 60,
  color,
  fillColor,
  pointMode = "all",
  trendMode = "none",
  showArea,
  strokeWidth,
  dotRadius,
  showLegend,
  stackedArea,
  rangeMin = 0,
  rangeMax = 100,
  initialMin,
  initialMax,
  timeBased = false,
  upColor,
  downColor,
  flatColor,
  peakColor,
  valleyColor,
  showRuler = false,
}: TrendNavigatorProps) {
  // internal percent range state (0..100)
  const [range, setRange] = useState(() => ({
    min: initialMin ?? rangeMin,
    max: initialMax ?? rangeMax,
  }));

  const onRangeChange = (min: number, max: number) => {
    setRange((prev) => {
      if (prev.min === min && prev.max === max) return prev;
      return { min, max };
    });
  };

  const inputSeries: Array<Series> | undefined = useMemo(() => {
    if (series) return series;
    if (data) {
      return [
        {
          id: "default",
          data,
        },
      ];
    }
    return undefined;
  }, [series, data]);

  // global sorted unique timestamps across all series (used only when timeBased)
  const globalTimestamps = useMemo(() => {
    if (!timeBased || !inputSeries) return null;
    const set = new Set<number>();
    for (const s of inputSeries) {
      for (const d of s.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (hasTimestamp(d)) set.add((d as any).timestamp as number);
      }
    }
    const arr = Array.from(set);
    arr.sort((a, b) => a - b);
    return arr.length > 0 ? arr : null;
  }, [timeBased, inputSeries]);

  // helpers to map percent -> global timestamp (using the globalTimestamps array)
  const percentToGlobalTs = useMemo(() => {
    return (pct: number): number | undefined => {
      if (!globalTimestamps || globalTimestamps.length === 0) return undefined;
      const len = globalTimestamps.length;
      if (len === 1) return globalTimestamps[0];
      const idx = Math.round((pct / 100) * (len - 1));
      return globalTimestamps[Math.max(0, Math.min(len - 1, idx))];
    };
  }, [globalTimestamps]);

  // compute visibleStartTs/visibleEndTs (if timeBased), else undefined
  const visibleStartTs = useMemo(() => {
    if (!timeBased) return undefined;
    return percentToGlobalTs(range.min);
  }, [timeBased, percentToGlobalTs, range.min]);

  const visibleEndTs = useMemo(() => {
    if (!timeBased) return undefined;
    return percentToGlobalTs(range.max);
  }, [timeBased, percentToGlobalTs, range.max]);

  // compute percent visibility fallback for Trend when not timeBased
  const visibleStartPercent = useMemo(
    () => Math.max(rangeMin, Math.min(rangeMax, range.min)),
    [range.min, rangeMin, rangeMax],
  );
  const visibleEndPercent = useMemo(
    () => Math.max(rangeMin, Math.min(rangeMax, range.max)),
    [range.max, rangeMin, rangeMax],
  );

  const startLabel = useMemo(() => {
    if (!timeBased) return null;
    return formatDate(visibleStartTs);
  }, [timeBased, visibleStartTs]);

  const endLabel = useMemo(() => {
    if (!timeBased) return null;
    return formatDate(visibleEndTs);
  }, [timeBased, visibleEndTs]);

  // Build resolved indicator colors per series (fall back logic):
  // - seriesColor = s.color ?? navigator-level color prop ?? default series color
  // - peakFill = peakColor ?? seriesColor
  // - valleyFill = valleyColor ?? seriesColor
  // - upFill = upColor ?? seriesColor
  // - downFill = downColor ?? seriesColor
  // - flatFill = flatColor ?? seriesColor
  const perSeriesIndicatorColors = useMemo(() => {
    if (!inputSeries) return [];
    return inputSeries.map((s) => {
      const seriesColor = s.color ?? color ?? "#3b82f6";
      return {
        id: s.id,
        label: s.label ?? s.id,
        seriesColor,
        peakFill: peakColor ?? seriesColor,
        valleyFill: valleyColor ?? seriesColor,
        upFill: upColor ?? seriesColor,
        downFill: downColor ?? seriesColor,
        flatFill: flatColor ?? seriesColor,
      };
    });
  }, [
    inputSeries,
    color,
    upColor,
    downColor,
    flatColor,
    peakColor,
    valleyColor,
  ]);

  const legend = useMemo(() => {
    if (!inputSeries) return null;

    // single series: compact indicator legend with timestamp labels (if timeBased)
    if (perSeriesIndicatorColors.length === 1) {
      const p = perSeriesIndicatorColors[0];
      return (
        <Row style={{ gap: 12, alignItems: "center", margin: "8px 0 10px 0" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Swatch color={p.upFill} />
            <div style={{ color: "var(--neutral)", fontSize: 13 }}>
              Up
              {timeBased && visibleStartTs && visibleEndTs && (
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  {formatDate(visibleStartTs)}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Swatch color={p.downFill} />
            <div style={{ color: "var(--neutral)", fontSize: 13 }}>
              Down
              {timeBased && visibleStartTs && visibleEndTs && (
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  {formatDate(visibleEndTs)}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Swatch color={p.flatFill} />{" "}
            <span style={{ color: "var(--neutral)", fontSize: 13 }}>Flat</span>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Swatch color={p.peakFill} />{" "}
            <span style={{ color: "var(--neutral)", fontSize: 13 }}>Peak</span>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Swatch color={p.valleyFill} />{" "}
            <span style={{ color: "var(--neutral)", fontSize: 13 }}>
              Valley
            </span>
          </div>
        </Row>
      );
    }

    // multiple series — render per-series small legend rows, plus global timestamp pair at far right when timeBased
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          margin: "8px 0 10px 0",
        }}
      >
        {perSeriesIndicatorColors.map((p) => (
          <Row key={`legend-${p.id}`} style={{ alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 6,
                background: p.seriesColor,
              }}
            />
            <div
              style={{ minWidth: 90, color: "var(--neutral)", fontSize: 13 }}
            >
              {p.label}
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Swatch color={p.upFill} />{" "}
                <span style={{ color: "var(--neutral)", fontSize: 12 }}>
                  Up
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Swatch color={p.downFill} />{" "}
                <span style={{ color: "var(--neutral)", fontSize: 12 }}>
                  Down
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Swatch color={p.flatFill} />{" "}
                <span style={{ color: "var(--neutral)", fontSize: 12 }}>
                  Flat
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Swatch color={p.peakFill} />{" "}
                <span style={{ color: "var(--neutral)", fontSize: 12 }}>
                  Peak
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Swatch color={p.valleyFill} />{" "}
                <span style={{ color: "var(--neutral)", fontSize: 12 }}>
                  Valley
                </span>
              </div>
            </div>
          </Row>
        ))}

        {timeBased && visibleStartTs && visibleEndTs && (
          <Row style={{ justifyContent: "flex-end", gap: 12 }}>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              {formatDate(visibleStartTs)}
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              {formatDate(visibleEndTs)}
            </div>
          </Row>
        )}
      </div>
    );
  }, [
    inputSeries,
    perSeriesIndicatorColors,
    timeBased,
    visibleStartTs,
    visibleEndTs,
  ]);

  return (
    <>
      {timeBased && (
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "var(--neutral)" }}>{startLabel ?? "-"}</p>
          <p style={{ color: "var(--neutral)" }}>{endLabel ?? "-"}</p>
        </Row>
      )}

      <RangeMulti
        id="trend-range-multi"
        min={rangeMin}
        max={rangeMax}
        valueMin={range.min}
        valueMax={range.max}
        onChange={onRangeChange}
        showRuler={showRuler}
      />

      {showLegend ? legend : null}

      <Trend
        {...(series ? { series } : {})}
        {...(data ? { data } : {})}
        width={width}
        height={height}
        color={color}
        fillColor={fillColor}
        pointMode={pointMode}
        trendMode={trendMode}
        showArea={showArea}
        strokeWidth={strokeWidth}
        dotRadius={dotRadius}
        showLegend={showLegend}
        stackedArea={stackedArea}
        // if timeBased, pass timestamps; Trend will prefer timestamps for filtering
        visibleStartTs={visibleStartTs}
        visibleEndTs={visibleEndTs}
        // fallback percent window when not time-based
        visibleStartPercent={timeBased ? undefined : visibleStartPercent}
        visibleEndPercent={timeBased ? undefined : visibleEndPercent}
        // forward color overrides so Trend and the legend resolve colors the same way
        upColor={upColor}
        downColor={downColor}
        flatColor={flatColor}
        peakColor={peakColor}
        valleyColor={valleyColor}
      />
    </>
  );
}
