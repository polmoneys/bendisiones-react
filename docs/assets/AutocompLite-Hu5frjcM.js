import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-gCWp8t-k.js";import{n as t}from"./lib-7K93koj6.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-6sPdivcB.js";import"./react-dom-BcU82sXH.js";import"./chunk-P4F4UVXX-Du5V1YS9.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-Me-yfyO8.js";import{a as n}from"./blocks-D3Dr58gI.js";import"./go-CA7VwBMa.js";import"./utils-BaIUY_Nw.js";import"./Group-BOuee27b.js";import"./Ring-DW1XVr-m.js";import"./FocusScope-I3xf4DBu.js";import"./utils-2z_vx-8Y.js";import{n as r}from"./AutocompLite.stories-Bs9PJY8u.js";import"./InputText-Dc4ghciN.js";import"./Button-C9aYxkCM.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
`,(0,i.jsxs)(`div`,{id:`body`,children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:`AutocompLite`}),` allows to find `,(0,i.jsx)(a.code,{children:`multiple key values pretty fast`}),` while presenting them to the user `,(0,i.jsx)(a.code,{children:`highlighted`}),` if matching `,(0,i.jsx)(a.code,{children:`search query`}),` (if that makes any sense). User can then select one or many...`]}),(0,i.jsxs)(a.p,{children:[`We shall accept any shaped data, given an Array of `,(0,i.jsx)(a.code,{children:`T`}),` we'll use a `,(0,i.jsx)(a.code,{children:`mapper function`}),` to build the `,(0,i.jsx)(a.code,{children:`full search option`}),`, as in:`]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`
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