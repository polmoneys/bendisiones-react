import type { Meta, StoryObj } from "@storybook/react-vite";

import RangePeriod from "../Dumb/RangePeriod";
import { repeatGradient } from "../utilities/gradients";

const meta = {
  title: "Dumb/RangePeriod",
  component: RangePeriod,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RangePeriod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  name: "Range period",
  args: {
    id: "test-range-multi",
    min: 0,
    max: 100,
    initialMin: 12,
    initialMax: 66,
    onChange: (min, max) => console.log({ min, max }),
  },

  render: function Render(args) {
    return (
      <>
        <label className="offscreen" htmlFor={`${args.id}-min`}>
          Select min
        </label>
        <div
          style={{
            height: "10px",
            background: repeatGradient(
              { start: "transparent", end: "currentColor" },
              "2%",
              "x",
            ),
          }}
        />
        <RangePeriod {...args} />
        <label className="offscreen" htmlFor={`${args.id}-max`}>
          Select max
        </label>
      </>
    );
  },
};
