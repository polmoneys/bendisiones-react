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


  const cart = [ { item: "apple", qty: 3 }, { item: "banana", qty: 2 } ];
  const itemList = cart.flatMap(({ item, qty }) => Array(qty).fill(item) );
  // ["apple", "apple", "apple", "banana", "banana"]

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

const moveMutate = <T>(arr: Array<T>, from: number, to: number) => {
  arr.splice(to < 0 ? arr.length + to : to, 0, arr.splice(from, 1)[0]);
};

export const arrayMove = <T>(arr: Array<T>, from: number, to: number) => {
  arr = arr.slice();
  moveMutate(arr, from, to);
  return arr;
};

export function toArray<T>(value?: T): Array<T> {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}
