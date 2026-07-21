(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${i}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==c&&d.set("documentId",c),`${t}/capture-guide?${d.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==c&&d.set("documentId",c),`${t}/capture?${d.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==c&&d.set("documentId",c),`${t}/input-method?${d.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==c&&d.set("documentId",c),`${t}/photo-result?${d.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:c}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==c&&d.set("documentId",c),`${t}/photo-review?${d.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let i=new URLSearchParams({serviceType:n});return null!==e&&i.set("clientId",e),`${t}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 24px;
`,o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
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
`;e.s(["default",0,function({title:e,onBack:l,onForward:u,subtitle:f}){let h=null!=f&&""!==f;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(o,{children:l?(0,t.jsx)(a,{onClick:l,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(r,{children:e}),(0,t.jsx)(o,{children:u?(0,t.jsx)(a,{onClick:u,children:(0,t.jsx)(i.default,{})}):null})]}),h?(0,t.jsx)(s,{children:f}):null]})}])},84091,e=>{"use strict";var t=e.i(9735),n=e.i(38797);let i=(0,n.default)((0,t.jsx)("path",{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"}),"CameraAltOutlined"),l=(0,n.default)((0,t.jsx)("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"}),"ImageOutlined"),c=(0,n.default)((0,t.jsx)("path",{d:"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3m-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72z"}),"KeyboardVoiceOutlined");e.i(3159);var d=e.i(46907),o=e.i(33261),a=e.i(7744),r=e.i(38803),s=e.i(81911),u=e.i(43174),f=e.i(80629);let h=(0,d.observer)(function(){let e=(0,o.useRouter)(),n=(0,o.useSearchParams)(),d=u.default.client.documentManagement,r=n.get("clientId"),h=(0,f.getServiceType)(n.get("serviceType")),I=n.get("templateId"),j=n.get("documentId"),v=d.updateNeededDocumentCards.find(e=>e.templateId===I&&(null===j||j===e.id))??d.updateNeededDocumentCards.find(e=>e.templateId===I),C=d.templates.find(e=>e.id===I),S=v?.name??C?.name??null;return(0,a.useEffect)(()=>(d.setContext(r,h),()=>{d.clearContext()}),[r,d,h]),(0,t.jsxs)(m,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(s.default,{title:"입력 방식 선택",subtitle:S,onBack:()=>e.push((0,f.buildDetailHref)(r,h,f.DOCUMENT_MANAGEMENT_PATH))})}),(0,t.jsx)(x,{}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(b,{type:"button",onClick:()=>e.push((0,f.buildDocumentCaptureGuideHref)({clientId:r,serviceType:h,contractId:n.get("contractId"),templateId:I??"",documentId:j})),disabled:null===I||""===I,children:[(0,t.jsx)(_,{children:(0,t.jsx)(i,{sx:{fontSize:24}})}),(0,t.jsx)(w,{children:"사진 촬영하기"})]}),(0,t.jsxs)(b,{type:"button",disabled:!0,children:[(0,t.jsx)(_,{children:(0,t.jsx)(c,{sx:{fontSize:24}})}),(0,t.jsx)(w,{children:"녹음하기"})]}),(0,t.jsxs)(b,{type:"button",disabled:!0,children:[(0,t.jsx)(_,{children:(0,t.jsx)(l,{sx:{fontSize:24}})}),(0,t.jsx)(w,{children:"앨범에서 선택하기"})]})]})]})}),m=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #f6f8fb;
`,p=r.default.header.withConfig({componentId:"zh_mobile_web__sc-af84a70c-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,x=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-2"})`
  width: 100%;
  height: 1px;
  background: #e6e9ef;
`,g=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-3"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
`,b=r.default.button.withConfig({componentId:"zh_mobile_web__sc-af84a70c-4"})`
  display: flex;
  gap: 16px;
  align-items: center;

  width: 100%;
  height: 88px;
  padding: 20px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  color: #111827;

  background: #fff;

  &:disabled {
    color: #98a2b3;
    background: #fff;
  }
`,_=r.default.span.withConfig({componentId:"zh_mobile_web__sc-af84a70c-5"})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 8px;

  color: currentcolor;

  background: #f2f5f9;
`,w=r.default.span.withConfig({componentId:"zh_mobile_web__sc-af84a70c-6"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;e.s(["default",0,h],84091)}]);