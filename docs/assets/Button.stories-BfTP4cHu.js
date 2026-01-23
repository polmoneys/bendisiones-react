import{p as e}from"./iframe-C9B55_jj.js";import{s as t}from"./go-BQOk9_eH.js";import"./utils-BaIUY_Nw.js";import"./Ring-BWt7twYD.js";import{t as n}from"./Button-B4rfytHP.js";var r=e(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Dumb/Button`,component:n,parameters:{layout:`centered`},args:{onClick:i()}};const o={name:`A button with start & end `,args:{children:`Button`,start:(0,r.jsx)(t,{}),end:(0,r.jsx)(t,{})}},s={name:`A button with start `,args:{children:`North`,start:(0,r.jsx)(t,{})}},c={name:`A button with end `,args:{children:`North`,end:(0,r.jsx)(t,{})}},l={name:`A button that is toggled `,args:{children:`North`,isActive:!0}},u={name:`An IconButton`,args:{children:(0,r.jsx)(t,{}),isIcon:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "A button with start & end ",
  args: {
    children: "Button",
    start: <IconNorthStar />,
    end: <IconNorthStar />
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "A button with start ",
  args: {
    children: "North",
    start: <IconNorthStar />
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "A button with end ",
  args: {
    children: "North",
    end: <IconNorthStar />
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "A button that is toggled ",
  args: {
    children: "North",
    isActive: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "An IconButton",
  args: {
    children: <IconNorthStar />,
    isIcon: true
  }
}`,...u.parameters?.docs?.source}}};const d=[`StoryA`,`StoryB`,`StoryC`,`StoryD`,`StoryE`];export{o as StoryA,s as StoryB,c as StoryC,l as StoryD,u as StoryE,d as __namedExportsOrder,a as default};