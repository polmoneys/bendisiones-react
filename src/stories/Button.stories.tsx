import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoNorthStar as IconNorthStar } from "react-icons/go";
import { fn } from "storybook/test";

import Button from "../Dumb/Button";
import getHitAreaClasses from "../Dumb/Button/HitArea";
import { Row } from "../Dumb/Group/Flex";

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
    "aria-label": "Search",
    children: <IconNorthStar />,
    isIcon: true,
  },
};

export const StoryHit: Story = {
  name: "Hit area",
  parameters: {
    layout: "padded",
  },
  args: {
    children: <></>,
  },
  render: function Render() {
    return (
      <>
        <Row wrap style={{ gap: "var(--gap-2)" }}>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "top-left",
                debug: true,
              }).className
            }
            end={<IconNorthStar />}
          >
            Top left
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "top-right",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Top right
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Center
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "bottom-left",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Bottom left
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "bottom-right",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Bottom right
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "top",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Top
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "right",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Right
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "left",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Left
          </Button>
          <Button
            className={
              getHitAreaClasses({
                hit: "large",
                hitdir: "bottom",
                debug: true,
              }).className
            }
            start={<IconNorthStar />}
          >
            Bottom
          </Button>
        </Row>
      </>
    );
  },
};
