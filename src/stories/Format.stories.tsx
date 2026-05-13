import { type ReactNode } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
  CompactSuffix,
  CurrencySymbol,
  DecimalSeparator,
  FixedDecimal,
  Fraction,
  NumberFormat,
  WholeNumber,
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

export const Money: Story = {
  name: "Playground",
  render: () => (
    <div
      style={{
        display: "grid",
        gap: 12,
        padding: 24,
        minWidth: 340,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <NumberFormat value={1234.56} preset="money" currency="EUR">
        {(parts) => (
          <span
            style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}
          >
            <CurrencySymbol parts={parts} />
            <WholeNumber parts={parts} />
            <DecimalSeparator parts={parts} />
            <Fraction parts={parts} />
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={-2450.5} preset="money" currency="EUR">
        {(parts) => (
          <span
            style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}
          >
            <span style={{ color: "crimson", display: "inline-flex", gap: 4 }}>
              <CurrencySymbol parts={parts} />
              <WholeNumber parts={parts} />
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={9876543.21} preset="money" currency="USD">
        {(parts) => (
          <span
            style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}
          >
            <CurrencySymbol parts={parts} />
            <span style={{ fontWeight: 700 }}>
              <WholeNumber parts={parts} />
            </span>
            <span style={{ opacity: 0.65 }}>
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={1234.567} preset="fixed" digits={2}>
        {(parts) => (
          <span style={{ display: "inline-flex" }}>
            <FixedDecimal parts={parts} />
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={12.5} preset="fixed" digits={1}>
        {(parts) => (
          <span style={{ display: "inline-flex" }}>
            <FixedDecimal parts={parts} />
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={1234567.89} preset="fixed" digits={3}>
        {(parts) => (
          <span style={{ display: "inline-flex" }}>
            <WholeNumber parts={parts} />
            <DecimalSeparator parts={parts} />
            <Fraction parts={parts} />
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={1534000} preset="compact">
        {(parts) => (
          <span
            style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}
          >
            <WholeNumber parts={parts} />
            <CompactSuffix parts={parts} />
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={1534000} preset="compact" compactDisplay="long">
        {(parts) => (
          <span
            style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}
          >
            <WholeNumber parts={parts} />
            <CompactSuffix parts={parts} />
          </span>
        )}
      </NumberFormat>

      <NumberFormat value={9999500} preset="compact">
        {(parts) => (
          <span
            style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}
          >
            <WholeNumber parts={parts} />
            <CompactSuffix parts={parts} />
          </span>
        )}
      </NumberFormat>
    </div>
  ),
};
