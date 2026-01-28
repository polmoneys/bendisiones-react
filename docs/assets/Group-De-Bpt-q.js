import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-DW_1uAoP.js";import{n as t}from"./lib-CXlfH5bl.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-alknr_dR.js";import"./react-dom-B02bnRgo.js";import"./chunk-P4F4UVXX-BfTWfLFi.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-BCCN68Px.js";import{n,o as r}from"./blocks-FPeBokTp.js";import"./go-CS6MSl63.js";import"./utils-BaIUY_Nw.js";import"./Group-Ub1KrpK-.js";import"./Ring-C__2kaYT.js";import"./InputText-BwRbqd8X.js";import"./Button-BCsGzwyh.js";import"./Checkbox-CoW6HlZm.js";import"./Shape-DE7Upj51.js";import{a as i,i as a,l as o,n as s,o as c,u as l}from"./Group.stories-CHLGUFe9.js";import"./Kiss-DGcNpKTW.js";import"./Media-sAcz8zuD.js";var u=e();function d(e){let d={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{of:s}),`
`,(0,u.jsxs)(`div`,{id:`body`,children:[(0,u.jsxs)(d.p,{children:[(0,u.jsx)(d.code,{children:`UI is the art of group`}),`-ing`]}),(0,u.jsxs)(d.p,{children:[`Let's start with `,(0,u.jsx)(d.code,{children:`Group`}),` component, it gives us the power to wrap `,(0,u.jsx)(d.code,{children:`children`}),` with `,(0,u.jsx)(d.code,{children:`start`}),` or `,(0,u.jsx)(d.code,{children:`end`}),` slots...`]}),(0,u.jsx)(n,{of:i}),(0,u.jsx)(n,{of:a}),(0,u.jsx)(d.p,{children:`Power up with the whole trinity in use:`}),(0,u.jsx)(n,{of:c}),(0,u.jsxs)(d.p,{children:[`Another kind of group-ing inspired by `,(0,u.jsx)(d.code,{children:`MUI sx prop`}),` is `,(0,u.jsx)(d.code,{children:`Container`}),` component. It allows consumer to declare advanced styles inline to any HTML element by replacing `,(0,u.jsx)(d.code,{children:`&`}),` with a proper target selector.`]}),(0,u.jsx)(d.pre,{children:(0,u.jsx)(d.code,{className:`language-tsx`,children:`const cardSXLandscape = \`
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
`})}),(0,u.jsx)(n,{of:o}),(0,u.jsx)(n,{of:l})]}),`
`,(0,u.jsx)(`style`,{children:`
    #body *:not(pre *) {
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        line-height: var(--font-line-height);
    }

img {
  object-fit: cover;
}

`})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(d,{...e})}):d(e)}export{f as default};