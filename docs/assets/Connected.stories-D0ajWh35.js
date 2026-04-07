import{N as e,m as t}from"./iframe-Bp3mLIaf.js";import{t as n}from"./clamp-C31PoFlp.js";var r=e(),i={connected:`_connected_mupj6_1`,item:`_item_mupj6_6`,connector:`_connector_mupj6_18`,bar:`_bar_mupj6_24`,fill:`_fill_mupj6_30`,badge:`_badge_mupj6_41`,ring:`_ring_mupj6_48`,content:`_content_mupj6_53`,label:`_label_mupj6_64`},a=t();function o({index:e,progress:t,size:n=44,onBadge:o,children:s,strokeColorRing:c=`var(--positive)`,fill:l=`var(--transparent)`,stroke:u=`var(--grey)`,disabled:d=!1}){let f=Math.max(0,Math.min(1,t)),p=(n-8)/2,m=2*Math.PI*p,h=m*(1-f),g=n/2,_=(0,r.useCallback)(()=>o?()=>o(e):()=>({}),[e,o]);return(0,a.jsx)(`button`,{type:`button`,...o&&{onClick:o(e)},onClick:_,"aria-current":f===1?void 0:f>0?`step`:void 0,"aria-label":`Step ${e+1}`,className:i.badge,style:{width:n,height:n,cursor:o?`pointer`:`default`},disabled:d,children:(0,a.jsxs)(`svg`,{width:n,height:n,viewBox:`0 0 ${n} ${n}`,"aria-hidden":!0,children:[(0,a.jsx)(`circle`,{cx:g,cy:g,r:p,fill:l,stroke:u,strokeWidth:2}),(0,a.jsx)(`circle`,{cx:g,cy:g,r:p,fill:`none`,stroke:c,strokeWidth:3,strokeDasharray:m,strokeDashoffset:h,strokeLinecap:`round`,className:i.ring,transform:`rotate(-90 ${g} ${g})`}),(0,a.jsx)(`foreignObject`,{x:0,y:0,width:n,height:n,style:{pointerEvents:`none`},children:(0,a.jsx)(`div`,{className:i.content,style:{fontSize:Math.max(12,Math.floor(n/4)),color:f===1?`var(--white)`:`var(--black)`,transform:f>0&&f<1?`scale(1.03)`:`scale(1)`},children:(0,a.jsx)(`div`,{className:i.label,children:s??(0,a.jsx)(`span`,{style:{color:f===1?c:void 0},children:e+1})})})})]})})}o.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{index:{required:!0,tsType:{name:`number`},description:``},progress:{required:!0,tsType:{name:`number`},description:``},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`44`,computed:!1}},onBadge:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},fill:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"var(--transparent)"`,computed:!1}},stroke:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"var(--grey)"`,computed:!1}},strokeColorRing:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"var(--positive)"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};function s({progress:e,orientation:t=`horizontal`,length:n=`100%`,thickness:r=8,minWidth:o=`24px`,minHeight:s=`24px`}){let c=Math.max(0,Math.min(1,e)),l=Math.round(c*1e4)/100,u=t===`horizontal`?`inset(0 ${100-l}% 0 0)`:`inset(0 0 ${100-l}% 0)`,d=t===`horizontal`?{height:r,minWidth:o,width:typeof n==`number`?`${n}px`:n}:{width:r,minHeight:s,height:typeof n==`number`?`${n}px`:n},f={clipPath:u,WebkitClipPath:u};return(0,a.jsx)(`div`,{className:i.connector,"aria-hidden":`true`,children:(0,a.jsx)(`div`,{className:i.bar,style:d,children:(0,a.jsx)(`div`,{className:i.fill,style:f})})})}s.__docgenInfo={description:``,methods:[],displayName:`Connector`,props:{progress:{required:!0,tsType:{name:`number`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},length:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`"100%"`,computed:!1}},thickness:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},minWidth:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"24px"`,computed:!1}},minHeight:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"24px"`,computed:!1}}}};function c({steps:e,current:t,orientation:c=`horizontal`,size:l=66,thickness:u=8,gap:d=`var(--gap-3)`,onBadge:f,fixedWidthVerticalLayout:p=`36px`}){let m=c===`horizontal`,h={flexDirection:m?`row`:`column`,gap:d},g={gap:d};return(0,a.jsx)(`div`,{style:h,className:i.connected,role:`list`,"aria-orientation":c,children:e.map((d,h)=>{let _=h===e.length-1;return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)(`div`,{role:`listitem`,style:g,className:i.item,children:[(0,a.jsx)(o,{index:h,progress:n(t-h),size:l,onBadge:f,disabled:d.disabled??!1}),d.label?(0,a.jsx)(`p`,{children:d.label}):null]}),!_&&(0,a.jsx)(s,{progress:n(t-h),orientation:c,thickness:u,length:m?`100%`:p})]},`item-connected-${d.id}`)})})}c.__docgenInfo={description:``,methods:[],displayName:`Connected`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`Step`}],raw:`Array<Step>`},description:``},current:{required:!0,tsType:{name:`number`},description:`continuous value where integer N means the Nth step is exactly reached. Can be fractional.`},orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`66`,computed:!1}},thickness:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}},gap:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"var(--gap-3)"`,computed:!1}},onBadge:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},fixedWidthVerticalLayout:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"36px"`,computed:!1}}}};const l=(e,t)=>({x:e.x+t.x,y:e.y+t.y}),u={horizontal:{"-":e=>[{a:{x:0,y:0},b:{x:e,y:0}}],L:e=>[{a:{x:0,y:0},b:{x:e,y:0}},{a:{x:e,y:0},b:{x:e,y:-e}}],l:e=>[{a:{x:0,y:0},b:{x:e,y:0}},{a:{x:e,y:0},b:{x:e,y:e}}],T:e=>{let t=e/2,n=e,r={x:e/2,y:0},i={x:r.x-t,y:0};return[{a:{x:0,y:0},b:{x:e,y:0}},{a:r,b:i},{a:{x:i.x,y:-n/2},b:{x:i.x,y:n/2}}]},t:e=>{let t=e/2,n=e,r={x:e/2,y:0},i={x:r.x+t,y:0};return[{a:{x:0,y:0},b:{x:e,y:0}},{a:r,b:i},{a:{x:i.x,y:-n/2},b:{x:i.x,y:n/2}}]}},vertical:{"-":e=>[{a:{x:0,y:0},b:{x:0,y:e}}],L:e=>[{a:{x:0,y:0},b:{x:0,y:e}},{a:{x:0,y:e},b:{x:e,y:e}}],l:e=>[{a:{x:0,y:0},b:{x:0,y:e}},{a:{x:0,y:e},b:{x:-e,y:e}}],T:e=>{let t=e/2,n=e,r={x:0,y:e/2},i={x:0,y:r.y+t};return[{a:{x:0,y:0},b:{x:0,y:e}},{a:r,b:i},{a:{x:-n/2,y:i.y},b:{x:n/2,y:i.y}}]},t:e=>{let t=e/2,n=e,r={x:0,y:e/2},i={x:0,y:r.y-t};return[{a:{x:0,y:0},b:{x:0,y:e}},{a:r,b:i},{a:{x:-n/2,y:i.y},b:{x:n/2,y:i.y}}]}}};function d(e,t=`horizontal`,{origin:n={x:0,y:0},unit:r=16,gapTokens:i=[`.`,`_`]}={}){let a=[];if(Array.isArray(e))for(let t of e){let e=String(t);e.length===1?a.push(e):a.push(...e.split(``))}else a.push(...String(e).split(``));let o=[],s=[],c={...n},d=t===`horizontal`?{x:r,y:0}:{x:0,y:r};s.push({...c});for(let e of a){let n=String(e);if(n.trim()===``||i.includes(n)){c=l(c,d),s.push({...c});continue}let a=u[t][n];if(!a){c=l(c,d),s.push({...c});continue}let f=a(r);for(let e of f){let t=l(c,e.a),n=l(c,e.b);o.push({a:t,b:n}),s.push(t,n)}c=l(c,d),s.push({...c})}return{segments:o,points:s,d:o.map(e=>`M ${e.a.x} ${e.a.y} L ${e.b.x} ${e.b.y}`).join(` `)}}function f(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)for(let e of[a.a,a.b])e.x<t&&(t=e.x),e.y<n&&(n=e.y),e.x>r&&(r=e.x),e.y>i&&(i=e.y);return{minX:t,minY:n,maxX:r,maxY:i,width:r-t,height:i-n}}function p(e,t,n){if(!e.length)return[];let r=f(e),i=n?n.x:(r.minX+r.maxX)/2,a=n?n.y:(r.minY+r.maxY)/2,o=e=>t===`vertical`?{x:i-(e.x-i),y:e.y}:{x:e.x,y:a-(e.y-a)};return e.map(e=>({a:o(e.a),b:o(e.b)}))}function m(e,t){if(t===0)return e.map(e=>({a:{...e.a},b:{...e.b}}));let n=f(e),r=(n.minX+n.maxX)/2,i=(n.minY+n.maxY)/2,a=e=>{let n=e.x-r,a=e.y-i,o=n,s=a;return t===90?(o=a,s=-n):t===180?(o=-n,s=-a):t===270&&(o=-a,s=n),{x:o+r,y:s+i}};return e.map(e=>({a:a(e.a),b:a(e.b)}))}function h(e){return e.map(e=>`M ${e.a.x} ${e.a.y} L ${e.b.x} ${e.b.y}`).join(` `)}function g({dsl:e,mode:t=`horizontal`,origin:n={x:8,y:8},unit:r=20,stroke:i=`#0a0`,track:o=`#eee`,thickness:s=10,mirrorX:c=!1,mirrorY:l=!1,rotateDeg:u=0,showPoints:g=!1}){let _=d(e,t,{origin:n,unit:r}).segments;c&&(_=p(_,`vertical`)),l&&(_=p(_,`horizontal`)),u&&(_=m(_,u));let v=h(_),y=_.length?f(_):{minX:0,minY:0,width:120,height:40};return(0,a.jsxs)(`svg`,{viewBox:`${y.minX-12} ${y.minY-12} ${y.width+24} ${y.height+24}`,width:`100%`,height:`100%`,preserveAspectRatio:`xMidYMid meet`,children:[(0,a.jsx)(`rect`,{x:y.minX-12,y:y.minY-12,width:y.width+24,height:y.height+24,fill:`#fafafa`,stroke:`none`}),(0,a.jsx)(`path`,{d:v,fill:`none`,stroke:o,strokeWidth:s,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,a.jsx)(`path`,{d:v,fill:`none`,stroke:i,strokeWidth:Math.max(2,s-2),strokeLinecap:`round`,strokeLinejoin:`round`}),g&&_.flatMap(e=>[e.a,e.b]).map((e,t)=>(0,a.jsx)(`circle`,{cx:e.x,cy:e.y,r:2,fill:`#333`},t))]})}g.__docgenInfo={description:``,methods:[],displayName:`TetrisConnectorPreviewSemantic`,props:{dsl:{required:!0,tsType:{name:`union`,raw:`string | (string | number)[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`unknown`}],raw:`(string | number)[]`}]},description:``},mode:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},origin:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ x: number; y: number }`,signature:{properties:[{key:`x`,value:{name:`number`,required:!0}},{key:`y`,value:{name:`number`,required:!0}}]}},description:``,defaultValue:{value:`{ x: 8, y: 8 }`,computed:!1}},unit:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}},stroke:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#0a0"`,computed:!1}},track:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#eee"`,computed:!1}},thickness:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},mirrorX:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},mirrorY:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},rotateDeg:{required:!1,tsType:{name:`union`,raw:`0 | 90 | 180 | 270`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`90`},{name:`literal`,value:`180`},{name:`literal`,value:`270`}]},description:``,defaultValue:{value:`0`,computed:!1}},showPoints:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var _={title:`Dumb/Connected`,component:c,subcomponents:{Tetris:g},parameters:{layout:`centered`}},v=[{label:`Account`,id:0},{label:`Profile`,id:1},{label:`Confirm`,id:2},{label:`Done`,id:3}];const y={argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},onBadge:{control:!1},current:{control:{type:`number`,min:0,max:v.length,step:.1}},thickness:{control:{type:`number`,min:1,max:10,step:1}}},args:{orientation:`horizontal`,steps:v,current:1.6},name:`Steps`,render:e=>(0,a.jsx)(c,{steps:e.steps,current:e.current,orientation:e.orientation,onBadge:e=>console.log(`clicked`,e)})},b={argTypes:{dsl:{control:`select`,options:[`-`,`L`,`l`,`T`,`t`,` `]},thickness:{control:{type:`number`,min:1,max:10,step:1}},unit:{control:{type:`number`,min:1,max:1e3,step:1}},mode:{control:`select`,options:[`horizontal`,`vertical`]}},args:{dsl:`L`,mode:`horizontal`,unit:44,stroke:`var(--negative)`,track:`var(--grey)`,thickness:9,mirrorX:!1,mirrorY:!1,rotateDeg:0,showPoints:!1},name:`Tetris piece`,render:e=>(0,a.jsx)(g,{...e})},x={argTypes:{mode:{control:`select`,options:[`horizontal`,`vertical`]}},args:{dsl:`- l t L T -`,origin:{x:8,y:8},unit:18,stroke:`var(--negative)`,track:`var(--grey)`,thickness:6,mirrorX:!1,mirrorY:!1,rotateDeg:0,showPoints:!1},name:`Tetris secuence`,render:e=>(0,a.jsx)(g,{...e})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"]
    },
    onBadge: {
      control: false
    },
    current: {
      control: {
        type: "number",
        min: 0,
        max: STEPS.length,
        step: 0.1
      }
    },
    thickness: {
      control: {
        type: "number",
        min: 1,
        max: 10,
        step: 1
      }
    }
  },
  args: {
    orientation: "horizontal",
    steps: STEPS,
    // shows first connector full, second connector 60%, second badge 60%
    current: 1.6
  },
  name: "Steps",
  render: args => <Connected steps={args.steps} current={args.current} orientation={args.orientation} onBadge={i => console.log("clicked", i)} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  argTypes: {
    dsl: {
      control: "select",
      options: ["-", "L", "l", "T", "t", " "]
    },
    thickness: {
      control: {
        type: "number",
        min: 1,
        max: 10,
        step: 1
      }
    },
    unit: {
      control: {
        type: "number",
        min: 1,
        max: 1000,
        step: 1
      }
    },
    mode: {
      control: "select",
      options: ["horizontal", "vertical"]
    }
  },
  args: {
    dsl: "L",
    mode: "horizontal",
    unit: 44,
    stroke: "var(--negative)",
    track: "var(--grey)",
    thickness: 9,
    mirrorX: false,
    mirrorY: false,
    rotateDeg: 0,
    showPoints: false
  },
  name: "Tetris piece",
  render: args => <Tetris {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  argTypes: {
    mode: {
      control: "select",
      options: ["horizontal", "vertical"]
    }
  },
  args: {
    dsl: "- l t L T -",
    origin: {
      x: 8,
      y: 8
    },
    unit: 18,
    stroke: "var(--negative)",
    track: "var(--grey)",
    thickness: 6,
    mirrorX: false,
    mirrorY: false,
    rotateDeg: 0,
    showPoints: false
  },
  name: "Tetris secuence",
  render: args => <Tetris {...args} />
}`,...x.parameters?.docs?.source}}};const S=[`ConnectedStoryA`,`TetrisStoryA`,`TetrisStoryB`];export{y as ConnectedStoryA,b as TetrisStoryA,x as TetrisStoryB,S as __namedExportsOrder,_ as default};