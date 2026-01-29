import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";

import Button from "../Dumb/Button";
import type { TriState } from "../Dumb/Checkbox";
import Checkbox from "../Dumb/Checkbox";
import Group from "../Dumb/Group";
import { Row } from "../Dumb/Group/Flex";
import Mua from "../Dumb/Group/Kiss";
import Rows from "../Dumb/Rows";
import type { Column } from "../Dumb/Rows/interfaces";
import Shape from "../Dumb/Shape";
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
      <Row
        id="users-table"
        style={{
          gap: "var(--gap-2)",
          marginBottom: "var(--gap-3)",
        }}
      >
        <strong>{count}</strong>
        <p>{formatSelectedKeys(selection)}</p>
      </Row>

      <Rows
        id="users-table-rows"
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

const TECH_STOCKS = [
  { code: "AAPL", id: "0000" },
  { code: "MSFT", id: "1111" },
  { code: "GOOG", id: "2222" },
  { code: "AMZN", id: "3333" },
  { code: "TSLA", id: "4444" },
  { code: "NVDA", id: "5555" },
  { code: "META", id: "6666" },
];

interface Stock {
  code: string;
  id: string;
}

const Thingie2 = createThingie<Stock>("MyStockThingie");

function StocksList() {
  const { useSelection } = Thingie2;

  const api = useSelection();
  const formatted = formatSelectedKeys(api.selectedKeys);

  const onChangeLeader = (event: ChangeEvent<HTMLInputElement>) => {
    const el = event.currentTarget;

    const value: TriState = el.indeterminate ? "mixed" : el.checked;
    // 'mixed' | true | false
    if (!value) api.clear();
    if (value) api.items.map((item) => api.add(item));
  };

  return (
    <div id="stock-list">
      <br />

      <Mua
        component="label"
        dangerous={{
          width: "fit-content",
        }}
      >
        <Checkbox
          id="master-checkbox"
          checked={api.selectedCount > 0 ? "mixed" : false}
          onChange={onChangeLeader}
        />
        Has selections
      </Mua>
      <br />

      <p>
        Selected count:{" "}
        <strong>
          {api.selectedCount} {api.selectedCount > 0 ? "," : ""} {formatted}
        </strong>
      </p>
      <br />
      {api.items?.map((item, pos) => (
        <Group
          key={item.id}
          gradient={`${!api.isSelected(item) ? "var(--transparent)" : "var(--positive)"} 0, ${!api.isSelected(item) ? "var(--transparent)" : "var(--positive)"} 60px, var(--neutral) 60px, var(--neutral) calc(100% - 132px), var(--white) calc(100% - 132px),var(--white) 100%`}
          start={<Shape sides={api.isSelected(item) ? 4 : 22} size={22} />}
          startWidth="60px"
          end={
            <Button isText onClick={() => api.toggle(item)}>
              {api.isSelected(item) ? "Remove" : "Add"}
            </Button>
          }
          endWidth="130px"
          dangerous={{
            border: "var(--border)",
            marginBottom:
              (api.items ?? []).length - 1 === pos ? 0 : "var(--gap-1)",
          }}
        >
          <p className="clamp" onClick={() => api.toggle(item)}>
            {item.code}
          </p>
        </Group>
      ))}
    </div>
  );
}

export const StoryB: Story = {
  args: {},
  name: "List",
  render: function Render() {
    const { Thingie: TableProvider2 } = Thingie2;
    return (
      <TableProvider2
        items={TECH_STOCKS}
        keySelector={(s) => s.code}
        initialSelectedKeys={["AAPL"]}
      >
        <StocksList />
      </TableProvider2>
    );
  },
};
