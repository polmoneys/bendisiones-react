import{L as e,_ as t,p as n}from"./iframe-BOgCTUXy.js";import{t as r}from"./react-dom-BbEpTgsK.js";var i=t(),a=r(),o=n(),s=(0,i.createContext)(null);function c({children:e}){let[t,n]=(0,i.useState)(new Map),r=(0,i.useCallback)((e,t)=>{n(n=>new Map(n).set(e,t))},[]),a=(0,i.useCallback)(e=>{n(t=>{let n=new Map(t);return n.delete(e),n})},[]);return(0,o.jsx)(s.Provider,{value:{targets:t,registerTarget:r,unregisterTarget:a},children:e})}function l(){let e=(0,i.useContext)(s);if(!e)throw Error(`Portal components must be used within PortalParticipationProvider`);return e}function u(e){let{registerTarget:t,unregisterTarget:n}=l(),[r,a]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(r)return t(e,r),()=>n(e)},[e,r,t,n]),a}function d({id:e,children:t,as:n,...r}){let i=u(e);return(0,o.jsx)(n||`div`,{ref:i,...r,children:t})}function f(e,t,n=!0){let{targets:r}=l(),i=r.get(e);return!n||!i?null:(0,a.createPortal)(t,i)}function p({target:e,when:t=!0,children:n}){return f(e,n,t)}c.__docgenInfo={description:``,methods:[],displayName:`PortalParticipationProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`PortalTarget`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},as:{required:!1,tsType:{name:`T`},description:``}}};var m=e({StoryA:()=>_,__namedExportsOrder:()=>v,default:()=>h}),h={title:`Inspired/Portal`,subcomponents:{Participate:p,PortalParticipationProvider:c,PortalTarget:d},parameters:{layout:`centered`}};function g({title:e,value:t,trend:n}){let[r,a]=(0,i.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{onClick:()=>a(!r),style:{border:`var(--border)`,padding:`var(--gap-3)`,cursor:`pointer`,background:r?`var(--neutral)`:`var(--white)`},children:[(0,o.jsx)(`h4`,{children:e}),(0,o.jsx)(`p`,{style:{fontSize:24},children:t})]}),(0,o.jsx)(p,{target:`details`,when:r,children:(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`h4`,{children:[e,` - Detailed View`]}),(0,o.jsxs)(`p`,{children:[`Trend: ↗️ +`,n,`%`]}),(0,o.jsx)(`p`,{children:`Last updated: 2 minutes ago`}),(0,o.jsx)(`button`,{onClick:()=>a(!1),children:`Close`})]})})]})}const _={name:`Portals <3`,render:function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`2fr 1fr`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,o.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,o.jsx)(g,{title:`Revenue`,value:`$1.2M`,trend:12}),(0,o.jsx)(g,{title:`Users`,value:`45K`,trend:8})]}),(0,o.jsx)(d,{id:`details`,style:{border:`var(--border)`,padding:`var(--gap-3)`},children:(0,o.jsx)(`p`,{children:`Details`})})]})})})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Portals <3",
  render: function Render() {
    return <>
        <PortalParticipationProvider>
          <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "var(--gap-3)",
          alignItems: "stretch"
        }}>
            <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "var(--gap-3)",
            alignItems: "stretch"
          }}>
              <MetricsWidget title="Revenue" value="$1.2M" trend={12} />
              <MetricsWidget title="Users" value="45K" trend={8} />
            </div>

            <PortalTarget id="details" style={{
            border: "var(--border)",
            padding: "var(--gap-3)"
          }}>
              <p>Details</p>
              {/* Widget details appear here */}
            </PortalTarget>
          </div>
        </PortalParticipationProvider>
      </>;
  }
}`,..._.parameters?.docs?.source}}};const v=[`StoryA`];export{v as i,m as n,_ as r,h as t};