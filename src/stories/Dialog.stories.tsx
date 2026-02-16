import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoX as IconX } from "react-icons/go";

// import useURLLite from "../Inspired/Dialog/useURLLite";
// import { callAll } from "../utils";
import Button from "../Dumb/Button";
import { Row } from "../Dumb/Group/Flex";
import Shape from "../Dumb/Shape";
import Dialog from "../Smart-ish/Dialog";
import ActionSheet from "../Smart-ish/Dialog/ActionSheet";
import Tray from "../Smart-ish/Dialog/Tray";
import useURL from "../utilities/useURL";

const meta = {
  title: "Smart-ish/Windows",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  subcomponents: { Dialog, Tray, ActionSheet },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  args: {
    isOpen: false,
    onClose: () => ({}),
  },
  name: "Dialog",
  render: function Render() {
    const { onOpenDialog, dialogs, onClose } = useURL();
    const isDialogOpen = dialogs === "dialog";

    return (
      <>
        <Button onClick={() => onOpenDialog()}>Dialog </Button>

        <Dialog isOpen={isDialogOpen} onClose={() => onClose()}>
          <Dialog.Title
            dangerous={{
              display: "flex",
              alignItems: "center",
              minHeight: "var(--min-height)",
              padding: "0 var(--gap-2) 0 var(--gap-3)",
            }}
          >
            <p>Lorem ipsun dolor</p>
            <Button isIcon className="ml-a" onClick={() => onClose()} isText>
              <IconX size={36} />
            </Button>
          </Dialog.Title>

          <Dialog.Content
            dangerous={{
              placeContent: "center",
              textAlign: "center",
            }}
          >
            <Shape.Triangle size={50} />
          </Dialog.Content>

          <Dialog.Actions
            dangerous={{
              display: "flex",
              alignItems: "center",
              minHeight: "var(--min-height)",
              justifyContent: "flex-end",
              padding: "var(--gap-2) var(--gap-4) var(--gap-2)",
            }}
          >
            <Button onClick={() => onClose()}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    );
  },
};

export const StoryB: Story = {
  args: {
    isOpen: false,
    onClose: () => ({}),
  },
  name: "ActionSheet",
  render: function Render() {
    const { onOpenSheet, dialogs, onClose } = useURL();

    const isSheetOpen = dialogs === "sheet";

    return (
      <>
        <Row style={{ flexWrap: "wrap", gap: "var(--gap-1)" }}>
          <ActionSheet
            trigger={({ isOpen }) => {
              return (
                <Button
                  type="button"
                  onClick={() => onOpenSheet()}
                  aria-expanded={isOpen}
                >
                  Action sheet
                </Button>
              );
            }}
            unTrigger={({ onClose: onCloseLocal }) => {
              return (
                <Button type="reset" onClick={onCloseLocal}>
                  Cancel
                </Button>
              );
            }}
            isOpen={isSheetOpen}
            onClose={() => onClose()}
          >
            <Button onClick={(event) => event.preventDefault()}>
              Action 1
            </Button>
            <Button onClick={(event) => event.preventDefault()}>
              Action 2
            </Button>
            <Button onClick={(event) => event.preventDefault()}>
              Action 3
            </Button>
          </ActionSheet>
        </Row>
      </>
    );
  },
};

export const StoryC: Story = {
  args: {
    isOpen: false,
    onClose: () => ({}),
  },
  name: "Tray ",
  render: function Render() {
    const { onOpenTray, dialogs, onClose } = useURL();
    const isTrayOpen = dialogs === "tray";

    return (
      <>
        <Button onClick={() => onOpenTray()}>Tray </Button>
        <Tray
          isOpen={isTrayOpen}
          onClose={onClose}
          // isOpen={isTrayOpen || isTrayOpen2}
          // onClose={callAll(onClose, onClose2)}
        >
          <Dialog.Title
            dangerous={{
              display: "flex",
              alignItems: "center",
              minHeight: "var(--min-height)",
              padding: "0 var(--gap-2) 0 var(--gap-3)",
            }}
          >
            <p>Lorem ipsun dolor</p>
          </Dialog.Title>

          <Dialog.Content
            dangerous={{
              placeContent: "center",
              textAlign: "center",
            }}
          >
            <Shape.Square size={50} />
          </Dialog.Content>

          <Dialog.Actions
            className="mt-a"
            dangerous={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "var(--gap-2)",
            }}
          >
            <Button
              isIcon
              isText
              onClick={onClose}
              // onClick={callAll(onClose, onClose2)}
            >
              <IconX size={64} />
            </Button>
          </Dialog.Actions>
        </Tray>
      </>
    );
  },
};
