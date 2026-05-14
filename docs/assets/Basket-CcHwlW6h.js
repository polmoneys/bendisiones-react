import"./preload-helper-DGWYlufl.js";import{n as e,r as t}from"./Basket.stories-CJJTnxjq.js";import{m as n}from"./iframe-B1VEISOk.js";import{n as r}from"./lib-Wv2ZlNGM.js";import"./chunk-CYSK6WYR-_6az3sk7.js";import"./theming-CmDcvUGq.js";import"./react-dom-Sc88ePe3.js";import"./chunk-P4F4UVXX-CjMQHlJY.js";import"./chunk-45UGUKRX-5OJm3y7k.js";import"./components-CfGipwSY.js";import{n as i,o as a}from"./blocks-CrT5hsnp.js";import"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import"./Flex-B7Z26IXG.js";import"./go-DtHjXx7B.js";import"./Ring-CYRSh2n9.js";import"./FocusScope-COHwx69n.js";import"./utils-dMt2WDeI.js";import"./Toolbar-BJxOB7X3.js";import"./Button-CGyV4J_P.js";var o=n();function s(n){let s={code:`code`,p:`p`,pre:`pre`,...r(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{of:e}),`
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