import{m as e}from"./iframe-B1VEISOk.js";import"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import{t}from"./Flex-B7Z26IXG.js";var n=e();function r(e,t,r){let i=r?new Set(r):null;return e.filter(e=>i?i.has(e.type):!0).map((e,r)=>(0,n.jsx)(`span`,{className:t,children:e.value},`${e.type}-${r}`))}function i(e){switch(e.preset){case`money`:return{style:`currency`,currency:e.currency,currencyDisplay:e.currencyDisplay,...e.options};case`compact`:return{notation:`compact`,compactDisplay:e.compactDisplay??`short`,maximumFractionDigits:1,...e.options};case`fixed`:{let t=e.digits??2;return{minimumFractionDigits:t,maximumFractionDigits:t,...e.options}}default:return e.options??{}}}function a(e,t){let n=Array.isArray(t)?t:[t];return e.find(e=>n.includes(e.type))}function o(e){let{value:t,locale:r,children:a,className:o,fallback:s}=e,c;try{c=new Intl.NumberFormat(r,i(e))}catch{return(0,n.jsx)(n.Fragment,{children:s??null})}let l;try{l=c.formatToParts(t)}catch{return(0,n.jsx)(n.Fragment,{children:s??null})}return a?(0,n.jsx)(n.Fragment,{children:a(l)}):(0,n.jsx)(`span`,{className:o,children:c.format(t)})}function s({parts:e,className:t}){return(0,n.jsx)(n.Fragment,{children:r(e,t)})}function c({parts:e,className:t}){let r=a(e,`currency`);return r?(0,n.jsx)(`span`,{className:t,children:r.value}):null}function l({parts:e,className:t}){let r=a(e,[`minusSign`,`plusSign`]);return r?(0,n.jsx)(`span`,{className:t,children:r.value}):null}function u({parts:e,className:t}){return(0,n.jsx)(n.Fragment,{children:r(e,t,[`integer`])})}function d({parts:e,className:t}){return(0,n.jsx)(n.Fragment,{children:r(e,t,[`group`])})}function f({parts:e,className:t}){let r=a(e,`decimal`);return r?(0,n.jsx)(`span`,{className:t,children:r.value}):null}function p({parts:e,className:t}){return(0,n.jsx)(n.Fragment,{children:r(e,t,[`fraction`])})}function m({parts:e,className:t}){let r=a(e,`compact`);return r?(0,n.jsx)(`span`,{className:t,children:r.value}):null}function h({parts:e,className:t}){return(0,n.jsx)(n.Fragment,{children:r(e,t,[`minusSign`,`plusSign`,`integer`,`group`])})}function g({parts:e,className:t}){return(0,n.jsx)(n.Fragment,{children:r(e,t,[`minusSign`,`plusSign`,`integer`,`group`,`decimal`,`fraction`])})}o.__docgenInfo={description:``,methods:[],displayName:`NumberFormat`},s.__docgenInfo={description:``,methods:[],displayName:`NumberParts`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`CurrencySymbol`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},l.__docgenInfo={description:``,methods:[],displayName:`Sign`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`Integer`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`GroupSeparator`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`DecimalSeparator`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},p.__docgenInfo={description:``,methods:[],displayName:`Fraction`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},m.__docgenInfo={description:``,methods:[],displayName:`CompactSuffix`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`WholeNumber`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`FixedDecimal`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.NumberFormatPart`}],raw:`Array<Intl.NumberFormatPart>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};const _={time:{hour:`2-digit`,minute:`2-digit`},time12:{hour:`numeric`,minute:`2-digit`,hour12:!0},date:{year:`numeric`,month:`short`,day:`numeric`},dateShort:{month:`short`,day:`numeric`},dateLong:{year:`numeric`,month:`long`,day:`numeric`},dateSlashes:{year:`numeric`,month:`2-digit`,day:`2-digit`},monthYear:{year:`numeric`,month:`long`},dateWithWeekday:{weekday:`long`,month:`long`,day:`numeric`},weekday:{weekday:`long`},weekdayShort:{weekday:`short`}};function v(e,t){return e.find(e=>e.type===t)?.value??null}function y(e,t,n){let r=0;for(let i of e)if(i.type===t){if(r===n)return i.value;r++}return null}function b(e){return function({parts:t,className:r}){let i=v(t,e);return i==null?null:(0,n.jsx)(`span`,{className:r,children:i})}}const x=({parts:e,index:t=0,className:r})=>{let i=y(e,`literal`,t);return i==null?null:(0,n.jsx)(`span`,{className:r,children:i})};x.__docgenInfo={description:``,methods:[],displayName:`Literal`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.DateTimeFormatPart`}],raw:`Array<Intl.DateTimeFormatPart>`},description:``},index:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}};function S({value:e,locale:t=`en-US`,preset:n=`time`,options:r}){let i=typeof e==`number`?new Date(e):e,a=new Intl.DateTimeFormat(t,r??_[n]);return{parts:a.formatToParts(i),text:a.format(i)}}function C({children:e,...t}){let{parts:r,text:i}=S(t);return(0,n.jsx)(n.Fragment,{children:e?e(r):i})}const w=b(`hour`),T=b(`minute`),E=b(`dayPeriod`),D=b(`weekday`),O=b(`month`),k=b(`day`),A=b(`year`);C.__docgenInfo={description:``,methods:[],displayName:`TimeFormat`,props:{value:{required:!0,tsType:{name:`union`,raw:`Date | number`,elements:[{name:`Date`},{name:`number`}]},description:``},locale:{required:!1,tsType:{name:`string`},description:``},preset:{required:!1,tsType:{name:`union`,raw:`| "time"
| "time12"
| "date"
| "dateShort"
| "dateLong"
| "dateSlashes"
| "monthYear"
| "weekday"
| "weekdayShort"
| "dateWithWeekday"`,elements:[{name:`literal`,value:`"time"`},{name:`literal`,value:`"time12"`},{name:`literal`,value:`"date"`},{name:`literal`,value:`"dateShort"`},{name:`literal`,value:`"dateLong"`},{name:`literal`,value:`"dateSlashes"`},{name:`literal`,value:`"monthYear"`},{name:`literal`,value:`"weekday"`},{name:`literal`,value:`"weekdayShort"`},{name:`literal`,value:`"dateWithWeekday"`}]},description:``},options:{required:!1,tsType:{name:`Intl.DateTimeFormatOptions`},description:``},children:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(parts: Array<Intl.DateTimeFormatPart>) => ReactNode`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`Intl.DateTimeFormatPart`}],raw:`Array<Intl.DateTimeFormatPart>`},name:`parts`}],return:{name:`ReactNode`}}},description:``}}};var j={title:`Dumb/Format`,component:o,parameters:{layout:`centered`},args:{value:1234.56}};const M={name:`Playground number`,render:()=>(0,n.jsxs)(`div`,{style:{display:`grid`,gap:12,padding:24,minWidth:340,fontFamily:`system-ui, sans-serif`},children:[(0,n.jsx)(o,{value:1234.56,preset:`money`,currency:`EUR`,children:e=>(0,n.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,n.jsx)(c,{parts:e}),(0,n.jsx)(h,{parts:e}),(0,n.jsx)(f,{parts:e}),(0,n.jsx)(p,{parts:e})]})}),(0,n.jsx)(o,{value:-2450.5,preset:`money`,currency:`EUR`,children:e=>(0,n.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:(0,n.jsxs)(`span`,{style:{color:`crimson`,display:`inline-flex`,gap:4},children:[(0,n.jsx)(c,{parts:e}),(0,n.jsx)(h,{parts:e}),(0,n.jsx)(f,{parts:e}),(0,n.jsx)(p,{parts:e})]})})}),(0,n.jsx)(o,{value:9876543.21,preset:`money`,currency:`USD`,children:e=>(0,n.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,n.jsx)(c,{parts:e}),(0,n.jsx)(`span`,{style:{fontWeight:700},children:(0,n.jsx)(h,{parts:e})}),(0,n.jsxs)(`span`,{style:{opacity:.65},children:[(0,n.jsx)(f,{parts:e}),(0,n.jsx)(p,{parts:e})]})]})}),(0,n.jsx)(o,{value:1234.567,preset:`fixed`,digits:2,children:e=>(0,n.jsx)(`span`,{style:{display:`inline-flex`},children:(0,n.jsx)(g,{parts:e})})}),(0,n.jsx)(o,{value:12.5,preset:`fixed`,digits:1,children:e=>(0,n.jsx)(`span`,{style:{display:`inline-flex`},children:(0,n.jsx)(g,{parts:e})})}),(0,n.jsx)(o,{value:1234567.89,preset:`fixed`,digits:3,children:e=>(0,n.jsxs)(`span`,{style:{display:`inline-flex`},children:[(0,n.jsx)(h,{parts:e}),(0,n.jsx)(f,{parts:e}),(0,n.jsx)(p,{parts:e})]})}),(0,n.jsx)(o,{value:1534e3,preset:`compact`,children:e=>(0,n.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,n.jsx)(h,{parts:e}),(0,n.jsx)(m,{parts:e})]})}),(0,n.jsx)(o,{value:1534e3,preset:`compact`,compactDisplay:`long`,children:e=>(0,n.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,n.jsx)(h,{parts:e}),(0,n.jsx)(m,{parts:e})]})}),(0,n.jsx)(o,{value:9999500,preset:`compact`,children:e=>(0,n.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`baseline`,gap:4},children:[(0,n.jsx)(h,{parts:e}),(0,n.jsx)(m,{parts:e})]})})]})};var N=[`time`,`time12`,`date`,`dateShort`,`dateLong`,`dateSlashes`,`monthYear`,`weekday`,`weekdayShort`,`dateWithWeekday`];function P(e,t){switch(e){case`time`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w,{parts:t,className:`positive-color`}),(0,n.jsx)(x,{parts:t,index:0}),(0,n.jsx)(T,{parts:t})]});case`time12`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w,{parts:t}),(0,n.jsx)(x,{parts:t,index:0,className:`neutral-color`}),(0,n.jsx)(T,{parts:t}),(0,n.jsx)(x,{parts:t,index:1,className:`neutral-color`}),(0,n.jsx)(E,{parts:t})]});case`date`:case`dateLong`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O,{parts:t}),(0,n.jsx)(x,{parts:t,index:0}),(0,n.jsx)(k,{parts:t}),(0,n.jsx)(x,{parts:t,index:1}),(0,n.jsx)(A,{parts:t,className:`negative-color`})]});case`dateShort`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O,{parts:t}),(0,n.jsx)(x,{parts:t,index:0}),(0,n.jsx)(k,{parts:t}),(0,n.jsx)(x,{parts:t,index:1}),(0,n.jsx)(A,{parts:t})]});case`dateSlashes`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O,{parts:t}),(0,n.jsx)(x,{parts:t,index:0}),(0,n.jsx)(k,{parts:t}),(0,n.jsx)(x,{parts:t,index:1}),(0,n.jsx)(A,{parts:t})]});case`monthYear`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O,{parts:t}),(0,n.jsx)(x,{parts:t,index:0}),(0,n.jsx)(A,{parts:t})]});case`weekday`:case`weekdayShort`:return(0,n.jsx)(D,{parts:t,className:`positive-color`});case`dateWithWeekday`:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D,{parts:t,className:`positive-color`}),(0,n.jsx)(x,{parts:t,index:0}),(0,n.jsx)(O,{parts:t}),(0,n.jsx)(x,{parts:t,index:1}),(0,n.jsx)(k,{parts:t})]});default:return null}}const F={name:`Playground time`,args:{value:new Date(`2026-05-09T16:45:30Z`),locale:`en-US`,preset:`time`},argTypes:{value:{control:`date`},locale:{control:`text`},preset:{control:`select`,options:N},options:{control:`object`}},render:e=>{let r=typeof e.value==`number`?e.value:new Date(e.value),i=e.preset??`time`;return(0,n.jsxs)(t,{style:{gap:`var(--gap-3)`,flexWrap:`wrap`,alignItems:`start`},children:[(0,n.jsxs)(t,{style:{gap:`var(--gap-1)`},children:[(0,n.jsx)(`strong`,{children:`Default`}),(0,n.jsx)(`p`,{style:{margin:0},children:(0,n.jsx)(C,{value:r,locale:e.locale,preset:i,options:e.options})})]}),(0,n.jsxs)(t,{style:{gap:`var(--gap-1)`},children:[(0,n.jsx)(`strong`,{children:`Parts`}),(0,n.jsx)(C,{value:r,locale:e.locale,preset:i,options:e.options,children:e=>(0,n.jsx)(`span`,{style:{display:`flex`,gap:`var(--gap-1)`},children:P(i,e)})})]})]})}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Playground number",
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Playground time",
  args: {
    value: new Date("2026-05-09T16:45:30Z"),
    locale: "en-US",
    preset: "time"
  },
  argTypes: {
    value: {
      control: "date"
    },
    locale: {
      control: "text"
    },
    preset: {
      control: "select",
      options: PRESET_OPTIONS
    },
    options: {
      control: "object"
    }
  },
  render: (args: StoryArgs) => {
    const value = typeof args.value === "number" ? args.value : new Date(args.value);
    const preset = args.preset ?? "time";
    return <Col style={{
      gap: "var(--gap-3)",
      flexWrap: "wrap",
      alignItems: "start"
    }}>
        <Col style={{
        gap: "var(--gap-1)"
      }}>
          <strong>Default</strong>
          <p style={{
          margin: 0
        }}>
            <TimeFormat value={value} locale={args.locale} preset={preset} options={args.options} />
          </p>
        </Col>

        <Col style={{
        gap: "var(--gap-1)"
      }}>
          <strong>Parts</strong>
          <TimeFormat value={value} locale={args.locale} preset={preset} options={args.options}>
            {parts => <span style={{
            display: "flex",
            gap: "var(--gap-1)"
          }}>
                {renderParts(preset, parts)}
              </span>}
          </TimeFormat>
        </Col>
      </Col>;
  }
}`,...F.parameters?.docs?.source}}};const I=[`PlaygroundNumber`,`PlaygroundTime`];export{M as PlaygroundNumber,F as PlaygroundTime,I as __namedExportsOrder,j as default};