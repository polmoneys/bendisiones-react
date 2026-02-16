/*

const byAge = toSorted(users, (a, b) => a.age - b.age);

const byAge = toSorted(users, by(u => u.age));
const byAgeDesc = toSorted(users, by(u => u.age, 'desc'));

const byName = toSorted(users, by(u => u.name));

const sorted = toSorted(
  users,
  combine(
    by(u => u.department),
    by(u => u.age, 'desc')
  )
);

function Component({ items }: { items: readonly Item[] }) {
  const sorted = toSorted(items, by(i => i.priority));
}

*/

export default function toSorted<T>(
  array: readonly T[],
  compareFn?: (a: T, b: T) => number,
): Array<T> {
  // (ES2023+)
  if ("toSorted" in Array.prototype) {
    return array.toSorted(compareFn);
  }

  return [...array].sort(compareFn);
}

export function by<T, K>(
  selector: (item: T) => K,
  order: "asc" | "desc" = "asc",
): (a: T, b: T) => number {
  const multiplier = order === "asc" ? 1 : -1;

  return (a: T, b: T) => {
    const aVal = selector(a);
    const bVal = selector(b);

    if (aVal < bVal) return -1 * multiplier;
    if (aVal > bVal) return 1 * multiplier;
    return 0;
  };
}

/*
  Combines multiple comparators, applying them in order until a non-zero result is found
 */
export function combine<T>(
  ...comparators: Array<(a: T, b: T) => number>
): (a: T, b: T) => number {
  return (a: T, b: T) => {
    for (const comparator of comparators) {
      const result = comparator(a, b);
      if (result !== 0) return result;
    }
    return 0;
  };
}
