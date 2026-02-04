import{N as e,m as t}from"./iframe-DT0Tf3ov.js";import{o as n}from"./go-C9Szn33H.js";import"./utils-DxWitZhv.js";import{t as r}from"./Group-CQmjU4iM.js";import"./Ring-BupjHEja.js";import{t as i}from"./InputText-XaLbu6vk.js";import{t as a}from"./Button-C8l6d5yg.js";var o=e(),s=t(),c={title:`Dumb/TextInput`,component:i,parameters:{layout:`centered`}};const l={args:{id:`input-story`,name:`input`,placeholder:`Type something`,onChange:e=>console.log({value:e})},render:function(e){let[t,c]=(0,o.useState)(``);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r,{start:(0,s.jsx)(`label`,{htmlFor:`test`,children:`Search`}),startWidth:`100px`,endWidth:`40px`,end:(0,s.jsx)(a,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,s.jsx)(n,{size:18})}),children:(0,s.jsx)(i,{...e,id:`test`,value:t,onChange:e=>c(e)})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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