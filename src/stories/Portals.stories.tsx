import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import PortalParticipationProvider, {
  Participate,
  PortalTarget,
} from "../Inspired/Portal";

const meta = {
  title: "Dumb/Portal",
  subcomponents: { Participate, PortalParticipationProvider, PortalTarget },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Participate>;

export default meta;
type Story = StoryObj<typeof meta>;

function MetricsWidget({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  trend: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          border: "var(--border)",
          padding: "var(--gap-3)",
          cursor: "pointer",
          background: expanded ? "var(--neutral)" : "var(--white)",
        }}
      >
        <h4>{title}</h4>
        <p style={{ fontSize: 24 }}>{value}</p>
      </div>

      <Participate target="details" when={expanded}>
        <div>
          <h4>{title} - Detailed View</h4>
          <p>Trend: ↗️ +{trend}%</p>
          <p>Last updated: 2 minutes ago</p>
          <button onClick={() => setExpanded(false)}>Close</button>
        </div>
      </Participate>
    </>
  );
}
export const StoryA: Story = {
  name: "Portals <3",
  render: function Render() {
    return (
      <>
        <PortalParticipationProvider>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "var(--gap-3)",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--gap-3)",
                alignItems: "stretch",
              }}
            >
              <MetricsWidget title="Revenue" value="$1.2M" trend={12} />
              <MetricsWidget title="Users" value="45K" trend={8} />
            </div>

            <PortalTarget
              id="details"
              style={{
                border: "var(--border)",
                padding: "var(--gap-3)",
              }}
            >
              <p>Details</p>
              {/* Widget details appear here */}
            </PortalTarget>
          </div>
        </PortalParticipationProvider>
      </>
    );
  },
};
