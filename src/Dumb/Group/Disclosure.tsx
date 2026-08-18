import {
  type ReactNode,
  type RefObject,
  useRef,
  useSyncExternalStore,
} from "react";

function useDetailsOpen(detailsRef: RefObject<HTMLDetailsElement | null>) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const el = detailsRef.current;
      if (!el) return () => {};

      const handler = () => onStoreChange();
      el.addEventListener("toggle", handler);

      return () => el.removeEventListener("toggle", handler);
    },
    () => detailsRef.current?.open ?? false,
    () => false,
  );
}

/*

<Disclosure label="testing diajdflaj" summary={<p>111111</p>}>
  <Shape.Circle />
  <p>fjalñdjfaljdflajdflajdflj</p>
</Disclosure>

*/

interface DisclosureProps {
  summary: ReactNode;
  children: ReactNode;
  label?: ReactNode;
}

export default function Disclosure(props: DisclosureProps) {
  const { children, label, summary } = props;
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const open = useDetailsOpen(detailsRef);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          type="button"
          onClick={() => {
            const el = detailsRef.current;
            if (el) el.open = !el.open;
          }}
        >
          {label != undefined ? label : open ? "Collapse" : "Expand"}
        </button>
      </div>

      <details ref={detailsRef}>
        <summary>{summary}</summary>
        <div>{children}</div>
      </details>
    </div>
  );
}
