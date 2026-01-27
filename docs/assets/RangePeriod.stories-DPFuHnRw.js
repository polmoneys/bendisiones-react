import{_ as e,p as t}from"./iframe-gCWp8t-k.js";var n=e(),r={range:`_range_1r0m3_1`},i=t();function a({min:e,max:t,initialMin:a,initialMax:o,onChange:s,id:c}){let[l,u]=(0,n.useState)(a),[d,f]=(0,n.useState)(o),p=e=>{let t=parseInt(e.target.value,10);u(t<d?t:d)},m=e=>{let t=parseInt(e.target.value,10);f(t>l?t:l)};(0,n.useEffect)(()=>{s?.(l,d)},[l,d,s]);let h={"--minVal":l,"--maxVal":d,"--minLimit":e,"--maxLimit":t};return(0,i.jsxs)(`div`,{className:r.range,style:h,children:[(0,i.jsx)(`input`,{type:`range`,id:`${c}-min`,min:e,max:t,step:`1`,value:l,onChange:p}),(0,i.jsx)(`input`,{type:`range`,id:`${c}-max`,min:e,max:t,step:`1`,value:d,onChange:m})]})}a.__docgenInfo={description:``,methods:[],displayName:`RangeMulti`,props:{min:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:``},initialMin:{required:!0,tsType:{name:`number`},description:``},initialMax:{required:!0,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(min: number, max: number) => void`,signature:{arguments:[{type:{name:`number`},name:`min`},{type:{name:`number`},name:`max`}],return:{name:`void`}}},description:``},id:{required:!0,tsType:{name:`string`},description:``}}};const o=(e,t,n)=>`repeating-linear-gradient(
    ${n===`x`?`90deg`:`0deg`},
    ${e?.start??`currentColor`},
    ${e?.start??`currentColor`} ${t},
    ${e?.end??`transparent`} ${t},
    ${e?.end??`transparent`} ${Number(t.replace(`%`,``))*2}%)`;var s={title:`Dumb/RangePeriod`,component:a,parameters:{layout:`centered`}};const c={name:`Range period`,args:{id:`test-range-multi`,min:0,max:100,initialMin:12,initialMax:66,onChange:(e,t)=>console.log({min:e,max:t})},render:function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{style:{height:`10px`,background:o({start:`transparent`,end:`currentColor`},`2%`,`x`)}}),(0,i.jsx)(a,{...e})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Range period",
  args: {
    id: "test-range-multi",
    min: 0,
    max: 100,
    initialMin: 12,
    initialMax: 66,
    onChange: (min, max) => console.log({
      min,
      max
    })
  },
  render: function Render(args) {
    return <>
        <div style={{
        height: "10px",
        background: repeatGradient({
          start: "transparent",
          end: "currentColor"
        }, "2%", "x")
      }} />
        <RangePeriod {...args} />
      </>;
  }
}`,...c.parameters?.docs?.source}}};const l=[`StoryA`];export{c as StoryA,l as __namedExportsOrder,s as default};