import { Suspense, useEffect, useState } from "react";

// import { parseDate } from "@internationalized/date";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoInfinity as IconLoadingBar } from "react-icons/go";

import Button from "../Dumb/Button";
import Checkbox from "../Dumb/Checkbox";
import DatePicker from "../Dumb/DatePicker";
import type { Period } from "../Dumb/DatePicker/interfaces";
import Periods from "../Dumb/DatePicker/Periods";
// import DateRangePicker from "../Smart-ish/DatePicker/Picker";
import Range from "../Dumb/DatePicker/Range";
import useDates from "../Dumb/DatePicker/useDates";
import Group from "../Dumb/Group";
import { Col, Row } from "../Dumb/Group/Flex";

const periods: Period[] = [
  { id: "oneDay", label: "1D" },
  { id: "oneWeek", label: "1W" },
  { id: "oneMonths", label: "1M" },
  { id: "threeMonths", label: "3M" },
  { id: "sixMonths", label: "6M" },
  { id: "YTD", label: "YTD" },
  { id: "oneYears", label: "1Y" },
  { id: "threeYears", label: "3Y" },
  { id: "fiveYears", label: "5Y" },
  { id: "sevenYears", label: "7Y" },
  { id: "tenYears", label: "10Y" },
  { id: "inception", label: "Inception" },
  { id: "custom", label: "Custom" },
];

type DatePickerPropsAndCustomArgs = React.ComponentProps<typeof DatePicker> & {
  inceptionDates: Array<string>;
};

const meta = {
  title: "Smart-ish/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  render: function Render(args) {
    const {
      oldestInceptionDate,
      availablePeriods,
      selectedPeriod,
      startDate,
      endDate,
      endOfMonth,
      setPeriod,
      setCustomRange,
      toggleEndOfMonth,
      showUI,
    } = useDates({
      inceptionDates: args.inceptionDates,
      defaultPeriod: "oneMonths",
      defaultEndOfMonth: false,
    });

    const [customStart, setCustomStart] = useState(startDate);
    const [customEnd, setCustomEnd] = useState(endDate);

    // const [customRange, setCustom] = useState({
    //   start: parseDate(startDate),
    //   end: parseDate(endDate),
    // });
    useEffect(() => {
      setCustomStart(startDate);
      setCustomEnd(endDate);
    }, [startDate, endDate]);

    return (
      <>
        <Col
          style={{
            gap: "var(--gap-3)",
          }}
        >
          <Row
            style={{
              gap: "var(--gap-1)",
              flexWrap: "wrap",
            }}
          >
            <Periods
              periods={periods}
              availablePeriods={availablePeriods}
              setPeriod={setPeriod}
              selectedPeriod={selectedPeriod}
            />
          </Row>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 44px",
              maxWidth: "320px",
              placeContent: "start",
              alignItems: "center",
            }}
          >
            <label htmlFor="eom">
              Last working day <b>(EOM)</b>
            </label>

            <Checkbox
              id="eom"
              checked={endOfMonth}
              onChange={(event) => toggleEndOfMonth(event.target.checked)}
            />
          </div>

          <Group startWidth={"64px"} start={<p>Start </p>}>
            <b> {startDate}</b>
          </Group>

          <Group startWidth={"64px"} start={<p>End </p>}>
            <b> {endDate}</b>
          </Group>
          <div
            className="negative"
            style={{
              display: "grid",
              gridTemplateColumns: "130px 1fr",
              border: "var(--border)",
              padding: "var(--gap-2)",
              width: "fit-content",
            }}
          >
            <p>Oldest date </p>
            <b>{oldestInceptionDate ?? "—"}</b>
          </div>
          {showUI && (
            <Suspense fallback={<IconLoadingBar />}>
              <Range
                oldestInceptionDate={oldestInceptionDate}
                start={customStart}
                end={customEnd}
                setStart={setCustomStart}
                setEnd={setCustomEnd}
              >
                <Button onClick={() => setCustomRange(customStart, customEnd)}>
                  Apply
                </Button>
              </Range>
            </Suspense>
          )}
          {/*
          <br />

          <DateRangePicker
            placeholder="Publication date"
            // isDisabled={period != null}
            value={customRange}
            onChange={(range) => {
              if (range?.start === undefined || range?.end === undefined)
                return;
              setCustom({
                start: range.start,
                end: range.end,
              });
            }}
          />*/}
        </Col>
      </>
    );
  },
} satisfies Meta<DatePickerPropsAndCustomArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  name: "Dates mgmt",
  args: {
    inceptionDates: ["2020-03-15", "2021-06-01"],
  },
};
