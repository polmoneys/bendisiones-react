import{N as e,m as t}from"./iframe-BwNSIbbV.js";import"./utils-BaIUY_Nw.js";import"./index.module-C_UjfPyb.js";import{n}from"./Flex-DtvvyBfY.js";import{i as r}from"./go-Di605n81.js";import"./Ring-Dw4RMm5y.js";import{t as i}from"./Button-Dwpu8NIj.js";import{t as a}from"./InputText-g7v6HGYd.js";var o=e();function s(e){return{tokens:e.match(/[A-Za-z0-9]+/g)??[],separators:e.match(/[^A-Za-z0-9]+/g)??[]}}function c(e,t){if(e.length===0)return``;let n=e[0]??``;for(let r=1;r<e.length;r++)n+=(t[r-1]??`/`)+e[r];return n}function l(e){return e.split(/\D+/).filter(Boolean)}function u({mask:e,defaultValue:t=``,onValueChange:n}){let r=(0,o.useRef)(null),i=(0,o.useId)(),[a,u]=(0,o.useState)(``),d=(0,o.useRef)(``),f=(0,o.useRef)([{value:``}]),p=(0,o.useRef)(0),{tokens:m,separators:h}=(0,o.useMemo)(()=>s(e),[e]);return(0,o.useEffect)(()=>{let e=r.current;if(!e)return;e.value=t,d.current=t,f.current=[{value:t}],p.current=0,n?.(t);let a=(t=``)=>{u(t),e.setCustomValidity(t),t===``?(e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-describedby`)):(e.setAttribute(`aria-invalid`,`true`),e.setAttribute(`aria-describedby`,i))},o=t=>{t!==d.current&&(f.current.length=p.current+1,f.current.push({value:t}),p.current=f.current.length-1,e.value=t,d.current=t,n?.(t))},s=()=>{let{value:t}=f.current[p.current];e.value=t,d.current=t,n?.(t)},g=()=>{p.current<=0||(--p.current,s())},_=()=>{p.current>=f.current.length-1||(p.current+=1,s())},v=(t=!1)=>{let n=e.value,r=l(n),i=Math.min(r.length,m.length);for(let e=0;e<i;e++){let n=m[e].length;if(r[e].length>n){let t=r[e].substring(0,n),i=r[e].substring(n);r[e]=t,e+1<r.length?r[e+1]=`${i}${r[e+1]}`:r.splice(e+1,0,i)}t&&e<i-1&&(r[e]=r[e].padStart(n,`0`))}r.length>m.length&&(r.length=m.length);let a=c(r,h);if(a===d.current)return;let s=e.selectionStart??n.length,u=e.selectionEnd??n.length,f=a.length-n.length;o(a);let p=Math.max(0,s+(f>0?f:0)),g=Math.max(0,u+(f>0?f:0));requestAnimationFrame(()=>{e.setSelectionRange(p,g)})},y=()=>{if(e.value.length===0){a(``);return}a(``);let t=l(e.value);if(t.length!==m.length){a(`Please enter a valid date`);return}let n=0,r=0,i=0,o=!1,s=!1,c=!1,d=!1;for(let e=0;e<m.length;e++)switch(m[e]){case`DD`:if(o=!0,n=Number.parseInt(t[e]??`0`,10),Number.isNaN(n)||n<1||n>31){a(`Please enter a valid day (1 to 31)`);return}break;case`MM`:if(s=!0,r=Number.parseInt(t[e]??`0`,10),Number.isNaN(r)||r<1||r>12){a(`Please enter a valid month (1 to 12)`);return}break;case`YY`:if(c=!0,i=Number.parseInt(t[e]??`-1`,10),Number.isNaN(i)||i<0){a(`Please enter a valid year`);return}break;case`YYYY`:if(d=!0,i=Number.parseInt(t[e]??`-1`,10),Number.isNaN(i)||i<0){a(`Please enter a valid year`);return}break}if(d){let e=new Date(i,r,0),t=e.getDate();if(n>t){a(`Please enter a valid day for ${new Intl.DateTimeFormat(void 0,{month:`long`}).format(e)} (1 to ${t})`);return}}if(c){let e=String(new Date().getFullYear()),t=Number.parseInt(e.substring(0,2),10),n=Number.parseInt(e.substring(2,4),10);i<n&&(t+=1),i=Number.parseInt(`${t}${String(i).padStart(2,`0`)}`,10),d=!0}u(new Intl.DateTimeFormat(void 0,{day:o?`numeric`:void 0,month:s?`long`:void 0,year:d?`numeric`:void 0}).format(new Date(i,r-1,n||1)))},b=()=>{let t=e.value;if(d.current!==t){if(/[^\d\s/-]/.test(t)){e.value=d.current;return}v(!1)}},x=()=>{v(!0),y()},S=t=>{if(t.key===`Enter`){y();return}if(t.key===`Backspace`){let{value:n}=e,{selectionStart:r}=e;if(r!==n.length)return;t.preventDefault(),n=n.substring(0,r-1);let i=h[h.length-1];i&&n.endsWith(i)&&(n=n.slice(0,-i.length)),e.value=n,v(!1);return}if(t.key===`z`&&t.shiftKey&&(t.metaKey||t.ctrlKey)||t.key===`y`&&t.ctrlKey){t.preventDefault(),_();return}t.key===`z`&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),g())},C=e=>{e.inputType===`historyUndo`?(e.preventDefault(),g()):e.inputType===`historyRedo`&&(e.preventDefault(),_())};return e.addEventListener(`input`,b),e.addEventListener(`blur`,x),e.addEventListener(`keydown`,S),e.addEventListener(`beforeinput`,C),()=>{e.removeEventListener(`input`,b),e.removeEventListener(`blur`,x),e.removeEventListener(`keydown`,S),e.removeEventListener(`beforeinput`,C)}},[e,m,h,t,i,n]),{inputRef:r,feedback:a,feedbackId:i}}var d=t();function f({id:e,label:t,mask:n,required:r}){let{inputRef:i,feedback:a,feedbackId:o}=u({mask:n});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`label`,{htmlFor:e,children:t}),(0,d.jsx)(`input`,{ref:i,id:e,type:`text`,inputMode:`numeric`,placeholder:n,maxLength:n.length,required:r,"aria-invalid":a?`true`:void 0,"aria-describedby":a?o:void 0}),(0,d.jsx)(`p`,{id:o,children:a})]})}f.__docgenInfo={description:``,methods:[],displayName:`MaskedField`,props:{id:{required:!0,tsType:{name:`string`},description:``},label:{required:!0,tsType:{name:`string`},description:``},mask:{required:!0,tsType:{name:`union`,raw:`"MM/YY" | "DD/MM/YYYY" | "YYYY-MM-DD"`,elements:[{name:`literal`,value:`"MM/YY"`},{name:`literal`,value:`"DD/MM/YYYY"`},{name:`literal`,value:`"YYYY-MM-DD"`}]},description:``},required:{required:!1,tsType:{name:`boolean`},description:``}}};var p={title:`Dumb/TextInput`,component:a,parameters:{layout:`centered`}};const m={name:`Playground`,args:{id:`input-story`,name:`input`,placeholder:`Type something`,onChange:e=>console.log({value:e})},render:function(e){let[t,s]=(0,o.useState)(``);return(0,d.jsxs)(n,{style:{gap:`var(--gap-2)`,alignItems:`center`},children:[(0,d.jsx)(`label`,{htmlFor:`test`,children:`Search`}),(0,d.jsxs)(`div`,{className:`attach-end`,children:[(0,d.jsx)(a,{...e,id:`test`,value:t,onChange:e=>s(e),style:{paddingRight:`49px`}}),(0,d.jsx)(i,{isIcon:!0,"aria-label":`Save search`,children:(0,d.jsx)(r,{size:18})})]})]})}},h={name:`Date`,args:{id:`input-story`,name:`input`,placeholder:`Type something`,onChange:e=>console.log({value:e})},render:function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(n,{wrap:!0,style:{gap:`var(--gap-2)`},children:[(0,d.jsxs)(`form`,{className:`dates`,children:[(0,d.jsx)(f,{id:`masked-expiry`,label:`Expiry Date (MM/YY)`,mask:`MM/YY`,required:!0}),(0,d.jsx)(f,{id:`masked-date`,label:`Date of Birth (DD/MM/YYYY)`,mask:`DD/MM/YYYY`,required:!0}),(0,d.jsx)(f,{id:`masked-iso`,label:`Date`,mask:`YYYY-MM-DD`,required:!0})]}),(0,d.jsxs)(`form`,{className:`dates`,children:[(0,d.jsx)(`label`,{htmlFor:`date-input`,children:`Date`}),(0,d.jsx)(`input`,{id:`date-input`,type:`date`})]}),(0,d.jsxs)(`form`,{className:`dates`,children:[(0,d.jsx)(`label`,{htmlFor:`time-input`,children:`Time`}),(0,d.jsx)(`input`,{id:`time-input`,type:`time`})]}),(0,d.jsxs)(`form`,{className:`dates`,children:[(0,d.jsx)(`label`,{htmlFor:`datetime-input`,children:`Date and time`}),(0,d.jsx)(`input`,{id:`datetime-input`,type:`datetime-local`})]}),(0,d.jsx)(`form`,{className:`dates`,children:(0,d.jsxs)(`fieldset`,{children:[(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`available-start`,children:`Start Date`}),(0,d.jsx)(`input`,{id:`available-start`,type:`date`,defaultValue:`2026-07-01`})]}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`available-end`,children:`End Date`}),(0,d.jsx)(`input`,{id:`available-end`,type:`date`,defaultValue:`2026-08-31`})]})]})}),(0,d.jsx)(`form`,{className:`dates dates-wrap`,children:(0,d.jsxs)(`fieldset`,{children:[(0,d.jsx)(`legend`,{children:(0,d.jsx)(`p`,{children:`When was your passport issued?`})}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`passport-day`,children:`Day`}),(0,d.jsx)(`input`,{id:`passport-day`,type:`text`,inputMode:`numeric`,pattern:`[0-9]{1,2}`,maxLength:2})]}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`passport-month`,children:`Month`}),(0,d.jsx)(`input`,{id:`passport-month`,type:`text`,inputMode:`numeric`,pattern:`[0-9]{1,2}`,maxLength:2})]}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`passport-year`,children:`Year`}),(0,d.jsx)(`input`,{id:`passport-year`,type:`text`,inputMode:`numeric`,pattern:`[0-9]{1,4}`,maxLength:4})]})]})}),(0,d.jsx)(`form`,{className:`dates`,children:(0,d.jsxs)(`fieldset`,{children:[(0,d.jsx)(`legend`,{children:(0,d.jsx)(`p`,{children:`Select expiry date`})}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`expiry-month`,children:`Month`}),(0,d.jsxs)(`select`,{id:`expiry-month`,children:[(0,d.jsx)(`option`,{value:`1`,children:`January (1)`}),(0,d.jsx)(`option`,{value:`2`,children:`February (2)`}),(0,d.jsx)(`option`,{value:`3`,children:`March (3)`}),(0,d.jsx)(`option`,{value:`4`,children:`April (4)`}),(0,d.jsx)(`option`,{value:`5`,children:`May (5)`}),(0,d.jsx)(`option`,{value:`6`,children:`June (6)`}),(0,d.jsx)(`option`,{value:`7`,children:`July (7)`}),(0,d.jsx)(`option`,{value:`8`,children:`August (8)`}),(0,d.jsx)(`option`,{value:`9`,children:`September (9)`}),(0,d.jsx)(`option`,{value:`10`,children:`October (10)`}),(0,d.jsx)(`option`,{value:`11`,children:`November (11)`}),(0,d.jsx)(`option`,{value:`12`,children:`December (12)`})]})]}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`expiry-year`,children:`Year`}),(0,d.jsxs)(`select`,{id:`expiry-year`,children:[(0,d.jsx)(`option`,{children:`2025`}),(0,d.jsx)(`option`,{children:`2026`}),(0,d.jsx)(`option`,{children:`2027`}),(0,d.jsx)(`option`,{children:`2028`}),(0,d.jsx)(`option`,{children:`2029`}),(0,d.jsx)(`option`,{children:`2030`}),(0,d.jsx)(`option`,{children:`2031`}),(0,d.jsx)(`option`,{children:`2032`}),(0,d.jsx)(`option`,{children:`2033`}),(0,d.jsx)(`option`,{children:`2034`}),(0,d.jsx)(`option`,{children:`2035`}),(0,d.jsx)(`option`,{children:`2036`})]})]})]})}),(0,d.jsx)(`form`,{className:`dates`,children:(0,d.jsxs)(`fieldset`,{children:[(0,d.jsx)(`legend`,{children:(0,d.jsx)(`p`,{children:`Select departure time`})}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`departure-date`,children:`I’m leaving`}),(0,d.jsxs)(`select`,{id:`departure-date`,children:[(0,d.jsx)(`option`,{children:`Today`}),(0,d.jsx)(`option`,{children:`Tomorrow`}),(0,d.jsx)(`option`,{children:`Sat 8 Nov`}),(0,d.jsx)(`option`,{children:`Sun 9 Nov`}),(0,d.jsx)(`option`,{children:`Mon 10 Nov`}),(0,d.jsx)(`option`,{children:`Tue 11 Nov`}),(0,d.jsx)(`option`,{children:`Wed 12 Nov`}),(0,d.jsx)(`option`,{children:`Thu 13 Nov`}),(0,d.jsx)(`option`,{children:`Fri 14 Nov`}),(0,d.jsx)(`option`,{children:`Sat 15 Nov`}),(0,d.jsx)(`option`,{children:`Sun 16 Nov`})]})]}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`departure-hour`,children:`Hour`}),(0,d.jsxs)(`select`,{id:`departure-hour`,children:[(0,d.jsx)(`option`,{children:`06`}),(0,d.jsx)(`option`,{children:`07`}),(0,d.jsx)(`option`,{children:`08`}),(0,d.jsx)(`option`,{selected:!0,children:`09`}),(0,d.jsx)(`option`,{children:`10`}),(0,d.jsx)(`option`,{children:`11`}),(0,d.jsx)(`option`,{children:`12`}),(0,d.jsx)(`option`,{children:`13`}),(0,d.jsx)(`option`,{children:`14`}),(0,d.jsx)(`option`,{children:`15`}),(0,d.jsx)(`option`,{children:`16`}),(0,d.jsx)(`option`,{children:`17`}),(0,d.jsx)(`option`,{children:`18`}),(0,d.jsx)(`option`,{children:`19`}),(0,d.jsx)(`option`,{children:`20`}),(0,d.jsx)(`option`,{children:`21`}),(0,d.jsx)(`option`,{children:`22`})]})]}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`departure-minutes`,children:`Minutes`}),(0,d.jsxs)(`select`,{id:`departure-minutes`,children:[(0,d.jsx)(`option`,{selected:!0,children:`00`}),(0,d.jsx)(`option`,{children:`15`}),(0,d.jsx)(`option`,{children:`30`}),(0,d.jsx)(`option`,{children:`45`})]})]})]})}),(0,d.jsx)(`form`,{className:`dates`,children:(0,d.jsxs)(`fieldset`,{className:`dates-join`,children:[(0,d.jsx)(`legend`,{className:`label`,children:(0,d.jsx)(`span`,{children:`Date of Birth (DD/MM/YYYY)`})}),(0,d.jsx)(`label`,{htmlFor:`masked-day`,className:`hidden`,children:`Day`}),(0,d.jsx)(`input`,{id:`masked-day`,type:`text`,inputMode:`numeric`,placeholder:`DD`,pattern:`[0-9]{1,2}`,maxLength:2,required:!0}),(0,d.jsx)(`label`,{htmlFor:`masked-month`,className:`hidden`,children:`Month`}),(0,d.jsx)(`input`,{id:`masked-month`,type:`text`,inputMode:`numeric`,placeholder:`MM`,pattern:`[0-9]{1,2}`,maxLength:2,required:!0}),(0,d.jsx)(`label`,{htmlFor:`masked-year`,className:`hidden`,children:`Year`}),(0,d.jsx)(`input`,{id:`masked-year`,type:`text`,inputMode:`numeric`,placeholder:`YYYY`,pattern:`[0-9]{1,4}`,maxLength:4,required:!0})]})}),(0,d.jsx)(`form`,{className:`dates dates-wrap`,children:(0,d.jsxs)(`fieldset`,{children:[(0,d.jsx)(`legend`,{children:(0,d.jsx)(`p`,{children:`Arrange a call`})}),(0,d.jsxs)(`div`,{className:`dates-item`,children:[(0,d.jsx)(`label`,{htmlFor:`datalist-input`,children:`Preferred date or time (optional)`}),(0,d.jsx)(`input`,{id:`datalist-input`,type:`text`,list:`datalist-input-list`,placeholder:`Type or select...`}),(0,d.jsxs)(`datalist`,{id:`datalist-input-list`,children:[(0,d.jsx)(`option`,{value:`No preference`}),(0,d.jsx)(`option`,{value:`Mornings (before 9am)`}),(0,d.jsx)(`option`,{value:`Mornings (before noon)`}),(0,d.jsx)(`option`,{value:`Afernoons`}),(0,d.jsx)(`option`,{value:`Evenings (after 6pm)`}),(0,d.jsx)(`option`,{value:`Weekdays (Monday to Friday)`}),(0,d.jsx)(`option`,{value:`Weekends (Saturday or Sunday)`})]})]})]})})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Playground",
  args: {
    id: "input-story",
    name: "input",
    placeholder: "Type something",
    onChange: value => console.log({
      value
    })
  },
  render: function Render(args) {
    const [input, setInput] = useState("");
    return <Row style={{
      gap: "var(--gap-2)",
      alignItems: "center"
    }}>
        <label htmlFor="test">Search</label>

        <div className="attach-end">
          <TextInput {...args} id="test" value={input} onChange={v => setInput(v)} style={{
          paddingRight: "49px"
        }} />

          <Button isIcon aria-label="Save search">
            <IconHeart size={18} />
          </Button>
        </div>
      </Row>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Date",
  args: {
    id: "input-story",
    name: "input",
    placeholder: "Type something",
    onChange: value => console.log({
      value
    })
  },
  render: function Render() {
    return <>
        <Row wrap style={{
        gap: "var(--gap-2)"
      }}>
          <form className="dates">
            <MaskedField id="masked-expiry" label="Expiry Date (MM/YY)" mask="MM/YY" required />

            <MaskedField id="masked-date" label="Date of Birth (DD/MM/YYYY)" mask="DD/MM/YYYY" required />

            <MaskedField id="masked-iso" label="Date" mask="YYYY-MM-DD" required />
          </form>

          <form className="dates">
            <label htmlFor="date-input">Date</label>
            <input id="date-input" type="date" />
          </form>

          <form className="dates">
            <label htmlFor="time-input">Time</label>
            <input id="time-input" type="time" />
          </form>

          <form className="dates">
            <label htmlFor="datetime-input">Date and time</label>
            <input id="datetime-input" type="datetime-local" />
          </form>
          <form className="dates">
            <fieldset>
              {/*<legend>
                <p>Find appointment date</p>
               </legend>*/}
              <div className="dates-item">
                <label htmlFor="available-start">Start Date</label>
                <input id="available-start" type="date" defaultValue="2026-07-01" />
              </div>
              <div className="dates-item">
                <label htmlFor="available-end">End Date</label>
                <input id="available-end" type="date" defaultValue="2026-08-31" />
              </div>
            </fieldset>
          </form>
          <form className="dates dates-wrap">
            <fieldset>
              <legend>
                <p>When was your passport issued?</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="passport-day">Day</label>
                <input id="passport-day" type="text" inputMode="numeric" pattern="[0-9]{1,2}" maxLength={2} />
              </div>
              <div className="dates-item">
                <label htmlFor="passport-month">Month</label>
                <input id="passport-month" type="text" inputMode="numeric" pattern="[0-9]{1,2}" maxLength={2} />
              </div>
              <div className="dates-item">
                <label htmlFor="passport-year">Year</label>
                <input id="passport-year" type="text" inputMode="numeric" pattern="[0-9]{1,4}" maxLength={4} />
              </div>
            </fieldset>
          </form>

          <form className="dates">
            <fieldset>
              <legend>
                <p>Select expiry date</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="expiry-month">Month</label>
                <select id="expiry-month">
                  <option value="1">January (1)</option>
                  <option value="2">February (2)</option>
                  <option value="3">March (3)</option>
                  <option value="4">April (4)</option>
                  <option value="5">May (5)</option>
                  <option value="6">June (6)</option>
                  <option value="7">July (7)</option>
                  <option value="8">August (8)</option>
                  <option value="9">September (9)</option>
                  <option value="10">October (10)</option>
                  <option value="11">November (11)</option>
                  <option value="12">December (12)</option>
                </select>
              </div>
              <div className="dates-item">
                <label htmlFor="expiry-year">Year</label>
                <select id="expiry-year">
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                  <option>2033</option>
                  <option>2034</option>
                  <option>2035</option>
                  <option>2036</option>
                </select>
              </div>
            </fieldset>
          </form>

          <form className="dates">
            <fieldset>
              <legend>
                <p>Select departure time</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="departure-date">I’m leaving</label>
                <select id="departure-date">
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>Sat 8 Nov</option>
                  <option>Sun 9 Nov</option>
                  <option>Mon 10 Nov</option>
                  <option>Tue 11 Nov</option>
                  <option>Wed 12 Nov</option>
                  <option>Thu 13 Nov</option>
                  <option>Fri 14 Nov</option>
                  <option>Sat 15 Nov</option>
                  <option>Sun 16 Nov</option>
                </select>
              </div>
              <div className="dates-item">
                <label htmlFor="departure-hour">Hour</label>
                <select id="departure-hour">
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option selected>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                </select>
              </div>
              <div className="dates-item">
                <label htmlFor="departure-minutes">Minutes</label>
                <select id="departure-minutes">
                  <option selected>00</option>
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                </select>
              </div>
            </fieldset>
          </form>

          <form className="dates">
            <fieldset className="dates-join">
              <legend className="label">
                <span>Date of Birth (DD/MM/YYYY)</span>
              </legend>
              <label htmlFor="masked-day" className="hidden">
                Day
              </label>
              <input id="masked-day" type="text" inputMode="numeric" placeholder="DD" pattern="[0-9]{1,2}" maxLength={2} required />
              <label htmlFor="masked-month" className="hidden">
                Month
              </label>
              <input id="masked-month" type="text" inputMode="numeric" placeholder="MM" pattern="[0-9]{1,2}" maxLength={2} required />
              <label htmlFor="masked-year" className="hidden">
                Year
              </label>
              <input id="masked-year" type="text" inputMode="numeric" placeholder="YYYY" pattern="[0-9]{1,4}" maxLength={4} required />
            </fieldset>
          </form>

          <form className="dates dates-wrap">
            <fieldset>
              <legend>
                <p>Arrange a call</p>
              </legend>
              <div className="dates-item">
                <label htmlFor="datalist-input">
                  Preferred date or time (optional)
                </label>
                <input id="datalist-input" type="text" list="datalist-input-list" placeholder="Type or select..." />
                <datalist id="datalist-input-list">
                  <option value="No preference"></option>
                  <option value="Mornings (before 9am)"></option>
                  <option value="Mornings (before noon)"></option>
                  <option value="Afernoons"></option>
                  <option value="Evenings (after 6pm)"></option>
                  <option value="Weekdays (Monday to Friday)"></option>
                  <option value="Weekends (Saturday or Sunday)"></option>
                </datalist>
              </div>
            </fieldset>
          </form>
        </Row>
      </>;
  }
}`,...h.parameters?.docs?.source}}};const g=[`Secondary`,`DateUtils`];export{h as DateUtils,m as Secondary,g as __namedExportsOrder,p as default};