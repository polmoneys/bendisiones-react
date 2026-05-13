import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Group from "../Dumb/Group";
import { Col } from "../Dumb/Group/Flex";
import Radio from "../Dumb/Radio";
import Shape from "../Dumb/Shape";

const meta = {
  title: "Dumb/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  name: "Playground",
  args: {
    id: "",
    name: "",
    checked: true,
    value: "",
    children: ({ checked }) => <p>{checked ? "🆒" : "❌"}</p>,
    onChangeAsString: (value) => console.log({ value }),
  },

  render: function Render() {
    // const [{ isChecked }, updateArgs] = useArgs();

    // function onChange() {
    //     updateArgs({ isChecked: !isChecked });
    // }

    const [selectedRadio, setRadio] = useState<Record<string, string> | null>(
      null,
    );

    return (
      <Col
        style={{
          gap: "var(--gap-1)",
        }}
      >
        <Radio
          id="rating-1"
          value="alpha"
          name="rating-c"
          checked={selectedRadio?.rating === "alpha"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <Group
                start={
                  <Shape.Circle
                    size={42}
                    fill={checked ? "var(--negative)" : "var(--neutral)"}
                  />
                }
                startWidth={"42px"}
                dangerous={{
                  alignItems: "center",
                  gap: "var(--gap-2)",
                  padding: "var(--gap-1) var(--gap-2)",
                }}
              >
                <b>Option 1</b>
              </Group>
            );
          }}
        </Radio>

        <Radio
          id="rating-2"
          value="beta"
          name="rating-c"
          checked={selectedRadio?.rating === "beta"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <Group
                start={
                  <Shape.Circle
                    size={42}
                    fill={checked ? "var(--negative)" : "var(--neutral)"}
                  />
                }
                startWidth={"42px"}
                dangerous={{
                  alignItems: "center",
                  gap: "var(--gap-2)",
                  padding: "var(--gap-1) var(--gap-2)",
                  borderRadius: "var(--border-radius)",
                }}
              >
                <b>Option 2</b>
              </Group>
            );
          }}
        </Radio>

        <Radio
          id="rating-3"
          value="delta"
          name="rating-c"
          checked={selectedRadio?.rating === "delta"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <Group
                start={
                  <Shape.Circle
                    size={42}
                    fill={checked ? "var(--negative)" : "var(--neutral)"}
                  />
                }
                startWidth={"42px"}
                dangerous={{
                  alignItems: "center",
                  gap: "var(--gap-2)",
                  padding: "var(--gap-1) var(--gap-2)",
                }}
              >
                <b>Option 3</b>
              </Group>
            );
          }}
        </Radio>

        <Radio
          id="rating-4"
          value="epsilon"
          name="rating-c"
          checked={selectedRadio?.rating === "epsilon"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <Group
                start={
                  <Shape.Circle
                    size={42}
                    fill={checked ? "var(--negative)" : "var(--neutral)"}
                  />
                }
                startWidth={"42px"}
                dangerous={{
                  alignItems: "center",
                  gap: "var(--gap-2)",
                  padding: "var(--gap-1) var(--gap-2)",
                }}
              >
                <b>Option 4</b>
              </Group>
            );
          }}
        </Radio>
      </Col>
    );
  },
};

export const StoryB: Story = {
  name: "Custom radios",
  args: {
    id: "",
    name: "",
    checked: true,
    value: "",
    children: ({ checked }) => <p>{checked ? "🆒" : "❌"}</p>,
    onChangeAsString: (value) => console.log({ value }),
  },

  render: function Render() {
    const [selectedRadio, setRadio] = useState<Record<string, string> | null>(
      null,
    );

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--gap-1)",
        }}
      >
        <Radio
          id="rating-1"
          value="alpha"
          name="rating"
          checked={selectedRadio?.rating === "alpha"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <div
                style={{
                  placeItems: "center",
                  placeContent: "center",
                  textAlign: "center",
                  minWidth: "calc(var(--min-height) * 2)",
                  aspectRatio: "2.4/3",
                  backgroundColor: "var(--neutral)",
                  borderRadius: "var(--border-radius)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {checked ? (
                  <Shape.Square fill="var(--negative)" />
                ) : (
                  <b>Alpha</b>
                )}
              </div>
            );
          }}
        </Radio>

        <Radio
          id="rating-2"
          value="beta"
          name="rating"
          checked={selectedRadio?.rating === "beta"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <div
                style={{
                  placeItems: "center",
                  placeContent: "center",
                  textAlign: "center",
                  minWidth: "calc(var(--min-height) * 2)",
                  aspectRatio: "2.4/3",
                  backgroundColor: "var(--neutral)",
                  borderRadius: "var(--border-radius)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {checked ? (
                  <Shape.Square fill="var(--negative)" />
                ) : (
                  <b>Beta</b>
                )}
              </div>
            );
          }}
        </Radio>

        <Radio
          id="rating-3"
          value="delta"
          name="rating"
          checked={selectedRadio?.rating === "delta"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <div
                style={{
                  placeItems: "center",
                  placeContent: "center",
                  textAlign: "center",
                  minWidth: "calc(var(--min-height) * 2)",
                  aspectRatio: "2.4/3",
                  backgroundColor: "var(--neutral)",
                  borderRadius: "var(--border-radius)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {checked ? (
                  <Shape.Square fill="var(--negative)" />
                ) : (
                  <b>Delta</b>
                )}
              </div>
            );
          }}
        </Radio>

        <Radio
          id="rating-4"
          value="epsilon"
          name="rating"
          checked={selectedRadio?.rating === "epsilon"}
          onChangeAsString={(value) => {
            setRadio({ rating: value });
          }}
        >
          {({ checked }) => {
            return (
              <div
                style={{
                  placeItems: "center",
                  placeContent: "center",
                  textAlign: "center",
                  minWidth: "calc(var(--min-height) * 2)",
                  aspectRatio: "2.4/3",
                  backgroundColor: "var(--neutral)",
                  borderRadius: "var(--border-radius)",
                  boxShadow: "var(--shadow)",
                }}
              >
                {checked ? (
                  <Shape.Square fill="var(--negative)" />
                ) : (
                  <b>Epsilon</b>
                )}
              </div>
            );
          }}
        </Radio>
      </div>
    );
  },
};
