export type Id = string;
export type Ids = Array<Id>;

export type GroupKey = string;

export type ItemBase = {
  id: Id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type OptionsBucket<T extends ItemBase> = {
  group: GroupKey;
  items: Array<T>;
};

export type Collections<T extends ItemBase> = Record<GroupKey, T[]>;

export type BasketState = {
  selected: Ids;
};

export type Action =
  | { type: "ADD"; ids: Ids }
  | { type: "REMOVE"; ids: Ids }
  | { type: "TOGGLE"; id: Id }
  | { type: "SET"; ids: Ids }
  | { type: "CLEAR" };

// internal indexed record
export type IndexedItem<T extends ItemBase> = {
  group: GroupKey;
  item: T;
};
