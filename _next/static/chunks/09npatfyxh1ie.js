(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:n,serviceWorkerId:l}){let i=new URLSearchParams({serviceType:n});return t(l)?(i.set("serviceWorkerId",l),`/service-worker/detail/document-management?${i.toString()}`):(null!==e&&i.set("clientId",e),`/client/detail/document-management?${i.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:n,documentId:l,documentStatus:i,monthlyScheduleClientContractId:c,monthlyScheduleSaved:o,monthlyScheduleYearMonth:r,page:a,serviceType:s,serviceWorkerId:u,templateId:d}){let h=t(u),m=new URLSearchParams({serviceType:s});return h?m.set("serviceWorkerId",u):null!==e&&m.set("clientId",e),null!=n&&m.set("contractId",n),null!=l&&m.set("documentId",l),null!=i&&m.set("documentStatus",i),null!=c&&m.set("monthlyScheduleClientContractId",c),!0===o&&m.set("monthlyScheduleSaved","true"),null!=r&&m.set("monthlyScheduleYearMonth",r),null!=d&&m.set("templateId",d),`${h?"/service-worker/document-management":"/client/document-management"}/${a}?${m.toString()}`},"isServiceWorkerDocumentFlow",0,t])},33261,(e,t,n)=>{t.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",l="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,l,"buildDetailHref",0,function(e,t,n=l){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`/client/detail/${n}?${i.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:t,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${n}/capture-guide?${r.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:t,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${n}/capture?${r.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:t,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${n}/input-method?${r.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`${n}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,l])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,l])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),l=e.i(88552),i=e.i(38803);let c=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,o=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,r=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,a=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,s=i.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,u=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,d=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:i,onBack:h,onForward:m,subtitle:f}){let g=null!=f&&""!==f;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{children:h?(0,t.jsx)(s,{onClick:h,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(u,{children:e}),(0,t.jsxs)(a,{children:[i,m?(0,t.jsx)(s,{onClick:m,children:(0,t.jsx)(l.default,{})}):null]})]}),g?(0,t.jsx)(d,{children:f}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),l=e.i(38803);let i=l.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function c(e){return function({size:t,color:l,style:c}){return(0,n.jsx)(i,{size:t,color:l,$src:e,style:c})}}let{PUBLIC_PATH:o}=t.default.env,r={Docs:c(`${o}/icon/docs.svg`),FrameSource:c(`${o}/icon/frame-source.svg`),EvShadow:c(`${o}/icon/ev-shadow.svg`),DocumentSearch:c(`${o}/icon/document-search.svg`),WandShine:c(`${o}/icon/wand-shine.svg`)};e.s(["default",0,r],98273)},24655,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,l])}]);