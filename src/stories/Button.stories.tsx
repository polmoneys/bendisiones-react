import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoNorthStar as IconNorthStar } from "react-icons/go";
import { fn } from "storybook/test";

import Button from "../Dumb/Button";
import getHitAreaClasses from "../Dumb/Button/HitArea";
import { Col, Row } from "../Dumb/Group/Flex";

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

export const Story: Story = {
  name: "Playground",
  parameters: {
    layout: "centered",
  },
  args: {
    children: <></>,
  },
  render: function Render() {
    return (
      <>
        <Col style={{ gap: "var(--gap-2)" }}>
          <Button start={<IconNorthStar />}>North</Button>
          <Button end={<IconNorthStar />}>North</Button>
          <Button end={<IconNorthStar />} start={<IconNorthStar />}>
            North
          </Button>

          <Row style={{ gap: "var(--gap-2)" }}>
            <Button isActive ria-label="North" isIcon>
              <IconNorthStar />
            </Button>
            <Button aria-label="North" isIcon>
              <IconNorthStar />
            </Button>
          </Row>
        </Col>
      </>
    );
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
