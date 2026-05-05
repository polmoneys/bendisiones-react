import { type ReactNode, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  GoFile as IconFile,
  GoFileDirectory as IconFolder,
} from "react-icons/go";

import { Col, Row } from "../Dumb/Group/Flex";
import Recursive from "../Dumb/Recursive";
import type { RecursiveItem } from "../Dumb/Recursive/interfaces";
import { findNodeById } from "../Dumb/Recursive/utils";
import { formatSelectedKeys } from "../utilities/intl";
import { has } from "../utils";

const meta = {
  title: "Dumb/Recursive",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Recursive>;

export default meta;
type Story = StoryObj<typeof meta>;

interface FileData {
  name: string;
  type: "file" | "folder";
}

const sampleData: RecursiveItem<FileData>[] = [
  {
    id: "1",
    data: { name: "src", type: "folder" },
    children: [
      {
        id: "1-1",
        data: { name: "components", type: "folder" },
        children: [
          { id: "1-1-1", data: { name: "Button.tsx", type: "file" } },
          { id: "1-1-2", data: { name: "Input.tsx", type: "file" } },
        ],
      },
      {
        id: "1-2",
        data: { name: "utils", type: "folder" },
        children: [{ id: "1-2-1", data: { name: "helpers.ts", type: "file" } }],
      },
      { id: "1-3", data: { name: "App.tsx", type: "file" } },
    ],
  },
  {
    id: "2",
    data: { name: "public", type: "folder" },
    children: [{ id: "2-1", data: { name: "index.html", type: "file" } }],
  },
  { id: "3", data: { name: "package.json", type: "file" } },
];

export const Secondary: Story = {
  name: "File system",
  render: function Render() {
    const [expandedIds, setExpandedIds] = useState<Set<string | number>>(
      new Set(),
    );
    const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
      new Set(),
    );

    const selected =
      [...selectedIds].map((x) => findNodeById(sampleData, x)) ?? [];
    const selectionFormatted = formatSelectedKeys(
      new Set(selected.map((x) => x?.data?.name ?? "")),
    );

    const onToggle = (
      id: string | number,
      isExpanded: boolean,
      level: number,
    ) => {
      console.log(`Toggled ${id} at level ${level}:`, isExpanded);
      const newExpandedIds = new Set(expandedIds);
      if (isExpanded) {
        newExpandedIds.add(id);
      } else {
        newExpandedIds.delete(id);
      }
      setExpandedIds(newExpandedIds);
    };

    const onSelect = (id: string | number, level: number) => {
      console.log(`Selected ${id} at level ${level}`);
      const newSelectedIds = new Set(selectedIds);

      // if (multiple) {
      if (newSelectedIds.has(id)) {
        newSelectedIds.delete(id);
      } else {
        newSelectedIds.add(id);
      }
      // } else {
      //     newSelectedIds.clear();
      //     newSelectedIds.add(id);
      // }

      setSelectedIds(newSelectedIds);
    };

    const renderRecursiveItem = (props: {
      item: RecursiveItem<FileData>;
      level: number;
      isExpanded: boolean;
      isSelected: boolean;
      children?: ReactNode;
      onClick: () => void;
      className: string;
    }) => {
      return (
        <div
          style={{
            width: "min(450px, 80vw)",
            alignItems: "center",
            cursor: "pointer",
            // border: "var(--border)",
            marginBottom: "var(--gap-1)",
            padding: `var(--gap-1) var(--gap-3) var(--gap-1) ${props.level * 36}px`,
            display: "grid",
            gridTemplateColumns: has(props.children)
              ? "68px 1fr 68px"
              : "68px 1fr",
          }}
          onClick={props.onClick}
          className={props.className}
        >
          {props.item.data?.type === "folder" ? (
            <IconFolder size={56} />
          ) : (
            <IconFile size={56} />
          )}
          <p>{props.item.data?.name}</p>
          {has(props.children) ? props.children : null}
        </div>
      );
    };

    const selectionHasFiles = selected.some((s) => s?.data?.type === "file");
    const selectionHasFolders = selected.some(
      (s) => s?.data?.type === "folder",
    );

    return (
      <>
        {(selectionHasFolders || selectionHasFiles) && (
          <Row
            style={{
              flexWrap: "wrap",
              gap: "var(--gap-2)",
            }}
          >
            {selectionHasFolders && <IconFolder size={28} />}
            {selectionHasFiles && <IconFile size={28} />}
            <b> {selectionFormatted}</b>
          </Row>
        )}
        <br />
        <Col
          style={{
            gap: "var(--gap-1)",
          }}
        >
          <Recursive
            items={sampleData}
            multiple
            selectedIds={selectedIds}
            expandedIds={expandedIds}
            onToggle={onToggle}
            onSelect={onSelect}
            renderItem={renderRecursiveItem}
            indentSize={24}
          />
        </Col>
      </>
    );
  },
};
