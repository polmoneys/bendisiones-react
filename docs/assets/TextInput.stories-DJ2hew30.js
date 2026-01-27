import{_ as e,p as t}from"./iframe-gCWp8t-k.js";import{a as n}from"./go-CA7VwBMa.js";import"./utils-BaIUY_Nw.js";import{t as r}from"./Group-BOuee27b.js";import"./Ring-DW1XVr-m.js";import{t as i}from"./InputText-Dc4ghciN.js";import{t as a}from"./Button-C9aYxkCM.js";var o=e(),s=t(),c={title:`Dumb/TextInput`,component:i,parameters:{layout:`centered`}};const l={args:{id:`input-story`,name:`input`,placeholder:`Type something`,onChange:e=>console.log({value:e})},render:function(e){let[t,c]=(0,o.useState)(``);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r,{start:(0,s.jsx)(`label`,{htmlFor:`test`,children:`Search`}),startWidth:`100px`,endWidth:`40px`,end:(0,s.jsx)(a,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,s.jsx)(n,{size:18})}),children:(0,s.jsx)(i,{...e,id:`test`,value:t,onChange:e=>c(e)})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-story",
    name: "input",
    placeholder: "Type something",
    onChange: value => console.log({
      value
    })
  },
  render: function Render(args) {
    const [input, setInput] = useState("");
    return <>
        <Group start={<label htmlFor="test">Search</label>} startWidth="100px" endWidth="40px" end={<Button isIcon dangerous={{
        paddingLeft: "11px"
      }}>
              <IconHeart size={18} />
            </Button>}>
          <TextInput {...args} id="test" value={input} onChange={v => setInput(v)} />
        </Group>
      </>;
  }
}`,...l.parameters?.docs?.source}}};const u=[`Secondary`];export{l as Secondary,u as __namedExportsOrder,c as default};