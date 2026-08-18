import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import Disclosure from "../Dumb/Group/Disclosure";
import { Col } from "../Dumb/Group/Flex";
import Radio from "../Dumb/Radio";
import Range from "../Dumb/Range";
import Select from "../Dumb/Select";
import Shape from "../Dumb/Shape";
import Switch from "../Dumb/Switch";

const meta = {
  title: "Dumb/Culdesac",
  component: Radio,
  parameters: {
    layout: "padded",
  },
  subcomponents: { Select, Range, Switch, Disclosure },
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

    const [newType, setNewType] = useState<string>("");
    const [on, setOn] = useState(true);

    return (
      <Col
        style={{
          gap: "var(--gap-1)",
          width: "min(400px, 80vw)",
        }}
      >
        <Select
          placeholder="Choose"
          value={newType}
          onChange={(e) => setNewType(e)}
        >
          <option value="file">File</option>
          <option value="folder">Folder</option>
        </Select>

        <Switch label="uuuuu" initial={on} onChangeValue={(v) => setOn(v)} />

        <Disclosure
          label="Disclosure contains content"
          summary={<p>Disclosure title</p>}
        >
          <Shape.Circle />
          <p>fjalñdjfaljdflajdflajdflj</p>
        </Disclosure>
      </Col>
    );
  },
};
