import { type CSSProperties, Fragment, type ReactNode } from "react";

import { clamp } from "../../utilities/clamp";

import Badge from "./Badge";
import Connector from "./Connector";

import styles from "./index.module.css";

/*

  <Connected
    steps={[{label:'Account'}, {label:'Profile'}, {label:'Confirm'}, {label:'Done'}]}
    current={1.6}
    onBadge={(i) => console.log('clicked', i)}
  />

 */

interface Step {
  id: string | number;
  label?: ReactNode;
  disabled?: boolean;
}
export type Orientation = "horizontal" | "vertical";

interface ConnectedProps {
  steps: Array<Step>;
  /** continuous value where integer N means the Nth step is exactly reached. Can be fractional. */
  current: number;
  orientation?: Orientation;
  size?: number;
  thickness?: number;
  gap?: string;
  onBadge?: (index: number) => void;
  fixedWidthVerticalLayout?: string;
}

export default function Connected({
  steps,
  current,
  orientation = "horizontal",
  size = 66,
  thickness = 8,
  gap = "var(--gap-3)",
  onBadge,
  fixedWidthVerticalLayout = "36px",
}: ConnectedProps) {
  const horizontal = orientation === "horizontal";

  const containerStyle: CSSProperties = {
    flexDirection: horizontal ? "row" : "column",
    gap,
  };

  const containerStepStyle: CSSProperties = {
    gap,
  };

  return (
    <div
      style={containerStyle}
      className={styles.connected}
      role="list"
      aria-orientation={orientation}
    >
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;

        return (
          <Fragment key={`item-connected-${step.id}`}>
            <div
              role="listitem"
              style={containerStepStyle}
              className={styles.item}
            >
              <Badge
                index={i}
                progress={clamp(current - i)}
                size={size}
                onBadge={onBadge}
                disabled={step.disabled ?? false}
              />

              {step.label ? <p>{step.label}</p> : null}
            </div>

            {!isLast && (
              <Connector
                progress={clamp(current - i)}
                orientation={orientation}
                thickness={thickness}
                length={horizontal ? "100%" : fixedWidthVerticalLayout}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
