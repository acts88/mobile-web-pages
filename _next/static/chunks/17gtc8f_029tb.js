(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:n,serviceWorkerId:i}){let l=new URLSearchParams({serviceType:n});return t(i)?(l.set("serviceWorkerId",i),`/service-worker/detail/document-management?${l.toString()}`):(null!==e&&l.set("clientId",e),`/client/detail/document-management?${l.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:n,documentId:i,documentStatus:l,monthlyScheduleClientContractId:o,monthlyScheduleSaved:d,monthlyScheduleYearMonth:c,page:r,serviceType:s,serviceWorkerId:a,templateId:u}){let h=t(a),f=new URLSearchParams({serviceType:s});return h?f.set("serviceWorkerId",a):null!==e&&f.set("clientId",e),null!=n&&f.set("contractId",n),null!=i&&f.set("documentId",i),null!=l&&f.set("documentStatus",l),null!=o&&f.set("monthlyScheduleClientContractId",o),!0===d&&f.set("monthlyScheduleSaved","true"),null!=c&&f.set("monthlyScheduleYearMonth",c),null!=u&&f.set("templateId",u),`${h?"/service-worker/document-management":"/client/document-management"}/${r}?${f.toString()}`},"isServiceWorkerDocumentFlow",0,t])},33261,(e,t,n)=>{t.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${n}/capture-guide?${c.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${n}/capture?${c.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${n}/input-method?${c.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let i=new URLSearchParams({serviceType:t});return null!==e&&i.set("clientId",e),`${n}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,s=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
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
`;e.s(["default",0,function({title:e,titleAction:l,onBack:h,onForward:f,subtitle:m}){let p=null!=m&&""!==m;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:h?(0,t.jsx)(s,{onClick:h,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(a,{children:e}),(0,t.jsxs)(r,{children:[l,f?(0,t.jsx)(s,{onClick:f,children:(0,t.jsx)(i.default,{})}):null]})]}),p?(0,t.jsx)(u,{children:m}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:i,style:o}){return(0,n.jsx)(l,{size:t,color:i,$src:e,style:o})}}let{PUBLIC_PATH:d}=t.default.env,c={Docs:o(`${d}/icon/docs.svg`),FrameSource:o(`${d}/icon/frame-source.svg`),EvShadow:o(`${d}/icon/ev-shadow.svg`),DocumentSearch:o(`${d}/icon/document-search.svg`),WandShine:o(`${d}/icon/wand-shine.svg`)};e.s(["default",0,c],98273)},48464,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),l=e.i(7744),o=e.i(38803),d=e.i(51413),c=e.i(98273),r=e.i(81911),s=e.i(62659),a=e.i(43174),u=e.i(80629);let h=(0,n.observer)(function(){let e=(0,i.useRouter)(),n=(0,i.useSearchParams)(),o=(0,l.useRef)(null),s=n.get("clientId"),h=n.get("serviceWorkerId"),D=(0,d.isServiceWorkerDocumentFlow)(h),P=D?a.default.serviceWorker.documentManagement:a.default.client.documentManagement,R=(0,u.getServiceType)(n.get("serviceType")),H=n.get("contractId"),L=n.get("templateId"),M=n.get("documentId"),A=n.get("documentStatus"),U=n.get("monthlyScheduleClientContractId"),F=n.get("monthlyScheduleYearMonth"),E=P.templates.find(e=>e.id===L),O=E?.templateImagePath?.[0]??null,[B,W]=(0,l.useState)({height:0,width:0}),N=(0,l.useMemo)(()=>{let e=B.width,t=B.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[B.height,B.width]);return(0,l.useEffect)(()=>{if(!D)return P.setContext(s,R),()=>{P.clearContext()}},[s,P,D,R]),(0,l.useEffect)(()=>{let e=o.current;if(null===e)return;let t=t=>{let{width:n,height:i}=t?.contentRect??e.getBoundingClientRect();W({width:Math.floor(n),height:Math.floor(i)})};t();let n=new ResizeObserver(e=>{t(e[0])});return n.observe(e),()=>{n.disconnect()}},[]),(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(r.default,{title:"촬영 가이드",onBack:()=>e.push((0,d.buildDocumentFlowHref)({clientId:s,serviceType:R,contractId:H,templateId:L??"",documentId:M,documentStatus:A,monthlyScheduleClientContractId:U,monthlyScheduleYearMonth:F,page:"input-method",serviceWorkerId:h}))})}),(0,t.jsx)(p,{}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:"서류를 준비해주세요."}),(0,t.jsx)(b,{children:"준비가 완료되면 ‘촬영하기’ 버튼을 눌러 주세요."})]}),(0,t.jsx)(_,{ref:o,children:(0,t.jsxs)(w,{style:N??void 0,children:[(0,t.jsx)(v,{$position:"top-left"}),(0,t.jsx)(v,{$position:"top-right"}),(0,t.jsx)(v,{$position:"bottom-left"}),(0,t.jsx)(v,{$position:"bottom-right"}),(0,t.jsx)(I,{children:null===O?(0,t.jsx)(S,{children:"서류 미리보기"}):(0,t.jsx)(j,{src:O,alt:"서류 미리보기"})})]})}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(z,{children:(0,t.jsx)(c.default.Docs,{size:32})}),(0,t.jsxs)($,{children:["세로로",(0,t.jsx)("br",{}),"촬영 해주세요."]})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(z,{children:(0,t.jsx)(c.default.FrameSource,{size:32})}),(0,t.jsxs)($,{children:["글씨가",(0,t.jsx)("br",{}),"잘리면 안돼요."]})]}),(0,t.jsxs)(y,{children:[(0,t.jsx)(z,{children:(0,t.jsx)(c.default.EvShadow,{size:32})}),(0,t.jsxs)($,{children:["그림자가",(0,t.jsx)("br",{}),"생기면 안돼요."]})]})]})]}),(0,t.jsx)(k,{children:(0,t.jsx)(T,{type:"button",onClick:()=>e.push((0,d.buildDocumentFlowHref)({clientId:s,serviceType:R,contractId:H,templateId:L??"",documentId:M,documentStatus:A,monthlyScheduleClientContractId:U,monthlyScheduleYearMonth:F,page:"capture",serviceWorkerId:h})),disabled:null===L||""===L,children:"촬영하기"})})]})}),f=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #f6f8fb;
`,m=o.default.header.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,p=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-2"})`
  width: 100%;
  height: 1px;
  background: #e6e9ef;
`,g=o.default.section.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;

  padding: 24px;

  background: white;
`,x=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
`,b=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-5"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,_=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-6"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;
  padding: 20px;
`,w=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-7"})`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 210/297;
  padding: 12px;
`,I=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-8"})`
  overflow: hidden;

  width: 100%;
  height: 100%;
  border: 1px solid #d0d5dd;
  border-radius: 4px;

  background: #fff;
`,v=o.default.span.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-9"})`
  position: absolute;
  z-index: 1;

  width: 24px;
  height: 24px;
  border-color: #111827;
  border-style: solid;

  ${({$position:e})=>"top-left"===e?"top: 0; left: 0; border-width: 3px 0 0 3px;":"top-right"===e?"top: 0; right: 0; border-width: 3px 3px 0 0;":"bottom-left"===e?"bottom: 0; left: 0; border-width: 0 0 3px 3px;":"right: 0; bottom: 0; border-width: 0 3px 3px 0;"}
`,j=o.default.img.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-10"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,S=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-11"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 24px;
  font-weight: 500;
  color: #98a2b3;
`,C=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-12"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,y=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 92px;
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-14"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
`,$=o.default.p.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-15"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,k=o.default.footer.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-16"})`
  padding: 24px 24px 48px;
  background: #fff;
`,T=(0,o.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  padding: 18px 16px;
`;e.s(["default",0,h])}]);