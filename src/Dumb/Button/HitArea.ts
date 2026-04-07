import { clsx } from "../../utils";

import styles from "./index.module.css";

type HitSize = "default" | "small" | "medium" | "large" | "xlarge";
type HitDir =
  | "center"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export interface HitOptions {
  hit?: HitSize; // default: "default"
  hitdir?: HitDir; // default: "center"
  debug?: boolean; // show visual hit area on hover/focus
  className?: string; // optional extra class(es)
}

/**
  <Button {...getHitAreaClasses({ hit: 'large', hitdir: 'top-right', debug: true })}>...</Button>
 */

export default function getHitAreaClasses(opts: HitOptions = {}) {
  const {
    hit = "default",
    hitdir = "center",
    debug = false,
    className = "",
  } = opts;

  const sizeMap: Record<HitSize, string> = {
    default: styles.sizeDefault,
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge,
    xlarge: styles.sizeXLarge,
  };

  const dirMap: Record<HitDir, string> = {
    center: styles.dirCenter,
    top: styles.dirTop,
    right: styles.dirRight,
    bottom: styles.dirBottom,
    left: styles.dirLeft,
    "top-right": styles.dirTopRight,
    "top-left": styles.dirTopLeft,
    "bottom-right": styles.dirBottomRight,
    "bottom-left": styles.dirBottomLeft,
  };

  const parts = [styles.hit];

  // add size and direction (guards in case of missing export)
  if (sizeMap[hit]) parts.push(sizeMap[hit]);
  if (dirMap[hitdir]) parts.push(dirMap[hitdir]);

  if (debug) parts.push(styles.debug);
  if (className) parts.push(className);
  const combined = clsx(parts).replaceAll(",", " ");
  return { className: combined, attrs: { className: combined } };
}
