import"./preload-helper-DGWYlufl.js";import{n as e,r as t}from"./Basket.stories-DG4WjSD4.js";import{m as n}from"./iframe-Bq9EgU5Q.js";import{n as r}from"./lib-CILaZEY3.js";import"./chunk-CYSK6WYR-_6az3sk7.js";import"./theming-w5ne7ez-.js";import"./react-dom-BzUT1les.js";import"./chunk-P4F4UVXX-pCGH_RAV.js";import"./chunk-45UGUKRX-5OJm3y7k.js";import"./components-DGW3m76G.js";import{n as i,o as a}from"./blocks-CI5bIcTH.js";import"./go-BsG-ZTUe.js";import"./Ring-kA82GFXG.js";import"./index.module-D24upBnk.js";import"./FocusScope-BfwxKCa5.js";import"./utils-CaTdYced.js";import"./Toolbar-DNQGW9GE.js";import"./Button-DJpCCzpF.js";import"./Flex-svOwhEay.js";var o=n();function s(n){let s={code:`code`,p:`p`,pre:`pre`,...r(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{of:e}),`
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