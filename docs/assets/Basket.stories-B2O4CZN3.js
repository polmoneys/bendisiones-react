import{$ as e,C as t,D as n,E as r,N as i,O as a,S as o,T as s,_ as c,b as l,et as u,g as d,h as f,k as p,m,p as h,v as g,w as _,x as v,y}from"./iframe-BlO8GLoW.js";import{d as b,l as x,s as S}from"./go-BcwhoqCF.js";import{t as C}from"./utils-DxWitZhv.js";import{t as w}from"./Toolbar-TPUKS1So.js";import{t as T}from"./Button-CucRfBWn.js";import{n as E,t as D}from"./Flex-BsyJIGxv.js";var O=class extends p{constructor(e,t){super(),this.options=t,this.#e=e,this.#s=null,this.#o=c(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#n=void 0;#r=void 0;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),A(this.#t,this.options)?this.#h():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return j(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return j(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#x(),this.#t.removeObserver(this)}setOptions(e){let n=this.options,r=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!=`boolean`&&typeof this.options.enabled!=`function`&&typeof t(this.options.enabled,this.#t)!=`boolean`)throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);this.#S(),this.#t.setOptions(this.options),n._defaulted&&!s(this.options,n)&&this.#e.getQueryCache().notify({type:`observerOptionsUpdated`,query:this.#t,observer:this});let i=this.hasListeners();i&&M(this.#t,r,this.options,n)&&this.#h(),this.updateResult(),i&&(this.#t!==r||t(this.options.enabled,this.#t)!==t(n.enabled,this.#t)||_(this.options.staleTime,this.#t)!==_(n.staleTime,this.#t))&&this.#g();let a=this.#_();i&&(this.#t!==r||t(this.options.enabled,this.#t)!==t(n.enabled,this.#t)||a!==this.#p)&&this.#v(a)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return ee(this,n)&&(this.#r=n,this.#a=this.options,this.#i=this.#t.state),n}getCurrentResult(){return this.#r}trackResult(e,t){return new Proxy(e,{get:(e,n)=>(this.trackProp(n),t?.(n),n===`promise`&&(this.trackProp(`data`),!this.options.experimental_prefetchInRender&&this.#o.status===`pending`&&this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))),Reflect.get(e,n))})}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#h(e){this.#S();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(v)),t}#g(){this.#b();let e=_(this.options.staleTime,this.#t);if(y||this.#r.isStale||!l(e))return;let t=n(this.#r.dataUpdatedAt,e)+1;this.#d=a.setTimeout(()=>{this.#r.isStale||this.updateResult()},t)}#_(){return(typeof this.options.refetchInterval==`function`?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#v(e){this.#x(),this.#p=e,!(y||t(this.options.enabled,this.#t)===!1||!l(this.#p)||this.#p===0)&&(this.#f=a.setInterval(()=>{(this.options.refetchIntervalInBackground||g.isFocused())&&this.#h()},this.#p))}#y(){this.#g(),this.#v(this.#_())}#b(){this.#d&&=(a.clearTimeout(this.#d),void 0)}#x(){this.#f&&=(a.clearInterval(this.#f),void 0)}createResult(e,n){let r=this.#t,i=this.options,a=this.#r,s=this.#i,l=this.#a,u=e===r?this.#n:e.state,{state:d}=e,p={...d},m=!1,h;if(n._optimisticResults){let t=this.hasListeners(),a=!t&&A(e,n),o=t&&M(e,r,n,i);(a||o)&&(p={...p,...f(d.data,e.options)}),n._optimisticResults===`isRestoring`&&(p.fetchStatus=`idle`)}let{error:g,errorUpdatedAt:_,status:v}=p;h=p.data;let y=!1;if(n.placeholderData!==void 0&&h===void 0&&v===`pending`){let e;a?.isPlaceholderData&&n.placeholderData===l?.placeholderData?(e=a.data,y=!0):e=typeof n.placeholderData==`function`?n.placeholderData(this.#u?.state.data,this.#u):n.placeholderData,e!==void 0&&(v=`success`,h=o(a?.data,e,n),m=!0)}if(n.select&&h!==void 0&&!y)if(a&&h===s?.data&&n.select===this.#c)h=this.#l;else try{this.#c=n.select,h=n.select(h),h=o(a?.data,h,n),this.#l=h,this.#s=null}catch(e){this.#s=e}this.#s&&(g=this.#s,h=this.#l,_=Date.now(),v=`error`);let b=p.fetchStatus===`fetching`,x=v===`pending`,S=v===`error`,C=x&&b,w=h!==void 0,T={status:v,fetchStatus:p.fetchStatus,isPending:x,isSuccess:v===`success`,isError:S,isInitialLoading:C,isLoading:C,data:h,dataUpdatedAt:p.dataUpdatedAt,error:g,errorUpdatedAt:_,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>u.dataUpdateCount||p.errorUpdateCount>u.errorUpdateCount,isFetching:b,isRefetching:b&&!x,isLoadingError:S&&!w,isPaused:p.fetchStatus===`paused`,isPlaceholderData:m,isRefetchError:S&&w,isStale:N(e,n),refetch:this.refetch,promise:this.#o,isEnabled:t(n.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){let t=T.data!==void 0,n=T.status===`error`&&!t,i=e=>{n?e.reject(T.error):t&&e.resolve(T.data)},a=()=>{i(this.#o=T.promise=c())},o=this.#o;switch(o.status){case`pending`:e.queryHash===r.queryHash&&i(o);break;case`fulfilled`:(n||T.data!==o.value)&&a();break;case`rejected`:(!n||T.error!==o.reason)&&a();break}}return T}updateResult(){let e=this.#r,t=this.createResult(this.#t,this.options);this.#i=this.#t.state,this.#a=this.options,this.#i.data!==void 0&&(this.#u=this.#t),!s(t,e)&&(this.#r=t,this.#C({listeners:(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,n=typeof t==`function`?t():t;if(n===`all`||!n&&!this.#m.size)return!0;let r=new Set(n??this.#m);return this.options.throwOnError&&r.add(`error`),Object.keys(this.#r).some(t=>{let n=t;return this.#r[n]!==e[n]&&r.has(n)})})()}))}#S(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;let t=this.#t;this.#t=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#C(e){d.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#r)}),this.#e.getQueryCache().notify({query:this.#t,type:`observerResultsUpdated`})})}};function k(e,n){return t(n.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status===`error`&&n.retryOnMount===!1)}function A(e,t){return k(e,t)||e.state.data!==void 0&&j(e,t,t.refetchOnMount)}function j(e,n,r){if(t(n.enabled,e)!==!1&&_(n.staleTime,e)!==`static`){let t=typeof r==`function`?r(e):r;return t===`always`||t!==!1&&N(e,n)}return!1}function M(e,n,r,i){return(e!==n||t(i.enabled,e)===!1)&&(!r.suspense||e.state.status!==`error`)&&N(e,r)}function N(e,n){return t(n.enabled,e)!==!1&&e.isStaleByTime(_(n.staleTime,e))}function ee(e,t){return!s(e.getCurrentResult(),t)}var P=u(i(),1),F=P.createContext(!1),I=()=>P.useContext(F);F.Provider;var L=m();function te(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var ne=P.createContext(te()),R=()=>P.useContext(ne),z=(e,t,n)=>{let i=n?.state.error&&typeof e.throwOnError==`function`?r(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||i)&&(t.isReset()||(e.retryOnMount=!1))},B=e=>{P.useEffect(()=>{e.clearReset()},[e])},V=({result:e,errorResetBoundary:t,throwOnError:n,query:i,suspense:a})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(a&&e.data===void 0||r(n,[e.error,i])),H=e=>{if(e.suspense){let t=1e3,n=e=>e===`static`?e:Math.max(e??t,t),r=e.staleTime;e.staleTime=typeof r==`function`?(...e)=>n(r(...e)):n(r),typeof e.gcTime==`number`&&(e.gcTime=Math.max(e.gcTime,t))}},U=(e,t)=>e.isLoading&&e.isFetching&&!t,W=(e,t)=>e?.suspense&&t.isPending,G=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function K(e,t,n){let r=I(),i=R(),a=h(n),o=a.defaultQueryOptions(e);a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);let s=a.getQueryCache().get(o.queryHash);o._optimisticResults=r?`isRestoring`:`optimistic`,H(o),z(o,i,s),B(i);let c=!a.getQueryCache().get(o.queryHash),[l]=P.useState(()=>new t(a,o)),u=l.getOptimisticResult(o),f=!r&&e.subscribed!==!1;if(P.useSyncExternalStore(P.useCallback(e=>{let t=f?l.subscribe(d.batchCalls(e)):v;return l.updateResult(),t},[l,f]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),P.useEffect(()=>{l.setOptions(o)},[o,l]),W(o,u))throw G(o,l,i);if(V({result:u,errorResetBoundary:i,throwOnError:o.throwOnError,query:s,suspense:o.suspense}))throw u.error;return a.getDefaultOptions().queries?._experimental_afterQuery?.(o,u),o.experimental_prefetchInRender&&!y&&U(u,r)&&(c?G(o,l,i):s?.promise)?.catch(v).finally(()=>{l.updateResult()}),o.notifyOnChangeProps?u:l.trackResult(u)}function q(e,t){return K(e,O,t)}function J(e,t){let n=h(t),r=n.getQueryCache();return P.useSyncExternalStore(P.useCallback(e=>r.subscribe(d.batchCalls(e)),[r]),()=>n.isFetching(e),()=>n.isFetching(e))}function Y(e){let t=new Set,n=[];for(let r of e)t.has(r)||(t.add(r),n.push(r));return n}function X(e,t){switch(t.type){case`ADD`:return{selected:Y([...e.selected,...t.ids])};case`REMOVE`:return{selected:e.selected.filter(e=>!t.ids.includes(e))};case`TOGGLE`:return e.selected.includes(t.id)?{selected:e.selected.filter(e=>e!==t.id)}:{selected:[...e.selected,t.id]};case`SET`:return{selected:Y(t.ids)};case`CLEAR`:return{selected:[]};default:return e}}function re(e){let t=(0,P.useRef)(new Map),n=(0,P.useRef)(new Map),[r,i]=(0,P.useState)(0);(0,P.useMemo)(()=>{if(e)for(let[t,n]of Object.entries(e))c(t,n)},[]);let[a,o]=(0,P.useReducer)(X,{selected:[]}),s=(0,P.useRef)(new Set);(0,P.useEffect)(()=>{s.current=new Set(a.selected)},[a.selected]);let c=(0,P.useCallback)((e,r)=>{let a=n.current,o=t.current,s=a.get(e)??[];for(let t of r)o.set(t.id,{group:e,item:t}),s.includes(t.id)||s.push(t.id);a.set(e,s),i(e=>e+1)},[]),l=(0,P.useCallback)((e,t)=>{c(e,t)},[c]),u=(0,P.useCallback)(e=>t.current.get(e)?.item,[]),d=(0,P.useCallback)(()=>Array.from(n.current.keys()),[]),f=(0,P.useCallback)(e=>(n.current.get(e)??[]).map(e=>t.current.get(e).item),[]),p=(0,P.useCallback)(e=>o({type:`ADD`,ids:e}),[]),m=(0,P.useCallback)(e=>o({type:`REMOVE`,ids:e}),[]),h=(0,P.useCallback)(e=>o({type:`TOGGLE`,id:e}),[]),g=(0,P.useCallback)(e=>o({type:`SET`,ids:e}),[]),_=(0,P.useCallback)(()=>o({type:`CLEAR`}),[]),v=(0,P.useMemo)(()=>a.selected.map(e=>t.current.get(e)?.item).filter(Boolean),[a.selected,r]),y=(0,P.useMemo)(()=>{let e=new Map;for(let n of a.selected){let r=t.current.get(n);if(!r)continue;let i=e.get(r.group)??[];i.push(r.item),e.set(r.group,i)}return e},[a.selected,r]),b=(0,P.useMemo)(()=>{let e={};for(let[t,r]of n.current.entries())e[t]=0;for(let n of a.selected){let r=t.current.get(n);r&&(e[r.group]=(e[r.group]||0)+1)}return e},[a.selected,r]),x=(0,P.useCallback)(e=>a.selected.map(e=>t.current.get(e)).filter(Boolean).map(t=>e?e(t):{id:t.item.id,group:t.group}),[a.selected]),S=(0,P.useCallback)(e=>s.current.has(e),[]);return{api:{add:p,remove:m,toggle:h,set:g,clear:_,addOptions:l},views:{flattened:v,grouped:y,countsByGroup:b,selectedIds:a.selected},helpers:{getItem:u,availableGroups:d,availableItemsInGroup:f,isSelected:S,export:x}}}function ie({queryKey:e,exactMatch:t=!1}){let n=h(),r=J({queryKey:e,exact:t})>0,i=(0,P.useCallback)(async(r={})=>{await n.invalidateQueries({queryKey:e,exact:t,refetchType:r.refetchActive===!1&&r.refetchInactive===!1?`none`:r.refetchInactive?`all`:`active`})},[n,e,t]),a=(0,P.useCallback)(async()=>{await n.invalidateQueries()},[n]),o=(0,P.useCallback)(t=>{n.setQueryData(e,t)},[n,e]),s=(0,P.useCallback)(t=>{n.setQueryData(e,e=>Array.isArray(e)?[...e,t]:e)},[n,e]),c=(0,P.useCallback)(t=>{n.setQueryData(e,e=>Array.isArray(e)?[t,...e]:e)},[n,e]),l=(0,P.useCallback)(t=>{n.setQueryData(e,e=>Array.isArray(e)?e.filter((e,n)=>!t(e,n)):e)},[n,e]),u=(0,P.useCallback)((t,r)=>{n.setQueryData(e,e=>Array.isArray(e)?e.map((e,n)=>t(e,n)?r(e):e):e)},[n,e]),d=(0,P.useCallback)(()=>n.getQueryData(e),[n,e]),f=(0,P.useCallback)(()=>{n.removeQueries({queryKey:e,exact:t})},[n,e,t]),p=(0,P.useCallback)(async()=>{await n.cancelQueries({queryKey:e,exact:t})},[n,e,t]),m=(0,P.useCallback)(async(r={})=>{await n.refetchQueries({queryKey:e,exact:t,type:r.force?`all`:`active`})},[n,e,t]),g=(0,P.useCallback)(()=>n.getQueryState(e),[n,e]);return(0,P.useMemo)(()=>({isFetching:r,invalidate:i,invalidateAll:a,setData:o,appendData:s,prependData:c,removeDataItem:l,updateDataItem:u,getData:d,removeQueries:f,cancelQueries:p,refetch:m,getQueryState:g}),[r,i,a,o,s,c,l,u,d,f,p,m,g])}var ae=e({StoryA:()=>Q,__namedExportsOrder:()=>$,default:()=>Z}),Z={title:`Smart-ish/Basket`,parameters:{layout:`fullscreen`}},oe=[`people`,`planets`,`starships`];const Q={name:`Basket`,decorators:[e=>(0,L.jsx)(`div`,{className:`pxy`,children:(0,L.jsx)(e,{})})],render:function(){let[e,t]=(0,P.useState)(`people`),[n,r]=(0,P.useState)(null),{api:i,views:a,helpers:o}=re(),{data:s=[],isLoading:c,error:l}=q({queryKey:[`swapi`,e],queryFn:async()=>{let t=await fetch(`https://swapi.dev/api/${e}/`);if(!t.ok)throw Error(`Failed to fetch`);return((await t.json()).results||[]).map((t,n)=>({...t,name:t?.name??`-`,isFavorite:!1,id:`${e}-${n}`}))}});(0,P.useEffect)(()=>{c||s===void 0||n===e||(i.addOptions(e,s),r(e))},[s,c,i,e,n]);let u=e=>{f(e.id),i.toggle(e.id)},d=ie({queryKey:[`swapi`,e]}),f=e=>{console.log({id:e,characterHelpers:d}),d.updateDataItem(t=>t.id===e,e=>({...e,isFavorite:!e.isFavorite}))},p=o.availableGroups(),m=o.availableItemsInGroup(`people`),h=o.availableItemsInGroup(`planets`),g=o.availableItemsInGroup(`starships`);return console.log({availableGroups:p,hasPeople:m,hasPlanets:h,hasStarships:g}),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(w,{label:`pick from resources`,dangerous:{gap:`var(--gap-1)`},children:oe.map(n=>(0,L.jsx)(T,{onClick:()=>t(n),isActive:e===n,children:n.charAt(0).toUpperCase()+n.slice(1)},n))}),(0,L.jsx)(`br`,{}),(0,L.jsxs)(E,{style:{flexWrap:`wrap`,gap:`var(--gap-3)`,minWidth:`100%`},children:[c&&(0,L.jsx)(S,{}),l&&(0,L.jsx)(`p`,{className:`negative`,children:` Error loading items`}),s.length===0&&!c&&(0,L.jsx)(`p`,{children:` No items found`}),s.map((e,t)=>{let n=o.isSelected(e.id)||e.isFavorite;return(0,L.jsxs)(E,{className:C(n&&`positive`),style:{padding:`0 0 0 var(--gap-1)`,backgroundColor:t%2?`#aaa`:`#ccc`,alignItems:`center`},children:[(0,L.jsx)(`p`,{children:e?.name??``}),(0,L.jsx)(T,{onClick:()=>u(e),isActive:n,isIcon:!0,isText:!0,children:n?(0,L.jsx)(b,{size:22}):(0,L.jsx)(x,{size:22})})]},e.id)})]}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`hr`,{}),(0,L.jsx)(`br`,{}),(0,L.jsx)(E,{style:{flexWrap:`wrap`,gap:`var(--gap-3)`},children:a.selectedIds.length===0?(0,L.jsx)(`p`,{children:`No items in the basket`}):a.flattened.map(e=>(0,L.jsxs)(E,{style:{padding:`0 0 0 var(--gap-1)`,backgroundColor:`var(--positive)`,alignItems:`center`},children:[(0,L.jsx)(`p`,{className:`clamp`,style:{"--clamp-lines":1},children:e.name??``}),(0,L.jsx)(T,{isIcon:!0,isText:!0,onClick:()=>i.remove([e.id]),children:(0,L.jsx)(b,{size:22})})]},e.id))}),(0,L.jsx)(`br`,{}),(0,L.jsxs)(E,{style:{gap:`var(--gap-3)`,flexWrap:`wrap`},children:[a.selectedIds.length>0?(0,L.jsxs)(D,{style:{padding:`var(--pxy)`,alignItems:`center`,justifyContent:`center`,aspectRatio:`1/1.1`,flex:`0 0 140px`,backgroundColor:`var(--negative)`},children:[(0,L.jsxs)(`b`,{className:`font-xl`,children:[` `,a.selectedIds.length,` `]}),(0,L.jsx)(`p`,{children:`total`})]}):(0,L.jsx)(L.Fragment,{}),Object.entries(a.countsByGroup).map(([e,t],n)=>t>0?(0,L.jsxs)(D,{style:{padding:`var(--pxy)`,backgroundColor:n%2?`#aaa`:`#ccc`,alignItems:`center`,justifyContent:`center`,aspectRatio:`1/1.1`,flex:`0 0 140px`},children:[(0,L.jsxs)(`b`,{className:`font-xl`,children:[` `,t,` `]}),(0,L.jsx)(`p`,{children:e})]},e):null)]}),(0,L.jsx)(`br`,{}),a.selectedIds.length>0&&(0,L.jsx)(T,{onClick:()=>i.clear(),children:`Clear All`}),(0,L.jsx)(`br`,{})]})}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Basket",
  decorators: [Story => <div className="pxy">
        <Story />
      </div>],
  render: function Render() {
    const [activeResource, setActiveResource] = useState<Resource>("people");
    const [prevResource, setPrevResource] = useState<Resource | null>(null);
    const basket = useBasket();
    const {
      api,
      views,
      helpers
    } = basket;
    const {
      data: items = [],
      isLoading,
      error
    } = useQuery<SwapiItem[], Error>({
      queryKey: ["swapi", activeResource],
      queryFn: async () => {
        const res = await fetch(\`https://swapi.dev/api/\${activeResource}/\`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        return (json.results || []).map((item: Record<string, unknown>, idx: number) => ({
          ...item,
          name: item?.name ?? "-",
          isFavorite: false,
          id: \`\${activeResource}-\${idx}\`
        }));
      }
    });
    useEffect(() => {
      if (isLoading || items === undefined || prevResource === activeResource) return;
      api.addOptions(activeResource, items);
      setPrevResource(activeResource);
    }, [items, isLoading, api, activeResource, prevResource]);
    const onToggleItem = (item: SwapiItem) => {
      onToggleAdded(item.id);
      api.toggle(item.id);
    };
    const characterHelpers = useTanstackQuery({
      queryKey: ["swapi", activeResource]
    });
    const onToggleAdded = (id: string) => {
      console.log({
        id,
        characterHelpers
      });
      characterHelpers.updateDataItem<SwapiItem[]>(char => char.id === id, char => ({
        ...char,
        isFavorite: !char.isFavorite
      }));
    };
    const availableGroups = helpers.availableGroups();
    const hasPeople = helpers.availableItemsInGroup("people");
    const hasPlanets = helpers.availableItemsInGroup("planets");
    const hasStarships = helpers.availableItemsInGroup("starships");
    console.log({
      availableGroups,
      hasPeople,
      hasPlanets,
      hasStarships
    });

    // const payload = helpers.export((rec) => ({
    //     section: rec.group,
    //     columnId: rec.item.id,
    //     label: rec.item.name ?? '',
    // }));
    //
    //

    return <>
        <Toolbar label="pick from resources" dangerous={{
        gap: "var(--gap-1)"
      }}>
          {RESOURCES.map(resource => <Button key={resource} onClick={() => setActiveResource(resource)} isActive={activeResource === resource}>
              {resource.charAt(0).toUpperCase() + resource.slice(1)}
            </Button>)}
        </Toolbar>
        <br />

        <Row style={{
        flexWrap: "wrap",
        gap: "var(--gap-3)",
        minWidth: "100%"
      }}>
          {isLoading && <LoadingIcon />}
          {error && <p className="negative"> Error loading items</p>}
          {items.length === 0 && !isLoading && <p> No items found</p>}

          {items.map((item, index) => {
          const isInBasket = helpers.isSelected(item.id) || item.isFavorite;
          return <Row key={item.id} className={clsx(isInBasket && "positive")} style={{
            padding: "0 0 0 var(--gap-1)",
            backgroundColor: index % 2 ? "#aaa" : "#ccc",
            alignItems: "center"
          }}>
                <p>{item?.name ?? ""}</p>
                <Button onClick={() => onToggleItem(item)} isActive={isInBasket as boolean} isIcon isText>
                  {isInBasket ? <CloseIcon size={22} /> : <AddIcon size={22} />}
                </Button>
              </Row>;
        })}
        </Row>

        <br />
        <hr />
        <br />

        <Row style={{
        flexWrap: "wrap",
        gap: "var(--gap-3)"
      }}>
          {views.selectedIds.length === 0 ? <p>No items in the basket</p> : views.flattened.map(item => <Row key={item.id} style={{
          padding: "0 0 0 var(--gap-1)",
          backgroundColor: "var(--positive)",
          alignItems: "center"
        }}>
                <p className="clamp" style={{
            "--clamp-lines": 1
          } as CSSProperties}>
                  {item.name ?? ""}
                </p>
                <Button isIcon isText onClick={() => api.remove([item.id])}>
                  <CloseIcon size={22} />
                </Button>
              </Row>)}
        </Row>
        <br />

        <Row style={{
        gap: "var(--gap-3)",
        flexWrap: "wrap"
      }}>
          {views.selectedIds.length > 0 ? <Col style={{
          padding: "var(--pxy)",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1/1.1",
          flex: "0 0 140px",
          backgroundColor: "var(--negative)"
        }}>
              <b className="font-xl"> {views.selectedIds.length} </b>
              <p>total</p>
            </Col> : <></>}
          {Object.entries(views.countsByGroup).map(([group, count], index) => count > 0 ? <Col key={group} style={{
          padding: "var(--pxy)",
          backgroundColor: index % 2 ? "#aaa" : "#ccc",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1/1.1",
          flex: "0 0 140px"
        }}>
                <b className="font-xl"> {count} </b>
                <p>{group}</p>
              </Col> : null)}
        </Row>
        <br />

        {views.selectedIds.length > 0 && <Button onClick={() => api.clear()}>Clear All</Button>}
        <br />
      </>;
  }
}`,...Q.parameters?.docs?.source}}};const $=[`StoryA`];export{$ as i,ae as n,Q as r,Z as t};