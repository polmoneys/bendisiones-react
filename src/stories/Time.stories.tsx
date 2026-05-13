import type { Meta, StoryObj } from "@storybook/react";

import TimeFormat, {
  Day,
  DayPeriod,
  Hour,
  Literal,
  Minute,
  Month,
  Year,
} from "../Dumb/Font/Time";
import { Col } from "../Dumb/Group/Flex";

type TimePreset =
  | "time"
  | "time12"
  | "date"
  | "datetime"
  | "weekday"
  | "relative";
type RelativeUnit = Intl.RelativeTimeFormatUnit;
type Rounding = "round" | "floor" | "ceil";

type StoryArgs = {
  value: Date | number;
  locale?: string;
  preset?: TimePreset;
  options?: Intl.DateTimeFormatOptions;
  unit?: RelativeUnit;
  rounding?: Rounding;
};

const meta = {
  title: "Dumb/TimeFormat",
  // component: TimeFormat,
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: "date" },
    locale: { control: "text" },
    preset: {
      control: "select",
      options: ["time", "time12", "date", "datetime", "weekday", "relative"],
    },
    unit: {
      control: "select",
      options: [
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "quarter",
        "year",
      ],
    },
    rounding: {
      control: "radio",
      options: ["round", "floor", "ceil"],
    },
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<StoryArgs>;

export const Playground: Story = {
  name: "Time",
  args: {
    value: new Date("2026-05-09T16:45:30Z"),
    locale: "en-US",
    preset: "datetime",
    unit: "day",
    rounding: "round",
  },
  render: (args: StoryArgs) => {
    const value =
      typeof args.value === "number" ? args.value : new Date(args.value);
    const preset = args.preset ?? "time";
    const isRelative = preset === "relative";

    return (
      <Col
        style={{ gap: "var(--gap-3)", flexWrap: "wrap", alignItems: "start" }}
      >
        <Col style={{ gap: "var(--gap-1)" }}>
          <strong>Default</strong>
          <p style={{ margin: 0 }}>
            {isRelative ? (
              <TimeFormat
                value={value}
                locale={args.locale}
                preset="relative"
                unit={args.unit}
                rounding={args.rounding}
              />
            ) : (
              <TimeFormat
                value={value}
                locale={args.locale}
                preset={preset as Exclude<TimePreset, "relative">}
                options={args.options}
              />
            )}
          </p>
        </Col>

        {!isRelative && (
          <Col style={{ gap: "var(--gap-1)" }}>
            <strong>Parts</strong>
            <TimeFormat
              value={value}
              locale={args.locale}
              preset={preset as Exclude<TimePreset, "relative">}
              options={args.options}
            >
              {(p) => (
                <span style={{ display: "flex", gap: "var(--gap-1)" }}>
                  {preset === "time" || preset === "time12" ? (
                    <>
                      <Hour parts={p} />
                      <Literal parts={p} index={0} />
                      <Minute parts={p} />
                      {preset === "time12" && (
                        <>
                          <Literal parts={p} index={1} />
                          <DayPeriod parts={p} />
                        </>
                      )}
                    </>
                  ) : preset === "date" ? (
                    <>
                      <Month parts={p} />
                      <Literal parts={p} index={0} />
                      <Day parts={p} />
                      <Literal parts={p} index={1} />
                      <Year parts={p} />
                    </>
                  ) : preset === "datetime" ? (
                    <>
                      <Month parts={p} />
                      <Literal parts={p} index={0} />
                      <Day parts={p} />
                      <Literal parts={p} index={1} />
                      <Year parts={p} />
                      <Literal parts={p} index={2} />
                      <Hour parts={p} />
                      <Literal parts={p} index={3} />
                      <Minute parts={p} />
                    </>
                  ) : (
                    <>{JSON.stringify(p)}</>
                  )}
                </span>
              )}
            </TimeFormat>
          </Col>
        )}
      </Col>
    );
  },
};
