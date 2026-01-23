import type { ElementType, ReactNode } from "react";

export interface PortalContextValue {
  targets: Map<string, HTMLElement>;
  registerTarget: (id: string, element: HTMLElement) => void;
  unregisterTarget: (id: string) => void;
}

export interface PortalParticipationProviderProps {
  children: ReactNode;
}

export interface PortalTargetProps<T extends ElementType = "div"> {
  id: string;
  children?: ReactNode;
  as?: T;
}

export interface ParticipateProps {
  target: string;
  when?: boolean;
  children: ReactNode;
  priority?: number;
}
