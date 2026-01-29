import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-qFZA0Z8s.js";import{n as t}from"./lib-CuzoSzv1.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-Dw_ZbByf.js";import"./react-dom-iwXRIFqy.js";import"./chunk-P4F4UVXX-BOD64K02.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-DuU8uWu-.js";import{n,o as r}from"./blocks-NxK6xvrQ.js";import"./go-95r8PZhd.js";import"./utils-BaIUY_Nw.js";import"./Group-BmFBjXY6.js";import"./Ring-e9drS4dc.js";import"./InputText-B2sq3KBh.js";import"./Button-S_xOkKq7.js";import"./Checkbox-LyWI26PQ.js";import"./Shape-Bdyk7ucI.js";import{a as i,d as a,i as o,l as s,n as c,o as l,u}from"./Group.stories-BkFVfuhI.js";import"./Kiss-DTrVJP_U.js";import"./Media-CM2H6Ktm.js";var d=e();function f(e){let f={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{of:c}),`
`,(0,d.jsxs)(`div`,{id:`body`,children:[(0,d.jsxs)(f.p,{children:[(0,d.jsx)(f.code,{children:`UI is the art of group`}),`-ing`]}),(0,d.jsxs)(f.p,{children:[`Let's start with `,(0,d.jsx)(f.code,{children:`Group`}),` component, it gives us the power to wrap `,(0,d.jsx)(f.code,{children:`children`}),` with `,(0,d.jsx)(f.code,{children:`start`}),` or `,(0,d.jsx)(f.code,{children:`end`}),` slots...`]}),(0,d.jsx)(n,{of:i}),(0,d.jsx)(n,{of:o}),(0,d.jsx)(f.p,{children:`Power up with the whole trinity in use:`}),(0,d.jsx)(n,{of:l}),(0,d.jsxs)(f.p,{children:[`Another kind of group-ing inspired by `,(0,d.jsx)(f.code,{children:`MUI sx prop`}),` is `,(0,d.jsx)(f.code,{children:`Container`}),` component. It allows consumer to declare advanced styles inline to any HTML element by replacing `,(0,d.jsx)(f.code,{children:`&`}),` with a proper target selector.`]}),(0,d.jsx)(f.pre,{children:(0,d.jsx)(f.code,{className:`language-tsx`,children:`const cardSXLandscape = \`
  & {
      width:min(690px, 66vw);
      aspect-ratio: 16/9;
  }

  &:not(:has(img)) {
      display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
\`;
`})}),(0,d.jsx)(n,{of:s}),(0,d.jsx)(n,{of:u}),(0,d.jsxs)(f.p,{children:[`Finally, cheat mode group-ing with `,(0,d.jsx)(f.code,{children:`Grid`}),` component. It allows for breakpoint aware declarative values.`]}),(0,d.jsx)(n,{of:a})]}),`
`,(0,d.jsx)(`style`,{children:`
    #body *:not(pre *) {
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        line-height: var(--font-line-height);
    }

img {
  object-fit: cover;
}

`})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(f,{...e})}):f(e)}export{p as default};