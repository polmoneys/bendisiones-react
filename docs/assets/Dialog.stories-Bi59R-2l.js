import{R as e,_ as t,a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./iframe-C9B55_jj.js";import{t as h}from"./react-dom-DrjiR3Uf.js";import{c as g}from"./go-BQOk9_eH.js";import{n as _,t as v}from"./utils-BaIUY_Nw.js";import"./Ring-BWt7twYD.js";import{a as y,n as b}from"./FocusScope-CY3r63QR.js";import{t as x}from"./Button-B4rfytHP.js";import{t as S}from"./Shape-D9fkbC_P.js";var C=e(h(),1),w=t(),T={dialog:`_dialog_16rcq_1`,overlay:`_overlay_16rcq_15`,content:`_content_16rcq_31`,tray:`_tray_16rcq_35`,isOpen:`_isOpen_16rcq_54`,sheet:`_sheet_16rcq_58`,sentinel:`_sentinel_16rcq_92`},E=u();function D({onClose:e,children:t,isOpen:n,...r}){let i=(0,w.useRef)(null),{keyboardProps:a}=y({onKeyDown:t=>{t.key===`Escape`&&n&&(t.preventDefault(),e())}});return n?C.createPortal((0,E.jsx)(`div`,{...r,ref:i,className:v(r.className,T.dialog),tabIndex:-1,role:`dialog`,"aria-modal":`true`,...a,children:(0,E.jsx)(b,{contain:!0,restoreFocus:!0,autoFocus:!0,children:t})}),document.body):null}var O=Object.assign(D,{Actions:({children:e,className:t,dangerous:n})=>(0,E.jsx)(`footer`,{...t!==void 0&&{className:t},..._(n)&&{style:n},children:e}),Title:({children:e,className:t,dangerous:n})=>(0,E.jsx)(`header`,{...t!==void 0&&{className:t},..._(n)&&{style:n},children:e}),Content:({children:e,className:t,dangerous:n})=>(0,E.jsx)(`div`,{className:v(T.content,t),..._(n)&&{style:n},children:e})});function k({isOpen:e,onClose:t,trigger:n,unTrigger:r,children:i,className:a}){let o=(0,w.useRef)(null),s=(0,w.useRef)(null),c=(0,w.useRef)(null),l=(0,w.useCallback)(()=>{t()},[t]);(0,w.useEffect)(()=>{e?c.current?.scrollIntoView({behavior:`smooth`}):s.current?.scrollIntoView({behavior:`smooth`})},[e]);let{keyboardProps:u}=y({onKeyDown:n=>{(n.key===`Escape`||n.key===`C`)&&e&&(n.preventDefault(),t())}});return(0,E.jsxs)(E.Fragment,{children:[n?.({isOpen:e}),(0,E.jsxs)(`div`,{ref:o,className:v(T.sheet,a),"data-open":e?`true`:`false`,"aria-hidden":!e,...u,children:[(0,E.jsx)(`div`,{ref:s,className:T.sentinel}),(0,E.jsx)(`menu`,{ref:c,className:T.menu,"aria-label":`Actions`,children:i}),(0,E.jsx)(`menu`,{className:T.menu,children:r({isOpen:e,onClose:l})})]})]})}k.__docgenInfo={description:``,methods:[],displayName:`ActionSheet`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},trigger:{required:!1,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{
    isOpen: boolean;
}`,signature:{properties:[{key:`isOpen`,value:{name:`boolean`,required:!0}}]}}],raw:`RenderProp<{
    isOpen: boolean;
}>`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},unTrigger:{required:!0,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{
    isOpen: boolean;
    onClose: () => void;
}`,signature:{properties:[{key:`isOpen`,value:{name:`boolean`,required:!0}},{key:`onClose`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],raw:`RenderProp<{
    isOpen: boolean;
    onClose: () => void;
}>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};function A(){let[e,t]=(0,w.useState)(()=>j());return(0,w.useEffect)(()=>{let e=()=>t(j());return visualViewport?visualViewport.addEventListener(`resize`,e):window.addEventListener(`resize`,e),()=>{visualViewport?visualViewport.removeEventListener(`resize`,e):window.removeEventListener(`resize`,e)}},[]),e}function j(){return{width:window?.visualViewport?.width??window?.innerWidth,height:window?.visualViewport?.height??window?.innerHeight}}var M=e(h(),1);function N({children:e,onClose:t,isOpen:n,...r}){let i=(0,w.useRef)(null),{keyboardProps:a}=y({onKeyDown:e=>{e.key===`Escape`&&n&&(e.preventDefault(),t())}}),o=A(),[s,c]=(0,w.useState)(o.height),l=(0,w.useRef)(null);(0,w.useEffect)(()=>(l.current!==null&&(clearTimeout(l.current),l.current=null),c(e=>o.height<e&&o.height<window.innerHeight?(l.current=window.setTimeout(()=>{c(o.height),l.current=null},500),e):o.height),()=>{l.current!==null&&(clearTimeout(l.current),l.current=null)}),[o.height]);let u={"--tray-min-height":`${s}px`};return n?M.createPortal((0,E.jsx)(`div`,{className:T.overlay,children:(0,E.jsx)(`div`,{...a,...r,ref:i,className:v(T.tray,T.isOpen),tabIndex:-1,role:`dialog`,"aria-modal":`true`,style:u,children:(0,E.jsx)(b,{contain:!0,restoreFocus:!0,autoFocus:!0,children:e})})}),document.body):null}function P(e,t,n){try{return e(t)}catch(e){return a("[nuqs] Error while parsing value `%s`: %O"+(n?" (for key `%s`)":``),t,e,n),null}}function F(e){function t(t){if(t===void 0)return null;let n=``;if(Array.isArray(t)){if(t[0]===void 0)return null;n=t[0]}return typeof t==`string`&&(n=t),P(e.parse,n)}return{type:`single`,eq:(e,t)=>e===t,...e,parseServerSide:t,withDefault(e){return{...this,defaultValue:e,parseServerSide(n){return t(n)??e}}},withOptions(e){return{...this,...e}}}}var I=F({parse:e=>e,serialize:String});F({parse:e=>{let t=parseInt(e);return t==t?t:null},serialize:e=>``+Math.round(e)}),F({parse:e=>{let t=parseInt(e);return t==t?t-1:null},serialize:e=>``+Math.round(e+1)}),F({parse:e=>{let t=parseInt(e,16);return t==t?t:null},serialize:e=>{let t=Math.round(e).toString(16);return(t.length&1?`0`:``)+t}}),F({parse:e=>{let t=parseFloat(e);return t==t?t:null},serialize:String}),F({parse:e=>e.toLowerCase()===`true`,serialize:String});function L(e,t){return e.valueOf()===t.valueOf()}F({parse:e=>{let t=parseInt(e);return t==t?new Date(t):null},serialize:e=>``+e.valueOf(),eq:L}),F({parse:e=>{let t=new Date(e);return t.valueOf()==t.valueOf()?t:null},serialize:e=>e.toISOString(),eq:L}),F({parse:e=>{let t=new Date(e.slice(0,10));return t.valueOf()==t.valueOf()?t:null},serialize:e=>e.toISOString().slice(0,10),eq:L});function R(e){return F({parse:t=>{let n=t;return e.includes(n)?n:null},serialize:String})}function z(e,t=`,`){let n=e.eq??((e,t)=>e===t),r=encodeURIComponent(t);return F({parse:n=>n===``?[]:n.split(t).map((n,i)=>P(e.parse,n.replaceAll(r,t),`[${i}]`)).filter(e=>e!=null),serialize:n=>n.map(n=>(e.serialize?e.serialize(n):String(n)).replaceAll(t,r)).join(t),eq(e,t){return e===t?!0:e.length===t.length?e.every((e,r)=>n(e,t[r])):!1}})}var B=c(),V={};function H(e,t={}){let a=(0,w.useId)(),c=m(),l=i(),{history:u=`replace`,scroll:p=c?.scroll??!1,shallow:h=c?.shallow??!0,throttleMs:g=o.timeMs,limitUrlUpdates:_=c?.limitUrlUpdates,clearOnDefault:v=c?.clearOnDefault??!0,startTransition:y,urlKeys:b=V}=t,x=Object.keys(e).join(`,`),S=(0,w.useMemo)(()=>Object.fromEntries(Object.keys(e).map(e=>[e,b[e]??e])),[x,JSON.stringify(b)]),C=s(Object.values(S)),T=C.searchParams,E=(0,w.useRef)({}),D=(0,w.useMemo)(()=>Object.fromEntries(Object.keys(e).map(t=>[t,e[t].defaultValue??null])),[Object.values(e).map(({defaultValue:e})=>e).join(`,`)]),O=d.useQueuedQueries(Object.values(S)),[k,A]=(0,w.useState)(()=>U(e,b,T??new URLSearchParams,O).state),j=(0,w.useRef)(k);if(f("[nuq+ %s `%s`] render - state: %O, iSP: %s",a,x,k,T),Object.keys(E.current).join(`&`)!==Object.values(S).join(`&`)){let{state:t,hasChanged:n}=U(e,b,T,O,E.current,j.current);n&&(f("[nuq+ %s `%s`] State changed: %O",a,x,{state:t,initialSearchParams:T,queuedQueries:O,queryRef:E.current,stateRef:j.current}),j.current=t,A(t)),E.current=Object.fromEntries(Object.entries(S).map(([t,n])=>[n,e[t]?.type===`multi`?T?.getAll(n):T?.get(n)??null]))}(0,w.useEffect)(()=>{let{state:t,hasChanged:n}=U(e,b,T,O,E.current,j.current);n&&(f("[nuq+ %s `%s`] State changed: %O",a,x,{state:t,initialSearchParams:T,queuedQueries:O,queryRef:E.current,stateRef:j.current}),j.current=t,A(t))},[Object.values(S).map(e=>`${e}=${T?.getAll(e)}`).join(`&`),JSON.stringify(O)]),(0,w.useEffect)(()=>{let t=Object.keys(e).reduce((t,n)=>(t[n]=({state:t,query:r})=>{A(i=>{let{defaultValue:o}=e[n],s=S[n],c=t??o??null,l=i[n]??o??null;return Object.is(l,c)?(f("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O",a,x,s,t,o,j.current),i):(j.current={...j.current,[n]:c},E.current[s]=r,f("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O",a,x,s,t,o,j.current),j.current)})},t),{});for(let n of Object.keys(e)){let e=S[n];f("[nuq+ %s `%s`] Subscribing to sync for `%s`",a,e,x),B.on(e,t[n])}return()=>{for(let n of Object.keys(e)){let e=S[n];f("[nuq+ %s `%s`] Unsubscribing to sync for `%s`",a,e,x),B.off(e,t[n])}}},[x,S]);let M=(0,w.useCallback)((t,i={})=>{let s=Object.fromEntries(Object.keys(e).map(e=>[e,null])),c=typeof t==`function`?t(W(j.current,D))??s:t??s;f("[nuq+ %s `%s`] setState: %O",a,x,c);let m,b=0,w=!1,T=[];for(let[t,a]of Object.entries(c)){let s=e[t],c=S[t];if(!s||a===void 0)continue;(i.clearOnDefault??s.clearOnDefault??v)&&a!==null&&s.defaultValue!==void 0&&(s.eq??((e,t)=>e===t))(a,s.defaultValue)&&(a=null);let f=a===null?null:(s.serialize??String)(a);B.emit(c,{state:a,query:f});let x={key:c,query:f,options:{history:i.history??s.history??u,shallow:i.shallow??s.shallow??h,scroll:i.scroll??s.scroll??p,startTransition:i.startTransition??s.startTransition??y}};if(i?.limitUrlUpdates?.method===`debounce`||_?.method===`debounce`||s.limitUrlUpdates?.method===`debounce`){x.options.shallow===!0&&console.warn(r(422));let e=i?.limitUrlUpdates?.timeMs??_?.timeMs??s.limitUrlUpdates?.timeMs??o.timeMs,t=d.push(x,e,C,l);b<e&&(m=t,b=e)}else{let e=i?.limitUrlUpdates?.timeMs??s?.limitUrlUpdates?.timeMs??_?.timeMs??i.throttleMs??s.throttleMs??g;T.push(d.abort(c)),n.push(x,e),w=!0}}let E=T.reduce((e,t)=>t(e),w?n.flush(C,l):n.getPendingPromise(C));return m??E},[x,u,h,p,g,_?.method,_?.timeMs,y,S,C.updateUrl,C.getSearchParamsSnapshot,C.rateLimitFactor,l,D]);return[(0,w.useMemo)(()=>W(k,D),[k,D]),M]}function U(e,t,n,r,i,a){let o=!1,s=Object.entries(e).reduce((e,[s,c])=>{let u=t?.[s]??s,d=r[u],f=c.type===`multi`?[]:null,m=d===void 0?(c.type===`multi`?n?.getAll(u):n?.get(u))??f:d;return i&&a&&p(i[u]??f,m)?(e[s]=a[s]??null,e):(o=!0,e[s]=(l(m)?null:P(c.parse,m,u))??null,i&&(i[u]=m),e)},{});if(!o){let t=Object.keys(e),n=Object.keys(a??{});o=t.length!==n.length||t.some(e=>!n.includes(e))}return{state:s,hasChanged:o}}function W(e,t){return Object.fromEntries(Object.keys(e).map(n=>[n,e[n]??t[n]??null]))}function G(e,t={}){let{parse:n,type:r,serialize:i,eq:a,defaultValue:o,...s}=t,[{[e]:c},l]=H({[e]:{parse:n??(e=>e),type:r,serialize:i,eq:a,defaultValue:o}},s);return[c,(0,w.useCallback)((t,n={})=>l(n=>({[e]:typeof t==`function`?t(n[e]):t}),n),[e,l])]}var K=[`dialog`,`tray`,`sheet`],q=[`cart`],J=[...K,...q];function Y(){let[e,t]=G(`dialogs`,R(J)),n=()=>t(J[0]),r=()=>t(J[1]),i=()=>t(J[2]),a=()=>t(q[0]),o=()=>t(null),[s,c]=G(`selection`,z(I)),l=(0,w.useCallback)(e=>c(t=>{let n=t??[];return n.includes(e)?n:[...n,e]}),[c]),u=(0,w.useCallback)(e=>c(t=>(t??[]).filter(t=>t!==e)),[c]);return{onClose:o,dialogs:e,onOpenSheet:i,onOpenTray:r,onOpenDialog:n,onOpenCart:a,selection:s,toggleSelection:(0,w.useCallback)(e=>c(t=>{let n=t??[];return n.includes(e)?n.filter(t=>t!==e):[...n,e]}),[c]),addToSelection:l,removeFromSelection:u,clearSelection:(0,w.useCallback)(()=>c(null),[c])}}var X={title:`Dumb/Intrusive`,component:O,parameters:{layout:`centered`},subcomponents:{Dialog:O,Tray:N,ActionSheet:k}};const Z={args:{isOpen:!1,onClose:()=>({})},name:`Dialog`,render:function(){let{onOpenDialog:e,dialogs:t,onClose:n}=Y();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--gap-1)`},children:(0,E.jsx)(x,{onClick:()=>e(),children:`Dialog `})}),(0,E.jsxs)(O,{isOpen:t===`dialog`,onClose:()=>n(),children:[(0,E.jsxs)(O.Title,{dangerous:{display:`flex`,alignItems:`center`,minHeight:`var(--min-height)`,padding:`0 var(--gap-2) 0 var(--gap-3)`},children:[(0,E.jsx)(`p`,{children:`Lorem ipsun dolor`}),(0,E.jsx)(x,{isIcon:!0,className:`ml-a`,onClick:()=>n(),isText:!0,children:(0,E.jsx)(g,{size:36})})]}),(0,E.jsx)(O.Content,{dangerous:{placeContent:`center`,textAlign:`center`},children:(0,E.jsx)(S.Triangle,{size:50})}),(0,E.jsx)(O.Actions,{dangerous:{display:`flex`,alignItems:`center`,minHeight:`var(--min-height)`,justifyContent:`flex-end`,padding:`var(--gap-2) var(--gap-4) var(--gap-2)`},children:(0,E.jsx)(x,{onClick:()=>n(),children:`Close`})})]})]})}},Q={args:{isOpen:!1,onClose:()=>({})},name:`ActionSheet`,render:function(){let{onOpenSheet:e,dialogs:t,onClose:n}=Y();return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--gap-1)`},children:(0,E.jsxs)(k,{trigger:({isOpen:t})=>(0,E.jsx)(x,{type:`button`,onClick:()=>e(),"aria-expanded":t,children:`Action sheet`}),unTrigger:({onClose:e})=>(0,E.jsx)(x,{type:`reset`,onClick:e,children:`Cancel`}),isOpen:t===`sheet`,onClose:()=>n(),children:[(0,E.jsx)(x,{onClick:e=>e.preventDefault(),children:`Action 1`}),(0,E.jsx)(x,{onClick:e=>e.preventDefault(),children:`Action 2`}),(0,E.jsx)(x,{onClick:e=>e.preventDefault(),children:`Action 3`})]})})})}},$={args:{isOpen:!1,onClose:()=>({})},name:`Tray `,render:function(){let{onOpenTray:e,dialogs:t,onClose:n}=Y();return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--gap-1)`},children:[(0,E.jsx)(x,{onClick:()=>e(),children:`Tray `}),(0,E.jsxs)(N,{isOpen:t===`tray`,onClose:n,children:[(0,E.jsx)(O.Title,{dangerous:{display:`flex`,alignItems:`center`,minHeight:`var(--min-height)`,padding:`0 var(--gap-2) 0 var(--gap-3)`},children:(0,E.jsx)(`p`,{children:`Lorem ipsun dolor`})}),(0,E.jsx)(O.Content,{dangerous:{placeContent:`center`,textAlign:`center`},children:(0,E.jsx)(S.Square,{size:50})}),(0,E.jsx)(O.Actions,{className:`mt-a`,dangerous:{display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,E.jsx)(x,{isText:!0,onClick:n,end:(0,E.jsx)(g,{}),children:`Close`})})]})]})})}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => ({})
  },
  name: "Dialog",
  render: function Render() {
    const {
      onOpenDialog,
      dialogs,
      onClose
    } = useURL();
    const isDialogOpen = dialogs === "dialog";
    return <>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--gap-1)"
      }}>
          <Button onClick={() => onOpenDialog()}>Dialog </Button>
        </div>

        <Dialog isOpen={isDialogOpen} onClose={() => onClose()}>
          <Dialog.Title dangerous={{
          display: "flex",
          alignItems: "center",
          minHeight: "var(--min-height)",
          padding: "0 var(--gap-2) 0 var(--gap-3)"
        }}>
            <p>Lorem ipsun dolor</p>
            <Button isIcon className="ml-a" onClick={() => onClose()} isText>
              <IconX size={36} />
            </Button>
          </Dialog.Title>

          <Dialog.Content dangerous={{
          placeContent: "center",
          textAlign: "center"
        }}>
            <Shape.Triangle size={50} />
          </Dialog.Content>

          <Dialog.Actions dangerous={{
          display: "flex",
          alignItems: "center",
          minHeight: "var(--min-height)",
          justifyContent: "flex-end",
          padding: "var(--gap-2) var(--gap-4) var(--gap-2)"
        }}>
            <Button onClick={() => onClose()}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => ({})
  },
  name: "ActionSheet",
  render: function Render() {
    const {
      onOpenSheet,
      dialogs,
      onClose
    } = useURL();
    const isSheetOpen = dialogs === "sheet";
    return <>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--gap-1)"
      }}>
          <ActionSheet trigger={({
          isOpen
        }) => {
          return <Button type="button" onClick={() => onOpenSheet()} aria-expanded={isOpen}>
                  Action sheet
                </Button>;
        }} unTrigger={({
          onClose: onCloseLocal
        }) => {
          return <Button type="reset" onClick={onCloseLocal}>
                  Cancel
                </Button>;
        }} isOpen={isSheetOpen} onClose={() => onClose()}>
            <Button onClick={event => event.preventDefault()}>
              Action 1
            </Button>
            <Button onClick={event => event.preventDefault()}>
              Action 2
            </Button>
            <Button onClick={event => event.preventDefault()}>
              Action 3
            </Button>
          </ActionSheet>
        </div>
      </>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => ({})
  },
  name: "Tray ",
  render: function Render() {
    const {
      onOpenTray,
      dialogs,
      onClose
    } = useURL();
    const isTrayOpen = dialogs === "tray";
    return <>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--gap-1)"
      }}>
          <Button onClick={() => onOpenTray()}>Tray </Button>
          <Tray isOpen={isTrayOpen} onClose={onClose}
        // isOpen={isTrayOpen || isTrayOpen2}
        // onClose={callAll(onClose, onClose2)}
        >
            <Dialog.Title dangerous={{
            display: "flex",
            alignItems: "center",
            minHeight: "var(--min-height)",
            padding: "0 var(--gap-2) 0 var(--gap-3)"
          }}>
              <p>Lorem ipsun dolor</p>
            </Dialog.Title>

            <Dialog.Content dangerous={{
            placeContent: "center",
            textAlign: "center"
          }}>
              <Shape.Square size={50} />
            </Dialog.Content>

            <Dialog.Actions className="mt-a" dangerous={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
              <Button isText onClick={onClose}
            // onClick={callAll(onClose, onClose2)}
            end={<IconX />}>
                Close
              </Button>
            </Dialog.Actions>
          </Tray>
        </div>
      </>;
  }
}`,...$.parameters?.docs?.source}}};const ee=[`StoryA`,`StoryB`,`StoryC`];export{Z as StoryA,Q as StoryB,$ as StoryC,ee as __namedExportsOrder,X as default};