import {
  createElement,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useMemo,
} from "react";

type Placement = "top" | "bottom" | "left" | "right";
// https://chrome.dev/anchor-tool/
type PositionArea = "block-start" | "inline-end" | "block-end" | "inline-start";

export interface AnchorProps {
  id: string;
  anchorName: `--${string}`;
  // explicitly passing `undefined` lets positionArea take effect + storybook controls
  placement?: Placement | undefined | "undefined";
  positionArea?: PositionArea | `${PositionArea} center`;
}

export default function useAnchor({
  id,
  anchorName,
  placement = "top",
  positionArea,
}: AnchorProps) {
  const anchorProps = {
    popovertarget: id,
    popoverTarget: id,
    "aria-describedby": id,
    style: {
      "anchor-name": anchorName,
    },
  } as HTMLAttributes<unknown>;

  const popoverInlineStyle = useMemo(() => {
    const base: Record<string, string | undefined> = {
      "container-type": "anchored",
      "position-anchor": anchorName,
      inset: "auto",
      overflow: "visible",
      position: "absolute",
      zIndex: "var(--z-4)",
      positionArea,
      "position-area": positionArea,
    };
    if (placement) {
      switch (placement) {
        case "top":
          base.bottom = "anchor(top)";
          base["position-try"] = "flip-block";
          base["justify-self"] = "anchor-center";
          break;
        case "bottom":
          base.top = "anchor(bottom)";
          base["position-try"] = "flip-block";
          base["justify-self"] = "anchor-center";
          break;
        case "left":
          base.right = "anchor(left)";
          base["position-try"] = "flip-inline";
          base["align-self"] = "anchor-center";
          break;
        case "right":
        default:
          base.left = "anchor(right)";
          base["position-try"] = "flip-inline";
          base["align-self"] = "anchor-center";
          break;
      }
    } else {
      // placement is undefined: allow CSS `position-area` to be the driving factor.
    }
    return base;
  }, [anchorName, placement, positionArea]);

  const Popover = useCallback(
    ({
      children,
      className,
      role,
    }: {
      children?: ReactNode;
      className?: string;
      role?: string;
    }) => {
      const props: Record<string, unknown> = {
        id,
        popover: "",
        style: popoverInlineStyle,
        className,
        role,
        "aria-hidden": false,
      };

      return createElement("div", props, children);
    },
    [id, popoverInlineStyle],
  );

  return { anchorProps, Popover };
}
