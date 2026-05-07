import{m as e}from"./iframe-C6hZhgK-.js";import"./Ring-BSCBQGSR.js";import"./index.module-D24upBnk.js";import{t}from"./Checkbox-CQwGi-sn.js";import{t as n}from"./Group-CoMx4R7e.js";var r=e(),i={title:`Dumb/Checkbox`,component:t,parameters:{layout:`centered`}};const a={name:`A checkbox`,args:{checked:!0},render:e=>(0,r.jsx)(n,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},startWidth:`var(--min-height)`,start:(0,r.jsx)(t,{...e,id:`agree`}),children:(0,r.jsx)(`label`,{htmlFor:`agree`,children:e.checked?`I Agree`:`I do not Agree`})})},o={name:`An intermediate checkbox`,args:{checked:`mixed`},render:e=>(0,r.jsx)(n,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},startWidth:`var(--min-height)`,start:(0,r.jsx)(t,{...e,id:`intermediate-checkbox`}),children:(0,r.jsx)(`label`,{htmlFor:`intermediate-checkbox`,children:`Might Agree`})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "A checkbox",
  args: {
    checked: true
  },
  render: args => <Group dangerous={{
    gap: "var(--gap-1)",
    alignItems: "center"
  }} startWidth={"var(--min-height)"} start={<Checkbox {...args} id="agree" />}>
      <label htmlFor="agree">
        {args.checked ? "I Agree" : "I do not Agree"}
      </label>
    </Group>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "An intermediate checkbox",
  args: {
    checked: "mixed"
  },
  render: args => <Group dangerous={{
    gap: "var(--gap-1)",
    alignItems: "center"
  }} startWidth={"var(--min-height)"} start={<Checkbox {...args} id="intermediate-checkbox" />}>
      <label htmlFor="intermediate-checkbox">Might Agree</label>
    </Group>
}`,...o.parameters?.docs?.source}}};const s=[`StoryA`,`StoryB`];export{a as StoryA,o as StoryB,s as __namedExportsOrder,i as default};