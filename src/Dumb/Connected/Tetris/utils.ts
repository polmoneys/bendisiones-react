import type { Mode, Point, Segment } from "./interfaces";

export const add = (a: Point, b: Point): Point => ({
  x: a.x + b.x,
  y: a.y + b.y,
});

export const SHAPES: Record<Mode, Record<string, (u: number) => Segment[]>> = {
  horizontal: {
    "-": (u) => [{ a: { x: 0, y: 0 }, b: { x: u, y: 0 } }],

    L: (u) => [
      { a: { x: 0, y: 0 }, b: { x: u, y: 0 } },
      { a: { x: u, y: 0 }, b: { x: u, y: -u } },
    ],

    l: (u) => [
      { a: { x: 0, y: 0 }, b: { x: u, y: 0 } },
      { a: { x: u, y: 0 }, b: { x: u, y: u } },
    ],

    // Horizontal T: baseline + short stem LEFT (u/2) + full-unit vertical cap centered at stem end
    T: (u) => {
      const stemLen = u / 2; // half-unit stem (less intrusion)
      const capLen = u; // full-unit cap (same visual weight as elbow)
      const stemStart = { x: u / 2, y: 0 };
      const stemEnd = { x: stemStart.x - stemLen, y: 0 }; // left by u/2
      return [
        { a: { x: 0, y: 0 }, b: { x: u, y: 0 } }, // baseline
        { a: stemStart, b: stemEnd }, // short stem left
        // full-unit vertical cap centered at stem end (length = u)
        {
          a: { x: stemEnd.x, y: -capLen / 2 },
          b: { x: stemEnd.x, y: capLen / 2 },
        },
      ];
    },

    // Horizontal t: baseline + short stem RIGHT (u/2) + full-unit vertical cap at stem end
    t: (u) => {
      const stemLen = u / 2;
      const capLen = u;
      const stemStart = { x: u / 2, y: 0 };
      const stemEnd = { x: stemStart.x + stemLen, y: 0 }; // right by u/2
      return [
        { a: { x: 0, y: 0 }, b: { x: u, y: 0 } },
        { a: stemStart, b: stemEnd },
        {
          a: { x: stemEnd.x, y: -capLen / 2 },
          b: { x: stemEnd.x, y: capLen / 2 },
        }, // cap
      ];
    },
  },

  vertical: {
    "-": (u) => [{ a: { x: 0, y: 0 }, b: { x: 0, y: u } }],

    L: (u) => [
      { a: { x: 0, y: 0 }, b: { x: 0, y: u } },
      { a: { x: 0, y: u }, b: { x: u, y: u } },
    ],

    l: (u) => [
      { a: { x: 0, y: 0 }, b: { x: 0, y: u } },
      { a: { x: 0, y: u }, b: { x: -u, y: u } },
    ],

    // Vertical T: baseline + short stem DOWN (u/2) + full-unit horizontal cap at stem end
    T: (u) => {
      const stemLen = u / 2;
      const capLen = u;
      const stemStart = { x: 0, y: u / 2 };
      const stemEnd = { x: 0, y: stemStart.y + stemLen }; // down by u/2
      return [
        { a: { x: 0, y: 0 }, b: { x: 0, y: u } }, // baseline
        { a: stemStart, b: stemEnd }, // short stem down
        {
          a: { x: -capLen / 2, y: stemEnd.y },
          b: { x: capLen / 2, y: stemEnd.y },
        }, // horizontal cap (full unit)
      ];
    },

    // Vertical t: baseline + short stem UP (u/2) + full-unit horizontal cap at stem end
    t: (u) => {
      const stemLen = u / 2;
      const capLen = u;
      const stemStart = { x: 0, y: u / 2 };
      const stemEnd = { x: 0, y: stemStart.y - stemLen }; // up by u/2
      return [
        { a: { x: 0, y: 0 }, b: { x: 0, y: u } },
        { a: stemStart, b: stemEnd }, // short stem up
        {
          a: { x: -capLen / 2, y: stemEnd.y },
          b: { x: capLen / 2, y: stemEnd.y },
        }, // cap
      ];
    },
  },
};

export function buildSemanticDSL(
  spec: string | (string | number)[],
  mode: Mode = "horizontal",
  {
    origin = { x: 0, y: 0 },
    unit = 16,
    gapTokens = [".", "_"],
  }: { origin?: Point; unit?: number; gapTokens?: string[] } = {},
): { segments: Segment[]; points: Point[]; d: string } {
  // Tokenize while preserving whitespace characters as single tokens
  const tokens: string[] = [];
  if (Array.isArray(spec)) {
    for (const item of spec) {
      const s = String(item);
      if (s.length === 1) tokens.push(s);
      else tokens.push(...s.split(""));
    }
  } else {
    // keep whitespace
    tokens.push(...String(spec).split(""));
  }

  const segments: Segment[] = [];
  const points: Point[] = [];

  let cursor = { ...origin };
  const forward = mode === "horizontal" ? { x: unit, y: 0 } : { x: 0, y: unit };

  points.push({ ...cursor });

  for (const raw of tokens) {
    const token = String(raw);

    // whitespace (space, tab, newline) -> gap
    if (token.trim() === "" || gapTokens.includes(token)) {
      cursor = add(cursor, forward);
      points.push({ ...cursor });
      continue;
    }

    const shapeFn = SHAPES[mode][token];
    if (!shapeFn) {
      // unknown token: treat as gap for robustness
      cursor = add(cursor, forward);
      points.push({ ...cursor });
      continue;
    }

    const localSegs = shapeFn(unit);
    for (const s of localSegs) {
      const ta = add(cursor, s.a);
      const tb = add(cursor, s.b);
      segments.push({ a: ta, b: tb });
      points.push(ta, tb);
    }

    // advance cursor after placing the token
    cursor = add(cursor, forward);
    points.push({ ...cursor });
  }

  const d = segments
    .map((s) => `M ${s.a.x} ${s.a.y} L ${s.b.x} ${s.b.y}`)
    .join(" ");
  return { segments, points, d };
}

export function bbox(segments: Segment[]) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (const s of segments) {
    for (const p of [s.a, s.b]) {
      if (p.x < minX) minX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.x > maxX) maxX = p.x;
      if (p.y > maxY) maxY = p.y;
    }
  }
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}

export function mirror(
  segments: Segment[],
  axis: "horizontal" | "vertical",
  origin?: Point,
): Segment[] {
  if (!segments.length) return [];
  const bb = bbox(segments);
  const cx = origin ? origin.x : (bb.minX + bb.maxX) / 2;
  const cy = origin ? origin.y : (bb.minY + bb.maxY) / 2;
  const map = (p: Point) =>
    axis === "vertical"
      ? { x: cx - (p.x - cx), y: p.y }
      : { x: p.x, y: cy - (p.y - cy) };
  return segments.map((s) => ({ a: map(s.a), b: map(s.b) }));
}

export function rotate(
  segments: Segment[],
  deg: 0 | 90 | 180 | 270,
): Segment[] {
  if (deg === 0) return segments.map((s) => ({ a: { ...s.a }, b: { ...s.b } }));
  const bb = bbox(segments);
  const cx = (bb.minX + bb.maxX) / 2;
  const cy = (bb.minY + bb.maxY) / 2;
  const rot = (p: Point) => {
    const x = p.x - cx;
    const y = p.y - cy;
    let nx = x,
      ny = y;
    if (deg === 90) {
      nx = y;
      ny = -x;
    } else if (deg === 180) {
      nx = -x;
      ny = -y;
    } else if (deg === 270) {
      nx = -y;
      ny = x;
    }
    return { x: nx + cx, y: ny + cy };
  };
  return segments.map((s) => ({ a: rot(s.a), b: rot(s.b) }));
}

export function segmentsToD(segments: Segment[]) {
  return segments
    .map((s) => `M ${s.a.x} ${s.a.y} L ${s.b.x} ${s.b.y}`)
    .join(" ");
}
