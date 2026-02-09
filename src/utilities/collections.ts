export type Result<V, E> = { ok: true; value: V } | { ok: false; error: E };

export type ParseError<Input, E> = {
  index: number;
  input: Input;
  error: E;
};

/*
  const raw = ["10", "abc", " 42 ", "", "7.5", "-3"];

  function parseInt(s: string): Result<number, string> {
    const trimmed = s.trim();
    if (trimmed === "") return { ok: false, error: "empty" };
    // allow only integers
    if (!/^-?\d+$/.test(trimmed)) return { ok: false, error: "not-integer" };
    const n = Number(trimmed);
    return { ok: true, value: n };
  }

  const { values, errors } = parseFlatMap(raw, parseInt);
  console.log(values); // [10, 42, -3]
  console.log(errors);
  [
    { index: 1, input: "abc", error: "not-integer" },
    { index: 3, input: "",   error: "empty" },
    { index: 4, input: "7.5", error: "not-integer" }
  ]
*/

export function parseFlatMap<Input, Value, Err>(
  items: Input[],
  parser: (item: Input, index: number) => Result<Value, Err>,
): { values: Value[]; errors: ParseError<Input, Err>[] } {
  const errors: ParseError<Input, Err>[] = [];

  const values = items.flatMap((item, index) => {
    const r = parser(item, index);
    if (r.ok) {
      // keep as single-element array so flatMap flattens it
      return [r.value];
    } else {
      errors.push({ index, input: item, error: r.error });
      // drop it
      return [];
    }
  });

  return { values, errors };
}

/*
  interface Share {
    isin: string;
    name: string;
  }

  const uniqueShares = removeDuplicatesBy(shares, share => share.isin);
*/

export function removeDuplicatesBy<T, K>(
  input: T[],
  keySelector: (item: T) => K,
): T[] {
  const seen = new Set<K>();
  return input.filter((item) => {
    const key = keySelector(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

/*
  const grouped = Object.groupBy(tasks, task => task.status);
  const lastUnread = messages.findLast(msg => !msg.read);
*/

export function splitArray<T>(items: T[], fn: (el: T) => boolean): [T[], T[]] {
  const match = [] as T[];
  const dispose = [] as T[];
  for (const el of items) {
    if (fn(el)) {
      match.push(el);
    } else {
      dispose.push(el);
    }
  }
  return [match, dispose];
}

export const nest = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Array<Record<string, any>>,
  id: number | null = null,
  link = "parent_id",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Array<Record<string, any>> =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id, link) }));

/*
  🆒

  const byAge = users.toSorted((a, b) => a.age - b.age);

  const opts = [a,b,c]
  const optsChanged = !opts.every( (item, i) => prevOpts.current[i] === item)

*/
