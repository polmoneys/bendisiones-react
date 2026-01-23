import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-C0VeOmNI.js";import{n as t}from"./lib-CfjRH5Ni.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-C1V1wIbE.js";import"./react-dom-DzN-w94Z.js";import"./chunk-P4F4UVXX-C1tmvBww.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-BKZLhppw.js";import{a as n}from"./blocks-BYQD48SS.js";import"./Button-nCRPUQ3D.js";import"./utils-BaIUY_Nw.js";import"./Group-Mp-4HOUS.js";import"./Ring-C7xf352i.js";import"./FocusScope-BUlRB2Rl.js";import"./utils-DlIjqHGw.js";import{n as r}from"./AutocompLite.stories-DE8FmJmM.js";import"./InputText-6Glrl091.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
`,(0,i.jsxs)(`div`,{id:`body`,children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:`AutocompLite`}),` allows to find `,(0,i.jsx)(a.strong,{children:`multiple key values pretty fast`}),` while presenting the user same multiple key values `,(0,i.jsx)(a.strong,{children:`highlighted`}),` if them are the search query. User can then select one or many...`]}),(0,i.jsxs)(a.p,{children:[`We shall accept any shaped data, given an Array of `,(0,i.jsx)(a.code,{children:`T`}),` we'll use a `,(0,i.jsx)(a.strong,{children:`mapper function`}),` to build the `,(0,i.jsx)(a.strong,{children:`full search option`}),`, as in:`]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`
const PLACES = [
  {
    id: "paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    continent: "Europe",
  },
  //...
];

const mapper = (p: (typeof demoPlaces)[number]): AutocompLiteOption => ({
  id: p.id,
  city: p.city,
  state: p?.state ?? "",
  country: p.country,
  continent: p.continent,
  full: \`\${p.city}\${p.state ? \`, \${p.state}\` : ""}, \${p.country}\`,
});

const {
  selected,
  liveMessage,
  filteredOptions,
  toggleOption,
  query,
  setQuery,
  showPopover,
  setPopover,
} = useAutocomplete({
  thing: PLACES,
  mapper,
  initialQuery: "",
  multi: true,
});

return (
    <AutocompLite
      debug
      placeholder="Search destinations"
      id="destinations-autcompLite"
      toggleOption={toggleOption}
      options={filteredOptions}
      query={query}
      setQuery={setQuery}
      selected={selected}
      onToggle={() => setPopover((prev) => !prev)}
      showPopover={showPopover}
    >
      {({ input }) => {
        return (
          <Group
            start={<label htmlFor="destinations-autcompLite">Go</label>}
            startWidth={"80px"}
            endWidth={"40px"}
            end={
              showPopover ? (
                <IconChevronUp size={28} />
              ) : (
                <IconChevronDown size={28} />
              )
            }
          >
            {input}
          </Group>
        );
      }}
    </AutocompLite>
    )
`})}),(0,i.jsxs)(a.p,{children:[`ps: `,(0,i.jsx)(a.code,{children:`AutcompLite`}),` gives a render function so that you can wrap the Input with whatever you need.`]})]}),`
`,(0,i.jsx)(`style`,{children:`
#body * {
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--font-line-height);
}

img {
  object-fit: cover;
}

`})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}export{o as default};