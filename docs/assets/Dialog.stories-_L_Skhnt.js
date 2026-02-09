import{N as e,a as t,c as n,d as r,et as i,f as a,i as o,l as s,m as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./iframe-BlO8GLoW.js";import{t as h}from"./react-dom-CexUNGNa.js";import{d as g}from"./go-BcwhoqCF.js";import{n as _,t as v}from"./utils-DxWitZhv.js";import"./Ring-DhlcaxDt.js";import{n as y}from"./FocusScope-Bi6g2Qvn.js";import{t as b}from"./useKeyboard-TAsiIjZd.js";import{t as x}from"./Button-CucRfBWn.js";import{n as S}from"./Flex-BsyJIGxv.js";import{t as C}from"./Shape-LbREaMLI.js";var w=i(h(),1),T=e(),E={dialog:`_dialog_16rcq_1`,overlay:`_overlay_16rcq_15`,content:`_content_16rcq_31`,tray:`_tray_16rcq_35`,isOpen:`_isOpen_16rcq_54`,sheet:`_sheet_16rcq_58`,sentinel:`_sentinel_16rcq_92`},D=c();function O({onClose:e,children:t,isOpen:n,...r}){let i=(0,T.useRef)(null),{keyboardProps:a}=b({onKeyDown:t=>{t.key===`Escape`&&n&&(t.preventDefault(),e())}});return n?w.createPortal((0,D.jsx)(`div`,{...r,ref:i,className:v(r.className,E.dialog),tabIndex:-1,role:`dialog`,"aria-modal":`true`,...a,children:(0,D.jsx)(y,{contain:!0,restoreFocus:!0,autoFocus:!0,children:t})}),document.body):null}var k=Object.assign(O,{Actions:({children:e,className:t,dangerous:n})=>(0,D.jsx)(`footer`,{...t!==void 0&&{className:t},..._(n)&&{style:n},children:e}),Title:({children:e,className:t,dangerous:n})=>(0,D.jsx)(`header`,{...t!==void 0&&{className:t},..._(n)&&{style:n},children:e}),Content:({children:e,className:t,dangerous:n})=>(0,D.jsx)(`div`,{className:v(E.content,t),..._(n)&&{style:n},children:e})});function A({isOpen:e,onClose:t,trigger:n,unTrigger:r,children:i,className:a}){let o=(0,T.useRef)(null),s=(0,T.useRef)(null),c=(0,T.useRef)(null),l=(0,T.useCallback)(()=>{t()},[t]);(0,T.useEffect)(()=>{e?c.current?.scrollIntoView({behavior:`smooth`}):s.current?.scrollIntoView({behavior:`smooth`})},[e]);let{keyboardProps:u}=b({onKeyDown:n=>{(n.key===`Escape`||n.key===`C`)&&e&&(n.preventDefault(),t())}});return(0,D.jsxs)(D.Fragment,{children:[n?.({isOpen:e}),(0,D.jsxs)(`div`,{ref:o,className:v(E.sheet,a),"data-open":e?`true`:`false`,"aria-hidden":!e,...u,children:[(0,D.jsx)(`div`,{ref:s,className:E.sentinel}),(0,D.jsx)(`menu`,{ref:c,className:E.menu,"aria-label":`Actions`,children:i}),(0,D.jsx)(`menu`,{className:E.menu,children:r({isOpen:e,onClose:l})})]})]})}A.__docgenInfo={description:``,methods:[],displayName:`ActionSheet`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},trigger:{required:!1,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{
    isOpen: boolean;
}`,signature:{properties:[{key:`isOpen`,value:{name:`boolean`,required:!0}}]}}],raw:`RenderProp<{
    isOpen: boolean;
}>`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},unTrigger:{required:!0,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{
    isOpen: boolean;
    onClose: () => void;
}`,signature:{properties:[{key:`isOpen`,value:{name:`boolean`,required:!0}},{key:`onClose`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],raw:`RenderProp<{
    isOpen: boolean;
    onClose: () => void;
}>`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}};function j(){let[e,t]=(0,T.useState)(()=>M());return(0,T.useEffect)(()=>{let e=()=>t(M());return visualViewport?visualViewport.addEventListener(`resize`,e):window.addEventListener(`resize`,e),()=>{visualViewport?visualViewport.removeEventListener(`resize`,e):window.removeEventListener(`resize`,e)}},[]),e}function M(){return{width:window?.visualViewport?.width??window?.innerWidth,height:window?.visualViewport?.height??window?.innerHeight}}var N=i(h(),1);function P({children:e,onClose:t,isOpen:n,...r}){let i=(0,T.useRef)(null),{keyboardProps:a}=b({onKeyDown:e=>{e.key===`Escape`&&n&&(e.preventDefault(),t())}}),o=j(),[s,c]=(0,T.useState)(o.height),l=(0,T.useRef)(null);(0,T.useEffect)(()=>(l.current!==null&&(clearTimeout(l.current),l.current=null),c(e=>o.height<e&&o.height<window.innerHeight?(l.current=window.setTimeout(()=>{c(o.height),l.current=null},500),e):o.height),()=>{l.current!==null&&(clearTimeout(l.current),l.current=null)}),[o.height]);let u={"--tray-min-height":`${s}px`};return n?N.createPortal((0,D.jsx)(`div`,{className:E.overlay,children:(0,D.jsx)(`div`,{...a,...r,ref:i,className:v(E.tray,E.isOpen),tabIndex:-1,role:`dialog`,"aria-modal":`true`,style:u,children:(0,D.jsx)(y,{contain:!0,restoreFocus:!0,autoFocus:!0,children:e})})}),document.body):null}function F(e,t,n){try{return e(t)}catch(e){return a("[nuqs] Error while parsing value `%s`: %O"+(n?" (for key `%s`)":``),t,e,n),null}}function I(e){function t(t){if(t===void 0)return null;let n=``;if(Array.isArray(t)){if(t[0]===void 0)return null;n=t[0]}return typeof t==`string`&&(n=t),F(e.parse,n)}return{type:`single`,eq:(e,t)=>e===t,...e,parseServerSide:t,withDefault(e){return{...this,defaultValue:e,parseServerSide(n){return t(n)??e}}},withOptions(e){return{...this,...e}}}}var L=I({parse:e=>e,serialize:String});I({parse:e=>{let t=parseInt(e);return t==t?t:null},serialize:e=>``+Math.round(e)}),I({parse:e=>{let t=parseInt(e);return t==t?t-1:null},serialize:e=>``+Math.round(e+1)}),I({parse:e=>{let t=parseInt(e,16);return t==t?t:null},serialize:e=>{let t=Math.round(e).toString(16);return(t.length&1?`0`:``)+t}}),I({parse:e=>{let t=parseFloat(e);return t==t?t:null},serialize:String}),I({parse:e=>e.toLowerCase()===`true`,serialize:String});function R(e,t){return e.valueOf()===t.valueOf()}I({parse:e=>{let t=parseInt(e);return t==t?new Date(t):null},serialize:e=>``+e.valueOf(),eq:R}),I({parse:e=>{let t=new Date(e);return t.valueOf()==t.valueOf()?t:null},serialize:e=>e.toISOString(),eq:R}),I({parse:e=>{let t=new Date(e.slice(0,10));return t.valueOf()==t.valueOf()?t:null},serialize:e=>e.toISOString().slice(0,10),eq:R});function z(e){return I({parse:t=>{let n=t;return e.includes(n)?n:null},serialize:String})}function B(e,t=`,`){let n=e.eq??((e,t)=>e===t),r=encodeURIComponent(t);return I({parse:n=>n===``?[]:n.split(t).map((n,i)=>F(e.parse,n.replaceAll(r,t),`[${i}]`)).filter(e=>e!=null),serialize:n=>n.map(n=>(e.serialize?e.serialize(n):String(n)).replaceAll(t,r)).join(t),eq(e,t){return e===t?!0:e.length===t.length?e.every((e,r)=>n(e,t[r])):!1}})}var V=l(),H={};function U(e,i={}){let a=(0,T.useId)(),c=m(),l=r(),{history:u=`replace`,scroll:p=c?.scroll??!1,shallow:h=c?.shallow??!0,throttleMs:g=o.timeMs,limitUrlUpdates:_=c?.limitUrlUpdates,clearOnDefault:v=c?.clearOnDefault??!0,startTransition:y,urlKeys:b=H}=i,x=Object.keys(e).join(`,`),S=(0,T.useMemo)(()=>Object.fromEntries(Object.keys(e).map(e=>[e,b[e]??e])),[x,JSON.stringify(b)]),C=s(Object.values(S)),w=C.searchParams,E=(0,T.useRef)({}),D=(0,T.useMemo)(()=>Object.fromEntries(Object.keys(e).map(t=>[t,e[t].defaultValue??null])),[Object.values(e).map(({defaultValue:e})=>e).join(`,`)]),O=d.useQueuedQueries(Object.values(S)),[k,A]=(0,T.useState)(()=>W(e,b,w??new URLSearchParams,O).state),j=(0,T.useRef)(k);if(f("[nuq+ %s `%s`] render - state: %O, iSP: %s",a,x,k,w),Object.keys(E.current).join(`&`)!==Object.values(S).join(`&`)){let{state:t,hasChanged:n}=W(e,b,w,O,E.current,j.current);n&&(f("[nuq+ %s `%s`] State changed: %O",a,x,{state:t,initialSearchParams:w,queuedQueries:O,queryRef:E.current,stateRef:j.current}),j.current=t,A(t)),E.current=Object.fromEntries(Object.entries(S).map(([t,n])=>[n,e[t]?.type===`multi`?w?.getAll(n):w?.get(n)??null]))}(0,T.useEffect)(()=>{let{state:t,hasChanged:n}=W(e,b,w,O,E.current,j.current);n&&(f("[nuq+ %s `%s`] State changed: %O",a,x,{state:t,initialSearchParams:w,queuedQueries:O,queryRef:E.current,stateRef:j.current}),j.current=t,A(t))},[Object.values(S).map(e=>`${e}=${w?.getAll(e)}`).join(`&`),JSON.stringify(O)]),(0,T.useEffect)(()=>{let t=Object.keys(e).reduce((t,n)=>(t[n]=({state:t,query:r})=>{A(i=>{let{defaultValue:o}=e[n],s=S[n],c=t??o??null,l=i[n]??o??null;return Object.is(l,c)?(f("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). no change, skipping, resolved: %O",a,x,s,t,o,j.current),i):(j.current={...j.current,[n]:c},E.current[s]=r,f("[nuq+ %s `%s`] Cross-hook key sync %s: %O (default: %O). updateInternalState, resolved: %O",a,x,s,t,o,j.current),j.current)})},t),{});for(let n of Object.keys(e)){let e=S[n];f("[nuq+ %s `%s`] Subscribing to sync for `%s`",a,e,x),V.on(e,t[n])}return()=>{for(let n of Object.keys(e)){let e=S[n];f("[nuq+ %s `%s`] Unsubscribing to sync for `%s`",a,e,x),V.off(e,t[n])}}},[x,S]);let M=(0,T.useCallback)((r,i={})=>{let s=Object.fromEntries(Object.keys(e).map(e=>[e,null])),c=typeof r==`function`?r(G(j.current,D))??s:r??s;f("[nuq+ %s `%s`] setState: %O",a,x,c);let m,b=0,w=!1,T=[];for(let[r,a]of Object.entries(c)){let s=e[r],c=S[r];if(!s||a===void 0)continue;(i.clearOnDefault??s.clearOnDefault??v)&&a!==null&&s.defaultValue!==void 0&&(s.eq??((e,t)=>e===t))(a,s.defaultValue)&&(a=null);let f=a===null?null:(s.serialize??String)(a);V.emit(c,{state:a,query:f});let x={key:c,query:f,options:{history:i.history??s.history??u,shallow:i.shallow??s.shallow??h,scroll:i.scroll??s.scroll??p,startTransition:i.startTransition??s.startTransition??y}};if(i?.limitUrlUpdates?.method===`debounce`||_?.method===`debounce`||s.limitUrlUpdates?.method===`debounce`){x.options.shallow===!0&&console.warn(n(422));let e=i?.limitUrlUpdates?.timeMs??_?.timeMs??s.limitUrlUpdates?.timeMs??o.timeMs,t=d.push(x,e,C,l);b<e&&(m=t,b=e)}else{let e=i?.limitUrlUpdates?.timeMs??s?.limitUrlUpdates?.timeMs??_?.timeMs??i.throttleMs??s.throttleMs??g;T.push(d.abort(c)),t.push(x,e),w=!0}}let E=T.reduce((e,t)=>t(e),w?t.flush(C,l):t.getPendingPromise(C));return m??E},[x,u,h,p,g,_?.method,_?.timeMs,y,S,C.updateUrl,C.getSearchParamsSnapshot,C.rateLimitFactor,l,D]);return[(0,T.useMemo)(()=>G(k,D),[k,D]),M]}function W(e,t,n,r,i,a){let o=!1,s=Object.entries(e).reduce((e,[s,c])=>{let l=t?.[s]??s,d=r[l],f=c.type===`multi`?[]:null,m=d===void 0?(c.type===`multi`?n?.getAll(l):n?.get(l))??f:d;return i&&a&&p(i[l]??f,m)?(e[s]=a[s]??null,e):(o=!0,e[s]=(u(m)?null:F(c.parse,m,l))??null,i&&(i[l]=m),e)},{});if(!o){let t=Object.keys(e),n=Object.keys(a??{});o=t.length!==n.length||t.some(e=>!n.includes(e))}return{state:s,hasChanged:o}}function G(e,t){return Object.fromEntries(Object.keys(e).map(n=>[n,e[n]??t[n]??null]))}function K(e,t={}){let{parse:n,type:r,serialize:i,eq:a,defaultValue:o,...s}=t,[{[e]:c},l]=U({[e]:{parse:n??(e=>e),type:r,serialize:i,eq:a,defaultValue:o}},s);return[c,(0,T.useCallback)((t,n={})=>l(n=>({[e]:typeof t==`function`?t(n[e]):t}),n),[e,l])]}var q=[`dialog`,`tray`,`sheet`],J=[`cart`],Y=[...q,...J];function X(){let[e,t]=K(`dialogs`,z(Y)),n=()=>t(Y[0]),r=()=>t(Y[1]),i=()=>t(Y[2]),a=()=>t(J[0]),o=()=>t(null),[s,c]=K(`selection`,B(L)),l=(0,T.useCallback)(e=>c(t=>{let n=t??[];return n.includes(e)?n:[...n,e]}),[c]),u=(0,T.useCallback)(e=>c(t=>(t??[]).filter(t=>t!==e)),[c]);return{onClose:o,dialogs:e,onOpenSheet:i,onOpenTray:r,onOpenDialog:n,onOpenCart:a,selection:s,toggleSelection:(0,T.useCallback)(e=>c(t=>{let n=t??[];return n.includes(e)?n.filter(t=>t!==e):[...n,e]}),[c]),addToSelection:l,removeFromSelection:u,clearSelection:(0,T.useCallback)(()=>c(null),[c])}}var ee={title:`Smart-ish/Intrusive`,component:k,parameters:{layout:`centered`},subcomponents:{Dialog:k,Tray:P,ActionSheet:A}};const Z={args:{isOpen:!1,onClose:()=>({})},name:`Dialog`,render:function(){let{onOpenDialog:e,dialogs:t,onClose:n}=X();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x,{onClick:()=>e(),children:`Dialog `}),(0,D.jsxs)(k,{isOpen:t===`dialog`,onClose:()=>n(),children:[(0,D.jsxs)(k.Title,{dangerous:{display:`flex`,alignItems:`center`,minHeight:`var(--min-height)`,padding:`0 var(--gap-2) 0 var(--gap-3)`},children:[(0,D.jsx)(`p`,{children:`Lorem ipsun dolor`}),(0,D.jsx)(x,{isIcon:!0,className:`ml-a`,onClick:()=>n(),isText:!0,children:(0,D.jsx)(g,{size:36})})]}),(0,D.jsx)(k.Content,{dangerous:{placeContent:`center`,textAlign:`center`},children:(0,D.jsx)(C.Triangle,{size:50})}),(0,D.jsx)(k.Actions,{dangerous:{display:`flex`,alignItems:`center`,minHeight:`var(--min-height)`,justifyContent:`flex-end`,padding:`var(--gap-2) var(--gap-4) var(--gap-2)`},children:(0,D.jsx)(x,{onClick:()=>n(),children:`Close`})})]})]})}},Q={args:{isOpen:!1,onClose:()=>({})},name:`ActionSheet`,render:function(){let{onOpenSheet:e,dialogs:t,onClose:n}=X();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(S,{style:{flexWrap:`wrap`,gap:`var(--gap-1)`},children:(0,D.jsxs)(A,{trigger:({isOpen:t})=>(0,D.jsx)(x,{type:`button`,onClick:()=>e(),"aria-expanded":t,children:`Action sheet`}),unTrigger:({onClose:e})=>(0,D.jsx)(x,{type:`reset`,onClick:e,children:`Cancel`}),isOpen:t===`sheet`,onClose:()=>n(),children:[(0,D.jsx)(x,{onClick:e=>e.preventDefault(),children:`Action 1`}),(0,D.jsx)(x,{onClick:e=>e.preventDefault(),children:`Action 2`}),(0,D.jsx)(x,{onClick:e=>e.preventDefault(),children:`Action 3`})]})})})}},$={args:{isOpen:!1,onClose:()=>({})},name:`Tray `,render:function(){let{onOpenTray:e,dialogs:t,onClose:n}=X();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x,{onClick:()=>e(),children:`Tray `}),(0,D.jsxs)(P,{isOpen:t===`tray`,onClose:n,children:[(0,D.jsx)(k.Title,{dangerous:{display:`flex`,alignItems:`center`,minHeight:`var(--min-height)`,padding:`0 var(--gap-2) 0 var(--gap-3)`},children:(0,D.jsx)(`p`,{children:`Lorem ipsun dolor`})}),(0,D.jsx)(k.Content,{dangerous:{placeContent:`center`,textAlign:`center`},children:(0,D.jsx)(C.Square,{size:50})}),(0,D.jsx)(k.Actions,{className:`mt-a`,dangerous:{display:`flex`,alignItems:`center`,justifyContent:`center`,marginBottom:`var(--gap-2)`},children:(0,D.jsx)(x,{isIcon:!0,isText:!0,onClick:n,children:(0,D.jsx)(g,{size:64})})})]})]})}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
        <Button onClick={() => onOpenDialog()}>Dialog </Button>

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
        <Row style={{
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
        </Row>
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
          justifyContent: "center",
          marginBottom: "var(--gap-2)"
        }}>
            <Button isIcon isText onClick={onClose}
          // onClick={callAll(onClose, onClose2)}
          >
              <IconX size={64} />
            </Button>
          </Dialog.Actions>
        </Tray>
      </>;
  }
}`,...$.parameters?.docs?.source}}};const te=[`StoryA`,`StoryB`,`StoryC`];export{Z as StoryA,Q as StoryB,$ as StoryC,te as __namedExportsOrder,ee as default};