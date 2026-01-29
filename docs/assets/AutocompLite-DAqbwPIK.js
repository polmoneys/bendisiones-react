import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-qFZA0Z8s.js";import{n as t}from"./lib-CuzoSzv1.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-Dw_ZbByf.js";import"./react-dom-iwXRIFqy.js";import"./chunk-P4F4UVXX-BOD64K02.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-DuU8uWu-.js";import{o as n}from"./blocks-NxK6xvrQ.js";import"./go-95r8PZhd.js";import"./utils-BaIUY_Nw.js";import"./Group-BmFBjXY6.js";import"./Ring-e9drS4dc.js";import"./FocusScope-DNhg7J6M.js";import"./utils-DTrr5com.js";import{n as r}from"./AutocompLite.stories-yb9x9728.js";import"./InputText-B2sq3KBh.js";import"./Button-S_xOkKq7.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
`,(0,i.jsxs)(`div`,{id:`body`,children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:`AutocompLite`}),` allows to find `,(0,i.jsx)(a.code,{children:`multiple key values pretty fast`}),` while presenting them to the user `,(0,i.jsx)(a.code,{children:`highlighted`}),` if matching `,(0,i.jsx)(a.code,{children:`search query`}),` (if that makes any sense). User can then select one or many...`]}),(0,i.jsxs)(a.p,{children:[`We shall accept any shaped data, given an Array of `,(0,i.jsx)(a.code,{children:`T`}),` we'll use a `,(0,i.jsx)(a.code,{children:`mapper function`}),` to build the `,(0,i.jsx)(a.code,{children:`full search option`}),`, as in:`]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`const PLACES = [
  {
    id: "paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    continent: "Europe",
  },
  //...
];

const mapper = (p: (typeof demoPlaces)[number]): AutocompLiteOption => ({
  id: p.id,
  city: p.city,
  state: p?.state ?? "",
  country: p.country,
  continent: p.continent,
  full: \`\${p.city}\${p.state ? \`, \${p.state}\` : ""}, \${p.country}\`,
});
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