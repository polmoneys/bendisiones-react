import type { Meta, StoryObj } from "@storybook/react-vite";

import Trend from "../Dumb/Trend";
import TrendNavigator from "../Dumb/Trend/Navigator";

const meta = {
  title: "Dumb/Trend",
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
      options: ["none", "all", "extrema"],
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
type StoryNavigator = StoryObj<typeof TrendNavigator>;

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
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        No Data Available
      </h3>
      <Trend {...args} />
    </div>
  ),
};

export const DefaultState: Story = {
  name: "Default State",
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
    pointMode: "extrema",
    trendMode: "none",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <Trend {...args} />
    </div>
  ),
};

export const DefaultState2: Story = {
  name: "Default State2",
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
    ],
    width: 300,
    height: 60,
    pointMode: "extrema",
    trendMode: "none",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <Trend {...args} />
    </div>
  ),
};

export const TrendVisualization: Story = {
  name: "Trend Indicators",
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
    // v2 usage:
    pointMode: "extrema",
    trendMode: "both",
    width: 480,
    height: 100,
    showArea: false,
    strokeWidth: 2,
    dotRadius: 5,
    // optional: override colors to emphasize
    upColor: "var(--positive)",
    downColor: "var(--negative)",
    flatColor: "var(--neutral)",
    peakColor: "yellow",
    valleyColor: "black",
    showLegend: true,
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        Trend Direction Highlighting
      </h3>
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
    trendMode: "none",
  },
  render: (args) => (
    <div
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "14px", color: "#666" }}>Revenue:</span>
      <Trend {...args} />
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>$1.2M</span>
    </div>
  ),
};

export const ComplexLabeled: Story = {
  name: "Complex with Labels",
  args: {
    data: [
      { value: 45, label: "Jan" },
      { value: 52 },
      { value: 48 },
      { value: 61, label: "Apr" },
      { value: 58 },
      { value: 65 },
      { value: 71, label: "Jul" },
      { value: 68 },
      { value: 75 },
      { value: 82, label: "Oct" },
      { value: 79 },
      { value: 88, label: "Dec" },
    ],
    width: 500,
    height: 100,
    color: "#8b5cf6",
    fillColor: "rgba(139, 92, 246, 0.15)",
    // highlight extrema only
    pointMode: "extrema",
    trendMode: "segments",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        Monthly Performance with Labels
      </h3>
      <Trend {...args} />
      <div style={{ marginTop: "15px", fontSize: "11px", color: "#999" }}>
        Quarterly milestones highlighted • 96% year-over-year growth
      </div>
    </div>
  ),
};

export const StockPortfolio: Story = {
  name: "Stock Portfolio (5 Assets)",
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
    // show markers for points, but no extra trend overlay
    pointMode: "all",
    trendMode: "none",
  },
  render: (args) => (
    <div
      style={{ padding: "25px", background: "#0f172a", borderRadius: "12px" }}
    >
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <h3 style={{ fontSize: "20px", color: "#fff", marginBottom: "5px" }}>
            Portfolio Performance
          </h3>
          <p style={{ fontSize: "13px", color: "#64748b" }}>
            Last 30 trading days
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{ fontSize: "28px", color: "#10b981", fontWeight: "bold" }}
          >
            +12.4%
          </div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>Total return</div>
        </div>
      </div>
      <Trend {...args} />
      <div
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
              padding: "10px",
              background: "#1e293b",
              borderRadius: "6px",
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
      </div>
    </div>
  ),
};

const now = Date.now();
const day = 24 * 60 * 60 * 1000;

const seriesA = {
  id: "a",
  label: "Series A",
  color: "#3b82f6",
  data: [
    { value: 10, timestamp: now - 9 * day },
    { value: 12, timestamp: now - 8 * day },
    { value: 11, timestamp: now - 7 * day },
    { value: 15, timestamp: now - 6 * day },
    { value: 14, timestamp: now - 5 * day },
    { value: 18, timestamp: now - 4 * day },
    { value: 20, timestamp: now - 3 * day },
    { value: 19, timestamp: now - 2 * day },
    { value: 22, timestamp: now - 1 * day },
    { value: 24, timestamp: now },
  ],
};

const seriesB = {
  id: "b",
  label: "Series B",
  color: "#ef4444",
  data: [
    { value: 5, timestamp: now - 9 * day },
    { value: 6, timestamp: now - 8 * day },
    { value: 7, timestamp: now - 7 * day },
    { value: 8, timestamp: now - 6 * day },
    { value: 11, timestamp: now - 5 * day },
    { value: 13, timestamp: now - 4 * day },
    { value: 12, timestamp: now - 3 * day },
    { value: 14, timestamp: now - 2 * day },
    { value: 15, timestamp: now - 1 * day },
    { value: 16, timestamp: now },
  ],
};

export const NavigatorWithTimestamps: StoryNavigator = {
  name: "Timestamped (multi-series)",
  args: {
    series: [seriesA, seriesB],
    width: 600,
    height: 100,
    initialMin: 0,
    initialMax: 100,
    timeBased: true,
    pointMode: "all",
    trendMode: "segments",
  },
  render: function Render(args) {
    return (
      <div style={{ padding: 16 }} id="uuuu">
        <h3 style={{ marginBottom: 8, fontSize: 14, color: "#666" }}>
          Navigator — timestamped series
        </h3>
        <TrendNavigator {...args} />
      </div>
    );
  },
};
