import type { Meta, StoryObj } from "@storybook/react-vite";

import Connected from "../Dumb/Connected";
import Tetris from "../Dumb/Connected/Tetris";

const meta = {
  title: "Dumb/Connected",
  component: Connected,
  subcomponents: { Tetris },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Connected>;

export default meta;

type Story = StoryObj<typeof meta>;
type TetrisStory = StoryObj<typeof Tetris>;

const STEPS = [
  { label: "Account", id: 0 },
  { label: "Profile", id: 1 },
  { label: "Confirm", id: 2 },
  { label: "Done", id: 3 },
];

export const ConnectedStoryA: Story = {
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    onBadge: { control: false },
    current: {
      control: {
        type: "number",
        min: 0,
        max: STEPS.length,
        step: 0.1,
      },
    },
    thickness: {
      control: {
        type: "number",
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
  args: {
    orientation: "horizontal",
    steps: STEPS,
    // shows first connector full, second connector 60%, second badge 60%
    current: 1.6,
  },
  name: "Steps",
  render: (args) => (
    <Connected
      steps={args.steps}
      current={args.current}
      orientation={args.orientation}
      onBadge={(i) => console.log("clicked", i)}
    />
  ),
};

export const TetrisStoryA: TetrisStory = {
  argTypes: {
    dsl: {
      control: "select",
      options: ["-", "L", "l", "T", "t", " "],
    },
    thickness: {
      control: {
        type: "number",
        min: 1,
        max: 10,
        step: 1,
      },
    },
    unit: {
      control: {
        type: "number",
        min: 1,
        max: 1000,
        step: 1,
      },
    },
    mode: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    dsl: "L",
    mode: "horizontal",
    unit: 44,
    stroke: "var(--negative)",
    track: "var(--grey)",
    thickness: 9,
    mirrorX: false,
    mirrorY: false,
    rotateDeg: 0,
    showPoints: false,
  },
  name: "Tetris piece",
  render: (args) => <Tetris {...args} />,
};

export const TetrisStoryB: TetrisStory = {
  argTypes: {
    mode: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    dsl: "- l t L T -",
    origin: { x: 8, y: 8 },
    unit: 18,
    stroke: "var(--negative)",
    track: "var(--grey)",
    thickness: 6,
    mirrorX: false,
    mirrorY: false,
    rotateDeg: 0,
    showPoints: false,
  },
  name: "Tetris secuence",
  render: (args) => <Tetris {...args} />,
};
