import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  GoCalendar as CalendarIcon,
  GoNorthStar as NorthStarIcon,
  // GoStack as StackIcon,
} from "react-icons/go";

import Button from "../Dumb/Button";
import Checkbox from "../Dumb/Checkbox";
import Group from "../Dumb/Group";
import Container from "../Dumb/Group/Container";
import { Col, Row } from "../Dumb/Group/Flex";
import Grid from "../Dumb/Group/Grid2068";
import Kiss from "../Dumb/Group/Kiss";
import Mua from "../Dumb/Group/Kiss";
import Stack from "../Dumb/Group/Stack";
import TextInput from "../Dumb/InputText";
import Media from "../Dumb/Media";
import Shape from "../Dumb/Shape";

const meta = {
  title: "Dumb/Group",
  component: Group,
  parameters: {
    layout: "centered",
  },
  subcomponents: { Kiss, Container, Grid, Stack },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryD: Story = {
  name: "Playground",

  render: function Render() {
    return (
      <Col
        style={{
          gap: "var(--gap-4)",
        }}
      >
        <Group
          className="group"
          dangerous={{
            alignItems: "center",
            gap: "var(--gap-2)",
            padding: "var(--gap-1) var(--gap-2)",
            width: "fit-content",
          }}
          start={<Shape.Square size={42} fill={"var(--neutral)"} />}
          startWidth="42px"
        >
          4 SIDES
        </Group>
        <Group
          className="group"
          dangerous={{
            alignItems: "center",
            width: "fit-content",
            padding: "var(--gap-1) var(--gap-2)",
          }}
          start={
            <label htmlFor="test" style={{ marginRight: "var(--gap-2)" }}>
              Search
            </label>
          }
          end={
            <Button isIcon dangerous={{ paddingLeft: "11px" }}>
              <NorthStarIcon size={18} />
            </Button>
          }
          startWidth="69px"
          endWidth="40px"
        >
          <TextInput
            id="test"
            value={""}
            style={{ width: "100%" }}
            onChange={(value) => console.log({ value })}
          />
        </Group>

        <Group
          className="group"
          dangerous={{
            gap: "var(--gap-1)",
            alignItems: "center",
            padding: "var(--gap-1) var(--gap-2)",
            width: "fit-content",
          }}
          start={<Checkbox />}
          startWidth="var(--min-height)"
        >
          <label>I Agree</label>
        </Group>

        <Group
          dangerous={{
            gap: "var(--gap-1)",
            width: "fit-content",
            alignItems: "center",
            padding: "var(--gap-1) var(--gap-2)",
          }}
          className="group"
          start={<CalendarIcon />}
          startWidth="var(--min-height)"
          endWidth="42px"
        >
          May 2026
        </Group>
      </Col>
    );
  },
};

export const StoryKiss: Story = {
  name: "Kiss makes 2 elements responsive",
  parameters: {
    layout: "padded",
  },
  render: function Render() {
    return (
      <>
        <Row style={{ gap: "var(--gap-5)", flexWrap: "wrap" }}>
          <div style={{ maxWidth: "120px" }}>
            <Mua
              className="pxy"
              dangerous={{
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                gap: "var(--gap-5)",
                height: "fit-content",
              }}
            >
              <p style={{ display: "flex", flexWrap: "wrap" }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p
                style={{
                  display: "flex",
                  backgroundColor: "var(--positive)",
                  padding: "0.1em 0.3em",
                  borderRadius: ".2em",
                }}
              >
                North
              </p>
            </Mua>
          </div>

          <div style={{ maxWidth: "140px" }}>
            <Mua
              className="pxy"
              dangerous={{
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                height: "fit-content",
                gap: "var(--gap-5)",
              }}
            >
              <p style={{ display: "flex", flexWrap: "wrap" }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p
                style={{
                  display: "flex",
                  backgroundColor: "var(--positive)",
                  padding: "0.1em 0.3em",
                  borderRadius: ".2em",
                }}
              >
                North
              </p>
            </Mua>
          </div>
          <div style={{ maxWidth: "160px" }}>
            <Mua
              className="pxy"
              dangerous={{
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                height: "fit-content",
                gap: "var(--gap-5)",
              }}
            >
              <p style={{ display: "flex", flexWrap: "wrap" }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p
                style={{
                  display: "flex",
                  backgroundColor: "var(--positive)",
                  padding: "0.1em 0.3em",
                  borderRadius: ".2em",
                }}
              >
                North
              </p>
            </Mua>
          </div>
          <div style={{ maxWidth: "180px" }}>
            <Mua
              className="pxy"
              dangerous={{
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                height: "fit-content",
                gap: "var(--gap-5)",
              }}
            >
              <p style={{ display: "flex", flexWrap: "wrap" }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p
                style={{
                  display: "flex",
                  backgroundColor: "var(--positive)",
                  padding: "0.1em 0.3em",
                  borderRadius: ".2em",
                }}
              >
                North
              </p>
            </Mua>
          </div>
          <div style={{ maxWidth: "200px" }}>
            <Mua
              className="pxy"
              dangerous={{
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                height: "fit-content",
                gap: "var(--gap-5)",
              }}
            >
              <p style={{ display: "flex", flexWrap: "wrap" }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p
                style={{
                  display: "flex",
                  backgroundColor: "var(--positive)",
                  padding: "0.1em 0.3em",
                  borderRadius: ".2em",
                }}
              >
                North
              </p>
            </Mua>
          </div>

          <div style={{ maxWidth: "220px" }}>
            <Mua
              className="pxy"
              dangerous={{
                border: "var(--border)",
                borderRadius: "var(--border-radius)",
                height: "fit-content",
                gap: "var(--gap-5)",
              }}
            >
              <p style={{ display: "flex", flexWrap: "wrap" }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p
                style={{
                  display: "flex",
                  backgroundColor: "var(--positive)",
                  padding: "0.1em 0.3em",
                  borderRadius: ".2em",
                }}
              >
                North
              </p>
            </Mua>
          </div>

          <Mua
            className=" pxy"
            dangerous={{
              border: "var(--border)",
              borderRadius: "var(--border-radius)",
              height: "fit-content",
              gap: "var(--gap-5)",
            }}
          >
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
            </p>
            <p
              style={{
                display: "flex",
                backgroundColor: "var(--positive)",
                padding: "0.1em 0.3em",
                borderRadius: ".2em",
              }}
            >
              North
            </p>
          </Mua>
        </Row>
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="pxy">
        <Story />
      </div>
    ),
  ],
};

export const StoryE: Story = {
  name: "Breakpoint-aware Grid",
  parameters: {
    layout: "padded",
  },
  render: function Render() {
    return (
      <>
        <Grid
          padding={{ xs: 0, sm: "var(--gap-2)" }}
          gap={{ xs: "var(--gap-1)", md: "var(--gap-4)" }}
          gridTemplateColumns={{
            xs: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          className="cover-center"
        >
          <Media
            ratio="landscape"
            alt="Plant Landscape"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Media
            ratio="landscape"
            alt="Plant Landscape"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Media
            ratio="landscape"
            alt="Plant Landscape"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Media
            ratio="landscape"
            alt="Plant Landscape"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Grid>
      </>
    );
  },
  decorators: [
    (Story) => (
      <div className="pxy">
        <Story />
      </div>
    ),
  ],
};

// type StoryTailType = StoryObj<typeof TailGroup>;

// export const StoryTail: StoryTailType = {
//   name: "Group with many start / end ",
//   parameters: {
//     layout: "padded",
//   },
//   render: function Render() {
//     return (
//       <div className="pxy">
//         <TailGroup
//           start={<Shape.Circle size={30} />}
//           end={[<Shape.Square size={40} />, <Shape.Triangle size={40} />]}
//         >
//           <TextInputUncontrolled />
//         </TailGroup>

//         <AffixGroup
//           primary={<TextInputUncontrolled />}
//           head={<Shape.Circle size={30} />}
//           tail={[<Button key="1">Clear</Button>, <Button key="2">More</Button>]}
//         />
//       </div>
//     );
//   },
// };

// const tests = [
//   "bob:schedule",
//   "bob:meetings next week",
//   "bob's birthday",
//   "bob's and maryam's last reports",
//   "@bob adidas shoes",
//   "my adidas shoes",
//   "bob:schedule alice's report @charlie tasks my notes",
// ];

// export const StoryG: Story = {
//   name: "Stack layers ",
//   parameters: {
//     layout: "padded",
//   },

//   render: function Render() {
//     const [input, onChange] = useState("");
//     const [showInput, setShow] = useState(false);

//     const prevLengthRef = useRef(0);
//     const isDeleting = input.length < prevLengthRef.current;

//     const parsed = isDeleting ? input : parseOwnershipPatterns(input);
//     console.log({ input, parsed });

//     return (
//       <>
//         <Stack
//           isInput
//           over={
//             <div
//               style={{
//                 pointerEvents: "none",
//                 color: "var(--negative)",
//                 paddingLeft: "var(--gap-2)",
//               }}
//             >
//               <HighlightedText input={parsed.length > 0 ? parsed : input} />
//             </div>
//           }
//         >
//           <TextInput
//             placeholder="mention people and things"
//             className={clsx(!showInput && "transparent")}
//             id="test"
//             value={input}
//             onChange={(v) => onChange(v)}
//             clear
//           />
//         </Stack>

//         <Row wrap style={{ gap: "var(--gap-3)", margin: "var(--gap-4) 0" }}>
//           {tests.map((t, i) => (
//             <Button
//               key={i}
//               onClick={() => {
//                 onChange(t);
//                 prevLengthRef.current = input.length;
//               }}
//             >
//               {t}{" "}
//             </Button>
//           ))}
//         </Row>
//         <Button
//           start={<StackIcon />}
//           isActive={showInput}
//           onClick={() => setShow((prev) => !prev)}
//         >
//           Show input layer
//         </Button>
//       </>
//     );
//   },
// };
