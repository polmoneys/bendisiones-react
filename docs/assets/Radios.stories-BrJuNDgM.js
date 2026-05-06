import{N as e,m as t}from"./iframe-DUdZvJnM.js";import{P as n,t as r}from"./Ring-BKofMf0a.js";import"./index.module-D24upBnk.js";import{t as i}from"./Group-BNd0tsYR.js";import{t as a}from"./Flex-DJwlvOd5.js";import{t as o}from"./Shape-DSogEOD2.js";var s=e(),c={radio:`_radio_41no2_1`},l=t();function u(e){let{onChangeAsString:t,id:i,name:a,checked:o,value:s,children:u,className:d,...f}=e;return(0,l.jsxs)(`label`,{htmlFor:i,className:n(c.radio,d),children:[(0,l.jsx)(r,{children:(0,l.jsx)(`input`,{type:`radio`,id:i,name:a,value:s,checked:o,onChange:e=>t?.(e.target.value),...f})}),u({checked:e?.checked??!1})]})}u.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{ checked: boolean }`,signature:{properties:[{key:`checked`,value:{name:`boolean`,required:!0}}]}},{name:`HTMLElement`}],raw:`RenderProp<{ checked: boolean }, HTMLElement>`},description:``},onChangeAsString:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}},composes:[`Omit`]};var{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Dumb/Radio`,component:u,parameters:{layout:`centered`},args:{onClick:d()}};const p={name:`A set of radios`,args:{id:``,name:``,checked:!0,value:``,children:({checked:e})=>(0,l.jsx)(`p`,{children:e?`🆒`:`❌`}),onChangeAsString:e=>console.log({value:e})},render:function(){let[e,t]=(0,s.useState)(null);return(0,l.jsxs)(a,{style:{gap:`var(--gap-1)`},children:[(0,l.jsx)(u,{id:`rating-1`,value:`alpha`,name:`rating-c`,checked:e?.rating===`alpha`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(i,{start:(0,l.jsx)(o.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,l.jsx)(`b`,{children:`Option 1`})})}),(0,l.jsx)(u,{id:`rating-2`,value:`beta`,name:`rating-c`,checked:e?.rating===`beta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(i,{start:(0,l.jsx)(o.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,l.jsx)(`b`,{children:`Option 2`})})}),(0,l.jsx)(u,{id:`rating-3`,value:`delta`,name:`rating-c`,checked:e?.rating===`delta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(i,{start:(0,l.jsx)(o.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,l.jsx)(`b`,{children:`Option 3`})})}),(0,l.jsx)(u,{id:`rating-4`,value:`epsilon`,name:`rating-c`,checked:e?.rating===`epsilon`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(i,{start:(0,l.jsx)(o.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,l.jsx)(`b`,{children:`Option 4`})})})]})}},m={name:`Custom radios`,args:{id:``,name:``,checked:!0,value:``,children:({checked:e})=>(0,l.jsx)(`p`,{children:e?`🆒`:`❌`}),onChangeAsString:e=>console.log({value:e})},render:function(){let[e,t]=(0,s.useState)(null);return(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--gap-1)`},children:[(0,l.jsx)(u,{id:`rating-1`,value:`alpha`,name:`rating`,checked:e?.rating===`alpha`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,l.jsx)(o.Square,{fill:`var(--negative)`}):(0,l.jsx)(`b`,{children:`Alpha`})})}),(0,l.jsx)(u,{id:`rating-2`,value:`beta`,name:`rating`,checked:e?.rating===`beta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,l.jsx)(o.Square,{fill:`var(--negative)`}):(0,l.jsx)(`b`,{children:`Beta`})})}),(0,l.jsx)(u,{id:`rating-3`,value:`delta`,name:`rating`,checked:e?.rating===`delta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,l.jsx)(o.Square,{fill:`var(--negative)`}):(0,l.jsx)(`b`,{children:`Delta`})})}),(0,l.jsx)(u,{id:`rating-4`,value:`epsilon`,name:`rating`,checked:e?.rating===`epsilon`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,l.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,l.jsx)(o.Square,{fill:`var(--negative)`}):(0,l.jsx)(`b`,{children:`Epsilon`})})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "A set of radios",
  args: {
    id: "",
    name: "",
    checked: true,
    value: "",
    children: ({
      checked
    }) => <p>{checked ? "🆒" : "❌"}</p>,
    onChangeAsString: value => console.log({
      value
    })
  },
  render: function Render() {
    // const [{ isChecked }, updateArgs] = useArgs();

    // function onChange() {
    //     updateArgs({ isChecked: !isChecked });
    // }

    const [selectedRadio, setRadio] = useState<Record<string, string> | null>(null);
    return <Col style={{
      gap: "var(--gap-1)"
    }}>
        <Radio id="rating-1" value="alpha" name="rating-c" checked={selectedRadio?.rating === "alpha"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <Group start={<Shape.Circle size={42} fill={checked ? "var(--negative)" : "var(--neutral)"} />} startWidth={"42px"} dangerous={{
            alignItems: "center",
            gap: "var(--gap-2)",
            padding: "var(--gap-1) var(--gap-2)"
          }}>
                <b>Option 1</b>
              </Group>;
        }}
        </Radio>

        <Radio id="rating-2" value="beta" name="rating-c" checked={selectedRadio?.rating === "beta"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <Group start={<Shape.Circle size={42} fill={checked ? "var(--negative)" : "var(--neutral)"} />} startWidth={"42px"} dangerous={{
            alignItems: "center",
            gap: "var(--gap-2)",
            padding: "var(--gap-1) var(--gap-2)"
          }}>
                <b>Option 2</b>
              </Group>;
        }}
        </Radio>

        <Radio id="rating-3" value="delta" name="rating-c" checked={selectedRadio?.rating === "delta"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <Group start={<Shape.Circle size={42} fill={checked ? "var(--negative)" : "var(--neutral)"} />} startWidth={"42px"} dangerous={{
            alignItems: "center",
            gap: "var(--gap-2)",
            padding: "var(--gap-1) var(--gap-2)"
          }}>
                <b>Option 3</b>
              </Group>;
        }}
        </Radio>

        <Radio id="rating-4" value="epsilon" name="rating-c" checked={selectedRadio?.rating === "epsilon"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <Group start={<Shape.Circle size={42} fill={checked ? "var(--negative)" : "var(--neutral)"} />} startWidth={"42px"} dangerous={{
            alignItems: "center",
            gap: "var(--gap-2)",
            padding: "var(--gap-1) var(--gap-2)"
          }}>
                <b>Option 4</b>
              </Group>;
        }}
        </Radio>
      </Col>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Custom radios",
  args: {
    id: "",
    name: "",
    checked: true,
    value: "",
    children: ({
      checked
    }) => <p>{checked ? "🆒" : "❌"}</p>,
    onChangeAsString: value => console.log({
      value
    })
  },
  render: function Render() {
    const [selectedRadio, setRadio] = useState<Record<string, string> | null>(null);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-1)"
    }}>
        <Radio id="rating-1" value="alpha" name="rating" checked={selectedRadio?.rating === "alpha"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <div style={{
            placeItems: "center",
            placeContent: "center",
            textAlign: "center",
            minWidth: "calc(var(--min-height) * 2)",
            aspectRatio: "2.4/3",
            backgroundColor: "var(--neutral)",
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--shadow)"
          }}>
                {checked ? <Shape.Square fill="var(--negative)" /> : <b>Alpha</b>}
              </div>;
        }}
        </Radio>

        <Radio id="rating-2" value="beta" name="rating" checked={selectedRadio?.rating === "beta"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <div style={{
            placeItems: "center",
            placeContent: "center",
            textAlign: "center",
            minWidth: "calc(var(--min-height) * 2)",
            aspectRatio: "2.4/3",
            backgroundColor: "var(--neutral)",
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--shadow)"
          }}>
                {checked ? <Shape.Square fill="var(--negative)" /> : <b>Beta</b>}
              </div>;
        }}
        </Radio>

        <Radio id="rating-3" value="delta" name="rating" checked={selectedRadio?.rating === "delta"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <div style={{
            placeItems: "center",
            placeContent: "center",
            textAlign: "center",
            minWidth: "calc(var(--min-height) * 2)",
            aspectRatio: "2.4/3",
            backgroundColor: "var(--neutral)",
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--shadow)"
          }}>
                {checked ? <Shape.Square fill="var(--negative)" /> : <b>Delta</b>}
              </div>;
        }}
        </Radio>

        <Radio id="rating-4" value="epsilon" name="rating" checked={selectedRadio?.rating === "epsilon"} onChangeAsString={value => {
        setRadio({
          rating: value
        });
      }}>
          {({
          checked
        }) => {
          return <div style={{
            placeItems: "center",
            placeContent: "center",
            textAlign: "center",
            minWidth: "calc(var(--min-height) * 2)",
            aspectRatio: "2.4/3",
            backgroundColor: "var(--neutral)",
            border: "var(--border)",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--shadow)"
          }}>
                {checked ? <Shape.Square fill="var(--negative)" /> : <b>Epsilon</b>}
              </div>;
        }}
        </Radio>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const h=[`Story`,`StoryB`];export{p as Story,m as StoryB,h as __namedExportsOrder,f as default};