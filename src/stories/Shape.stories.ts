import type { Meta, StoryObj } from "@storybook/react-vite";

import Shape from "../Dumb/Shape";

const meta = {
  title: "Dumb/Shape",
  component: Shape,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    stroke: {
      fill: "color",
      description: "Stroke color, need stroke-width",
    },
  },
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  name: "Shapes",
  args: {
    size: 199,
    sides: 3,
    fill: "var(--negative)",
    stroke: "transparent",
  },
};
