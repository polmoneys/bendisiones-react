import{N as e,m as t}from"./iframe-BPha6Fdp.js";import{o as n}from"./go-C1tlItyX.js";import"./utils-DxWitZhv.js";import"./Ring-B6fn-HMf.js";import{t as r}from"./Button-IdD0amcO.js";var i=e();function a({id:e,anchorName:t,placement:n=`top`,positionArea:r}){let a={popovertarget:e,popoverTarget:e,"aria-describedby":e,style:{"anchor-name":t}},o=(0,i.useMemo)(()=>{let e={"container-type":`anchored`,"position-anchor":t,inset:`auto`,overflow:`visible`,position:`absolute`,zIndex:`var(--z-4)`,positionArea:r,"position-area":r};if(n)switch(n){case`top`:e.bottom=`anchor(top)`,e[`position-try`]=`flip-block`,e[`justify-self`]=`anchor-center`;break;case`bottom`:e.top=`anchor(bottom)`,e[`position-try`]=`flip-block`,e[`justify-self`]=`anchor-center`;break;case`left`:e.right=`anchor(left)`,e[`position-try`]=`flip-inline`,e[`align-self`]=`anchor-center`;break;case`right`:default:e.left=`anchor(right)`,e[`position-try`]=`flip-inline`,e[`align-self`]=`anchor-center`;break}return e},[t,n,r]);return{anchorProps:a,Popover:(0,i.useCallback)(({children:t,className:n,role:r})=>(0,i.createElement)(`div`,{id:e,popover:``,style:o,className:n,role:r,"aria-hidden":!1},t),[e,o])}}var o=t(),s={title:`Smart-ish/useAnchor`,component:e=>(console.log({props:e}),(0,o.jsx)(o.Fragment,{})),parameters:{layout:`centered`,controls:{exclude:[`anchorName`,`id`]}}};const c={name:`Anchors <3`,argTypes:{placement:{control:`select`,options:[`undefined`,`top`,`bottom`,`left`,`right`],description:"Choose placement (or select 'undefined' to let `positionArea` drive placement)."},positionArea:{control:`select`,options:[void 0,`block-start`,`inline-end`,`block-end`,`inline-start`,`block-start center`,`inline-end center`,`block-end center`,`inline-start center`],description:"CSS position-area (e.g. block-start, inline-end, or `<area> center`)"}},args:{placement:`top`,positionArea:void 0,id:`my-tooltip`,anchorName:`--my-tooltip-anchor`},render:function(e){let t=e.placement===`undefined`?void 0:e.placement,i=e.positionArea,{anchorProps:s,Popover:c}=a({id:e.id,anchorName:e.anchorName,placement:t,positionArea:i});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{...s,children:(0,o.jsx)(n,{})}),(0,o.jsxs)(c,{className:`neutral mxy`,role:`dialog`,children:[(0,o.jsx)(`p`,{style:{padding:12},children:`I am a popover.`}),(0,o.jsxs)(`p`,{style:{padding:12},children:[`placement: `,(0,o.jsx)(`strong`,{children:String(t)}),(0,o.jsx)(`br`,{}),`positionArea: `,(0,o.jsx)(`strong`,{children:String(i)})]})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Anchors <3",
  argTypes: {
    // include an explicit "undefined" option so the user can choose it from the select.
    placement: {
      control: "select",
      options: ["undefined", "top", "bottom", "left", "right"],
      description: "Choose placement (or select 'undefined' to let \`positionArea\` drive placement)."
    },
    positionArea: {
      control: "select",
      options: [undefined, "block-start", "inline-end", "block-end", "inline-start", "block-start center", "inline-end center", "block-end center", "inline-start center"],
      description: "CSS position-area (e.g. block-start, inline-end, or \`<area> center\`)"
    }
  },
  args: {
    placement: "top",
    positionArea: undefined,
    id: "my-tooltip",
    anchorName: "--my-tooltip-anchor"
  },
  render: function Render(args) {
    // Map the story control sentinel "undefined" back to real undefined for the hook call.
    const placement = args.placement === "undefined" ? undefined : args.placement;
    const positionArea = args.positionArea;
    const {
      anchorProps,
      Popover
    } = useAnchor({
      id: args.id,
      anchorName: args.anchorName,
      placement,
      positionArea
    });
    return <>
        <Button {...anchorProps}>
          <IconHeartFill />
        </Button>

        <Popover className="neutral mxy" role="dialog">
          <p style={{
          padding: 12
        }}>I am a popover.</p>
          <p style={{
          padding: 12
        }}>
            placement: <strong>{String(placement)}</strong>
            <br />
            positionArea: <strong>{String(positionArea)}</strong>
          </p>
        </Popover>
      </>;
  }
}`,...c.parameters?.docs?.source}}};const l=[`StoryA`];export{c as StoryA,l as __namedExportsOrder,s as default};