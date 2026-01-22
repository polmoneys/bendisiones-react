import type { Meta, StoryObj } from "@storybook/react-vite";

import Media from "../Dumb/Media";
import Video from "../Dumb/Media/Video";
import Player from "../Dumb/Media/Video/Player";

const meta = {
  title: "Dumb/Media",
  component: Media,
  parameters: {
    layout: "centered",
  },
  subcomponents: { Video, Player },
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryA: Story = {
  args: { alt: "", src: "" },
  name: "Media with aspect ratio",
  render: function Render() {
    return (
      <>
        <Video
          // fitInParent
          width="220px"
          height="200px"
          ratio="landscape"
          sources={{
            mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
          }}
        />

        <div
          style={{
            maxWidth: "min(700px, 80vw)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--gap-3)",
            marginTop: "var(--gap-3)",
          }}
        >
          <Media
            ratio="portrait"
            alt="Plant portrait"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Player
            ratio="portrait"
            sources={{
              mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
            }}
            controls
          />
        </div>

        <div
          style={{
            maxWidth: "min(700px, 80vw)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--gap-3)",
            marginTop: "var(--gap-3)",
          }}
        >
          <Media
            ratio="landscape"
            alt="Plant landscape"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Player
            ratio="landscape"
            sources={{
              mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
            }}
            controls
          />
        </div>

        <div
          style={{
            maxWidth: "min(700px, 80vw)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--gap-3)",
            marginTop: "var(--gap-3)",
          }}
        >
          <Media
            ratio="square"
            alt="Plant square"
            src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Player
            ratio="square"
            sources={{
              mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
            }}
            controls
          />
        </div>
      </>
    );
  },
};
