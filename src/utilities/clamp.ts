export const clamp = (v: number) => Math.max(0, Math.min(1, v));

export function clampBoundary(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}
export function newMaxOr(v: number, lo: number, hi: number) {
  // helper to ensure v is numeric and clamped
  return Number.isNaN(v) ? hi : Math.max(lo, Math.min(hi, v));
}

export const lerp = (x: number, y: number, a: number): number =>
  x * (1 - a) + y * a;
export const invlerp = (x: number, y: number, a: number): number =>
  clampBoundary((a - x) / (y - x), 0, 1);

export const range = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  a: number,
): number => lerp(x2, y2, invlerp(x1, y1, a));
