(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${i}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let a=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==c&&a.set("documentId",c),`${t}/capture-guide?${a.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let a=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==c&&a.set("documentId",c),`${t}/capture?${a.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let a=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==c&&a.set("documentId",c),`${t}/input-method?${a.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let a=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==c&&a.set("documentId",c),`${t}/photo-result?${a.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let a=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==c&&a.set("documentId",c),`${t}/photo-review?${a.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let i=new URLSearchParams({serviceType:n});return null!==e&&i.set("clientId",e),`${t}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 24px;
`,o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  width: 24px;
  height: 100%;
`,d=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
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
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`;e.s(["default",0,function({title:e,onBack:l,onForward:u,subtitle:h}){let f=null!=h&&""!==h;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)(o,{children:l?(0,t.jsx)(d,{onClick:l,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(r,{children:e}),(0,t.jsx)(o,{children:u?(0,t.jsx)(d,{onClick:u,children:(0,t.jsx)(i.default,{})}):null})]}),f?(0,t.jsx)(s,{children:h}):null]})}])},40621,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),l=e.i(7744),c=e.i(43174),a=e.i(38803),o=e.i(81911),d=e.i(64954);let r={MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"}};var s=e.i(80629);let u=(0,n.observer)(function({client:e,serviceType:n,activePagePath:l,children:c}){let a=(0,i.useRouter)(),u=r[n];return(0,t.jsxs)(m,{children:[(0,t.jsx)(o.default,{title:"이용자 정보",onBack:()=>a.push((0,s.buildListHref)(n))}),null===e?(0,t.jsx)(p,{children:(0,t.jsx)(_,{children:"이용자를 찾을 수 없습니다."})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(_,{children:e.name}),(0,t.jsxs)(x,{children:[null!==e.grade?(0,t.jsxs)(g,{children:[e.grade,"등급"]}):null,(0,t.jsx)(g,{children:`일상돌봄 ${u.label}관리 서비스 - ${u.code}`})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(j,{children:"계약 기간"}),(0,t.jsx)(T,{children:h(e.contractStartDate,e.contractEndDate)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(j,{children:"서비스 기간"}),(0,t.jsx)(T,{children:h(e.serviceStartDate,e.serviceEndDate)})]})]})]}),(0,t.jsx)(C,{}),(0,t.jsxs)(d.default.Tabbed.Tabs,{children:[(0,t.jsx)(d.default.Tabbed.Tab,{$selected:l===s.BASIC_INFO_PATH,onClick:()=>a.push((0,s.buildDetailHref)(e.id,n,s.BASIC_INFO_PATH)),disabled:!0,children:"기본 정보"}),(0,t.jsx)(d.default.Tabbed.Tab,{$selected:l===s.DOCUMENT_MANAGEMENT_PATH,onClick:()=>a.push((0,s.buildDetailHref)(e.id,n,s.DOCUMENT_MANAGEMENT_PATH)),children:"서류 관리"})]})]}),(0,t.jsx)(v,{children:c})]})});function h(e,t){let n=f(e),i=f(t);return null===n||null===i?"-":`${n} ~ ${i}`}function f(e){if(null===e)return null;let[t,n,i]=e.split("-");return void 0===t||""===t||void 0===n||""===n||void 0===i||""===i?e:`${t}년 ${Number(n)}월 ${Number(i)}일`}let m=a.default.main.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,p=a.default.section.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;

  background: #fff;
`,b=a.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_=a.default.h2.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-3"})`
  flex-shrink: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,x=a.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
`,g=a.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-5"})`
  padding: 2px 8px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;
`,w=a.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=a.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-7"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,j=a.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-8"})`
  flex-shrink: 0;
  font-weight: 700;
`,T=a.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-9"})`
  font-weight: 400;
`,C=a.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-10"})`
  height: 1px;
  background: #e5e7eb;
`,v=a.default.section.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-11"})`
  display: flex;
  flex: 1 0 0;
  background: #f8fafc;
`,S=(0,n.observer)(function({children:e}){let n=(0,i.usePathname)(),a=(0,i.useSearchParams)(),o=a.get("clientId"),d=(0,s.getServiceType)(a.get("serviceType")),r=c.default.client.list.findItem(o),h=n.endsWith(`/${s.BASIC_INFO_PATH}`)?s.BASIC_INFO_PATH:s.DOCUMENT_MANAGEMENT_PATH;return(0,l.useEffect)(()=>(c.default.client.documentManagement.setContext(o,d),()=>{c.default.client.documentManagement.clearContext()}),[o,d]),(0,t.jsx)(u,{client:r,serviceType:d,activePagePath:h,children:e})});e.s(["default",0,S],40621)}]);