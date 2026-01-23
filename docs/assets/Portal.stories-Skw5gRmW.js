import{_ as e,p as t}from"./iframe-C0VeOmNI.js";import{t as n}from"./react-dom-DzN-w94Z.js";var r=e(),i=n(),a=t(),o=(0,r.createContext)(null);function s({children:e}){let[t,n]=(0,r.useState)(new Map),i=(0,r.useCallback)((e,t)=>{n(n=>new Map(n).set(e,t))},[]),s=(0,r.useCallback)(e=>{n(t=>{let n=new Map(t);return n.delete(e),n})},[]);return(0,a.jsx)(o.Provider,{value:{targets:t,registerTarget:i,unregisterTarget:s},children:e})}function c(){let e=(0,r.useContext)(o);if(!e)throw Error(`Portal components must be used within PortalParticipationProvider`);return e}function l(e){let{registerTarget:t,unregisterTarget:n}=c(),[i,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(i)return t(e,i),()=>n(e)},[e,i,t,n]),a}function u({id:e,children:t,as:n,...r}){let i=l(e);return(0,a.jsx)(n||`div`,{ref:i,...r,children:t})}function d(e,t,n=!0){let{targets:r}=c(),a=r.get(e);return!n||!a?null:(0,i.createPortal)(t,a)}function f({target:e,when:t=!0,children:n}){return d(e,n,t)}s.__docgenInfo={description:``,methods:[],displayName:`PortalParticipationProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`PortalTarget`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},as:{required:!1,tsType:{name:`T`},description:``}}};var p={title:`Dumb/Portal`,subcomponents:{Participate:f,PortalParticipationProvider:s,PortalTarget:u},parameters:{layout:`centered`}};function m({title:e,value:t,trend:n}){let[i,o]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`div`,{onClick:()=>o(!i),style:{border:`var(--border)`,padding:`var(--gap-3)`,cursor:`pointer`,background:i?`var(--neutral)`:`var(--white)`},children:[(0,a.jsx)(`h4`,{children:e}),(0,a.jsx)(`div`,{style:{fontSize:24},children:t})]}),(0,a.jsx)(f,{target:`details`,when:i,children:(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`h4`,{children:[e,` - Detailed View`]}),(0,a.jsxs)(`p`,{children:[`Trend: ↗️ +`,n,`%`]}),(0,a.jsx)(`p`,{children:`Last updated: 2 minutes ago`}),(0,a.jsx)(`button`,{onClick:()=>o(!1),children:`Close`})]})})]})}const h={name:`Portals <3`,render:function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s,{children:(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`2fr 1fr`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`var(--gap-3)`,alignItems:`stretch`},children:[(0,a.jsx)(m,{title:`Revenue`,value:`$1.2M`,trend:12}),(0,a.jsx)(m,{title:`Users`,value:`45K`,trend:8})]}),(0,a.jsx)(u,{id:`details`,style:{border:`var(--border)`,padding:`var(--gap-3)`},children:(0,a.jsx)(`p`,{children:`Details`})})]})})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const g=[`StoryA`];export{h as StoryA,g as __namedExportsOrder,p as default};