import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useHover } from "react-aria";
import { GoHeartFill as IconHeartFill, GoX as IconX } from "react-icons/go";

import Button from "../Dumb/Button";
import PortalParticipationProvider, {
  Participate,
  PortalTarget,
} from "../Inspired/Portal";

const meta = {
  title: "Inspired/Portal",
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
  const [state, setState] = useState<{
    details: boolean;
    sidebar: boolean;
    tooltip: boolean;
  }>({
    details: false,
    sidebar: false,
    tooltip: false,
  });

  const { hoverProps, isHovered } = useHover({
    onHoverStart: () => setState((prev) => ({ ...prev, tooltip: true })),
    onHoverEnd: () => setState((prev) => ({ ...prev, tooltip: false })),
  });
  return (
    <>
      <div
        {...hoverProps}
        onClick={() =>
          setState((prev) => ({
            ...prev,
            details: !prev.details,
            sidebar: true,
          }))
        }
        style={{
          border: "var(--border)",
          padding: "var(--gap-3)",
          cursor: "pointer",
          background: state.details ? "var(--neutral)" : "var(--white)",
        }}
      >
        <h4>{title}</h4>
        <p style={{ fontSize: 24 }}>{value}</p>
      </div>

      <Participate target="details" when={state.details}>
        <div>
          <div className="row place-items-center">
            <h4>{title} - Detailed View</h4>
            <Button
              isIcon
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  details: false,
                }))
              }
              className="ml-a circle"
            >
              <IconX />
            </Button>
          </div>
          <p>Trend: ↗️ +{trend}%</p>
          <p>Last updated: 2 minutes ago</p>
        </div>
      </Participate>

      <Participate target="sidebar" when={state.sidebar}>
        <Button
          isText
          onClick={() =>
            setState((prev) => ({
              ...prev,
              sidebar: !prev.sidebar,
            }))
          }
        >
          {title} ↗️ +{trend}%
        </Button>
      </Participate>

      <Participate target="tooltip" when={isHovered}>
        <p>↗️ +{trend}%</p>
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
              gap: "var(--gap-3)",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--gap-3)",
                alignItems: "stretch",
              }}
            >
              <MetricsWidget title="Revenue" value="$1.2M" trend={12} />
              <MetricsWidget title="Users" value="45K" trend={8} />
              <MetricsWidget title="LOC" value="500.200K" trend={20} />
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

          <PortalTarget
            id="sidebar"
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              display: "flex",
              gap: "var(--gap-3)",
              placeItems: "center",
              minHeight: "var(--min-height)",
            }}
            className="hasOneChild"
          >
            <IconHeartFill />
          </PortalTarget>

          <PortalTarget id="tooltip" className="tooltip"></PortalTarget>
        </PortalParticipationProvider>
      </>
    );
  },
};
