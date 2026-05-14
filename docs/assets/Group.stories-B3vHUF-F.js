import{N as e,m as t}from"./iframe-B1VEISOk.js";import{n,t as r}from"./utils-BaIUY_Nw.js";import{t as i}from"./index.module-C_UjfPyb.js";import{n as a,t as o}from"./Flex-B7Z26IXG.js";import{o as s,t as c}from"./go-DtHjXx7B.js";import{t as l}from"./Ring-CYRSh2n9.js";import{t as u}from"./Button-CGyV4J_P.js";import{n as d,t as f}from"./InputText-M_rkLriG.js";import{t as p}from"./Checkbox-DNGb75c3.js";import{t as m}from"./Group-Ye6JhBOD.js";import{t as h}from"./Shape-CDCvmKFa.js";import{t as g}from"./Kiss-BMLtEghl.js";var _=e(),v=new Map,y=null;function b({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,_.createElement)(n,{className:`${(0,_.useMemo)(()=>{if(!e)return``;let t=S(e),n=`c-${t}`;if(!v.has(t)&&(v.set(t,e),typeof document<`u`)){let t=x(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function x(){if(y)return y;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),y=e.sheet,y}function S(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}b.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var C=[`xs`,`sm`,`md`,`lg`,`xl`];function w(e){let t={},n=``;for(let r of C)e&&e[r]!==void 0&&(n=e[r]),t[r]=n;return t}var T={columns:`_columns_1mk58_1`},E=t();function D(e){let{children:t,gap:i,padding:a,gridTemplateColumns:o={xs:`1fr`},className:s,component:c=`div`,dangerous:l,breakEqualHeight:u,gradient:d,...f}=e,p=(0,_.useMemo)(()=>{let e=w(a),t=w(i),r=w(o),s=w(d),c={"--hug-padding":e.xs,"--hug-padding-sm":e.sm,"--hug-padding-md":e.md,"--hug-padding-lg":e.lg,"--hug-padding-xl":e.xl,"--hug-gap":t.xs,"--hug-gap-sm":t.sm,"--hug-gap-md":t.md,"--hug-gap-lg":t.lg,"--hug-gap-xl":t.xl,"--hug-grid-template-columns":r.xs,"--hug-grid-template-columns-sm":r.sm,"--hug-grid-template-columns-md":r.md,"--hug-grid-template-columns-lg":r.lg,"--hug-grid-template-columns-xl":r.xl,"--hug-gradient":s.xs,"--hug-gradient-sm":s.sm,"--hug-gradient-md":s.md,"--hug-gradient-lg":s.lg,"--hug-gradient-xl":s.xl,...n(u)&&{alignItems:`start`}};return n(l)?{...l,...c,...n(u)&&{alignItems:`start`}}:c},[u,l,i,d,o,a]);return(0,E.jsx)(c,{className:r(T.columns,s),style:p,...f,children:t})}D.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{padding:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
| CssVar
| CssVar2
| CssVar3
| NumericVar
| StringVar
| MinMax
| Calc
| WithSuffix
| "start"
| "center"
| "end"
| "fit-content"
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gap:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
| CssVar
| CssVar2
| CssVar3
| NumericVar
| StringVar
| MinMax
| Calc
| WithSuffix
| "start"
| "center"
| "end"
| "fit-content"
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gridTemplateColumns:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gradient:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},component:{required:!1,tsType:{name:`ElementType`},description:``},dangerous:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},breakEqualHeight:{required:!1,tsType:{name:`boolean`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]};function O(e){let{children:t,over:n,className:a,isInput:o=!1,...s}=e;return(0,E.jsxs)(`div`,{className:r(i.stack,o&&i.input,a),...s,children:[n,t]})}O.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},over:{required:!0,tsType:{name:`ReactNode`},description:``},isInput:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`ComponentProps`]};function k(e){return e==null?[]:Array.isArray(e)?e:[e]}function A(e){return typeof e==`number`?`${e}px`:e}var j={container:`_container_pjoon_1`,primary:`_primary_pjoon_12`,start:`_start_pjoon_24`,end:`_end_pjoon_25`,affixItem:`_affixItem_pjoon_44`};function M(e,t,n){if(e<=0)return`0px`;let r=typeof t==`number`?t:Number.parseFloat(t),i=typeof n==`number`?n:Number.parseFloat(n);return`${e*r+(e-1)*i}px`}function N({children:e,start:t,end:n,slotSize:r=44,gap:i=2}){let a=k(t),o=k(n),s=M(a.length,r,i),c=M(o.length,r,i);return(0,E.jsxs)(`div`,{className:j.container,style:{"--slot-size":A(r),"--gap":A(i),"--start-padding":s,"--end-padding":c},children:[(0,E.jsx)(`div`,{className:j.primary,children:e}),a.length>0&&(0,E.jsx)(`div`,{className:j.start,children:a.map((e,t)=>(0,E.jsx)(`div`,{className:j.affixItem,children:e},t))}),o.length>0&&(0,E.jsx)(`div`,{className:j.end,children:o.map((e,t)=>(0,E.jsx)(`div`,{className:j.affixItem,children:e},t))})]})}N.__docgenInfo={description:``,methods:[],displayName:`StartEnd`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},start:{required:!1,tsType:{name:`StartEnd`},description:``},end:{required:!1,tsType:{name:`StartEnd`},description:``},slotSize:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`44`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`2`,computed:!1}}}};var P=(0,_.forwardRef)((e,t)=>{let{id:n,className:i,...a}=e;return(0,E.jsx)(l,{isTextInput:!0,children:(0,E.jsx)(`input`,{...a,className:r(d.textInput,i),id:n,name:n,type:`text`,...t!=null&&{ref:t}})})}),F=P;P.__docgenInfo={description:``,methods:[],displayName:`TextInputUncontrolled`};const I=(e,t,n)=>`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}"><rect  fill='%23${n}' width="${e}" height="${t}"/></svg>`;var L={media:`_media_1lwjx_1`,portrait:`_portrait_1lwjx_5`,landscape:`_landscape_1lwjx_13`,square:`_square_1lwjx_21`};function R(e){let{height:t,sources:i,src:a,alt:o=``,eager:s=!1,objectPosition:c,ratio:l=`landscape`}=e,[u,d]=(0,_.useState)(!1),f=()=>{d(!0)},p=(0,E.jsx)(E.Fragment,{});return n(i)&&(p=Object.keys(i).map(e=>{let t=n(i?.[e]),r=`image/${e}`,a=i?.[e]?.toString();return t?(0,E.jsx)(`source`,{type:r,srcSet:a},e):(0,E.jsx)(E.Fragment,{})})),(0,E.jsxs)(`picture`,{className:r(L.media,L[l]),...n(t)&&{style:{height:t}},onError:f,children:[u&&(0,E.jsx)(`img`,{src:I(`600px`,t??`200px`,`currentColor`),alt:`Loading error`}),!u&&(0,E.jsxs)(E.Fragment,{children:[p,(0,E.jsx)(`img`,{src:a,alt:o,loading:s?`eager`:`lazy`,height:t,...n(c)&&{style:{objectPosition:c}}})]})]})}R.__docgenInfo={description:``,methods:[],displayName:`Media`,props:{ratio:{required:!1,tsType:{name:`union`,raw:`"portrait" | "landscape" | "square"`,elements:[{name:`literal`,value:`"portrait"`},{name:`literal`,value:`"landscape"`},{name:`literal`,value:`"square"`}]},description:``},alt:{required:!0,tsType:{name:`string`},description:``},src:{required:!0,tsType:{name:`string`},description:``},height:{required:!1,tsType:{name:`string`},description:``},sources:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``},eager:{required:!1,tsType:{name:`boolean`},description:``},objectPosition:{required:!1,tsType:{name:`string`},description:``},priority:{required:!1,tsType:{name:`union`,raw:`"low" | "high"`,elements:[{name:`literal`,value:`"low"`},{name:`literal`,value:`"high"`}]},description:``}}};var z={title:`Dumb/Group`,component:m,parameters:{layout:`centered`},subcomponents:{Kiss:g,Container:b,Grid:D,Stack:O}};const B={name:`Playground`,render:function(){return(0,E.jsxs)(o,{style:{gap:`var(--gap-4)`},children:[(0,E.jsx)(m,{dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`,width:`fit-content`,border:`var(--border)`,borderRadius:`var(--border-radius)`},start:(0,E.jsx)(h.Square,{size:42}),startWidth:`42px`,children:`4 SIDES`}),(0,E.jsx)(m,{dangerous:{alignItems:`center`,width:`fit-content`,padding:`var(--gap-1) var(--gap-2)`,border:`var(--border)`,borderRadius:`var(--border-radius)`},start:(0,E.jsx)(`label`,{htmlFor:`test`,style:{marginRight:`var(--gap-2)`},children:`Search`}),end:(0,E.jsx)(u,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,E.jsx)(s,{size:18})}),startWidth:`69px`,endWidth:`40px`,children:(0,E.jsx)(f,{id:`test`,value:``,style:{width:`100%`},onChange:e=>console.log({value:e})})}),(0,E.jsx)(m,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`,padding:`var(--gap-1) var(--gap-2)`,width:`fit-content`,border:`var(--border)`,borderRadius:`var(--border-radius)`},start:(0,E.jsx)(p,{}),startWidth:`var(--min-height)`,children:(0,E.jsx)(`label`,{children:`I Agree`})}),(0,E.jsx)(m,{dangerous:{gap:`var(--gap-1)`,width:`fit-content`,alignItems:`center`,padding:`var(--gap-1) var(--gap-2)`,border:`var(--border)`,borderRadius:`var(--border-radius)`},start:(0,E.jsx)(c,{style:{transform:`translateX(calc(var(--gap-1) * -1))`}}),startWidth:`var(--min-height)`,endWidth:`42px`,children:`May 2026`})]})}},V={name:`Element with start/end overlays`,parameters:{layout:`centered`},render:function(){return(0,E.jsx)(o,{style:{gap:`var(--gap-2)`},children:(0,E.jsx)(N,{start:(0,E.jsx)(h.Circle,{size:30}),end:[(0,E.jsx)(u,{isIcon:!0,isText:!0,children:(0,E.jsx)(h.Square,{size:30})},`square-1`),(0,E.jsx)(u,{isIcon:!0,isText:!0,children:(0,E.jsx)(h,{sides:5,size:30})},`square-2`)],children:(0,E.jsx)(F,{placeholder:`Look at my padding...`})})})}},H={name:`Kiss makes 2 elements responsive`,parameters:{layout:`padded`},render:function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(a,{style:{gap:`var(--gap-5)`,flexWrap:`wrap`},children:[(0,E.jsx)(`div`,{style:{maxWidth:`120px`},children:(0,E.jsxs)(g,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,gap:`var(--gap-5)`,height:`fit-content`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,E.jsx)(`div`,{style:{maxWidth:`140px`},children:(0,E.jsxs)(g,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,E.jsx)(`div`,{style:{maxWidth:`160px`},children:(0,E.jsxs)(g,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,E.jsx)(`div`,{style:{maxWidth:`180px`},children:(0,E.jsxs)(g,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,E.jsx)(`div`,{style:{maxWidth:`200px`},children:(0,E.jsxs)(g,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,E.jsx)(`div`,{style:{maxWidth:`220px`},children:(0,E.jsxs)(g,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,E.jsxs)(g,{className:` pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,E.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{}),(0,E.jsx)(s,{})]}),(0,E.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})]})})},decorators:[e=>(0,E.jsx)(`div`,{className:`pxy`,children:(0,E.jsx)(e,{})})]},U={name:`Breakpoint-aware Grid`,parameters:{layout:`padded`},render:function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(D,{padding:{xs:0,sm:`var(--gap-2)`},gap:{xs:`var(--gap-1)`,md:`var(--gap-4)`},gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`,xl:`1fr 1fr 1fr 1fr`},className:`cover-center`,children:[(0,E.jsx)(R,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,E.jsx)(R,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,E.jsx)(R,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,E.jsx)(R,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,E.jsx)(`div`,{className:`pxy`,children:(0,E.jsx)(e,{})})]};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  render: function Render() {
    return <Col style={{
      gap: "var(--gap-4)"
    }}>
        <Group dangerous={{
        alignItems: "center",
        gap: "var(--gap-2)",
        padding: "var(--gap-1) var(--gap-2)",
        width: "fit-content",
        border: "var(--border)",
        borderRadius: "var(--border-radius)"
      }} start={<Shape.Square size={42} />} startWidth="42px">
          4 SIDES
        </Group>
        <Group dangerous={{
        alignItems: "center",
        width: "fit-content",
        padding: "var(--gap-1) var(--gap-2)",
        border: "var(--border)",
        borderRadius: "var(--border-radius)"
      }} start={<label htmlFor="test" style={{
        marginRight: "var(--gap-2)"
      }}>
              Search
            </label>} end={<Button isIcon dangerous={{
        paddingLeft: "11px"
      }}>
              <NorthStarIcon size={18} />
            </Button>} startWidth="69px" endWidth="40px">
          <TextInput id="test" value={""} style={{
          width: "100%"
        }} onChange={value => console.log({
          value
        })} />
        </Group>

        <Group dangerous={{
        gap: "var(--gap-1)",
        alignItems: "center",
        padding: "var(--gap-1) var(--gap-2)",
        width: "fit-content",
        border: "var(--border)",
        borderRadius: "var(--border-radius)"
      }} start={<Checkbox />} startWidth="var(--min-height)">
          <label>I Agree</label>
        </Group>

        <Group dangerous={{
        gap: "var(--gap-1)",
        width: "fit-content",
        alignItems: "center",
        padding: "var(--gap-1) var(--gap-2)",
        border: "var(--border)",
        borderRadius: "var(--border-radius)"
      }} start={<CalendarIcon style={{
        transform: "translateX(calc(var(--gap-1) * -1))"
      }} />} startWidth="var(--min-height)" endWidth="42px">
          May 2026
        </Group>
      </Col>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Element with start/end overlays",
  parameters: {
    layout: "centered"
  },
  render: function Render() {
    return <Col style={{
      gap: "var(--gap-2)"
    }}>
        <StartEnd start={<Shape.Circle size={30} />} end={[<Button isIcon isText key="square-1">
              <Shape.Square size={30} />
            </Button>, <Button isIcon isText key="square-2">
              <Shape sides={5} size={30} />
            </Button>]}>
          <TextInputUncontrolled placeholder="Look at my padding..." />
        </StartEnd>
        {/*
         <StartEndObserved
          startObserved={
            <Shape.Circle
              size={30}
              style={{ margin: "0 var(--gap-1)!important" }}
            />
          }
          endObserved={[
            <Button isIcon isText key="square-1">
              <Shape.Square size={30} />
            </Button>,
            <Button isIcon isText key="square-2">
              <Shape sides={5} size={30} />
            </Button>,
          ]}
         >
          <TextInputUncontrolled placeholder="Look at my padding..." />
         </StartEndObserved>*/}
      </Col>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Kiss makes 2 elements responsive",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    return <>
        <Row style={{
        gap: "var(--gap-5)",
        flexWrap: "wrap"
      }}>
          <div style={{
          maxWidth: "120px"
        }}>
            <Mua className="pxy" dangerous={{
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            gap: "var(--gap-5)",
            height: "fit-content"
          }}>
              <p style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p style={{
              display: "flex",
              backgroundColor: "var(--positive)",
              padding: "0.1em 0.3em",
              borderRadius: ".2em"
            }}>
                North
              </p>
            </Mua>
          </div>

          <div style={{
          maxWidth: "140px"
        }}>
            <Mua className="pxy" dangerous={{
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            height: "fit-content",
            gap: "var(--gap-5)"
          }}>
              <p style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p style={{
              display: "flex",
              backgroundColor: "var(--positive)",
              padding: "0.1em 0.3em",
              borderRadius: ".2em"
            }}>
                North
              </p>
            </Mua>
          </div>
          <div style={{
          maxWidth: "160px"
        }}>
            <Mua className="pxy" dangerous={{
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            height: "fit-content",
            gap: "var(--gap-5)"
          }}>
              <p style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p style={{
              display: "flex",
              backgroundColor: "var(--positive)",
              padding: "0.1em 0.3em",
              borderRadius: ".2em"
            }}>
                North
              </p>
            </Mua>
          </div>
          <div style={{
          maxWidth: "180px"
        }}>
            <Mua className="pxy" dangerous={{
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            height: "fit-content",
            gap: "var(--gap-5)"
          }}>
              <p style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p style={{
              display: "flex",
              backgroundColor: "var(--positive)",
              padding: "0.1em 0.3em",
              borderRadius: ".2em"
            }}>
                North
              </p>
            </Mua>
          </div>
          <div style={{
          maxWidth: "200px"
        }}>
            <Mua className="pxy" dangerous={{
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            height: "fit-content",
            gap: "var(--gap-5)"
          }}>
              <p style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p style={{
              display: "flex",
              backgroundColor: "var(--positive)",
              padding: "0.1em 0.3em",
              borderRadius: ".2em"
            }}>
                North
              </p>
            </Mua>
          </div>

          <div style={{
          maxWidth: "220px"
        }}>
            <Mua className="pxy" dangerous={{
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            height: "fit-content",
            gap: "var(--gap-5)"
          }}>
              <p style={{
              display: "flex",
              flexWrap: "wrap"
            }}>
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
                <NorthStarIcon />
              </p>
              <p style={{
              display: "flex",
              backgroundColor: "var(--positive)",
              padding: "0.1em 0.3em",
              borderRadius: ".2em"
            }}>
                North
              </p>
            </Mua>
          </div>

          <Mua className=" pxy" dangerous={{
          border: "var(--border)",
          borderRadius: "var(--border-radius)",
          height: "fit-content",
          gap: "var(--gap-5)"
        }}>
            <p style={{
            display: "flex",
            flexWrap: "wrap"
          }}>
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
              <NorthStarIcon />
            </p>
            <p style={{
            display: "flex",
            backgroundColor: "var(--positive)",
            padding: "0.1em 0.3em",
            borderRadius: ".2em"
          }}>
              North
            </p>
          </Mua>
        </Row>
      </>;
  },
  decorators: [Story => <div className="pxy">
        <Story />
      </div>]
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Breakpoint-aware Grid",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    return <>
        <Grid padding={{
        xs: 0,
        sm: "var(--gap-2)"
      }} gap={{
        xs: "var(--gap-1)",
        md: "var(--gap-4)"
      }} gridTemplateColumns={{
        xs: "1fr",
        md: "1fr 1fr",
        xl: "1fr 1fr 1fr 1fr"
      }} className="cover-center">
          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Grid>
      </>;
  },
  decorators: [Story => <div className="pxy">
        <Story />
      </div>]
}`,...U.parameters?.docs?.source}}};const W=[`StoryD`,`StoryTail`,`StoryKiss`,`StoryE`];export{B as StoryD,U as StoryE,H as StoryKiss,V as StoryTail,W as __namedExportsOrder,z as default};