import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoHeartFill as IconHeartFill } from "react-icons/go";

import Button from "../Dumb/Button";
import useAnchor, { type AnchorProps } from "../Smart-ish/Anchor";

const HookAsComponent = (props: AnchorProps) => {
  // This component is only used for Storybook metadata.
  console.log({ props });
  return <></>;
};

const meta = {
  title: "Smart-ish/useAnchor",
  component: HookAsComponent,
  parameters: {
    layout: "centered",
    controls: { exclude: ["anchorName", "id"] },
  },
} satisfies Meta<typeof HookAsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  name: "Anchors <3",
  argTypes: {
    // include an explicit "undefined" option so the user can choose it from the select.
    placement: {
      control: "select",
      options: ["undefined", "top", "bottom", "left", "right"],
      description:
        "Choose placement (or select 'undefined' to let `positionArea` drive placement).",
    },
    positionArea: {
      control: "select",
      options: [
        undefined,
        "block-start",
        "inline-end",
        "block-end",
        "inline-start",
        "block-start center",
        "inline-end center",
        "block-end center",
        "inline-start center",
      ],
      description:
        "CSS position-area (e.g. block-start, inline-end, or `<area> center`)",
    },
  },
  args: {
    placement: "top",
    positionArea: undefined,
    id: "my-tooltip",
    anchorName: "--my-tooltip-anchor",
  },
  render: function Render(args) {
    // Map the story control sentinel "undefined" back to real undefined for the hook call.
    const placement =
      args.placement === "undefined" ? undefined : args.placement;
    const positionArea = args.positionArea;

    const { anchorProps, Popover } = useAnchor({
      id: args.id,
      anchorName: args.anchorName,
      placement,
      positionArea,
    });

    return (
      <>
        <Button {...anchorProps}>
          <IconHeartFill />
        </Button>

        <Popover className="neutral mxy" role="dialog">
          <p style={{ padding: 12 }}>I am a popover.</p>
          <p style={{ padding: 12 }}>
            placement: <strong>{String(placement)}</strong>
            <br />
            positionArea: <strong>{String(positionArea)}</strong>
          </p>
        </Popover>
      </>
    );
  },
};
