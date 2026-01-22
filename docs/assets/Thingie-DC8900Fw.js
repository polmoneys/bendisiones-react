import"./preload-helper-DGWYlufl.js";import{p as e}from"./iframe-CdwTt1uH.js";import{n as t}from"./lib-PzuHJ5_8.js";import"./chunk-CYSK6WYR-C80qzwEh.js";import"./theming-GNQk1e14.js";import"./react-dom-BEPidDKC.js";import"./chunk-P4F4UVXX-ChR41SH5.js";import"./chunk-45UGUKRX-Xv6ZBdsV.js";import"./components-LqR1AvbF.js";import{a as n}from"./blocks-9McJ3pMZ.js";import"./utils-BaIUY_Nw.js";import"./intl-BYSaPfPj.js";import{r}from"./Thingie.stories-ConV49Qg.js";var i=e();function a(e){let a={code:`code`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{of:r}),`
`,(0,i.jsxs)(`div`,{id:`body`,children:[(0,i.jsx)(a.p,{children:`A common pattern (for me) has been some sort of list / tabular data from the user can select some of them.`}),(0,i.jsxs)(a.p,{children:[`The abstraction is a `,(0,i.jsx)(a.code,{children:`Thingie`}),`, specifically a factory that creates `,(0,i.jsx)(a.strong,{children:`ContextProvider`}),` and `,(0,i.jsx)(a.strong,{children:`useSelection`}),` to keep things friendly & tidy.`]}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:`language-ts`,children:`type Person = { id: number; name: string; email?: string; age?: number };

const Thingie = createThingie<Person>("ThingiePeopleSelection");


 function App() {
   const { Thingie: TableProvider } = Thingie;
   return (
     <TableProvider
       items={USERS}
       keySelector={(s) => s.name}
       initialSelectedKeys={["Pol"]}
     >
       <UsersTable />
     </TableProvider>
   );
 }


function UsersTable() {
  const { useSelection } = Thingie;

  const api = useSelection();
  const selection = api.selectedKeys;
  const count = api.selectedCount;
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "var(--gap-2)",
          marginBottom: "var(--gap-3)",
        }}
      >
        <p>{count}</p>
        <p>{formatSelectedKeys(selection)}</p>
      </div>

      <Rows
        columns={COLUMNS}
        gridTemplateColumns="2fr 1fr .25fr"
        rows={USERS}
        label="users of imaginary app"
        api={api}
        selectedBackgroundColor="var(--positive)"
        style={{
          border: "var(--border)",
          boxShadow: "var(--shadow)",
          borderRadius: "var(--border-radius)",
        }}
        px="var(--gap-1)"
      />
    </>
  );
}

`})})]}),`
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