import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { fn } from "storybook/test";

import Group from "../Dumb/Group";
import TextInput from "../Dumb/InputText";
import Button from "../Dumb/Button";

import { GoHeartFill as IconHeart } from "react-icons/go";

const meta = {
  title: "Dumb/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    id: "",
    name: "",
    placeholder: "Type something",
    onChange: (value) => console.log({ value }),
  },

  render: function Render(args) {
    const [input, setInput] = useState("");

    return (
      <>
        <Group
          start={<label htmlFor="test">Search</label>}
          startWidth="100px"
          endWidth="40px"
          end={
            <Button isIcon dangerous={{ paddingLeft: "11px" }}>
              <IconHeart size={18} />
            </Button>
          }
        >
          <TextInput
            {...args}
            id="test"
            value={input}
            onChange={(v) => setInput(v)}
          />
        </Group>
      </>
    );
  },
};
