import{N as e,m as t}from"./iframe-BwNSIbbV.js";import"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import{n}from"./Flex-DtvvyBfY.js";var r=e(),i=t();function a({items:e,onChange:t,className:n,style:r,markerSize:a=12,lineWidth:o=2,textColor:s=`#64748b`}){return e.length===0?null:(0,i.jsx)(`div`,{className:n,style:{display:`flex`,flexWrap:`wrap`,gap:`10px 16px`,alignItems:`center`,...r},children:e.map(e=>(0,i.jsxs)(`button`,{type:`button`,onClick:()=>t?.(e.id),style:{display:`inline-flex`,alignItems:`center`,gap:8,whiteSpace:`nowrap`,fontSize:11,color:s,background:`none`,border:`none`,padding:0,cursor:t?`pointer`:`default`,opacity:e.active?1:.35},children:[(0,i.jsx)(`svg`,{width:a+8,height:a,"aria-hidden":`true`,children:(0,i.jsx)(`line`,{x1:0,y1:a/2,x2:a+6,y2:a/2,stroke:e.color,strokeWidth:o,strokeLinecap:`round`})}),e.label]},e.id))})}a.__docgenInfo={description:``,methods:[],displayName:`TrendLegend`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: string;
  color: string;
  active: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`color`,value:{name:`string`,required:!0}},{key:`active`,value:{name:`boolean`,required:!0}}]}}],raw:`Array<TrendLegendItem>`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},markerSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`12`,computed:!1}},lineWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},textColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#64748b"`,computed:!1}}}};function o({point:e}){return(0,i.jsxs)(`div`,{style:{position:`absolute`,left:e.x,top:e.y,transform:`translate(-50%, -115%)`,pointerEvents:`none`,zIndex:10,background:e.color,border:`1px solid rgba(255,255,255,0.35)`,color:`white`,borderRadius:`var(--border-radius)`,padding:`var(--gap-2) var(--gap-3)`,boxShadow:`var(--shadow)`,whiteSpace:`nowrap`},children:[(0,i.jsxs)(n,{style:{gap:`var(--gap-2)`},children:[e.seriesLabel&&(0,i.jsx)(`p`,{style:{fontWeight:`var(--font-weight)`},children:e.seriesLabel}),e.label&&(0,i.jsx)(`p`,{style:{opacity:.9},children:e.label})]}),e?.label!==String(e.value)&&(0,i.jsx)(`strong`,{children:e.value})]})}o.__docgenInfo={description:``,methods:[],displayName:`TrendTooltip`,props:{point:{required:!0,tsType:{name:`HoveredPoint`},description:``}}};function s(e){return typeof e==`number`?e:e.value}function c(e,t){let n=s(e[t]),r=t;for(;r>0&&s(e[r-1])===n;)r--;let i=t;for(;i<e.length-1&&s(e[i+1])===n;)i++;if(r===0||i===e.length-1||t!==Math.floor((r+i)/2))return`none`;let a=s(e[r-1]),o=s(e[i+1]);return n>a&&n>o?`peak`:n<a&&n<o?`valley`:`none`}function l(e,t,n,r,i,a){let o={min:i??1/0,max:a??-1/0,sum:0,count:0},l=e.map(e=>s(e));(i===void 0||a===void 0)&&(o.min=Math.min(...l),o.max=Math.max(...l)),o.sum=l.reduce((e,t)=>e+t,0),o.count=l.length;let u=o.max-o.min||1,d=t/Math.max(l.length-1,1),f=n*.1;return e.map((e,t,i)=>{let a=s(e),l=typeof e==`object`?e.label:void 0,p=typeof e==`object`?e.timestamp:void 0,m=t*d,h=n-((a-o.min)/u*(n-2*f)+f),g=t/Math.max(i.length-1,1)*100,_=`flat`;if(t>0){let e=s(i[t-1]);a>e?_=`up`:a<e&&(_=`down`)}let v=c(i,t);return{x:m,y:h,value:a,index:t,percentile:g,trend:_,isExtremum:v,label:l,timestamp:p,seriesId:r}})}function u(e,t,n){if(e.length===0)return``;let r=e.map((e,t)=>`${t===0?`M`:`L`} ${e.x},${e.y}`).join(` `);if(!t)return r;let i=e[e.length-1],a=e[0];return`${r} L ${i.x},${n} L ${a.x},${n} Z`}function d({data:e,series:t,width:n=200,height:c=50,color:d=`#3b82f6`,fillColor:f=`rgba(59, 130, 246, 0.1)`,pointMode:p=`all`,trendMode:m=`none`,showArea:h=!0,strokeWidth:g=2,dotRadius:_=3,showLegend:v=!1,stackedArea:y=!1,visibleStartPercent:b,visibleEndPercent:x,visibleStartTs:S,visibleEndTs:C,upColor:w=`#10b981`,downColor:T=`#ef4444`,flatColor:E=`#94a3b8`,peakColor:D,valleyColor:O,showPointLabels:k=`all`,emptyState:A,showTooltip:j=!1}){let[M,N]=(0,r.useState)(null),[P,F]=(0,r.useState)(()=>new Set),I=v?30:0,L=Math.max(20,c-I),R=(0,r.useMemo)(()=>{if(e&&!t)return[{id:`default`,label:void 0,points:l(e,n,L),color:d,fillColor:f,showArea:h,strokeWidth:g}];if(t){let e=t.flatMap(e=>e.data.map(e=>s(e))),r=Math.min(...e),i=Math.max(...e);return t.map(e=>{let t=l(e.data,n,L,e.id,r,i);return{id:e.id,label:e.label,points:t,color:e.color??d,fillColor:e.fillColor??f,showArea:e.showArea??h,strokeWidth:e.strokeWidth??g}})}return[]},[e,t,n,L,d,f,h,g]),z=b===void 0?0:Math.max(0,Math.min(100,b)),B=x===void 0?100:Math.max(0,Math.min(100,x)),V=Math.min(z,B),H=Math.max(z,B),U=(0,r.useMemo)(()=>v?R.map((e,t)=>({id:e.id,label:e.label??(R.length===1?`Trend`:`Series ${t+1}`),color:e.color??d,active:!P.has(e.id)})):[],[v,R,d,P]),W=(0,r.useMemo)(()=>R.filter(e=>!P.has(e.id)),[R,P]),G=(0,r.useMemo)(()=>W.map(e=>{if(S!==void 0&&C!==void 0){let t=Math.min(S,C),n=Math.max(S,C),r=e.points.filter(e=>e.timestamp==null?!0:e.timestamp>=t&&e.timestamp<=n);return{...e,points:r}}if(V===0&&H===100)return e;let t=e.points.filter(e=>e.percentile>=V&&e.percentile<=H);return{...e,points:t}}),[W,S,C,V,H]),ee=e=>{F(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},te=G.some(e=>e.points&&e.points.length>0);return R.length===0||!te?A===void 0?(0,i.jsx)(`svg`,{width:n,height:c,children:(0,i.jsx)(`text`,{x:n/2,y:c/2,textAnchor:`middle`,fill:`var(--black)`,fontSize:`var(--font-md)`,children:`No data`})}):A:(0,i.jsxs)(`div`,{style:{width:n,position:`relative`},children:[(0,i.jsx)(`svg`,{width:`100%`,preserveAspectRatio:`none`,height:c,style:{overflow:`visible`,display:`block`},children:G.map(e=>{let t=u(e.points,!1,L),n=u(e.points,!0,L),r=e.showArea&&e.points.length>0?[(0,i.jsx)(`path`,{d:n,fill:e.fillColor,stroke:`none`,opacity:y?.6:1},`area-${e.id}`)]:[],a=e.points.length>0?[(0,i.jsx)(`path`,{d:t,fill:`none`,stroke:e.color,strokeWidth:e.strokeWidth,strokeLinecap:`round`,strokeLinejoin:`round`},`line-${e.id}`)]:[],o=p===`none`?[]:e.points.flatMap(t=>{let n=e.color??d,r=D??n,a=O??n,o=w??n,s=T??n,c=E??n,l;l=t.isExtremum===`peak`?r:t.isExtremum===`valley`?a:m===`none`||m===`segments`?n:t.trend===`up`?o:t.trend===`down`?s:c;let u=t.isExtremum===`none`?_:_+1;return[(0,i.jsx)(`circle`,{cx:t.x,cy:t.y,r:u,fill:l,stroke:`white`,strokeWidth:1.25,onMouseEnter:()=>N({x:t.x,y:t.y,value:t.value,label:t.label,seriesLabel:e.label??`Trend`,seriesId:e.id,color:n}),onMouseLeave:()=>N(null)},`dot-${e.id}-${t.index}`)]});return(0,i.jsxs)(`g`,{children:[r,a,m===`segments`||m===`both`?e.points.flatMap((t,n)=>{if(n===0)return[];let r=e.points[n-1],a=e.color??d,o=w??a,s=T??a,c=E??a,l=t.trend===`up`?o:t.trend===`down`?s:c;return[(0,i.jsx)(`line`,{x1:r.x,y1:r.y,x2:t.x,y2:t.y,stroke:l,strokeWidth:Math.max(1,e.strokeWidth+1),opacity:.6,strokeLinecap:`round`},`trend-${e.id}-${n}`)]}):[],o,e.points.flatMap(t=>{if(k===`none`)return[];let n=t.label??String(t.value),r=t.trend===`up`||t.trend===`flat`?-(_+10):_+14,a=t.y+r;return[(0,i.jsx)(`text`,{x:t.x,y:a,fontSize:10,textAnchor:`middle`,style:{paintOrder:`stroke`},stroke:`#fff`,strokeWidth:3,fill:e.color??d,dominantBaseline:`central`,children:n},`label-${e.id}-${t.index}`)]})]},e.id)})}),v&&U.length>0&&(0,i.jsx)(a,{items:U,onChange:ee,style:{marginTop:12}}),j&&M&&(0,i.jsx)(o,{point:M})]})}d.__docgenInfo={description:``,methods:[],displayName:`Trend`,props:{data:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`},description:``},series:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Array<Series>`},description:``},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`50`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#3b82f6"`,computed:!1}},fillColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"rgba(59, 130, 246, 0.1)"`,computed:!1}},emptyState:{required:!1,tsType:{name:`ReactNode`},description:``},pointMode:{required:!1,tsType:{name:`union`,raw:`"none" | "all"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"all"`}]},description:``,defaultValue:{value:`"all"`,computed:!1}},trendMode:{required:!1,tsType:{name:`union`,raw:`"none" | "segments" | "dots" | "both"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"segments"`},{name:`literal`,value:`"dots"`},{name:`literal`,value:`"both"`}]},description:``,defaultValue:{value:`"none"`,computed:!1}},showArea:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},dotRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}},showLegend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},stackedArea:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showTooltip:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},visibleStartPercent:{required:!1,tsType:{name:`number`},description:``},visibleEndPercent:{required:!1,tsType:{name:`number`},description:``},visibleStartTs:{required:!1,tsType:{name:`number`},description:``},visibleEndTs:{required:!1,tsType:{name:`number`},description:``},upColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#10b981"`,computed:!1}},downColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#ef4444"`,computed:!1}},flatColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#94a3b8"`,computed:!1}},peakColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},valleyColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},showPointLabels:{required:!1,tsType:{name:`union`,raw:`"none" | "all"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"all"`}]},description:``,defaultValue:{value:`"all"`,computed:!1}}}};function f(e,t,n){return Math.max(t,Math.min(n,e))}function p(e,t,n){return Number.isNaN(e)?n:Math.max(t,Math.min(n,e))}const m=(e,t,n)=>`repeating-linear-gradient(
    ${n===`x`?`90deg`:`0deg`},
    ${e?.start??`currentColor`},
    ${e?.start??`currentColor`} ${t},
    ${e?.end??`transparent`} ${t},
    ${e?.end??`transparent`} ${Number(t.replace(`%`,``))*2}%)`;var h={range:`_range_3oxkq_1`};function g({min:e,max:t,initialMin:n,initialMax:a,valueMin:o,valueMax:s,onChange:c,id:l,showRuler:u=!1}){let d=o!==void 0&&s!==void 0,[g,_]=(0,r.useState)(()=>f(n??e,e,t)),[v,y]=(0,r.useState)(()=>f(a??t,e,t));(0,r.useEffect)(()=>{d||(_(f(n??e,e,t)),y(f(a??t,e,t)))},[n,a,e,t]);let b=d?f(o,e,t):g,x=d?f(s,e,t):v;function S(n){let r=parseInt(n.target.value,10),i=Number.isNaN(r)?e:f(r,e,t),a=i<x?i:x;d||_(a),c?.(a,x)}function C(n){let r=parseInt(n.target.value,10),i=Number.isNaN(r)?t:f(p(r,e,t),e,t),a=i>b?i:b;d||y(a),c?.(b,a)}let w={"--minVal":b,"--maxVal":x,"--minLimit":e,"--maxLimit":t};return(0,i.jsxs)(i.Fragment,{children:[u?(0,i.jsx)(`div`,{style:{height:`10px`,background:m({start:`transparent`,end:`currentColor`},`2%`,`x`)}}):null,(0,i.jsxs)(`div`,{className:h.range,style:w,children:[(0,i.jsx)(`input`,{type:`range`,id:`${l}-min`,min:e,max:t,step:1,value:b,onChange:S}),(0,i.jsx)(`input`,{type:`range`,id:`${l}-max`,min:e,max:t,step:1,value:x,onChange:C})]})]})}g.__docgenInfo={description:``,methods:[],displayName:`Range`,props:{min:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:``},showRuler:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},initialMin:{required:!1,tsType:{name:`number`},description:``},initialMax:{required:!1,tsType:{name:`number`},description:``},valueMin:{required:!1,tsType:{name:`number`},description:``},valueMax:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(min: number, max: number) => void`,signature:{arguments:[{type:{name:`number`},name:`min`},{type:{name:`number`},name:`max`}],return:{name:`void`}}},description:``},id:{required:!0,tsType:{name:`string`},description:``}}};function _({id:e,min:t,max:n,valueMin:a,valueMax:o,initialMin:s,initialMax:c,onChange:l,showRuler:u=!1,series:p,data:m,minPoints:h=5,stretchToFit:_=!1,children:v,showOverview:y=!0,overviewHeight:b=34,width:x}){let S=(0,r.useMemo)(()=>p&&p.length>0?p:m?[{id:`single`,data:m}]:[],[p,m]),C=(0,r.useMemo)(()=>S.map(e=>e.data.map(e=>typeof e==`object`?e.timestamp??null:null)),[S]),w=(0,r.useMemo)(()=>C.some(e=>e.some(e=>e!=null)),[C]),T=(0,r.useMemo)(()=>{if(!w)return null;let e=1/0,t=-1/0;return S.forEach(n=>n.data.forEach(n=>{typeof n==`object`&&n.timestamp!=null&&(e=Math.min(e,n.timestamp),t=Math.max(t,n.timestamp))})),e===1/0?null:{gMin:e,gMax:t}},[w,S]);function E(e,r){let i=f(e,t,n),a=f(r,t,n);if(i>a&&([i,a]=[a,i]),w&&T){let e=i,t=a;S.forEach(n=>{let r=n.data.map(e=>typeof e==`object`?e.timestamp??null:null).filter(e=>e!=null);if(r.length===0)return;let i=r.findIndex(t=>t>=e);i===-1&&(i=r.length);let a=r.length-1-[...r].reverse().findIndex(e=>e<=t);if(i>a){let n=(e+t)/2,i=0,a=1/0;r.forEach((e,t)=>{let r=Math.abs(e-n);r<a&&(a=r,i=t)});let o=Math.max(0,i-Math.floor(h/2)),s=Math.min(r.length-1,o+h-1);e=r[o],t=r[s];return}let o=a-i+1;if(o>=h)return;let s=h-o,c=Math.floor(s/2),l=s-c,u=Math.max(0,i-c),d=Math.min(r.length-1,a+l);d-u+1<h&&(u===0?d=Math.min(r.length-1,u+h-1):d===r.length-1&&(u=Math.max(0,d-(h-1)))),e=Math.min(e,r[u]),t=Math.max(t,r[d])});let n=T.gMax===T.gMin?0:(e-T.gMin)/(T.gMax-T.gMin)*100,r=T.gMax===T.gMin?100:(t-T.gMin)/(T.gMax-T.gMin)*100;return{startPct:f(n,0,100),endPct:f(r,0,100),valueMin:e,valueMax:t}}let o=n-t||1,s=(i-t)/o*100,c=(a-t)/o*100;s=f(s,0,100),c=f(c,0,100);let l=s,u=c;S.forEach(e=>{let t=Math.max(1,e.data.length),n=Math.round(l/100*(t-1)),r=Math.round(u/100*(t-1)),i=Math.max(0,r-n+1);if(i>=h)return;let a=h-i,o=Math.floor(a/2)/(t-1)*100||0,s=Math.ceil(a/2)/(t-1)*100||0;l=Math.max(0,l-o),u=Math.min(100,u+s)});let d=t+l/100*o,p=t+u/100*o;return{startPct:f(l,0,100),endPct:f(u,0,100),valueMin:d,valueMax:p}}let D=a??s??t,O=o??c??n,{startPct:k,endPct:A,valueMin:j,valueMax:M}=(0,r.useMemo)(()=>E(D,O),[D,O,t,n,JSON.stringify(S),h]),N=(0,r.useMemo)(()=>_?w&&T?S.map(e=>{let t=e.data.filter(e=>typeof e==`number`||e.timestamp==null?!1:e.timestamp>=j&&e.timestamp<=M);if(t.length===0){let t=e.data.map((e,t)=>({p:e,idx:t})).filter(e=>typeof e.p!=`number`&&e.p.timestamp!=null);if(t.length===0)return{...e,data:[]};let n=(j+M)/2,r=t[0],i=Math.abs(r.p.timestamp-n);t.forEach(e=>{let t=Math.abs(e.p.timestamp-n);t<i&&(r=e,i=t)});let a=Math.max(0,r.idx-Math.floor(h/2)),o=e.data.slice(a,a+h);return{...e,data:o}}return{...e,data:t}}):S.map(e=>{let t=Math.max(1,e.data.length),n=Math.round(k/100*(t-1)),r=Math.round(A/100*(t-1)),i=f(Math.min(n,r),0,t-1),a=f(Math.max(n,r),0,t-1),o=i,s=a,c=s-o+1;if(c<h){let e=h-c,n=Math.floor(e/2),r=e-n;o=f(o-n,0,t-1),s=f(s+r,0,t-1),s-o+1<h&&(o===0?s=Math.min(t-1,o+h-1):s===t-1&&(o=Math.max(0,s-(h-1))))}let l=e.data.slice(o,s+1);return{...e,data:l}}):S.map(e=>({...e,data:[...e.data]})),[_,w,T,S,j,M,k,A,h]);function P(e,t){l?.(e,t)}return(0,i.jsxs)(`div`,{children:[(0,i.jsx)(g,{id:e,min:t,max:n,valueMin:a,valueMax:o,initialMin:s,initialMax:c,onChange:P,showRuler:u}),v({visibleStartPercent:Math.max(0,Math.min(100,k)),visibleEndPercent:Math.max(0,Math.min(100,A)),valueMin:j,valueMax:M,stretchedSeries:N}),y&&S.length>0&&(0,i.jsxs)(`div`,{style:{position:`relative`,width:`100%`,marginTop:`1.6em`},children:[(0,i.jsx)(`div`,{style:{opacity:.38,pointerEvents:`none`},children:(0,i.jsx)(d,{series:S,width:x,height:b,pointMode:`none`,trendMode:`none`,showArea:!1,showLegend:!1,showTooltip:!1,showPointLabels:`none`})}),(0,i.jsx)(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`,background:`linear-gradient(
                      to right,
                      rgba(15, 23, 42, 0.10) 0%,
                      rgba(15, 23, 42, 0.10) ${k}%,
                      rgba(255, 255, 255, 0.22) ${k}%,
                      rgba(255, 255, 255, 0.22) ${A}%,
                      rgba(15, 23, 42, 0.10) ${A}%,
                      rgba(15, 23, 42, 0.10) 100%
                    )`,boxShadow:`var(--shadow)`,borderRadius:`var(--border-radius)`}}),(0,i.jsx)(`p`,{style:{position:`absolute`,left:`${k}%`,top:-18,transform:`translateX(-50%)`,fontSize:10,color:`#64748b`,whiteSpace:`nowrap`},children:`Start`}),(0,i.jsx)(`p`,{style:{position:`absolute`,left:`${A}%`,top:-18,transform:`translateX(-50%)`,fontSize:10,color:`#64748b`,whiteSpace:`nowrap`},children:`End`})]})]})}_.__docgenInfo={description:``,methods:[],displayName:`SlidingWindow`,props:{id:{required:!0,tsType:{name:`string`},description:``},min:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:``},valueMin:{required:!1,tsType:{name:`number`},description:``},valueMax:{required:!1,tsType:{name:`number`},description:``},initialMin:{required:!1,tsType:{name:`number`},description:``},initialMax:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(min: number, max: number) => void`,signature:{arguments:[{type:{name:`number`},name:`min`},{type:{name:`number`},name:`max`}],return:{name:`void`}}},description:``},showRuler:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},series:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Array<Series>`},description:``},data:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`},description:``},minPoints:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},showOverview:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},overviewHeight:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`34`,computed:!1}},width:{required:!0,tsType:{name:`number`},description:``},stretchToFit:{required:!1,tsType:{name:`boolean`},description:`When true the visible subset of each series is sliced and passed
back to children as \`stretchedSeries\`. Use this to have the visible points
occupy the full Trend width.`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(ctx: {
  visibleStartPercent: number;
  visibleEndPercent: number;
  valueMin: number;
  valueMax: number;
  /**
   * Always provided. If \`stretchToFit\` is true, this contains the per-series
   * filtered/sliced data corresponding to the visible window. Otherwise it's
   * the original series (shallow-copied).
   */
  stretchedSeries: Array<Series>;
}) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  visibleStartPercent: number;
  visibleEndPercent: number;
  valueMin: number;
  valueMax: number;
  /**
   * Always provided. If \`stretchToFit\` is true, this contains the per-series
   * filtered/sliced data corresponding to the visible window. Otherwise it's
   * the original series (shallow-copied).
   */
  stretchedSeries: Array<Series>;
}`,signature:{properties:[{key:`visibleStartPercent`,value:{name:`number`,required:!0}},{key:`visibleEndPercent`,value:{name:`number`,required:!0}},{key:`valueMin`,value:{name:`number`,required:!0}},{key:`valueMax`,value:{name:`number`,required:!0}},{key:`stretchedSeries`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Array<Series>`,required:!0},description:`Always provided. If \`stretchToFit\` is true, this contains the per-series
filtered/sliced data corresponding to the visible window. Otherwise it's
the original series (shallow-copied).`}]}},name:`ctx`}],return:{name:`ReactNode`}}},description:``}}};var v=(function(){if(typeof Map<`u`)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t?(n=r,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,`size`,{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){t===void 0&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()})(),y=typeof window<`u`&&typeof document<`u`&&window.document===document,b=(function(){return typeof global<`u`&&global.Math===Math?global:typeof self<`u`&&self.Math===Math?self:typeof window<`u`&&window.Math===Math?window:Function(`return this`)()})(),x=(function(){return typeof requestAnimationFrame==`function`?requestAnimationFrame.bind(b):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),S=2;function C(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&s()}function o(){x(a)}function s(){var e=Date.now();if(n){if(e-i<S)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=e}return s}var w=20,T=[`top`,`right`,`bottom`,`left`,`width`,`height`,`size`,`weight`],E=typeof MutationObserver<`u`,D=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=C(this.refresh.bind(this),w)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){!y||this.connected_||(document.addEventListener(`transitionend`,this.onTransitionEnd_),window.addEventListener(`resize`,this.refresh),E?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener(`DOMSubtreeModified`,this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!y||!this.connected_||(document.removeEventListener(`transitionend`,this.onTransitionEnd_),window.removeEventListener(`resize`,this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener(`DOMSubtreeModified`,this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=t===void 0?``:t;T.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||=new e,this.instance_},e.instance_=null,e}(),O=(function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e}),k=(function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||b}),A=B(0,0,0,0);function j(e){return parseFloat(e)||0}function M(e){return[...arguments].slice(1).reduce(function(t,n){var r=e[`border-`+n+`-width`];return t+j(r)},0)}function N(e){for(var t=[`top`,`right`,`bottom`,`left`],n={},r=0,i=t;r<i.length;r++){var a=i[r],o=e[`padding-`+a];n[a]=j(o)}return n}function P(e){var t=e.getBBox();return B(0,0,t.width,t.height)}function F(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return A;var r=k(e).getComputedStyle(e),i=N(r),a=i.left+i.right,o=i.top+i.bottom,s=j(r.width),c=j(r.height);if(r.boxSizing===`border-box`&&(Math.round(s+a)!==t&&(s-=M(r,`left`,`right`)+a),Math.round(c+o)!==n&&(c-=M(r,`top`,`bottom`)+o)),!L(e)){var l=Math.round(s+a)-t,u=Math.round(c+o)-n;Math.abs(l)!==1&&(s-=l),Math.abs(u)!==1&&(c-=u)}return B(i.left,i.top,s,c)}var I=(function(){return typeof SVGGraphicsElement<`u`?function(e){return e instanceof k(e).SVGGraphicsElement}:function(e){return e instanceof k(e).SVGElement&&typeof e.getBBox==`function`}})();function L(e){return e===k(e).document.documentElement}function R(e){return y?I(e)?P(e):F(e):A}function z(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=typeof DOMRectReadOnly<`u`?DOMRectReadOnly:Object,o=Object.create(a.prototype);return O(o,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),o}function B(e,t,n,r){return{x:e,y:t,width:n,height:r}}var V=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=B(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=R(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),H=function(){function e(e,t){var n=z(t);O(this,{target:e,contentRect:n})}return e}(),U=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new v,typeof e!=`function`)throw TypeError(`The callback provided as parameter 1 is not a function.`);this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof k(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)||(t.set(e,new V(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof k(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new H(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),W=typeof WeakMap<`u`?new WeakMap:new v,G=function(){function e(t){if(!(this instanceof e))throw TypeError(`Cannot call a class as a function.`);if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);var n=new U(t,D.getInstance(),this);W.set(this,n)}return e}();[`observe`,`unobserve`,`disconnect`].forEach(function(e){G.prototype[e]=function(){var t;return(t=W.get(this))[e].apply(t,arguments)}});var ee=(function(){return b.ResizeObserver===void 0?G:b.ResizeObserver})();function te(e){let[t,n]=(0,r.useState)({width:void 0,height:void 0});return(0,r.useEffect)(()=>{if(e.current==null)return;let t=new ee(e=>{for(let t of e)n({width:t.contentRect.width,height:t.contentRect.height})});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}var ne={title:`Smart-ish/Trend`,component:d,parameters:{layout:`centered`},argTypes:{color:{control:`color`},fillColor:{control:`color`},width:{control:{type:`range`,min:100,max:800,step:10}},height:{control:{type:`range`,min:30,max:200,step:10}},strokeWidth:{control:{type:`range`,min:1,max:5,step:.5}},dotRadius:{control:{type:`range`,min:2,max:8,step:1}},pointMode:{control:{type:`radio`},options:[`none`,`all`]},trendMode:{control:{type:`radio`},options:[`none`,`segments`,`dots`,`both`]},upColor:{control:`color`},downColor:{control:`color`},flatColor:{control:`color`},peakColor:{control:`color`},valleyColor:{control:`color`}}};const K={name:`Empty State`,args:{data:[],width:300,height:60,pointMode:`none`,trendMode:`none`},render:e=>(0,i.jsx)(d,{...e,emptyState:(0,i.jsx)(`div`,{className:`group pxy`,children:`No data to show`})})},q={name:`Trend`,args:{data:[50,50,50,52,54,54,54,53,53,55,55,55,53,50,48],width:300,height:60,showPointLabels:`none`,showLegend:!0,showTooltip:!0},render:e=>(0,i.jsx)(d,{...e})},J={name:`Trend direction`,args:{data:[{value:50},{value:50},{value:50,label:`flat`},{value:52,label:`small up`},{value:54,label:`rally`},{value:54},{value:54},{value:53},{value:53},{value:55,label:`higher`},{value:55},{value:55},{value:53,label:`dip`},{value:50,label:`fall`},{value:48,label:`valley`}],trendMode:`both`,width:480,height:100,showArea:!0,strokeWidth:2,dotRadius:5,upColor:`var(--positive)`,downColor:`var(--negative)`,flatColor:`var(--neutral)`,peakColor:`yellow`,valleyColor:`black`},render:e=>(0,i.jsxs)(`div`,{style:{padding:`20px`},children:[(0,i.jsx)(d,{...e}),(0,i.jsxs)(`div`,{style:{marginTop:12,display:`flex`,gap:16,alignItems:`center`,fontSize:13},children:[(0,i.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,i.jsx)(`svg`,{width:`12`,height:`12`,children:(0,i.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.upColor})}),` `,`Up`]}),(0,i.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,i.jsx)(`svg`,{width:`12`,height:`12`,children:(0,i.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.downColor})}),` `,`Down`]}),(0,i.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,i.jsx)(`svg`,{width:`12`,height:`12`,children:(0,i.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.flatColor})}),` `,`Flat`]}),(0,i.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,i.jsx)(`svg`,{width:`12`,height:`12`,children:(0,i.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.peakColor})}),` `,`Peak`]}),(0,i.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,i.jsx)(`svg`,{width:`12`,height:`12`,children:(0,i.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.valleyColor})}),` `,`Valley`]})]})]})},Y={name:`Trends `,args:{series:[{id:`aapl`,label:`AAPL`,data:Array.from({length:30},(e,t)=>150+Math.sin(t/5)*15+Math.random()*8),color:`#a855f7`,showArea:!1,strokeWidth:2},{id:`googl`,label:`GOOGL`,data:Array.from({length:30},(e,t)=>140+Math.cos(t/6)*12+Math.random()*6),color:`#3b82f6`,showArea:!1,strokeWidth:2},{id:`msft`,label:`MSFT`,data:Array.from({length:30},(e,t)=>145+Math.sin(t/4)*10+Math.random()*5),color:`#10b981`,showArea:!1,strokeWidth:2},{id:`amzn`,label:`AMZN`,data:Array.from({length:30},(e,t)=>135+Math.sin(t/7)*18+Math.random()*7),color:`#f59e0b`,showArea:!1,strokeWidth:2},{id:`tsla`,label:`TSLA`,data:Array.from({length:30},(e,t)=>130+Math.sin(t/3)*25+Math.random()*10),color:`#ef4444`,showArea:!1,strokeWidth:2}],width:700,height:160,showLegend:!0,showPointLabels:`none`,pointMode:`none`},render:e=>(0,i.jsx)(`div`,{children:(0,i.jsx)(d,{...e})})},X={name:`Compact Inline`,args:{data:[3,7,4,9,6,11,8,13],width:120,height:30,color:`#06b6d4`,fillColor:`rgba(6, 182, 212, 0.15)`,strokeWidth:2,pointMode:`none`,showPointLabels:`none`},render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:`var(--gap-3)`},children:[(0,i.jsx)(`p`,{style:{fontSize:`14px`,color:`#666`},children:`Revenue:`}),(0,i.jsx)(d,{...e}),(0,i.jsx)(`p`,{style:{fontWeight:`var(--font-bold)`},children:`$1.2M`})]})};var Z=Date.now(),Q=1440*60*1e3;const $={name:`Sliding`,parameters:{layout:`fullscreen`},render:function(){let[e,t]=(0,r.useState)(!0),n=(e,t,n)=>({id:n,label:n.toUpperCase(),color:t,data:Array.from({length:60},(t,n)=>{let r=e(n);return{value:Number(r.toFixed(2)),label:r.toFixed(2),timestamp:Z-(59-n)*Q}}),showArea:!1,strokeWidth:2}),a=n(e=>150+Math.sin(e/5)*15+Math.random()*8,`#a855f7`,`aapl`),o=n(e=>140+Math.cos(e/6)*12+Math.random()*6,`#3b82f6`,`googl`),s=Z-59*Q,c=Z,[l,u]=(0,r.useState)({min:s+1*Q,max:c-1*Q}),f=(0,r.useRef)(null),{width:p}=te(f);return(0,i.jsx)(`div`,{style:{width:`100%`,padding:`var(--gap-4)`},children:(0,i.jsx)(_,{id:`trend-range-multi`,min:s,max:c,valueMin:l.min,valueMax:l.max,onChange:(e,t)=>u({min:e,max:t}),showRuler:!1,series:[a,o],minPoints:6,width:p??0,stretchToFit:e,children:({stretchedSeries:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(`div`,{style:{width:`100%`,background:`#fff`,padding:`var(--spacing-3)`,borderRadius:`var(--border-radius)`},ref:f,children:(0,i.jsx)(d,{series:e??[],width:p,height:160,pointMode:`all`,trendMode:`none`,showArea:!1,strokeWidth:2,dotRadius:4,visibleStartPercent:0,visibleEndPercent:100,showPointLabels:`none`,showTooltip:!0})})})})})}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Empty State",
  args: {
    data: [],
    width: 300,
    height: 60,
    pointMode: "none",
    trendMode: "none"
  },
  render: args => <Trend {...args} emptyState={<div className="group pxy">No data to show</div>} />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Trend",
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
    showPointLabels: "none",
    showLegend: true,
    showTooltip: true
  },
  render: args => <Trend {...args} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Trend direction",
  args: {
    data: [{
      value: 50
    }, {
      value: 50
    }, {
      value: 50,
      label: "flat"
    },
    // plateau middle -> won't be center extremum
    {
      value: 52,
      label: "small up"
    }, {
      value: 54,
      label: "rally"
    },
    // will likely be a peak depending on neighbor values
    {
      value: 54
    }, {
      value: 54
    }, {
      value: 53
    }, {
      value: 53
    }, {
      value: 55,
      label: "higher"
    }, {
      value: 55
    }, {
      value: 55
    }, {
      value: 53,
      label: "dip"
    }, {
      value: 50,
      label: "fall"
    }, {
      value: 48,
      label: "valley"
    } // valley extremum
    ],
    trendMode: "both",
    width: 480,
    height: 100,
    showArea: true,
    strokeWidth: 2,
    dotRadius: 5,
    upColor: "var(--positive)",
    downColor: "var(--negative)",
    flatColor: "var(--neutral)",
    peakColor: "yellow",
    valleyColor: "black"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Trends ",
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
    showPointLabels: "none",
    pointMode: "none"
  },
  render: args => <div>
      <Trend {...args} />
      {/*<div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
       >
        {["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"].map((ticker, i) => (
          <div
            key={ticker}
            style={{
              boxShadow: "var(--shadow)",
              padding: "var(--gap-3)",
              borderRadius: "var(--border-radius)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                marginBottom: "4px",
              }}
            >
              {ticker}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"][
                  i
                ],
              }}
            >
              {["+8.2%", "+5.1%", "+14.7%", "+3.9%", "+22.1%"][i]}
            </div>
          </div>
        ))}
       </div>*/}
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
    showPointLabels: "none"
  },
  render: args => <div style={{
    display: "flex",
    alignItems: "baseline",
    gap: "var(--gap-3)"
  }}>
      <p style={{
      fontSize: "14px",
      color: "#666"
    }}>Revenue:</p>
      <Trend {...args} />
      <p style={{
      fontWeight: "var(--font-bold)"
    }}>$1.2M</p>
    </div>
}`,...X.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Sliding",
  parameters: {
    layout: "fullscreen"
  },
  render: function Render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [stretch, setStretch] = useState(true);
    const makeSeries = (fn: (i: number) => number, color: string, id: string) => ({
      id,
      label: id.toUpperCase(),
      color,
      data: Array.from({
        length: 60
      }, (_, i) => {
        const val = fn(i);
        return {
          value: Number(val.toFixed(2)),
          label: val.toFixed(2),
          timestamp: now - (59 - i) * day
        };
      }),
      showArea: false,
      strokeWidth: 2
    });
    const seriesA = makeSeries(i => 150 + Math.sin(i / 5) * 15 + Math.random() * 8, "#a855f7", "aapl");
    const seriesB = makeSeries(i => 140 + Math.cos(i / 6) * 12 + Math.random() * 6, "#3b82f6", "googl");
    const domainMin = now - 59 * day;
    const domainMax = now;
    const [window, setWindow] = useState({
      min: domainMin + 1 * day,
      max: domainMax - 1 * day
    });
    const ref = useRef<HTMLDivElement | null>(null);
    const {
      width
    } = useResizeObserver(ref);
    return <div style={{
      width: "100%",
      padding: "var(--gap-4)"
    }}>
        <SlidingWindow id="trend-range-multi" min={domainMin} max={domainMax} valueMin={window.min} valueMax={window.max} onChange={(minVal, maxVal) => setWindow({
        min: minVal,
        max: maxVal
      })} showRuler={false} series={[seriesA, seriesB]} minPoints={6} width={width ?? 0} stretchToFit={stretch}>
          {({
          stretchedSeries
        }) => <>
              <div style={{
            width: "100%",
            background: "#fff",
            padding: "var(--spacing-3)",
            borderRadius: "var(--border-radius)"
          }} ref={ref}>
                <Trend series={stretchedSeries ?? []} width={width} height={160} pointMode="all" trendMode="none" showArea={false} strokeWidth={2} dotRadius={4} visibleStartPercent={0} visibleEndPercent={100} showPointLabels="none" showTooltip />
              </div>
            </>}
        </SlidingWindow>
        {/*<br/>
         <Button isActive={stretch} onClick={() => setStretch((prev) => !prev)}>
          Apply stretch
         </Button>*/}
      </div>;
  }
}`,...$.parameters?.docs?.source}}};const re=[`EmptyState`,`DefaultState`,`TrendVisualization`,`StockPortfolio`,`CompactInline`,`SlidingA`];export{X as CompactInline,q as DefaultState,K as EmptyState,$ as SlidingA,Y as StockPortfolio,J as TrendVisualization,re as __namedExportsOrder,ne as default};