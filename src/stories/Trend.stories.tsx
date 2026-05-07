import { useRef, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

// import Button from "../Dumb/Button";
import Trend from "../Smart-ish/Trend";
import SlidingWindow from "../Smart-ish/Trend/Navigator";
import useResizeObserver from "../utilities/useResizeObserver";

const meta = {
  title: "Smart-ish/Trend",
  component: Trend,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    fillColor: { control: "color" },
    width: { control: { type: "range", min: 100, max: 800, step: 10 } },
    height: { control: { type: "range", min: 30, max: 200, step: 10 } },
    strokeWidth: { control: { type: "range", min: 1, max: 5, step: 0.5 } },
    dotRadius: { control: { type: "range", min: 2, max: 8, step: 1 } },
    pointMode: {
      control: { type: "radio" },
      options: ["none", "all"],
    },
    trendMode: {
      control: { type: "radio" },
      options: ["none", "segments", "dots", "both"],
    },
    upColor: { control: "color" },
    downColor: { control: "color" },
    flatColor: { control: "color" },
    peakColor: { control: "color" },
    valleyColor: { control: "color" },
  },
} satisfies Meta<typeof Trend>;

export default meta;
type Story = StoryObj<typeof meta>;
type StoryNavigator = StoryObj<typeof SlidingWindow>;

export const EmptyState: Story = {
  name: "Empty State",
  args: {
    data: [],
    width: 300,
    height: 60,
    pointMode: "none",
    trendMode: "none",
  },
  render: (args) => (
    <Trend
      {...args}
      emptyState={<div className="group pxy">No data to show</div>}
    />
  ),
};

export const DefaultState: Story = {
  name: "Trend",
  args: {
    data: [
      50,
      50,
      50, // flat segment
      52,
      54, // up
      54,
      54, // flat
      53,
      53, // flat
      55,
      55,
      55, // flat
      53,
      50,
      48, // down
    ],
    width: 300,
    height: 60,
    showPointLabels: "none",
    showLegend: true,
    showTooltip: true,
  },
  render: (args) => <Trend {...args} />,
};

export const TrendVisualization: Story = {
  name: "Trend direction",
  args: {
    data: [
      { value: 50 },
      { value: 50 },
      { value: 50, label: "flat" }, // plateau middle -> won't be center extremum
      { value: 52, label: "small up" },
      { value: 54, label: "rally" }, // will likely be a peak depending on neighbor values
      { value: 54 },
      { value: 54 },
      { value: 53 },
      { value: 53 },
      { value: 55, label: "higher" },
      { value: 55 },
      { value: 55 },
      { value: 53, label: "dip" },
      { value: 50, label: "fall" },
      { value: 48, label: "valley" }, // valley extremum
    ],
    trendMode: "both",
    width: 480,
    height: 100,
    showArea: true,
    strokeWidth: 2,
    dotRadius: 5,
    upColor: "var(--positive)",
    downColor: "var(--negative)",
    flatColor: "var(--neutral)",
    peakColor: "yellow",
    valleyColor: "black",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <Trend {...args} />
      <div
        style={{
          marginTop: 12,
          display: "flex",
          gap: 16,
          alignItems: "center",
          fontSize: 13,
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.upColor} />
          </svg>{" "}
          Up
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.downColor} />
          </svg>{" "}
          Down
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.flatColor} />
          </svg>{" "}
          Flat
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.peakColor} />
          </svg>{" "}
          Peak
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.valleyColor} />
          </svg>{" "}
          Valley
        </span>
      </div>
    </div>
  ),
};

export const StockPortfolio: Story = {
  name: "Trends ",
  args: {
    series: [
      {
        id: "aapl",
        label: "AAPL",
        data: Array.from(
          { length: 30 },
          (_, i) => 150 + Math.sin(i / 5) * 15 + Math.random() * 8,
        ),
        color: "#a855f7",
        showArea: false,
        strokeWidth: 2,
      },
      {
        id: "googl",
        label: "GOOGL",
        data: Array.from(
          { length: 30 },
          (_, i) => 140 + Math.cos(i / 6) * 12 + Math.random() * 6,
        ),
        color: "#3b82f6",
        showArea: false,
        strokeWidth: 2,
      },
      {
        id: "msft",
        label: "MSFT",
        data: Array.from(
          { length: 30 },
          (_, i) => 145 + Math.sin(i / 4) * 10 + Math.random() * 5,
        ),
        color: "#10b981",
        showArea: false,
        strokeWidth: 2,
      },
      {
        id: "amzn",
        label: "AMZN",
        data: Array.from(
          { length: 30 },
          (_, i) => 135 + Math.sin(i / 7) * 18 + Math.random() * 7,
        ),
        color: "#f59e0b",
        showArea: false,
        strokeWidth: 2,
      },
      {
        id: "tsla",
        label: "TSLA",
        data: Array.from(
          { length: 30 },
          (_, i) => 130 + Math.sin(i / 3) * 25 + Math.random() * 10,
        ),
        color: "#ef4444",
        showArea: false,
        strokeWidth: 2,
      },
    ],
    width: 700,
    height: 160,
    showLegend: true,
    showPointLabels: "none",
    pointMode: "none",
  },
  render: (args) => (
    <div>
      <Trend {...args} />
      {/*<div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"].map((ticker, i) => (
          <div
            key={ticker}
            style={{
              boxShadow: "var(--shadow)",
              padding: "var(--gap-3)",
              borderRadius: "var(--border-radius)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                marginBottom: "4px",
              }}
            >
              {ticker}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"][
                  i
                ],
              }}
            >
              {["+8.2%", "+5.1%", "+14.7%", "+3.9%", "+22.1%"][i]}
            </div>
          </div>
        ))}
      </div>*/}
    </div>
  ),
};

export const CompactInline: Story = {
  name: "Compact Inline",
  args: {
    data: [3, 7, 4, 9, 6, 11, 8, 13],
    width: 120,
    height: 30,
    color: "#06b6d4",
    fillColor: "rgba(6, 182, 212, 0.15)",
    strokeWidth: 2,
    // minimal overlay
    pointMode: "none",
    showPointLabels: "none",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "var(--gap-3)",
      }}
    >
      <p style={{ fontSize: "14px", color: "#666" }}>Revenue:</p>
      <Trend {...args} />
      <p style={{ fontWeight: "var(--font-bold)" }}>$1.2M</p>
    </div>
  ),
};

const now = Date.now();
const day = 24 * 60 * 60 * 1000;

export const SlidingA: StoryNavigator = {
  name: "Sliding",
  parameters: {
    layout: "fullscreen",
  },
  render: function Render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [stretch, setStretch] = useState(true);

    const makeSeries = (
      fn: (i: number) => number,
      color: string,
      id: string,
    ) => ({
      id,
      label: id.toUpperCase(),
      color,
      data: Array.from({ length: 60 }, (_, i) => {
        const val = fn(i);
        return {
          value: Number(val.toFixed(2)),
          label: val.toFixed(2),
          timestamp: now - (59 - i) * day,
        };
      }),
      showArea: false,
      strokeWidth: 2,
    });

    const seriesA = makeSeries(
      (i) => 150 + Math.sin(i / 5) * 15 + Math.random() * 8,
      "#a855f7",
      "aapl",
    );
    const seriesB = makeSeries(
      (i) => 140 + Math.cos(i / 6) * 12 + Math.random() * 6,
      "#3b82f6",
      "googl",
    );

    const domainMin = now - 59 * day;
    const domainMax = now;

    const [window, setWindow] = useState({
      min: domainMin + 1 * day,
      max: domainMax - 1 * day,
    });
    const ref = useRef<HTMLDivElement | null>(null);
    const { width } = useResizeObserver(ref);

    return (
      <div style={{ width: "100%" }}>
        <SlidingWindow
          id="trend-range-multi"
          min={domainMin}
          max={domainMax}
          valueMin={window.min}
          valueMax={window.max}
          onChange={(minVal, maxVal) => setWindow({ min: minVal, max: maxVal })}
          showRuler={false}
          series={[seriesA, seriesB]}
          minPoints={6}
          width={width ?? 0}
          stretchToFit={stretch}
        >
          {({ stretchedSeries }) => (
            <>
              <div
                style={{
                  width: "100%",
                  background: "#fff",
                  padding: 12,
                  borderRadius: "var(--border-radius)",
                }}
                ref={ref}
              >
                <Trend
                  series={stretchedSeries ?? []}
                  width={width}
                  height={160}
                  pointMode="all"
                  trendMode="none"
                  showArea={false}
                  strokeWidth={2}
                  dotRadius={4}
                  visibleStartPercent={0}
                  visibleEndPercent={100}
                  showPointLabels="none"
                />
              </div>
            </>
          )}
        </SlidingWindow>
        {/*<br/>
        <Button isActive={stretch} onClick={() => setStretch((prev) => !prev)}>
          Apply stretch
        </Button>*/}
      </div>
    );
  },
};
