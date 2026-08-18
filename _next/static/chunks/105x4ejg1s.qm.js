(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},80629,e=>{"use strict";let t="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${i}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${t}/capture-guide?${c.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${t}/capture?${c.toString()}`},"buildDocumentComparisonHref",0,function({clientId:e,serviceType:n,templateId:i,contractId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:n});return null!==e&&c.set("clientId",e),null!==i&&c.set("templateId",i),null!==l&&c.set("contractId",l),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${t}/comparison?${c.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${t}/input-method?${c.toString()}`},"buildDocumentPhotoResultHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o}){let d=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==o&&d.set("documentId",o),`${t}/photo-result?${d.toString()}`},"buildDocumentPhotoReviewHref",0,function({clientId:e,serviceType:n,contractId:i,templateId:l,documentId:o,documentStatus:d}){let c=new URLSearchParams({serviceType:n,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=d&&c.set("documentStatus",d),`${t}/photo-review?${c.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:n}){let i=new URLSearchParams({serviceType:n});return null!==e&&i.set("clientId",e),`${t}/save-success?${i.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return"NUTRITION"===e?"NUTRITION":"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  width: 24px;
  height: 100%;
`,r=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
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
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,onBack:l,onForward:u,subtitle:h}){let f=null!=h&&""!==h;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:l?(0,t.jsx)(r,{onClick:l,children:(0,t.jsx)(n.default,{})}):null}),(0,t.jsx)(s,{children:e}),(0,t.jsx)(c,{children:u?(0,t.jsx)(r,{onClick:u,children:(0,t.jsx)(i.default,{})}):null})]}),f?(0,t.jsx)(a,{children:h}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:i,style:o}){return(0,n.jsx)(l,{size:t,color:i,$src:e,style:o})}}let{PUBLIC_PATH:d}=t.default.env,c={Docs:o(`${d}/icon/docs.svg`),FrameSource:o(`${d}/icon/frame-source.svg`),EvShadow:o(`${d}/icon/ev-shadow.svg`),DocumentSearch:o(`${d}/icon/document-search.svg`)};e.s(["default",0,c],98273)},48464,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),l=e.i(7744),o=e.i(38803),d=e.i(98273),c=e.i(81911),r=e.i(64954),s=e.i(43174),a=e.i(80629);let u=(0,n.observer)(function(){let e=(0,i.useRouter)(),n=(0,i.useSearchParams)(),o=s.default.client.documentManagement,r=(0,l.useRef)(null),u=n.get("clientId"),R=(0,a.getServiceType)(n.get("serviceType")),P=n.get("contractId"),H=n.get("templateId"),T=n.get("documentId"),L=n.get("documentStatus"),D=o.templates.find(e=>e.id===H),U=D?.templateImagePath?.[0]??null,[M,A]=(0,l.useState)({height:0,width:0}),E=(0,l.useMemo)(()=>{let e=M.width,t=M.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[M.height,M.width]);return(0,l.useEffect)(()=>(o.setContext(u,R),()=>{o.clearContext()}),[u,o,R]),(0,l.useEffect)(()=>{let e=r.current;if(null===e)return;let t=t=>{let{width:n,height:i}=t?.contentRect??e.getBoundingClientRect();A({width:Math.floor(n),height:Math.floor(i)})};t();let n=new ResizeObserver(e=>{t(e[0])});return n.observe(e),()=>{n.disconnect()}},[]),(0,t.jsxs)(h,{children:[(0,t.jsx)(f,{children:(0,t.jsx)(c.default,{title:"촬영 가이드",onBack:()=>e.push((0,a.buildDocumentInputMethodHref)({clientId:u,serviceType:R,contractId:P,templateId:H??"",documentId:T,documentStatus:L}))})}),(0,t.jsx)(p,{}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{children:"서류를 준비해주세요."}),(0,t.jsx)(g,{children:"준비가 완료되면 ‘촬영하기’ 버튼을 눌러 주세요."})]}),(0,t.jsx)(b,{ref:r,children:(0,t.jsxs)(_,{style:E??void 0,children:[(0,t.jsx)(I,{$position:"top-left"}),(0,t.jsx)(I,{$position:"top-right"}),(0,t.jsx)(I,{$position:"bottom-left"}),(0,t.jsx)(I,{$position:"bottom-right"}),(0,t.jsx)(w,{children:null===U?(0,t.jsx)(v,{children:"서류 미리보기"}):(0,t.jsx)(j,{src:U,alt:"서류 미리보기"})})]})}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(d.default.Docs,{size:32})}),(0,t.jsxs)(S,{children:["세로로",(0,t.jsx)("br",{}),"촬영 해주세요."]})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(d.default.FrameSource,{size:32})}),(0,t.jsxs)(S,{children:["글씨가",(0,t.jsx)("br",{}),"잘리면 안돼요."]})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(d.default.EvShadow,{size:32})}),(0,t.jsxs)(S,{children:["그림자가",(0,t.jsx)("br",{}),"생기면 안돼요."]})]})]})]}),(0,t.jsx)($,{children:(0,t.jsx)(k,{type:"button",onClick:()=>e.push((0,a.buildDocumentCaptureHref)({clientId:u,serviceType:R,contractId:P,templateId:H??"",documentId:T,documentStatus:L})),disabled:null===H||""===H,children:"촬영하기"})})]})}),h=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #f6f8fb;
`,f=o.default.header.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,p=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-2"})`
  width: 100%;
  height: 1px;
  background: #e6e9ef;
`,m=o.default.section.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-3"})`
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
`,g=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-5"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,b=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-6"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;
  padding: 20px;
`,_=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-7"})`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 210/297;
  padding: 12px;
`,w=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-8"})`
  overflow: hidden;

  width: 100%;
  height: 100%;
  border: 1px solid #d0d5dd;
  border-radius: 4px;

  background: #fff;
`,I=o.default.span.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-9"})`
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
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-11"})`
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
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-13"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 92px;
`,y=o.default.div.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-14"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
`,S=o.default.p.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-15"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,$=o.default.footer.withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-16"})`
  padding: 24px 24px 48px;
  background: #fff;
`,k=(0,o.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a6b2f0d9-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  padding: 18px 16px;
`;e.s(["default",0,u])}]);