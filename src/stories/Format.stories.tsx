import { type ReactNode, useMemo, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
  CompactSuffix,
  CurrencySymbol,
  DecimalSeparator,
  DoubleDecimal,
  Fraction,
  Integer,
  NumberFormat,
} from "../Dumb/Font/Number";

const meta = {
  title: "Dumb/NumberFormat",
  component: NumberFormat,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 1234.56,
  },
} satisfies Meta<typeof NumberFormat>;

export default meta;
type Story = StoryObj<typeof meta>;

function DemoFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        padding: 24,
        minWidth: 320,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}

export const DecimalDefault: Story = {
  name: "Decimal / default",
  render: () => (
    <DemoFrame>
      <NumberFormat value={1234.567}>
        {(parts) => <DoubleDecimal parts={parts} />}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const MoneyEUR: Story = {
  name: "Money (EUR)",
  render: () => (
    <DemoFrame>
      <NumberFormat value={1234.56} preset="money" currency="EUR">
        {(parts) => (
          <span
            className="money"
            style={{
              display: "inline-flex",
              alignItems: "baseline",
            }}
          >
            <CurrencySymbol parts={parts} />
            <Integer parts={parts} />
            <DecimalSeparator parts={parts} />
            <Fraction parts={parts} />
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const MoneyUSDStyled: Story = {
  name: "Money with styled parts",
  render: () => (
    <DemoFrame>
      <NumberFormat value={9876543.21} preset="money" currency="USD">
        {(parts) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: "var(--gap-1)",
            }}
          >
            <CurrencySymbol parts={parts} />
            <span style={{ fontWeight: 700 }}>
              <Integer parts={parts} />
            </span>
            <span style={{ opacity: 0.65 }}>
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const CompactAmount: Story = {
  name: "Amount / compact",
  render: () => (
    <DemoFrame>
      <NumberFormat value={1534000} preset="amount">
        {(parts) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
            }}
          >
            <Integer parts={parts} />
            <CompactSuffix parts={parts} />
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const PreciseAmountLong: Story = {
  name: "Precise amount / long",
  render: () => (
    <DemoFrame>
      <NumberFormat value={1534000} preset="preciseAmount">
        {(parts) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: "var(--gap-1)",
            }}
          >
            <Integer parts={parts} />
            <CompactSuffix parts={parts} />
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const DoubleDecimalFixed: Story = {
  name: "Double decimal",
  render: () => (
    <DemoFrame>
      <NumberFormat value={12} preset="doubleDecimal">
        {(parts) => <DoubleDecimal parts={parts} />}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const NegativeMoney: Story = {
  name: "Negative money",
  render: () => (
    <DemoFrame>
      <NumberFormat value={-2450.5} preset="money" currency="EUR">
        {(parts) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: "var(--gap-1)",
            }}
          >
            <span style={{ color: "crimson" }}>
              <CurrencySymbol parts={parts} />
              <Integer parts={parts} />
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const ZeroAndTinyValues: Story = {
  name: "Zero and tiny values",
  render: () => (
    <DemoFrame>
      <NumberFormat value={0} preset="money" currency="EUR">
        {(parts) => <DoubleDecimal parts={parts} />}
      </NumberFormat>

      <NumberFormat value={0.0042} preset="doubleDecimal">
        {(parts) => <DoubleDecimal parts={parts} />}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const FrenchLocale: Story = {
  name: "German locale",
  render: () => (
    <DemoFrame>
      <NumberFormat
        locale={"us-US"}
        value={1234.56}
        preset="money"
        currency="USD"
      >
        {(parts) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
            }}
          >
            <Integer parts={parts} />
            <DecimalSeparator parts={parts} />
            <Fraction parts={parts} />
            <CurrencySymbol parts={parts} />
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};

export const InteractiveAmount: Story = {
  name: "Interactive amount",
  render: function Render() {
    const [value, setValue] = useState(1534000);

    const formatted = useMemo(() => value, [value]);

    return (
      <DemoFrame>
        <label style={{ display: "grid", gap: 8 }}>
          <span>Value</span>
          <input
            type="range"
            min={0}
            max={10000000}
            step={1000}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>

        <NumberFormat value={formatted} preset="amount">
          {(parts) => (
            <span
              style={{
                display: "inline-flex",
                alignItems: "baseline",
                gap: "var(--gap-1)",
              }}
            >
              <Integer parts={parts} />
              <CompactSuffix parts={parts} />
            </span>
          )}
        </NumberFormat>
      </DemoFrame>
    );
  },
};

export const FullCustomComposition: Story = {
  name: "Full custom composition",
  render: () => (
    <DemoFrame>
      <NumberFormat value={1234567.89} preset="money" currency="EUR">
        {(parts) => (
          <span
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: 4,
              padding: "6px 10px",
              border: "1px solid #ddd",
              borderRadius: 999,
            }}
          >
            <CurrencySymbol parts={parts} />
            <span
              style={{ fontVariantNumeric: "tabular-nums", fontWeight: 600 }}
            >
              <Integer parts={parts} />
            </span>
            <span style={{ opacity: 0.55 }}>
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>
        )}
      </NumberFormat>
    </DemoFrame>
  ),
};
