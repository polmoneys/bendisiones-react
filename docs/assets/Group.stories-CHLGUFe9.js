import{L as e,_ as t,p as n}from"./iframe-DW_1uAoP.js";import{c as r,t as i}from"./go-CS6MSl63.js";import{t as a}from"./Group-Ub1KrpK-.js";import{t as o}from"./InputText-BwRbqd8X.js";import{t as s}from"./Button-BCsGzwyh.js";import{t as c}from"./Checkbox-CoW6HlZm.js";import{t as l}from"./Shape-DE7Upj51.js";import{t as u}from"./Kiss-DGcNpKTW.js";import{t as d}from"./Media-sAcz8zuD.js";var f=t(),p=new Map,m=null;function h({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,f.createElement)(n,{className:`${(0,f.useMemo)(()=>{if(!e)return``;let t=_(e),n=`c-${t}`;if(!p.has(t)&&(p.set(t,e),typeof document<`u`)){let t=g(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function g(){if(m)return m;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),m=e.sheet,m}function _(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}h.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var v=e({StoryA:()=>x,StoryAA:()=>w,StoryB:()=>S,StoryC:()=>C,StoryD:()=>E,StoryE:()=>D,StoryF:()=>k,StoryG:()=>A,__namedExportsOrder:()=>j,default:()=>b}),y=n(),b={title:`Dumb/Group`,component:a,parameters:{layout:`centered`},subcomponents:{Kiss:u,Container:h}};const x={name:`A group with Start Slot`,args:{children:`4 SIDES`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},startWidth:`42px`,start:(0,y.jsx)(l.Square,{size:42,fill:`var(--neutral)`})},decorators:[e=>(0,y.jsx)(`div`,{className:`group pxy`,children:(0,y.jsx)(e,{})})]},S={name:`A group with End Slot`,args:{children:`May 2026`,endWidth:`42px`,start:(0,y.jsx)(i,{})},decorators:[e=>(0,y.jsx)(`div`,{className:`group pxy`,children:(0,y.jsx)(e,{})})]},C={name:`A group with Start and End Slot`,args:{children:(0,y.jsx)(o,{id:`test`,value:``,onChange:e=>console.log({value:e})}),endWidth:`40px`,startWidth:`69px`,start:(0,y.jsx)(`label`,{htmlFor:`test`,children:`Search`}),end:(0,y.jsx)(s,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,y.jsx)(r,{size:18})})},decorators:[e=>(0,y.jsx)(`div`,{className:`group pxy`,children:(0,y.jsx)(e,{})})]},w={name:`Another group with Start Slot`,args:{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},children:(0,y.jsx)(`label`,{children:`I Agree`}),startWidth:`var(--min-height)`,start:(0,y.jsx)(c,{})},decorators:[e=>(0,y.jsx)(`div`,{className:`group pxy`,children:(0,y.jsx)(e,{})})]};var T=`
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
`;const E={name:`An sx container as Card`,render:function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{sx:T,children:[(0,y.jsx)(`h3`,{className:`clamp`,children:` Card title `}),(0,y.jsx)(`div`,{className:`card-summary`,children:(0,y.jsxs)(`p`,{className:`clamp`,style:{"--clamp-lines":4},children:[`Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever pantecrator gloria at adstra et bellum parabus.`,` `]})}),(0,y.jsx)(s,{end:(0,y.jsx)(r,{}),children:`Click me `})]})})},decorators:[e=>(0,y.jsx)(`div`,{className:`group`,children:(0,y.jsx)(e,{})})]},D={name:`An sx container as Media Card`,render:function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{sx:T,children:[(0,y.jsx)(`h3`,{className:`clamp`,children:` Plant Portrait `}),(0,y.jsx)(d,{ratio:`portrait`,alt:`Plant portrait`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,y.jsx)(`div`,{className:`group`,children:(0,y.jsx)(e,{})})]};var O=`
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
`;const k={name:`An sx container as Card (landscape)`,render:function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{sx:O,children:[(0,y.jsx)(`h3`,{className:`clamp`,children:` Card title `}),(0,y.jsx)(`div`,{className:`card-summary`,children:(0,y.jsxs)(`p`,{className:`clamp`,style:{"--clamp-lines":3},children:[`Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever pantecrator gloria at adstra et bellum parabus.`,` `]})}),(0,y.jsx)(s,{end:(0,y.jsx)(r,{}),children:`Click me `})]})})},decorators:[e=>(0,y.jsx)(`div`,{className:`group`,children:(0,y.jsx)(e,{})})]},A={name:`An sx container as Media Card (landscape)`,render:function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h,{sx:O,children:[(0,y.jsx)(`h3`,{className:`clamp`,children:` Plant Landscape `}),(0,y.jsx)(d,{ratio:`landscape`,alt:`Plant landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,y.jsx)(`div`,{className:`group`,children:(0,y.jsx)(e,{})})]};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "A group with End Slot",
  args: {
    children: "May 2026",
    endWidth: "42px",
    start: <CalendarIcon />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const j=[`StoryA`,`StoryB`,`StoryC`,`StoryAA`,`StoryD`,`StoryE`,`StoryF`,`StoryG`];export{S as a,D as c,j as d,w as i,k as l,v as n,C as o,x as r,E as s,b as t,A as u};