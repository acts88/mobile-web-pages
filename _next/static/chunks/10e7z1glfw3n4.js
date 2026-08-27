(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:n,serviceWorkerId:l}){let i=new URLSearchParams({serviceType:n});return t(l)?(i.set("serviceWorkerId",l),`/service-worker/detail/document-management?${i.toString()}`):(null!==e&&i.set("clientId",e),`/client/detail/document-management?${i.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:n,documentId:l,documentStatus:i,monthlyScheduleClientContractId:c,monthlyScheduleSaved:o,monthlyScheduleYearMonth:d,page:a,serviceType:r,serviceWorkerId:u,templateId:s}){let h=t(u),f=new URLSearchParams({serviceType:r});return h?f.set("serviceWorkerId",u):null!==e&&f.set("clientId",e),null!=n&&f.set("contractId",n),null!=l&&f.set("documentId",l),null!=i&&f.set("documentStatus",i),null!=c&&f.set("monthlyScheduleClientContractId",c),!0===o&&f.set("monthlyScheduleSaved","true"),null!=d&&f.set("monthlyScheduleYearMonth",d),null!=s&&f.set("templateId",s),`${h?"/service-worker/document-management":"/client/document-management"}/${a}?${f.toString()}`},"isServiceWorkerDocumentFlow",0,t])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",l="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,l,"buildDetailHref",0,function(e,t,n=l){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`/client/detail/${n}?${i.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:i,documentId:c,documentStatus:o}){let d=new URLSearchParams({serviceType:t,templateId:i});return null!==e&&d.set("clientId",e),null!==l&&d.set("contractId",l),null!==c&&d.set("documentId",c),null!=o&&d.set("documentStatus",o),`${n}/capture-guide?${d.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:i,documentId:c,documentStatus:o}){let d=new URLSearchParams({serviceType:t,templateId:i});return null!==e&&d.set("clientId",e),null!==l&&d.set("contractId",l),null!==c&&d.set("documentId",c),null!=o&&d.set("documentStatus",o),`${n}/capture?${d.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:i,documentId:c,documentStatus:o}){let d=new URLSearchParams({serviceType:t,templateId:i});return null!==e&&d.set("clientId",e),null!==l&&d.set("contractId",l),null!==c&&d.set("documentId",c),null!=o&&d.set("documentStatus",o),`${n}/input-method?${d.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`${n}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,l])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,l])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),l=e.i(88552),i=e.i(38803);let c=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,d=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
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
`,r=i.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,s=i.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:i,onBack:h,onForward:f,subtitle:m}){let p=null!=m&&""!==m;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(d,{children:h?(0,t.jsx)(r,{onClick:h,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(u,{children:e}),(0,t.jsxs)(a,{children:[i,f?(0,t.jsx)(r,{onClick:f,children:(0,t.jsx)(l.default,{})}):null]})]}),p?(0,t.jsx)(s,{children:m}):null]})}])},84091,e=>{"use strict";var t=e.i(9735),n=e.i(38797);let l=(0,n.default)((0,t.jsx)("path",{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"}),"CameraAltOutlined"),i=(0,n.default)((0,t.jsx)("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"}),"ImageOutlined"),c=(0,n.default)((0,t.jsx)("path",{d:"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3m-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72z"}),"KeyboardVoiceOutlined");e.i(3159);var o=e.i(46907),d=e.i(33261),a=e.i(7744),r=e.i(38803),u=e.i(51413),s=e.i(81911),h=e.i(43174),f=e.i(43172),m=e.i(80629);let p=(0,o.observer)(function(){let e=(0,d.useRouter)(),n=(0,d.useSearchParams)(),o=n.get("clientId"),r=n.get("serviceWorkerId"),p=(0,u.isServiceWorkerDocumentFlow)(r),k=h.default.serviceWorker.documentManagement,H=p?k:h.default.client.documentManagement,D=(0,m.getServiceType)(n.get("serviceType")),M=n.get("templateId"),L=n.get("documentId"),$=n.get("documentStatus"),P=H.updateNeededDocumentCards.find(e=>e.templateId===M&&(null===L||L===e.id))??H.updateNeededDocumentCards.find(e=>e.templateId===M),A=H.templates.find(e=>e.id===M),T=P?.name??A?.name??null,U=p&&"NEED_UPDATE"===$&&(0,f.isSalaryProvisionMonthlyScheduleDocument)(T),R=U&&(null===k.monthlyScheduleClientContractId||""===k.monthlyScheduleYearMonth.trim());return(0,a.useEffect)(()=>{if(!p)return H.setContext(o,D),()=>{H.clearContext()}},[o,H,p,D]),(0,t.jsxs)(g,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(s.default,{title:"입력 방식 선택",subtitle:T,onBack:()=>e.push((0,u.buildDocumentFlowDetailHref)({clientId:o,serviceType:D,serviceWorkerId:r}))})}),(0,t.jsx)(b,{}),(0,t.jsxs)(_,{children:[U?(0,t.jsxs)(w,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(S,{children:"년월"}),(0,t.jsx)(C,{type:"month",value:k.monthlyScheduleYearMonth,onChange:e=>k.setMonthlyScheduleYearMonth(e.target.value)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(S,{children:"이용자 계약"}),(0,t.jsxs)(v,{value:k.monthlyScheduleClientContractId??"",onChange:e=>k.setMonthlyScheduleClientContractId(e.target.value||null),children:[(0,t.jsx)("option",{value:"",children:"이용자 계약 선택"}),k.monthlyScheduleClientContracts.map(e=>(0,t.jsx)("option",{value:e.contractId,children:null===e.contractEndDate?e.clientName:`${e.clientName} (${e.contractEndDate.replaceAll("-",".")})`},e.contractId))]})]})]}):null,(0,t.jsxs)(j,{type:"button",onClick:()=>e.push((0,u.buildDocumentFlowHref)({clientId:o,serviceType:D,contractId:n.get("contractId"),templateId:M??"",documentId:L,documentStatus:$,monthlyScheduleClientContractId:k.monthlyScheduleClientContractId,monthlyScheduleYearMonth:k.monthlyScheduleYearMonth,page:"capture-guide",serviceWorkerId:r})),disabled:null===M||""===M||R,children:[(0,t.jsx)(y,{children:(0,t.jsx)(l,{sx:{fontSize:24}})}),(0,t.jsx)(z,{children:"사진 촬영하기"})]}),(0,t.jsxs)(j,{type:"button",disabled:!0,children:[(0,t.jsx)(y,{children:(0,t.jsx)(c,{sx:{fontSize:24}})}),(0,t.jsx)(z,{children:"녹음하기"})]}),(0,t.jsxs)(j,{type:"button",disabled:!0,children:[(0,t.jsx)(y,{children:(0,t.jsx)(i,{sx:{fontSize:24}})}),(0,t.jsx)(z,{children:"앨범에서 선택하기"})]})]})]})}),g=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #f6f8fb;
`,x=r.default.header.withConfig({componentId:"zh_mobile_web__sc-af84a70c-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,b=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-2"})`
  width: 100%;
  height: 1px;
  background: #e6e9ef;
`,_=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-3"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
`,w=r.default.div.withConfig({componentId:"zh_mobile_web__sc-af84a70c-4"})`
  display: grid;
  grid-template-columns: 136px minmax(0, 1fr);
  gap: 10px;
`,I=r.default.label.withConfig({componentId:"zh_mobile_web__sc-af84a70c-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,S=r.default.span.withConfig({componentId:"zh_mobile_web__sc-af84a70c-6"})`
  font-size: 12px;
  font-weight: 700;
  color: #494f53;
`,C=r.default.input.withConfig({componentId:"zh_mobile_web__sc-af84a70c-7"})`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #d5dae1;
  border-radius: 8px;

  color: #111827;

  background: #fff;
`,v=r.default.select.withConfig({componentId:"zh_mobile_web__sc-af84a70c-8"})`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #d5dae1;
  border-radius: 8px;

  color: #111827;

  background: #fff;
`,j=r.default.button.withConfig({componentId:"zh_mobile_web__sc-af84a70c-9"})`
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
`,y=r.default.span.withConfig({componentId:"zh_mobile_web__sc-af84a70c-10"})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 8px;

  color: currentcolor;

  background: #f2f5f9;
`,z=r.default.span.withConfig({componentId:"zh_mobile_web__sc-af84a70c-11"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;e.s(["default",0,p],84091)}]);