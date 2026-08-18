(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},29529,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),l=e.i(33261),o=e.i(38803),d=e.i(43174),c=e.i(80629);let f=(0,n.observer)(function(){let e=(0,l.useRouter)(),n=(0,l.useSearchParams)(),o=d.default.client.documentManagement,f=n.get("clientId"),k=(0,c.getServiceType)(n.get("serviceType")),S=[...o.contractsOfSelectedClient].reverse().map((e,t)=>({id:e.id,label:`[${t+1}차 계약]`}));return(0,t.jsxs)(a,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)(s,{children:"촬영이 필요한 서류"}),(0,t.jsx)(h,{children:S.map(e=>(0,t.jsx)(p,{type:"button",$selected:o.selectedContractId===e.id,onClick:()=>o.setSelectedContractId(e.id),children:e.label},e.id))})]}),o.shouldShowEmpty?(0,t.jsxs)(j,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(z,{children:[(0,t.jsx)(v,{children:"촬영이 필요한 서류가 없습니다."}),(0,t.jsx)(y,{children:"전체 서류 목록은 PC웹에서 확인해주세요."})]})]}):(0,t.jsx)(x,{children:o.updateNeededDocumentCards.map(i=>(0,t.jsxs)(b,{children:[(0,t.jsx)(m,{children:null===i.thumbnailImagePath?null:(0,t.jsx)(u,{src:i.thumbnailImagePath,alt:i.name})}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(w,{children:i.name}),(0,t.jsx)(I,{children:"NEED_MATCHING"===i.displayStatus?"서류 대조":"업데이트 필요"})]}),(0,t.jsx)(C,{type:"button",onClick:()=>e.push((0,c.buildDocumentInputMethodHref)({clientId:f,serviceType:k,contractId:o.selectedContractId,templateId:i.templateId,documentId:i.id,documentStatus:i.displayStatus})),children:"수기 서류 업로드하기"})]})]},i.id??i.templateId))})]})}),a=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;
`,s=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-1"})`
  flex-shrink: 0;

  padding: 8px 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,r=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
  align-items: center;
`,h=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: fit-content;
  max-width: 100%;
`,p=o.default.button.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-4"})`
  flex-shrink: 0;

  padding: 4px 8px;
  border: 1px solid ${({$selected:e})=>!0===e?"#bc440d":"#d5dae1"};
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$selected:e})=>!0===e?"#fff":"#0a0a0a"};

  background: ${({$selected:e})=>!0===e?"#bc440d":"#fff"};
`,x=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,b=o.default.article.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-6"})`
  overflow: clip;
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 100px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,m=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-7"})`
  overflow: clip;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 80px;
  height: 98px;
  padding: 10px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  background: #f3f4f6;
`,u=o.default.img.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-8"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,g=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  min-width: 0;
  height: 100%;
  padding: 12px;
`,_=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-10"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`,w=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-11"})`
  overflow: hidden;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-overflow: ellipsis;
`,I=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-12"})`
  flex-shrink: 0;

  padding: 4px 6px;
  border: 1px solid #ff6900;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;
  text-align: center;

  background: #ff6900;
`,C=o.default.button.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-13"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 4px 8px;
  border: 1px solid #ff6900;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;
  text-align: center;

  background: #ff6900;
`,j=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-14"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  color: #494f53;
  text-align: center;
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,y=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-17"})`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;e.s(["default",0,f])}]);