import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties, ReactNode } from "react";

import Surface, {
  SURFACE_LEVELS,
  type SurfaceLevel,
} from "../Inspired/Surface";

const panelStyle: CSSProperties = {
  borderRadius: "var(--border-radius)",
  display: "grid",
  gap: "var(--gap-1)",
  minWidth: "8rem",
  padding: "var(--gap-2)",
};

const meta = {
  title: "Inspired/Surface",
  component: Surface,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Surface",
    offset: 2,
  },
  argTypes: {
    offset: {
      control: { type: "range", min: 0, max: 7, step: 1 },
      description: "Steps above the surrounding surface",
    },
    shadowLevel: {
      control: {
        labels: { undefined: "Auto" },
        type: "select",
      },
      description:
        "Optional fixed shadow weight; Auto follows the computed surface level",
      options: [undefined, ...SURFACE_LEVELS],
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

function ThemeFrame({
  children,
  scheme,
}: {
  children: ReactNode;
  scheme: "light" | "dark";
}) {
  return (
    <div
      style={{
        backgroundColor: scheme === "light" ? "#fafafa" : "#171717",
        color: scheme === "light" ? "#171717" : "#f5f5f5",
        colorScheme: scheme,
        display: "grid",
        gap: "var(--gap-3)",
        padding: "var(--gap-4)",
      }}
    >
      <strong>{scheme === "light" ? "Light" : "Dark"}</strong>
      {children}
    </div>
  );
}

export const Playground: Story = {
  render: function Render({ children, style, ...args }) {
    return (
      <ThemeFrame scheme="dark">
        <Surface {...args} style={{ ...panelStyle, ...style }}>
          {children}
        </Surface>
      </ThemeFrame>
    );
  },
};

function Level({ level }: { level: SurfaceLevel }) {
  return (
    <Surface
      offset={level - 1}
      shadowLevel={level}
      style={{
        ...panelStyle,
        aspectRatio: "1",
        minWidth: "5rem",
        placeContent: "center",
        textAlign: "center",
      }}
    >
      <strong>{level}</strong>
    </Surface>
  );
}

function Ladder({ scheme }: { scheme: "light" | "dark" }) {
  return (
    <ThemeFrame scheme={scheme}>
      <div
        style={{
          display: "grid",
          gap: "var(--gap-3)",
          gridTemplateColumns: "repeat(4, minmax(5rem, 1fr))",
        }}
      >
        {SURFACE_LEVELS.map((level) => (
          <Level key={level} level={level} />
        ))}
      </div>
    </ThemeFrame>
  );
}

export const Levels: Story = {
  args: {
    children: undefined,
  },
  parameters: {
    controls: { disable: true },
    layout: "padded",
  },
  render: function Render() {
    return (
      <div
        style={{
          display: "grid",
          gap: "var(--gap-3)",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <Ladder scheme="light" />
        <Ladder scheme="dark" />
      </div>
    );
  },
};

function NestedSurfaces({ scheme }: { scheme: "light" | "dark" }) {
  return (
    <ThemeFrame scheme={scheme}>
      <Surface offset={0} shadowLevel={1} style={panelStyle}>
        <strong>Page · 1</strong>
        <Surface offset={1} shadowLevel={2} style={panelStyle}>
          <strong>Card · 2</strong>
          <Surface offset={2} shadowLevel={3} style={panelStyle}>
            <strong>Popover · 4</strong>
            <Surface offset={1} shadowLevel={2} style={panelStyle}>
              <strong>Menu · 5</strong>
            </Surface>
          </Surface>
        </Surface>
      </Surface>
    </ThemeFrame>
  );
}

export const Nesting: Story = {
  args: {
    children: undefined,
  },
  parameters: {
    controls: { disable: true },
    layout: "padded",
  },
  render: function Render() {
    return (
      <div
        style={{
          display: "grid",
          gap: "var(--gap-3)",
          gridTemplateColumns: "repeat(2, minmax(16rem, 1fr))",
        }}
      >
        <NestedSurfaces scheme="light" />
        <NestedSurfaces scheme="dark" />
      </div>
    );
  },
};
