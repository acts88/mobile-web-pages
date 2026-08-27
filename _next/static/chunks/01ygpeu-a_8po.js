(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:i,serviceWorkerId:n}){let l=new URLSearchParams({serviceType:i});return t(n)?(l.set("serviceWorkerId",n),`/service-worker/detail/document-management?${l.toString()}`):(null!==e&&l.set("clientId",e),`/client/detail/document-management?${l.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:i,documentId:n,documentStatus:l,monthlyScheduleClientContractId:o,monthlyScheduleSaved:a,monthlyScheduleYearMonth:d,page:c,serviceType:s,serviceWorkerId:r,templateId:f}){let h=t(r),u=new URLSearchParams({serviceType:s});return h?u.set("serviceWorkerId",r):null!==e&&u.set("clientId",e),null!=i&&u.set("contractId",i),null!=n&&u.set("documentId",n),null!=l&&u.set("documentStatus",l),null!=o&&u.set("monthlyScheduleClientContractId",o),!0===a&&u.set("monthlyScheduleSaved","true"),null!=d&&u.set("monthlyScheduleYearMonth",d),null!=f&&u.set("templateId",f),`${h?"/service-worker/document-management":"/client/document-management"}/${c}?${u.toString()}`},"isServiceWorkerDocumentFlow",0,t])},98273,e=>{"use strict";var t=e.i(25521),i=e.i(9735),n=e.i(38803);let l=n.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:n,style:o}){return(0,i.jsx)(l,{size:t,color:n,$src:e,style:o})}}let{PUBLIC_PATH:a}=t.default.env,d={Docs:o(`${a}/icon/docs.svg`),FrameSource:o(`${a}/icon/frame-source.svg`),EvShadow:o(`${a}/icon/ev-shadow.svg`),DocumentSearch:o(`${a}/icon/document-search.svg`),WandShine:o(`${a}/icon/wand-shine.svg`)};e.s(["default",0,d],98273)},24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},14184,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),l=e.i(33261),o=e.i(38803),a=e.i(51413),d=e.i(98273),c=e.i(43174),s=e.i(43172),r=e.i(30190);let f=(0,n.observer)(function(){let e=(0,l.useRouter)(),n=(0,l.useSearchParams)(),o=c.default.serviceWorker.documentManagement,f=n.get("serviceWorkerId"),D=(0,r.getServiceType)(n.get("serviceType")),E=[...o.contracts].reverse().map((e,t)=>({id:e.id,label:`[${t+1}차 계약]`}));return(0,t.jsxs)(h,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(p,{children:"촬영이 필요한 서류"}),(0,t.jsx)(m,{children:E.map(e=>(0,t.jsx)(x,{type:"button",$selected:o.selectedContractId===e.id,onClick:()=>o.setSelectedContractId(e.id),children:e.label},e.id))})]}),!0===o.shouldShowEmpty?(0,t.jsxs)(g,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(_,{children:[(0,t.jsx)(b,{children:"촬영이 필요한 서류가 없습니다."}),(0,t.jsx)(w,{children:"전체 서류 목록은 PC웹에서 확인해주세요."})]})]}):(0,t.jsx)(v,{children:o.documentCards.map(i=>{let n="LINKED_COMPLETED"===i.displayStatus&&(0,s.isSalaryProvisionMonthlyScheduleDocument)(i.name);return(0,t.jsxs)(I,{children:[(0,t.jsx)(y,{children:null===i.thumbnailImagePath?null:(0,t.jsx)(C,{src:i.thumbnailImagePath,alt:i.name})}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(j,{children:i.name}),(0,t.jsxs)(k,{children:["LINKED_COMPLETED"===i.displayStatus?(0,t.jsx)(d.default.WandShine,{size:16}):null,i.statusUi.badge.label]})]}),(0,t.jsx)($,{type:"button",disabled:"NEED_MATCHING"!==i.displayStatus&&("NEED_UPDATE"!==i.displayStatus||!(0,s.isSalaryProvisionMonthlyScheduleDocument)(i.name))&&!n,onClick:()=>e.push((0,a.buildDocumentFlowHref)({clientId:null,contractId:o.selectedContractId,documentId:i.id,documentStatus:i.displayStatus,page:n?"comparison":"input-method",serviceType:D,serviceWorkerId:f,templateId:i.templateId})),children:n?"서류 최종 확인하기":"수기 서류 업로드하기"})]})]},i.id??i.name)})})]})}),h=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;

  color: #494f53;
`,u=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
  align-items: center;
`,p=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-9859e24a-2"})`
  flex-shrink: 0;

  padding: 8px 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,m=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: fit-content;
  max-width: 100%;
`,x=o.default.button.withConfig({componentId:"zh_mobile_web__sc-9859e24a-4"})`
  flex-shrink: 0;

  padding: 4px 8px;
  border: 1px solid ${({$selected:e})=>!0===e?"#bc440d":"#d5dae1"};
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$selected:e})=>!0===e?"#fff":"#0a0a0a"};

  background: ${({$selected:e})=>!0===e?"#bc440d":"#fff"};
`,g=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-5"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,_=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  color: #494f53;
  text-align: center;
`,b=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-7"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,w=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-8"})`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-9"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,I=o.default.article.withConfig({componentId:"zh_mobile_web__sc-9859e24a-10"})`
  overflow: clip;
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 100px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,y=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-11"})`
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
`,C=o.default.img.withConfig({componentId:"zh_mobile_web__sc-9859e24a-12"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,S=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  min-width: 0;
  height: 100%;
  padding: 12px;
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-14"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`,j=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-15"})`
  overflow: hidden;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-overflow: ellipsis;
`,k=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-16"})`
  display: inline-flex;
  flex-shrink: 0;
  gap: 4px;
  align-items: center;

  padding: 4px 6px;
  border: 1px solid #ff6900;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;
  text-align: center;

  background: #ff6900;
`,$=o.default.button.withConfig({componentId:"zh_mobile_web__sc-9859e24a-17"})`
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
`;e.s(["default",0,f])}]);