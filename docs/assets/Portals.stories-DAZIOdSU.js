import{L as e,_ as t,p as n}from"./iframe-DW_1uAoP.js";import{t as r}from"./react-dom-B02bnRgo.js";import{l as i,o as a}from"./go-CS6MSl63.js";import{t as o}from"./useHover-eKOBzMDT.js";import{t as s}from"./Button-BCsGzwyh.js";var c=t(),l=r(),u=n(),d=(0,c.createContext)(null);function f({children:e}){let[t,n]=(0,c.useState)(new Map),r=(0,c.useCallback)((e,t)=>{n(n=>new Map(n).set(e,t))},[]),i=(0,c.useCallback)(e=>{n(t=>{let n=new Map(t);return n.delete(e),n})},[]);return(0,u.jsx)(d.Provider,{value:{targets:t,registerTarget:r,unregisterTarget:i},children:e})}function p(){let e=(0,c.useContext)(d);if(!e)throw Error(`Portal components must be used within PortalParticipationProvider`);return e}function m(e){let{registerTarget:t,unregisterTarget:n}=p(),[r,i]=(0,c.useState)(null);return(0,c.useEffect)(()=>{if(r)return t(e,r),()=>n(e)},[e,r,t,n]),i}function h({id:e,children:t,as:n,...r}){let i=m(e);return(0,u.jsx)(n||`div`,{ref:i,...r,children:t})}function g(e,t,n=!0){let{targets:r}=p(),i=r.get(e);return!n||!i?null:(0,l.createPortal)(t,i)}function _({target:e,when:t=!0,children:n}){return g(e,n,t)}f.__docgenInfo={description:``,methods:[],displayName:`PortalParticipationProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`PortalTarget`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},as:{required:!1,tsType:{name:`T`},description:``}}};var v=e({StoryA:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y={title:`Inspired/Portal`,subcomponents:{Participate:_,PortalParticipationProvider:f,PortalTarget:h},parameters:{layout:`centered`}};function b({title:e,value:t,trend:n}){let[r,a]=(0,c.useState)({details:!1,sidebar:!1,tooltip:!1}),{hoverProps:l,isHovered:d}=o({onHoverStart:()=>a(e=>({...e,tooltip:!0})),onHoverEnd:()=>a(e=>({...e,tooltip:!1}))});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{...l,onClick:()=>a(e=>({...e,details:!e.details,sidebar:!0})),style:{border:`var(--border)`,padding:`var(--gap-3)`,cursor:`pointer`,background:r.details?`var(--neutral)`:`var(--white)`},children:[(0,u.jsx)(`h4`,{children:e}),(0,u.jsx)(`p`,{style:{fontSize:24},children:t})]}),(0,u.jsx)(_,{target:`details`,when:r.details,children:(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`row place-items-center`,children:[(0,u.jsxs)(`h4`,{children:[e,` - Detailed View`]}),(0,u.jsx)(s,{isIcon:!0,onClick:()=>a(e=>({...e,details:!1})),className:`ml-a`,children:(0,u.jsx)(i,{})})]}),(0,u.jsxs)(`p`,{children:[`Trend: ↗️ +`,n,`%`]}),(0,u.jsx)(`p`,{children:`Last updated: 2 minutes ago`})]})}),(0,u.jsx)(_,{target:`sidebar`,when:r.sidebar,children:(0,u.jsxs)(s,{isText:!0,onClick:()=>a(e=>({...e,sidebar:!e.sidebar})),children:[e,` ↗️ +`,n,`%`]})}),(0,u.jsx)(_,{target:`tooltip`,when:d,children:(0,u.jsxs)(`p`,{children:[`↗️ +`,n,`%`]})})]})}const x={name:`Portals <3`,render:function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(f,{children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,u.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,u.jsx)(b,{title:`Revenue`,value:`$1.2M`,trend:12}),(0,u.jsx)(b,{title:`Users`,value:`45K`,trend:8}),(0,u.jsx)(b,{title:`LOC`,value:`500.200K`,trend:20})]}),(0,u.jsx)(h,{id:`details`,style:{border:`var(--border)`,padding:`var(--gap-3)`},children:(0,u.jsx)(`p`,{children:`Details`})})]}),(0,u.jsx)(h,{id:`sidebar`,style:{position:`fixed`,right:0,top:0,display:`flex`,gap:`var(--gap-3)`,placeItems:`center`,minHeight:`var(--min-height)`},className:`hasOneChild`,children:(0,u.jsx)(a,{})}),(0,u.jsx)(h,{id:`tooltip`,className:`tooltip`})]})})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        }} className="hasOneChild">
            <IconHeartFill />
          </PortalTarget>

          <PortalTarget id="tooltip" className="tooltip"></PortalTarget>
        </PortalParticipationProvider>
      </>;
  }
}`,...x.parameters?.docs?.source}}};const S=[`StoryA`];export{S as i,v as n,x as r,y as t};