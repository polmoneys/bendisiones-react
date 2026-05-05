import{N as e,m as t}from"./iframe-Mz_QU2m_.js";import{c as n,o as r,t as i}from"./go-CuiDf3lA.js";import{n as a,t as o}from"./utils-DxWitZhv.js";import{t as s}from"./index.module-D24upBnk.js";import{t as c}from"./Group-t0XA1leu.js";import{t as l}from"./Ring-Di3_q9Dg.js";import{t as u}from"./Button-C4tCrkTm.js";import{n as d,t as f}from"./InputText-AEWD0zE8.js";import{n as p}from"./Flex-BenJeyI0.js";import{t as m}from"./Checkbox--dbtsld1.js";import{t as h}from"./Shape-Bu2-5wWV.js";import{t as ee}from"./Kiss-CH_wAGYo.js";import{t as g}from"./Media-CRCfLcAF.js";var _=e(),v=new Map,y=null;function b({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,_.createElement)(n,{className:`${(0,_.useMemo)(()=>{if(!e)return``;let t=ne(e),n=`c-${t}`;if(!v.has(t)&&(v.set(t,e),typeof document<`u`)){let t=te(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function te(){if(y)return y;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),y=e.sheet,y}function ne(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}b.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var re=[`xs`,`sm`,`md`,`lg`,`xl`];function x(e){let t={},n=``;for(let r of re)e&&e[r]!==void 0&&(n=e[r]),t[r]=n;return t}var ie={columns:`_columns_1mk58_1`},S=t();function C(e){let{children:t,gap:n,padding:r,gridTemplateColumns:i={xs:`1fr`},className:s,component:c=`div`,dangerous:l,breakEqualHeight:u,gradient:d,...f}=e,p=(0,_.useMemo)(()=>{let e=x(r),t=x(n),o=x(i),s=x(d),c={"--hug-padding":e.xs,"--hug-padding-sm":e.sm,"--hug-padding-md":e.md,"--hug-padding-lg":e.lg,"--hug-padding-xl":e.xl,"--hug-gap":t.xs,"--hug-gap-sm":t.sm,"--hug-gap-md":t.md,"--hug-gap-lg":t.lg,"--hug-gap-xl":t.xl,"--hug-grid-template-columns":o.xs,"--hug-grid-template-columns-sm":o.sm,"--hug-grid-template-columns-md":o.md,"--hug-grid-template-columns-lg":o.lg,"--hug-grid-template-columns-xl":o.xl,"--hug-gradient":s.xs,"--hug-gradient-sm":s.sm,"--hug-gradient-md":s.md,"--hug-gradient-lg":s.lg,"--hug-gradient-xl":s.xl,...a(u)&&{alignItems:`start`}};return a(l)?{...l,...c,...a(u)&&{alignItems:`start`}}:c},[u,l,n,d,i,r]);return(0,S.jsx)(c,{className:o(ie.columns,s),style:p,...f,children:t})}C.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{padding:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
| CssVar
| CssVar2
| CssVar3
| NumericVar
| StringVar
| MinMax
| Calc
| WithSuffix
| "start"
| "center"
| "end"
| "fit-content"
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gap:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
| CssVar
| CssVar2
| CssVar3
| NumericVar
| StringVar
| MinMax
| Calc
| WithSuffix
| "start"
| "center"
| "end"
| "fit-content"
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gridTemplateColumns:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gradient:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},component:{required:!1,tsType:{name:`ElementType`},description:``},dangerous:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},breakEqualHeight:{required:!1,tsType:{name:`boolean`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]};function w({input:e}){let t=typeof e==`string`;return(0,S.jsx)(`div`,{className:o(s.tokens),style:{whiteSpace:`pre-wrap`},children:t?e:e.map((e,t)=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{className:o(s.token),"data-token-index":`token-${t}`,style:{fontWeight:`var(--font-bold)`},children:e.who}),(0,S.jsx)(`span`,{className:o(s.token),"data-token-index":`token-${t}`,style:{textDecoration:`underline`},children:e.what})]},t))})}w.__docgenInfo={description:``,methods:[],displayName:`HighlightedText`,props:{input:{required:!0,tsType:{name:`union`,raw:`OwnershipMatches | string`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  who: string;
  what: string;
}`,signature:{properties:[{key:`who`,value:{name:`string`,required:!0}},{key:`what`,value:{name:`string`,required:!0}}]}}],raw:`Array<OwnershipMatch>`},{name:`string`}]},description:``}}};var T=(function(){if(typeof Map<`u`)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t?(n=r,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,`size`,{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){t===void 0&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()})(),E=typeof window<`u`&&typeof document<`u`&&window.document===document,D=(function(){return typeof global<`u`&&global.Math===Math?global:typeof self<`u`&&self.Math===Math?self:typeof window<`u`&&window.Math===Math?window:Function(`return this`)()})(),ae=(function(){return typeof requestAnimationFrame==`function`?requestAnimationFrame.bind(D):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),oe=2;function se(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&s()}function o(){ae(a)}function s(){var e=Date.now();if(n){if(e-i<oe)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=e}return s}var ce=20,O=[`top`,`right`,`bottom`,`left`,`width`,`height`,`size`,`weight`],le=typeof MutationObserver<`u`,ue=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=se(this.refresh.bind(this),ce)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){!E||this.connected_||(document.addEventListener(`transitionend`,this.onTransitionEnd_),window.addEventListener(`resize`,this.refresh),le?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener(`DOMSubtreeModified`,this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!E||!this.connected_||(document.removeEventListener(`transitionend`,this.onTransitionEnd_),window.removeEventListener(`resize`,this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener(`DOMSubtreeModified`,this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=t===void 0?``:t;O.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||=new e,this.instance_},e.instance_=null,e}(),k=(function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e}),A=(function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||D}),j=L(0,0,0,0);function M(e){return parseFloat(e)||0}function N(e){return[...arguments].slice(1).reduce(function(t,n){var r=e[`border-`+n+`-width`];return t+M(r)},0)}function de(e){for(var t=[`top`,`right`,`bottom`,`left`],n={},r=0,i=t;r<i.length;r++){var a=i[r],o=e[`padding-`+a];n[a]=M(o)}return n}function fe(e){var t=e.getBBox();return L(0,0,t.width,t.height)}function pe(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return j;var r=A(e).getComputedStyle(e),i=de(r),a=i.left+i.right,o=i.top+i.bottom,s=M(r.width),c=M(r.height);if(r.boxSizing===`border-box`&&(Math.round(s+a)!==t&&(s-=N(r,`left`,`right`)+a),Math.round(c+o)!==n&&(c-=N(r,`top`,`bottom`)+o)),!P(e)){var l=Math.round(s+a)-t,u=Math.round(c+o)-n;Math.abs(l)!==1&&(s-=l),Math.abs(u)!==1&&(c-=u)}return L(i.left,i.top,s,c)}var me=(function(){return typeof SVGGraphicsElement<`u`?function(e){return e instanceof A(e).SVGGraphicsElement}:function(e){return e instanceof A(e).SVGElement&&typeof e.getBBox==`function`}})();function P(e){return e===A(e).document.documentElement}function F(e){return E?me(e)?fe(e):pe(e):j}function I(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=typeof DOMRectReadOnly<`u`?DOMRectReadOnly:Object,o=Object.create(a.prototype);return k(o,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),o}function L(e,t,n,r){return{x:e,y:t,width:n,height:r}}var R=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=L(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=F(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),he=function(){function e(e,t){var n=I(t);k(this,{target:e,contentRect:n})}return e}(),ge=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new T,typeof e!=`function`)throw TypeError(`The callback provided as parameter 1 is not a function.`);this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof A(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)||(t.set(e,new R(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof A(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new he(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),z=typeof WeakMap<`u`?new WeakMap:new T,B=function(){function e(t){if(!(this instanceof e))throw TypeError(`Cannot call a class as a function.`);if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);var n=new ge(t,ue.getInstance(),this);z.set(this,n)}return e}();[`observe`,`unobserve`,`disconnect`].forEach(function(e){B.prototype[e]=function(){var t;return(t=z.get(this))[e].apply(t,arguments)}});var _e=(function(){return D.ResizeObserver===void 0?B:D.ResizeObserver})();function ve(e){let[t,n]=(0,_.useState)({width:void 0,height:void 0});return(0,_.useEffect)(()=>{if(e.current==null)return;let t=new _e(e=>{for(let t of e)n({width:t.contentRect.width,height:t.contentRect.height})});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}function V({children:e}){let t=(0,_.useRef)(null),{width:n,height:r}=ve(t);return(0,S.jsx)(`div`,{ref:t,children:a(n)&&a(r)&&e({w:n,h:r})})}V.__docgenInfo={description:``,methods:[],displayName:`ContainerSize`,props:{children:{required:!0,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{ w: number; h: number }`,signature:{properties:[{key:`w`,value:{name:`number`,required:!0}},{key:`h`,value:{name:`number`,required:!0}}]}}],raw:`RenderProp<{ w: number; h: number }>`},description:``}}};function H(e){let{children:t,over:n,className:r,isInput:i=!1,...a}=e;return(0,S.jsxs)(`div`,{className:o(s.stack,i&&s.input,r),...a,children:[n,t]})}H.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},over:{required:!0,tsType:{name:`ReactNode`},description:``},isInput:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`ComponentProps`]};var U={container:`_container_kmhhj_1`,primary:`_primary_kmhhj_15`,slot:`_slot_kmhhj_28`,fullWidth:`_fullWidth_kmhhj_42`};function ye(e,t,n=12){if(t<=0)return;let r=Math.min(t,n),i=Math.min(e,r-1);return`${n-r+i+1} / span 1`}function W({primary:e,tail:t=[],cols:n,minWidthSlot:r=60}){let i=t.length;return console.log({tailCount:i}),(0,S.jsxs)(`div`,{className:U.container,style:{...n!==void 0&&{"--cols":n},"--tail-count":i,"--min-width-slot":typeof r==`number`?`${r}px`:r},children:[(0,S.jsx)(`div`,{className:U.primary,children:e}),t.map((e,t)=>{let r=ye(t,i,n);return(0,S.jsx)(`div`,{className:U.slot,style:{gridColumn:r},children:e},t)})]})}W.__docgenInfo={description:``,methods:[],displayName:`TailGroup`,props:{primary:{required:!0,tsType:{name:`ReactNode`},description:``},tail:{required:!1,tsType:{name:`Array`,elements:[{name:`ReactNode`}],raw:`ReactNode[]`},description:``,defaultValue:{value:`[]`,computed:!1}},cols:{required:!1,tsType:{name:`number`},description:``},minWidthSlot:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`60`,computed:!1}}}};var G=(0,_.forwardRef)((e,t)=>{let{id:n,className:r,...i}=e;return(0,S.jsx)(l,{isTextInput:!0,children:(0,S.jsx)(`input`,{...i,className:o(d.textInput,r),id:n,name:n,type:`text`,...t!=null&&{ref:t}})})}),be=G;G.__docgenInfo={description:``,methods:[],displayName:`TextInputUncontrolled`};function xe(e){let t=[],n=[];function r(e){return e.split(/\s*(?:and|&|,|or)\s*/i).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.match(/([A-Za-z0-9_-]+)(?:'s)?/);return t?t[1]:null}).filter(Boolean).join(` and `)}function i(e,t){return n.some(({start:n,end:r})=>!(t<=n||e>=r))}let a=[{regex:/\b(\w+):([^\s:@][^\n:@]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,extract:e=>({who:e[1],what:(e[2]||``).trim()})},{regex:/\b((?:\w+(?:'s)?)(?:\s*(?:and|&|,|or)\s*(?:\w+(?:'s)?))+)\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,extract:e=>{let t=e[1],n=(e[2]||``).trim();return!t||!n?null:{who:r(t),what:n}}},{regex:/\b(\w+)'s\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,extract:e=>{let t=e[1],n=(e[2]||``).trim();return!t||!n?null:{who:t,what:n}}},{regex:/@(\w+)\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,extract:e=>({who:e[1],what:(e[2]||``).trim()})},{regex:/\bmy\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,extract:e=>({who:`me`,what:(e[1]||``).trim()})}];for(let{regex:r,extract:o}of a){let a=null;for(r.lastIndex=0;(a=r.exec(e))!==null;){let e=a.index,r=e+a[0].length;if(i(e,r))continue;let s=o(a);s&&s.what&&(t.push(s),n.push({start:e,end:r}))}}return t}var Se={title:`Dumb/Group`,component:c,parameters:{layout:`centered`},subcomponents:{Kiss:ee,Container:b,Grid:C,Stack:H}};const K={name:`A group with Start Slot`,args:{children:`4 SIDES`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},startWidth:`42px`,start:(0,S.jsx)(h.Square,{size:42,fill:`var(--neutral)`})},decorators:[e=>(0,S.jsx)(`div`,{className:`group pxy`,children:(0,S.jsx)(e,{})})]},q={name:`A group with End Slot`,args:{children:`May 2026`,endWidth:`42px`,start:(0,S.jsx)(i,{})},decorators:[e=>(0,S.jsx)(`div`,{className:`group pxy`,children:(0,S.jsx)(e,{})})]},J={name:`A group with Start and End Slot`,args:{children:(0,S.jsx)(f,{id:`test`,value:``,onChange:e=>console.log({value:e})}),endWidth:`40px`,startWidth:`69px`,start:(0,S.jsx)(`label`,{htmlFor:`test`,children:`Search`}),end:(0,S.jsx)(u,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,S.jsx)(r,{size:18})})},decorators:[e=>(0,S.jsx)(`div`,{className:`group pxy`,children:(0,S.jsx)(e,{})})]},Y={name:`Another group with Start Slot`,args:{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},children:(0,S.jsx)(`label`,{children:`I Agree`}),startWidth:`var(--min-height)`,start:(0,S.jsx)(m,{})},decorators:[e=>(0,S.jsx)(`div`,{className:`group pxy`,children:(0,S.jsx)(e,{})})]},X={name:`Advanced Grid`,parameters:{layout:`padded`},render:function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(C,{padding:{xs:0,sm:`var(--gap-2)`},gap:{xs:`var(--gap-1)`,md:`var(--gap-4)`},gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`,xl:`1fr 1fr 1fr 1fr`},className:`cover-center`,children:[(0,S.jsx)(g,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,S.jsx)(g,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,S.jsx)(g,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,S.jsx)(g,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,S.jsx)(`div`,{className:`group`,children:(0,S.jsx)(e,{})})]},Z={name:`Container size aware`,parameters:{layout:`padded`},render:function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(V,{children:({w:e})=>(console.log({w:e}),(0,S.jsx)(`div`,{className:`center`,style:{width:`min(750px, 80vw)`},children:(0,S.jsx)(h,{sides:e>600?5:4,size:e>600?100:void 0,fill:e>600?void 0:`var(--negative)`})}))})})},decorators:[e=>(0,S.jsx)(`div`,{className:`group pxy center`,children:(0,S.jsx)(e,{})})]};var Ce=[`bob:schedule`,`bob:meetings next week`,`bob's birthday`,`bob's and maryam's last reports`,`@bob adidas shoes`,`my adidas shoes`,`bob:schedule alice's report @charlie tasks my notes`];const Q={name:`Stack layers `,parameters:{layout:`padded`},render:function(){let[e,t]=(0,_.useState)(``),[r,i]=(0,_.useState)(!1),a=(0,_.useRef)(0),s=e.length<a.current?e:xe(e);return console.log({input:e,parsed:s}),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(H,{isInput:!0,over:(0,S.jsx)(`div`,{style:{pointerEvents:`none`,color:`var(--negative)`,paddingLeft:`var(--gap-2)`},children:(0,S.jsx)(w,{input:s.length>0?s:e})}),children:(0,S.jsx)(f,{placeholder:`mention people and things`,className:o(!r&&`transparent`),id:`test`,value:e,onChange:e=>t(e),clear:!0})}),(0,S.jsx)(p,{wrap:!0,style:{gap:`var(--gap-3)`,margin:`var(--gap-4) 0`},children:Ce.map((n,r)=>(0,S.jsxs)(u,{onClick:()=>{t(n),a.current=e.length},children:[n,` `]},r))}),(0,S.jsx)(u,{start:(0,S.jsx)(n,{}),isActive:r,onClick:()=>i(e=>!e),children:`Show input layer`})]})}},$={name:`Tail`,parameters:{layout:`padded`},render:function(){return(0,S.jsx)(`div`,{className:`pxy`,children:(0,S.jsx)(W,{primary:(0,S.jsx)(be,{}),tail:[(0,S.jsx)(h.Circle,{size:30}),(0,S.jsx)(h.Square,{size:40}),(0,S.jsx)(h.Triangle,{size:40})]})})}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "A group with Start Slot",
  args: {
    children: "4 SIDES",
    dangerous: {
      alignItems: "center",
      gap: "var(--gap-2)",
      padding: "var(--gap-1) var(--gap-2)"
    },
    startWidth: "42px",
    start: <Shape.Square size={42} fill={"var(--neutral)"} />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "A group with End Slot",
  args: {
    children: "May 2026",
    endWidth: "42px",
    start: <CalendarIcon />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "A group with Start and End Slot",
  args: {
    children: <TextInput id="test" value={""} onChange={value => console.log({
      value
    })} />,
    endWidth: "40px",
    startWidth: "69px",
    start: <label htmlFor="test">Search</label>,
    end: <Button isIcon dangerous={{
      paddingLeft: "11px"
    }}>
        <NorthStarIcon size={18} />
      </Button>
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Another group with Start Slot",
  args: {
    dangerous: {
      gap: "var(--gap-1)",
      alignItems: "center"
    },
    children: <label>I Agree</label>,
    startWidth: "var(--min-height)",
    start: <Checkbox />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Advanced Grid",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    return <>
        <Grid padding={{
        xs: 0,
        sm: "var(--gap-2)"
      }} gap={{
        xs: "var(--gap-1)",
        md: "var(--gap-4)"
      }} gridTemplateColumns={{
        xs: "1fr",
        md: "1fr 1fr",
        xl: "1fr 1fr 1fr 1fr"
      }} className="cover-center">
          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Media ratio="landscape" alt="Plant Landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Grid>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Container size aware",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    return <>
        <ContainerSize>
          {({
          w
        }) => {
          console.log({
            w
          });
          return <div className="center" style={{
            width: "min(750px, 80vw)"
          }}>
                <Shape sides={w > 600 ? 5 : 4} size={w > 600 ? 100 : undefined} fill={w > 600 ? undefined : "var(--negative)"} />
              </div>;
        }}
        </ContainerSize>
      </>;
  },
  decorators: [Story => <div className="group pxy center">
        <Story />
      </div>]
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Stack layers ",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    const [input, onChange] = useState("");
    const [showInput, setShow] = useState(false);
    const prevLengthRef = useRef(0);
    const isDeleting = input.length < prevLengthRef.current;
    const parsed = isDeleting ? input : parseOwnershipPatterns(input);
    console.log({
      input,
      parsed
    });
    return <>
        <Stack isInput over={<div style={{
        pointerEvents: "none",
        color: "var(--negative)",
        paddingLeft: "var(--gap-2)"
      }}>
              <HighlightedText input={parsed.length > 0 ? parsed : input} />
            </div>}>
          <TextInput placeholder="mention people and things" className={clsx(!showInput && "transparent")} id="test" value={input} onChange={v => onChange(v)} clear />
        </Stack>

        <Row wrap style={{
        gap: "var(--gap-3)",
        margin: "var(--gap-4) 0"
      }}>
          {tests.map((t, i) => <Button key={i} onClick={() => {
          onChange(t);
          prevLengthRef.current = input.length;
        }}>
              {t}{" "}
            </Button>)}
        </Row>
        <Button start={<StackIcon />} isActive={showInput} onClick={() => setShow(prev => !prev)}>
          Show input layer
        </Button>
      </>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Tail",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    return <div className="pxy">
        <TailGroup primary={<TextInputUncontrolled />} tail={[<Shape.Circle size={30} />, <Shape.Square size={40} />, <Shape.Triangle size={40} />]} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}};const we=[`StoryA`,`StoryB`,`StoryC`,`StoryD`,`StoryE`,`StoryF`,`StoryG`,`StoryTail`];export{K as StoryA,q as StoryB,J as StoryC,Y as StoryD,X as StoryE,Z as StoryF,Q as StoryG,$ as StoryTail,we as __namedExportsOrder,Se as default};