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
import TimeFormat, {
  Day,
  DayPeriod,
  Hour,
  Minute,
  Month,
  Weekday,
  Year,
} from "../Dumb/Font/Time";
import type { TimePreset } from "../Dumb/Font/Time/interfaces";
import { Literal } from "../Dumb/Font/Time/Parts";
import { Col } from "../Dumb/Group/Flex";

const meta = {
  title: "Dumb/Format",
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

export const PlaygroundNumber: Story = {
  name: "Playground number",
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

type StoryArgs = {
  value: Date | number;
  locale?: string;
  preset?: TimePreset;
  options?: Intl.DateTimeFormatOptions;
};

type StoryTime = StoryObj<StoryArgs>;

const PRESET_OPTIONS: TimePreset[] = [
  "time",
  "time12",
  "date",
  "dateShort",
  "dateLong",
  "dateSlashes",
  "monthYear",
  "weekday",
  "weekdayShort",
  "dateWithWeekday",
];

function renderParts(
  preset: TimePreset,
  parts: Array<Intl.DateTimeFormatPart>,
) {
  switch (preset) {
    case "time":
      return (
        <>
          <Hour parts={parts} className="positive-color" />
          <Literal parts={parts} index={0} />
          <Minute parts={parts} />
        </>
      );

    case "time12":
      return (
        <>
          <Hour parts={parts} />
          <Literal parts={parts} index={0} className="neutral-color" />
          <Minute parts={parts} />
          <Literal parts={parts} index={1} className="neutral-color" />
          <DayPeriod parts={parts} />
        </>
      );

    case "date":
    case "dateLong":
      return (
        <>
          <Month parts={parts} />
          <Literal parts={parts} index={0} />
          <Day parts={parts} />
          <Literal parts={parts} index={1} />
          <Year parts={parts} className="negative-color" />
        </>
      );

    case "dateShort":
      return (
        <>
          <Month parts={parts} />
          <Literal parts={parts} index={0} />
          <Day parts={parts} />
          <Literal parts={parts} index={1} />
          <Year parts={parts} />
        </>
      );

    case "dateSlashes":
      return (
        <>
          <Month parts={parts} />
          <Literal parts={parts} index={0} />
          <Day parts={parts} />
          <Literal parts={parts} index={1} />
          <Year parts={parts} />
        </>
      );

    case "monthYear":
      return (
        <>
          <Month parts={parts} />
          <Literal parts={parts} index={0} />
          <Year parts={parts} />
        </>
      );

    case "weekday":
    case "weekdayShort":
      return <Weekday parts={parts} className="positive-color" />;

    case "dateWithWeekday":
      return (
        <>
          <Weekday parts={parts} className="positive-color" />
          <Literal parts={parts} index={0} />
          <Month parts={parts} />
          <Literal parts={parts} index={1} />
          <Day parts={parts} />
        </>
      );

    default:
      return null;
  }
}

export const PlaygroundTime: StoryTime = {
  name: "Playground time",
  args: {
    value: new Date("2026-05-09T16:45:30Z"),
    locale: "en-US",
    preset: "time",
  },
  argTypes: {
    value: { control: "date" },
    locale: { control: "text" },
    preset: {
      control: "select",
      options: PRESET_OPTIONS,
    },
    options: { control: "object" },
  },
  render: (args: StoryArgs) => {
    const value =
      typeof args.value === "number" ? args.value : new Date(args.value);
    const preset = args.preset ?? "time";

    return (
      <Col
        style={{ gap: "var(--gap-3)", flexWrap: "wrap", alignItems: "start" }}
      >
        <Col style={{ gap: "var(--gap-1)" }}>
          <strong>Default</strong>
          <p style={{ margin: 0 }}>
            <TimeFormat
              value={value}
              locale={args.locale}
              preset={preset}
              options={args.options}
            />
          </p>
        </Col>

        <Col style={{ gap: "var(--gap-1)" }}>
          <strong>Parts</strong>
          <TimeFormat
            value={value}
            locale={args.locale}
            preset={preset}
            options={args.options}
          >
            {(parts) => (
              <span style={{ display: "flex", gap: "var(--gap-1)" }}>
                {renderParts(preset, parts)}
              </span>
            )}
          </TimeFormat>
        </Col>
      </Col>
    );
  },
};
