import{m as e}from"./iframe-BwNSIbbV.js";import{t}from"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import{n,t as r}from"./Flex-DtvvyBfY.js";import{o as i}from"./go-Di605n81.js";import"./Ring-Dw4RMm5y.js";import{n as a,t as o}from"./Button-Dwpu8NIj.js";function s(e={}){let{hit:n=`default`,hitdir:r=`center`,debug:i=!1,className:o=``}=e,s={default:a.sizeDefault,small:a.sizeSmall,medium:a.sizeMedium,large:a.sizeLarge,xlarge:a.sizeXLarge},c={center:a.dirCenter,top:a.dirTop,right:a.dirRight,bottom:a.dirBottom,left:a.dirLeft,"top-right":a.dirTopRight,"top-left":a.dirTopLeft,"bottom-right":a.dirBottomRight,"bottom-left":a.dirBottomLeft},l=[a.hit];s[n]&&l.push(s[n]),c[r]&&l.push(c[r]),i&&l.push(a.debug),o&&l.push(o);let u=t(l).replaceAll(`,`,` `);return{className:u,attrs:{className:u}}}var c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Dumb/Button`,component:o,parameters:{layout:`centered`},args:{onClick:l()}};const d={name:`Playground`,parameters:{layout:`centered`},args:{children:(0,c.jsx)(c.Fragment,{})},render:function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r,{style:{gap:`var(--gap-2)`},children:[(0,c.jsx)(o,{start:(0,c.jsx)(i,{}),children:`North`}),(0,c.jsx)(o,{end:(0,c.jsx)(i,{}),children:`North`}),(0,c.jsx)(o,{end:(0,c.jsx)(i,{}),start:(0,c.jsx)(i,{}),children:`North`}),(0,c.jsxs)(n,{style:{gap:`var(--gap-2)`},children:[(0,c.jsx)(o,{isActive:!0,"ria-label":`North`,isIcon:!0,children:(0,c.jsx)(i,{})}),(0,c.jsx)(o,{"aria-label":`North`,isIcon:!0,children:(0,c.jsx)(i,{})})]})]})})}},f={name:`Hit area`,parameters:{layout:`padded`},args:{children:(0,c.jsx)(c.Fragment,{})},render:function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(n,{wrap:!0,style:{gap:`var(--gap-2)`},children:[(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`top-left`,debug:!0}).className,end:(0,c.jsx)(i,{}),children:`Top left`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`top-right`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Top right`}),(0,c.jsx)(o,{className:s({hit:`large`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Center`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`bottom-left`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Bottom left`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`bottom-right`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Bottom right`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`top`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Top`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`right`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Right`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`left`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Left`}),(0,c.jsx)(o,{className:s({hit:`large`,hitdir:`bottom`,debug:!0}).className,start:(0,c.jsx)(i,{}),children:`Bottom`})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  parameters: {
    layout: "centered"
  },
  args: {
    children: <></>
  },
  render: function Render() {
    return <>
        <Col style={{
        gap: "var(--gap-2)"
      }}>
          <Button start={<IconNorthStar />}>North</Button>
          <Button end={<IconNorthStar />}>North</Button>
          <Button end={<IconNorthStar />} start={<IconNorthStar />}>
            North
          </Button>

          <Row style={{
          gap: "var(--gap-2)"
        }}>
            <Button isActive ria-label="North" isIcon>
              <IconNorthStar />
            </Button>
            <Button aria-label="North" isIcon>
              <IconNorthStar />
            </Button>
          </Row>
        </Col>
      </>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const p=[`Story`,`StoryHit`];export{d as Story,f as StoryHit,p as __namedExportsOrder,u as default};