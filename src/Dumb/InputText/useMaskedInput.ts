import { useEffect, useId, useMemo, useRef, useState } from "react";

type UseMaskedDateInputOptions = {
  mask: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

type MaskState = { value: string };

function parseMask(mask: string) {
  const tokens = mask.match(/[A-Za-z0-9]+/g) ?? [];
  const separators = mask.match(/[^A-Za-z0-9]+/g) ?? [];
  return { tokens, separators };
}

function joinByMask(parts: string[], separators: string[]) {
  if (parts.length === 0) return "";
  let out = parts[0] ?? "";
  for (let i = 1; i < parts.length; i++) {
    out += (separators[i - 1] ?? "/") + parts[i];
  }
  return out;
}

function splitValue(value: string) {
  return value.split(/\D+/).filter(Boolean);
}

export default function useMaskedDateInput({
  mask,
  defaultValue = "",
  onValueChange,
}: UseMaskedDateInputOptions) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const feedbackId = useId();
  const [feedback, setFeedback] = useState("");

  const valueRef = useRef("");
  const stackRef = useRef<MaskState[]>([{ value: "" }]);
  const stackIndexRef = useRef(0);

  const { tokens: maskParts, separators } = useMemo(
    () => parseMask(mask),
    [mask],
  );

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    input.value = defaultValue;
    valueRef.current = defaultValue;
    stackRef.current = [{ value: defaultValue }];
    stackIndexRef.current = 0;
    onValueChange?.(defaultValue);

    const setValidity = (error = "") => {
      setFeedback(error);
      input.setCustomValidity(error);

      if (error === "") {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      } else {
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", feedbackId);
      }
    };

    const commitValue = (next: string) => {
      if (next === valueRef.current) return;

      stackRef.current.length = stackIndexRef.current + 1;
      stackRef.current.push({ value: next });
      stackIndexRef.current = stackRef.current.length - 1;

      input.value = next;
      valueRef.current = next;
      onValueChange?.(next);
    };

    const history = () => {
      const { value } = stackRef.current[stackIndexRef.current];
      input.value = value;
      valueRef.current = value;
      onValueChange?.(value);
    };

    const undo = () => {
      if (stackIndexRef.current <= 0) return;
      stackIndexRef.current -= 1;
      history();
    };

    const redo = () => {
      if (stackIndexRef.current >= stackRef.current.length - 1) return;
      stackIndexRef.current += 1;
      history();
    };

    const update = (padStart = false) => {
      const value = input.value;
      const parts = splitValue(value);
      const lastIndex = Math.min(parts.length, maskParts.length);

      for (let i = 0; i < lastIndex; i++) {
        const maskLength = maskParts[i].length;

        if (parts[i].length > maskLength) {
          const a = parts[i].substring(0, maskLength);
          const b = parts[i].substring(maskLength);
          parts[i] = a;

          if (i + 1 < parts.length) {
            parts[i + 1] = `${b}${parts[i + 1]}`;
          } else {
            parts.splice(i + 1, 0, b);
          }
        }

        if (padStart && i < lastIndex - 1) {
          parts[i] = parts[i].padStart(maskLength, "0");
        }
      }

      if (parts.length > maskParts.length) {
        parts.length = maskParts.length;
      }

      const newValue = joinByMask(parts, separators);
      if (newValue === valueRef.current) return;

      const start = input.selectionStart ?? value.length;
      const end = input.selectionEnd ?? value.length;
      const diff = newValue.length - value.length;

      commitValue(newValue);

      const nextStart = Math.max(0, start + (diff > 0 ? diff : 0));
      const nextEnd = Math.max(0, end + (diff > 0 ? diff : 0));

      requestAnimationFrame(() => {
        input.setSelectionRange(nextStart, nextEnd);
      });
    };

    const validate = () => {
      if (input.value.length === 0) {
        setValidity("");
        return;
      }

      setValidity("");

      const parts = splitValue(input.value);

      if (parts.length !== maskParts.length) {
        setValidity("Please enter a valid date");
        return;
      }

      let day = 0;
      let month = 0;
      let year = 0;
      let hasDay = false;
      let hasMonth = false;
      let hasShortYear = false;
      let hasFullYear = false;

      for (let i = 0; i < maskParts.length; i++) {
        switch (maskParts[i]) {
          case "DD":
            hasDay = true;
            day = Number.parseInt(parts[i] ?? "0", 10);
            if (Number.isNaN(day) || day < 1 || day > 31) {
              setValidity("Please enter a valid day (1 to 31)");
              return;
            }
            break;

          case "MM":
            hasMonth = true;
            month = Number.parseInt(parts[i] ?? "0", 10);
            if (Number.isNaN(month) || month < 1 || month > 12) {
              setValidity("Please enter a valid month (1 to 12)");
              return;
            }
            break;

          case "YY":
            hasShortYear = true;
            year = Number.parseInt(parts[i] ?? "-1", 10);
            if (Number.isNaN(year) || year < 0) {
              setValidity("Please enter a valid year");
              return;
            }
            break;

          case "YYYY":
            hasFullYear = true;
            year = Number.parseInt(parts[i] ?? "-1", 10);
            if (Number.isNaN(year) || year < 0) {
              setValidity("Please enter a valid year");
              return;
            }
            break;
        }
      }

      if (hasFullYear) {
        const date = new Date(year, month, 0);
        const maxDay = date.getDate();

        if (day > maxDay) {
          const monthName = new Intl.DateTimeFormat(undefined, {
            month: "long",
          }).format(date);

          setValidity(
            `Please enter a valid day for ${monthName} (1 to ${maxDay})`,
          );
          return;
        }
      }

      if (hasShortYear) {
        const current = String(new Date().getFullYear());
        let a = Number.parseInt(current.substring(0, 2), 10);
        const b = Number.parseInt(current.substring(2, 4), 10);

        if (year < b) a += 1;
        year = Number.parseInt(`${a}${String(year).padStart(2, "0")}`, 10);
        hasFullYear = true;
      }

      const intl = new Intl.DateTimeFormat(undefined, {
        day: hasDay ? "numeric" : undefined,
        month: hasMonth ? "long" : undefined,
        year: hasFullYear ? "numeric" : undefined,
      });

      setFeedback(intl.format(new Date(year, month - 1, day || 1)));
    };

    const onInput = () => {
      const value = input.value;

      if (valueRef.current === value) return;

      if (/[^\d\s/-]/.test(value)) {
        input.value = valueRef.current;
        return;
      }

      update(false);
    };

    const onBlur = () => {
      update(true);
      validate();
    };

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        validate();
        return;
      }

      if (ev.key === "Backspace") {
        let { value } = input;
        const { selectionStart } = input;

        if (selectionStart !== value.length) return;

        ev.preventDefault();
        value = value.substring(0, selectionStart - 1);

        const lastSeparator = separators[separators.length - 1];
        if (lastSeparator && value.endsWith(lastSeparator)) {
          value = value.slice(0, -lastSeparator.length);
        }

        input.value = value;
        update(false);
        return;
      }

      if (
        (ev.key === "z" && ev.shiftKey && (ev.metaKey || ev.ctrlKey)) ||
        (ev.key === "y" && ev.ctrlKey)
      ) {
        ev.preventDefault();
        redo();
        return;
      }

      if (ev.key === "z" && (ev.metaKey || ev.ctrlKey)) {
        ev.preventDefault();
        undo();
      }
    };

    const onBeforeInput = (ev: InputEvent) => {
      if (ev.inputType === "historyUndo") {
        ev.preventDefault();
        undo();
      } else if (ev.inputType === "historyRedo") {
        ev.preventDefault();
        redo();
      }
    };

    input.addEventListener("input", onInput);
    input.addEventListener("blur", onBlur);
    input.addEventListener("keydown", onKeyDown);
    input.addEventListener("beforeinput", onBeforeInput as EventListener);

    return () => {
      input.removeEventListener("input", onInput);
      input.removeEventListener("blur", onBlur);
      input.removeEventListener("keydown", onKeyDown);
      input.removeEventListener("beforeinput", onBeforeInput as EventListener);
    };
  }, [mask, maskParts, separators, defaultValue, feedbackId, onValueChange]);

  return { inputRef, feedback, feedbackId };
}
