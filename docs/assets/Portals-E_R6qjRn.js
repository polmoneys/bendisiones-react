import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-qFZA0Z8s.js";import{n as t}from"./lib-CuzoSzv1.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-Dw_ZbByf.js";import"./react-dom-iwXRIFqy.js";import"./chunk-P4F4UVXX-BOD64K02.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-DuU8uWu-.js";import{o as n}from"./blocks-NxK6xvrQ.js";import"./go-95r8PZhd.js";import"./utils-BaIUY_Nw.js";import"./Ring-e9drS4dc.js";import"./useHover-CajHuwVE.js";import"./Button-S_xOkKq7.js";import"./Flex-C3CE0GhY.js";import{n as r}from"./Portals.stories-udm5U7zf.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
`,(0,i.jsxs)(`div`,{id:`body`,children:[(0,i.jsxs)(a.p,{children:[`I like to think about `,(0,i.jsx)(a.code,{children:`Portals`}),` as targets that receive contributions, where `,(0,i.jsx)(a.code,{children:`Participants`}),` are the ones to declare `,(0,i.jsx)(a.code,{children:`I want to contribute UI here`}),`. No central registry knowing about the relationships of them all & no prop drilling.`]}),(0,i.jsxs)(a.p,{children:[`As side bonus `,(0,i.jsx)(a.code,{children:`1 component can become 1 content`}),` in terms of declaring all the interface variations it owns.`]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-tsx`,children:`function MetricsWidget({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  trend: number;
}) {
  const [state, setState] = useState<{
    details: boolean;
    sidebar: boolean;
    tooltip: boolean;
  }>({
    details: false,
    sidebar: false,
    tooltip: false,
  });

  const { hoverProps, isHovered } = useHover({
    onHoverStart: () => setState((prev) => ({ ...prev, tooltip: true })),
    onHoverEnd: () => setState((prev) => ({ ...prev, tooltip: false })),
  });
  return (
    <>
      <div
        {...hoverProps}
        onClick={() =>
          setState((prev) => ({
            ...prev,
            details: !prev.details,
            sidebar: true,
          }))
        }
        style={{
          border: "var(--border)",
          padding: "var(--gap-3)",
          cursor: "pointer",
          background: state.details ? "var(--neutral)" : "var(--white)",
        }}
      >
        <h4>{title}</h4>
        <p style={{ fontSize: 24 }}>{value}</p>
      </div>

      <Participate target="details" when={state.details}>
        <div>
          <Row className=" place-items-center">
            <h4>{title} - Detailed View</h4>
            <Button
              isIcon
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  details: false,
                }))
              }
              className="ml-a"
            >
              <TrashIcon />
            </Button>
          </Row>
          <p>Trend: ↗️ +{trend}%</p>
          <p>Last updated: 2 minutes ago</p>
        </div>
      </Participate>

      <Participate target="sidebar" when={state.sidebar}>
        <Button
          isText
          onClick={() =>
            setState((prev) => ({
              ...prev,
              sidebar: !prev.sidebar,
            }))
          }
        >
          {title} ↗️ +{trend}%
        </Button>
      </Participate>

      <Participate target="tooltip" when={isHovered}>
        <MetricsTooltip>↗️ +{trend}%</MetricsTooltip>
      </Participate>
    </>
  );
}

function MetricsTooltip({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}
`})})]}),`
`,(0,i.jsx)(`style`,{children:`
    #body *:not(pre *) {
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        line-height: var(--font-line-height);
    }

img {
  object-fit: cover;
}

`})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};