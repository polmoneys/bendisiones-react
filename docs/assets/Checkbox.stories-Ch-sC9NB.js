import{m as e}from"./iframe-B1VEISOk.js";import"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import"./Ring-CYRSh2n9.js";import{t}from"./Checkbox-DNGb75c3.js";import{t as n}from"./Group-Ye6JhBOD.js";var r=e(),i={title:`Dumb/Checkbox`,component:t,parameters:{layout:`centered`}};const a={name:`Playground`,args:{checked:!0},render:e=>(0,r.jsx)(n,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},startWidth:`var(--min-height)`,start:(0,r.jsx)(t,{...e,id:`agree`}),children:(0,r.jsx)(`label`,{htmlFor:`agree`,children:e.checked?`I Agree`:`I do not Agree`})})},o={name:`Intermediate`,args:{checked:`mixed`},render:e=>(0,r.jsx)(n,{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},startWidth:`var(--min-height)`,start:(0,r.jsx)(t,{...e,id:`intermediate-checkbox`}),children:(0,r.jsx)(`label`,{htmlFor:`intermediate-checkbox`,children:`Might Agree`})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Playground",
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
  name: "Intermediate",
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