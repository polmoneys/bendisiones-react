import{N as e,m as t}from"./iframe-BwNSIbbV.js";import{n,t as r}from"./utils-BaIUY_Nw.js";import{t as i}from"./index.module-C_UjfPyb.js";import{n as a,t as o}from"./Flex-DtvvyBfY.js";import{o as s,t as c}from"./go-Di605n81.js";import"./Ring-Dw4RMm5y.js";import{t as l}from"./Button-Dwpu8NIj.js";import{t as u}from"./InputText-g7v6HGYd.js";import{t as d}from"./Checkbox-Drh34oTv.js";import{t as f}from"./Group-CR9Wmyc_.js";import{t as p}from"./Shape-BY5_l8UX.js";import{t as m}from"./Kiss-CfnSDz2i.js";var h=e(),g=new Map,_=null;function v({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,h.createElement)(n,{className:`${(0,h.useMemo)(()=>{if(!e)return``;let t=b(e),n=`c-${t}`;if(!g.has(t)&&(g.set(t,e),typeof document<`u`)){let t=y(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function y(){if(_)return _;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),_=e.sheet,_}function b(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}v.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var x=[`xs`,`sm`,`md`,`lg`,`xl`];function S(e){let t={},n=``;for(let r of x)e&&e[r]!==void 0&&(n=e[r]),t[r]=n;return t}var C={columns:`_columns_1mk58_1`},w=t();function T(e){let{children:t,gap:i,padding:a,gridTemplateColumns:o={xs:`1fr`},className:s,component:c=`div`,dangerous:l,breakEqualHeight:u,gradient:d,...f}=e,p=(0,h.useMemo)(()=>{let e=S(a),t=S(i),r=S(o),s=S(d),c={"--hug-padding":e.xs,"--hug-padding-sm":e.sm,"--hug-padding-md":e.md,"--hug-padding-lg":e.lg,"--hug-padding-xl":e.xl,"--hug-gap":t.xs,"--hug-gap-sm":t.sm,"--hug-gap-md":t.md,"--hug-gap-lg":t.lg,"--hug-gap-xl":t.xl,"--hug-grid-template-columns":r.xs,"--hug-grid-template-columns-sm":r.sm,"--hug-grid-template-columns-md":r.md,"--hug-grid-template-columns-lg":r.lg,"--hug-grid-template-columns-xl":r.xl,"--hug-gradient":s.xs,"--hug-gradient-sm":s.sm,"--hug-gradient-md":s.md,"--hug-gradient-lg":s.lg,"--hug-gradient-xl":s.xl,...n(u)&&{alignItems:`start`}};return n(l)?{...l,...c,...n(u)&&{alignItems:`start`}}:c},[u,l,i,d,o,a]);return(0,w.jsx)(c,{className:r(C.columns,s),style:p,...f,children:t})}T.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{padding:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
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
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gridTemplateColumns:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gradient:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},component:{required:!1,tsType:{name:`ElementType`},description:``},dangerous:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},breakEqualHeight:{required:!1,tsType:{name:`boolean`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]};function E(e){let{children:t,over:n,className:a,isInput:o=!1,...s}=e;return(0,w.jsxs)(`div`,{className:r(i.stack,o&&i.input,a),...s,children:[n,t]})}E.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},over:{required:!0,tsType:{name:`ReactNode`},description:``},isInput:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`ComponentProps`]};const D=(e,t,n)=>`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}"><rect  fill='%23${n}' width="${e}" height="${t}"/></svg>`;var O={media:`_media_1lwjx_1`,portrait:`_portrait_1lwjx_5`,landscape:`_landscape_1lwjx_13`,square:`_square_1lwjx_21`};function k(e){let{height:t,sources:i,src:a,alt:o=``,eager:s=!1,objectPosition:c,ratio:l=`landscape`}=e,[u,d]=(0,h.useState)(!1),f=()=>{d(!0)},p=(0,w.jsx)(w.Fragment,{});return n(i)&&(p=Object.keys(i).map(e=>{let t=n(i?.[e]),r=`image/${e}`,a=i?.[e]?.toString();return t?(0,w.jsx)(`source`,{type:r,srcSet:a},e):(0,w.jsx)(w.Fragment,{})})),(0,w.jsxs)(`picture`,{className:r(O.media,O[l]),...n(t)&&{style:{height:t}},onError:f,children:[u&&(0,w.jsx)(`img`,{src:D(`600px`,t??`200px`,`currentColor`),alt:`Loading error`}),!u&&(0,w.jsxs)(w.Fragment,{children:[p,(0,w.jsx)(`img`,{src:a,alt:o,loading:s?`eager`:`lazy`,height:t,...n(c)&&{style:{objectPosition:c}}})]})]})}k.__docgenInfo={description:``,methods:[],displayName:`Media`,props:{ratio:{required:!1,tsType:{name:`union`,raw:`"portrait" | "landscape" | "square"`,elements:[{name:`literal`,value:`"portrait"`},{name:`literal`,value:`"landscape"`},{name:`literal`,value:`"square"`}]},description:``},alt:{required:!0,tsType:{name:`string`},description:``},src:{required:!0,tsType:{name:`string`},description:``},height:{required:!1,tsType:{name:`string`},description:``},sources:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``},eager:{required:!1,tsType:{name:`boolean`},description:``},objectPosition:{required:!1,tsType:{name:`string`},description:``},priority:{required:!1,tsType:{name:`union`,raw:`"low" | "high"`,elements:[{name:`literal`,value:`"low"`},{name:`literal`,value:`"high"`}]},description:``}}};var A={title:`Dumb/Group`,component:f,parameters:{layout:`centered`},subcomponents:{Kiss:m,Container:v,Grid:T,Stack:E}};const j={name:`Playground`,render:function(){return(0,w.jsxs)(o,{style:{gap:`var(--gap-4)`},children:[(0,w.jsx)(f,{className:`group`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`,width:`fit-content`},start:(0,w.jsx)(p.Square,{size:42,fill:`var(--neutral)`}),startWidth:`42px`,children:`4 SIDES`}),(0,w.jsx)(f,{className:`group`,dangerous:{alignItems:`center`,width:`fit-content`,padding:`var(--gap-1) var(--gap-2)`},start:(0,w.jsx)(`label`,{htmlFor:`test`,style:{marginRight:`var(--gap-2)`},children:`Search`}),end:(0,w.jsx)(l,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,w.jsx)(s,{size:18})}),startWidth:`69px`,endWidth:`40px`,children:(0,w.jsx)(u,{id:`test`,value:``,style:{width:`100%`},onChange:e=>console.log({value:e})})}),(0,w.jsx)(f,{className:`group`,dangerous:{gap:`var(--gap-1)`,alignItems:`center`,padding:`var(--gap-1) var(--gap-2)`,width:`fit-content`},start:(0,w.jsx)(d,{}),startWidth:`var(--min-height)`,children:(0,w.jsx)(`label`,{children:`I Agree`})}),(0,w.jsx)(f,{dangerous:{gap:`var(--gap-1)`,width:`fit-content`,alignItems:`center`,padding:`var(--gap-1) var(--gap-2)`},className:`group`,start:(0,w.jsx)(c,{}),startWidth:`var(--min-height)`,endWidth:`42px`,children:`May 2026`})]})}},M={name:`Kiss makes 2 elements responsive`,parameters:{layout:`padded`},render:function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(a,{style:{gap:`var(--gap-5)`,flexWrap:`wrap`},children:[(0,w.jsx)(`div`,{style:{maxWidth:`120px`},children:(0,w.jsxs)(m,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,gap:`var(--gap-5)`,height:`fit-content`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,w.jsx)(`div`,{style:{maxWidth:`140px`},children:(0,w.jsxs)(m,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,w.jsx)(`div`,{style:{maxWidth:`160px`},children:(0,w.jsxs)(m,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,w.jsx)(`div`,{style:{maxWidth:`180px`},children:(0,w.jsxs)(m,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,w.jsx)(`div`,{style:{maxWidth:`200px`},children:(0,w.jsxs)(m,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,w.jsx)(`div`,{style:{maxWidth:`220px`},children:(0,w.jsxs)(m,{className:`pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})}),(0,w.jsxs)(m,{className:` pxy`,dangerous:{border:`var(--border)`,borderRadius:`var(--border-radius)`,height:`fit-content`,gap:`var(--gap-5)`},children:[(0,w.jsxs)(`p`,{style:{display:`flex`,flexWrap:`wrap`},children:[(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{}),(0,w.jsx)(s,{})]}),(0,w.jsx)(`p`,{style:{display:`flex`,backgroundColor:`var(--positive)`,padding:`0.1em 0.3em`,borderRadius:`.2em`},children:`North`})]})]})})},decorators:[e=>(0,w.jsx)(`div`,{className:`pxy`,children:(0,w.jsx)(e,{})})]},N={name:`Breakpoint-aware Grid`,parameters:{layout:`padded`},render:function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(T,{padding:{xs:0,sm:`var(--gap-2)`},gap:{xs:`var(--gap-1)`,md:`var(--gap-4)`},gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`,xl:`1fr 1fr 1fr 1fr`},className:`cover-center`,children:[(0,w.jsx)(k,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,w.jsx)(k,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,w.jsx)(k,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,w.jsx)(k,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,w.jsx)(`div`,{className:`pxy`,children:(0,w.jsx)(e,{})})]};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  render: function Render() {
    return <Col style={{
      gap: "var(--gap-4)"
    }}>
        <Group className="group" dangerous={{
        alignItems: "center",
        gap: "var(--gap-2)",
        padding: "var(--gap-1) var(--gap-2)",
        width: "fit-content"
      }} start={<Shape.Square size={42} fill={"var(--neutral)"} />} startWidth="42px">
          4 SIDES
        </Group>
        <Group className="group" dangerous={{
        alignItems: "center",
        width: "fit-content",
        padding: "var(--gap-1) var(--gap-2)"
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

        <Group className="group" dangerous={{
        gap: "var(--gap-1)",
        alignItems: "center",
        padding: "var(--gap-1) var(--gap-2)",
        width: "fit-content"
      }} start={<Checkbox />} startWidth="var(--min-height)">
          <label>I Agree</label>
        </Group>

        <Group dangerous={{
        gap: "var(--gap-1)",
        width: "fit-content",
        alignItems: "center",
        padding: "var(--gap-1) var(--gap-2)"
      }} className="group" start={<CalendarIcon />} startWidth="var(--min-height)" endWidth="42px">
          May 2026
        </Group>
      </Col>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const P=[`StoryD`,`StoryKiss`,`StoryE`];export{j as StoryD,N as StoryE,M as StoryKiss,P as __namedExportsOrder,A as default};