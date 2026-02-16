import { type ReactNode, useCallback, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useHover } from "react-aria";
import {
  GoHeartFill as IconHeartFill,
  GoTrash as TrashIcon,
} from "react-icons/go";

import Button from "../Dumb/Button";
import { Row } from "../Dumb/Group/Flex";
import TextInput from "../Dumb/InputText";
import PointerTracker from "../Dumb/PointerTracker";
import PortalParticipationProvider, {
  Participate,
  PortalTarget,
} from "../Inspired/Portal";
import PortalWindow from "../Inspired/Portal/Window";

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
          <Row className="place-items-center">
            <h4>{title} - Detailed View</h4>
            <Button
              isIcon
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  details: false,
                }))
              }
              className="ml-a"
            >
              <TrashIcon />
            </Button>
          </Row>
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
        <MetricsTooltip>↗️ +{trend}%</MetricsTooltip>
      </Participate>
    </>
  );
}

function MetricsTooltip({ children }: { children: ReactNode }) {
  return (
    <PointerTracker
      style={{
        backgroundColor: "var(--positive)",
        padding: "var(--pxy)",
        borderRadius: "var(--border-radius)",
        boxShadow: "var(--shadow)",
      }}
      offset={{ x: 20, y: 20 }}
    >
      {children}
    </PointerTracker>
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
            className="has-one-child"
          >
            <IconHeartFill />
          </PortalTarget>

          <PortalTarget id="tooltip"></PortalTarget>
        </PortalParticipationProvider>
      </>
    );
  },
};

type Metric = {
  title: string;
  value: string;
  trend: number;
};
function MetricsWidget2({
  metric,
  onOpen,
}: {
  metric: Metric;
  onOpen: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      style={{
        border: "var(--border)",
        padding: "var(--gap-3)",
        cursor: "pointer",
        background: "var(--white)",
      }}
    >
      <h4>{metric.title}</h4>
      <p style={{ fontSize: 24 }}>{metric.value}</p>
    </div>
  );
}

export const StoryB: Story = {
  name: "Detachable",
  render: function Render() {
    const [activeMetric, setActiveMetric] = useState<Metric | null>(null);
    const [detached, setDetached] = useState(false);

    const [q, setq] = useState("");

    const metrics: Metric[] = [
      { title: "Revenue", value: "$1.2M", trend: 12 },
      { title: "Users", value: "45K", trend: 8 },
      { title: "LOC", value: "500.200K", trend: 20 },
    ];
    const onClose = useCallback(() => setDetached(false), [setDetached]);

    return (
      <PortalParticipationProvider>
        <div
          style={{
            display: "grid",
            gap: "var(--gap-3)",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {metrics.map((m) => (
            <MetricsWidget2
              key={m.title}
              metric={m}
              onOpen={() => {
                setActiveMetric(m);
                setDetached(false);
              }}
            />
          ))}
        </div>

        {!detached && (
          <PortalTarget
            id="details"
            style={{
              marginTop: "var(--gap-4)",
              border: "var(--border)",
              padding: "var(--gap-3)",
              minHeight: 120,
            }}
          >
            {!activeMetric && <p>Select a metric to see details</p>}
          </PortalTarget>
        )}

        {detached && activeMetric && (
          <PortalWindow
            id="details"
            title={`${activeMetric.title} — Details`}
            features="width=480,height=320,left=300,top=200"
            onClose={onClose}
          />
        )}

        <Participate target="details" when={!!activeMetric}>
          {activeMetric && (
            <div>
              <Row className="place-items-center">
                <h4>{activeMetric.title} — Detailed View</h4>

                <Button
                  isText
                  className="ml-a"
                  onClick={() => setDetached((d) => !d)}
                >
                  {detached ? "Attach back" : "Detach"}
                </Button>

                <Button
                  isText
                  onClick={() => {
                    setActiveMetric(null);
                    setDetached(false);
                  }}
                >
                  Close
                </Button>
              </Row>

              <TextInput id="grrr" value={q} onChange={(v) => setq(v)} />
              <p style={{ marginTop: 12 }}>Trend: ↗️ +{activeMetric.trend}%</p>
              <p>Last updated: 2 minutes ago</p>
            </div>
          )}
        </Participate>
      </PortalParticipationProvider>
    );
  },
};
