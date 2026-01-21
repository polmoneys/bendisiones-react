import type { Meta, StoryObj } from "@storybook/react-vite";
import { Suspense, useEffect, useState } from "react";

import Button from "../Dumb/Button";
import { GoInfinity as IconLoadingBar } from "react-icons/go";
import type { Period } from "../Inspired/DatePicker/interfaces";
import Periods from "../Inspired/DatePicker/Periods";
import Range from "../Inspired/DatePicker/Range";
import useDates from "../Inspired/DatePicker/useDates";
import Checkbox from "../Dumb/Checkbox";
import DatePicker from "../Inspired/DatePicker";
import Group from "../Dumb/Group";

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

const meta = {
  title: "Dumb/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {},

  render: function Render() {
    // args
    const inceptionDates = ["2020-03-15", "2021-06-01"];
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
      inceptionDates,
      defaultPeriod: "oneMonths",
      defaultEndOfMonth: false,
    });

    const [customStart, setCustomStart] = useState(startDate);
    const [customEnd, setCustomEnd] = useState(endDate);

    useEffect(() => {
      setCustomStart(startDate);
      setCustomEnd(endDate);
    }, [startDate, endDate]);

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--gap-3)",
          }}
        >
          <div
            style={{
              display: "flex",
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
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 44px",
              maxWidth: "320px",
              placeContent: "start",
              alignItems: "center",
            }}
          >
            <p>
              Last working day <b>(EOM)</b>
            </p>

            <Checkbox
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
        </div>
      </>
    );
  },
};
