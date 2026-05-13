import{m as e}from"./iframe-BwNSIbbV.js";var t=e();function n(e){switch(e.preset){case`money`:return{style:`currency`,currency:e.currency,currencyDisplay:e.currencyDisplay,...e.options};case`compact`:return{notation:`compact`,compactDisplay:e.compactDisplay??`short`,maximumFractionDigits:1,...e.options};case`fixed`:{let t=e.digits??2;return{minimumFractionDigits:t,maximumFractionDigits:t,...e.options}}default:return e.options??{}}}function r(e){let{value:r,locale:i,children:a,className:o,fallback:s}=e,c;try{c=new Intl.NumberFormat(i,n(e))}catch{return(0,t.jsx)(t.Fragment,{children:s??null})}let l;try{l=c.formatToParts(r)}catch{return(0,t.jsx)(t.Fragment,{children:s??null})}return a?(0,t.jsx)(t.Fragment,{children:a(l)}):(0,t.jsx)(`span`,{className:o,children:c.format(r)})}function i(e,n,r){let i=r?new Set(r):null;return e.filter(e=>i?i.has(e.type):!0).map((e,r)=>(0,t.jsx)(`span`,{className:n,children:e.value},`${e.type}-${r}`))}function a(e,t){let n=Array.isArray(t)?t:[t];return e.find(e=>n.includes(e.type))}function o({parts:e,className:n}){return(0,t.jsx)(t.Fragment,{children:i(e,n)})}function s({parts:e,className:n}){let r=a(e,`currency`);return r?(0,t.jsx)(`span`,{className:n,children:r.value}):null}function c({parts:e,className:n}){let r=a(e,[`minusSign`,`plusSign`]);return r?(0,t.jsx)(`span`,{className:n,children:r.value}):null}function l({parts:e,className:n}){return(0,t.jsx)(t.Fragment,{children:i(e,n,[`integer`])})}function u({parts:e,className:n}){return(0,t.jsx)(t.Fragment,{children:i(e,n,[`group`])})}function d({parts:e,className:n}){let r=a(e,`decimal`);return r?(0,t.jsx)(`span`,{className:n,children:r.value}):null}function f({parts:e,className:n}){return(0,t.jsx)(t.Fragment,{children:i(e,n,[`fraction`])})}function p({parts:e,className:n}){let r=a(e,`compact`);return r?(0,t.jsx)(`span`,{className:n,children:r.value}):null}function m({parts:e,className:n}){return(0,t.jsx)(t.Fragment,{children:i(e,n,[`minusSign`,`plusSign`,`integer`,`group`])})}function h({parts:e,className:n}){return(0,t.jsx)(t.Fragment,{children:i(e,n,[`minusSign`,`plusSign`,`integer`,`group`,`decimal`,`fraction`])})}r.__docgenInfo={description:``,methods:[],displayName:`NumberFormat`},o.__docgenInfo={description:``,methods:[],displayName:`NumberParts`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},s.__docgenInfo={description:``,methods:[],displayName:`CurrencySymbol`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`Sign`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},l.__docgenInfo={description:``,methods:[],displayName:`Integer`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`GroupSeparator`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`DecimalSeparator`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`Fraction`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},p.__docgenInfo={description:``,methods:[],displayName:`CompactSuffix`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},m.__docgenInfo={description:``,methods:[],displayName:`WholeNumber`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`FixedDecimal`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Intl.NumberFormatPart[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};var g={title:`Dumb/NumberFormat`,component:r,parameters:{layout:`centered`},args:{value:1234.56}};const _={name:`Playground`,render:()=>(0,t.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:24,minWidth:340,fontFamily:`system-ui, sans-serif`},children:[(0,t.jsx)(r,{value:1234.56,preset:`money`,currency:`EUR`,children:e=>(0,t.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,t.jsx)(s,{parts:e}),(0,t.jsx)(m,{parts:e}),(0,t.jsx)(d,{parts:e}),(0,t.jsx)(f,{parts:e})]})}),(0,t.jsx)(r,{value:-2450.5,preset:`money`,currency:`EUR`,children:e=>(0,t.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:(0,t.jsxs)(`span`,{style:{color:`crimson`,display:`inline-flex`,gap:4},children:[(0,t.jsx)(s,{parts:e}),(0,t.jsx)(m,{parts:e}),(0,t.jsx)(d,{parts:e}),(0,t.jsx)(f,{parts:e})]})})}),(0,t.jsx)(r,{value:9876543.21,preset:`money`,currency:`USD`,children:e=>(0,t.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,t.jsx)(s,{parts:e}),(0,t.jsx)(`span`,{style:{fontWeight:700},children:(0,t.jsx)(m,{parts:e})}),(0,t.jsxs)(`span`,{style:{opacity:.65},children:[(0,t.jsx)(d,{parts:e}),(0,t.jsx)(f,{parts:e})]})]})}),(0,t.jsx)(r,{value:1234.567,preset:`fixed`,digits:2,children:e=>(0,t.jsx)(`span`,{style:{display:`inline-flex`},children:(0,t.jsx)(h,{parts:e})})}),(0,t.jsx)(r,{value:12.5,preset:`fixed`,digits:1,children:e=>(0,t.jsx)(`span`,{style:{display:`inline-flex`},children:(0,t.jsx)(h,{parts:e})})}),(0,t.jsx)(r,{value:1234567.89,preset:`fixed`,digits:3,children:e=>(0,t.jsxs)(`span`,{style:{display:`inline-flex`},children:[(0,t.jsx)(m,{parts:e}),(0,t.jsx)(d,{parts:e}),(0,t.jsx)(f,{parts:e})]})}),(0,t.jsx)(r,{value:1534e3,preset:`compact`,children:e=>(0,t.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,t.jsx)(m,{parts:e}),(0,t.jsx)(p,{parts:e})]})}),(0,t.jsx)(r,{value:1534e3,preset:`compact`,compactDisplay:`long`,children:e=>(0,t.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,t.jsx)(m,{parts:e}),(0,t.jsx)(p,{parts:e})]})}),(0,t.jsx)(r,{value:9999500,preset:`compact`,children:e=>(0,t.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,t.jsx)(m,{parts:e}),(0,t.jsx)(p,{parts:e})]})})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  render: () => <div style={{
    display: "grid",
    gap: 12,
    padding: 24,
    minWidth: 340,
    fontFamily: "system-ui, sans-serif"
  }}>
      <NumberFormat value={1234.56} preset="money" currency="EUR">
        {parts => <span style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4
      }}>
            <CurrencySymbol parts={parts} />
            <WholeNumber parts={parts} />
            <DecimalSeparator parts={parts} />
            <Fraction parts={parts} />
          </span>}
      </NumberFormat>

      <NumberFormat value={-2450.5} preset="money" currency="EUR">
        {parts => <span style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4
      }}>
            <span style={{
          color: "crimson",
          display: "inline-flex",
          gap: 4
        }}>
              <CurrencySymbol parts={parts} />
              <WholeNumber parts={parts} />
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>}
      </NumberFormat>

      <NumberFormat value={9876543.21} preset="money" currency="USD">
        {parts => <span style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4
      }}>
            <CurrencySymbol parts={parts} />
            <span style={{
          fontWeight: 700
        }}>
              <WholeNumber parts={parts} />
            </span>
            <span style={{
          opacity: 0.65
        }}>
              <DecimalSeparator parts={parts} />
              <Fraction parts={parts} />
            </span>
          </span>}
      </NumberFormat>

      <NumberFormat value={1234.567} preset="fixed" digits={2}>
        {parts => <span style={{
        display: "inline-flex"
      }}>
            <FixedDecimal parts={parts} />
          </span>}
      </NumberFormat>

      <NumberFormat value={12.5} preset="fixed" digits={1}>
        {parts => <span style={{
        display: "inline-flex"
      }}>
            <FixedDecimal parts={parts} />
          </span>}
      </NumberFormat>

      <NumberFormat value={1234567.89} preset="fixed" digits={3}>
        {parts => <span style={{
        display: "inline-flex"
      }}>
            <WholeNumber parts={parts} />
            <DecimalSeparator parts={parts} />
            <Fraction parts={parts} />
          </span>}
      </NumberFormat>

      <NumberFormat value={1534000} preset="compact">
        {parts => <span style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4
      }}>
            <WholeNumber parts={parts} />
            <CompactSuffix parts={parts} />
          </span>}
      </NumberFormat>

      <NumberFormat value={1534000} preset="compact" compactDisplay="long">
        {parts => <span style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4
      }}>
            <WholeNumber parts={parts} />
            <CompactSuffix parts={parts} />
          </span>}
      </NumberFormat>

      <NumberFormat value={9999500} preset="compact">
        {parts => <span style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: 4
      }}>
            <WholeNumber parts={parts} />
            <CompactSuffix parts={parts} />
          </span>}
      </NumberFormat>
    </div>
}`,..._.parameters?.docs?.source}}};const v=[`Money`];export{_ as Money,v as __namedExportsOrder,g as default};