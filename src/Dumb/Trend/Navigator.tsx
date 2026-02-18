import { useMemo } from "react";

import { clampBoundary } from "../../utilities/clamp";
import RangeMulti from "../RangePeriod";

import type { DataPoint, Series } from "./";

export interface SlidingWindowProps {
  id: string;
  min: number;
  max: number;
  valueMin?: number;
  valueMax?: number;
  initialMin?: number;
  initialMax?: number;
  onChange?: (min: number, max: number) => void;
  showRuler?: boolean;
  series?: Series[];
  data?: DataPoint[];
  minPoints?: number;

  /**
   * When true the visible subset of each series is sliced and passed
   * back to children as `stretchedSeries`. Use this to have the visible points
   * occupy the full Trend width.
   */
  stretchToFit?: boolean;

  children: (ctx: {
    visibleStartPercent: number;
    visibleEndPercent: number;
    valueMin: number;
    valueMax: number;
    /**
     * Always provided. If `stretchToFit` is true, this contains the per-series
     * filtered/sliced data corresponding to the visible window. Otherwise it's
     * the original series (shallow-copied).
     */
    stretchedSeries: Series[];
  }) => React.ReactNode;
}

export default function SlidingWindow({
  id,
  min,
  max,
  valueMin,
  valueMax,
  initialMin,
  initialMax,
  onChange,
  showRuler = false,
  series,
  data,
  minPoints = 5,
  stretchToFit = false,
  children,
}: SlidingWindowProps) {
  const seriesList: Series[] = useMemo(() => {
    if (series && series.length > 0) return series;
    if (data) return [{ id: "single", data }];
    return [];
  }, [series, data]);

  const seriesTimestamps = useMemo(
    () =>
      seriesList.map((s) =>
        s.data.map((d) =>
          typeof d === "object" ? (d.timestamp ?? null) : null,
        ),
      ),
    [seriesList],
  );

  const anyHasTimestamps = useMemo(
    () => seriesTimestamps.some((arr) => arr.some((t) => t != null)),
    [seriesTimestamps],
  );

  const globalTsMinMax = useMemo(() => {
    if (!anyHasTimestamps) return null;
    let gMin = Infinity;
    let gMax = -Infinity;
    seriesList.forEach((s) =>
      s.data.forEach((d) => {
        if (typeof d === "object" && d.timestamp != null) {
          gMin = Math.min(gMin, d.timestamp);
          gMax = Math.max(gMax, d.timestamp);
        }
      }),
    );
    if (gMin === Infinity) return null;
    return { gMin, gMax };
  }, [anyHasTimestamps, seriesList]);

  function computeWindow(vMinIn: number, vMaxIn: number) {
    let vMin = clampBoundary(vMinIn, min, max);
    let vMax = clampBoundary(vMaxIn, min, max);
    if (vMin > vMax) [vMin, vMax] = [vMax, vMin];

    if (anyHasTimestamps && globalTsMinMax) {
      let adjMin = vMin;
      let adjMax = vMax;

      seriesList.forEach((s) => {
        const ts = s.data
          .map((p) => (typeof p === "object" ? (p.timestamp ?? null) : null))
          .filter((t) => t != null) as number[];

        if (ts.length === 0) return;

        let firstIdx = ts.findIndex((t) => t >= adjMin);
        if (firstIdx === -1) firstIdx = ts.length;
        const lastIdx =
          ts.length - 1 - [...ts].reverse().findIndex((t) => t <= adjMax);
        if (firstIdx > lastIdx) {
          const mid = (adjMin + adjMax) / 2;
          let closest = 0;
          let bestDiff = Infinity;
          ts.forEach((t, idx) => {
            const d = Math.abs(t - mid);
            if (d < bestDiff) {
              bestDiff = d;
              closest = idx;
            }
          });
          const newFirst = Math.max(0, closest - Math.floor(minPoints / 2));
          const newLast = Math.min(ts.length - 1, newFirst + minPoints - 1);
          adjMin = ts[newFirst];
          adjMax = ts[newLast];
          return;
        }

        const count = lastIdx - firstIdx + 1;
        if (count >= minPoints) return;

        const need = minPoints - count;
        const expandLeft = Math.floor(need / 2);
        const expandRight = need - expandLeft;
        let newFirst = Math.max(0, firstIdx - expandLeft);
        let newLast = Math.min(ts.length - 1, lastIdx + expandRight);

        const actualCount = newLast - newFirst + 1;
        if (actualCount < minPoints) {
          if (newFirst === 0)
            newLast = Math.min(ts.length - 1, newFirst + minPoints - 1);
          else if (newLast === ts.length - 1)
            newFirst = Math.max(0, newLast - (minPoints - 1));
        }

        adjMin = Math.min(adjMin, ts[newFirst]);
        adjMax = Math.max(adjMax, ts[newLast]);
      });

      const startPct =
        globalTsMinMax.gMax === globalTsMinMax.gMin
          ? 0
          : ((adjMin - globalTsMinMax.gMin) /
              (globalTsMinMax.gMax - globalTsMinMax.gMin)) *
            100;
      const endPct =
        globalTsMinMax.gMax === globalTsMinMax.gMin
          ? 100
          : ((adjMax - globalTsMinMax.gMin) /
              (globalTsMinMax.gMax - globalTsMinMax.gMin)) *
            100;

      return {
        startPct: clampBoundary(startPct, 0, 100),
        endPct: clampBoundary(endPct, 0, 100),
        valueMin: adjMin,
        valueMax: adjMax,
      };
    }

    // no timestamps
    const domainSpan = max - min || 1;
    let startPct = ((vMin - min) / domainSpan) * 100;
    let endPct = ((vMax - min) / domainSpan) * 100;
    startPct = clampBoundary(startPct, 0, 100);
    endPct = clampBoundary(endPct, 0, 100);

    let adjStart = startPct;
    let adjEnd = endPct;

    seriesList.forEach((s) => {
      const len = Math.max(1, s.data.length);
      const startIndex = Math.round((adjStart / 100) * (len - 1));
      const endIndex = Math.round((adjEnd / 100) * (len - 1));
      const count = Math.max(0, endIndex - startIndex + 1);
      if (count >= minPoints) return;
      const need = minPoints - count;
      const expandLeftPct = (Math.floor(need / 2) / (len - 1)) * 100 || 0;
      const expandRightPct = (Math.ceil(need / 2) / (len - 1)) * 100 || 0;
      adjStart = Math.max(0, adjStart - expandLeftPct);
      adjEnd = Math.min(100, adjEnd + expandRightPct);
    });

    const adjValueMin = min + (adjStart / 100) * domainSpan;
    const adjValueMax = min + (adjEnd / 100) * domainSpan;

    return {
      startPct: clampBoundary(adjStart, 0, 100),
      endPct: clampBoundary(adjEnd, 0, 100),
      valueMin: adjValueMin,
      valueMax: adjValueMax,
    };
  }

  const curValueMin = valueMin ?? initialMin ?? min;
  const curValueMax = valueMax ?? initialMax ?? max;

  const {
    startPct,
    endPct,
    valueMin: adjustedMin,
    valueMax: adjustedMax,
  } = useMemo(
    () => computeWindow(curValueMin, curValueMax),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [curValueMin, curValueMax, min, max, JSON.stringify(seriesList), minPoints],
  );

  // Build stretchedSeries: ALWAYS return an array of series.
  // If stretchToFit=true we slice to the visible points; otherwise we return the original series (shallow copies).
  const stretchedSeries: Series[] = useMemo(() => {
    if (!stretchToFit) {
      // return shallow copies so consumers can rely on a fresh array
      return seriesList.map((s) => ({ ...s, data: [...s.data] }));
    }

    if (anyHasTimestamps && globalTsMinMax) {
      // treat adjustedMin/adjustedMax as timestamps and slice each series by timestamp
      return seriesList.map((s) => {
        const filtered = s.data.filter((p) => {
          if (typeof p === "number") return false; // no timestamp -> drop
          if (p.timestamp == null) return false;
          return p.timestamp >= adjustedMin && p.timestamp <= adjustedMax;
        });
        if (filtered.length === 0) {
          // fallback: include closest minPoints slice by timestamp if available
          const ptsWithTs = s.data
            .map((p, idx) => ({ p, idx }))
            .filter(
              (x) => typeof x.p !== "number" && x.p.timestamp != null,
            ) as Array<{ p: DataPoint; idx: number }>;
          if (ptsWithTs.length === 0) return { ...s, data: [] };
          const mid = (adjustedMin + adjustedMax) / 2;
          let best = ptsWithTs[0];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let bestDiff = Math.abs((best.p as any).timestamp - mid);
          ptsWithTs.forEach((c) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const d = Math.abs((c.p as any).timestamp - mid);
            if (d < bestDiff) {
              best = c;
              bestDiff = d;
            }
          });
          const start = Math.max(0, best.idx - Math.floor(minPoints / 2));
          const slice = s.data.slice(start, start + minPoints);
          return { ...s, data: slice };
        }
        return { ...s, data: filtered };
      });
    }

    // No timestamps: compute index-based start/end per series using startPct/endPct
    return seriesList.map((s) => {
      const len = Math.max(1, s.data.length);
      const startIndex = Math.round((startPct / 100) * (len - 1));
      const endIndex = Math.round((endPct / 100) * (len - 1));
      const si = clampBoundary(Math.min(startIndex, endIndex), 0, len - 1);
      const ei = clampBoundary(Math.max(startIndex, endIndex), 0, len - 1);
      let newSi = si;
      let newEi = ei;
      const count = newEi - newSi + 1;
      if (count < minPoints) {
        const need = minPoints - count;
        const expandLeft = Math.floor(need / 2);
        const expandRight = need - expandLeft;
        newSi = clampBoundary(newSi - expandLeft, 0, len - 1);
        newEi = clampBoundary(newEi + expandRight, 0, len - 1);
        if (newEi - newSi + 1 < minPoints) {
          if (newSi === 0) newEi = Math.min(len - 1, newSi + minPoints - 1);
          else if (newEi === len - 1)
            newSi = Math.max(0, newEi - (minPoints - 1));
        }
      }
      const slice = s.data.slice(newSi, newEi + 1);
      return { ...s, data: slice };
    });
  }, [
    stretchToFit,
    anyHasTimestamps,
    globalTsMinMax,
    seriesList,
    adjustedMin,
    adjustedMax,
    startPct,
    endPct,
    minPoints,
  ]);

  function handleChange(newMin: number, newMax: number) {
    onChange?.(newMin, newMax);
  }

  return (
    <div>
      <RangeMulti
        id={id}
        min={min}
        max={max}
        valueMin={valueMin}
        valueMax={valueMax}
        initialMin={initialMin}
        initialMax={initialMax}
        onChange={handleChange}
        showRuler={showRuler}
      />
      {children({
        visibleStartPercent: Math.max(0, Math.min(100, startPct)),
        visibleEndPercent: Math.max(0, Math.min(100, endPct)),
        valueMin: adjustedMin,
        valueMax: adjustedMax,
        stretchedSeries,
      })}
    </div>
  );
}
