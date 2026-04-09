import"./preload-helper-DGWYlufl.js";import{m as e}from"./iframe-DKRbt5eR.js";import{n as t}from"./lib-XGcDP-K-.js";import"./chunk-CYSK6WYR-_6az3sk7.js";import"./theming-DeUUoXVS.js";import"./react-dom-Bei6ITG-.js";import"./chunk-P4F4UVXX-yI10lHkC.js";import"./chunk-45UGUKRX-5OJm3y7k.js";import"./components-sp1myyEB.js";import{o as n}from"./blocks-CKpLtLh4.js";import"./go-B0y6IAKW.js";import"./utils-DxWitZhv.js";import"./index.module-D24upBnk.js";import"./Group-heH1LRHz.js";import"./Ring-CZ-oIJLA.js";import"./FocusScope-DNm_wySs.js";import"./utils-BPu7wwOn.js";import"./useKeyboard-C6S3qYdr.js";import"./Toolbar-D7c07bAp.js";import"./Button-DdIKtDiv.js";import"./InputText-B5v4jcaS.js";import{n as r}from"./AutocompLite.stories-CtovtNCJ.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
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