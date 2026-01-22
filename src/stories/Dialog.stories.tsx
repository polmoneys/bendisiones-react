import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoX as IconX } from "react-icons/go";

// import useURLLite from "../Inspired/Dialog/useURLLite";
// import { callAll } from "../utils";
import Button from "../Dumb/Button";
import Shape from "../Dumb/Shape";
import Dialog from "../Inspired/Dialog";
import ActionSheet from "../Inspired/Dialog/ActionSheet";
import Tray from "../Inspired/Dialog/Tray";
import useURL from "../utilities/useURL";

const meta = {
  title: "Dumb/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  subcomponents: { Tray, ActionSheet },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  args: {
    isOpen: false,
    onClose: () => ({}),
  },
  name: "Dialog, Tray, ActionSheet",
  render: function Render() {
    const { onOpenTray, onOpenDialog, onOpenSheet, dialogs, onClose } =
      useURL();
    const isTrayOpen = dialogs === "tray";
    const isDialogOpen = dialogs === "dialog";
    const isSheetOpen = dialogs === "sheet";

    // const { state, onOpen, onClose: onClose2 } = useURLLite(["tray2"]);
    // const isTrayOpen2 = state === "tray2";

    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--gap-1)" }}>
          <Button onClick={() => onOpenDialog()}>Dialog </Button>
          <Button onClick={() => onOpenTray()}>Tray </Button>
          {/*<Button onClick={() => onOpen("tray2")}>Tray open 2</Button>*/}
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
        </div>

        <br />

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
            }}
          >
            <Button
              isText
              onClick={onClose}
              // onClick={callAll(onClose, onClose2)}
              end={<IconX />}
            >
              Close
            </Button>
          </Dialog.Actions>
        </Tray>
      </>
    );
  },
};
