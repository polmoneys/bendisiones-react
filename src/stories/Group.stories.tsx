import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import {
  GoCalendar as CalendarIcon,
  GoNorthStar as NorthStarIcon,
} from "react-icons/go";

import Button from "../Dumb/Button";
import Checkbox from "../Dumb/Checkbox";
import Group from "../Dumb/Group";
import Container from "../Dumb/Group/Container";
import Kiss from "../Dumb/Group/Kiss";
import TextInput from "../Dumb/InputText";
import Media from "../Dumb/Media";
import Shape from "../Dumb/Shape";

const meta = {
  title: "Dumb/Group",
  component: Group,
  parameters: {
    layout: "centered",
  },
  subcomponents: { Kiss, Container },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  name: "A group with Start Slot",
  args: {
    children: "4 SIDES",
    dangerous: {
      alignItems: "center",
      gap: "var(--gap-2)",
      padding: "var(--gap-1) var(--gap-2)",
    },
    startWidth: "42px",
    start: <Shape.Square size={42} fill={"var(--neutral)"} />,
  },
  decorators: [
    (Story) => (
      <div className="group pxy">
        <Story />
      </div>
    ),
  ],
};

export const StoryB: Story = {
  name: "A group with End Slot",
  args: {
    children: "May 2026",
    endWidth: "42px",
    start: <CalendarIcon />,
  },
  decorators: [
    (Story) => (
      <div className="group pxy">
        <Story />
      </div>
    ),
  ],
};

export const StoryC: Story = {
  name: "A group with Start and End Slot",
  args: {
    children: (
      <TextInput
        id="test"
        value={""}
        onChange={(value) => console.log({ value })}
      />
    ),
    endWidth: "40px",
    startWidth: "69px",
    start: <label htmlFor="test">Search</label>,
    end: (
      <Button isIcon dangerous={{ paddingLeft: "11px" }}>
        <NorthStarIcon size={18} />
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <div className="group pxy">
        <Story />
      </div>
    ),
  ],
};

export const StoryAA: Story = {
  name: "Another group with Start Slot",
  args: {
    dangerous: {
      gap: "var(--gap-1)",
      alignItems: "center",
    },
    children: <label>I Agree</label>,
    startWidth: "var(--min-height)",
    start: <Checkbox />,
  },
  decorators: [
    (Story) => (
      <div className="group pxy">
        <Story />
      </div>
    ),
  ],
};

const cardSX = `
  & {
      height:min(690px, 66vh);
      aspect-ratio: 9/16;
  }

  &:not(:has(img)) {
    display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      width: fit-content;
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
`;
export const StoryD: Story = {
  name: "An sx container as Card",
  render: function Render() {
    return (
      <>
        <Container sx={cardSX}>
          <h3 className="clamp"> Card title </h3>
          <div className="card-summary">
            <p
              className="clamp"
              style={{ "--clamp-lines": 4 } as CSSProperties}
            >
              Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever
              pantecrator gloria at adstra et bellum parabus.{" "}
            </p>
          </div>

          <Button end={<NorthStarIcon />}>Click me </Button>
        </Container>
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="group">
        <Story />
      </div>
    ),
  ],
};

export const StoryE: Story = {
  name: "An sx container as Media Card",
  render: function Render() {
    return (
      <>
        <Container sx={cardSX}>
          <h3 className="clamp"> Plant Portrait </h3>
          <Media
            ratio="portrait"
            alt="Plant portrait"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Container>
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="group">
        <Story />
      </div>
    ),
  ],
};

const cardSXLandscape = `
  & {
      width:min(690px, 66vw);
      aspect-ratio: 16/9;
  }

  &:not(:has(img)) {
    display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
`;
export const StoryF: Story = {
  name: "An sx container as Card (landscape)",
  render: function Render() {
    return (
      <>
        <Container sx={cardSXLandscape}>
          <h3 className="clamp"> Card title </h3>
          <div className="card-summary">
            <p
              className="clamp"
              style={{ "--clamp-lines": 3 } as CSSProperties}
            >
              Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever
              pantecrator gloria at adstra et bellum parabus.{" "}
            </p>
          </div>

          <Button end={<NorthStarIcon />}>Click me </Button>
        </Container>
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="group">
        <Story />
      </div>
    ),
  ],
};

export const StoryG: Story = {
  name: "An sx container as Media Card (landscape)",
  render: function Render() {
    return (
      <>
        <Container sx={cardSXLandscape}>
          <h3 className="clamp"> Plant Landscape </h3>
          <Media
            ratio="landscape"
            alt="Plant landscape"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Container>
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="group">
        <Story />
      </div>
    ),
  ],
};
