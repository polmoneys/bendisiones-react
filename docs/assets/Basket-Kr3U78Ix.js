import"./preload-helper-DGWYlufl.js";import{n as e,r as t}from"./Basket.stories-DTmXeKPT.js";import{m as n}from"./iframe-Mz_QU2m_.js";import{n as r}from"./lib-B32lL1Y6.js";import"./chunk-CYSK6WYR-_6az3sk7.js";import"./theming-BZhYDAMn.js";import"./react-dom-C34Mq_S2.js";import"./chunk-P4F4UVXX-DgYksnCx.js";import"./chunk-45UGUKRX-5OJm3y7k.js";import"./components-C0yOt6cJ.js";import{n as i,o as a}from"./blocks-DvcNTg4X.js";import"./go-CuiDf3lA.js";import"./utils-DxWitZhv.js";import"./index.module-D24upBnk.js";import"./Ring-Di3_q9Dg.js";import"./FocusScope-DrpAtk0s.js";import"./utils-Db9pvwBo.js";import"./Toolbar-DFdpD9VT.js";import"./Button-C4tCrkTm.js";import"./Flex-BenJeyI0.js";var o=n();function s(n){let s={code:`code`,p:`p`,pre:`pre`,...r(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{of:e}),`
`,(0,o.jsxs)(`div`,{id:`body`,children:[(0,o.jsxs)(s.p,{children:[`Select items from different collections and export the selection with `,(0,o.jsx)(s.code,{children:`useBasket`}),`.`]}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`const basket = useBasket();

const {
  api: { add, remove, toggle, set, clear, addOptions },
  views: {
    flattened,
    grouped,
    countsByGroup,
    selectedIds
  },
  helpers: {
    getItem,
    availableGroups,
    availableItemsInGroup,
    isSelected,
    export
  },
};
} = basket;

`})}),(0,o.jsx)(i,{of:t})]}),`
`,(0,o.jsx)(`style`,{children:`
    #body *:not(pre *) {
        font-size: var(--font-size);
        font-weight: var(--font-weight);
        line-height: var(--font-line-height);
    }

img {
  object-fit: cover;
}

`})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};