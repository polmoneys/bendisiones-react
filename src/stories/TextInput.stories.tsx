import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoHeartFill as IconHeart } from "react-icons/go";

import Button from "../Dumb/Button";
import Group from "../Dumb/Group";
import TextInput from "../Dumb/InputText";

const meta = {
  title: "Dumb/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    id: "input-story",
    name: "input",
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
            <Button
              isIcon
              aria-label="Save search"
              dangerous={{ paddingLeft: "11px" }}
            >
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
