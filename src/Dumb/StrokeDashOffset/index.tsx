import {
  type ComponentProps,
  type ReactElement,
  type SVGProps,
  cloneElement,
  useEffect,
  useRef,
} from "react";

import { has } from "../../utils";

type StrokeDashoffsetProps = ComponentProps<"svg"> & {
  children: ReactElement<
    SVGProps<SVGPathElement> & { ref?: React.Ref<SVGPathElement> }
  >;
  progress: number;
  pathLength?: number;
  strokeColor?: string;
  strokeWidth?: number;
  svg?: ReactElement;
};

/*

<StrokeDashoffset
    progress={progress}
    viewBox="0 0 73.76 45.715"
    height="172.781"
    width="278.7779"
    strokeColor="red"
  >
    <path
      fill="none"
      stroke="#00aad4"
      strokeLinecap="round"
      d="M.8825 28.1368h7.6506l2.6171-10.6905 6.865 25.6202 3.1614-36.3492 3.9609 28.4864 1.1125-6.9395h8.7471l1.2762-7.3971 4.4477 23.966 2.3077-38.0867 1.6134 15.1554h7.5l3.3783 16.805 1.6625-13.5108h15.6946"
      strokeWidth=".965"
      strokeLinejoin="round"
    />
  </StrokeDashoffset>
  */

const StrokeDashoffset = ({
  progress,
  pathLength,
  strokeColor,
  strokeWidth,
  svg,
  ...rest
}: StrokeDashoffsetProps) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const pathTotalLength = pathLength ? pathLength : path.getTotalLength();

      path.setAttribute("stroke-dasharray", pathTotalLength.toString());
      path.setAttribute("stroke-dashoffset", pathTotalLength.toString());

      if (strokeColor) {
        path.setAttribute("stroke", strokeColor);
      }

      if (strokeWidth) {
        path.setAttribute("stroke-width", strokeWidth.toString());
      }

      const updateSVG = () => {
        const progressOffset =
          pathTotalLength - pathTotalLength * (progress / 100);
        path.setAttribute("stroke-dashoffset", progressOffset.toString());
      };

      updateSVG();
    }
  }, [progress, pathLength, strokeColor, strokeWidth]);

  const setPathRef = (node: SVGPathElement | null) => {
    pathRef.current = node;
  };

  // eslint-disable-next-line react-hooks/refs
  const clonedPathElement = cloneElement(rest.children, {
    ref: setPathRef,
    shapeRendering: "geometricPrecision",
  });

  return (
    <svg {...rest}>
      {has(svg) && svg}
      {clonedPathElement}
    </svg>
  );
};

export default StrokeDashoffset;
