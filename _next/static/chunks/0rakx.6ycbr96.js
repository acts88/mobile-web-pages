(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,i)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d}){let o=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&o.set("clientId",e),null!==n&&o.set("contractId",n),null!==d&&o.set("documentId",d),`${t}/capture-guide?${o.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d}){let o=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&o.set("clientId",e),null!==n&&o.set("contractId",n),null!==d&&o.set("documentId",d),`${t}/capture?${o.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d}){let o=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&o.set("clientId",e),null!==n&&o.set("contractId",n),null!==d&&o.set("documentId",d),`${t}/input-method?${o.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d}){let o=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&o.set("clientId",e),null!==n&&o.set("contractId",n),null!==d&&o.set("documentId",d),`${t}/photo-result?${o.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:d}){let o=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&o.set("clientId",e),null!==n&&o.set("contractId",n),null!==d&&o.set("documentId",d),`${t}/photo-review?${o.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:i}){let n=new URLSearchParams({serviceType:i});return null!==e&&n.set("clientId",e),`${t}/save-success?${n.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,n])},88552,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,n])},81911,e=>{"use strict";var t=e.i(9735),i=e.i(21839),n=e.i(88552),l=e.i(38803);let d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  width: 24px;
  height: 100%;
`,a=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
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
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,onBack:l,onForward:u,subtitle:f}){let p=null!=f&&""!==f;return(0,t.jsxs)(d,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{children:l?(0,t.jsx)(a,{onClick:l,children:(0,t.jsx)(i.default,{})}):null}),(0,t.jsx)(c,{children:e}),(0,t.jsx)(r,{children:u?(0,t.jsx)(a,{onClick:u,children:(0,t.jsx)(n.default,{})}):null})]}),p?(0,t.jsx)(s,{children:f}):null]})}])},24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},59074,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),l=e.i(33261),d=e.i(7744),o=e.i(38803),r=e.i(81911),a=e.i(64954),c=e.i(43174),s=e.i(80629);function u(e,t){if(e.includes("\n"))return!0;let i=Math.max(t-48-32,120);return function(e){let t=0;for(let i of e)t+=i.charCodeAt(0)>127?14:8;return t}(e)>i}function f(e){if(null===e)return;let t=Number.parseFloat(window.getComputedStyle(e).lineHeight||""),i=Number.isFinite(t)?t:24;e.style.height="auto",e.style.height=`${e.scrollHeight+i}px`}let p=(0,n.observer)(function(){let e=c.default.client.documentManagement,n=(0,l.useRouter)(),o=(0,l.useSearchParams)(),a=o.get("clientId"),p=(0,s.getServiceType)(o.get("serviceType")),S=o.get("contractId"),L=o.get("templateId"),H=o.get("documentId");(0,d.useEffect)(()=>{null===L||""===L.trim()?c.default.data.docs.templateFieldList.reset():c.default.data.docs.templateFieldList.setQuery({templateId:L})},[L]);let k=(0,d.useMemo)(()=>{var t;return null===(t=e.ocrAnalyzeResult)||0===t.length?[]:t.map((e,t)=>({id:`${e.page}:${e.fieldKey}:${t}`,page:e.page,fieldKey:e.fieldKey,originalValue:e.value,value:e.value}))},[e.ocrAnalyzeResult]),F=c.default.data.docs.templateFieldList.data,K=(0,d.useMemo)(()=>{let e=new Map,t=new Map;for(let i of F??[]){let n=i.uiProps.label,l=n?.field.name?.trim();if(void 0===l||0===l.length)continue;let d=n?.group?.name?.trim(),o=void 0!==d&&d.length>0?d:"기타",r={groupName:o,groupSortOrder:n?.group?.sortOrder??Number.MAX_SAFE_INTEGER,fieldName:l,fieldSortOrder:n?.field.sortOrder??Number.MAX_SAFE_INTEGER},a=`${i.page}:${i.fieldKey}`;e.has(a)||e.set(a,r),t.has(i.fieldKey)||t.set(i.fieldKey,r)}return{byFieldKey:t,byPageAndKey:e}},[F]),[U,D]=(0,d.useState)({}),[B,G]=(0,d.useState)(!1),[X,V]=(0,d.useState)(!1),W=(0,d.useRef)({}),[Q,q]=(0,d.useState)(window.innerWidth);(0,d.useEffect)(()=>{let e=()=>{q(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let J=(0,d.useMemo)(()=>k.map(e=>({...e,value:U[e.id]??e.value})),[U,k]),Y=(0,d.useMemo)(()=>{let e=new Map;for(let t of J){let i=`${t.page}:${t.fieldKey}`,n=K.byPageAndKey.get(i)??K.byFieldKey.get(t.fieldKey),l=n?.groupName??"기타",d=n?.groupSortOrder??Number.MAX_SAFE_INTEGER,o=n?.fieldName??t.fieldKey,r=n?.fieldSortOrder??Number.MAX_SAFE_INTEGER;e.has(l)||e.set(l,{groupName:l,groupSortOrder:d,items:[]}),e.get(l)?.items.push({...t,fieldName:o,fieldSortOrder:r})}let t=[...e.values()];for(let e of t)e.items.sort((e,t)=>e.fieldSortOrder!==t.fieldSortOrder?e.fieldSortOrder-t.fieldSortOrder:e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey));return t.sort((e,t)=>e.groupSortOrder!==t.groupSortOrder?e.groupSortOrder-t.groupSortOrder:e.groupName.localeCompare(t.groupName)),t},[J,K]);(0,d.useEffect)(()=>{for(let e of J)u(e.value,Q)&&f(W.current[e.id]??null)},[J,Q]);let Z=()=>{n.push((0,s.buildDocumentCaptureGuideHref)({clientId:a,serviceType:p,contractId:S,templateId:L??"",documentId:H}))},ee=async()=>{if(null!==H&&!B&&0!==J.length){G(!0);try{await e.saveDocumentFields({documentId:H,fields:J.map(e=>({page:e.page,fieldKey:e.fieldKey,value:e.value}))}),n.push((0,s.buildDocumentSaveSuccessHref)({clientId:a,serviceType:p}))}finally{G(!1)}}};return(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(r.default,{title:"분석 결과 확인하기",subtitle:"잘못된 정보는 아래에서 바로 수정할 수 있습니다.",onBack:()=>{if(0===J.length){e.resetOcrAnalyze(),Z();return}V(!0)}})}),(0,t.jsx)(m,{}),(0,t.jsx)(x,{children:0===J.length?(0,t.jsxs)(_,{children:[(0,t.jsx)(b,{children:"분석 결과"}),(0,t.jsx)(w,{children:"분석된 필드가 없습니다."})]}):Y.map(e=>(0,t.jsxs)(_,{children:[(0,t.jsx)(b,{children:e.groupName}),e.items.map(e=>(0,t.jsxs)(y,{children:[(0,t.jsxs)(I,{children:[e.fieldName,":"]}),u(e.value,Q)?(0,t.jsx)(C,{ref:t=>{W.current[e.id]=t,f(t)},value:e.value,$autoFilled:e.value===e.originalValue,onInput:e=>{f(e.currentTarget)},onChange:t=>{let i=t.target.value;D(t=>({...t,[e.id]:i}))}}):(0,t.jsx)(v,{value:e.value,$autoFilled:e.value===e.originalValue,onChange:t=>{let i=t.target.value;D(t=>({...t,[e.id]:i}))}})]},e.id))]},e.groupName))}),(0,t.jsxs)(z,{children:[(0,t.jsx)(j,{type:"button",onClick:()=>{n.push((0,s.buildDocumentCaptureHref)({clientId:a,serviceType:p,contractId:S,templateId:L??"",documentId:H}))},children:"다시 촬영하기"}),(0,t.jsxs)($,{type:"button",disabled:null===H||B||0===J.length,onClick:()=>{ee()},children:[(0,t.jsx)(i.default,{sx:{fontSize:18}}),(0,t.jsx)("span",{children:"최종확인 및 저장"})]})]}),X?(0,t.jsx)(N,{role:"presentation",children:(0,t.jsxs)(A,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(T,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(R,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(M,{type:"button",onClick:()=>{V(!1)},children:"계속하기"}),(0,t.jsx)(P,{type:"button",onClick:()=>{V(!1),e.resetOcrAnalyze(),Z()},children:"중단하기"})]})]})}):null]})}),h=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,g=o.default.header.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,m=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,x=o.default.main.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;
`,_=o.default.section.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`,b=o.default.h2.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-5"})`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
`,w=o.default.p.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-6"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,y=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=o.default.label.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-8"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
`,v=(0,o.default)(a.default.Input.Text).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  height: 56px;
  padding: 14px 16px;
`,C=(0,o.default)(a.default.Input.Textarea).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-10"})`
  resize: none;

  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  padding: 14px 16px;

  line-height: 24px;
`,z=o.default.footer.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-11"})`
  display: flex;
  gap: 12px;
  padding: 24px 24px 48px;
`,S=o.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,j=(0,o.default)(a.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-12"})`
  ${S}
`,$=(0,o.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-13"})`
  ${S}
`,N=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-14"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,A=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-15"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,O=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-16"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,T=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-17"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,R=o.default.p.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-18"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,E=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-19"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,L=o.css`
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
`,M=(0,o.default)(a.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-20"})`
  ${L}
`,P=(0,o.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-21"})`
  ${L}
`;e.s(["default",0,p])}]);