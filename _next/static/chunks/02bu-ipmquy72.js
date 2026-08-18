(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,l=n){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`/client/detail/${l}?${i.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:u}){let o=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&o.set("clientId",e),null!==l&&o.set("contractId",l),null!==c&&o.set("documentId",c),null!=u&&o.set("documentStatus",u),`${t}/capture-guide?${o.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:u}){let o=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&o.set("clientId",e),null!==l&&o.set("contractId",l),null!==c&&o.set("documentId",c),null!=u&&o.set("documentStatus",u),`${t}/capture?${o.toString()}`},"buildDocumentComparisonHref",0,function({clientId:e,serviceType:n,templateId:l,contractId:i,documentId:c,documentStatus:u}){let o=new URLSearchParams({serviceType:n});return null!==e&&o.set("clientId",e),null!==l&&o.set("templateId",l),null!==i&&o.set("contractId",i),null!==c&&o.set("documentId",c),null!=u&&o.set("documentStatus",u),`${t}/comparison?${o.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:u}){let o=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&o.set("clientId",e),null!==l&&o.set("contractId",l),null!==c&&o.set("documentId",c),null!=u&&o.set("documentStatus",u),`${t}/input-method?${o.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c}){let u=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&u.set("clientId",e),null!==l&&u.set("contractId",l),null!==c&&u.set("documentId",c),`${t}/photo-result?${u.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:l,templateId:i,documentId:c,documentStatus:u}){let o=new URLSearchParams({serviceType:n,templateId:i});return null!==e&&o.set("clientId",e),null!==l&&o.set("contractId",l),null!==c&&o.set("documentId",c),null!=u&&o.set("documentStatus",u),`${t}/photo-review?${o.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let l=new URLSearchParams({serviceType:n});return null!==e&&l.set("clientId",e),`${t}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},54912,e=>{"use strict";var t=e.i(9735);let n=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlined");e.i(3159);var l=e.i(46907),i=e.i(33261),c=e.i(38803),u=e.i(64954),o=e.i(80629);let r=(0,l.observer)(function(){let e=(0,i.useRouter)(),l=(0,i.useSearchParams)(),c=l.get("clientId"),u=(0,o.getServiceType)(l.get("serviceType"));return(0,t.jsxs)(s,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(a,{children:(0,t.jsx)(n,{sx:{fontSize:24}})}),(0,t.jsxs)(f,{children:[(0,t.jsx)("span",{children:"분석 내용이 서류에 반영되었습니다!"}),(0,t.jsx)("span",{children:"해당 서류는 PC 웹에서 수정할 수 있습니다."})]})]}),(0,t.jsx)(m,{children:(0,t.jsx)(p,{type:"button",onClick:()=>e.push((0,o.buildDetailHref)(c,u,o.DOCUMENT_MANAGEMENT_PATH)),children:"목록으로 돌아가기"})})]})}),s=c.default.div.withConfig({componentId:"zh_mobile_web__sc-fb961571-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100%;

  background: #fff;
`,d=c.default.main.withConfig({componentId:"zh_mobile_web__sc-fb961571-1"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 24px;
`,a=c.default.div.withConfig({componentId:"zh_mobile_web__sc-fb961571-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  color: #494f53;
`,f=c.default.p.withConfig({componentId:"zh_mobile_web__sc-fb961571-3"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #494f53;
  text-align: center;
`,m=c.default.footer.withConfig({componentId:"zh_mobile_web__sc-fb961571-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px 24px 48px;
`,p=(0,c.default)(u.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-fb961571-5"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  padding: 18px 16px;
`;e.s(["default",0,r],54912)}]);