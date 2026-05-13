import{m as e}from"./iframe-BwNSIbbV.js";import"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import{t}from"./Flex-DtvvyBfY.js";import{i as n,r,t as i}from"./intl-FoeC-YNY.js";var a=e(),o={time:{hour:`2-digit`,minute:`2-digit`},time12:{hour:`numeric`,minute:`2-digit`,hour12:!0},date:{year:`numeric`,month:`short`,day:`numeric`},dateShort:{month:`short`,day:`numeric`},dateLong:{year:`numeric`,month:`long`,day:`numeric`},dateSlashes:{year:`numeric`,month:`2-digit`,day:`2-digit`},monthYear:{year:`numeric`,month:`long`},dateWithWeekday:{weekday:`long`,month:`long`,day:`numeric`},weekday:{weekday:`long`},weekdayShort:{weekday:`short`}};function s({value:e,locale:t=`en-US`,preset:r=`time`,options:i}){let a=n(e),s=new Intl.DateTimeFormat(t,i??o[r]);return{parts:s.formatToParts(a),text:s.format(a)}}function c({children:e,...t}){let{parts:n,text:r}=s(t);return(0,a.jsx)(a.Fragment,{children:e?e(n):r})}function l(e){return function({parts:t,className:n}){let r=i(t,e);return r==null?null:(0,a.jsx)(`span`,{className:n,children:r})}}const u=l(`hour`),d=l(`minute`),f=l(`dayPeriod`),p=l(`weekday`),m=l(`month`),h=l(`day`),g=l(`year`),_=({parts:e,index:t=0,className:n})=>{let i=r(e,`literal`,t);return i==null?null:(0,a.jsx)(`span`,{className:n,children:i})};c.__docgenInfo={description:``,methods:[],displayName:`TimeFormat`,props:{value:{required:!0,tsType:{name:`union`,raw:`Date | number`,elements:[{name:`Date`},{name:`number`}]},description:``},locale:{required:!1,tsType:{name:`string`},description:``},preset:{required:!1,tsType:{name:`union`,raw:`| "time"
| "time12"
| "date"
| "dateShort"
| "dateLong"
| "dateSlashes"
| "monthYear"
| "weekday"
| "weekdayShort"
| "dateWithWeekday"`,elements:[{name:`literal`,value:`"time"`},{name:`literal`,value:`"time12"`},{name:`literal`,value:`"date"`},{name:`literal`,value:`"dateShort"`},{name:`literal`,value:`"dateLong"`},{name:`literal`,value:`"dateSlashes"`},{name:`literal`,value:`"monthYear"`},{name:`literal`,value:`"weekday"`},{name:`literal`,value:`"weekdayShort"`},{name:`literal`,value:`"dateWithWeekday"`}]},description:``},options:{required:!1,tsType:{name:`Intl.DateTimeFormatOptions`},description:``},children:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(parts: Array<Intl.DateTimeFormatPart>) => ReactNode`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`Intl.DateTimeFormatPart`}],raw:`Array<Intl.DateTimeFormatPart>`},name:`parts`}],return:{name:`ReactNode`}}},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`Literal`,props:{parts:{required:!0,tsType:{name:`Array`,elements:[{name:`Intl.DateTimeFormatPart`}],raw:`Array<Intl.DateTimeFormatPart>`},description:``},index:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}};var v={title:`Dumb/TimeFormat`,parameters:{layout:`centered`},argTypes:{value:{control:`date`},locale:{control:`text`},preset:{control:`select`,options:[`time`,`time12`,`date`,`dateShort`,`dateLong`,`dateSlashes`,`monthYear`,`weekday`,`weekdayShort`,`dateWithWeekday`]},options:{control:`object`}}};function y(e,t){switch(e){case`time`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{parts:t,className:`positive-color`}),(0,a.jsx)(_,{parts:t,index:0}),(0,a.jsx)(d,{parts:t})]});case`time12`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{parts:t}),(0,a.jsx)(_,{parts:t,index:0,className:`neutral-color`}),(0,a.jsx)(d,{parts:t}),(0,a.jsx)(_,{parts:t,index:1,className:`neutral-color`}),(0,a.jsx)(f,{parts:t})]});case`date`:case`dateLong`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{parts:t}),(0,a.jsx)(_,{parts:t,index:0}),(0,a.jsx)(h,{parts:t}),(0,a.jsx)(_,{parts:t,index:1}),(0,a.jsx)(g,{parts:t,className:`negative-color`})]});case`dateShort`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{parts:t}),(0,a.jsx)(_,{parts:t,index:0}),(0,a.jsx)(h,{parts:t}),(0,a.jsx)(_,{parts:t,index:1}),(0,a.jsx)(g,{parts:t})]});case`dateSlashes`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{parts:t}),(0,a.jsx)(_,{parts:t,index:0}),(0,a.jsx)(h,{parts:t}),(0,a.jsx)(_,{parts:t,index:1}),(0,a.jsx)(g,{parts:t})]});case`monthYear`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{parts:t}),(0,a.jsx)(_,{parts:t,index:0}),(0,a.jsx)(g,{parts:t})]});case`weekday`:case`weekdayShort`:return(0,a.jsx)(p,{parts:t,className:`positive-color`});case`dateWithWeekday`:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{parts:t,className:`positive-color`}),(0,a.jsx)(_,{parts:t,index:0}),(0,a.jsx)(m,{parts:t}),(0,a.jsx)(_,{parts:t,index:1}),(0,a.jsx)(h,{parts:t})]});default:return null}}const b={args:{value:new Date(`2026-05-09T16:45:30Z`),locale:`en-US`,preset:`time`},render:e=>{let n=typeof e.value==`number`?e.value:new Date(e.value),r=e.preset??`time`;return(0,a.jsxs)(t,{style:{gap:`var(--gap-3)`,flexWrap:`wrap`,alignItems:`start`},children:[(0,a.jsxs)(t,{style:{gap:`var(--gap-1)`},children:[(0,a.jsx)(`strong`,{children:`Default`}),(0,a.jsx)(`p`,{style:{margin:0},children:(0,a.jsx)(c,{value:n,locale:e.locale,preset:r,options:e.options})})]}),(0,a.jsxs)(t,{style:{gap:`var(--gap-1)`},children:[(0,a.jsx)(`strong`,{children:`Parts`}),(0,a.jsx)(c,{value:n,locale:e.locale,preset:r,options:e.options,children:e=>(0,a.jsx)(`span`,{style:{display:`flex`,gap:`var(--gap-1)`},children:y(r,e)})})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date("2026-05-09T16:45:30Z"),
    locale: "en-US",
    preset: "time"
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
}`,...b.parameters?.docs?.source}}};const x=[`Playground`];export{b as Playground,x as __namedExportsOrder,v as default};