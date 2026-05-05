import { CalendarDate } from "@internationalized/date";
import dayjs, { Dayjs, type OpUnitType, type QUnitType } from "dayjs";
import type { RangeValue } from "react-aria";

import type { PeriodId } from "./interfaces";

export const asDay = (d?: string) => (d ? dayjs(d) : dayjs());
export const iso = (d: Dayjs) => d.format("YYYY-MM-DD");

export function lastWorkingDayOfMonth(d: Dayjs) {
  // Get the last day of the month, then move backwards until it's a weekday (Mon-Fri).
  let candidate = d.endOf("month");
  while (candidate.day() === 0 || candidate.day() === 6) {
    candidate = candidate.subtract(1, "day");
  }
  return candidate;
}

export function clampToDay(d: Dayjs) {
  return dayjs(d.format("YYYY-MM-DD"));
}

export function computeRangeForPeriod(
  period: PeriodId,
  today: Dayjs,
  oldest?: Dayjs | null,
) {
  switch (period) {
    case "oneDay":
      return {
        start: clampToDay(today.subtract(1, "day")),
        end: clampToDay(today),
      };
    case "oneWeek":
      return {
        start: clampToDay(today.subtract(1, "week")),
        end: clampToDay(today),
      };
    case "oneMonths":
      return {
        start: clampToDay(today.subtract(1, "month")),
        end: clampToDay(today),
      };
    case "threeMonths":
      return {
        start: clampToDay(today.subtract(3, "month")),
        end: clampToDay(today),
      };
    case "sixMonths":
      return {
        start: clampToDay(today.subtract(6, "month")),
        end: clampToDay(today),
      };
    case "YTD":
      return {
        start: clampToDay(today.startOf("year")),
        end: clampToDay(today),
      };
    case "oneYears":
      return {
        start: clampToDay(today.subtract(1, "year")),
        end: clampToDay(today),
      };
    case "threeYears":
      return {
        start: clampToDay(today.subtract(3, "year")),
        end: clampToDay(today),
      };
    case "fiveYears":
      return {
        start: clampToDay(today.subtract(5, "year")),
        end: clampToDay(today),
      };
    case "sevenYears":
      return {
        start: clampToDay(today.subtract(7, "year")),
        end: clampToDay(today),
      };
    case "tenYears":
      return {
        start: clampToDay(today.subtract(10, "year")),
        end: clampToDay(today),
      };
    case "inception":
      // If oldest is provided, use it. Otherwise default to today.
      return {
        start: oldest ?? clampToDay(today),
        end: clampToDay(today),
      };
    case "custom":
      // custom handled outside
      return { start: clampToDay(today), end: clampToDay(today) };
    default:
      return { start: clampToDay(today), end: clampToDay(today) };
  }
}

// A period is enabled if the oldest inception date is on or before the periodStart
export function isPeriodEnabled(
  period: PeriodId,
  today: Dayjs,
  oldestInception: Dayjs | null,
) {
  if (period === "custom") return true; // custom is always available
  if (period === "inception") return Boolean(oldestInception);
  const { start } = computeRangeForPeriod(period, today, oldestInception);
  if (!oldestInception) return false;
  // enabled when our oldestInceptionDate is <= required start date
  return !oldestInception.isAfter(start, "day");
}

export const DEFAULT_DATE_FORMAT = "L";
export const API_DATE_FORMAT = "YYYY-MM-DD";
export const LIGHT_DAY_MONTH_FORMAT = "D MMM";
export const FULL_MONTH_YEAR_FORMAT = "MMMM YYYY";
export const SHORT_MONTH_YEAR_FORMAT = "MMM YYYY";

/**
 * Indicates the difference between two date-time in the specified unit
 *
 * @param {string} date1
 * @param {string} date2
 * @param unit
 */
export function getDateDiff(
  date1: string,
  date2: string,
  unit?: QUnitType | OpUnitType,
): number {
  const dayjs1 = dayjs(date1);
  const dayjs2 = dayjs(date2);
  return dayjs1.diff(dayjs2, unit);
}

export function formatPeriodByMonth(
  startDate: string | Date,
  endDate: string | Date,
) {
  return {
    from: dayjs(startDate).startOf("month").toString(),
    to: dayjs(endDate).isSame(dayjs().format(API_DATE_FORMAT))
      ? dayjs().toString()
      : dayjs(endDate).endOf("month").toString(),
  };
}

export function getClosestBeforeDate(
  date: string,
  availableDates: Array<string>,
) {
  let closestDate = availableDates[availableDates.length - 1]; // initialise with first value
  let closestDiff = Infinity;
  for (let i = 0; i < availableDates.length; i++) {
    const diff = dayjs(date).diff(dayjs(availableDates[i]), "millisecond");
    if (diff > 0 && diff < closestDiff) {
      closestDiff = diff;
      closestDate = availableDates[i];
    }
  }
  return closestDate;
}

export function getLastEndOfMonth(newDate: string = TODAY) {
  let endOfMonth: Dayjs;

  if (dayjs(newDate).isSame(TODAY, "month")) {
    // If the month is not ended yet, we set it to last day of previous month
    endOfMonth = dayjs(newDate).subtract(1, "month").endOf("month");
  } else {
    // else we set it to the current end of the month
    endOfMonth = dayjs(newDate).endOf("month");
  }

  return endOfMonth;
}

export function getLastEndOfMonthFormatted(newDate: string = TODAY) {
  return getLastEndOfMonth(newDate).format(API_DATE_FORMAT);
}

export const isBefore = (
  firstDate: string | Dayjs,
  secondDate: string | Dayjs,
) => dayjs(firstDate).isBefore(dayjs(secondDate), "day");

export const isAfter = (
  firstDate: string | Dayjs,
  secondDate: string | Dayjs,
) => dayjs(firstDate).isAfter(dayjs(secondDate), "day");

export const TODAY = dayjs().format(API_DATE_FORMAT);
export const YESTERDAY = dayjs().subtract(1, "day").format(API_DATE_FORMAT);
export const ONE_YEAR_AGO = dayjs().subtract(1, "year").format(API_DATE_FORMAT);
export const THREE_YEARS_AGO = dayjs()
  .subtract(3, "year")
  .format(API_DATE_FORMAT);
export const YTD = dayjs()
  .startOf("year")
  .subtract(1, "day")
  .format(API_DATE_FORMAT);

export function getDateMinusAPeriodFromADate(
  date: string | undefined | Date,
  period: "day" | "month" | "year",
  number: number,
  format: string,
): string {
  if (!date) return "";
  return dayjs(date).subtract(number, period).format(format);
}

export function getDateInApiFormat(date: string | undefined | Date | null) {
  if (!date) return "";
  return dayjs(date).format(API_DATE_FORMAT);
}

export function isInRange(
  date: CalendarDate,
  range: RangeValue<CalendarDate> | null,
) {
  if (range === null) return false;

  return date.compare(range.start) > 0 && date.compare(range.end) < 0;
}
