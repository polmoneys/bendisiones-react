import{$ as e,N as t,m as n}from"./iframe-BlO8GLoW.js";import{t as r}from"./react-dom-CexUNGNa.js";import{o as i,u as a}from"./go-BcwhoqCF.js";import{n as o,t as s}from"./utils-DxWitZhv.js";import{t as c}from"./useHover-dhWqbvTu.js";import{t as l}from"./Button-CucRfBWn.js";import{n as u}from"./Flex-BsyJIGxv.js";var d={root:`_root_3cba7_1`},f=t(),p=r(),m=n();function h({children:e,offset:t={x:0,y:0},interactive:n=!1,container:r,className:i,style:a,...c}){let l=(0,f.useRef)(null),u=(0,f.useRef)(null),h=(0,f.useRef)(null),g=typeof window<`u`&&typeof document<`u`;return(0,f.useEffect)(()=>{if(!g)return;function e(e,n){h.current={x:e+t.x,y:n+t.y},u.current??=requestAnimationFrame(()=>{if(u.current=null,!l.current||!h.current)return;let{x:e,y:t}=h.current;l.current.style.transform=`translate3d(${e}px, ${t}px, 0)`,l.current.style.visibility=`visible`})}function n(t){e(t.clientX,t.clientY)}function r(){l.current&&(l.current.style.visibility=`hidden`)}return window.PointerEvent?(window.addEventListener(`pointermove`,n),window.addEventListener(`pointerup`,r),window.addEventListener(`pointercancel`,r),window.addEventListener(`blur`,r)):(window.addEventListener(`mousemove`,t=>e(t.clientX,t.clientY)),window.addEventListener(`touchmove`,t=>{let n=t.touches[0];n&&e(n.clientX,n.clientY)}),window.addEventListener(`mouseup`,r),window.addEventListener(`touchend`,r),window.addEventListener(`blur`,r)),()=>{window.PointerEvent&&(window.removeEventListener(`pointermove`,n),window.removeEventListener(`pointerup`,r),window.removeEventListener(`pointercancel`,r),window.removeEventListener(`blur`,r)),u.current!=null&&cancelAnimationFrame(u.current)}},[t.x,t.y,g]),g?(0,p.createPortal)((0,m.jsx)(`div`,{...c,ref:l,className:s(i,d.root),style:{...o(a)&&a,pointerEvents:n?`auto`:`none`},"aria-hidden":!n,children:e}),r??document.body):null}var g=r(),_=(0,f.createContext)(null);function v({children:e}){let[t,n]=(0,f.useState)(new Map),r=(0,f.useCallback)((e,t)=>{n(n=>new Map(n).set(e,t))},[]),i=(0,f.useCallback)(e=>{n(t=>{let n=new Map(t);return n.delete(e),n})},[]);return(0,m.jsx)(_.Provider,{value:{targets:t,registerTarget:r,unregisterTarget:i},children:e})}function y(){let e=(0,f.useContext)(_);if(!e)throw Error(`Portal components must be used within PortalParticipationProvider`);return e}function b(e){let{registerTarget:t,unregisterTarget:n}=y(),[r,i]=(0,f.useState)(null);return(0,f.useEffect)(()=>{if(r)return t(e,r),()=>n(e)},[e,r,t,n]),i}function x({id:e,children:t,as:n,...r}){let i=b(e);return(0,m.jsx)(n||`div`,{ref:i,...r,children:t})}function S(e,t,n=!0){let{targets:r}=y(),i=r.get(e);return!n||!i?null:(0,g.createPortal)(t,i)}function C({target:e,when:t=!0,children:n}){return S(e,n,t)}v.__docgenInfo={description:``,methods:[],displayName:`PortalParticipationProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},x.__docgenInfo={description:``,methods:[],displayName:`PortalTarget`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},as:{required:!1,tsType:{name:`T`},description:``}}};var w=e({StoryA:()=>O,__namedExportsOrder:()=>k,default:()=>T}),T={title:`Inspired/Portal`,subcomponents:{Participate:C,PortalParticipationProvider:v,PortalTarget:x},parameters:{layout:`centered`}};function E({title:e,value:t,trend:n}){let[r,i]=(0,f.useState)({details:!1,sidebar:!1,tooltip:!1}),{hoverProps:o,isHovered:s}=c({onHoverStart:()=>i(e=>({...e,tooltip:!0})),onHoverEnd:()=>i(e=>({...e,tooltip:!1}))});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{...o,onClick:()=>i(e=>({...e,details:!e.details,sidebar:!0})),style:{border:`var(--border)`,padding:`var(--gap-3)`,cursor:`pointer`,background:r.details?`var(--neutral)`:`var(--white)`},children:[(0,m.jsx)(`h4`,{children:e}),(0,m.jsx)(`p`,{style:{fontSize:24},children:t})]}),(0,m.jsx)(C,{target:`details`,when:r.details,children:(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(u,{className:`place-items-center`,children:[(0,m.jsxs)(`h4`,{children:[e,` - Detailed View`]}),(0,m.jsx)(l,{isIcon:!0,onClick:()=>i(e=>({...e,details:!1})),className:`ml-a`,children:(0,m.jsx)(a,{})})]}),(0,m.jsxs)(`p`,{children:[`Trend: ↗️ +`,n,`%`]}),(0,m.jsx)(`p`,{children:`Last updated: 2 minutes ago`})]})}),(0,m.jsx)(C,{target:`sidebar`,when:r.sidebar,children:(0,m.jsxs)(l,{isText:!0,onClick:()=>i(e=>({...e,sidebar:!e.sidebar})),children:[e,` ↗️ +`,n,`%`]})}),(0,m.jsx)(C,{target:`tooltip`,when:s,children:(0,m.jsxs)(D,{children:[`↗️ +`,n,`%`]})})]})}function D({children:e}){return(0,m.jsx)(h,{style:{backgroundColor:`var(--positive)`,padding:`var(--pxy)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},offset:{x:20,y:20},children:e})}const O={name:`Portals <3`,render:function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(v,{children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,m.jsx)(E,{title:`Revenue`,value:`$1.2M`,trend:12}),(0,m.jsx)(E,{title:`Users`,value:`45K`,trend:8}),(0,m.jsx)(E,{title:`LOC`,value:`500.200K`,trend:20})]}),(0,m.jsx)(x,{id:`details`,style:{border:`var(--border)`,padding:`var(--gap-3)`},children:(0,m.jsx)(`p`,{children:`Details`})})]}),(0,m.jsx)(x,{id:`sidebar`,style:{position:`fixed`,right:0,top:0,display:`flex`,gap:`var(--gap-3)`,placeItems:`center`,minHeight:`var(--min-height)`},className:`has-one-child`,children:(0,m.jsx)(i,{})}),(0,m.jsx)(x,{id:`tooltip`})]})})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const k=[`StoryA`];export{k as i,w as n,O as r,T as t};