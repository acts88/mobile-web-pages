(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,i)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:o}){let c=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&c.set("clientId",e),null!==n&&c.set("contractId",n),null!==o&&c.set("documentId",o),`${t}/capture-guide?${c.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:o}){let c=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&c.set("clientId",e),null!==n&&c.set("contractId",n),null!==o&&c.set("documentId",o),`${t}/capture?${c.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:o}){let c=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&c.set("clientId",e),null!==n&&c.set("contractId",n),null!==o&&c.set("documentId",o),`${t}/input-method?${c.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:o}){let c=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&c.set("clientId",e),null!==n&&c.set("contractId",n),null!==o&&c.set("documentId",o),`${t}/photo-result?${c.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:l,documentId:o}){let c=new URLSearchParams({serviceType:i,templateId:l});return null!==e&&c.set("clientId",e),null!==n&&c.set("contractId",n),null!==o&&c.set("documentId",o),`${t}/photo-review?${c.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:i}){let n=new URLSearchParams({serviceType:i});return null!==e&&n.set("clientId",e),`${t}/save-success?${n.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,n])},21839,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,n])},81911,e=>{"use strict";var t=e.i(9735),i=e.i(21839),n=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
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
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`;e.s(["default",0,function({title:e,onBack:l,onForward:u,subtitle:h}){let f=null!=h&&""!==h;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(r,{children:l?(0,t.jsx)(a,{onClick:l,children:(0,t.jsx)(i.default,{})}):null}),(0,t.jsx)(d,{children:e}),(0,t.jsx)(r,{children:u?(0,t.jsx)(a,{onClick:u,children:(0,t.jsx)(n.default,{})}):null})]}),f?(0,t.jsx)(s,{children:h}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),i=e.i(9735),n=e.i(38803);let l=n.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:n,style:o}){return(0,i.jsx)(l,{size:t,color:n,$src:e,style:o})}}let{PUBLIC_PATH:c}=t.default.env,r={Docs:o(`${c}/icon/docs.svg`),FrameSource:o(`${c}/icon/frame-source.svg`),EvShadow:o(`${c}/icon/ev-shadow.svg`),DocumentSearch:o(`${c}/icon/document-search.svg`)};e.s(["default",0,r],98273)},10703,e=>{"use strict";var t=e.i(9735),i=e.i(88552);e.i(3159);var n=e.i(46907),l=e.i(33261),o=e.i(7744),c=e.i(38803),r=e.i(98273),a=e.i(81911),d=e.i(64954),s=e.i(43174),u=e.i(80629);let h=(0,n.observer)(function(){let e=s.default.client.documentManagement,n=(0,l.useRouter)(),c=(0,l.useSearchParams)(),d=(0,o.useRef)(null),h=c.get("clientId"),y=(0,u.getServiceType)(c.get("serviceType")),B=c.get("contractId"),N=c.get("templateId"),q=c.get("documentId"),G=e.capturedPhotoDataUrl,[K,W]=(0,o.useState)({height:0,width:0}),[X,J]=(0,o.useState)(0),[Q,V]=(0,o.useState)(!1),[Y,Z]=(0,o.useState)(!1),ee="loading"===e.ocrAnalyzeStatus,et="success"===e.ocrAnalyzeStatus,ei="error"===e.ocrAnalyzeStatus,en=ee||Y,el=()=>{n.push((0,u.buildDocumentCaptureHref)({clientId:h,serviceType:y,contractId:B,templateId:N??"",documentId:q}))},eo=(0,o.useMemo)(()=>{let e=K.width,t=K.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[K.height,K.width]);(0,o.useEffect)(()=>{e.resetOcrAnalyze()},[e]),(0,o.useEffect)(()=>{let e=d.current;if(null===e)return;let t=()=>{W({width:Math.floor(e.clientWidth-40),height:Math.floor(e.clientHeight-40)})};t();let i=new ResizeObserver(t);return i.observe(e),()=>{i.disconnect()}},[]),(0,o.useEffect)(()=>{Q&&et&&!Y&&n.push((0,u.buildDocumentPhotoResultHref)({clientId:h,serviceType:y,contractId:B,templateId:N??"",documentId:q}))},[h,B,q,Q,Y,et,n,y,N]),(0,o.useEffect)(()=>{if(!ee)return;let e=performance.now(),t=0,i=n=>{J(Math.min(100*(1-Math.exp(-((n-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[ee]);let ec=async()=>{if(null===G||null===N||""===N.trim()||null===q||""===q.trim())return;e.resetOcrAnalyze(),V(!0),J(0);let t=await fetch(G),i=await t.blob(),n=new File([i],"document-photo.jpg",{type:i.type||"image/jpeg"});e.requestOcrAnalyze({templateId:N,documentId:q,file:n})};return en?(0,t.jsxs)(f,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(a.default,{title:"사진 분석하기",onBack:()=>Z(!0)})}),(0,t.jsx)(m,{}),(0,t.jsx)(S,{children:(0,t.jsxs)($,{children:[(0,t.jsx)(r.default.DocumentSearch,{size:20}),(0,t.jsxs)(k,{children:[(0,t.jsx)(A,{children:"업로드한 사진을 분석하고 있습니다."}),(0,t.jsx)(P,{children:"화면을 절대 끄지 마세요."})]}),(0,t.jsx)(R,{children:(0,t.jsx)(H,{$progress:X})})]})}),Y?(0,t.jsx)(T,{role:"presentation",children:(0,t.jsxs)(D,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(U,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(O,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(E,{type:"button",onClick:()=>{Z(!1)},children:"계속하기"}),(0,t.jsx)(F,{type:"button",onClick:()=>{Z(!1),e.resetOcrAnalyze(),n.push((0,u.buildDocumentCaptureGuideHref)({clientId:h,serviceType:y,contractId:B,templateId:N??"",documentId:q}))},children:"중단하기"})]})]})}):null]}):(0,t.jsxs)(f,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(a.default,{title:"사진 확인하기",onBack:el})}),(0,t.jsx)(m,{}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:["촬영한 사진을 확인해 주세요.",(0,t.jsx)("br",{}),"잘못 촬영했다면 다시 촬영하기를 눌러주세요."]}),ei?(0,t.jsx)(_,{children:"사진 분석에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요."}):null,(0,t.jsx)(b,{ref:d,children:(0,t.jsx)(w,{style:eo??void 0,children:null===G?(0,t.jsx)(j,{children:"사진을 불러올 수 없습니다."}):(0,t.jsx)(I,{src:G,alt:"촬영한 사진"})})})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(C,{type:"button",onClick:el,children:"다시 촬영하기"}),(0,t.jsxs)(v,{type:"button",onClick:()=>{ec()},disabled:null===G||null===N||null===q||ee,$processing:ee,children:[(0,t.jsx)("span",{children:"분석 시작하기"}),(0,t.jsx)(i.default,{sx:{fontSize:20}})]})]})]})}),f=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,p=c.default.header.withConfig({componentId:"zh_mobile_web__sc-a7326e26-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,m=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,g=c.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  padding: 24px;
`,x=c.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-4"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #111827;
  text-align: center;
`,_=c.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-5"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #dc2626;
  text-align: center;
`,b=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-6"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;
  padding: 20px;
`,w=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  aspect-ratio: 210/297;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  background: #fff;
`,I=c.default.img.withConfig({componentId:"zh_mobile_web__sc-a7326e26-8"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,j=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`,z=c.default.footer.withConfig({componentId:"zh_mobile_web__sc-a7326e26-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  padding: 24px 24px 48px;
`,y=c.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px; /* 125% */
`,C=(0,c.default)(d.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-11"})`
  ${y}
`,v=(0,c.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-12"})`
  ${y}
`,S=c.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-13"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  padding: 24px;
`,$=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,k=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,A=c.default.h2.withConfig({componentId:"zh_mobile_web__sc-a7326e26-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,P=c.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,R=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-18"})`
  position: relative;

  overflow: hidden;

  width: 100%;
  height: 8px;
  border-radius: 999px;

  background: #e6e0ff;
`,H=c.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh_mobile_web__sc-a7326e26-19"})`
  transform-origin: left center;

  width: 100%;
  height: 100%;
  border-radius: 999px;

  background: #5635ff;
`,T=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-20"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,D=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-21"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,L=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-22"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,U=c.default.h3.withConfig({componentId:"zh_mobile_web__sc-a7326e26-23"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,O=c.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-24"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,M=c.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-25"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,B=c.css`
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
`,E=(0,c.default)(d.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-26"})`
  ${B}
`,F=(0,c.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-27"})`
  ${B}
`;e.s(["default",0,h])}]);