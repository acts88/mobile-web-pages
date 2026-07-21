(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},29529,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),o=e.i(33261),l=e.i(38803),c=e.i(43174),d=e.i(80629);let f=(0,n.observer)(function(){let e=(0,o.useRouter)(),n=(0,o.useSearchParams)(),l=c.default.client.documentManagement,f=n.get("clientId"),v=(0,d.getServiceType)(n.get("serviceType"));return(0,t.jsxs)(a,{children:[(0,t.jsx)(s,{children:"촬영이 필요한 서류"}),l.shouldShowEmpty?(0,t.jsxs)(w,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(I,{children:[(0,t.jsx)(j,{children:"촬영이 필요한 서류가 없습니다."}),(0,t.jsx)(z,{children:"전체 서류 목록은 PC웹에서 확인해주세요."})]})]}):(0,t.jsx)(h,{children:l.updateNeededDocumentCards.map(i=>(0,t.jsxs)(r,{children:[(0,t.jsx)(p,{children:null===i.thumbnailImagePath?null:(0,t.jsx)(x,{src:i.thumbnailImagePath,alt:i.name})}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(u,{children:i.name}),(0,t.jsx)(g,{children:"업데이트 필요"})]}),(0,t.jsx)(_,{type:"button",onClick:()=>e.push((0,d.buildDocumentInputMethodHref)({clientId:f,serviceType:v,contractId:l.selectedContractId,templateId:i.templateId,documentId:i.id})),children:"수기 서류 업로드하기"})]})]},i.templateId))})]})}),a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;
`,s=l.default.h3.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-1"})`
  padding: 8px 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,h=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,r=l.default.article.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-3"})`
  overflow: clip;
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 100px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,p=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-4"})`
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
`,x=l.default.img.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-5"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,b=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  min-width: 0;
  height: 100%;
  padding: 12px;
`,m=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-7"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-8"})`
  overflow: hidden;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-overflow: ellipsis;
`,g=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-9"})`
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
`,_=l.default.button.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-10"})`
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
`,w=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-11"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,I=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  color: #494f53;
  text-align: center;
`,j=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-13"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,z=l.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-14"})`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;e.s(["default",0,f])}]);