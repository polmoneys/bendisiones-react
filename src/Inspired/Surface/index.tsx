import {
  type ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  useContext,
} from "react";

import { clsx } from "../../utils";

import styles from "./index.module.css";

export const SURFACE_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export type SurfaceLevel = (typeof SURFACE_LEVELS)[number];

export interface SurfaceProps extends ComponentPropsWithoutRef<"div"> {
  /** Steps above the surrounding surface. */
  offset: number;
  /**
   * Fix the visual weight of the shadow while the background continues to
   * respond to nesting. Defaults to the computed surface level.
   */
  shadowLevel?: SurfaceLevel;
}

const SurfaceContext = createContext<SurfaceLevel>(1);

function clampLevel(level: number): SurfaceLevel {
  const roundedLevel = Math.round(level);

  if (!Number.isFinite(roundedLevel)) return 1;

  return Math.max(1, Math.min(8, roundedLevel)) as SurfaceLevel;
}

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ offset, shadowLevel, className, children, ...props }, ref) => {
    const substrate = useContext(SurfaceContext);
    const level = clampLevel(substrate + offset);

    return (
      <SurfaceContext.Provider value={level}>
        <div
          {...props}
          ref={ref}
          className={clsx(styles.surface, className)}
          data-shadow-level={shadowLevel ?? level}
          data-surface-level={level}
        >
          {children}
        </div>
      </SurfaceContext.Provider>
    );
  },
);

Surface.displayName = "Surface";

export default Surface;
