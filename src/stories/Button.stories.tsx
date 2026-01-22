import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoNorthStar as IconNorthStar } from "react-icons/go";
import { fn } from "storybook/test";

import Button from "../Dumb/Button";

const meta = {
  title: "Dumb/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  name: "A button with start & end ",
  args: {
    children: "Button",
    start: <IconNorthStar />,
    end: <IconNorthStar />,
  },
};

export const StoryB: Story = {
  name: "A button with start ",
  args: {
    children: "North",
    start: <IconNorthStar />,
  },
};

export const StoryC: Story = {
  name: "A button with end ",
  args: {
    children: "North",
    end: <IconNorthStar />,
  },
};

export const StoryD: Story = {
  name: "A button that is toggled ",
  args: {
    children: "North",
    isActive: true,
  },
};

export const StoryE: Story = {
  name: "An IconButton",
  args: {
    children: <IconNorthStar />,
    isIcon: true,
  },
};
