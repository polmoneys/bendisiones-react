import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-BHv_0ITc.js";import{n as t}from"./lib-50MQl97J.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-oeUjUCTF.js";import"./react-dom-DYa8UWJ4.js";import"./chunk-P4F4UVXX-Ho8-1ML9.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-DC3IwhTj.js";import{a as n}from"./blocks-B-4ehhR3.js";import{n as r}from"./Portals.stories-CinjhSEN.js";var i=e();function a(e){let a={blockquote:`blockquote`,code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
`,(0,i.jsxs)(`div`,{id:`body`,children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:`Portals`}),` supports all sort of funky (aka. 🆒) adventures. I like to think about them as targets that receive contributions, where `,(0,i.jsx)(a.code,{children:`Participants`}),` are the ones to declare "I want to contribute UI here". No central registry knowing about the relationships of them all & no prop drilling.`]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-tsx`,children:`function MetricsCard({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  trend: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div onClick={() => setExpanded(!expanded)}>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>

      <Participate target="details" when={expanded}>
        <div>
          <h4>{title} - Detailed View</h4>
          <p>Trend: ↗️ +{trend}%</p>
          <p>Last updated: 2 minutes ago</p>
          <button onClick={() => setExpanded(false)}>Close</button>
        </div>
      </Participate>
    </>
  );
}

function App() {
  return (
    <PortalParticipationProvider>
      <MetricsCard title="Revenue" value="$1.2M" trend={12} />
      <MetricsCard title="Users" value="45K" trend={8} />

      <PortalTarget
        id="details"
        style={{
          border: "var(--border)",
          padding: "var(--gap-3)",
        }}
      >
        <p>Details</p>
        {/* MetricsCard details will appear here */}
      </PortalTarget>
    </PortalParticipationProvider>
  );
}
`})}),(0,i.jsxs)(a.p,{children:[`ps: insight from `,(0,i.jsx)(a.code,{children:`jjenzz`})]}),(0,i.jsxs)(a.blockquote,{children:[`
`,(0,i.jsx)(a.p,{children:`When passing a component through a Portal
it will not replace the children in the node you provide,
it will append to it.`}),`
`]})]}),`
`,(0,i.jsx)(`style`,{children:`
#body * {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--font-line-height);
}

img {
  object-fit: cover;
}

`})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};