import"./preload-helper-DGWYlufl.js";import{m as e}from"./iframe-Bq9EgU5Q.js";import{n as t}from"./lib-CILaZEY3.js";import"./chunk-CYSK6WYR-_6az3sk7.js";import"./theming-w5ne7ez-.js";import"./react-dom-BzUT1les.js";import"./chunk-P4F4UVXX-pCGH_RAV.js";import"./chunk-45UGUKRX-5OJm3y7k.js";import"./components-DGW3m76G.js";import{o as n}from"./blocks-CI5bIcTH.js";import"./go-BsG-ZTUe.js";import"./Ring-kA82GFXG.js";import"./index.module-D24upBnk.js";import"./useHover-DxABy3Ki.js";import"./Button-DJpCCzpF.js";import"./InputText-C294M8pz.js";import"./Flex-svOwhEay.js";import{n as r}from"./Portals.stories-B3MmfSaD.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
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