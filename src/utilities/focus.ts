export const moveFocusTo = (selector: string) =>
  (document?.querySelector(selector) as HTMLElement)?.focus();

export const scrollToElement = (selector: string): void => {
  const el = document.querySelector(selector);
  if (el != null) {
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const ScrollBy = ({ x = 0, y = 0 }: { x: number; y: number }) =>
  window &&
  window?.scrollBy({
    top: y,
    left: x,
    behavior: "smooth",
  });
