(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:n,serviceWorkerId:i}){let l=new URLSearchParams({serviceType:n});return t(i)?(l.set("serviceWorkerId",i),`/service-worker/detail/document-management?${l.toString()}`):(null!==e&&l.set("clientId",e),`/client/detail/document-management?${l.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:n,documentId:i,documentStatus:l,monthlyScheduleClientContractId:o,monthlyScheduleSaved:r,monthlyScheduleYearMonth:a,page:c,serviceType:d,serviceWorkerId:s,templateId:u}){let h=t(s),f=new URLSearchParams({serviceType:d});return h?f.set("serviceWorkerId",s):null!==e&&f.set("clientId",e),null!=n&&f.set("contractId",n),null!=i&&f.set("documentId",i),null!=l&&f.set("documentStatus",l),null!=o&&f.set("monthlyScheduleClientContractId",o),!0===r&&f.set("monthlyScheduleSaved","true"),null!=a&&f.set("monthlyScheduleYearMonth",a),null!=u&&f.set("templateId",u),`${h?"/service-worker/document-management":"/client/document-management"}/${c}?${f.toString()}`},"isServiceWorkerDocumentFlow",0,t])},33261,(e,t,n)=>{t.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let a=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==o&&a.set("documentId",o),null!=r&&a.set("documentStatus",r),`${n}/capture-guide?${a.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let a=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==o&&a.set("documentId",o),null!=r&&a.set("documentStatus",r),`${n}/capture?${a.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let a=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==o&&a.set("documentId",o),null!=r&&a.set("documentStatus",r),`${n}/input-method?${a.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`${n}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,d=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:l,onBack:h,onForward:f,subtitle:m}){let p=null!=m&&""!==m;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)(a,{children:h?(0,t.jsx)(d,{onClick:h,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(s,{children:e}),(0,t.jsxs)(c,{children:[l,f?(0,t.jsx)(d,{onClick:f,children:(0,t.jsx)(i.default,{})}):null]})]}),p?(0,t.jsx)(u,{children:m}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:i,style:o}){return(0,n.jsx)(l,{size:t,color:i,$src:e,style:o})}}let{PUBLIC_PATH:r}=t.default.env,a={Docs:o(`${r}/icon/docs.svg`),FrameSource:o(`${r}/icon/frame-source.svg`),EvShadow:o(`${r}/icon/ev-shadow.svg`),DocumentSearch:o(`${r}/icon/document-search.svg`),WandShine:o(`${r}/icon/wand-shine.svg`)};e.s(["default",0,a],98273)},10703,e=>{"use strict";var t=e.i(9735),n=e.i(88552);e.i(3159);var i=e.i(46907),l=e.i(33261),o=e.i(7744),r=e.i(38803),a=e.i(51413),c=e.i(98273),d=e.i(81911),s=e.i(62659),u=e.i(43174),h=e.i(43172),f=e.i(80629);let m=(0,i.observer)(function(){let e=(0,l.useRouter)(),i=(0,l.useSearchParams)(),r=(0,o.useRef)(null),s=i.get("clientId"),m=i.get("serviceWorkerId"),z=(0,a.isServiceWorkerDocumentFlow)(m),U=u.default.serviceWorker.documentManagement,G=z?U:u.default.client.documentManagement,q=(0,f.getServiceType)(i.get("serviceType")),Y=i.get("contractId"),K=i.get("templateId"),V=i.get("documentId"),X=i.get("documentStatus"),J=i.get("monthlyScheduleClientContractId"),Q=i.get("monthlyScheduleYearMonth"),Z=G.updateNeededDocumentCards.find(e=>e.templateId===K&&(null===V||V===e.id))??G.updateNeededDocumentCards.find(e=>e.templateId===K),ee=G.templates.find(e=>e.id===K),et=Z?.name??ee?.name??null,en=z&&"NEED_UPDATE"===X&&(0,h.isSalaryProvisionMonthlyScheduleDocument)(et),ei=et??"서류",el=function(e){let t=e.trim();if(0===t.length)return"를";let n=t.at(-1);if(void 0===n)return"를";let i=n.charCodeAt(0);return i<44032||i>55203?"를":(i-44032)%28!=0?"을":"를"}(ei),eo=G.capturedPhotoDataUrl,[er,ea]=(0,o.useState)({height:0,width:0}),[ec,ed]=(0,o.useState)(0),[es,eu]=(0,o.useState)(!1),[eh,ef]=(0,o.useState)(!1),em=en?U.monthlyScheduleCreateStatus:G.ocrAnalyzeStatus,ep="loading"===em,eg="success"===em,ex=ep||eh,e_=en&&(null===U.monthlyScheduleClientContractId||""===U.monthlyScheduleYearMonth.trim()),ew=()=>{e.push((0,a.buildDocumentFlowHref)({clientId:s,serviceType:q,contractId:Y,templateId:K??"",documentId:V,documentStatus:X,monthlyScheduleClientContractId:J,monthlyScheduleYearMonth:Q,page:"capture",serviceWorkerId:m}))},eb=(0,o.useMemo)(()=>{let e=er.width,t=er.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[er.height,er.width]);(0,o.useEffect)(()=>{G.resetOcrAnalyze(),U.resetMonthlyScheduleDocumentCreate()},[G,U]),(0,o.useEffect)(()=>{let e=r.current;if(null===e)return;let t=()=>{ea({width:Math.floor(e.clientWidth-40),height:Math.floor(e.clientHeight-40)})};t();let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[]),(0,o.useEffect)(()=>{if(es&&eg&&!eh){if("NEED_MATCHING"===X)return void e.push((0,a.buildDocumentFlowHref)({clientId:s,serviceType:q,templateId:K,contractId:Y,documentId:V,documentStatus:X,monthlyScheduleClientContractId:J,monthlyScheduleYearMonth:Q,page:"comparison",serviceWorkerId:m}));if(en)return void U.refreshDocuments().finally(()=>{e.push((0,a.buildDocumentFlowHref)({clientId:s,serviceType:q,page:"save-success",serviceWorkerId:m}))});e.push((0,a.buildDocumentFlowHref)({clientId:s,serviceType:q,contractId:Y,templateId:K??"",documentId:V,page:"photo-result",serviceWorkerId:m}))}},[s,Y,V,X,es,eh,eg,en,J,Q,e,U,q,m,K]),(0,o.useEffect)(()=>{if(!ep)return;let e=performance.now(),t=0,n=i=>{ed(Math.min(100*(1-Math.exp(-((i-e)/1e3*.05))),98)),t=window.requestAnimationFrame(n)};return t=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(t)}},[ep]);let eI=async()=>{if(null===eo||null===K||""===K.trim()||e_)return;G.resetOcrAnalyze(),eu(!0),ed(0);let e=await fetch(eo),t=await e.blob(),n=new File([t],"document-photo.jpg",{type:t.type||"image/jpeg"});if(en)return void U.requestMonthlyScheduleDocumentCreate(n);if(null!==V&&""!==V.trim()){if(z)return void u.default.serviceWorker.documentManagement.requestOcrAnalyze({documentId:V,file:n});u.default.client.documentManagement.requestOcrAnalyze("NEED_MATCHING"===X?{templateId:K,file:n}:{templateId:K,documentId:V,file:n})}};return ex?(0,t.jsxs)(p,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(d.default,{title:"사진 분석하기",onBack:()=>ef(!0)})}),(0,t.jsx)(x,{}),(0,t.jsx)($,{children:(0,t.jsxs)(D,{children:[(0,t.jsx)(c.default.DocumentSearch,{size:20}),(0,t.jsxs)(A,{children:[(0,t.jsx)(M,{children:"업로드한 사진을 분석하고 있습니다."}),(0,t.jsx)(H,{children:"화면을 절대 끄지 마세요."})]}),(0,t.jsx)(E,{children:(0,t.jsx)(T,{$progress:ec})})]})}),eh?(0,t.jsx)(N,{role:"presentation",children:(0,t.jsxs)(P,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(L,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(O,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(B,{type:"button",onClick:()=>{ef(!1)},children:"계속하기"}),(0,t.jsx)(W,{type:"button",onClick:()=>{ef(!1),G.resetOcrAnalyze(),e.push((0,a.buildDocumentFlowHref)({clientId:s,serviceType:q,contractId:Y,templateId:K??"",documentId:V,documentStatus:X,monthlyScheduleClientContractId:J,monthlyScheduleYearMonth:Q,page:"capture-guide",serviceWorkerId:m}))},children:"중단하기"})]})]})}):null]}):(0,t.jsxs)(p,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(d.default,{title:"NEED_MATCHING"===X?et??"서류 비교하기":"사진 확인하기",onBack:ew})}),(0,t.jsx)(x,{}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(w,{children:["NEED_MATCHING"===X?`수기 ${ei}${el} 확인해 주세요.`:"촬영한 사진을 확인해 주세요.",(0,t.jsx)("br",{}),"NEED_MATCHING"===X?`전산 ${et}의 내용과 비교분석을 시작합니다.`:"잘못 촬영했다면 다시 촬영하기를 눌러주세요."]}),"error"===em?(0,t.jsx)(b,{children:"사진 분석에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요."}):null,(0,t.jsx)(I,{ref:r,children:(0,t.jsx)(y,{style:eb??void 0,children:null===eo?(0,t.jsx)(v,{children:"사진을 불러올 수 없습니다."}):(0,t.jsx)(C,{src:eo,alt:"촬영한 사진"})})})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)(S,{type:"button",onClick:ew,children:"다시 촬영하기"}),(0,t.jsxs)(k,{type:"button",onClick:()=>{eI()},disabled:null===eo||null===K||!en&&null===V||e_||ep,$processing:ep,children:[(0,t.jsx)("span",{children:"NEED_MATCHING"===X?"비교 분석 시작":"분석 시작하기"}),(0,t.jsx)(n.default,{sx:{fontSize:20}})]})]})]})}),p=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,g=r.default.header.withConfig({componentId:"zh_mobile_web__sc-a7326e26-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,x=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,_=r.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  padding: 24px;
`,w=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-4"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #111827;
  text-align: center;
`,b=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-5"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #dc2626;
  text-align: center;
`,I=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-6"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;
  padding: 20px;
`,y=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  aspect-ratio: 210/297;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  background: #fff;
`,C=r.default.img.withConfig({componentId:"zh_mobile_web__sc-a7326e26-8"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,v=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`,j=r.default.footer.withConfig({componentId:"zh_mobile_web__sc-a7326e26-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  padding: 24px 24px 48px;
`,z=r.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px; /* 125% */
`,S=(0,r.default)(s.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-11"})`
  ${z}
`,k=(0,r.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-12"})`
  ${z}
`,$=r.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-13"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  padding: 24px;
`,D=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,A=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,M=r.default.h2.withConfig({componentId:"zh_mobile_web__sc-a7326e26-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,H=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,E=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-18"})`
  position: relative;

  overflow: hidden;

  width: 100%;
  height: 8px;
  border-radius: 999px;

  background: #e6e0ff;
`,T=r.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh_mobile_web__sc-a7326e26-19"})`
  transform-origin: left center;

  width: 100%;
  height: 100%;
  border-radius: 999px;

  background: #5635ff;
`,N=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-20"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,P=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-21"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,F=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-22"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,L=r.default.h3.withConfig({componentId:"zh_mobile_web__sc-a7326e26-23"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,O=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-24"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,R=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-25"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,U=r.css`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;
`,B=(0,r.default)(s.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-26"})`
  ${U}
`,W=(0,r.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-27"})`
  ${U}
`;e.s(["default",0,m])}]);