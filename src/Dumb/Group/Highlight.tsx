import { Fragment } from "react/jsx-runtime";

import type { OwnershipMatches } from "../../utilities/ownership";
import { clsx } from "../../utils";

import styles from "./index.module.css";

interface Props {
  input: OwnershipMatches | string;
}

export default function HighlightedText({ input }: Props) {
  const isString = typeof input === "string";

  return (
    <div className={clsx(styles.tokens)} style={{ whiteSpace: "pre-wrap" }}>
      {isString
        ? input
        : input.map((s, i) => (
            <Fragment key={i}>
              <span
                className={clsx(styles.token)}
                data-token-index={`token-${i}`}
                style={{ fontWeight: "var(--font-bold)" }}
              >
                {s.who}
              </span>
              <span
                className={clsx(styles.token)}
                data-token-index={`token-${i}`}
                style={{ textDecoration: "underline" }}
              >
                {s.what}
              </span>
            </Fragment>
          ))}
    </div>
  );
}
