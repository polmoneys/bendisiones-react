import{N as e,m as t}from"./iframe-DT0Tf3ov.js";import{a as n,i as r,n as i,r as a}from"./go-C9Szn33H.js";import{n as o,t as s}from"./utils-DxWitZhv.js";import"./Ring-BupjHEja.js";import{t as c}from"./Button-C8l6d5yg.js";import{n as l,t as u}from"./Flex-C7GNuouU.js";import{t as d}from"./intl-DfE71zeQ.js";var f=e(),p=t();function m({items:e,multiple:t=!1,selectedIds:n=new Set,expandedIds:r=new Set,onToggle:o,onSelect:l,renderItem:u,level:d=0,indentSize:f=20}){let h=e=>{let t=r.has(e);o?.(e,!t,d)},g=e=>l?.(e,d);return(0,p.jsx)(p.Fragment,{children:e.map(e=>{let _=e.children&&e.children.length>0,v=r.has(e.id),y=n.has(e.id);return(0,p.jsxs)(`div`,{children:[u({className:s(!y&&!v&&`neutral`,v&&!y&&`info`,y&&`positive`),item:e,level:d,isExpanded:v,isSelected:y,onClick:()=>g(e.id),children:_?(0,p.jsx)(c,{dangerous:{backgroundColor:`var(--transparent)`,borderColor:`var(--transparent)`},isIcon:!0,onClick:t=>{t.preventDefault(),h(e.id)},"aria-label":v?`Collapse`:`Expand`,children:v?(0,p.jsx)(i,{size:28}):(0,p.jsx)(a,{size:28})}):null}),_&&v&&(0,p.jsx)(m,{items:e.children,multiple:t,selectedIds:n,expandedIds:r,onToggle:o,onSelect:l,renderItem:u,level:d+1,indentSize:f})]},e.id)})})}m.__docgenInfo={description:``,methods:[],displayName:`Recursive`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`RecursiveItem`,elements:[{name:`T`}],raw:`RecursiveItem<T>`}],raw:`RecursiveItem<T>[]`},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},selectedIds:{required:!1,tsType:{name:`Set`,elements:[{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]}],raw:`Set<string | number>`},description:``,defaultValue:{value:`new Set()`,computed:!1}},expandedIds:{required:!1,tsType:{name:`Set`,elements:[{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]}],raw:`Set<string | number>`},description:``,defaultValue:{value:`new Set()`,computed:!1}},onToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string | number, isExpanded: boolean, level: number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`id`},{type:{name:`boolean`},name:`isExpanded`},{type:{name:`number`},name:`level`}],return:{name:`void`}}},description:``},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string | number, level: number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`id`},{type:{name:`number`},name:`level`}],return:{name:`void`}}},description:``},renderItem:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item: RenderItem<T>) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  item: RecursiveItem<T>;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  children?: ReactNode;
  onClick: () => void;
  className: string;
}`,signature:{properties:[{key:`item`,value:{name:`RecursiveItem`,elements:[{name:`T`}],raw:`RecursiveItem<T>`,required:!0}},{key:`level`,value:{name:`number`,required:!0}},{key:`isExpanded`,value:{name:`boolean`,required:!0}},{key:`isSelected`,value:{name:`boolean`,required:!0}},{key:`children`,value:{name:`ReactNode`,required:!1}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`className`,value:{name:`string`,required:!0}}]}},name:`item`}],return:{name:`ReactNode`}}},description:``},level:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},indentSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}}}};function h(e,t){if(e)for(let n of e){if(n.id===t)return n;if(n.children){let e=h(n.children,t);if(e)return e}}}var g={title:`Dumb/Recursive`,parameters:{layout:`centered`}},_=[{id:`1`,data:{name:`src`,type:`folder`},children:[{id:`1-1`,data:{name:`components`,type:`folder`},children:[{id:`1-1-1`,data:{name:`Button.tsx`,type:`file`}},{id:`1-1-2`,data:{name:`Input.tsx`,type:`file`}}]},{id:`1-2`,data:{name:`utils`,type:`folder`},children:[{id:`1-2-1`,data:{name:`helpers.ts`,type:`file`}}]},{id:`1-3`,data:{name:`App.tsx`,type:`file`}}]},{id:`2`,data:{name:`public`,type:`folder`},children:[{id:`2-1`,data:{name:`index.html`,type:`file`}}]},{id:`3`,data:{name:`package.json`,type:`file`}}];const v={render:function(){let[e,t]=(0,f.useState)(new Set),[i,a]=(0,f.useState)(new Set),s=[...i].map(e=>h(_,e))??[],c=d(new Set(s.map(e=>e?.data?.name??``))),g=(n,r,i)=>{console.log(`Toggled ${n} at level ${i}:`,r);let a=new Set(e);r?a.add(n):a.delete(n),t(a)},v=(e,t)=>{console.log(`Selected ${e} at level ${t}`);let n=new Set(i);n.has(e)?n.delete(e):n.add(e),a(n)},y=e=>(0,p.jsxs)(`div`,{style:{width:`min(450px, 80vw)`,alignItems:`center`,cursor:`pointer`,marginBottom:`var(--gap-1)`,padding:`var(--gap-1) var(--gap-3) var(--gap-1) ${e.level*36}px`,display:`grid`,gridTemplateColumns:o(e.children)?`68px 1fr 68px`:`68px 1fr`},onClick:e.onClick,className:e.className,children:[e.item.data?.type===`folder`?(0,p.jsx)(n,{size:56}):(0,p.jsx)(r,{size:56}),(0,p.jsx)(`p`,{children:e.item.data?.name}),o(e.children)?e.children:null]}),b=s.some(e=>e?.data?.type===`file`),x=s.some(e=>e?.data?.type===`folder`);return(0,p.jsxs)(p.Fragment,{children:[(x||b)&&(0,p.jsxs)(l,{style:{flexWrap:`wrap`,gap:`var(--gap-2)`},children:[x&&(0,p.jsx)(n,{size:28}),b&&(0,p.jsx)(r,{size:28}),(0,p.jsxs)(`b`,{children:[` `,c]})]}),(0,p.jsx)(`br`,{}),(0,p.jsx)(u,{style:{gap:`var(--gap-1)`},children:(0,p.jsx)(m,{items:_,multiple:!0,selectedIds:i,expandedIds:e,onToggle:g,onSelect:v,renderItem:y,indentSize:24})})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [expandedIds, setExpandedIds] = useState<Set<string | number>>(new Set());
    const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());
    const selected = [...selectedIds].map(x => findNodeById(sampleData, x)) ?? [];
    const selectionFormatted = formatSelectedKeys(new Set(selected.map(x => x?.data?.name ?? "")));
    const onToggle = (id: string | number, isExpanded: boolean, level: number) => {
      console.log(\`Toggled \${id} at level \${level}:\`, isExpanded);
      const newExpandedIds = new Set(expandedIds);
      if (isExpanded) {
        newExpandedIds.add(id);
      } else {
        newExpandedIds.delete(id);
      }
      setExpandedIds(newExpandedIds);
    };
    const onSelect = (id: string | number, level: number) => {
      console.log(\`Selected \${id} at level \${level}\`);
      const newSelectedIds = new Set(selectedIds);

      // if (multiple) {
      if (newSelectedIds.has(id)) {
        newSelectedIds.delete(id);
      } else {
        newSelectedIds.add(id);
      }
      // } else {
      //     newSelectedIds.clear();
      //     newSelectedIds.add(id);
      // }

      setSelectedIds(newSelectedIds);
    };
    const renderRecursiveItem = (props: {
      item: RecursiveItem<FileData>;
      level: number;
      isExpanded: boolean;
      isSelected: boolean;
      children?: ReactNode;
      onClick: () => void;
      className: string;
    }) => {
      return <div style={{
        width: "min(450px, 80vw)",
        alignItems: "center",
        cursor: "pointer",
        // border: "var(--border)",
        marginBottom: "var(--gap-1)",
        padding: \`var(--gap-1) var(--gap-3) var(--gap-1) \${props.level * 36}px\`,
        display: "grid",
        gridTemplateColumns: has(props.children) ? "68px 1fr 68px" : "68px 1fr"
      }} onClick={props.onClick} className={props.className}>
          {props.item.data?.type === "folder" ? <IconFolder size={56} /> : <IconFile size={56} />}
          <p>{props.item.data?.name}</p>
          {has(props.children) ? props.children : null}
        </div>;
    };
    const selectionHasFiles = selected.some(s => s?.data?.type === "file");
    const selectionHasFolders = selected.some(s => s?.data?.type === "folder");
    return <>
        {(selectionHasFolders || selectionHasFiles) && <Row style={{
        flexWrap: "wrap",
        gap: "var(--gap-2)"
      }}>
            {selectionHasFolders && <IconFolder size={28} />}
            {selectionHasFiles && <IconFile size={28} />}
            <b> {selectionFormatted}</b>
          </Row>}
        <br />
        <Col style={{
        gap: "var(--gap-1)"
      }}>
          <Recursive items={sampleData} multiple selectedIds={selectedIds} expandedIds={expandedIds} onToggle={onToggle} onSelect={onSelect} renderItem={renderRecursiveItem} indentSize={24} />
        </Col>
      </>;
  }
}`,...v.parameters?.docs?.source}}};const y=[`Secondary`];export{v as Secondary,y as __namedExportsOrder,g as default};