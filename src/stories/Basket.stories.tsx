import { type CSSProperties, useEffect, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useQuery } from "@tanstack/react-query";
import {
  GoInfinity as LoadingIcon,
  GoPlus as AddIcon,
  GoX as CloseIcon,
} from "react-icons/go";

import Button from "../Dumb/Button";
import { Col, Row } from "../Dumb/Group/Flex";
import Toolbar from "../Dumb/Toolbar";
import useBasket from "../Smart-ish/useBasket";
import useTanstackQuery from "../Smart-ish/useTanstackQuery";
import { clsx } from "../utils";

const meta = {
  title: "Smart-ish/Basket",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof useBasket>;

export default meta;
type Story = StoryObj<typeof meta>;

const RESOURCES = ["people", "planets", "starships"] as const;
type Resource = (typeof RESOURCES)[number];

interface SwapiItem {
  id: string;
  name: string;
  title?: string;
  age?: string;
  climate?: string;
  model?: string;
  hair_color?: string;
  [key: string]: unknown;
}

export const StoryA: Story = {
  name: "Basket",
  decorators: [
    (Story) => (
      <div className="pxy">
        <Story />
      </div>
    ),
  ],
  render: function Render() {
    const [activeResource, setActiveResource] = useState<Resource>("people");
    const [prevResource, setPrevResource] = useState<Resource | null>(null);

    const basket = useBasket();
    const { api, views, helpers } = basket;

    const {
      data: items = [],
      isLoading,
      error,
    } = useQuery<SwapiItem[], Error>({
      queryKey: ["swapi", activeResource],
      queryFn: async () => {
        const res = await fetch(`https://swapi.dev/api/${activeResource}/`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        return (json.results || []).map(
          (item: Record<string, unknown>, idx: number) => ({
            ...item,
            name: item?.name ?? "-",
            isFavorite: false,
            id: `${activeResource}-${idx}`,
          }),
        );
      },
    });

    useEffect(() => {
      if (isLoading || items === undefined || prevResource === activeResource)
        return;
      api.addOptions(activeResource, items);
      setPrevResource(activeResource);
    }, [items, isLoading, api, activeResource, prevResource]);

    const onToggleItem = (item: SwapiItem) => {
      onToggleAdded(item.id);
      api.toggle(item.id);
    };

    const characterHelpers = useTanstackQuery({
      queryKey: ["swapi", activeResource],
    });

    const onToggleAdded = (id: string) => {
      console.log({ id, characterHelpers });
      characterHelpers.updateDataItem<SwapiItem[]>(
        (char) => char.id === id,
        (char) => ({ ...char, isFavorite: !char.isFavorite }),
      );
    };
    const availableGroups = helpers.availableGroups();
    const hasPeople = helpers.availableItemsInGroup("people");
    const hasPlanets = helpers.availableItemsInGroup("planets");
    const hasStarships = helpers.availableItemsInGroup("starships");

    console.log({
      availableGroups,
      hasPeople,
      hasPlanets,
      hasStarships,
    });

    // const payload = helpers.export((rec) => ({
    //     section: rec.group,
    //     columnId: rec.item.id,
    //     label: rec.item.name ?? '',
    // }));
    //
    //

    return (
      <>
        <Toolbar
          label="pick from resources"
          dangerous={{ gap: "var(--gap-1)" }}
        >
          {RESOURCES.map((resource) => (
            <Button
              key={resource}
              onClick={() => setActiveResource(resource)}
              isActive={activeResource === resource}
            >
              {resource.charAt(0).toUpperCase() + resource.slice(1)}
            </Button>
          ))}
        </Toolbar>
        <br />

        <Row
          style={{
            flexWrap: "wrap",
            gap: "var(--gap-3)",
            minWidth: "100%",
          }}
        >
          {isLoading && <LoadingIcon />}
          {error && <p className="negative"> Error loading items</p>}
          {items.length === 0 && !isLoading && <p> No items found</p>}

          {items.map((item, index) => {
            const isInBasket = helpers.isSelected(item.id) || item.isFavorite;

            return (
              <Row
                key={item.id}
                className={clsx(isInBasket && "positive")}
                style={{
                  padding: "0 0 0 var(--gap-1)",
                  backgroundColor: index % 2 ? "#aaa" : "#ccc",
                  alignItems: "center",
                }}
              >
                <p>{item?.name ?? ""}</p>
                <Button
                  onClick={() => onToggleItem(item)}
                  isActive={isInBasket as boolean}
                  isIcon
                  isText
                >
                  {isInBasket ? <CloseIcon size={22} /> : <AddIcon size={22} />}
                </Button>
              </Row>
            );
          })}
        </Row>

        <br />
        <hr />
        <br />

        <Row
          style={{
            flexWrap: "wrap",
            gap: "var(--gap-3)",
          }}
        >
          {views.selectedIds.length === 0 ? (
            <p>No items in the basket</p>
          ) : (
            views.flattened.map((item) => (
              <Row
                key={item.id}
                style={{
                  padding: "0 0 0 var(--gap-1)",
                  backgroundColor: "var(--positive)",
                  alignItems: "center",
                }}
              >
                <p
                  className="clamp"
                  style={{ "--clamp-lines": 1 } as CSSProperties}
                >
                  {item.name ?? ""}
                </p>
                <Button isIcon isText onClick={() => api.remove([item.id])}>
                  <CloseIcon size={22} />
                </Button>
              </Row>
            ))
          )}
        </Row>
        <br />

        <Row
          style={{
            gap: "var(--gap-3)",
            flexWrap: "wrap",
          }}
        >
          {views.selectedIds.length > 0 ? (
            <Col
              style={{
                padding: "var(--pxy)",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1/1.1",
                flex: "0 0 140px",
                backgroundColor: "var(--negative)",
              }}
            >
              <b className="font-xl"> {views.selectedIds.length} </b>
              <p>total</p>
            </Col>
          ) : (
            <></>
          )}
          {Object.entries(views.countsByGroup).map(([group, count], index) =>
            count > 0 ? (
              <Col
                key={group}
                style={{
                  padding: "var(--pxy)",
                  backgroundColor: index % 2 ? "#aaa" : "#ccc",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "1/1.1",
                  flex: "0 0 140px",
                }}
              >
                <b className="font-xl"> {count} </b>
                <p>{group}</p>
              </Col>
            ) : null,
          )}
        </Row>
        <br />

        {views.selectedIds.length > 0 && (
          <Button onClick={() => api.clear()}>Clear All</Button>
        )}
        <br />
      </>
    );
  },
};
