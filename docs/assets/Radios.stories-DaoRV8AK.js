import{_ as e,p as t}from"./iframe-DW_1uAoP.js";import{t as n}from"./utils-BaIUY_Nw.js";import{t as r}from"./Group-Ub1KrpK-.js";import{t as i}from"./Ring-C__2kaYT.js";import{t as a}from"./Shape-DE7Upj51.js";var o=e(),s={radio:`_radio_41no2_1`},c=t();function l(e){let{onChangeAsString:t,id:r,name:a,checked:o,value:l,children:u,className:d,...f}=e;return(0,c.jsxs)(`label`,{htmlFor:r,className:n(s.radio,d),children:[(0,c.jsx)(i,{children:(0,c.jsx)(`input`,{type:`radio`,id:r,name:a,value:l,checked:o,onChange:e=>t?.(e.target.value),...f})}),u({checked:e?.checked??!1})]})}l.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{ checked: boolean }`,signature:{properties:[{key:`checked`,value:{name:`boolean`,required:!0}}]}},{name:`HTMLElement`}],raw:`RenderProp<{ checked: boolean }, HTMLElement>`},description:``},onChangeAsString:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}},composes:[`Omit`]};var{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Dumb/Radio`,component:l,parameters:{layout:`centered`},args:{onClick:u()}};const f={name:`A set of radios`,args:{id:``,name:``,checked:!0,value:``,children:({checked:e})=>(0,c.jsx)(`p`,{children:e?`🆒`:`❌`}),onChangeAsString:e=>console.log({value:e})},render:function(){let[e,t]=(0,o.useState)(null);return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--gap-1)`},children:[(0,c.jsx)(l,{id:`rating-1`,value:`alpha`,name:`rating-c`,checked:e?.rating===`alpha`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(r,{start:(0,c.jsx)(a.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,c.jsx)(`b`,{children:`Option 1`})})}),(0,c.jsx)(l,{id:`rating-2`,value:`beta`,name:`rating-c`,checked:e?.rating===`beta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(r,{start:(0,c.jsx)(a.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,c.jsx)(`b`,{children:`Option 2`})})}),(0,c.jsx)(l,{id:`rating-3`,value:`delta`,name:`rating-c`,checked:e?.rating===`delta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(r,{start:(0,c.jsx)(a.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,c.jsx)(`b`,{children:`Option 3`})})}),(0,c.jsx)(l,{id:`rating-4`,value:`epsilon`,name:`rating-c`,checked:e?.rating===`epsilon`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(r,{start:(0,c.jsx)(a.Circle,{size:42,fill:e?`var(--negative)`:`var(--neutral)`}),startWidth:`42px`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},children:(0,c.jsx)(`b`,{children:`Option 4`})})})]})}},p={name:`Custom radios`,args:{id:``,name:``,checked:!0,value:``,children:({checked:e})=>(0,c.jsx)(`p`,{children:e?`🆒`:`❌`}),onChangeAsString:e=>console.log({value:e})},render:function(){let[e,t]=(0,o.useState)(null);return(0,c.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--gap-1)`},children:[(0,c.jsx)(l,{id:`rating-1`,value:`alpha`,name:`rating`,checked:e?.rating===`alpha`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,c.jsx)(a.Square,{fill:`var(--negative)`}):(0,c.jsx)(`b`,{children:`Alpha`})})}),(0,c.jsx)(l,{id:`rating-2`,value:`beta`,name:`rating`,checked:e?.rating===`beta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,c.jsx)(a.Square,{fill:`var(--negative)`}):(0,c.jsx)(`b`,{children:`Beta`})})}),(0,c.jsx)(l,{id:`rating-3`,value:`delta`,name:`rating`,checked:e?.rating===`delta`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,c.jsx)(a.Square,{fill:`var(--negative)`}):(0,c.jsx)(`b`,{children:`Delta`})})}),(0,c.jsx)(l,{id:`rating-4`,value:`epsilon`,name:`rating`,checked:e?.rating===`epsilon`,onChangeAsString:e=>{t({rating:e})},children:({checked:e})=>(0,c.jsx)(`div`,{style:{placeItems:`center`,placeContent:`center`,textAlign:`center`,minWidth:`calc(var(--min-height) * 2)`,aspectRatio:`2.4/3`,backgroundColor:`var(--neutral)`,border:`var(--border)`,borderRadius:`var(--border-radius)`,boxShadow:`var(--shadow)`},children:e?(0,c.jsx)(a.Square,{fill:`var(--negative)`}):(0,c.jsx)(`b`,{children:`Epsilon`})})})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    return <div style={{
      display: "flex",
      flexDirection: "column",
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
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const m=[`Story`,`StoryB`];export{f as Story,p as StoryB,m as __namedExportsOrder,d as default};