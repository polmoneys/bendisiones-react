import{N as e,m as t}from"./iframe-DT0Tf3ov.js";import{n,t as r}from"./utils-DxWitZhv.js";import{t as i}from"./Media-CHCZlfuV.js";var a=e(),o={root:`_root_16urk_24`,adapt:`_adapt_16urk_35`,video:`_video_16urk_41`,portrait:`_portrait_16urk_58`,landscape:`_landscape_16urk_67`,square:`_square_16urk_75`,controls:`_controls_16urk_84`,playing:`_playing_16urk_93`,paused:`_paused_16urk_94`,extraControls:`_extraControls_16urk_123`,edgestart:`_edgestart_16urk_126`,edgeend:`_edgeend_16urk_127`,edge:`_edge_16urk_126`,end:`_end_16urk_155`,volume:`_volume_16urk_163`,offscreen:`_offscreen_16urk_216`},s=t();function c(e){let{initial:t=1,min:n=1,max:r=100,onChangeValue:i,...a}=e,c=e=>i(Number(e.target.value));return(0,s.jsx)(`input`,{...a,className:o.volume,type:`range`,min:n,max:r,value:t,onChange:c})}c.__docgenInfo={description:``,methods:[],displayName:`Range`,props:{initial:{required:!0,tsType:{name:`number`},description:``},onChangeValue:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``}},composes:[`ComponentProps`]};function l(e){let{videoRef:t,isPlaying:n,setIsPlaying:i,randomPlay:l,mute:u}=e,[d,f]=(0,a.useState)(1),[p,m]=(0,a.useState)(!1);return t.current===null?null:(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)(`div`,{className:o.controls,children:[(0,s.jsx)(`button`,{className:r(n?o.playing:o.paused),onClick:()=>{let e=t.current;e!=null&&(e.paused?(e.play(),i(!0)):(e.pause(),i(!1)))},children:(0,s.jsx)(`span`,{className:o.offscreen,children:n?`Pause`:`Play`})}),(0,s.jsx)(c,{min:`0`,max:`1`,step:`0.01`,initial:d,onChangeValue:e=>{f(e),t.current!=null&&(t.current.volume=e)}})]}),(0,s.jsxs)(`div`,{className:o.extraControls,children:[l!=null&&(0,a.isValidElement)(l)&&(0,a.cloneElement)(l,{onClick:()=>{let e=t.current;e!=null&&(e.currentTime=Math.random()*e.duration,e.play(),i(!0))}}),u!=null&&(0,a.isValidElement)(u)&&(0,a.cloneElement)(u,{onClick:()=>{let e=t.current;e!=null&&(e.muted=!e.muted,m(e.muted))},isMuted:p})]})]})}l.__docgenInfo={description:``,methods:[],displayName:`Controls`,props:{videoRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`HTMLVideoElement | null`,elements:[{name:`HTMLVideoElement`},{name:`null`}]}],raw:`RefObject<HTMLVideoElement | null>`},description:``},isPlaying:{required:!0,tsType:{name:`boolean`},description:``},setIsPlaying:{required:!0,tsType:{name:`Dispatch`,elements:[{name:`SetStateAction`,elements:[{name:`boolean`}],raw:`SetStateAction<boolean>`}],raw:`Dispatch<SetStateAction<boolean>>`},description:``},randomPlay:{required:!1,tsType:{name:`ReactElement`,elements:[{name:`ComponentProps`,elements:[{name:`literal`,value:`'button'`}],raw:`ComponentProps<'button'>`}],raw:`ReactElement<ComponentProps<'button'>>`},description:``},mute:{required:!1,tsType:{name:`ReactElement`,elements:[{name:`signature`,type:`object`,raw:`{
    isMuted: boolean;
    onClick: () => void;
}`,signature:{properties:[{key:`isMuted`,value:{name:`boolean`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],raw:`ReactElement<{
    isMuted: boolean;
    onClick: () => void;
}>`},description:``}}};function u(e){let{position:t,onMouseDown:n,onMouseUp:i,onTouchEnd:a,onTouchStart:c}=e;return(0,s.jsx)(`div`,{"aria-hidden":`true`,className:r(o[`edge${t}`]),style:{...t===`start`&&{left:0},...t===`end`&&{right:0}},onMouseDown:n,onMouseUp:i,onTouchStart:c,onTouchEnd:a})}u.__docgenInfo={description:``,methods:[],displayName:`Edge`,props:{onMouseDown:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onMouseUp:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onTouchStart:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onTouchEnd:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},position:{required:!0,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:``}}};var d=(0,a.forwardRef)((e,t)=>{let{sources:n,preload:i=`metadata`,controls:a=!1,playsInline:c=!0,onLoad:l,ratio:u=`landscape`,subtitles:d,...f}=e;return(0,s.jsxs)(`video`,{className:r(o.video,o[u]),ref:t,preload:i,controls:a,playsInline:c,onLoadedData:l,...f,children:[Object.keys(n).map(e=>(0,s.jsx)(`source`,{type:`video/${e}`,src:n[e]},e)),d!==void 0&&(0,s.jsx)(`track`,{kind:`subtitles`,src:`./${d}`,srcLang:`en`,label:`English`,default:!0})]})}),f=d;d.__docgenInfo={description:``,methods:[],displayName:`Player`,props:{ratio:{required:!1,tsType:{name:`union`,raw:`"portrait" | "landscape" | "square"`,elements:[{name:`literal`,value:`"portrait"`},{name:`literal`,value:`"landscape"`},{name:`literal`,value:`"square"`}]},description:``},sources:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``},onSeeked:{required:!1,tsType:{name:`VideoHTMLAttributes["onSeeked"]`,raw:`VideoHTMLAttributes<HTMLVideoElement>["onSeeked"]`},description:``},subtitles:{required:!1,tsType:{name:`string`},description:``}},composes:[`DetailedHTMLProps`]};function p(e){let{sources:t,videoOptions:i,width:c,height:d,title:p,subtitles:m,ratio:h=`landscape`,children:g,fitInParent:_}=e,[v,y]=(0,a.useState)(!1),[b,x]=(0,a.useState)(!1),[S,C]=(0,a.useState)(!1),w=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=w.current;if(e==null)return;let t=()=>e.currentTime;return e.addEventListener(`timeupdate`,t),()=>{e.removeEventListener(`timeupdate`,t)}},[]),(0,a.useEffect)(()=>{let e,t=e=>{if(w.current==null)return;let t=w.current.currentTime,n=e===`backward`?t-5:t+5;w.current.currentTime=Math.max(0,Math.min(n,w.current.duration))};return b?e=window.setInterval(()=>{t(`backward`)},500):S?e=window.setInterval(()=>{t(`forward`)},500):e!==void 0&&window.clearInterval(e),()=>{e!==void 0&&window.clearInterval(e)}},[b,S]);let T=e=>e===`backward`?x(!0):C(!0),E=e=>e===`backward`?x(!1):C(!1),D=()=>{w.current!=null&&!w.current.paused&&(w.current.pause(),y(!1))},O=()=>{w.current?.paused!=null&&(w.current.play(),y(!0))},k=e=>{if(e.key===`c`||e.key===`C`){let e=w.current;if(e==null)return;let t=e?.textTracks?.[0];t&&(t.mode=t?.mode===`hidden`?`showing`:`hidden`)}};return(0,a.useEffect)(()=>(window.addEventListener(`keydown`,k),()=>{window.removeEventListener(`keydown`,k)}),[]),(0,s.jsxs)(`div`,{className:r(o.root,_&&o.adapt),children:[(0,s.jsx)(f,{ratio:h,sources:t,...i,ref:w,width:c,height:d,subtitles:m,...p!==void 0&&{"aria-label":p}}),b&&(0,s.jsx)(`div`,{"aria-hidden":`true`,className:o.edge}),(0,s.jsx)(u,{position:`start`,onMouseDown:()=>{T(`backward`)},onMouseUp:()=>{E(`backward`)},onTouchStart:()=>{T(`backward`)},onTouchEnd:()=>{E(`backward`)}}),(0,s.jsx)(u,{position:`end`,onMouseDown:()=>{T(`forward`)},onMouseUp:()=>{E(`forward`)},onTouchStart:()=>{T(`forward`)},onTouchEnd:()=>{E(`forward`)}}),S&&(0,s.jsx)(`div`,{"aria-hidden":`true`,className:r(o.edge,o.end)}),(0,s.jsx)(l,{videoRef:w,isPlaying:v,setIsPlaying:y}),n(g)?g({onBlockMouseEnter:D,onBlockMouseLeave:O}):null]})}var m=Object.assign(p,{VideoIframe:e=>(0,s.jsx)(`iframe`,{src:e.iframeUrl,title:e.title,loading:`lazy`,width:e.width,height:e.height})});p.__docgenInfo={description:``,methods:[],displayName:`VideoPlayer`,props:{ratio:{required:!1,tsType:{name:`union`,raw:`"portrait" | "landscape" | "square"`,elements:[{name:`literal`,value:`"portrait"`},{name:`literal`,value:`"landscape"`},{name:`literal`,value:`"square"`}]},description:``},fitInParent:{required:!1,tsType:{name:`boolean`},description:``},sources:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},description:``},videoOptions:{required:!1,tsType:{name:`DetailedHTMLProps`,elements:[{name:`VideoHTMLAttributes`,elements:[{name:`HTMLVideoElement`}],raw:`VideoHTMLAttributes<HTMLVideoElement>`},{name:`HTMLVideoElement`}],raw:`DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>`},description:``},width:{required:!0,tsType:{name:`string`},description:``},height:{required:!0,tsType:{name:`string`},description:``},subtitles:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},iframeUrl:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`RenderProp`,elements:[{name:`signature`,type:`object`,raw:`{
  onBlockMouseEnter: () => void;
  onBlockMouseLeave: () => void;
}`,signature:{properties:[{key:`onBlockMouseEnter`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`onBlockMouseLeave`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],raw:`RenderProp<{
  onBlockMouseEnter: () => void;
  onBlockMouseLeave: () => void;
}>`},description:``}}};var h={title:`Dumb/Media`,component:i,parameters:{layout:`centered`},subcomponents:{Video:m,Player:f}};const g={args:{alt:``,src:``},name:`Media with aspect ratio`,render:function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{width:`220px`,height:`200px`,ratio:`landscape`,sources:{mp4:`https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`}}),(0,s.jsxs)(`div`,{style:{maxWidth:`min(700px, 80vw)`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--gap-3)`,marginTop:`var(--gap-3)`},children:[(0,s.jsx)(i,{ratio:`portrait`,alt:`Plant portrait`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,s.jsx)(f,{ratio:`portrait`,sources:{mp4:`https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`},controls:!0})]}),(0,s.jsxs)(`div`,{style:{maxWidth:`min(700px, 80vw)`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--gap-3)`,marginTop:`var(--gap-3)`},children:[(0,s.jsx)(i,{ratio:`landscape`,alt:`Plant landscape`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,s.jsx)(f,{ratio:`landscape`,sources:{mp4:`https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`},controls:!0})]}),(0,s.jsxs)(`div`,{style:{maxWidth:`min(700px, 80vw)`,display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--gap-3)`,marginTop:`var(--gap-3)`},children:[(0,s.jsx)(i,{ratio:`square`,alt:`Plant square`,src:`https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}),(0,s.jsx)(f,{ratio:`square`,sources:{mp4:`https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`},controls:!0})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "",
    src: ""
  },
  name: "Media with aspect ratio",
  render: function Render() {
    return <>
        <Video
      // fitInParent
      width="220px" height="200px" ratio="landscape" sources={{
        mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
      }} />

        <div style={{
        maxWidth: "min(700px, 80vw)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-3)",
        marginTop: "var(--gap-3)"
      }}>
          <Media ratio="portrait" alt="Plant portrait" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Player ratio="portrait" sources={{
          mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
        }} controls />
        </div>

        <div style={{
        maxWidth: "min(700px, 80vw)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-3)",
        marginTop: "var(--gap-3)"
      }}>
          <Media ratio="landscape" alt="Plant landscape" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Player ratio="landscape" sources={{
          mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
        }} controls />
        </div>

        <div style={{
        maxWidth: "min(700px, 80vw)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--gap-3)",
        marginTop: "var(--gap-3)"
      }}>
          <Media ratio="square" alt="Plant square" src="https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <Player ratio="square" sources={{
          mp4: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
        }} controls />
        </div>
      </>;
  }
}`,...g.parameters?.docs?.source}}};const _=[`StoryA`];export{g as StoryA,_ as __namedExportsOrder,h as default};