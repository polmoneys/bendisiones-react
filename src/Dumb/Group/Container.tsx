import {
  type AriaAttributes,
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useMemo,
} from "react";

/*
<Container
  sx={`
    & {
      padding: 16px;
      background: white;
    }

    &:hover {
      background: #f5f5f5;
      transform: scale(1.02);
    }

    &:has(#alert) {
      border: 2px solid red;
      background: #ffebee;
    }

    &:has(img) {
      display: grid;
      gap: 8px;
    }

    & > button {
      background: blue;
      color: white;
    }
  `}
>
</Container>

*/

const styleRegistry = new Map<string, string>();
let styleSheet: CSSStyleSheet | null = null;

interface ContainerProps extends AriaAttributes {
  sx?: string;
  className?: string;
  component?: ElementType;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function Container({
  sx,
  className = "",
  component: Component = "div",
  style,
  children,
  ...props
}: ContainerProps) {
  const containerClass = useMemo(() => {
    if (!sx) return "";

    const hash = simpleHash(sx);
    const containerClass = `c-${hash}`;

    if (!styleRegistry.has(hash)) {
      styleRegistry.set(hash, sx);

      if (typeof document !== "undefined") {
        const sheet = createStyleSheet();
        const processedCSS = sx.replace(/&/g, `.${containerClass}`);
        const styleElement = sheet.ownerNode as HTMLStyleElement;
        styleElement.textContent += "\n" + processedCSS;
      }
    }

    return containerClass;
  }, [sx]);

  return createElement(
    Component,
    {
      className: `${containerClass} ${className}`.trim(),
      style,
      ...props,
    },
    children,
  );
}

function createStyleSheet(): CSSStyleSheet {
  if (styleSheet) return styleSheet;

  const style = document.createElement("style");
  style.setAttribute("data-container-sx", "true");
  document.head.appendChild(style);
  styleSheet = style.sheet!;
  return styleSheet;
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}
