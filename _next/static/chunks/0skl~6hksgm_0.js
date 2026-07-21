(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,i)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let o=new URLSearchParams({serviceType:t});return null!==e&&o.set("clientId",e),`/client/detail/${n}?${o.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:o,documentId:l}){let d=new URLSearchParams({serviceType:i,templateId:o});return null!==e&&d.set("clientId",e),null!==n&&d.set("contractId",n),null!==l&&d.set("documentId",l),`${t}/capture-guide?${d.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:o,documentId:l}){let d=new URLSearchParams({serviceType:i,templateId:o});return null!==e&&d.set("clientId",e),null!==n&&d.set("contractId",n),null!==l&&d.set("documentId",l),`${t}/capture?${d.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:o,documentId:l}){let d=new URLSearchParams({serviceType:i,templateId:o});return null!==e&&d.set("clientId",e),null!==n&&d.set("contractId",n),null!==l&&d.set("documentId",l),`${t}/input-method?${d.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:o,documentId:l}){let d=new URLSearchParams({serviceType:i,templateId:o});return null!==e&&d.set("clientId",e),null!==n&&d.set("contractId",n),null!==l&&d.set("documentId",l),`${t}/photo-result?${d.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:i,contractId:n,templateId:o,documentId:l}){let d=new URLSearchParams({serviceType:i,templateId:o});return null!==e&&d.set("clientId",e),null!==n&&d.set("contractId",n),null!==l&&d.set("documentId",l),`${t}/photo-review?${d.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:i}){let n=new URLSearchParams({serviceType:i});return null!==e&&n.set("clientId",e),`${t}/save-success?${n.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,n])},88552,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,n])},81911,e=>{"use strict";var t=e.i(9735),i=e.i(21839),n=e.i(88552),o=e.i(38803);let l=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,d=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 24px;
`,r=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  width: 24px;
  height: 100%;
`,c=o.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
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
`,a=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,s=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,onBack:o,onForward:h,subtitle:u}){let f=null!=u&&""!==u;return(0,t.jsxs)(l,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(r,{children:o?(0,t.jsx)(c,{onClick:o,children:(0,t.jsx)(i.default,{})}):null}),(0,t.jsx)(a,{children:e}),(0,t.jsx)(r,{children:h?(0,t.jsx)(c,{onClick:h,children:(0,t.jsx)(n.default,{})}):null})]}),f?(0,t.jsx)(s,{children:u}):null]})}])},68855,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),o=e.i(7744),l=e.i(38803),d=e.i(81911);function r({children:e,enabled:i=!0,title:n="세로 화면으로 전환해 주세요",description:l="촬영 기능은 세로 모드에서만 지원합니다."}){let[d,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(!i)return;let e=()=>{f("function"==typeof window.matchMedia?window.matchMedia("(orientation: landscape)").matches:window.innerWidth>window.innerHeight)};e();let t="function"==typeof window.matchMedia?window.matchMedia("(orientation: landscape)"):null;return null!==t&&t.addEventListener("change",e),window.addEventListener("orientationchange",e),window.addEventListener("resize",e),()=>{null!==t&&t.removeEventListener("change",e),window.removeEventListener("orientationchange",e),window.removeEventListener("resize",e)}},[i]),(0,t.jsxs)(c,{children:[e,i&&d?(0,t.jsx)(a,{role:"alert","aria-live":"assertive","aria-label":"세로 모드 전환 안내",children:(0,t.jsxs)(s,{children:[(0,t.jsx)(h,{children:n}),(0,t.jsx)(u,{children:l})]})}):null]})}let c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-0"})`
  position: relative;
  display: flex;
  height: 100%;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-1"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 90%);
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: min(100%, 360px);
  padding: 20px 18px;
  border-radius: 12px;

  color: #f9fafb;
  text-align: center;

  background: rgb(31 41 55 / 92%);
`,h=l.default.p.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-3"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`,u=l.default.p.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-4"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #d1d5db;
`;var f=e.i(43174),p=e.i(80629);let g=(0,i.observer)(function(){let e=f.default.client.documentManagement,i=(0,n.useRouter)(),l=(0,n.useSearchParams)(),c=(0,o.useRef)(null),a=(0,o.useRef)(null),s=l.get("clientId"),h=(0,p.getServiceType)(l.get("serviceType")),u=l.get("contractId"),g=l.get("templateId"),S=l.get("documentId"),[$,L]=(0,o.useState)(null),[M,R]=(0,o.useState)({height:0,width:0}),H=(0,o.useMemo)(()=>{let e=M.width,t=M.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[M.height,M.width]);return(0,o.useEffect)(()=>{let e=!0,t=null;return(async()=>{let i=navigator.mediaDevices;if(void 0===i||void 0===i.getUserMedia)return L("이 브라우저에서는 카메라를 지원하지 않습니다.");try{if(t=await i.getUserMedia({audio:!1,video:{facingMode:"environment"}}),!e)return void t.getTracks().forEach(e=>e.stop());let n=c.current;if(null===n)return void t.getTracks().forEach(e=>e.stop());n.srcObject=t,await n.play()}catch{e&&L("카메라를 불러오지 못했습니다.\n권한을 확인해 주세요.")}})(),()=>{e=!1,t?.getTracks().forEach(e=>e.stop())}},[]),(0,o.useEffect)(()=>{let e=a.current;if(null===e)return;let t=()=>{R({width:Math.floor(e.clientWidth-24),height:Math.floor(e.clientHeight-24)})};t();let i=new ResizeObserver(t);return i.observe(e),()=>{i.disconnect()}},[]),(0,t.jsx)(r,{children:(0,t.jsxs)(m,{children:[(0,t.jsx)(w,{children:(0,t.jsx)(d.default,{title:"",onBack:()=>i.push((0,p.buildDocumentCaptureGuideHref)({clientId:s,serviceType:h,contractId:u,templateId:g??"",documentId:S}))})}),(0,t.jsx)(b,{ref:a,children:(0,t.jsxs)(x,{style:H??void 0,children:[(0,t.jsx)(v,{$position:"top-left"}),(0,t.jsx)(v,{$position:"top-right"}),(0,t.jsx)(v,{$position:"bottom-left"}),(0,t.jsx)(v,{$position:"bottom-right"}),(0,t.jsx)(_,{children:null!==$?(0,t.jsx)(j,{children:$}):(0,t.jsx)(I,{ref:c,autoPlay:!0,muted:!0,playsInline:!0})})]})}),(0,t.jsxs)(y,{children:[(0,t.jsx)(z,{children:"서류를 화면 안에 맞춰서 촬영해주세요."}),(0,t.jsx)(C,{type:"button","aria-label":"촬영하기",onClick:()=>{let t=c.current;if(null===t||0===t.videoWidth||0===t.videoHeight)return;let n=210/297,o=t.videoWidth,l=t.videoHeight,d=o,r=l;o/l>n?d=Math.floor(l*n):r=Math.floor(o/n);let a=Math.floor((o-d)/2),f=Math.floor((l-r)/2),m=document.createElement("canvas");m.width=d,m.height=r;let w=m.getContext("2d");if(null===w)return;w.drawImage(t,a,f,d,r,0,0,m.width,m.height);let b=m.toDataURL("image/jpeg",.92);e.setCapturedPhotoDataUrl(b),i.push((0,p.buildDocumentPhotoReviewHref)({clientId:s,serviceType:h,contractId:u,templateId:g??"",documentId:S}))}})]})]})})}),m=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #1f2937;
`,w=l.default.header.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-1"})`
  display: flex;
  flex-direction: column;
  color: #fff;
`,b=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-2"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 0;
  padding: 12px;
`,x=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-3"})`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 210/297;
`,_=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-4"})`
  overflow: hidden;

  width: 100%;
  height: 100%;
  border-radius: 4px;

  background: linear-gradient(180deg, #283140 0%, #1f2937 100%);
`,v=l.default.span.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-5"})`
  position: absolute;
  z-index: 1;

  width: 42px;
  height: 42px;
  border-color: #fff;
  border-style: solid;

  ${({$position:e})=>"top-left"===e?"top: 0; left: 0; border-width: 4px 0 0 4px;":"top-right"===e?"top: 0; right: 0; border-width: 4px 4px 0 0;":"bottom-left"===e?"bottom: 0; left: 0; border-width: 0 0 4px 4px;":"right: 0; bottom: 0; border-width: 0 4px 4px 0;"}
`,I=l.default.video.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-6"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,j=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-7"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 18px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);
  text-align: center;
  white-space: pre-line;

  background: rgb(255 255 255 / 4%);
`,y=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-8"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

  padding: 24px 24px 48px;
`,z=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-9"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #fff;
  text-align: center;
`,C=l.default.button.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-10"})`
  width: 72px;
  height: 72px;
  border: 0;
  border-radius: 50%;

  background: #fff;
  box-shadow: 0 6px 20px rgb(0 0 0 / 20%);
`;e.s(["default",0,g],68855)}]);