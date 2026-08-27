(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:a,documentStatus:c}){let d=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==a&&d.set("documentId",a),null!=c&&d.set("documentStatus",c),`${n}/capture-guide?${d.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:a,documentStatus:c}){let d=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==a&&d.set("documentId",a),null!=c&&d.set("documentStatus",c),`${n}/capture?${d.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:a,documentStatus:c}){let d=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==a&&d.set("documentId",a),null!=c&&d.set("documentStatus",c),`${n}/input-method?${d.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`${n}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,r=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:l,onBack:f,onForward:h,subtitle:m}){let p=null!=m&&""!==m;return(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{children:f?(0,t.jsx)(r,{onClick:f,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(s,{children:e}),(0,t.jsxs)(o,{children:[l,h?(0,t.jsx)(r,{onClick:h,children:(0,t.jsx)(i.default,{})}):null]})]}),p?(0,t.jsx)(u,{children:m}):null]})}])},40621,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),l=e.i(7744),a=e.i(43174),c=e.i(38803),d=e.i(81911),o=e.i(62659),r=e.i(7242),s=e.i(80629);let u=(0,n.observer)(function({client:e,serviceType:n,activePagePath:l,children:a}){let c=(0,i.useRouter)(),u=r.default[n];return(0,t.jsxs)(m,{children:[(0,t.jsx)(d.default,{title:"이용자 정보",onBack:()=>c.push((0,s.buildListHref)(n))}),null===e?(0,t.jsx)(p,{children:(0,t.jsx)(b,{children:"이용자를 찾을 수 없습니다."})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(b,{children:e.name}),(0,t.jsxs)(g,{children:[null!==e.grade?(0,t.jsxs)(x,{children:[e.grade,"등급"]}):null,(0,t.jsx)(x,{children:`일상돌봄 ${u.label}관리 서비스 - ${u.code}`})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(C,{children:"계약 기간"}),(0,t.jsx)(v,{children:f(e.contractStartDate,e.contractEndDate)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(C,{children:"서비스 기간"}),(0,t.jsx)(v,{children:f(e.serviceStartDate,e.serviceEndDate)})]})]})]}),(0,t.jsx)(T,{}),(0,t.jsxs)(o.default.Tabbed.Tabs,{children:[(0,t.jsx)(o.default.Tabbed.Tab,{$selected:l===s.BASIC_INFO_PATH,onClick:()=>c.push((0,s.buildDetailHref)(e.id,n,s.BASIC_INFO_PATH)),disabled:!0,children:"기본 정보"}),(0,t.jsx)(o.default.Tabbed.Tab,{$selected:l===s.DOCUMENT_MANAGEMENT_PATH,onClick:()=>c.push((0,s.buildDetailHref)(e.id,n,s.DOCUMENT_MANAGEMENT_PATH)),children:"서류 관리"})]})]}),(0,t.jsx)(j,{children:a})]})});function f(e,t){let n=h(e),i=h(t);return null===n||null===i?"-":`${n} ~ ${i}`}function h(e){if(null===e)return null;let[t,n,i]=e.split("-");return void 0===t||""===t||void 0===n||""===n||void 0===i||""===i?e:`${t}년 ${Number(n)}월 ${Number(i)}일`}let m=c.default.main.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,p=c.default.section.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;

  background: #fff;
`,_=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,b=c.default.h2.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-3"})`
  flex-shrink: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,g=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
`,x=c.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-5"})`
  padding: 2px 8px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;
`,w=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-7"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,C=c.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-8"})`
  flex-shrink: 0;
  font-weight: 700;
`,v=c.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-9"})`
  font-weight: 400;
`,T=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-10"})`
  height: 1px;
  background: #e5e7eb;
`,j=c.default.section.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-11"})`
  display: flex;
  flex: 1 0 0;
  background: #f8fafc;
`,S=(0,n.observer)(function({children:e}){let n=(0,i.usePathname)(),c=(0,i.useSearchParams)(),d=c.get("clientId"),o=(0,s.getServiceType)(c.get("serviceType")),r=a.default.client.documentManagement,f=a.default.client.list.findItem(d),h=r.contractsOfSelectedClient.find(e=>e.id===r.selectedContractId),m=null===f?null:void 0===h?f:{...f,grade:h.grade,serviceType:h.serviceType??o,managementCode:h.managementCode,contractStartDate:h.contractStartDate,contractEndDate:h.contractEndDate,serviceStartDate:h.serviceStartDate,serviceEndDate:h.serviceEndDate},p=n.endsWith(`/${s.BASIC_INFO_PATH}`)?s.BASIC_INFO_PATH:s.DOCUMENT_MANAGEMENT_PATH;return(0,l.useEffect)(()=>(a.default.client.documentManagement.setContext(d,o),()=>{a.default.client.documentManagement.clearContext()}),[d,o]),(0,t.jsx)(u,{client:m,serviceType:o,activePagePath:p,children:e})});e.s(["default",0,S],40621)}]);