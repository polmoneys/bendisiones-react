import{m as e}from"./iframe-Bq9EgU5Q.js";import{o as t}from"./go-BsG-ZTUe.js";import{P as n}from"./Ring-kA82GFXG.js";import"./index.module-D24upBnk.js";import{n as r,t as i}from"./Button-DJpCCzpF.js";import{n as a}from"./Flex-svOwhEay.js";function o(e={}){let{hit:t=`default`,hitdir:i=`center`,debug:a=!1,className:o=``}=e,s={default:r.sizeDefault,small:r.sizeSmall,medium:r.sizeMedium,large:r.sizeLarge,xlarge:r.sizeXLarge},c={center:r.dirCenter,top:r.dirTop,right:r.dirRight,bottom:r.dirBottom,left:r.dirLeft,"top-right":r.dirTopRight,"top-left":r.dirTopLeft,"bottom-right":r.dirBottomRight,"bottom-left":r.dirBottomLeft},l=[r.hit];s[t]&&l.push(s[t]),c[i]&&l.push(c[i]),a&&l.push(r.debug),o&&l.push(o);let u=n(l).replaceAll(`,`,` `);return{className:u,attrs:{className:u}}}var s=e(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Dumb/Button`,component:i,parameters:{layout:`centered`},args:{onClick:c()}};const u={name:`A button with start & end `,args:{children:`Button`,start:(0,s.jsx)(t,{}),end:(0,s.jsx)(t,{})}},d={name:`A button with start `,args:{children:`North`,start:(0,s.jsx)(t,{})}},f={name:`A button with end `,args:{children:`North`,end:(0,s.jsx)(t,{})}},p={name:`A button that is toggled `,args:{children:`North`,isActive:!0}},m={name:`An IconButton`,args:{"aria-label":`Search`,children:(0,s.jsx)(t,{}),isIcon:!0}},h={name:`Hit area`,parameters:{layout:`padded`},args:{children:(0,s.jsx)(s.Fragment,{})},render:function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{wrap:!0,style:{gap:`var(--gap-2)`},children:[(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`top-left`,debug:!0}).className,end:(0,s.jsx)(t,{}),children:`Top left`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`top-right`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Top right`}),(0,s.jsx)(i,{className:o({hit:`large`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Center`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`bottom-left`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Bottom left`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`bottom-right`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Bottom right`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`top`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Top`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`right`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Right`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`left`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Left`}),(0,s.jsx)(i,{className:o({hit:`large`,hitdir:`bottom`,debug:!0}).className,start:(0,s.jsx)(t,{}),children:`Bottom`})]})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "A button with start & end ",
  args: {
    children: "Button",
    start: <IconNorthStar />,
    end: <IconNorthStar />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "A button with start ",
  args: {
    children: "North",
    start: <IconNorthStar />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "A button with end ",
  args: {
    children: "North",
    end: <IconNorthStar />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "A button that is toggled ",
  args: {
    children: "North",
    isActive: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "An IconButton",
  args: {
    "aria-label": "Search",
    children: <IconNorthStar />,
    isIcon: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Hit area",
  parameters: {
    layout: "padded"
  },
  args: {
    children: <></>
  },
  render: function Render() {
    return <>
        <Row wrap style={{
        gap: "var(--gap-2)"
      }}>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "top-left",
          debug: true
        }).className} end={<IconNorthStar />}>
            Top left
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "top-right",
          debug: true
        }).className} start={<IconNorthStar />}>
            Top right
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          debug: true
        }).className} start={<IconNorthStar />}>
            Center
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "bottom-left",
          debug: true
        }).className} start={<IconNorthStar />}>
            Bottom left
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "bottom-right",
          debug: true
        }).className} start={<IconNorthStar />}>
            Bottom right
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "top",
          debug: true
        }).className} start={<IconNorthStar />}>
            Top
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "right",
          debug: true
        }).className} start={<IconNorthStar />}>
            Right
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "left",
          debug: true
        }).className} start={<IconNorthStar />}>
            Left
          </Button>
          <Button className={getHitAreaClasses({
          hit: "large",
          hitdir: "bottom",
          debug: true
        }).className} start={<IconNorthStar />}>
            Bottom
          </Button>
        </Row>
      </>;
  }
}`,...h.parameters?.docs?.source}}};const g=[`StoryA`,`StoryB`,`StoryC`,`StoryD`,`StoryE`,`StoryHit`];export{u as StoryA,d as StoryB,f as StoryC,p as StoryD,m as StoryE,h as StoryHit,g as __namedExportsOrder,l as default};