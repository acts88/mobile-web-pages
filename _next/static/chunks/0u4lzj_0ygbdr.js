(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,i)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&a.set("clientId",e),null!==n&&a.set("contractId",n),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${t}/capture-guide?${a.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&a.set("clientId",e),null!==n&&a.set("contractId",n),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${t}/capture?${a.toString()}`},"buildDocumentComparisonHref",0,function({clientId:e,serviceType:i,templateId:n,contractId:l,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:i});return null!==e&&a.set("clientId",e),null!==n&&a.set("templateId",n),null!==l&&a.set("contractId",l),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${t}/comparison?${a.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&a.set("clientId",e),null!==n&&a.set("contractId",n),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${t}/input-method?${a.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d}){let o=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&o.set("clientId",e),null!==n&&o.set("contractId",n),null!==d&&o.set("documentId",d),`${t}/photo-result?${o.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&a.set("clientId",e),null!==n&&a.set("contractId",n),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${t}/photo-review?${a.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:i}){let n=new URLSearchParams({serviceType:i});return null!==e&&n.set("clientId",e),`${t}/save-success?${n.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,n])},88552,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,n])},81911,e=>{"use strict";var t=e.i(9735),i=e.i(21839),n=e.i(88552),l=e.i(38803);let d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 24px;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  width: 24px;
  height: 100%;
`,r=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  cursor: pointer;

  display: inline-flex;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;

  color: inherit;

  appearance: none;
  background: transparent;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,onBack:l,onForward:s,subtitle:f}){let p=null!=f&&""!==f;return(0,t.jsxs)(d,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(a,{children:l?(0,t.jsx)(r,{onClick:l,children:(0,t.jsx)(i.default,{})}):null}),(0,t.jsx)(c,{children:e}),(0,t.jsx)(a,{children:s?(0,t.jsx)(r,{onClick:s,children:(0,t.jsx)(n.default,{})}):null})]}),p?(0,t.jsx)(u,{children:f}):null]})}])},24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},59074,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),l=e.i(33261),d=e.i(7744),o=e.i(38803),a=e.i(81911),r=e.i(64954),c=e.i(43174),u=e.i(80629);function s(e,t){if(e.includes("\n"))return!0;let i=Math.max(t-48-32,120);return function(e){let t=0;for(let i of e)t+=i.charCodeAt(0)>127?14:8;return t}(e)>i}function f(e){if(null===e)return;let t=Number.parseFloat(window.getComputedStyle(e).lineHeight||""),i=Number.isFinite(t)?t:24;e.style.height="auto",e.style.height=`${e.scrollHeight+i}px`}function p(e){let t=e.value.trim().toLowerCase();return"true"===t||"false"!==t&&!0===e.checked}let h=(0,n.observer)(function(){let e=c.default.client.documentManagement,n=c.default.ui.layout.toast,o=(0,l.useRouter)(),h=(0,l.useSearchParams)(),N=h.get("clientId"),H=(0,u.getServiceType)(h.get("serviceType")),D=h.get("contractId"),G=h.get("templateId"),B=h.get("documentId");(0,d.useEffect)(()=>{null===G||""===G.trim()?c.default.data.docs.templateFieldList.reset():c.default.data.docs.templateFieldList.setQuery({templateId:G})},[G]);let X=(0,d.useMemo)(()=>{var t;return null===(t=e.ocrAnalyzeResult)||0===t.length?[]:t.map((e,t)=>({id:`${e.page}:${e.fieldKey}:${t}`,page:e.page,fieldKey:e.fieldKey,checked:e.checked,originalValue:e.value,value:e.value}))},[e.ocrAnalyzeResult]),V=c.default.data.docs.templateFieldList.data,W=(0,d.useMemo)(()=>{let e=new Map,t=new Map;for(let i of V??[]){let n=i.uiProps.label,l=n?.field.name?.trim();if(void 0===l||0===l.length)continue;let d=n?.group?.name?.trim(),o=void 0!==d&&d.length>0?d:"기타",a={groupName:o,groupSortOrder:n?.group?.sortOrder??Number.MAX_SAFE_INTEGER,fieldName:l,fieldSortOrder:n?.field.sortOrder??Number.MAX_SAFE_INTEGER,fieldType:i.uiProps.fieldType,radioGroupKey:"radio"===i.uiProps.fieldType?i.uiProps.groupKey:void 0},r=`${i.page}:${i.fieldKey}`;e.has(r)||e.set(r,a),t.has(i.fieldKey)||t.set(i.fieldKey,a)}return{byFieldKey:t,byPageAndKey:e}},[V]),[Q,q]=(0,d.useState)({}),[J,Y]=(0,d.useState)(!1),[Z,ee]=(0,d.useState)(!1),et=(0,d.useRef)({}),[ei,en]=(0,d.useState)(window.innerWidth);(0,d.useEffect)(()=>{let e=()=>{en(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let el=(0,d.useMemo)(()=>X.map(e=>({...e,value:Q[e.id]??e.value})),[Q,X]),ed=(0,d.useMemo)(()=>{let e=new Map;for(let t of el){let i=`${t.page}:${t.fieldKey}`,n=W.byPageAndKey.get(i)??W.byFieldKey.get(t.fieldKey),l=n?.groupName??"기타",d=n?.groupSortOrder??Number.MAX_SAFE_INTEGER,o=n?.fieldName??t.fieldKey,a=n?.fieldSortOrder??Number.MAX_SAFE_INTEGER,r=n?.fieldType??"text",c=n?.radioGroupKey;e.has(l)||e.set(l,{groupName:l,groupSortOrder:d,items:[]}),e.get(l)?.items.push({...t,fieldName:o,fieldSortOrder:a,fieldType:r,radioGroupKey:c})}let t=[...e.values()];for(let e of t)e.items.sort((e,t)=>e.fieldSortOrder!==t.fieldSortOrder?e.fieldSortOrder-t.fieldSortOrder:e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey));return t.sort((e,t)=>e.groupSortOrder!==t.groupSortOrder?e.groupSortOrder-t.groupSortOrder:e.groupName.localeCompare(t.groupName)),t},[el,W]),eo=(0,d.useMemo)(()=>ed.some(e=>"기타"===e.groupName),[ed]),ea=(0,d.useMemo)(()=>ed.filter(e=>"기타"!==e.groupName),[ed]),er=(e,t)=>{"check"===e.fieldType?q(i=>({...i,[e.id]:t?"true":"false"})):q(i=>{let n={...i,[e.id]:t?"true":"false"};if(!t||void 0===e.radioGroupKey)return n;for(let t of ed)for(let i of t.items)i.id!==e.id&&"radio"===i.fieldType&&i.radioGroupKey===e.radioGroupKey&&(n[i.id]="false");return n})};(0,d.useEffect)(()=>{eo&&n.info("미입력 항목이 있습니다. 데스크탑 웹에서 확인해주세요.")},[eo,n]),(0,d.useEffect)(()=>{for(let e of el)s(e.value,ei)&&f(et.current[e.id]??null)},[el,ei]);let ec=()=>{o.push((0,u.buildDocumentCaptureGuideHref)({clientId:N,serviceType:H,contractId:D,templateId:G??"",documentId:B}))},eu=async()=>{if(null!==B&&!J&&0!==el.length){Y(!0);try{await e.saveDocumentFields({documentId:B,fields:el.map(e=>({page:e.page,fieldKey:e.fieldKey,value:e.value}))}),o.push((0,u.buildDocumentSaveSuccessHref)({clientId:N,serviceType:H}))}finally{Y(!1)}}};return(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(a.default,{title:"분석 결과 확인하기",subtitle:"잘못된 정보는 아래에서 바로 수정할 수 있습니다.",onBack:()=>{if(0===el.length){e.resetOcrAnalyze(),ec();return}ee(!0)}})}),(0,t.jsx)(x,{}),(0,t.jsx)(_,{children:0===el.length?(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{children:"분석 결과"}),(0,t.jsx)(y,{children:"분석된 필드가 없습니다."})]}):ea.map(e=>(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{children:e.groupName}),(0,t.jsx)(I,{children:e.items.map(e=>"check"===e.fieldType||"radio"===e.fieldType?(0,t.jsx)(C,{children:(0,t.jsxs)(T,{children:["check"===e.fieldType?(0,t.jsx)(r.default.Input.Check,{checked:p(e),onChange:t=>{er(e,t.target.checked)}}):(0,t.jsx)(r.default.Input.Radio,{checked:p(e),name:e.radioGroupKey,onChange:t=>{er(e,t.target.checked)}}),(0,t.jsx)($,{children:e.fieldName})]})},e.id):(0,t.jsxs)(v,{children:[(0,t.jsxs)(z,{children:[e.fieldName,":"]}),s(e.value,ei)?(0,t.jsx)(j,{ref:t=>{et.current[e.id]=t,f(t)},value:e.value,$autoFilled:e.value===e.originalValue,onInput:e=>{f(e.currentTarget)},onChange:t=>{let i=t.target.value;q(t=>({...t,[e.id]:i}))}}):(0,t.jsx)(S,{value:e.value,$autoFilled:e.value===e.originalValue,onChange:t=>{let i=t.target.value;q(t=>({...t,[e.id]:i}))}})]},e.id))})]},e.groupName))}),(0,t.jsxs)(k,{children:[(0,t.jsx)(A,{type:"button",onClick:()=>{o.push((0,u.buildDocumentCaptureHref)({clientId:N,serviceType:H,contractId:D,templateId:G??"",documentId:B}))},children:"다시 촬영하기"}),(0,t.jsxs)(K,{type:"button",disabled:null===B||J||0===el.length,onClick:()=>{eu()},children:[(0,t.jsx)(i.default,{sx:{fontSize:18}}),(0,t.jsx)("span",{children:"최종확인 및 저장"})]})]}),Z?(0,t.jsx)(O,{role:"presentation",children:(0,t.jsxs)(P,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(E,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(L,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(F,{type:"button",onClick:()=>{ee(!1)},children:"계속하기"}),(0,t.jsx)(U,{type:"button",onClick:()=>{ee(!1),e.resetOcrAnalyze(),ec()},children:"중단하기"})]})]})}):null]})}),m=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,g=o.default.header.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,x=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,_=o.default.main.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;
`,b=o.default.section.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`,w=o.default.h2.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-5"})`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
`,y=o.default.p.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-6"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,I=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-8"})`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  align-items: center;
`,C=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-9"})`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  align-items: center;
`,z=o.default.label.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-10"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #6b7280;
  white-space: nowrap;
`,S=(0,o.default)(r.default.Input.Text).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-11"})`
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  align-items: center;

  width: fit-content;
  min-width: 120px;
  max-width: min(72vw, 360px);
  height: 56px;
  padding: 14px 16px;
`,j=(0,o.default)(r.default.Input.Textarea).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-12"})`
  resize: none;

  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  align-items: center;

  width: fit-content;
  min-width: 120px;
  max-width: min(72vw, 360px);
  padding: 14px 16px;

  line-height: 24px;
`,T=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-13"})`
  display: flex;
  flex: 0 0 auto;
  gap: 4px;
  align-items: center;

  min-height: 32px;
  padding: 8px 0;
`,$=o.default.span.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-14"})`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,k=o.default.footer.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-15"})`
  display: flex;
  gap: 12px;
  padding: 24px 24px 48px;
`,N=o.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,A=(0,o.default)(r.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-16"})`
  ${N}
`,K=(0,o.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-17"})`
  ${N}
`,O=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-18"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,P=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-19"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,R=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-20"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,E=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-21"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,L=o.default.p.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-22"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,M=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-23"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,H=o.css`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;
`,F=(0,o.default)(r.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-24"})`
  ${H}
`,U=(0,o.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-25"})`
  ${H}
`;e.s(["default",0,h])}]);