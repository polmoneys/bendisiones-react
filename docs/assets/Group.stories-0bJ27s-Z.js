import{$ as e,N as t,m as n}from"./iframe-DT0Tf3ov.js";import{c as r,t as i}from"./go-C9Szn33H.js";import{n as a,t as o}from"./utils-DxWitZhv.js";import{t as s}from"./Group-CQmjU4iM.js";import{t as c}from"./InputText-XaLbu6vk.js";import{t as l}from"./Button-C8l6d5yg.js";import{t as u}from"./Checkbox-CceXusC0.js";import{t as d}from"./Shape-Dg0oPeRz.js";import{t as f}from"./Kiss-CnCLiUQn.js";import{t as p}from"./Media-CHCZlfuV.js";var m=t(),h=new Map,g=null;function _({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,m.createElement)(n,{className:`${(0,m.useMemo)(()=>{if(!e)return``;let t=y(e),n=`c-${t}`;if(!h.has(t)&&(h.set(t,e),typeof document<`u`)){let t=v(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function v(){if(g)return g;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),g=e.sheet,g}function y(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}_.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var b=[`xs`,`sm`,`md`,`lg`,`xl`];function x(e){let t={},n=``;for(let r of b)e&&e[r]!==void 0&&(n=e[r]),t[r]=n;return t}var S={columns:`_columns_1mk58_1`},C=n();function w(e){let{children:t,gap:n,padding:r,gridTemplateColumns:i={xs:`1fr`},className:s,component:c=`div`,dangerous:l,breakEqualHeight:u,gradient:d,...f}=e,p=(0,m.useMemo)(()=>{let e=x(r),t=x(n),o=x(i),s=x(d),c={"--hug-padding":e.xs,"--hug-padding-sm":e.sm,"--hug-padding-md":e.md,"--hug-padding-lg":e.lg,"--hug-padding-xl":e.xl,"--hug-gap":t.xs,"--hug-gap-sm":t.sm,"--hug-gap-md":t.md,"--hug-gap-lg":t.lg,"--hug-gap-xl":t.xl,"--hug-grid-template-columns":o.xs,"--hug-grid-template-columns-sm":o.sm,"--hug-grid-template-columns-md":o.md,"--hug-grid-template-columns-lg":o.lg,"--hug-grid-template-columns-xl":o.xl,"--hug-gradient":s.xs,"--hug-gradient-sm":s.sm,"--hug-gradient-md":s.md,"--hug-gradient-lg":s.lg,"--hug-gradient-xl":s.xl,...a(u)&&{alignItems:`start`}};return a(l)?{...l,...c,...a(u)&&{alignItems:`start`}}:c},[u,l,n,d,i,r]);return(0,C.jsx)(c,{className:o(S.columns,s),style:p,...f,children:t})}w.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{padding:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
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
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gridTemplateColumns:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gradient:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},component:{required:!1,tsType:{name:`ElementType`},description:``},dangerous:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},breakEqualHeight:{required:!1,tsType:{name:`boolean`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]};var T=e({StoryA:()=>D,StoryAA:()=>A,StoryB:()=>O,StoryC:()=>k,StoryD:()=>M,StoryE:()=>N,StoryF:()=>F,StoryG:()=>I,StoryH:()=>L,__namedExportsOrder:()=>R,default:()=>E}),E={title:`Dumb/Group`,component:s,parameters:{layout:`centered`},subcomponents:{Kiss:f,Container:_,Grid:w}};const D={name:`A group with Start Slot`,args:{children:`4 SIDES`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},startWidth:`42px`,start:(0,C.jsx)(d.Square,{size:42,fill:`var(--neutral)`})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},O={name:`A group with End Slot`,args:{children:`May 2026`,endWidth:`42px`,start:(0,C.jsx)(i,{})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},k={name:`A group with Start and End Slot`,args:{children:(0,C.jsx)(c,{id:`test`,value:``,onChange:e=>console.log({value:e})}),endWidth:`40px`,startWidth:`69px`,start:(0,C.jsx)(`label`,{htmlFor:`test`,children:`Search`}),end:(0,C.jsx)(l,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,C.jsx)(r,{size:18})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]},A={name:`Another group with Start Slot`,args:{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},children:(0,C.jsx)(`label`,{children:`I Agree`}),startWidth:`var(--min-height)`,start:(0,C.jsx)(u,{})},decorators:[e=>(0,C.jsx)(`div`,{className:`group pxy`,children:(0,C.jsx)(e,{})})]};var j=`
  & {
      height:min(690px, 66vh);
      aspect-ratio: 9/16;
  }

  &:not(:has(img)) {
    display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      width: fit-content;
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
`;const M={name:`An sx container as Card`,render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(_,{sx:j,children:[(0,C.jsx)(`h3`,{className:`clamp`,children:` Card title `}),(0,C.jsx)(`div`,{className:`card-summary`,children:(0,C.jsxs)(`p`,{className:`clamp`,style:{"--clamp-lines":4},children:[`Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever pantecrator gloria at adstra et bellum parabus.`,` `]})}),(0,C.jsx)(l,{end:(0,C.jsx)(r,{}),children:`Click me `})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group`,children:(0,C.jsx)(e,{})})]},N={name:`An sx container as Media Card`,render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(_,{sx:j,children:[(0,C.jsx)(`h3`,{className:`clamp`,children:` Plant Portrait `}),(0,C.jsx)(p,{ratio:`portrait`,alt:`Plant portrait`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group`,children:(0,C.jsx)(e,{})})]};var P=`
  & {
      width:min(690px, 66vw);
      aspect-ratio: 16/9;
  }

  &:not(:has(img)) {
    display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
`;const F={name:`An sx container as Card (landscape)`,render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(_,{sx:P,children:[(0,C.jsx)(`h3`,{className:`clamp`,children:` Card title `}),(0,C.jsx)(`div`,{className:`card-summary`,children:(0,C.jsxs)(`p`,{className:`clamp`,style:{"--clamp-lines":3},children:[`Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever pantecrator gloria at adstra et bellum parabus.`,` `]})}),(0,C.jsx)(l,{end:(0,C.jsx)(r,{}),children:`Click me `})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group`,children:(0,C.jsx)(e,{})})]},I={name:`An sx container as Media Card (landscape)`,render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(_,{sx:P,children:[(0,C.jsx)(`h3`,{className:`clamp`,children:` Plant Landscape `}),(0,C.jsx)(p,{ratio:`landscape`,alt:`Plant landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group`,children:(0,C.jsx)(e,{})})]},L={name:`Advanced Grid`,parameters:{layout:`padded`},render:function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(w,{padding:{xs:0,sm:`var(--gap-2)`},gap:{xs:`var(--gap-1)`,md:`var(--gap-4)`},gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`,xl:`1fr 1fr 1fr 1fr`},className:`cover-center`,children:[(0,C.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,C.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,C.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,C.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,C.jsx)(`div`,{className:`group`,children:(0,C.jsx)(e,{})})]};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "A group with End Slot",
  args: {
    children: "May 2026",
    endWidth: "42px",
    start: <CalendarIcon />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Card",
  render: function Render() {
    return <>
        <Container sx={cardSX}>
          <h3 className="clamp"> Card title </h3>
          <div className="card-summary">
            <p className="clamp" style={{
            "--clamp-lines": 4
          } as CSSProperties}>
              Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever
              pantecrator gloria at adstra et bellum parabus.{" "}
            </p>
          </div>

          <Button end={<NorthStarIcon />}>Click me </Button>
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Media Card",
  render: function Render() {
    return <>
        <Container sx={cardSX}>
          <h3 className="clamp"> Plant Portrait </h3>
          <Media ratio="portrait" alt="Plant portrait" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Card (landscape)",
  render: function Render() {
    return <>
        <Container sx={cardSXLandscape}>
          <h3 className="clamp"> Card title </h3>
          <div className="card-summary">
            <p className="clamp" style={{
            "--clamp-lines": 3
          } as CSSProperties}>
              Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever
              pantecrator gloria at adstra et bellum parabus.{" "}
            </p>
          </div>

          <Button end={<NorthStarIcon />}>Click me </Button>
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Media Card (landscape)",
  render: function Render() {
    return <>
        <Container sx={cardSXLandscape}>
          <h3 className="clamp"> Plant Landscape </h3>
          <Media ratio="landscape" alt="Plant landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Advanced Grid",
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
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...L.parameters?.docs?.source}}};const R=[`StoryA`,`StoryB`,`StoryC`,`StoryAA`,`StoryD`,`StoryE`,`StoryF`,`StoryG`,`StoryH`];export{O as a,N as c,L as d,R as f,A as i,F as l,T as n,k as o,D as r,M as s,E as t,I as u};