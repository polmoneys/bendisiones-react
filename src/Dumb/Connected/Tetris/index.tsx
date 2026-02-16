import type { Mode, Point } from "./interfaces";
import { bbox, buildSemanticDSL, mirror, rotate, segmentsToD } from "./utils";

export default function TetrisConnectorPreviewSemantic({
  dsl,
  mode = "horizontal",
  origin = { x: 8, y: 8 },
  unit = 20,
  stroke = "#0a0",
  track = "#eee",
  thickness = 10,
  mirrorX = false,
  mirrorY = false,
  rotateDeg = 0 as 0 | 90 | 180 | 270,
  showPoints = false,
}: {
  dsl: string | (string | number)[];
  mode?: Mode;
  origin?: Point;
  unit?: number;
  stroke?: string;
  track?: string;
  thickness?: number;
  mirrorX?: boolean;
  mirrorY?: boolean;
  rotateDeg?: 0 | 90 | 180 | 270;
  showPoints?: boolean;
}) {
  const built = buildSemanticDSL(dsl, mode, { origin, unit });
  let segs = built.segments;
  if (mirrorX) segs = mirror(segs, "vertical");
  if (mirrorY) segs = mirror(segs, "horizontal");
  if (rotateDeg) segs = rotate(segs, rotateDeg);

  const d = segmentsToD(segs);
  const bb = segs.length
    ? bbox(segs)
    : { minX: 0, minY: 0, width: 120, height: 40 };
  const padding = 12;
  const vb = `${bb.minX - padding} ${bb.minY - padding} ${bb.width + padding * 2} ${bb.height + padding * 2}`;

  return (
    <svg
      viewBox={vb}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x={bb.minX - padding}
        y={bb.minY - padding}
        width={bb.width + padding * 2}
        height={bb.height + padding * 2}
        fill="#fafafa"
        stroke="none"
      />
      <path
        d={d}
        fill="none"
        stroke={track}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={Math.max(2, thickness - 2)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {showPoints &&
        segs
          .flatMap((s) => [s.a, s.b])
          .map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={2} fill="#333" />
          ))}
    </svg>
  );
}
