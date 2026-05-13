import type { Meta, StoryObj } from "@storybook/react";

import TimeFormat, {
  Day,
  DayPeriod,
  Hour,
  Literal,
  Minute,
  Month,
  type TimePreset,
  Weekday,
  Year,
} from "../Dumb/Font/Time";
import { Col } from "../Dumb/Group/Flex";

type StoryArgs = {
  value: Date | number;
  locale?: string;
  preset?: TimePreset;
  options?: Intl.DateTimeFormatOptions;
};

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

const meta = {
  title: "Dumb/TimeFormat",
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: "date" },
    locale: { control: "text" },
    preset: {
      control: "select",
      options: PRESET_OPTIONS,
    },
    options: { control: "object" },
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<StoryArgs>;

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

export const Playground: Story = {
  args: {
    value: new Date("2026-05-09T16:45:30Z"),
    locale: "en-US",
    preset: "time",
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
