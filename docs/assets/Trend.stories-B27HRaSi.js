import{N as e,et as t,m as n}from"./iframe-BPha6Fdp.js";import"./utils-DxWitZhv.js";import{n as r}from"./Flex-CSSWEc7J.js";import{n as i,r as a}from"./clamp-CsuNzx-Q.js";import{t as o}from"./intl-B0BLg_Pl.js";var s=t(e(),1),c=n();function l(e){return typeof e==`number`?e:e.value}function u(e,t){let n=l(e[t]),r=t;for(;r>0&&l(e[r-1])===n;)r--;let i=t;for(;i<e.length-1&&l(e[i+1])===n;)i++;if(r===0||i===e.length-1||t!==Math.floor((r+i)/2))return`none`;let a=l(e[r-1]),o=l(e[i+1]);return n>a&&n>o?`peak`:n<a&&n<o?`valley`:`none`}function d(e,t,n,r,i,a){let o={min:i??1/0,max:a??-1/0,sum:0,count:0},s=e.map(e=>l(e));(i===void 0||a===void 0)&&(o.min=Math.min(...s),o.max=Math.max(...s)),o.sum=s.reduce((e,t)=>e+t,0),o.count=s.length;let c=o.max-o.min||1,d=t/Math.max(s.length-1,1),f=n*.1;return e.map((e,t,i)=>{let a=l(e),s=typeof e==`object`?e.label:void 0,p=typeof e==`object`?e.timestamp:void 0,m=t*d,h=n-((a-o.min)/c*(n-2*f)+f),g=t/Math.max(i.length-1,1)*100,_=`flat`;if(t>0){let e=l(i[t-1]);a>e?_=`up`:a<e&&(_=`down`)}let v=u(i,t);return{x:m,y:h,value:a,index:t,percentile:g,trend:_,isExtremum:v,label:s,timestamp:p,seriesId:r}})}function f(e,t,n){if(e.length===0)return``;let r=e.map((e,t)=>`${t===0?`M`:`L`} ${e.x},${e.y}`).join(` `);if(!t)return r;let i=e[e.length-1],a=e[0];return`${r} L ${i.x},${n} L ${a.x},${n} Z`}function p({data:e,series:t,width:n=200,height:r=50,color:i=`#3b82f6`,fillColor:a=`rgba(59, 130, 246, 0.1)`,pointMode:o=`all`,trendMode:u=`none`,showArea:p=!0,strokeWidth:m=2,dotRadius:h=3,showLegend:g=!1,stackedArea:_=!1,visibleStartPercent:v,visibleEndPercent:y,visibleStartTs:b,visibleEndTs:x,upColor:S=`#10b981`,downColor:C=`#ef4444`,flatColor:w=`#94a3b8`,peakColor:T,valleyColor:E}){let D=g?30:0,O=Math.max(20,r-D),k=(0,s.useMemo)(()=>{if(e&&!t)return[{id:`default`,label:void 0,points:d(e,n,O),color:i,fillColor:a,showArea:p,strokeWidth:m}];if(t){let e=t.flatMap(e=>e.data.map(e=>l(e))),r=Math.min(...e),o=Math.max(...e);return t.map(e=>{let t=d(e.data,n,O,e.id,r,o);return{id:e.id,label:e.label,points:t,color:e.color??i,fillColor:e.fillColor??a,showArea:e.showArea??p,strokeWidth:e.strokeWidth??m}})}return[]},[e,t,n,O,i,a,p,m]),A=v===void 0?0:Math.max(0,Math.min(100,v)),j=y===void 0?100:Math.max(0,Math.min(100,y)),M=Math.min(A,j),N=Math.max(A,j),P=(0,s.useMemo)(()=>k.map(e=>{if(b!==void 0&&x!==void 0){let t=Math.min(b,x),n=Math.max(b,x),r=e.points.filter(e=>e.timestamp==null?!0:e.timestamp>=t&&e.timestamp<=n);return{...e,points:r}}if(M===0&&N===100)return e;let t=e.points.filter(e=>e.percentile>=M&&e.percentile<=N);return{...e,points:t}}),[k,b,x,M,N]),F=P.some(e=>e.points&&e.points.length>0);return k.length===0||!F?(0,c.jsx)(`svg`,{width:n,height:r,children:(0,c.jsx)(`text`,{x:n/2,y:r/2,textAnchor:`middle`,fill:`#999`,fontSize:`12`,children:`No data`})}):(0,c.jsx)(`div`,{children:(0,c.jsxs)(`svg`,{width:n,height:r,style:{overflow:`visible`},children:[P.map(e=>{let t=f(e.points,!1,O),n=f(e.points,!0,O),r=e.showArea&&e.points.length>0?[(0,c.jsx)(`path`,{d:n,fill:e.fillColor,stroke:`none`,opacity:_?.6:1},`area-${e.id}`)]:[],a=e.points.length>0?[(0,c.jsx)(`path`,{d:t,fill:`none`,stroke:e.color,strokeWidth:e.strokeWidth,strokeLinecap:`round`,strokeLinejoin:`round`},`line-${e.id}`)]:[],s=o===`none`?[]:e.points.flatMap(t=>{let n=t.isExtremum!==`none`;if(o===`extrema`&&!n)return[];let r=e.color??i,a=T??r,s=E??r,l=S??r,d=C??r,f=w??r,p;p=t.isExtremum===`peak`?a:t.isExtremum===`valley`?s:u===`none`||u===`segments`?r:t.trend===`up`?l:t.trend===`down`?d:f;let m=t.isExtremum===`none`?h:h+1;return[(0,c.jsx)(`circle`,{cx:t.x,cy:t.y,r:m,fill:p,stroke:`white`,strokeWidth:1.25},`dot-${e.id}-${t.index}`)]});return(0,c.jsxs)(`g`,{children:[r,a,u===`segments`||u===`both`?e.points.flatMap((t,n)=>{if(n===0)return[];let r=e.points[n-1],a=e.color??i,o=S??a,s=C??a,l=w??a,u=t.trend===`up`?o:t.trend===`down`?s:l;return[(0,c.jsx)(`line`,{x1:r.x,y1:r.y,x2:t.x,y2:t.y,stroke:u,strokeWidth:Math.max(1,e.strokeWidth+1),opacity:.6,strokeLinecap:`round`},`trend-${e.id}-${n}`)]}):[],s]},e.id)}),g&&(0,c.jsx)(`g`,{transform:`translate(0, ${O+10})`,children:k.flatMap((e,t)=>{if(!e?.label)return[];let n=t*100+10;return[(0,c.jsxs)(`g`,{children:[(0,c.jsx)(`line`,{x1:n,y1:10,x2:n+20,y2:10,stroke:e.color,strokeWidth:2}),(0,c.jsx)(`text`,{x:n+25,y:14,fontSize:`10`,fill:`#666`,children:e?.label??`-`})]},`legend-${e.id}`)]})})]})})}p.__docgenInfo={description:``,methods:[],displayName:`Trend`,props:{data:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`},description:``},series:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Array<Series>`},description:``},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`50`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#3b82f6"`,computed:!1}},fillColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"rgba(59, 130, 246, 0.1)"`,computed:!1}},pointMode:{required:!1,tsType:{name:`union`,raw:`"none" | "all" | "extrema"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"all"`},{name:`literal`,value:`"extrema"`}]},description:``,defaultValue:{value:`"all"`,computed:!1}},trendMode:{required:!1,tsType:{name:`union`,raw:`"none" | "segments" | "dots" | "both"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"segments"`},{name:`literal`,value:`"dots"`},{name:`literal`,value:`"both"`}]},description:``,defaultValue:{value:`"none"`,computed:!1}},showArea:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},dotRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}},showLegend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},stackedArea:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},visibleStartPercent:{required:!1,tsType:{name:`number`},description:``},visibleEndPercent:{required:!1,tsType:{name:`number`},description:``},visibleStartTs:{required:!1,tsType:{name:`number`},description:``},visibleEndTs:{required:!1,tsType:{name:`number`},description:``},upColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#10b981"`,computed:!1}},downColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#ef4444"`,computed:!1}},flatColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#94a3b8"`,computed:!1}},peakColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},valleyColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``}}};const m=(e,t,n)=>`repeating-linear-gradient(
    ${n===`x`?`90deg`:`0deg`},
    ${e?.start??`currentColor`},
    ${e?.start??`currentColor`} ${t},
    ${e?.end??`transparent`} ${t},
    ${e?.end??`transparent`} ${Number(t.replace(`%`,``))*2}%)`;var h={range:`_range_1q0af_1`};function g({min:e,max:t,initialMin:n,initialMax:r,valueMin:o,valueMax:l,onChange:u,id:d,showRuler:f=!1}){let p=o!==void 0&&l!==void 0,[g,_]=(0,s.useState)(()=>i(n??e,e,t)),[v,y]=(0,s.useState)(()=>i(r??t,e,t));(0,s.useEffect)(()=>{p||(_(i(n??e,e,t)),y(i(r??t,e,t)))},[n,r,e,t]);let b=p?i(o,e,t):g,x=p?i(l,e,t):v;function S(n){let r=parseInt(n.target.value,10),a=Number.isNaN(r)?e:i(r,e,t),o=a<x?a:x;p||_(o),u?.(o,x)}function C(n){let r=parseInt(n.target.value,10),o=Number.isNaN(r)?t:i(a(r,e,t),e,t),s=o>b?o:b;p||y(s),u?.(b,s)}let w={"--minVal":b,"--maxVal":x,"--minLimit":e,"--maxLimit":t};return(0,c.jsxs)(c.Fragment,{children:[f?(0,c.jsx)(`div`,{style:{height:`10px`,background:m({start:`transparent`,end:`currentColor`},`2%`,`x`)}}):null,(0,c.jsxs)(`div`,{className:h.range,style:w,children:[(0,c.jsx)(`input`,{type:`range`,id:`${d}-min`,min:e,max:t,step:1,value:b,onChange:S}),(0,c.jsx)(`input`,{type:`range`,id:`${d}-max`,min:e,max:t,step:1,value:x,onChange:C})]})]})}g.__docgenInfo={description:``,methods:[],displayName:`RangeMulti`,props:{min:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:``},showRuler:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},initialMin:{required:!1,tsType:{name:`number`},description:``},initialMax:{required:!1,tsType:{name:`number`},description:``},valueMin:{required:!1,tsType:{name:`number`},description:``},valueMax:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(min: number, max: number) => void`,signature:{arguments:[{type:{name:`number`},name:`min`},{type:{name:`number`},name:`max`}],return:{name:`void`}}},description:``},id:{required:!0,tsType:{name:`string`},description:``}}};function _(e){return typeof e==`object`&&!!e&&typeof e.timestamp==`number`}function v({color:e}){return(0,c.jsx)(`span`,{style:{display:`inline-block`,width:12,height:12,borderRadius:6,background:e??`transparent`,border:`1px solid rgba(0,0,0,0.08)`,boxShadow:`0 0 0 1px rgba(255,255,255,0.02) inset`}})}function y({series:e,data:t,width:n=300,height:i=60,color:a,fillColor:l,pointMode:u=`all`,trendMode:d=`none`,showArea:f,strokeWidth:m,dotRadius:h,showLegend:y,stackedArea:b,rangeMin:x=0,rangeMax:S=100,initialMin:C,initialMax:w,timeBased:T=!1,upColor:E,downColor:D,flatColor:O,peakColor:k,valleyColor:A,showRuler:j=!1}){let[M,N]=(0,s.useState)(()=>({min:C??x,max:w??S})),P=(e,t)=>{N(n=>n.min===e&&n.max===t?n:{min:e,max:t})},F=(0,s.useMemo)(()=>{if(e)return e;if(t)return[{id:`default`,data:t}]},[e,t]),I=(0,s.useMemo)(()=>{if(!T||!F)return null;let e=new Set;for(let t of F)for(let n of t.data)_(n)&&e.add(n.timestamp);let t=Array.from(e);return t.sort((e,t)=>e-t),t.length>0?t:null},[T,F]),L=(0,s.useMemo)(()=>e=>{if(!I||I.length===0)return;let t=I.length;if(t===1)return I[0];let n=Math.round(e/100*(t-1));return I[Math.max(0,Math.min(t-1,n))]},[I]),R=(0,s.useMemo)(()=>{if(T)return L(M.min)},[T,L,M.min]),z=(0,s.useMemo)(()=>{if(T)return L(M.max)},[T,L,M.max]),B=(0,s.useMemo)(()=>Math.max(x,Math.min(S,M.min)),[M.min,x,S]),V=(0,s.useMemo)(()=>Math.max(x,Math.min(S,M.max)),[M.max,x,S]),H=(0,s.useMemo)(()=>T?o(R):null,[T,R]),U=(0,s.useMemo)(()=>T?o(z):null,[T,z]),W=(0,s.useMemo)(()=>F?F.map(e=>{let t=e.color??a??`#3b82f6`;return{id:e.id,label:e.label??e.id,seriesColor:t,peakFill:k??t,valleyFill:A??t,upFill:E??t,downFill:D??t,flatFill:O??t}}):[],[F,a,E,D,O,k,A]),G=(0,s.useMemo)(()=>{if(!F)return null;if(W.length===1){let e=W[0];return(0,c.jsxs)(r,{style:{gap:12,alignItems:`center`,margin:`8px 0 10px 0`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.upFill}),(0,c.jsxs)(`div`,{style:{color:`var(--neutral)`,fontSize:13},children:[`Up`,T&&R&&z&&(0,c.jsx)(`div`,{style:{fontSize:11,color:`var(--muted)`},children:o(R)})]})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.downFill}),(0,c.jsxs)(`div`,{style:{color:`var(--neutral)`,fontSize:13},children:[`Down`,T&&R&&z&&(0,c.jsx)(`div`,{style:{fontSize:11,color:`var(--muted)`},children:o(z)})]})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.flatFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:13},children:`Flat`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.peakFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:13},children:`Peak`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.valleyFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:13},children:`Valley`})]})]})}return(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,margin:`8px 0 10px 0`},children:[W.map(e=>(0,c.jsxs)(r,{style:{alignItems:`center`,gap:12},children:[(0,c.jsx)(`div`,{style:{width:10,height:10,borderRadius:6,background:e.seriesColor}}),(0,c.jsx)(`div`,{style:{minWidth:90,color:`var(--neutral)`,fontSize:13},children:e.label}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,marginLeft:`auto`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.upFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:12},children:`Up`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.downFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:12},children:`Down`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.flatFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:12},children:`Flat`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.peakFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:12},children:`Peak`})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,c.jsx)(v,{color:e.valleyFill}),` `,(0,c.jsx)(`span`,{style:{color:`var(--neutral)`,fontSize:12},children:`Valley`})]})]})]},`legend-${e.id}`)),T&&R&&z&&(0,c.jsxs)(r,{style:{justifyContent:`flex-end`,gap:12},children:[(0,c.jsx)(`div`,{style:{fontSize:12,color:`var(--muted)`},children:o(R)}),(0,c.jsx)(`div`,{style:{fontSize:12,color:`var(--muted)`},children:o(z)})]})]})},[F,W,T,R,z]);return(0,c.jsxs)(c.Fragment,{children:[T&&(0,c.jsxs)(r,{style:{justifyContent:`space-between`},children:[(0,c.jsx)(`p`,{style:{color:`var(--neutral)`},children:H??`-`}),(0,c.jsx)(`p`,{style:{color:`var(--neutral)`},children:U??`-`})]}),(0,c.jsx)(g,{id:`trend-range-multi`,min:x,max:S,valueMin:M.min,valueMax:M.max,onChange:P,showRuler:j}),y?G:null,(0,c.jsx)(p,{...e?{series:e}:{},...t?{data:t}:{},width:n,height:i,color:a,fillColor:l,pointMode:u,trendMode:d,showArea:f,strokeWidth:m,dotRadius:h,showLegend:y,stackedArea:b,visibleStartTs:R,visibleEndTs:z,visibleStartPercent:T?void 0:B,visibleEndPercent:T?void 0:V,upColor:E,downColor:D,flatColor:O,peakColor:k,valleyColor:A})]})}y.__docgenInfo={description:``,methods:[],displayName:`TrendNavigator`,props:{series:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Array<Series>`},description:``},data:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`},description:``},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`60`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``},fillColor:{required:!1,tsType:{name:`string`},description:``},pointMode:{required:!1,tsType:{name:`union`,raw:`"none" | "all" | "extrema"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"all"`},{name:`literal`,value:`"extrema"`}]},description:``,defaultValue:{value:`"all"`,computed:!1}},trendMode:{required:!1,tsType:{name:`union`,raw:`"none" | "segments" | "dots" | "both"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"segments"`},{name:`literal`,value:`"dots"`},{name:`literal`,value:`"both"`}]},description:``,defaultValue:{value:`"none"`,computed:!1}},showArea:{required:!1,tsType:{name:`boolean`},description:``},strokeWidth:{required:!1,tsType:{name:`number`},description:``},dotRadius:{required:!1,tsType:{name:`number`},description:``},showLegend:{required:!1,tsType:{name:`boolean`},description:``},stackedArea:{required:!1,tsType:{name:`boolean`},description:``},rangeMin:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},rangeMax:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},initialMin:{required:!1,tsType:{name:`number`},description:``},initialMax:{required:!1,tsType:{name:`number`},description:``},timeBased:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},upColor:{required:!1,tsType:{name:`string`},description:``},downColor:{required:!1,tsType:{name:`string`},description:``},flatColor:{required:!1,tsType:{name:`string`},description:``},peakColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},valleyColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},showRuler:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var b={title:`Dumb/Trend`,component:p,parameters:{layout:`centered`},argTypes:{color:{control:`color`},fillColor:{control:`color`},width:{control:{type:`range`,min:100,max:800,step:10}},height:{control:{type:`range`,min:30,max:200,step:10}},strokeWidth:{control:{type:`range`,min:1,max:5,step:.5}},dotRadius:{control:{type:`range`,min:2,max:8,step:1}},pointMode:{control:{type:`radio`},options:[`none`,`all`,`extrema`]},trendMode:{control:{type:`radio`},options:[`none`,`segments`,`dots`,`both`]},upColor:{control:`color`},downColor:{control:`color`},flatColor:{control:`color`},peakColor:{control:`color`},valleyColor:{control:`color`}}};const x={name:`Empty State`,args:{data:[],width:300,height:60,pointMode:`none`,trendMode:`none`},render:e=>(0,c.jsxs)(`div`,{style:{padding:`20px`},children:[(0,c.jsx)(`h3`,{style:{marginBottom:`10px`,fontSize:`14px`,color:`#666`},children:`No Data Available`}),(0,c.jsx)(p,{...e})]})},S={name:`Default State`,args:{data:[50,50,50,52,54,54,54,53,53,55,55,55,53,50,48],width:300,height:60,pointMode:`extrema`,trendMode:`none`},render:e=>(0,c.jsx)(`div`,{style:{padding:`20px`},children:(0,c.jsx)(p,{...e})})},C={name:`Default State2`,args:{series:[{id:`aapl`,label:`AAPL`,data:Array.from({length:30},(e,t)=>150+Math.sin(t/5)*15+Math.random()*8),color:`#a855f7`,showArea:!1,strokeWidth:2},{id:`googl`,label:`GOOGL`,data:Array.from({length:30},(e,t)=>140+Math.cos(t/6)*12+Math.random()*6),color:`#3b82f6`,showArea:!1,strokeWidth:2}],width:300,height:60,pointMode:`extrema`,trendMode:`none`},render:e=>(0,c.jsx)(`div`,{style:{padding:`20px`},children:(0,c.jsx)(p,{...e})})},w={name:`Trend Indicators`,args:{data:[50,50,50,52,54,54,54,53,53,55,55,55,53,50,48],pointMode:`extrema`,trendMode:`both`,width:480,height:100,showArea:!1,strokeWidth:2,dotRadius:5,upColor:`var(--positive)`,downColor:`var(--negative)`,flatColor:`var(--neutral)`,peakColor:`yellow`,valleyColor:`black`,showLegend:!0},render:e=>(0,c.jsxs)(`div`,{style:{padding:`20px`},children:[(0,c.jsx)(`h3`,{style:{marginBottom:`10px`,fontSize:`14px`,color:`#666`},children:`Trend Direction Highlighting`}),(0,c.jsx)(p,{...e}),(0,c.jsxs)(`div`,{style:{marginTop:12,display:`flex`,gap:16,alignItems:`center`,fontSize:13},children:[(0,c.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,c.jsx)(`svg`,{width:`12`,height:`12`,children:(0,c.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.upColor})}),` `,`Up`]}),(0,c.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,c.jsx)(`svg`,{width:`12`,height:`12`,children:(0,c.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.downColor})}),` `,`Down`]}),(0,c.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,c.jsx)(`svg`,{width:`12`,height:`12`,children:(0,c.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.flatColor})}),` `,`Flat`]}),(0,c.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,c.jsx)(`svg`,{width:`12`,height:`12`,children:(0,c.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.peakColor})}),` `,`Peak`]}),(0,c.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,c.jsx)(`svg`,{width:`12`,height:`12`,children:(0,c.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.valleyColor})}),` `,`Valley`]})]})]})},T={name:`Compact Inline`,args:{data:[3,7,4,9,6,11,8,13],width:120,height:30,color:`#06b6d4`,fillColor:`rgba(6, 182, 212, 0.15)`,strokeWidth:2,pointMode:`none`,trendMode:`none`},render:e=>(0,c.jsxs)(`div`,{style:{padding:`20px`,display:`flex`,alignItems:`center`,gap:`15px`},children:[(0,c.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:`Revenue:`}),(0,c.jsx)(p,{...e}),(0,c.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`bold`},children:`$1.2M`})]})},E={name:`Complex with Labels`,args:{data:[{value:45,label:`Jan`},{value:52},{value:48},{value:61,label:`Apr`},{value:58},{value:65},{value:71,label:`Jul`},{value:68},{value:75},{value:82,label:`Oct`},{value:79},{value:88,label:`Dec`}],width:500,height:100,color:`#8b5cf6`,fillColor:`rgba(139, 92, 246, 0.15)`,pointMode:`extrema`,trendMode:`segments`},render:e=>(0,c.jsxs)(`div`,{style:{padding:`20px`},children:[(0,c.jsx)(`h3`,{style:{marginBottom:`10px`,fontSize:`14px`,color:`#666`},children:`Monthly Performance with Labels`}),(0,c.jsx)(p,{...e}),(0,c.jsx)(`div`,{style:{marginTop:`15px`,fontSize:`11px`,color:`#999`},children:`Quarterly milestones highlighted • 96% year-over-year growth`})]})},D={name:`Stock Portfolio (5 Assets)`,args:{series:[{id:`aapl`,label:`AAPL`,data:Array.from({length:30},(e,t)=>150+Math.sin(t/5)*15+Math.random()*8),color:`#a855f7`,showArea:!1,strokeWidth:2},{id:`googl`,label:`GOOGL`,data:Array.from({length:30},(e,t)=>140+Math.cos(t/6)*12+Math.random()*6),color:`#3b82f6`,showArea:!1,strokeWidth:2},{id:`msft`,label:`MSFT`,data:Array.from({length:30},(e,t)=>145+Math.sin(t/4)*10+Math.random()*5),color:`#10b981`,showArea:!1,strokeWidth:2},{id:`amzn`,label:`AMZN`,data:Array.from({length:30},(e,t)=>135+Math.sin(t/7)*18+Math.random()*7),color:`#f59e0b`,showArea:!1,strokeWidth:2},{id:`tsla`,label:`TSLA`,data:Array.from({length:30},(e,t)=>130+Math.sin(t/3)*25+Math.random()*10),color:`#ef4444`,showArea:!1,strokeWidth:2}],width:700,height:160,showLegend:!0,pointMode:`all`,trendMode:`none`},render:e=>(0,c.jsxs)(`div`,{style:{padding:`25px`,background:`#0f172a`,borderRadius:`12px`},children:[(0,c.jsxs)(`div`,{style:{marginBottom:`20px`,display:`flex`,justifyContent:`space-between`,alignItems:`baseline`},children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h3`,{style:{fontSize:`20px`,color:`#fff`,marginBottom:`5px`},children:`Portfolio Performance`}),(0,c.jsx)(`p`,{style:{fontSize:`13px`,color:`#64748b`},children:`Last 30 trading days`})]}),(0,c.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,c.jsx)(`div`,{style:{fontSize:`28px`,color:`#10b981`,fontWeight:`bold`},children:`+12.4%`}),(0,c.jsx)(`div`,{style:{fontSize:`12px`,color:`#64748b`},children:`Total return`})]})]}),(0,c.jsx)(p,{...e}),(0,c.jsx)(`div`,{style:{marginTop:`20px`,display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:`10px`},children:[`AAPL`,`GOOGL`,`MSFT`,`AMZN`,`TSLA`].map((e,t)=>(0,c.jsxs)(`div`,{style:{padding:`10px`,background:`#1e293b`,borderRadius:`6px`,textAlign:`center`},children:[(0,c.jsx)(`div`,{style:{fontSize:`11px`,color:`#94a3b8`,marginBottom:`4px`},children:e}),(0,c.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:`bold`,color:[`#a855f7`,`#3b82f6`,`#10b981`,`#f59e0b`,`#ef4444`][t]},children:[`+8.2%`,`+5.1%`,`+14.7%`,`+3.9%`,`+22.1%`][t]})]},e))})]})};var O=Date.now(),k=1440*60*1e3;const A={name:`Timestamped (multi-series)`,args:{series:[{id:`a`,label:`Series A`,color:`#3b82f6`,data:[{value:10,timestamp:O-9*k},{value:12,timestamp:O-8*k},{value:11,timestamp:O-7*k},{value:15,timestamp:O-6*k},{value:14,timestamp:O-5*k},{value:18,timestamp:O-4*k},{value:20,timestamp:O-3*k},{value:19,timestamp:O-2*k},{value:22,timestamp:O-1*k},{value:24,timestamp:O}]},{id:`b`,label:`Series B`,color:`#ef4444`,data:[{value:5,timestamp:O-9*k},{value:6,timestamp:O-8*k},{value:7,timestamp:O-7*k},{value:8,timestamp:O-6*k},{value:11,timestamp:O-5*k},{value:13,timestamp:O-4*k},{value:12,timestamp:O-3*k},{value:14,timestamp:O-2*k},{value:15,timestamp:O-1*k},{value:16,timestamp:O}]}],width:600,height:100,initialMin:0,initialMax:100,timeBased:!0,pointMode:`all`,trendMode:`segments`},render:function(e){return(0,c.jsxs)(`div`,{style:{padding:16},id:`uuuu`,children:[(0,c.jsx)(`h3`,{style:{marginBottom:8,fontSize:14,color:`#666`},children:`Navigator — timestamped series`}),(0,c.jsx)(y,{...e})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Empty State",
  args: {
    data: [],
    width: 300,
    height: 60,
    pointMode: "none",
    trendMode: "none"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <h3 style={{
      marginBottom: "10px",
      fontSize: "14px",
      color: "#666"
    }}>
        No Data Available
      </h3>
      <Trend {...args} />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Default State",
  args: {
    data: [50, 50, 50,
    // flat segment
    52, 54,
    // up
    54, 54,
    // flat
    53, 53,
    // flat
    55, 55, 55,
    // flat
    53, 50, 48 // down
    ],
    width: 300,
    height: 60,
    pointMode: "extrema",
    trendMode: "none"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <Trend {...args} />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Default State2",
  args: {
    series: [{
      id: "aapl",
      label: "AAPL",
      data: Array.from({
        length: 30
      }, (_, i) => 150 + Math.sin(i / 5) * 15 + Math.random() * 8),
      color: "#a855f7",
      showArea: false,
      strokeWidth: 2
    }, {
      id: "googl",
      label: "GOOGL",
      data: Array.from({
        length: 30
      }, (_, i) => 140 + Math.cos(i / 6) * 12 + Math.random() * 6),
      color: "#3b82f6",
      showArea: false,
      strokeWidth: 2
    }],
    width: 300,
    height: 60,
    pointMode: "extrema",
    trendMode: "none"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <Trend {...args} />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Trend Indicators",
  args: {
    data: [50, 50, 50,
    // flat segment
    52, 54,
    // up
    54, 54,
    // flat
    53, 53,
    // flat
    55, 55, 55,
    // flat
    53, 50, 48 // down
    ],
    // v2 usage:
    pointMode: "extrema",
    trendMode: "both",
    width: 480,
    height: 100,
    showArea: false,
    strokeWidth: 2,
    dotRadius: 5,
    // optional: override colors to emphasize
    upColor: "var(--positive)",
    downColor: "var(--negative)",
    flatColor: "var(--neutral)",
    peakColor: "yellow",
    valleyColor: "black",
    showLegend: true
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <h3 style={{
      marginBottom: "10px",
      fontSize: "14px",
      color: "#666"
    }}>
        Trend Direction Highlighting
      </h3>
      <Trend {...args} />

      <div style={{
      marginTop: 12,
      display: "flex",
      gap: 16,
      alignItems: "center",
      fontSize: 13
    }}>
        <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.upColor} />
          </svg>{" "}
          Up
        </span>
        <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.downColor} />
          </svg>{" "}
          Down
        </span>
        <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.flatColor} />
          </svg>{" "}
          Flat
        </span>
        <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.peakColor} />
          </svg>{" "}
          Peak
        </span>
        <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }}>
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill={args.valleyColor} />
          </svg>{" "}
          Valley
        </span>
      </div>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Compact Inline",
  args: {
    data: [3, 7, 4, 9, 6, 11, 8, 13],
    width: 120,
    height: 30,
    color: "#06b6d4",
    fillColor: "rgba(6, 182, 212, 0.15)",
    strokeWidth: 2,
    // minimal overlay
    pointMode: "none",
    trendMode: "none"
  },
  render: args => <div style={{
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "15px"
  }}>
      <span style={{
      fontSize: "14px",
      color: "#666"
    }}>Revenue:</span>
      <Trend {...args} />
      <span style={{
      fontSize: "16px",
      fontWeight: "bold"
    }}>$1.2M</span>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Complex with Labels",
  args: {
    data: [{
      value: 45,
      label: "Jan"
    }, {
      value: 52
    }, {
      value: 48
    }, {
      value: 61,
      label: "Apr"
    }, {
      value: 58
    }, {
      value: 65
    }, {
      value: 71,
      label: "Jul"
    }, {
      value: 68
    }, {
      value: 75
    }, {
      value: 82,
      label: "Oct"
    }, {
      value: 79
    }, {
      value: 88,
      label: "Dec"
    }],
    width: 500,
    height: 100,
    color: "#8b5cf6",
    fillColor: "rgba(139, 92, 246, 0.15)",
    // highlight extrema only
    pointMode: "extrema",
    trendMode: "segments"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <h3 style={{
      marginBottom: "10px",
      fontSize: "14px",
      color: "#666"
    }}>
        Monthly Performance with Labels
      </h3>
      <Trend {...args} />
      <div style={{
      marginTop: "15px",
      fontSize: "11px",
      color: "#999"
    }}>
        Quarterly milestones highlighted • 96% year-over-year growth
      </div>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Stock Portfolio (5 Assets)",
  args: {
    series: [{
      id: "aapl",
      label: "AAPL",
      data: Array.from({
        length: 30
      }, (_, i) => 150 + Math.sin(i / 5) * 15 + Math.random() * 8),
      color: "#a855f7",
      showArea: false,
      strokeWidth: 2
    }, {
      id: "googl",
      label: "GOOGL",
      data: Array.from({
        length: 30
      }, (_, i) => 140 + Math.cos(i / 6) * 12 + Math.random() * 6),
      color: "#3b82f6",
      showArea: false,
      strokeWidth: 2
    }, {
      id: "msft",
      label: "MSFT",
      data: Array.from({
        length: 30
      }, (_, i) => 145 + Math.sin(i / 4) * 10 + Math.random() * 5),
      color: "#10b981",
      showArea: false,
      strokeWidth: 2
    }, {
      id: "amzn",
      label: "AMZN",
      data: Array.from({
        length: 30
      }, (_, i) => 135 + Math.sin(i / 7) * 18 + Math.random() * 7),
      color: "#f59e0b",
      showArea: false,
      strokeWidth: 2
    }, {
      id: "tsla",
      label: "TSLA",
      data: Array.from({
        length: 30
      }, (_, i) => 130 + Math.sin(i / 3) * 25 + Math.random() * 10),
      color: "#ef4444",
      showArea: false,
      strokeWidth: 2
    }],
    width: 700,
    height: 160,
    showLegend: true,
    // show markers for points, but no extra trend overlay
    pointMode: "all",
    trendMode: "none"
  },
  render: args => <div style={{
    padding: "25px",
    background: "#0f172a",
    borderRadius: "12px"
  }}>
      <div style={{
      marginBottom: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }}>
        <div>
          <h3 style={{
          fontSize: "20px",
          color: "#fff",
          marginBottom: "5px"
        }}>
            Portfolio Performance
          </h3>
          <p style={{
          fontSize: "13px",
          color: "#64748b"
        }}>
            Last 30 trading days
          </p>
        </div>
        <div style={{
        textAlign: "right"
      }}>
          <div style={{
          fontSize: "28px",
          color: "#10b981",
          fontWeight: "bold"
        }}>
            +12.4%
          </div>
          <div style={{
          fontSize: "12px",
          color: "#64748b"
        }}>Total return</div>
        </div>
      </div>
      <Trend {...args} />
      <div style={{
      marginTop: "20px",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "10px"
    }}>
        {["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"].map((ticker, i) => <div key={ticker} style={{
        padding: "10px",
        background: "#1e293b",
        borderRadius: "6px",
        textAlign: "center"
      }}>
            <div style={{
          fontSize: "11px",
          color: "#94a3b8",
          marginBottom: "4px"
        }}>
              {ticker}
            </div>
            <div style={{
          fontSize: "14px",
          fontWeight: "bold",
          color: ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"][i]
        }}>
              {["+8.2%", "+5.1%", "+14.7%", "+3.9%", "+22.1%"][i]}
            </div>
          </div>)}
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Timestamped (multi-series)",
  args: {
    series: [seriesA, seriesB],
    width: 600,
    height: 100,
    initialMin: 0,
    initialMax: 100,
    timeBased: true,
    pointMode: "all",
    trendMode: "segments"
  },
  render: function Render(args) {
    return <div style={{
      padding: 16
    }} id="uuuu">
        <h3 style={{
        marginBottom: 8,
        fontSize: 14,
        color: "#666"
      }}>
          Navigator — timestamped series
        </h3>
        <TrendNavigator {...args} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}};const j=[`EmptyState`,`DefaultState`,`DefaultState2`,`TrendVisualization`,`CompactInline`,`ComplexLabeled`,`StockPortfolio`,`NavigatorWithTimestamps`];export{T as CompactInline,E as ComplexLabeled,S as DefaultState,C as DefaultState2,x as EmptyState,A as NavigatorWithTimestamps,D as StockPortfolio,w as TrendVisualization,j as __namedExportsOrder,b as default};