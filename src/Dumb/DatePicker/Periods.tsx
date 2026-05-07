import Button from "../../Dumb/Button";
import { chunkByRanges } from "../../utilities/chunk";

import type { Period, PeriodId } from "./interfaces";

interface PeriodsProps {
  periods: Array<Period>;
  availablePeriods: Record<PeriodId, boolean>;
  selectedPeriod: string;
  setPeriod: (periodId: PeriodId) => void;
}
export default function Periods({
  periods,
  availablePeriods,
  selectedPeriod,
  setPeriod,
}: PeriodsProps) {
  const groups = chunkByRanges(periods, [
    [0, 4],
    [5, 10],
    [11, 13],
  ]);

  console.log({ groups });
  return groups.map((group, pos) => {
    return (
      <div
        key={`group-${pos}`}
        style={{
          display: "flex",
          width: "100%",
          gap: "var(--gap-3)",
          flexWrap: "wrap",
        }}
      >
        {group.map((p) => (
          <Button
            key={p.id}
            onClick={() => setPeriod(p.id)}
            disabled={!availablePeriods[p.id]}
            isActive={selectedPeriod === p.id}
          >
            {p.label}
          </Button>
        ))}
      </div>
    );
  });
}
