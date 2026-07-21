(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${i}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==c&&r.set("documentId",c),`${t}/capture-guide?${r.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==c&&r.set("documentId",c),`${t}/capture?${r.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==c&&r.set("documentId",c),`${t}/input-method?${r.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==c&&r.set("documentId",c),`${t}/photo-result?${r.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==c&&r.set("documentId",c),`${t}/photo-review?${r.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let i=new URLSearchParams({serviceType:n});return null!==e&&i.set("clientId",e),`${t}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},54912,e=>{"use strict";var t=e.i(9735);let n=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlined");e.i(3159);var i=e.i(46907),l=e.i(33261),c=e.i(38803),r=e.i(64954),o=e.i(80629);let u=(0,i.observer)(function(){let e=(0,l.useRouter)(),i=(0,l.useSearchParams)(),c=i.get("clientId"),r=(0,o.getServiceType)(i.get("serviceType"));return(0,t.jsxs)(s,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(a,{children:(0,t.jsx)(n,{sx:{fontSize:24}})}),(0,t.jsx)(f,{children:"분석 내용이 서류에 반영되었습니다!"})]}),(0,t.jsx)(m,{children:(0,t.jsx)(h,{type:"button",onClick:()=>e.push((0,o.buildDetailHref)(c,r,o.DOCUMENT_MANAGEMENT_PATH)),children:"목록으로 돌아가기"})})]})}),s=c.default.div.withConfig({componentId:"zh_mobile_web__sc-fb961571-0"})`
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
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,m=c.default.footer.withConfig({componentId:"zh_mobile_web__sc-fb961571-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px 24px 48px;
`,h=(0,c.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-fb961571-5"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  padding: 18px 16px;
`;e.s(["default",0,u],54912)}]);