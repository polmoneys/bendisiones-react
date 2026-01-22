LocalStorage can be `Thingified`, a factory that creates **useGet** and **useSet** to keep things friendly & tidy.

```tsx
const IS_BACK_KEY = "returning-visitor";
const { useGet, useSet } = createLocalStorageHooks<"yes" | "no" | null>(
  IS_BACK_KEY,
  {
    defaultValue: "no",
  },
);

const { data: displayModeStorage, isLoading } = useGet();
const { mutate } = useSet();

const setDisplayMode = (mode: "yes" | "no") => {
  mutate(mode, {
    onSuccess: () => {
      // invalidate is handled by default onSuccess
    },
  });
};
```
