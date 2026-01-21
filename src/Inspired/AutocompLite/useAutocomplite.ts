import { useCallback, useMemo, useState } from "react";

import { buildLookupById, createOptions, filterOptions } from "./utils";

import type {
  AutocompLiteOption,
  UseAutocompleteParams,
  UseAutocompleteReturn,
} from "./interfaces";

export default function useAutocomplete<T extends { id: string }>(
  params: UseAutocompleteParams<T>,
): UseAutocompleteReturn {
  const {
    thing,
    mapper,
    initialQuery = "",
    initialSelectedIds = [],
    onToggle,
    multi = true,
    disabledPredicate,
    onAttemptSelectDisabled,
    onError,
  } = params;

  const options = useMemo(() => {
    const out = createOptions(thing, mapper, disabledPredicate);

    for (const o of out) {
      if (!o || !o.id) {
        onError?.("mapper must return an Option with an 'id' field");
        break;
      }
    }

    return out;
  }, [thing, mapper, disabledPredicate, onError]);

  const lookupById = useMemo(() => buildLookupById(options), [options]);

  const [query, setQuery] = useState(initialQuery);

  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    return initialSelectedIds.filter(
      (id) => lookupById[id] && !lookupById[id].disabled,
    );
  });

  const selected = useMemo(
    () => selectedIds.map((id) => lookupById[id]).filter(Boolean),
    [selectedIds, lookupById],
  );

  const filteredOptions = useMemo(
    () => filterOptions(options, query),
    [options, query],
  );

  const clearSelection = useCallback(() => setSelectedIds([]), []);

  const selectOption = useCallback(
    (option: AutocompLiteOption) => {
      if (option.disabled) {
        if (onAttemptSelectDisabled) onAttemptSelectDisabled(option);
        return;
      }

      setSelectedIds((prev) => {
        // single-select case
        if (!multi) {
          const next = [option.id];
          if (onToggle)
            onToggle(
              next.map((id) => lookupById[id]),
              option,
            );
          return next;
        }
        if (prev.includes(option.id)) return prev;
        const next = [...prev, option.id];
        if (onToggle)
          onToggle(
            next.map((id) => lookupById[id]),
            option,
          );
        return next;
      });
    },
    [onAttemptSelectDisabled, multi, onToggle, lookupById],
  );

  const deselectOption = useCallback(
    (option: AutocompLiteOption) => {
      setSelectedIds((prev) => {
        if (!prev.includes(option.id)) return prev;
        const next = prev.filter((id) => id !== option.id);
        if (onToggle)
          onToggle(
            next.map((id) => lookupById[id]),
            option,
          );
        return next;
      });
    },
    [onToggle, lookupById],
  );

  const toggleOption = useCallback(
    (option: AutocompLiteOption) => {
      setSelectedIds((prev) => {
        const exists = prev.includes(option.id);
        if (option.disabled && !exists) {
          if (onAttemptSelectDisabled) onAttemptSelectDisabled(option);
          return prev;
        }
        let next: string[];
        if (multi) {
          next = exists
            ? prev.filter((id) => id !== option.id)
            : [...prev, option.id];
        } else {
          next = exists ? [] : [option.id];
        }
        if (onToggle)
          onToggle(
            next.map((id) => lookupById[id]),
            option,
          );
        return next;
      });
    },
    [multi, onToggle, onAttemptSelectDisabled, lookupById],
  );

  const [showPopover, setPopover] = useState(true);

  const liveMessage = useMemo(() => {
    const count = filteredOptions.length;
    return count === 0
      ? "No results"
      : `${count} result${count === 1 ? "" : "s"} available`;
  }, [filteredOptions.length]);

  return {
    options,
    filteredOptions,
    query,
    setQuery,
    selected,
    toggleOption,
    selectOption,
    deselectOption,
    lookupById,
    clearSelection,
    showPopover,
    setPopover,
    liveMessage,
  };
}
