import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-DW_1uAoP.js";import{n as t}from"./lib-CXlfH5bl.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-alknr_dR.js";import"./react-dom-B02bnRgo.js";import"./chunk-P4F4UVXX-BfTWfLFi.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-BCCN68Px.js";import{o as n}from"./blocks-FPeBokTp.js";import"./go-CS6MSl63.js";import"./utils-BaIUY_Nw.js";import"./Ring-C__2kaYT.js";import"./useHover-eKOBzMDT.js";import"./Button-BCsGzwyh.js";import{n as r}from"./Portals.stories-DAZIOdSU.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
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
          <div className="row place-items-center">
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
          </div>
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
        <p>↗️ +{trend}%</p>
      </Participate>
    </>
  );
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