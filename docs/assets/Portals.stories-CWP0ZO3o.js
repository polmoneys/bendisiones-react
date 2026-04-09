import{$ as e,N as t,m as n}from"./iframe-DKRbt5eR.js";import{t as r}from"./react-dom-Bei6ITG-.js";import{d as i,o as a}from"./go-B0y6IAKW.js";import{n as o,t as s}from"./utils-DxWitZhv.js";import{t as c}from"./useHover-BLNNNctH.js";import{t as l}from"./Button-DdIKtDiv.js";import{t as u}from"./InputText-B5v4jcaS.js";import{n as d}from"./Flex-BedslRiR.js";var f={root:`_root_3cba7_1`},p=t(),m=r(),h=n();function g({children:e,offset:t={x:0,y:0},interactive:n=!1,container:r,className:i,style:a,...c}){let l=(0,p.useRef)(null),u=(0,p.useRef)(null),d=(0,p.useRef)(null),g=typeof window<`u`&&typeof document<`u`;return(0,p.useEffect)(()=>{if(!g)return;function e(e,n){d.current={x:e+t.x,y:n+t.y},u.current??=requestAnimationFrame(()=>{if(u.current=null,!l.current||!d.current)return;let{x:e,y:t}=d.current;l.current.style.transform=`translate3d(${e}px, ${t}px, 0)`,l.current.style.visibility=`visible`})}function n(t){e(t.clientX,t.clientY)}function r(){l.current&&(l.current.style.visibility=`hidden`)}return window.PointerEvent?(window.addEventListener(`pointermove`,n),window.addEventListener(`pointerup`,r),window.addEventListener(`pointercancel`,r),window.addEventListener(`blur`,r)):(window.addEventListener(`mousemove`,t=>e(t.clientX,t.clientY)),window.addEventListener(`touchmove`,t=>{let n=t.touches[0];n&&e(n.clientX,n.clientY)}),window.addEventListener(`mouseup`,r),window.addEventListener(`touchend`,r),window.addEventListener(`blur`,r)),()=>{window.PointerEvent&&(window.removeEventListener(`pointermove`,n),window.removeEventListener(`pointerup`,r),window.removeEventListener(`pointercancel`,r),window.removeEventListener(`blur`,r)),u.current!=null&&cancelAnimationFrame(u.current)}},[t.x,t.y,g]),g?(0,m.createPortal)((0,h.jsx)(`div`,{...c,ref:l,className:s(i,f.root),style:{...o(a)&&a,pointerEvents:n?`auto`:`none`},"aria-hidden":!n,children:e}),r??document.body):null}var _=r(),v=(0,p.createContext)(null);function y({children:e}){let[t,n]=(0,p.useState)(new Map),r=(0,p.useCallback)((e,t)=>{n(n=>new Map(n).set(e,t))},[]),i=(0,p.useCallback)(e=>{n(t=>{let n=new Map(t);return n.delete(e),n})},[]);return(0,h.jsx)(v.Provider,{value:{targets:t,registerTarget:r,unregisterTarget:i},children:e})}function b(){let e=(0,p.useContext)(v);if(!e)throw Error(`Portal components must be used within PortalParticipationProvider`);return e}function x(e){let{registerTarget:t,unregisterTarget:n}=b(),[r,i]=(0,p.useState)(null);return(0,p.useEffect)(()=>{if(r)return t(e,r),()=>n(e)},[e,r,t,n]),i}function S({id:e,children:t,as:n,...r}){let i=x(e);return(0,h.jsx)(n||`div`,{ref:i,...r,children:t})}function C(e,t,n=!0){let{targets:r}=b(),i=r.get(e);return!n||!i?null:(0,_.createPortal)(t,i)}function w({target:e,when:t=!0,children:n}){return C(e,n,t)}y.__docgenInfo={description:``,methods:[],displayName:`PortalParticipationProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},S.__docgenInfo={description:``,methods:[],displayName:`PortalTarget`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},as:{required:!1,tsType:{name:`T`},description:``}}};function T(e,t){try{Array.from(e.styleSheets).forEach(e=>{try{if(e.cssRules&&!e.href){let n=Array.from(e.cssRules).map(e=>e.cssText).join(`
`);if(n.trim().length){let e=t.createElement(`style`);e.appendChild(t.createTextNode(n)),t.head.appendChild(e)}}}catch{}})}catch{}}function E({id:e,title:t=``,features:n,copyStyles:r=!0,onClose:i}){let{registerTarget:a,unregisterTarget:o}=b(),s=(0,p.useRef)(null),c=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let l=window.open(``,t||void 0,n);if(!l){console.warn(`PortalWindow: could not open window (popup blocked?)`);return}s.current=l;let u=l.document;t&&(u.title=t);let d=u.createElement(`div`);if(d.setAttribute(`data-portal-id`,e),d.style.width=`100%`,d.style.height=`100%`,d.style.padding=`8px`,u.body.appendChild(d),c.current=d,r)try{T(document,u)}catch{}a(e,d);let f=()=>{o(e);try{i?.()}catch{}};return l.addEventListener(`beforeunload`,f),l.addEventListener(`unload`,f),()=>{try{o(e)}catch{}try{l.closed||(l.removeEventListener(`beforeunload`,f),l.removeEventListener(`unload`,f),l.close())}catch{}s.current=null,c.current=null}},[e,t,n,r,a,o,i]),null}var D=e({StoryA:()=>j,StoryB:()=>N,__namedExportsOrder:()=>P,default:()=>O}),O={title:`Inspired/Portal`,subcomponents:{Participate:w,PortalParticipationProvider:y,PortalTarget:S},parameters:{layout:`centered`}};function k({title:e,value:t,trend:n}){let[r,a]=(0,p.useState)({details:!1,sidebar:!1,tooltip:!1}),{hoverProps:o,isHovered:s}=c({onHoverStart:()=>a(e=>({...e,tooltip:!0})),onHoverEnd:()=>a(e=>({...e,tooltip:!1}))});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{...o,onClick:()=>a(e=>({...e,details:!e.details,sidebar:!0})),style:{border:`var(--border)`,padding:`var(--gap-3)`,cursor:`pointer`,background:r.details?`var(--neutral)`:`var(--white)`},children:[(0,h.jsx)(`h4`,{children:e}),(0,h.jsx)(`p`,{style:{fontSize:24},children:t})]}),(0,h.jsx)(w,{target:`details`,when:r.details,children:(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(d,{className:`place-items-center`,children:[(0,h.jsxs)(`h4`,{children:[e,` - Detailed View`]}),(0,h.jsx)(l,{isIcon:!0,onClick:()=>a(e=>({...e,details:!1})),className:`ml-a`,children:(0,h.jsx)(i,{})})]}),(0,h.jsxs)(`p`,{children:[`Trend: ↗️ +`,n,`%`]}),(0,h.jsx)(`p`,{children:`Last updated: 2 minutes ago`})]})}),(0,h.jsx)(w,{target:`sidebar`,when:r.sidebar,children:(0,h.jsxs)(l,{isText:!0,onClick:()=>a(e=>({...e,sidebar:!e.sidebar})),children:[e,` ↗️ +`,n,`%`]})}),(0,h.jsx)(w,{target:`tooltip`,when:s,children:(0,h.jsxs)(A,{children:[`↗️ +`,n,`%`]})})]})}function A({children:e}){return(0,h.jsx)(g,{style:{backgroundColor:`var(--positive)`,padding:`var(--pxy)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},offset:{x:20,y:20},children:e})}const j={name:`Portals <3`,render:function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(y,{children:[(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,h.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,h.jsx)(k,{title:`Revenue`,value:`$1.2M`,trend:12}),(0,h.jsx)(k,{title:`Users`,value:`45K`,trend:8}),(0,h.jsx)(k,{title:`LOC`,value:`500.200K`,trend:20})]}),(0,h.jsx)(S,{id:`details`,style:{border:`var(--border)`,padding:`var(--gap-3)`},children:(0,h.jsx)(`p`,{children:`Details`})})]}),(0,h.jsx)(S,{id:`sidebar`,style:{position:`fixed`,right:0,top:0,display:`flex`,gap:`var(--gap-3)`,placeItems:`center`,minHeight:`var(--min-height)`},className:`has-one-child`,children:(0,h.jsx)(a,{})}),(0,h.jsx)(S,{id:`tooltip`})]})})}};function M({metric:e,onOpen:t}){return(0,h.jsxs)(`div`,{onClick:t,style:{border:`var(--border)`,padding:`var(--gap-3)`,cursor:`pointer`,background:`var(--white)`},children:[(0,h.jsx)(`h4`,{children:e.title}),(0,h.jsx)(`p`,{style:{fontSize:24},children:e.value})]})}const N={name:`Detachable`,render:function(){let[e,t]=(0,p.useState)(null),[n,r]=(0,p.useState)(!1),[i,a]=(0,p.useState)(``),o=[{title:`Revenue`,value:`$1.2M`,trend:12},{title:`Users`,value:`45K`,trend:8},{title:`LOC`,value:`500.200K`,trend:20}],s=(0,p.useCallback)(()=>r(!1),[r]);return(0,h.jsxs)(y,{children:[(0,h.jsx)(`div`,{style:{display:`grid`,gap:`var(--gap-3)`,gridTemplateColumns:`repeat(3, 1fr)`},children:o.map(e=>(0,h.jsx)(M,{metric:e,onOpen:()=>{t(e),r(!1)}},e.title))}),!n&&(0,h.jsx)(S,{id:`details`,style:{marginTop:`var(--gap-4)`,border:`var(--border)`,padding:`var(--gap-3)`,minHeight:120},children:!e&&(0,h.jsx)(`p`,{children:`Select a metric to see details`})}),n&&e&&(0,h.jsx)(E,{id:`details`,title:`${e.title} — Details`,features:`width=480,height=320,left=300,top=200`,onClose:s}),(0,h.jsx)(w,{target:`details`,when:!!e,children:e&&(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(d,{className:`place-items-center`,children:[(0,h.jsxs)(`h4`,{children:[e.title,` — Detailed View`]}),(0,h.jsx)(l,{isText:!0,className:`ml-a`,onClick:()=>r(e=>!e),children:n?`Attach back`:`Detach`}),(0,h.jsx)(l,{isText:!0,onClick:()=>{t(null),r(!1)},children:`Close`})]}),(0,h.jsx)(u,{id:`grrr`,value:i,onChange:e=>a(e)}),(0,h.jsxs)(`p`,{style:{marginTop:12},children:[`Trend: ↗️ +`,e.trend,`%`]}),(0,h.jsx)(`p`,{children:`Last updated: 2 minutes ago`})]})})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Portals <3",
  render: function Render() {
    return <>
        <PortalParticipationProvider>
          <div style={{
          display: "grid",
          gap: "var(--gap-3)",
          alignItems: "stretch"
        }}>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--gap-3)",
            alignItems: "stretch"
          }}>
              <MetricsWidget title="Revenue" value="$1.2M" trend={12} />
              <MetricsWidget title="Users" value="45K" trend={8} />
              <MetricsWidget title="LOC" value="500.200K" trend={20} />
            </div>
            <PortalTarget id="details" style={{
            border: "var(--border)",
            padding: "var(--gap-3)"
          }}>
              <p>Details</p>
              {/* Widget details appear here */}
            </PortalTarget>
          </div>

          <PortalTarget id="sidebar" style={{
          position: "fixed",
          right: 0,
          top: 0,
          display: "flex",
          gap: "var(--gap-3)",
          placeItems: "center",
          minHeight: "var(--min-height)"
        }} className="has-one-child">
            <IconHeartFill />
          </PortalTarget>

          <PortalTarget id="tooltip"></PortalTarget>
        </PortalParticipationProvider>
      </>;
  }
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Detachable",
  render: function Render() {
    const [activeMetric, setActiveMetric] = useState<Metric | null>(null);
    const [detached, setDetached] = useState(false);
    const [q, setq] = useState("");
    const metrics: Metric[] = [{
      title: "Revenue",
      value: "$1.2M",
      trend: 12
    }, {
      title: "Users",
      value: "45K",
      trend: 8
    }, {
      title: "LOC",
      value: "500.200K",
      trend: 20
    }];
    const onClose = useCallback(() => setDetached(false), [setDetached]);
    return <PortalParticipationProvider>
        <div style={{
        display: "grid",
        gap: "var(--gap-3)",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}>
          {metrics.map(m => <MetricsWidget2 key={m.title} metric={m} onOpen={() => {
          setActiveMetric(m);
          setDetached(false);
        }} />)}
        </div>

        {!detached && <PortalTarget id="details" style={{
        marginTop: "var(--gap-4)",
        border: "var(--border)",
        padding: "var(--gap-3)",
        minHeight: 120
      }}>
            {!activeMetric && <p>Select a metric to see details</p>}
          </PortalTarget>}

        {detached && activeMetric && <PortalWindow id="details" title={\`\${activeMetric.title} — Details\`} features="width=480,height=320,left=300,top=200" onClose={onClose} />}

        <Participate target="details" when={!!activeMetric}>
          {activeMetric && <div>
              <Row className="place-items-center">
                <h4>{activeMetric.title} — Detailed View</h4>

                <Button isText className="ml-a" onClick={() => setDetached(d => !d)}>
                  {detached ? "Attach back" : "Detach"}
                </Button>

                <Button isText onClick={() => {
              setActiveMetric(null);
              setDetached(false);
            }}>
                  Close
                </Button>
              </Row>

              <TextInput id="grrr" value={q} onChange={v => setq(v)} />
              <p style={{
            marginTop: 12
          }}>Trend: ↗️ +{activeMetric.trend}%</p>
              <p>Last updated: 2 minutes ago</p>
            </div>}
        </Participate>
      </PortalParticipationProvider>;
  }
}`,...N.parameters?.docs?.source}}};const P=[`StoryA`,`StoryB`];export{P as a,N as i,D as n,j as r,O as t};