import{p as e}from"./iframe-gCWp8t-k.js";import"./utils-BaIUY_Nw.js";import{t}from"./Group-BOuee27b.js";import"./Ring-DW1XVr-m.js";import{t as n}from"./Checkbox-BACyeGti.js";var r=e(),i={title:`Dumb/Checkbox`,component:n,parameters:{layout:`centered`}};const a={name:`A checkbox`,args:{checked:!0},render:e=>(0,r.jsx)(t,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},startWidth:`var(--min-height)`,start:(0,r.jsx)(n,{...e}),children:(0,r.jsx)(`label`,{children:e.checked?`I Agree`:`I do not Agree`})})},o={name:`An intermediate checkbox`,args:{checked:`mixed`},render:e=>(0,r.jsx)(t,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},startWidth:`var(--min-height)`,start:(0,r.jsx)(n,{...e}),children:(0,r.jsx)(`label`,{children:`Might Agree`})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "A checkbox",
  args: {
    checked: true
  },
  render: args => <Group dangerous={{
    gap: "var(--gap-1)",
    alignItems: "center"
  }} startWidth={"var(--min-height)"} start={<Checkbox {...args} />}>
      <label>{args.checked ? "I Agree" : "I do not Agree"}</label>
    </Group>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "An intermediate checkbox",
  args: {
    checked: "mixed"
  },
  render: args => <Group dangerous={{
    gap: "var(--gap-1)",
    alignItems: "center"
  }} startWidth={"var(--min-height)"} start={<Checkbox {...args} />}>
      <label>Might Agree</label>
    </Group>
}`,...o.parameters?.docs?.source}}};const s=[`StoryA`,`StoryB`];export{a as StoryA,o as StoryB,s as __namedExportsOrder,i as default};