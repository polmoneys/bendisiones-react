```tsx
import { useState } from "react";

import Button from "../Dumb/Button";
import useExcelExport from "../Dumb/Excel";
import type { ColumnDefinition } from "../Dumb/Excel/interfaces";
import ToolBar from "../Dumb/Toolbar";
import {
  GoMoveToBottom as DownloadOrExportIcon,
  GoTrash as TrashIcon,
  GoFoldDown as ScrollDownFoldIcon,
  GoPlus as PlusIcon,
} from "react-icons/go";

const demoPlaces = [
  {
    id: "paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    continent: "Europe",
  },
  {
    id: "london",
    city: "London",
    state: "England",
    country: "United Kingdom",
    continent: "Europe",
  },
  {
    id: "newyork",
    city: "New York",
    state: "New York",
    country: "United States",
    continent: "North America",
  },
  {
    id: "tokyo",
    city: "Tokyo",
    state: "Tokyo",
    country: "Japan",
    continent: "Asia",
  },
  {
    id: "rome",
    city: "Rome",
    state: "Lazio",
    country: "Italy",
    continent: "Europe",
  },
  {
    id: "barcelona",
    city: "Barcelona",
    state: "Catalonia",
    country: "Spain",
    continent: "Europe",
  },
  {
    id: "istanbul",
    city: "Istanbul",
    state: "Istanbul",
    country: "Turkey",
    continent: "Europe/Asia",
  },
  {
    id: "dubai",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
  },
  {
    id: "bali",
    city: "Denpasar",
    state: "Bali",
    country: "Indonesia",
    continent: "Asia",
  },
  {
    id: "singapore",
    city: "Singapore",
    state: "",
    country: "Singapore",
    continent: "Asia",
  },
  {
    id: "sydney",
    city: "Sydney",
    state: "New South Wales",
    country: "Australia",
    continent: "Oceania",
  },
  {
    id: "amsterdam",
    city: "Amsterdam",
    state: "North Holland",
    country: "Netherlands",
    continent: "Europe",
  },
  {
    id: "losangeles",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    continent: "North America",
  },
  {
    id: "bangkok",
    city: "Bangkok",
    state: "",
    country: "Thailand",
    continent: "Asia",
  },
  {
    id: "hongkong",
    city: "Hong Kong",
    state: "",
    country: "China SAR",
    continent: "Asia",
  },
  {
    id: "sanfrancisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    continent: "North America",
  },
  {
    id: "lisbon",
    city: "Lisbon",
    state: "",
    country: "Portugal",
    continent: "Europe",
  },
  {
    id: "prague",
    city: "Prague",
    state: "",
    country: "Czech Republic",
    continent: "Europe",
  },
  {
    id: "vienna",
    city: "Vienna",
    state: "",
    country: "Austria",
    continent: "Europe",
  },
  {
    id: "capetown",
    city: "Cape Town",
    state: "Western Cape",
    country: "South Africa",
    continent: "Africa",
  },
  {
    id: "marrakech",
    city: "Marrakech",
    state: "",
    country: "Morocco",
    continent: "Africa",
  },
  {
    id: "rio",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
  },
  {
    id: "delhi",
    city: "Delhi",
    state: "",
    country: "India",
    continent: "Asia",
  },
  {
    id: "seoul",
    city: "Seoul",
    state: "",
    country: "South Korea",
    continent: "Asia",
  },
  {
    id: "mexicocity",
    city: "Mexico City",
    state: "",
    country: "Mexico",
    continent: "North America",
  },
];

const columns = [
  { align: "left", width: 80 },
  { align: "right", width: 22 },
  { align: "right", width: 22 },
] as Array<ColumnDefinition>;

const sheet1Places = demoPlaces.slice(0, 15).map((p) => [
  {
    value: p.city,
    fontWeight: "bold",
    backgroundColor: "#cccccc",
  },
  {
    value: p.state ?? "-",
  },
  {
    value: p.country,
  },
]);
const sheet2Places = demoPlaces.slice(15, demoPlaces.length - 1).map((p) => [
  {
    value: p.city,
    fontWeight: "bold",
    backgroundColor: "#cccccc",
  },
  {
    value: p.state ?? "-",
  },
  {
    value: p.country,
  },
]);

export default function DemoExcel() {
  const [open, setOpen] = useState(true);

  const { exportSingleSheet, exportMultipleSheets, isLoading } = useExcelExport(
    {
      onError: () => console.log("Export failed. Please try again."),
    },
  );

  const onExport = async () => {
    await exportSingleSheet({
      filename: "destinations-top-15",
      data: sheet1Places,
      columns,
      sheetName: "top 15 cities (2025)",
    });
  };

  const onExportMultipleSheets = async () => {
    await exportMultipleSheets("fake-tech-stock-2023-2024", [
      { data: sheet1Places, columns, sheetName: "top 15 cities (2025)" },
      {
        data: sheet2Places,
        columns,
        sheetName: "top 15-25 cities (2025)",
      },
    ]);
  };

  return (
    <>
      <ToolBar
        label="exports"
        dangerous={{
          backgroundColor: "var(--negative)",
          border: "var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <ToolBar.Group label="Info" separator="vertical">
          <Button
            isPending={isLoading}
            isIcon
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <TrashIcon /> : <PlusIcon />}
          </Button>
        </ToolBar.Group>

        {open && (
          <>
            <ToolBar.Group label="sheet 1" separator="vertical">
              <Button isPending={isLoading} isIcon onClick={onExport}>
                <DownloadOrExportIcon />
              </Button>
            </ToolBar.Group>
            <ToolBar.Group label="sheet 1 and 2">
              <Button
                isPending={isLoading}
                isIcon
                onClick={onExportMultipleSheets}
                end={<DownloadOrExportIcon fillChildren="currentColor" />}
              >
                <DownloadOrExportIcon fillChildren="currentColor" />
              </Button>
            </ToolBar.Group>
          </>
        )}
      </ToolBar>
      <br />
    </>
  );
}
```
