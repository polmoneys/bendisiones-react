import{_ as e,p as t}from"./iframe-BOgCTUXy.js";import{i as n,n as r,r as i,t as a}from"./go-NKEiRjVb.js";import{n as o,t as s}from"./utils-BaIUY_Nw.js";import"./Ring-CjO-E61_.js";import{t as c}from"./Button-B35ifYvf.js";import{t as l}from"./intl-Brfuu3k1.js";var u=e(),d=t();function f({items:e,multiple:t=!1,selectedIds:n=new Set,expandedIds:i=new Set,onToggle:o,onSelect:l,renderItem:u,level:p=0,indentSize:m=20}){let h=e=>{let t=i.has(e);o?.(e,!t,p)},g=e=>l?.(e,p);return(0,d.jsx)(d.Fragment,{children:e.map(e=>{let _=e.children&&e.children.length>0,v=i.has(e.id),y=n.has(e.id);return(0,d.jsxs)(`div`,{children:[u({className:s(!y&&!v&&`neutral`,v&&!y&&`info`,y&&`positive`),item:e,level:p,isExpanded:v,isSelected:y,onClick:()=>g(e.id),children:_?(0,d.jsx)(c,{dangerous:{backgroundColor:`var(--transparent)`,borderColor:`var(--transparent)`},isIcon:!0,onClick:t=>{t.preventDefault(),h(e.id)},"aria-label":v?`Collapse`:`Expand`,children:v?(0,d.jsx)(a,{size:28}):(0,d.jsx)(r,{size:28})}):null}),_&&v&&(0,d.jsx)(f,{items:e.children,multiple:t,selectedIds:n,expandedIds:i,onToggle:o,onSelect:l,renderItem:u,level:p+1,indentSize:m})]},e.id)})})}f.__docgenInfo={description:``,methods:[],displayName:`Recursive`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`RecursiveItem`,elements:[{name:`T`}],raw:`RecursiveItem<T>`}],raw:`RecursiveItem<T>[]`},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},selectedIds:{required:!1,tsType:{name:`Set`,elements:[{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]}],raw:`Set<string | number>`},description:``,defaultValue:{value:`new Set()`,computed:!1}},expandedIds:{required:!1,tsType:{name:`Set`,elements:[{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]}],raw:`Set<string | number>`},description:``,defaultValue:{value:`new Set()`,computed:!1}},onToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string | number, isExpanded: boolean, level: number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`id`},{type:{name:`boolean`},name:`isExpanded`},{type:{name:`number`},name:`level`}],return:{name:`void`}}},description:``},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string | number, level: number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`id`},{type:{name:`number`},name:`level`}],return:{name:`void`}}},description:``},renderItem:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(item: RenderItem<T>) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  item: RecursiveItem<T>;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  children?: ReactNode;
  onClick: () => void;
  className: string;
}`,signature:{properties:[{key:`item`,value:{name:`RecursiveItem`,elements:[{name:`T`}],raw:`RecursiveItem<T>`,required:!0}},{key:`level`,value:{name:`number`,required:!0}},{key:`isExpanded`,value:{name:`boolean`,required:!0}},{key:`isSelected`,value:{name:`boolean`,required:!0}},{key:`children`,value:{name:`ReactNode`,required:!1}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`className`,value:{name:`string`,required:!0}}]}},name:`item`}],return:{name:`ReactNode`}}},description:``},level:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},indentSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}}}};function p(e,t){if(e)for(let n of e){if(n.id===t)return n;if(n.children){let e=p(n.children,t);if(e)return e}}}var m={title:`Dumb/Recursive`,parameters:{layout:`centered`}},h=[{id:`1`,data:{name:`src`,type:`folder`},children:[{id:`1-1`,data:{name:`components`,type:`folder`},children:[{id:`1-1-1`,data:{name:`Button.tsx`,type:`file`}},{id:`1-1-2`,data:{name:`Input.tsx`,type:`file`}}]},{id:`1-2`,data:{name:`utils`,type:`folder`},children:[{id:`1-2-1`,data:{name:`helpers.ts`,type:`file`}}]},{id:`1-3`,data:{name:`App.tsx`,type:`file`}}]},{id:`2`,data:{name:`public`,type:`folder`},children:[{id:`2-1`,data:{name:`index.html`,type:`file`}}]},{id:`3`,data:{name:`package.json`,type:`file`}}];const g={render:function(){let[e,t]=(0,u.useState)(new Set),[r,a]=(0,u.useState)(new Set),s=[...r].map(e=>p(h,e))??[],c=l(new Set(s.map(e=>e?.data?.name??``))),m=(n,r,i)=>{console.log(`Toggled ${n} at level ${i}:`,r);let a=new Set(e);r?a.add(n):a.delete(n),t(a)},g=(e,t)=>{console.log(`Selected ${e} at level ${t}`);let n=new Set(r);n.has(e)?n.delete(e):n.add(e),a(n)},_=e=>(0,d.jsxs)(`div`,{style:{width:`min(450px, 80vw)`,alignItems:`center`,cursor:`pointer`,marginBottom:`var(--gap-1)`,padding:`var(--gap-1) var(--gap-3) var(--gap-1) ${e.level*36}px`,display:`grid`,gridTemplateColumns:o(e.children)?`68px 1fr 68px`:`68px 1fr`},onClick:e.onClick,className:e.className,children:[e.item.data?.type===`folder`?(0,d.jsx)(n,{size:56}):(0,d.jsx)(i,{size:56}),(0,d.jsx)(`p`,{children:e.item.data?.name}),o(e.children)?e.children:null]}),v=s.some(e=>e?.data?.type===`file`),y=s.some(e=>e?.data?.type===`folder`);return(0,d.jsxs)(d.Fragment,{children:[(y||v)&&(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--gap-2)`},children:[y&&(0,d.jsx)(n,{size:28}),v&&(0,d.jsx)(i,{size:28}),(0,d.jsxs)(`b`,{children:[` `,c]})]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`div`,{style:{display:`flex`,gap:`var(--gap-1)`,flexDirection:`column`},children:(0,d.jsx)(f,{items:h,multiple:!0,selectedIds:r,expandedIds:e,onToggle:m,onSelect:g,renderItem:_,indentSize:24})})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        {(selectionHasFolders || selectionHasFiles) && <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--gap-2)"
      }}>
            {selectionHasFolders && <IconFolder size={28} />}
            {selectionHasFiles && <IconFile size={28} />}
            <b> {selectionFormatted}</b>
          </div>}
        <br />
        <div style={{
        display: "flex",
        gap: "var(--gap-1)",
        flexDirection: "column"
      }}>
          <Recursive items={sampleData} multiple selectedIds={selectedIds} expandedIds={expandedIds} onToggle={onToggle} onSelect={onSelect} renderItem={renderRecursiveItem} indentSize={24} />
        </div>
      </>;
  }
}`,...g.parameters?.docs?.source}}};const _=[`Secondary`];export{g as Secondary,_ as __namedExportsOrder,m as default};