import type { Meta, StoryObj } from "@storybook/react-vite";

import Checkbox from "../Dumb/Checkbox";
import Group from "../Dumb/Group";

const meta = {
  title: "Dumb/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  name: "A checkbox",
  args: {
    checked: true,
  },
  render: (args) => (
    <Group
      dangerous={{
        gap: "var(--gap-1)",
        alignItems: "center",
      }}
      startWidth={"var(--min-height)"}
      start={<Checkbox {...args} />}
    >
      <label>{args.checked ? "I Agree" : "I do not Agree"}</label>
    </Group>
  ),
};

export const StoryB: Story = {
  name: "An intermediate checkbox",
  args: {
    checked: "mixed",
  },
  render: (args) => (
    <Group
      dangerous={{
        gap: "var(--gap-1)",
        alignItems: "center",
      }}
      startWidth={"var(--min-height)"}
      start={<Checkbox {...args} />}
    >
      <label>Might Agree</label>
    </Group>
  ),
};
