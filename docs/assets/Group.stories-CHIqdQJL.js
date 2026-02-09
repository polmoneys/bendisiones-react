import{$ as e,N as t,m as n}from"./iframe-BlO8GLoW.js";import{c as r,t as i}from"./go-BcwhoqCF.js";import{n as a,t as o}from"./utils-DxWitZhv.js";import{t as s}from"./Group-B5oQ9YRG.js";import{t as c}from"./InputText-CIHi2zdJ.js";import{t as l}from"./Button-CucRfBWn.js";import{t as u}from"./Checkbox-BxotTxOh.js";import{t as d}from"./Shape-LbREaMLI.js";import{t as f}from"./Kiss-DTnccidl.js";import{t as p}from"./Media-vZwFjTDs.js";var m=t(),h=new Map,g=null;function _({sx:e,className:t=``,component:n=`div`,style:r,children:i,...a}){return(0,m.createElement)(n,{className:`${(0,m.useMemo)(()=>{if(!e)return``;let t=ee(e),n=`c-${t}`;if(!h.has(t)&&(h.set(t,e),typeof document<`u`)){let t=v(),r=e.replace(/&/g,`.${n}`),i=t.ownerNode;i.textContent+=`
`+r}return n},[e])} ${t}`.trim(),style:r,...a},i)}function v(){if(g)return g;let e=document.createElement(`style`);return e.setAttribute(`data-container-sx`,`true`),document.head.appendChild(e),g=e.sheet,g}function ee(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}_.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{sx:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},component:{required:!1,tsType:{name:`ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`AriaAttributes`]};var te=[`xs`,`sm`,`md`,`lg`,`xl`];function y(e){let t={},n=``;for(let r of te)e&&e[r]!==void 0&&(n=e[r]),t[r]=n;return t}var b={columns:`_columns_1mk58_1`},x=n();function S(e){let{children:t,gap:n,padding:r,gridTemplateColumns:i={xs:`1fr`},className:s,component:c=`div`,dangerous:l,breakEqualHeight:u,gradient:d,...f}=e,p=(0,m.useMemo)(()=>{let e=y(r),t=y(n),o=y(i),s=y(d),c={"--hug-padding":e.xs,"--hug-padding-sm":e.sm,"--hug-padding-md":e.md,"--hug-padding-lg":e.lg,"--hug-padding-xl":e.xl,"--hug-gap":t.xs,"--hug-gap-sm":t.sm,"--hug-gap-md":t.md,"--hug-gap-lg":t.lg,"--hug-gap-xl":t.xl,"--hug-grid-template-columns":o.xs,"--hug-grid-template-columns-sm":o.sm,"--hug-grid-template-columns-md":o.md,"--hug-grid-template-columns-lg":o.lg,"--hug-grid-template-columns-xl":o.xl,"--hug-gradient":s.xs,"--hug-gradient-sm":s.sm,"--hug-gradient-md":s.md,"--hug-gradient-lg":s.lg,"--hug-gradient-xl":s.xl,...a(u)&&{alignItems:`start`}};return a(l)?{...l,...c,...a(u)&&{alignItems:`start`}}:c},[u,l,n,d,i,r]);return(0,x.jsx)(c,{className:o(b.columns,s),style:p,...f,children:t})}S.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{padding:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`union`,raw:`| 0
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
| "wrap"`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:"`var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string})`"},{name:`literal`,value:"`${string | number} var(--${string}) ${string | number}`"},{name:`literal`,value:"`${number} ${CssVar}`"},{name:`literal`,value:"`${number}${UnitSuffix} ${CssVar}`"},{name:`union`,raw:"`min(${string})` | `max(${string})`",elements:[{name:`literal`,value:"`min(${string})`"},{name:`literal`,value:"`max(${string})`"}]},{name:`literal`,value:"`calc(${string})`"},{name:`intersection`,raw:"`${string}${UnitSuffix}` & `${number}${UnitSuffix}`",elements:[{name:`literal`,value:"`${string}${UnitSuffix}`"},{name:`literal`,value:"`${number}${UnitSuffix}`"}]},{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"wrap"`}]}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gridTemplateColumns:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},gradient:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof BREAKPOINTS)[number]`},{name:`string`}],raw:`Record<Breakpoint, T>`}],raw:`Partial<Record<Breakpoint, T>>`},description:``},component:{required:!1,tsType:{name:`ElementType`},description:``},dangerous:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},breakEqualHeight:{required:!1,tsType:{name:`boolean`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]};var C=(function(){if(typeof Map<`u`)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t?(n=r,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,`size`,{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){t===void 0&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()})(),w=typeof window<`u`&&typeof document<`u`&&window.document===document,T=(function(){return typeof global<`u`&&global.Math===Math?global:typeof self<`u`&&self.Math===Math?self:typeof window<`u`&&window.Math===Math?window:Function(`return this`)()})(),ne=(function(){return typeof requestAnimationFrame==`function`?requestAnimationFrame.bind(T):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),re=2;function ie(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&s()}function o(){ne(a)}function s(){var e=Date.now();if(n){if(e-i<re)return;r=!0}else n=!0,r=!1,setTimeout(o,t);i=e}return s}var ae=20,oe=[`top`,`right`,`bottom`,`left`,`width`,`height`,`size`,`weight`],se=typeof MutationObserver<`u`,ce=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ie(this.refresh.bind(this),ae)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){!w||this.connected_||(document.addEventListener(`transitionend`,this.onTransitionEnd_),window.addEventListener(`resize`,this.refresh),se?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener(`DOMSubtreeModified`,this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!w||!this.connected_||(document.removeEventListener(`transitionend`,this.onTransitionEnd_),window.removeEventListener(`resize`,this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener(`DOMSubtreeModified`,this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=t===void 0?``:t;oe.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||=new e,this.instance_},e.instance_=null,e}(),E=(function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e}),D=(function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||T}),O=M(0,0,0,0);function k(e){return parseFloat(e)||0}function A(e){return[...arguments].slice(1).reduce(function(t,n){var r=e[`border-`+n+`-width`];return t+k(r)},0)}function j(e){for(var t=[`top`,`right`,`bottom`,`left`],n={},r=0,i=t;r<i.length;r++){var a=i[r],o=e[`padding-`+a];n[a]=k(o)}return n}function le(e){var t=e.getBBox();return M(0,0,t.width,t.height)}function ue(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return O;var r=D(e).getComputedStyle(e),i=j(r),a=i.left+i.right,o=i.top+i.bottom,s=k(r.width),c=k(r.height);if(r.boxSizing===`border-box`&&(Math.round(s+a)!==t&&(s-=A(r,`left`,`right`)+a),Math.round(c+o)!==n&&(c-=A(r,`top`,`bottom`)+o)),!fe(e)){var l=Math.round(s+a)-t,u=Math.round(c+o)-n;Math.abs(l)!==1&&(s-=l),Math.abs(u)!==1&&(c-=u)}return M(i.left,i.top,s,c)}var de=(function(){return typeof SVGGraphicsElement<`u`?function(e){return e instanceof D(e).SVGGraphicsElement}:function(e){return e instanceof D(e).SVGElement&&typeof e.getBBox==`function`}})();function fe(e){return e===D(e).document.documentElement}function pe(e){return w?de(e)?le(e):ue(e):O}function me(e){var t=e.x,n=e.y,r=e.width,i=e.height,a=typeof DOMRectReadOnly<`u`?DOMRectReadOnly:Object,o=Object.create(a.prototype);return E(o,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),o}function M(e,t,n,r){return{x:e,y:t,width:n,height:r}}var N=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=M(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=pe(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),P=function(){function e(e,t){var n=me(t);E(this,{target:e,contentRect:n})}return e}(),F=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new C,typeof e!=`function`)throw TypeError(`The callback provided as parameter 1 is not a function.`);this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof D(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)||(t.set(e,new N(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);if(!(typeof Element>`u`||!(Element instanceof Object))){if(!(e instanceof D(e).Element))throw TypeError(`parameter 1 is not of type "Element".`);var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new P(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),I=typeof WeakMap<`u`?new WeakMap:new C,L=function(){function e(t){if(!(this instanceof e))throw TypeError(`Cannot call a class as a function.`);if(!arguments.length)throw TypeError(`1 argument required, but only 0 present.`);var n=new F(t,ce.getInstance(),this);I.set(this,n)}return e}();[`observe`,`unobserve`,`disconnect`].forEach(function(e){L.prototype[e]=function(){var t;return(t=I.get(this))[e].apply(t,arguments)}});var R=(function(){return T.ResizeObserver===void 0?L:T.ResizeObserver})();function he(e){let[t,n]=(0,m.useState)({width:void 0,height:void 0});return(0,m.useEffect)(()=>{if(e.current==null)return;let t=new R(e=>{for(let t of e)n({width:t.contentRect.width,height:t.contentRect.height})});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}function z({children:e}){let t=(0,m.useRef)(null),{width:n,height:r}=he(t);return(0,x.jsx)(`div`,{ref:t,children:a(n)&&a(r)&&e({w:n,h:r})})}z.__docgenInfo={description:``,methods:[],displayName:`ContainerSize`,props:{children:{required:!0,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{ w: number; h: number }`,signature:{properties:[{key:`w`,value:{name:`number`,required:!0}},{key:`h`,value:{name:`number`,required:!0}}]}}],raw:`RenderProp<{ w: number; h: number }>`},description:``}}};var ge=e({StoryA:()=>V,StoryAA:()=>W,StoryB:()=>H,StoryC:()=>U,StoryD:()=>K,StoryE:()=>q,StoryF:()=>Y,StoryG:()=>X,StoryH:()=>Z,StoryI:()=>Q,__namedExportsOrder:()=>$,default:()=>B}),B={title:`Dumb/Group`,component:s,parameters:{layout:`centered`},subcomponents:{Kiss:f,Container:_,Grid:S}};const V={name:`A group with Start Slot`,args:{children:`4 SIDES`,dangerous:{alignItems:`center`,gap:`var(--gap-2)`,padding:`var(--gap-1) var(--gap-2)`},startWidth:`42px`,start:(0,x.jsx)(d.Square,{size:42,fill:`var(--neutral)`})},decorators:[e=>(0,x.jsx)(`div`,{className:`group pxy`,children:(0,x.jsx)(e,{})})]},H={name:`A group with End Slot`,args:{children:`May 2026`,endWidth:`42px`,start:(0,x.jsx)(i,{})},decorators:[e=>(0,x.jsx)(`div`,{className:`group pxy`,children:(0,x.jsx)(e,{})})]},U={name:`A group with Start and End Slot`,args:{children:(0,x.jsx)(c,{id:`test`,value:``,onChange:e=>console.log({value:e})}),endWidth:`40px`,startWidth:`69px`,start:(0,x.jsx)(`label`,{htmlFor:`test`,children:`Search`}),end:(0,x.jsx)(l,{isIcon:!0,dangerous:{paddingLeft:`11px`},children:(0,x.jsx)(r,{size:18})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group pxy`,children:(0,x.jsx)(e,{})})]},W={name:`Another group with Start Slot`,args:{dangerous:{gap:`var(--gap-1)`,alignItems:`center`},children:(0,x.jsx)(`label`,{children:`I Agree`}),startWidth:`var(--min-height)`,start:(0,x.jsx)(u,{})},decorators:[e=>(0,x.jsx)(`div`,{className:`group pxy`,children:(0,x.jsx)(e,{})})]};var G=`
  & {
      height:min(690px, 66vh);
      aspect-ratio: 9/16;
  }

  &:not(:has(img)) {
    display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      width: fit-content;
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
`;const K={name:`An sx container as Card`,render:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(_,{sx:G,children:[(0,x.jsx)(`h3`,{className:`clamp`,children:` Card title `}),(0,x.jsx)(`div`,{className:`card-summary`,children:(0,x.jsxs)(`p`,{className:`clamp`,style:{"--clamp-lines":4},children:[`Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever pantecrator gloria at adstra et bellum parabus.`,` `]})}),(0,x.jsx)(l,{end:(0,x.jsx)(r,{}),children:`Click me `})]})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group`,children:(0,x.jsx)(e,{})})]},q={name:`An sx container as Media Card`,render:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(_,{sx:G,children:[(0,x.jsx)(`h3`,{className:`clamp`,children:` Plant Portrait `}),(0,x.jsx)(p,{ratio:`portrait`,alt:`Plant portrait`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group`,children:(0,x.jsx)(e,{})})]};var J=`
  & {
      width:min(690px, 66vw);
      aspect-ratio: 16/9;
  }

  &:not(:has(img)) {
    display:flex;
      flex-direction:column;
      gap:var(--gap-3);
      padding:var(--pxy);

  }
  &:has(img) {
      display: grid;
      grid-template-areas: stack;
  }
  &:has(img) > * {
      grid-area: stack;
  }
  &:has(img) > *:first-child {
      position: relative;
      z-index:var(--z-2);
      padding:var(--pxy);

  }

  & > .card-summary {
      margin-top:auto;
  }

  &:hover {
      background: var(--neutral);
  }

  &:hover > button {
      transform: scale(1.02);
  }
`;const Y={name:`An sx container as Card (landscape)`,render:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(_,{sx:J,children:[(0,x.jsx)(`h3`,{className:`clamp`,children:` Card title `}),(0,x.jsx)(`div`,{className:`card-summary`,children:(0,x.jsxs)(`p`,{className:`clamp`,style:{"--clamp-lines":3},children:[`Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever pantecrator gloria at adstra et bellum parabus.`,` `]})}),(0,x.jsx)(l,{end:(0,x.jsx)(r,{}),children:`Click me `})]})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group`,children:(0,x.jsx)(e,{})})]},X={name:`An sx container as Media Card (landscape)`,render:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(_,{sx:J,children:[(0,x.jsx)(`h3`,{className:`clamp`,children:` Plant Landscape `}),(0,x.jsx)(p,{ratio:`landscape`,alt:`Plant landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group`,children:(0,x.jsx)(e,{})})]},Z={name:`Advanced Grid`,parameters:{layout:`padded`},render:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(S,{padding:{xs:0,sm:`var(--gap-2)`},gap:{xs:`var(--gap-1)`,md:`var(--gap-4)`},gridTemplateColumns:{xs:`1fr`,md:`1fr 1fr`,xl:`1fr 1fr 1fr 1fr`},className:`cover-center`,children:[(0,x.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,x.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,x.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,x.jsx)(p,{ratio:`landscape`,alt:`Plant Landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`})]})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group`,children:(0,x.jsx)(e,{})})]},Q={name:`Container size aware`,parameters:{layout:`padded`},render:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(z,{children:({w:e})=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:e<600?`column`:`row`,placeContent:`center`,placeItems:`center`,padding:`var(--pxy)`},children:[(0,x.jsx)(`p`,{className:`font-xl`,children:` Triangle `}),(0,x.jsx)(d,{})]})})})},decorators:[e=>(0,x.jsx)(`div`,{className:`group`,children:(0,x.jsx)(e,{})})]};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "A group with End Slot",
  args: {
    children: "May 2026",
    endWidth: "42px",
    start: <CalendarIcon />
  },
  decorators: [Story => <div className="group pxy">
        <Story />
      </div>]
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Card",
  render: function Render() {
    return <>
        <Container sx={cardSX}>
          <h3 className="clamp"> Card title </h3>
          <div className="card-summary">
            <p className="clamp" style={{
            "--clamp-lines": 4
          } as CSSProperties}>
              Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever
              pantecrator gloria at adstra et bellum parabus.{" "}
            </p>
          </div>

          <Button end={<NorthStarIcon />}>Click me </Button>
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Media Card",
  render: function Render() {
    return <>
        <Container sx={cardSX}>
          <h3 className="clamp"> Plant Portrait </h3>
          <Media ratio="portrait" alt="Plant portrait" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Card (landscape)",
  render: function Render() {
    return <>
        <Container sx={cardSXLandscape}>
          <h3 className="clamp"> Card title </h3>
          <div className="card-summary">
            <p className="clamp" style={{
            "--clamp-lines": 3
          } as CSSProperties}>
              Card summary, lorem ipsun dolor sit amet indiscliplinctur whatever
              pantecrator gloria at adstra et bellum parabus.{" "}
            </p>
          </div>

          <Button end={<NorthStarIcon />}>Click me </Button>
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "An sx container as Media Card (landscape)",
  render: function Render() {
    return <>
        <Container sx={cardSXLandscape}>
          <h3 className="clamp"> Plant Landscape </h3>
          <Media ratio="landscape" alt="Plant landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Container>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Container size aware",
  parameters: {
    layout: "padded"
  },
  render: function Render() {
    return <>
        <ContainerSize>
          {({
          w
        }) => <div style={{
          display: "flex",
          flexDirection: w < 600 ? "column" : "row",
          placeContent: "center",
          placeItems: "center",
          padding: "var(--pxy)"
        }}>
              <p className="font-xl"> Triangle </p>
              <Shape />
            </div>}
        </ContainerSize>
      </>;
  },
  decorators: [Story => <div className="group">
        <Story />
      </div>]
}`,...Q.parameters?.docs?.source}}};const $=[`StoryA`,`StoryB`,`StoryC`,`StoryAA`,`StoryD`,`StoryE`,`StoryF`,`StoryG`,`StoryH`,`StoryI`];export{H as a,q as c,Z as d,Q as f,W as i,Y as l,ge as n,U as o,$ as p,V as r,K as s,B as t,X as u};