import"./preload-helper-DGWYlufl.js";import{m as e}from"./iframe-BlO8GLoW.js";import{n as t}from"./lib-c7Ipttye.js";import"./chunk-CYSK6WYR-_6az3sk7.js";import"./theming-DdVjUfMo.js";import"./react-dom-CexUNGNa.js";import"./chunk-P4F4UVXX-DfTlRKdN.js";import"./chunk-45UGUKRX-5OJm3y7k.js";import"./components-LeDWfGxr.js";import{n,o as r}from"./blocks-BGTVeSx1.js";import"./go-BcwhoqCF.js";import"./utils-DxWitZhv.js";import"./Group-B5oQ9YRG.js";import"./Ring-DhlcaxDt.js";import"./InputText-CIHi2zdJ.js";import"./Button-CucRfBWn.js";import"./Checkbox-BxotTxOh.js";import"./Shape-LbREaMLI.js";import{a as i,d as a,i as o,l as s,n as c,o as l,u}from"./Group.stories-CHIqdQJL.js";import"./Kiss-DTnccidl.js";import"./Media-vZwFjTDs.js";var d=e();function f(e){let f={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{of:c}),`
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