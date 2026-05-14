type ListFormatOptions = {
  type?: "conjunction" | "disjunction";
  style?: "long" | "short";
};

const defaultOptions: ListFormatOptions = {
  type: "conjunction",
  style: "long",
};
const defaultLocale = "en";

export function formatSelectedKeys(
  selection: Set<React.Key>,
  options = defaultOptions,
  locale = defaultLocale,
) {
  return new Intl.ListFormat(locale, options).format(
    [...selection].map((item) => item.toString()),
  );
}

/*
  Usage:
  const value = 1234.567;
  const formattedValue = formatNumber(value, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
  console.log(formattedValue); // "€1,234.57"
*/
export interface NumberFormatOptions {
  locale?: string | string[];
  style?: Intl.NumberFormatOptions["style"];
  currency?: Intl.NumberFormatOptions["currency"];
  currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"];
  useGrouping?: Intl.NumberFormatOptions["useGrouping"];
  minimumIntegerDigits?: Intl.NumberFormatOptions["minimumIntegerDigits"];
  minimumFractionDigits?: Intl.NumberFormatOptions["minimumFractionDigits"];
  maximumFractionDigits?: Intl.NumberFormatOptions["maximumFractionDigits"];
  minimumSignificantDigits?: Intl.NumberFormatOptions["minimumSignificantDigits"];
  maximumSignificantDigits?: Intl.NumberFormatOptions["maximumSignificantDigits"];
}

export function formatNumber(
  value: number,
  options: NumberFormatOptions = {},
): string {
  const {
    locale = "en-US",
    style = "decimal",
    currency = "USD",
    currencyDisplay = "symbol",
    useGrouping = true,
    minimumIntegerDigits = 1,
    minimumFractionDigits = 0,
    maximumFractionDigits = 3,
    minimumSignificantDigits,
    maximumSignificantDigits,
  } = options;

  const numberFormat = new Intl.NumberFormat(locale, {
    style,
    currency,
    currencyDisplay,
    useGrouping,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumSignificantDigits,
    maximumSignificantDigits,
  });

  return numberFormat.format(value);
}

export function formatDate(
  ts?: number | Date,
  locale?: string,
  options?: Intl.DateTimeFormatOptions,
) {
  if (ts == null) return "-";

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat(locale, options ?? defaultOptions).format(
    typeof ts === "number" ? new Date(ts) : ts,
  );
}

/*

const duration = new Intl.DurationFormat('en-US', {
  style: 'long', // 'long' | 'short' | 'narrow' | 'digital'
});

duration.format({ hours: 2, minutes: 5, seconds: 30 });
// → "2 hours, 5 minutes, 30 seconds"

const clock = new Intl.DurationFormat('en-US', { style: 'digital' });
clock.format({ hours: 2, minutes: 5, seconds: 30 });
// → "2:05:30"


const compact = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
});

compact.format(1007800); // → "1M"
compact.format(1534); // → "1.5K"

// For a longer version, use 'long' instead of 'short'

const compactLong = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'long',
});

compactLong.format(1007800); // → "1 million"
compactLong.format(1534); // → "1.5 thousand"


const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
  currencyDisplay: "symbol"
});
formatter.format(123456.789);

// formatToParts()

// Works, but slow:
items.sort((a, b) => a.localeCompare(b));

// Better: creates the collator once and reuses it
const collator = new Intl.Collator('en');
items.sort(collator.compare);


const files = ['chapter10.txt', 'chapter9.txt', 'chapter2.txt', 'chapter1.txt'];

// Default sort per-character
files.sort();
// → ['chapter1.txt', 'chapter10.txt', 'chapter2.txt', 'chapter9.txt']  ✗

// Numeric sort
const collator = new Intl.Collator('en', { numeric: true });
files.sort(collator.compare);
// → ['chapter1.txt', 'chapter2.txt', 'chapter9.txt', 'chapter10.txt']  ✓
//

*/
