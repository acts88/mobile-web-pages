(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,l=n){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`/client/detail/${l}?${i.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${t}/capture-guide?${r.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${t}/capture?${r.toString()}`},"buildDocumentComparisonHref",0,function({clientId:e,serviceType:n,templateId:l,contractId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:n});return null!==e&&r.set("clientId",e),null!==l&&r.set("templateId",l),null!==i&&r.set("contractId",i),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${t}/comparison?${r.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${t}/input-method?${r.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c}){let o=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&o.set("clientId",e),null!==l&&o.set("contractId",l),null!==c&&o.set("documentId",c),`${t}/photo-result?${o.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:o}){let r=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&r.set("clientId",e),null!==l&&r.set("contractId",l),null!==c&&r.set("documentId",c),null!=o&&r.set("documentStatus",o),`${t}/photo-review?${r.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let l=new URLSearchParams({serviceType:n});return null!==e&&l.set("clientId",e),`${t}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,l])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,l])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),l=e.i(88552),i=e.i(38803);let c=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,o=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 24px;
`,r=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  width: 24px;
  height: 100%;
`,u=i.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
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
`,s=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,a=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,onBack:i,onForward:d,subtitle:h}){let m=null!=h&&""!==h;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{children:i?(0,t.jsx)(u,{onClick:i,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(s,{children:e}),(0,t.jsx)(r,{children:d?(0,t.jsx)(u,{onClick:d,children:(0,t.jsx)(l.default,{})}):null})]}),m?(0,t.jsx)(a,{children:h}):null]})}])},24655,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,l])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),l=e.i(38803);let i=l.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function c(e){return function({size:t,color:l,style:c}){return(0,n.jsx)(i,{size:t,color:l,$src:e,style:c})}}let{PUBLIC_PATH:o}=t.default.env,r={Docs:c(`${o}/icon/docs.svg`),FrameSource:c(`${o}/icon/frame-source.svg`),EvShadow:c(`${o}/icon/ev-shadow.svg`),DocumentSearch:c(`${o}/icon/document-search.svg`)};e.s(["default",0,r],98273)}]);