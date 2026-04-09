import{N as e,m as t}from"./iframe-DKRbt5eR.js";import{n,r}from"./clamp-C31PoFlp.js";var i=e();function a(e){return typeof e==`number`?e:e.value}function o(e,t){let n=a(e[t]),r=t;for(;r>0&&a(e[r-1])===n;)r--;let i=t;for(;i<e.length-1&&a(e[i+1])===n;)i++;if(r===0||i===e.length-1||t!==Math.floor((r+i)/2))return`none`;let o=a(e[r-1]),s=a(e[i+1]);return n>o&&n>s?`peak`:n<o&&n<s?`valley`:`none`}function s(e,t,n,r,i,s){let c={min:i??1/0,max:s??-1/0,sum:0,count:0},l=e.map(e=>a(e));(i===void 0||s===void 0)&&(c.min=Math.min(...l),c.max=Math.max(...l)),c.sum=l.reduce((e,t)=>e+t,0),c.count=l.length;let u=c.max-c.min||1,d=t/Math.max(l.length-1,1),f=n*.1;return e.map((e,t,i)=>{let s=a(e),l=typeof e==`object`?e.label:void 0,p=typeof e==`object`?e.timestamp:void 0,m=t*d,h=n-((s-c.min)/u*(n-2*f)+f),g=t/Math.max(i.length-1,1)*100,_=`flat`;if(t>0){let e=a(i[t-1]);s>e?_=`up`:s<e&&(_=`down`)}let v=o(i,t);return{x:m,y:h,value:s,index:t,percentile:g,trend:_,isExtremum:v,label:l,timestamp:p,seriesId:r}})}function c(e,t,n){if(e.length===0)return``;let r=e.map((e,t)=>`${t===0?`M`:`L`} ${e.x},${e.y}`).join(` `);if(!t)return r;let i=e[e.length-1],a=e[0];return`${r} L ${i.x},${n} L ${a.x},${n} Z`}var l=t();function u({data:e,series:t,width:n=200,height:r=50,color:o=`#3b82f6`,fillColor:u=`rgba(59, 130, 246, 0.1)`,pointMode:d=`all`,trendMode:f=`none`,showArea:p=!0,strokeWidth:m=2,dotRadius:h=3,showLegend:g=!1,stackedArea:_=!1,visibleStartPercent:v,visibleEndPercent:y,visibleStartTs:b,visibleEndTs:x,upColor:S=`#10b981`,downColor:C=`#ef4444`,flatColor:w=`#94a3b8`,peakColor:T,valleyColor:E,showPointLabels:D=`extrema`}){let O=g?30:0,k=Math.max(20,r-O),A=(0,i.useMemo)(()=>{if(e&&!t)return[{id:`default`,label:void 0,points:s(e,n,k),color:o,fillColor:u,showArea:p,strokeWidth:m}];if(t){let e=t.flatMap(e=>e.data.map(e=>a(e))),r=Math.min(...e),i=Math.max(...e);return t.map(e=>{let t=s(e.data,n,k,e.id,r,i);return{id:e.id,label:e.label,points:t,color:e.color??o,fillColor:e.fillColor??u,showArea:e.showArea??p,strokeWidth:e.strokeWidth??m}})}return[]},[e,t,n,k,o,u,p,m]),j=v===void 0?0:Math.max(0,Math.min(100,v)),M=y===void 0?100:Math.max(0,Math.min(100,y)),N=Math.min(j,M),P=Math.max(j,M),F=(0,i.useMemo)(()=>A.map(e=>{if(b!==void 0&&x!==void 0){let t=Math.min(b,x),n=Math.max(b,x),r=e.points.filter(e=>e.timestamp==null?!0:e.timestamp>=t&&e.timestamp<=n);return{...e,points:r}}if(N===0&&P===100)return e;let t=e.points.filter(e=>e.percentile>=N&&e.percentile<=P);return{...e,points:t}}),[A,b,x,N,P]),I=F.some(e=>e.points&&e.points.length>0);return A.length===0||!I?(0,l.jsx)(`svg`,{width:n,height:r,children:(0,l.jsx)(`text`,{x:n/2,y:r/2,textAnchor:`middle`,fill:`#999`,fontSize:`12`,children:`No data`})}):(0,l.jsx)(`div`,{children:(0,l.jsxs)(`svg`,{width:n,height:r,style:{overflow:`visible`},children:[F.map(e=>{let t=c(e.points,!1,k),n=c(e.points,!0,k),r=e.showArea&&e.points.length>0?[(0,l.jsx)(`path`,{d:n,fill:e.fillColor,stroke:`none`,opacity:_?.6:1},`area-${e.id}`)]:[],i=e.points.length>0?[(0,l.jsx)(`path`,{d:t,fill:`none`,stroke:e.color,strokeWidth:e.strokeWidth,strokeLinecap:`round`,strokeLinejoin:`round`},`line-${e.id}`)]:[],a=d===`none`?[]:e.points.flatMap(t=>{let n=t.isExtremum!==`none`;if(d===`extrema`&&!n)return[];let r=e.color??o,i=T??r,a=E??r,s=S??r,c=C??r,u=w??r,p;p=t.isExtremum===`peak`?i:t.isExtremum===`valley`?a:f===`none`||f===`segments`?r:t.trend===`up`?s:t.trend===`down`?c:u;let m=t.isExtremum===`none`?h:h+1;return[(0,l.jsx)(`circle`,{cx:t.x,cy:t.y,r:m,fill:p,stroke:`white`,strokeWidth:1.25},`dot-${e.id}-${t.index}`)]});return(0,l.jsxs)(`g`,{children:[r,i,f===`segments`||f===`both`?e.points.flatMap((t,n)=>{if(n===0)return[];let r=e.points[n-1],i=e.color??o,a=S??i,s=C??i,c=w??i,u=t.trend===`up`?a:t.trend===`down`?s:c;return[(0,l.jsx)(`line`,{x1:r.x,y1:r.y,x2:t.x,y2:t.y,stroke:u,strokeWidth:Math.max(1,e.strokeWidth+1),opacity:.6,strokeLinecap:`round`},`trend-${e.id}-${n}`)]}):[],a,e.points.flatMap(t=>{if(!t.label||D===`none`||D===`extrema`&&t.isExtremum===`none`)return[];let n=t.isExtremum!==`none`||t.trend===`up`||t.trend===`flat`?-(h+10):h+14,r=t.y+n;return[(0,l.jsx)(`text`,{x:t.x,y:r,fontSize:10,textAnchor:`middle`,style:{paintOrder:`stroke`},stroke:`#fff`,strokeWidth:3,fill:e.color??o,dominantBaseline:`central`,children:t.label},`label-${e.id}-${t.index}`)]})]},e.id)}),g&&(0,l.jsx)(`g`,{transform:`translate(0, ${k+10})`,children:A.flatMap((e,t)=>{if(!e?.label)return[];let n=t*100+10;return[(0,l.jsxs)(`g`,{children:[(0,l.jsx)(`line`,{x1:n,y1:10,x2:n+20,y2:10,stroke:e.color,strokeWidth:2}),(0,l.jsx)(`text`,{x:n+25,y:14,fontSize:`10`,fill:`#666`,children:e?.label??`-`})]},`legend-${e.id}`)]})})]})})}u.__docgenInfo={description:``,methods:[],displayName:`Trend`,props:{data:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`},description:``},series:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Array<Series>`},description:``},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`50`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#3b82f6"`,computed:!1}},fillColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"rgba(59, 130, 246, 0.1)"`,computed:!1}},pointMode:{required:!1,tsType:{name:`union`,raw:`"none" | "all" | "extrema"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"all"`},{name:`literal`,value:`"extrema"`}]},description:``,defaultValue:{value:`"all"`,computed:!1}},trendMode:{required:!1,tsType:{name:`union`,raw:`"none" | "segments" | "dots" | "both"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"segments"`},{name:`literal`,value:`"dots"`},{name:`literal`,value:`"both"`}]},description:``,defaultValue:{value:`"none"`,computed:!1}},showArea:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},dotRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}},showLegend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},stackedArea:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},visibleStartPercent:{required:!1,tsType:{name:`number`},description:``},visibleEndPercent:{required:!1,tsType:{name:`number`},description:``},visibleStartTs:{required:!1,tsType:{name:`number`},description:``},visibleEndTs:{required:!1,tsType:{name:`number`},description:``},upColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#10b981"`,computed:!1}},downColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#ef4444"`,computed:!1}},flatColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#94a3b8"`,computed:!1}},peakColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},valleyColor:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:``},showPointLabels:{required:!1,tsType:{name:`union`,raw:`"none" | "extrema" | "all"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"extrema"`},{name:`literal`,value:`"all"`}]},description:``,defaultValue:{value:`"extrema"`,computed:!1}}}};const d=(e,t,n)=>`repeating-linear-gradient(
    ${n===`x`?`90deg`:`0deg`},
    ${e?.start??`currentColor`},
    ${e?.start??`currentColor`} ${t},
    ${e?.end??`transparent`} ${t},
    ${e?.end??`transparent`} ${Number(t.replace(`%`,``))*2}%)`;var f={range:`_range_3oxkq_1`};function p({min:e,max:t,initialMin:a,initialMax:o,valueMin:s,valueMax:c,onChange:u,id:p,showRuler:m=!1}){let h=s!==void 0&&c!==void 0,[g,_]=(0,i.useState)(()=>n(a??e,e,t)),[v,y]=(0,i.useState)(()=>n(o??t,e,t));(0,i.useEffect)(()=>{h||(_(n(a??e,e,t)),y(n(o??t,e,t)))},[a,o,e,t]);let b=h?n(s,e,t):g,x=h?n(c,e,t):v;function S(r){let i=parseInt(r.target.value,10),a=Number.isNaN(i)?e:n(i,e,t),o=a<x?a:x;h||_(o),u?.(o,x)}function C(i){let a=parseInt(i.target.value,10),o=Number.isNaN(a)?t:n(r(a,e,t),e,t),s=o>b?o:b;h||y(s),u?.(b,s)}let w={"--minVal":b,"--maxVal":x,"--minLimit":e,"--maxLimit":t};return(0,l.jsxs)(l.Fragment,{children:[m?(0,l.jsx)(`div`,{style:{height:`10px`,background:d({start:`transparent`,end:`currentColor`},`2%`,`x`)}}):null,(0,l.jsxs)(`div`,{className:f.range,style:w,children:[(0,l.jsx)(`input`,{type:`range`,id:`${p}-min`,min:e,max:t,step:1,value:b,onChange:S}),(0,l.jsx)(`input`,{type:`range`,id:`${p}-max`,min:e,max:t,step:1,value:x,onChange:C})]})]})}p.__docgenInfo={description:``,methods:[],displayName:`RangeMulti`,props:{min:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:``},showRuler:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},initialMin:{required:!1,tsType:{name:`number`},description:``},initialMax:{required:!1,tsType:{name:`number`},description:``},valueMin:{required:!1,tsType:{name:`number`},description:``},valueMax:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(min: number, max: number) => void`,signature:{arguments:[{type:{name:`number`},name:`min`},{type:{name:`number`},name:`max`}],return:{name:`void`}}},description:``},id:{required:!0,tsType:{name:`string`},description:``}}};function m({id:e,min:t,max:r,valueMin:a,valueMax:o,initialMin:s,initialMax:c,onChange:u,showRuler:d=!1,series:f,data:m,minPoints:h=5,stretchToFit:g=!1,children:_}){let v=(0,i.useMemo)(()=>f&&f.length>0?f:m?[{id:`single`,data:m}]:[],[f,m]),y=(0,i.useMemo)(()=>v.map(e=>e.data.map(e=>typeof e==`object`?e.timestamp??null:null)),[v]),b=(0,i.useMemo)(()=>y.some(e=>e.some(e=>e!=null)),[y]),x=(0,i.useMemo)(()=>{if(!b)return null;let e=1/0,t=-1/0;return v.forEach(n=>n.data.forEach(n=>{typeof n==`object`&&n.timestamp!=null&&(e=Math.min(e,n.timestamp),t=Math.max(t,n.timestamp))})),e===1/0?null:{gMin:e,gMax:t}},[b,v]);function S(e,i){let a=n(e,t,r),o=n(i,t,r);if(a>o&&([a,o]=[o,a]),b&&x){let e=a,t=o;v.forEach(n=>{let r=n.data.map(e=>typeof e==`object`?e.timestamp??null:null).filter(e=>e!=null);if(r.length===0)return;let i=r.findIndex(t=>t>=e);i===-1&&(i=r.length);let a=r.length-1-[...r].reverse().findIndex(e=>e<=t);if(i>a){let n=(e+t)/2,i=0,a=1/0;r.forEach((e,t)=>{let r=Math.abs(e-n);r<a&&(a=r,i=t)});let o=Math.max(0,i-Math.floor(h/2)),s=Math.min(r.length-1,o+h-1);e=r[o],t=r[s];return}let o=a-i+1;if(o>=h)return;let s=h-o,c=Math.floor(s/2),l=s-c,u=Math.max(0,i-c),d=Math.min(r.length-1,a+l);d-u+1<h&&(u===0?d=Math.min(r.length-1,u+h-1):d===r.length-1&&(u=Math.max(0,d-(h-1)))),e=Math.min(e,r[u]),t=Math.max(t,r[d])});let r=x.gMax===x.gMin?0:(e-x.gMin)/(x.gMax-x.gMin)*100,i=x.gMax===x.gMin?100:(t-x.gMin)/(x.gMax-x.gMin)*100;return{startPct:n(r,0,100),endPct:n(i,0,100),valueMin:e,valueMax:t}}let s=r-t||1,c=(a-t)/s*100,l=(o-t)/s*100;c=n(c,0,100),l=n(l,0,100);let u=c,d=l;v.forEach(e=>{let t=Math.max(1,e.data.length),n=Math.round(u/100*(t-1)),r=Math.round(d/100*(t-1)),i=Math.max(0,r-n+1);if(i>=h)return;let a=h-i,o=Math.floor(a/2)/(t-1)*100||0,s=Math.ceil(a/2)/(t-1)*100||0;u=Math.max(0,u-o),d=Math.min(100,d+s)});let f=t+u/100*s,p=t+d/100*s;return{startPct:n(u,0,100),endPct:n(d,0,100),valueMin:f,valueMax:p}}let C=a??s??t,w=o??c??r,{startPct:T,endPct:E,valueMin:D,valueMax:O}=(0,i.useMemo)(()=>S(C,w),[C,w,t,r,JSON.stringify(v),h]),k=(0,i.useMemo)(()=>g?b&&x?v.map(e=>{let t=e.data.filter(e=>typeof e==`number`||e.timestamp==null?!1:e.timestamp>=D&&e.timestamp<=O);if(t.length===0){let t=e.data.map((e,t)=>({p:e,idx:t})).filter(e=>typeof e.p!=`number`&&e.p.timestamp!=null);if(t.length===0)return{...e,data:[]};let n=(D+O)/2,r=t[0],i=Math.abs(r.p.timestamp-n);t.forEach(e=>{let t=Math.abs(e.p.timestamp-n);t<i&&(r=e,i=t)});let a=Math.max(0,r.idx-Math.floor(h/2)),o=e.data.slice(a,a+h);return{...e,data:o}}return{...e,data:t}}):v.map(e=>{let t=Math.max(1,e.data.length),r=Math.round(T/100*(t-1)),i=Math.round(E/100*(t-1)),a=n(Math.min(r,i),0,t-1),o=n(Math.max(r,i),0,t-1),s=a,c=o,l=c-s+1;if(l<h){let e=h-l,r=Math.floor(e/2),i=e-r;s=n(s-r,0,t-1),c=n(c+i,0,t-1),c-s+1<h&&(s===0?c=Math.min(t-1,s+h-1):c===t-1&&(s=Math.max(0,c-(h-1))))}let u=e.data.slice(s,c+1);return{...e,data:u}}):v.map(e=>({...e,data:[...e.data]})),[g,b,x,v,D,O,T,E,h]);function A(e,t){u?.(e,t)}return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(p,{id:e,min:t,max:r,valueMin:a,valueMax:o,initialMin:s,initialMax:c,onChange:A,showRuler:d}),_({visibleStartPercent:Math.max(0,Math.min(100,T)),visibleEndPercent:Math.max(0,Math.min(100,E)),valueMin:D,valueMax:O,stretchedSeries:k})]})}m.__docgenInfo={description:``,methods:[],displayName:`SlidingWindow`,props:{id:{required:!0,tsType:{name:`string`},description:``},min:{required:!0,tsType:{name:`number`},description:``},max:{required:!0,tsType:{name:`number`},description:``},valueMin:{required:!1,tsType:{name:`number`},description:``},valueMax:{required:!1,tsType:{name:`number`},description:``},initialMin:{required:!1,tsType:{name:`number`},description:``},initialMax:{required:!1,tsType:{name:`number`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(min: number, max: number) => void`,signature:{arguments:[{type:{name:`number`},name:`min`},{type:{name:`number`},name:`max`}],return:{name:`void`}}},description:``},showRuler:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},series:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Series[]`},description:``},data:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`DataPoint[]`},description:``},minPoints:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},stretchToFit:{required:!1,tsType:{name:`boolean`},description:`When true the visible subset of each series is sliced and passed
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
  stretchedSeries: Series[];
}) => React.ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  visibleStartPercent: number;
  visibleEndPercent: number;
  valueMin: number;
  valueMax: number;
  /**
   * Always provided. If \`stretchToFit\` is true, this contains the per-series
   * filtered/sliced data corresponding to the visible window. Otherwise it's
   * the original series (shallow-copied).
   */
  stretchedSeries: Series[];
}`,signature:{properties:[{key:`visibleStartPercent`,value:{name:`number`,required:!0}},{key:`visibleEndPercent`,value:{name:`number`,required:!0}},{key:`valueMin`,value:{name:`number`,required:!0}},{key:`valueMax`,value:{name:`number`,required:!0}},{key:`stretchedSeries`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  data: Array<DataPoint>;
  label?: string;
  color?: string;
  fillColor?: string;
  showArea?: boolean;
  strokeWidth?: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`data`,value:{name:`Array`,elements:[{name:`union`,raw:`| number
| { value: number; label?: string; timestamp?: number }`,elements:[{name:`number`},{name:`signature`,type:`object`,raw:`{ value: number; label?: string; timestamp?: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`number`,required:!1}}]}}]}],raw:`Array<DataPoint>`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`color`,value:{name:`string`,required:!1}},{key:`fillColor`,value:{name:`string`,required:!1}},{key:`showArea`,value:{name:`boolean`,required:!1}},{key:`strokeWidth`,value:{name:`number`,required:!1}}]}}],raw:`Series[]`,required:!0},description:`Always provided. If \`stretchToFit\` is true, this contains the per-series
filtered/sliced data corresponding to the visible window. Otherwise it's
the original series (shallow-copied).`}]}},name:`ctx`}],return:{name:`ReactReactNode`,raw:`React.ReactNode`}}},description:``}}};var h={title:`Dumb/Trend`,component:u,parameters:{layout:`centered`},argTypes:{color:{control:`color`},fillColor:{control:`color`},width:{control:{type:`range`,min:100,max:800,step:10}},height:{control:{type:`range`,min:30,max:200,step:10}},strokeWidth:{control:{type:`range`,min:1,max:5,step:.5}},dotRadius:{control:{type:`range`,min:2,max:8,step:1}},pointMode:{control:{type:`radio`},options:[`none`,`all`,`extrema`]},trendMode:{control:{type:`radio`},options:[`none`,`segments`,`dots`,`both`]},upColor:{control:`color`},downColor:{control:`color`},flatColor:{control:`color`},peakColor:{control:`color`},valleyColor:{control:`color`}}};const g={name:`Empty State`,args:{data:[],width:300,height:60,pointMode:`none`,trendMode:`none`},render:e=>(0,l.jsxs)(`div`,{style:{padding:`20px`},children:[(0,l.jsx)(`h3`,{style:{marginBottom:`10px`,fontSize:`14px`,color:`#666`},children:`No Data Available`}),(0,l.jsx)(u,{...e})]})},_={name:`Trend`,args:{data:[50,50,50,52,54,54,54,53,53,55,55,55,53,50,48],width:300,height:60,pointMode:`extrema`,trendMode:`none`},render:e=>(0,l.jsx)(`div`,{style:{padding:`20px`},children:(0,l.jsx)(u,{...e})})},v={name:`Trends`,args:{series:[{id:`aapl`,label:`AAPL`,data:Array.from({length:30},(e,t)=>{let n=150+Math.sin(t/5)*15+Math.random()*8;return{value:Number(n.toFixed(2)),label:n.toFixed(2)}}),color:`#a855f7`,showArea:!1,strokeWidth:2},{id:`googl`,label:`GOOGL`,data:Array.from({length:30},(e,t)=>{let n=140+Math.cos(t/6)*12+Math.random()*6;return{value:Number(n.toFixed(2)),label:n.toFixed(2)}}),color:`#3b82f6`,showArea:!1,strokeWidth:2}],width:300,height:60,pointMode:`all`,trendMode:`none`,showPointLabels:`extrema`},render:e=>(0,l.jsx)(`div`,{style:{padding:`20px`},children:(0,l.jsx)(u,{...e})})},y={name:`Trend Indicators`,args:{data:[50,50,50,52,54,54,54,53,53,55,55,55,53,50,48],pointMode:`extrema`,trendMode:`both`,width:480,height:100,showArea:!1,strokeWidth:2,dotRadius:5,upColor:`var(--positive)`,downColor:`var(--negative)`,flatColor:`var(--neutral)`,peakColor:`yellow`,valleyColor:`black`,showLegend:!0},render:e=>(0,l.jsxs)(`div`,{style:{padding:`20px`},children:[(0,l.jsx)(`h3`,{style:{marginBottom:`10px`,fontSize:`14px`,color:`#666`},children:`Trend Direction Highlighting`}),(0,l.jsx)(u,{...e}),(0,l.jsxs)(`div`,{style:{marginTop:12,display:`flex`,gap:16,alignItems:`center`,fontSize:13},children:[(0,l.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`svg`,{width:`12`,height:`12`,children:(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.upColor})}),` `,`Up`]}),(0,l.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`svg`,{width:`12`,height:`12`,children:(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.downColor})}),` `,`Down`]}),(0,l.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`svg`,{width:`12`,height:`12`,children:(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.flatColor})}),` `,`Flat`]}),(0,l.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`svg`,{width:`12`,height:`12`,children:(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.peakColor})}),` `,`Peak`]}),(0,l.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[(0,l.jsx)(`svg`,{width:`12`,height:`12`,children:(0,l.jsx)(`circle`,{cx:`6`,cy:`6`,r:`6`,fill:e.valleyColor})}),` `,`Valley`]})]})]})},b={name:`Compact Inline`,args:{data:[3,7,4,9,6,11,8,13],width:120,height:30,color:`#06b6d4`,fillColor:`rgba(6, 182, 212, 0.15)`,strokeWidth:2,pointMode:`none`,trendMode:`none`},render:e=>(0,l.jsxs)(`div`,{style:{padding:`20px`,display:`flex`,alignItems:`center`,gap:`15px`},children:[(0,l.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:`Revenue:`}),(0,l.jsx)(u,{...e}),(0,l.jsx)(`span`,{style:{fontSize:`16px`,fontWeight:`bold`},children:`$1.2M`})]})},x={name:`Stock Portfolio (5 Assets)`,args:{series:[{id:`aapl`,label:`AAPL`,data:Array.from({length:30},(e,t)=>150+Math.sin(t/5)*15+Math.random()*8),color:`#a855f7`,showArea:!1,strokeWidth:2},{id:`googl`,label:`GOOGL`,data:Array.from({length:30},(e,t)=>140+Math.cos(t/6)*12+Math.random()*6),color:`#3b82f6`,showArea:!1,strokeWidth:2},{id:`msft`,label:`MSFT`,data:Array.from({length:30},(e,t)=>145+Math.sin(t/4)*10+Math.random()*5),color:`#10b981`,showArea:!1,strokeWidth:2},{id:`amzn`,label:`AMZN`,data:Array.from({length:30},(e,t)=>135+Math.sin(t/7)*18+Math.random()*7),color:`#f59e0b`,showArea:!1,strokeWidth:2},{id:`tsla`,label:`TSLA`,data:Array.from({length:30},(e,t)=>130+Math.sin(t/3)*25+Math.random()*10),color:`#ef4444`,showArea:!1,strokeWidth:2}],width:700,height:160,showLegend:!0,pointMode:`all`,trendMode:`none`},render:e=>(0,l.jsxs)(`div`,{style:{padding:`25px`,background:`#0f172a`,borderRadius:`12px`},children:[(0,l.jsxs)(`div`,{style:{marginBottom:`20px`,display:`flex`,justifyContent:`space-between`,alignItems:`baseline`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{style:{fontSize:`20px`,color:`#fff`,marginBottom:`5px`},children:`Portfolio Performance`}),(0,l.jsx)(`p`,{style:{fontSize:`13px`,color:`#64748b`},children:`Last 30 trading days`})]}),(0,l.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,l.jsx)(`div`,{style:{fontSize:`28px`,color:`#10b981`,fontWeight:`bold`},children:`+12.4%`}),(0,l.jsx)(`div`,{style:{fontSize:`12px`,color:`#64748b`},children:`Total return`})]})]}),(0,l.jsx)(u,{...e}),(0,l.jsx)(`div`,{style:{marginTop:`20px`,display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:`10px`},children:[`AAPL`,`GOOGL`,`MSFT`,`AMZN`,`TSLA`].map((e,t)=>(0,l.jsxs)(`div`,{style:{padding:`10px`,background:`#1e293b`,borderRadius:`6px`,textAlign:`center`},children:[(0,l.jsx)(`div`,{style:{fontSize:`11px`,color:`#94a3b8`,marginBottom:`4px`},children:e}),(0,l.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:`bold`,color:[`#a855f7`,`#3b82f6`,`#10b981`,`#f59e0b`,`#ef4444`][t]},children:[`+8.2%`,`+5.1%`,`+14.7%`,`+3.9%`,`+22.1%`][t]})]},e))})]})};var S=Date.now(),C=1440*60*1e3;const w={name:`Point Labels (extrema by default)`,args:{data:[{value:50},{value:50},{value:50,label:`flat`},{value:52,label:`small up`},{value:54,label:`rally`},{value:54},{value:54},{value:53},{value:53},{value:55,label:`higher`},{value:55},{value:55},{value:53,label:`dip`},{value:50,label:`fall`},{value:48,label:`valley`}],width:480,height:100,pointMode:`all`,trendMode:`both`,showArea:!1,strokeWidth:2,dotRadius:5,showPointLabels:`all`,upColor:`var(--positive)`,downColor:`var(--negative)`,flatColor:`var(--neutral)`,peakColor:`yellow`,valleyColor:`black`},render:e=>(0,l.jsxs)(`div`,{style:{padding:`20px`},children:[(0,l.jsx)(`h3`,{style:{marginBottom:`10px`,fontSize:`14px`,color:`#666`},children:`Labels: extrema shown by default`}),(0,l.jsx)(u,{...e}),(0,l.jsxs)(`p`,{style:{marginTop:12,fontSize:13,color:`#666`},children:[`Toggle `,(0,l.jsx)(`code`,{children:`showPointLabels`}),` in controls to test`,` `,(0,l.jsx)(`code`,{children:`"all"`}),` or `,(0,l.jsx)(`code`,{children:`"none"`}),`.`]})]})},T={name:`Sliding`,render:function(){let[e,t]=(0,i.useState)(!0),n=(e,t,n)=>({id:n,label:n.toUpperCase(),color:t,data:Array.from({length:60},(t,n)=>{let r=e(n);return{value:Number(r.toFixed(2)),label:r.toFixed(2),timestamp:S-(59-n)*C}}),showArea:!1,strokeWidth:2}),r=n(e=>150+Math.sin(e/5)*15+Math.random()*8,`#a855f7`,`aapl`),a=n(e=>140+Math.cos(e/6)*12+Math.random()*6,`#3b82f6`,`googl`),o=S-59*C,s=S,[c,d]=(0,i.useState)({min:o+1*C,max:s-1*C});return(0,l.jsx)(`div`,{style:{padding:20},children:(0,l.jsx)(m,{id:`trend-range-multi`,min:o,max:s,valueMin:c.min,valueMax:c.max,onChange:(e,t)=>d({min:e,max:t}),showRuler:!1,series:[r,a],minPoints:6,stretchToFit:e,children:({stretchedSeries:e})=>(0,l.jsx)(`div`,{style:{background:`#fff`,padding:12,borderRadius:8},children:(0,l.jsx)(u,{series:e??[],width:700,height:160,pointMode:`all`,trendMode:`none`,showArea:!1,strokeWidth:2,dotRadius:4,visibleStartPercent:0,visibleEndPercent:100,showPointLabels:`all`})})})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    pointMode: "extrema",
    trendMode: "none"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <Trend {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Trends",
  args: {
    series: [{
      id: "aapl",
      label: "AAPL",
      data: Array.from({
        length: 30
      }, (_, i) => {
        const v = 150 + Math.sin(i / 5) * 15 + Math.random() * 8;
        return {
          value: Number(v.toFixed(2)),
          label: v.toFixed(2)
        };
      }),
      color: "#a855f7",
      showArea: false,
      strokeWidth: 2
    }, {
      id: "googl",
      label: "GOOGL",
      data: Array.from({
        length: 30
      }, (_, i) => {
        const v = 140 + Math.cos(i / 6) * 12 + Math.random() * 6;
        return {
          value: Number(v.toFixed(2)),
          label: v.toFixed(2)
        };
      }),
      color: "#3b82f6",
      showArea: false,
      strokeWidth: 2
    }],
    width: 300,
    height: 60,
    // show markers for all points so labels align with visible dots
    pointMode: "all",
    trendMode: "none",
    // show labels for every point that has a label (we've added labels for all)
    showPointLabels: "extrema"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <Trend {...args} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Point Labels (extrema by default)",
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
    width: 480,
    height: 100,
    pointMode: "all",
    trendMode: "both",
    showArea: false,
    strokeWidth: 2,
    dotRadius: 5,
    // NOTE: default for showPointLabels is "extrema" — you'll see labels only at extrema
    // You can change this in controls to "all" to show labels for any point that has a label.
    showPointLabels: "all",
    upColor: "var(--positive)",
    downColor: "var(--negative)",
    flatColor: "var(--neutral)",
    peakColor: "yellow",
    valleyColor: "black"
  },
  render: args => <div style={{
    padding: "20px"
  }}>
      <h3 style={{
      marginBottom: "10px",
      fontSize: "14px",
      color: "#666"
    }}>
        Labels: extrema shown by default
      </h3>
      <Trend {...args} />
      <p style={{
      marginTop: 12,
      fontSize: 13,
      color: "#666"
    }}>
        Toggle <code>showPointLabels</code> in controls to test{" "}
        <code>"all"</code> or <code>"none"</code>.
      </p>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Sliding",
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
    return <div style={{
      padding: 20
    }}>
        <SlidingWindow id="trend-range-multi" min={domainMin} max={domainMax} valueMin={window.min} valueMax={window.max} onChange={(minVal, maxVal) => setWindow({
        min: minVal,
        max: maxVal
      })} showRuler={false} series={[seriesA, seriesB]} minPoints={6} stretchToFit={stretch}>
          {({
          stretchedSeries
        }) => <div style={{
          background: "#fff",
          padding: 12,
          borderRadius: 8
        }}>
              <Trend series={stretchedSeries ?? []} width={700} height={160} pointMode="all" trendMode="none" showArea={false} strokeWidth={2} dotRadius={4} visibleStartPercent={0} visibleEndPercent={100} showPointLabels="all" />
            </div>}
        </SlidingWindow>
        {/*<br/>
         <Button isActive={stretch} onClick={() => setStretch((prev) => !prev)}>
          Apply stretch
         </Button>*/}
      </div>;
  }
}`,...T.parameters?.docs?.source}}};const E=[`EmptyState`,`DefaultState`,`DefaultState2`,`TrendVisualization`,`CompactInline`,`StockPortfolio`,`PointLabels`,`SlidingA`];export{b as CompactInline,_ as DefaultState,v as DefaultState2,g as EmptyState,w as PointLabels,T as SlidingA,x as StockPortfolio,y as TrendVisualization,E as __namedExportsOrder,h as default};