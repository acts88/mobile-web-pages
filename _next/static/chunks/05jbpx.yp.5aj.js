(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${i}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=d&&r.set("documentStatus",d),`${t}/capture-guide?${r.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=d&&r.set("documentStatus",d),`${t}/capture?${r.toString()}`},"buildDocumentComparisonHref",0,function({clientId:e,serviceType:n,templateId:i,contractId:l,documentId:o,documentStatus:d}){let r=new URLSearchParams({serviceType:n});return null!==e&&r.set("clientId",e),null!==i&&r.set("templateId",i),null!==l&&r.set("contractId",l),null!==o&&r.set("documentId",o),null!=d&&r.set("documentStatus",d),`${t}/comparison?${r.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=d&&r.set("documentStatus",d),`${t}/input-method?${r.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==o&&d.set("documentId",o),`${t}/photo-result?${d.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let r=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=d&&r.set("documentStatus",d),`${t}/photo-review?${r.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let i=new URLSearchParams({serviceType:n});return null!==e&&i.set("clientId",e),`${t}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
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
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`;e.s(["default",0,function({title:e,onBack:l,onForward:u,subtitle:f}){let h=null!=f&&""!==f;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(r,{children:l?(0,t.jsx)(a,{onClick:l,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(c,{children:e}),(0,t.jsx)(r,{children:u?(0,t.jsx)(a,{onClick:u,children:(0,t.jsx)(i.default,{})}):null})]}),h?(0,t.jsx)(s,{children:f}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:i,style:o}){return(0,n.jsx)(l,{size:t,color:i,$src:e,style:o})}}let{PUBLIC_PATH:d}=t.default.env,r={Docs:o(`${d}/icon/docs.svg`),FrameSource:o(`${d}/icon/frame-source.svg`),EvShadow:o(`${d}/icon/ev-shadow.svg`),DocumentSearch:o(`${d}/icon/document-search.svg`)};e.s(["default",0,r],98273)},10703,e=>{"use strict";var t=e.i(9735),n=e.i(88552);e.i(3159);var i=e.i(46907),l=e.i(33261),o=e.i(7744),d=e.i(38803),r=e.i(98273),a=e.i(81911),c=e.i(64954),s=e.i(43174),u=e.i(80629);let f=(0,i.observer)(function(){let e=s.default.client.documentManagement,i=(0,l.useRouter)(),d=(0,l.useSearchParams)(),c=(0,o.useRef)(null),f=d.get("clientId"),z=(0,u.getServiceType)(d.get("serviceType")),U=d.get("contractId"),F=d.get("templateId"),G=d.get("documentId"),q=d.get("documentStatus"),K=e.updateNeededDocumentCards.find(e=>e.templateId===F&&(null===G||G===e.id))??e.updateNeededDocumentCards.find(e=>e.templateId===F),W=e.templates.find(e=>e.id===F),X=K?.name??W?.name??null,J=X??"서류",Q=function(e){let t=e.trim();if(0===t.length)return"를";let n=t.at(-1);if(void 0===n)return"를";let i=n.charCodeAt(0);return i<44032||i>55203?"를":(i-44032)%28!=0?"을":"를"}(J),V=e.capturedPhotoDataUrl,[Y,Z]=(0,o.useState)({height:0,width:0}),[ee,et]=(0,o.useState)(0),[en,ei]=(0,o.useState)(!1),[el,eo]=(0,o.useState)(!1),ed="loading"===e.ocrAnalyzeStatus,er="success"===e.ocrAnalyzeStatus,ea="error"===e.ocrAnalyzeStatus,ec=ed||el,es=()=>{i.push((0,u.buildDocumentCaptureHref)({clientId:f,serviceType:z,contractId:U,templateId:F??"",documentId:G,documentStatus:q}))},eu=(0,o.useMemo)(()=>{let e=Y.width,t=Y.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[Y.height,Y.width]);(0,o.useEffect)(()=>{e.resetOcrAnalyze()},[e]),(0,o.useEffect)(()=>{let e=c.current;if(null===e)return;let t=()=>{Z({width:Math.floor(e.clientWidth-40),height:Math.floor(e.clientHeight-40)})};t();let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[]),(0,o.useEffect)(()=>{if(en&&er&&!el){if("NEED_MATCHING"===q)return void i.push((0,u.buildDocumentComparisonHref)({clientId:f,serviceType:z,templateId:F,contractId:U,documentId:G,documentStatus:q}));i.push((0,u.buildDocumentPhotoResultHref)({clientId:f,serviceType:z,contractId:U,templateId:F??"",documentId:G}))}},[f,U,G,q,en,el,er,i,z,F]),(0,o.useEffect)(()=>{if(!ed)return;let e=performance.now(),t=0,n=i=>{et(Math.min(100*(1-Math.exp(-((i-e)/1e3*.05))),98)),t=window.requestAnimationFrame(n)};return t=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(t)}},[ed]);let ef=async()=>{if(null===V||null===F||""===F.trim()||null===G||""===G.trim())return;e.resetOcrAnalyze(),ei(!0),et(0);let t=await fetch(V),n=await t.blob(),i=new File([n],"document-photo.jpg",{type:n.type||"image/jpeg"});e.requestOcrAnalyze("NEED_MATCHING"===q?{templateId:F,file:i}:{templateId:F,documentId:G,file:i})};return ec?(0,t.jsxs)(h,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(a.default,{title:"사진 분석하기",onBack:()=>eo(!0)})}),(0,t.jsx)(m,{}),(0,t.jsx)(S,{children:(0,t.jsxs)($,{children:[(0,t.jsx)(r.default.DocumentSearch,{size:20}),(0,t.jsxs)(k,{children:[(0,t.jsx)(A,{children:"업로드한 사진을 분석하고 있습니다."}),(0,t.jsx)(D,{children:"화면을 절대 끄지 마세요."})]}),(0,t.jsx)(H,{children:(0,t.jsx)(N,{$progress:ee})})]})}),el?(0,t.jsx)(T,{role:"presentation",children:(0,t.jsxs)(E,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(R,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(M,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(L,{children:[(0,t.jsx)(O,{type:"button",onClick:()=>{eo(!1)},children:"계속하기"}),(0,t.jsx)(B,{type:"button",onClick:()=>{eo(!1),e.resetOcrAnalyze(),i.push((0,u.buildDocumentCaptureGuideHref)({clientId:f,serviceType:z,contractId:U,templateId:F??"",documentId:G,documentStatus:q}))},children:"중단하기"})]})]})}):null]}):(0,t.jsxs)(h,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(a.default,{title:"NEED_MATCHING"===q?X??"서류 비교하기":"사진 확인하기",onBack:es})}),(0,t.jsx)(m,{}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:["NEED_MATCHING"===q?`수기 ${J}${Q} 확인해 주세요.`:"촬영한 사진을 확인해 주세요.",(0,t.jsx)("br",{}),"NEED_MATCHING"===q?`전산 ${X}의 내용과 비교분석을 시작합니다.`:"잘못 촬영했다면 다시 촬영하기를 눌러주세요."]}),ea?(0,t.jsx)(_,{children:"사진 분석에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요."}):null,(0,t.jsx)(b,{ref:c,children:(0,t.jsx)(w,{style:eu??void 0,children:null===V?(0,t.jsx)(j,{children:"사진을 불러올 수 없습니다."}):(0,t.jsx)(I,{src:V,alt:"촬영한 사진"})})})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(y,{type:"button",onClick:es,children:"다시 촬영하기"}),(0,t.jsxs)(v,{type:"button",onClick:()=>{ef()},disabled:null===V||null===F||null===G||ed,$processing:ed,children:[(0,t.jsx)("span",{children:"NEED_MATCHING"===q?"비교 분석 시작":"분석 시작하기"}),(0,t.jsx)(n.default,{sx:{fontSize:20}})]})]})]})}),h=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,p=d.default.header.withConfig({componentId:"zh_mobile_web__sc-a7326e26-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,m=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,g=d.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  padding: 24px;
`,x=d.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-4"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #111827;
  text-align: center;
`,_=d.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-5"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #dc2626;
  text-align: center;
`,b=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-6"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;
  padding: 20px;
`,w=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  aspect-ratio: 210/297;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  background: #fff;
`,I=d.default.img.withConfig({componentId:"zh_mobile_web__sc-a7326e26-8"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,j=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`,C=d.default.footer.withConfig({componentId:"zh_mobile_web__sc-a7326e26-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  padding: 24px 24px 48px;
`,z=d.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px; /* 125% */
`,y=(0,d.default)(c.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-11"})`
  ${z}
`,v=(0,d.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-12"})`
  ${z}
`,S=d.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-13"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  padding: 24px;
`,$=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,k=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,A=d.default.h2.withConfig({componentId:"zh_mobile_web__sc-a7326e26-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,D=d.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,H=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-18"})`
  position: relative;

  overflow: hidden;

  width: 100%;
  height: 8px;
  border-radius: 999px;

  background: #e6e0ff;
`,N=d.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh_mobile_web__sc-a7326e26-19"})`
  transform-origin: left center;

  width: 100%;
  height: 100%;
  border-radius: 999px;

  background: #5635ff;
`,T=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-20"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,E=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-21"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,P=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-22"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,R=d.default.h3.withConfig({componentId:"zh_mobile_web__sc-a7326e26-23"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,M=d.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-24"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,L=d.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-25"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,U=d.css`
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
`,O=(0,d.default)(c.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-26"})`
  ${U}
`,B=(0,d.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-27"})`
  ${U}
`;e.s(["default",0,f])}]);