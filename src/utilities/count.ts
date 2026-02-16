// Object.freeze(counter)
let count = 0;
export const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
};

// get 1fr
export function gridColumnWidth(selector: string = ".grid") {
  const grid = document.querySelector(selector);
  if (grid) {
    return getComputedStyle(grid).gridTemplateColumns;
  }
  return 0;
}
