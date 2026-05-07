import{N as e,m as t}from"./iframe-Bq9EgU5Q.js";import{o as n,t as r}from"./go-BsG-ZTUe.js";import{F as i,P as a}from"./Ring-kA82GFXG.js";import{t as o}from"./index.module-D24upBnk.js";import{t as s}from"./Group-CfgpnGm0.js";import{t as c}from"./Button-DJpCCzpF.js";import{t as l}from"./InputText-C294M8pz.js";import{n as u}from"./Flex-svOwhEay.js";import{t as d}from"./Checkbox-VxxrvueE.js";import{t as f}from"./Shape-35ksKSqJ.js";import{t as p}from"./Kiss-BvoxgaaH.js";var m=e(),h=new Map,g=null;function _({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,m.createElement)(n,{className:`${(0,m.useMemo)(()=>{if(!e)return``;let t=y(e),n=`c-${t}`;if(!h.has(t)&&(h.set(t,e),typeof document<`u`)){let t=v(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function v(){if(g)return g;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),g=e.sheet,g}function y(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}_.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var b=[`xs`,`sm`,`md`,`lg`,`xl`];function x(e){let t={},n=``;for(let r of b)e&&e[r]!==void 0&&(n=e[r]),t[r]=n;return t}var S={columns:`_columns_1mk58_1`},C=t();function w(e){let{children:t,gap:n,padding:r,gridTemplateColumns:o={xs:`1fr`},className:s,component:c=`div`,dangerous:l,breakEqualHeight:u,gradient:d,...f}=e,p=(0,m.useMemo)(()=>{let e=x(r),t=x(n),a=x(o),s=x(d),c={"--hug-padding":e.xs,"--hug-padding-sm":e.sm,"--hug-padding-md":e.md,"--hug-padding-lg":e.lg,"--hug-padding-xl":e.xl,"--hug-gap":t.xs,"--hug-gap-sm":t.sm,"--hug-gap-md":t.md,"--hug-gap-lg":t.lg,"--hug-gap-xl":t.xl,"--hug-grid-template-columns":a.xs,"--hug-grid-template-columns-sm":a.sm,"--hug-grid-template-columns-md":a.md,"--hug-grid-template-columns-lg":a.lg,"--hug-grid-template-columns-xl":a.xl,"--hug-gradient":s.xs,"--hug-gradient-sm":s.sm,"--hug-gradient-md":s.md,"--hug-gradient-lg":s.lg,"--hug-gradient-xl":s.xl,...i(u)&&{alignItems:`start`}};return i(l)?{...l,...c,...i(u)&&{alignItems:`start`}}:c},[u,l,n,d,o,r]);return(0,C.jsx)(c,{className:a(S.columns,s),style:p,...f,children:t})}w.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{padding:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
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
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gridTemplateColumns:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gradient:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},component:{required:!1,tsType:{name:`ElementType`},description:``},dangerous:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},breakEqualHeight:{required:!1,tsType:{name:`boolean`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]};function T(e){let{children:t,over:n,className:r,isInput:i=!1,...s}=e;return(0,C.jsxs)(`div`,{className:a(o.stack,i&&o.input,r),...s,children:[n,t]})}T.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},over:{required:!0,tsType:{name:`ReactNode`},description:``},isInput:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`ComponentProps`]};const E=(e,t,n)=>`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}"><rect  fill='%23${n}' width="${e}" height="${t}"/></svg>`;var D={media:`_media_1lwjx_1`,portrait:`_portrait_1lwjx_5`,landscape:`_landscape_1lwjx_13`,square:`_square_1lwjx_21`};function O(e){let{height:t,sources:n,src:r,alt:o=``,eager:s=!1,objectPosition:c,ratio:l=`landscape`}=e,[u,d]=(0,m.useState)(!1),f=()=>{d(!0)},p=(0,C.jsx)(C.Fragment,{});return i(n)&&(p=Object.keys(n).map(e=>{let t=i(n?.[e]),r=`image/${e}`,a=n?.[e]?.toString();return t?(0,C.jsx)(`source`,{type:r,srcSet:a},e):(0,C.jsx)(C.Fragment,{})})),(0,C.jsxs)(`picture`,{className:a(D.media,D[l]),...i(t)&&{style:{height:t}},onError:f,children:[u&&(0,C.jsx)(`img`,{src:E(`600px`,t??`200px`,`currentColor`),alt:`Loading error`}),!u&&(0,C.jsxs)(C.Fragment,{children:[p,(0,C.jsx)(`img`,{src:r,alt:o,loading:s?`eager`:`lazy`,height:t,...i(c)&&{style:{objectPosition:c}}})]})]})}O.__docgenInfo={description:``,methods:[],displayName:`Media`,props:{ratio:{required:!1,tsType:{name:`union`,raw:`"portrait" | "landscape" | "square"`,elements:[{name:`literal`,value:`"portrait"`},{name:`literal`,value:`"landscape"`},{name:`literal`,value:`"square"`}]},description:``},alt:{required:!0,tsType:{name:`string`},description:``},src:{required:!0,tsType:{name:`string`},description:``},height:{required:!1,tsType:{name:`string`},description:``},sources:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``},eager:{required:!1,tsType:{name:`boolean`},description:``},objectPosition:{required:!1,tsType:{name:`string`},description:``},priority:{required:!1,tsType:{name:`union`,raw:`"low" | "high"`,elements:[{name:`literal`,value:`"low"`},{name:`literal`,value:`"high"`}]},description:``}}};var k={title:`Dumb/Group`,component:s,parameters:{layout:`centered`},subcomponents:{Kiss:p,Container:_,Grid:w,Stack:T}};const A={name:`A group with Start Slot`,args:{children:`4 SIDES`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},startWidth:`42px`,start:(0,C.jsx)(f.Square,{size:42,fill:`var(--neutral)`})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},j={name:`A group with End Slot`,args:{children:`May 2026`,endWidth:`42px`,start:(0,C.jsx)(r,{})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},M={name:`A group with Start and End Slot`,args:{children:(0,C.jsx)(l,{id:`test`,value:``,onChange:e=>console.log({value:e})}),endWidth:`40px`,startWidth:`69px`,start:(0,C.jsx)(`label`,{htmlFor:`test`,children:`Search`}),end:(0,C.jsx)(c,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,C.jsx)(n,{size:18})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},N={name:`Another group with Start Slot`,args:{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},children:(0,C.jsx)(`label`,{children:`I Agree`}),startWidth:`var(--min-height)`,start:(0,C.jsx)(d,{})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},P={name:`Breakpoint-aware Grid`,parameters:{layout:`padded`},render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(w,{padding:{xs:0,sm:`var(--gap-2)`},gap:{xs:`var(--gap-1)`,md:`var(--gap-4)`},gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`,xl:`1fr 1fr 1fr 1fr`},className:`cover-center`,children:[(0,C.jsx)(O,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,C.jsx)(O,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,C.jsx)(O,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,C.jsx)(O,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`pxy`,children:(0,C.jsx)(e,{})})]},F={name:`Kiss makes 2 elements responsive`,parameters:{layout:`padded`},render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(u,{style:{gap:`var(--gap-5)`,flexWrap:`wrap`},children:[(0,C.jsx)(`div`,{style:{maxWidth:`120px`},children:(0,C.jsxs)(p,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,gap:`var(--gap-5)`,height:`fit-content`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,C.jsx)(`div`,{style:{maxWidth:`140px`},children:(0,C.jsxs)(p,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,C.jsx)(`div`,{style:{maxWidth:`160px`},children:(0,C.jsxs)(p,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,C.jsx)(`div`,{style:{maxWidth:`180px`},children:(0,C.jsxs)(p,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,C.jsx)(`div`,{style:{maxWidth:`200px`},children:(0,C.jsxs)(p,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,C.jsx)(`div`,{style:{maxWidth:`220px`},children:(0,C.jsxs)(p,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,C.jsxs)(p,{className:` pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,C.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{}),(0,C.jsx)(n,{})]}),(0,C.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`pxy`,children:(0,C.jsx)(e,{})})]};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "A group with Start Slot",
  args: {
    children: "4 SIDES",
    dangerous: {
      alignItems: "center",
      gap: "var(--gap-2)",
      padding: "var(--gap-1) var(--gap-2)"
    },
    startWidth: "42px",
    start: <Shape.Square size={42} fill={"var(--neutral)"} />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "A group with End Slot",
  args: {
    children: "May 2026",
    endWidth: "42px",
    start: <CalendarIcon />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "A group with Start and End Slot",
  args: {
    children: <TextInput id="test" value={""} onChange={value => console.log({
      value
    })} />,
    endWidth: "40px",
    startWidth: "69px",
    start: <label htmlFor="test">Search</label>,
    end: <Button isIcon dangerous={{
      paddingLeft: "11px"
    }}>
        <NorthStarIcon size={18} />
      </Button>
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Another group with Start Slot",
  args: {
    dangerous: {
      gap: "var(--gap-1)",
      alignItems: "center"
    },
    children: <label>I Agree</label>,
    startWidth: "var(--min-height)",
    start: <Checkbox />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const I=[`StoryA`,`StoryB`,`StoryC`,`StoryD`,`StoryE`,`StoryKiss`];export{A as StoryA,j as StoryB,M as StoryC,N as StoryD,P as StoryE,F as StoryKiss,I as __namedExportsOrder,k as default};