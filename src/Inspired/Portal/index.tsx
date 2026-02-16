import {
  createContext,
  type ElementType,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";

import type {
  ParticipateProps,
  PortalContextValue,
  PortalParticipationProviderProps,
  PortalTargetProps,
} from "./interfaces";

const PortalContext = createContext<PortalContextValue | null>(null);

export default function PortalParticipationProvider({
  children,
}: PortalParticipationProviderProps) {
  const [targets, setTargets] = useState<Map<string, HTMLElement>>(new Map());

  const registerTarget = useCallback((id: string, element: HTMLElement) => {
    setTargets((prev) => new Map(prev).set(id, element));
  }, []);

  const unregisterTarget = useCallback((id: string) => {
    setTargets((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  return (
    <PortalContext.Provider
      value={{ targets, registerTarget, unregisterTarget }}
    >
      {children}
    </PortalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortalContext() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error(
      "Portal components must be used within PortalParticipationProvider",
    );
  }
  return context;
}

function usePortalTarget(targetId: string) {
  const { registerTarget, unregisterTarget } = usePortalContext();
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (element) {
      registerTarget(targetId, element);
      return () => unregisterTarget(targetId);
    }
  }, [targetId, element, registerTarget, unregisterTarget]);

  return setElement;
}

export function PortalTarget<T extends ElementType = "div">({
  id,
  children,
  as,
  ...props
}: PortalTargetProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof PortalTargetProps<T>>) {
  const ref = usePortalTarget(id);
  const Component = (as || "div") as ElementType;

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}

function useParticipate(
  targetId: string,
  content: ReactNode,
  condition: boolean = true,
): ReturnType<typeof createPortal> | null {
  const { targets } = usePortalContext();
  const target = targets.get(targetId);

  if (!condition || !target) return null;

  return createPortal(content, target);
}

// eslint-disable-next-line react-refresh/only-export-components
export function Participate({
  target,
  when = true,
  children,
}: ParticipateProps) {
  const portal = useParticipate(target, children, when);
  return portal;
}
