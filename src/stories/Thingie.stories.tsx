import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties, ReactNode } from "react";

import Rows from "../Dumb/Rows";
import type { Column } from "../Dumb/Rows/interfaces";
import createThingie from "../Inspired/Thingie";
import { formatSelectedKeys } from "../utilities/intl";
import { has } from "../utils";

const meta = {
  title: "Inspired/Thingie",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Rows>;

export default meta;
type Story = StoryObj<typeof meta>;

type Person = { id: number; name: string; email?: string; age?: number };

const Thingie = createThingie<Person>("ThingiePeopleSelection");

const COLUMNS: Column<Person>[] = [
  {
    label: "Name",
    field: "name",
    render: (v) => (
      <ColumnCell dangerous={{ paddingLeft: "var(--gap-1)" }}>
        {v as string}
      </ColumnCell>
    ),
  },
  {
    label: "Email",
    field: "email",
    render: (v) => (
      <ColumnCell dangerous={{ paddingLeft: "var(--gap-1)" }}>
        {v as string}
      </ColumnCell>
    ),
  },
  {
    label: "Age",
    field: "age",
    render: (v) => (
      <ColumnCell dangerous={{ paddingLeft: "var(--gap-1)" }}>
        <strong>{v as string}</strong>
      </ColumnCell>
    ),
  },
];

const USERS: Array<Person> = [
  { id: 1, name: "Martina", email: "-", age: 1 },
  { id: 2, name: "Andrea", email: "andrea@gmail.com", age: 36 },
  { id: 3, name: "Pol", email: "pol@gmail.com", age: 43 },
];
const ColumnCell = ({
  children,
  dangerous,
}: {
  children: ReactNode;
  dangerous?: CSSProperties;
}) => (
  <div
    style={{
      width: "100%",
      backgroundColor: "rgba(0,0,0,.1)",
      ...(has(dangerous) && dangerous),
    }}
  >
    <strong>{children}</strong>
  </div>
);

function UsersTable() {
  const { useSelection } = Thingie;

  const api = useSelection();
  const selection = api.selectedKeys;
  const count = api.selectedCount;

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "var(--gap-2)",
          marginBottom: "var(--gap-3)",
        }}
      >
        <strong>{count}</strong>
        <p>{formatSelectedKeys(selection)}</p>
      </div>

      <Rows
        columns={COLUMNS}
        gridTemplateColumns="2fr 1fr .25fr"
        rows={USERS}
        label="users of imaginary app"
        api={api}
        selectedBackgroundColor="var(--positive)"
        style={{
          border: "var(--border)",
          boxShadow: "var(--shadow)",
          borderRadius: "var(--border-radius)",
        }}
        px="var(--gap-1)"
      />
    </>
  );
}

export const StoryA: Story = {
  args: {},
  name: "Table",
  render: function Render() {
    const { Thingie: TableProvider } = Thingie;
    return (
      <TableProvider
        items={USERS}
        keySelector={(s) => s.name}
        initialSelectedKeys={["Pol"]}
      >
        <UsersTable />
      </TableProvider>
    );
  },
};
