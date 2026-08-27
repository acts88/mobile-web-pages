(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,i,t)=>{i.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},21839,e=>{"use strict";var i=e.i(38797),t=e.i(9735);let n=(0,i.default)((0,t.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,n])},88552,e=>{"use strict";var i=e.i(38797),t=e.i(9735);let n=(0,i.default)((0,t.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,n])},81911,e=>{"use strict";var i=e.i(9735),t=e.i(21839),n=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,c=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`,h=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:l,onBack:f,onForward:u,subtitle:_}){let p=null!=_&&""!==_;return(0,i.jsxs)(o,{children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(r,{children:f?(0,i.jsx)(c,{onClick:f,children:(0,i.jsx)(t.default,{})}):null}),(0,i.jsx)(s,{children:e}),(0,i.jsxs)(a,{children:[l,u?(0,i.jsx)(c,{onClick:u,children:(0,i.jsx)(n.default,{})}):null]})]}),p?(0,i.jsx)(h,{children:_}):null]})}])},30190,e=>{"use strict";var i=e.i(7242);let t="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,t,"buildDetailHref",0,function(e,i,n=t){let l=new URLSearchParams({serviceType:i,serviceWorkerId:e});return`/service-worker/detail/${n}?${l.toString()}`},"buildListHref",0,function(e){let i=new URLSearchParams({serviceType:e});return`/service-worker?${i.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(i.default,e)?e:"MEAL"}])},13796,e=>{"use strict";var i=e.i(9735);e.i(3159);var t=e.i(46907),n=e.i(33261),l=e.i(7744),o=e.i(43174),d=e.i(30190),r=e.i(38803),a=e.i(81911),c=e.i(62659),s=e.i(7242);let h=(0,t.observer)(function({activePagePath:e,children:t,serviceType:l,serviceWorker:o}){var r,h;let T,A,z=(0,n.useRouter)(),k=s.default[l],y=o?.employmentContracts.find(e=>e.serviceType===l);return(0,i.jsxs)(u,{children:[(0,i.jsx)(a.default,{title:"제공인력 정보",onBack:()=>z.push((0,d.buildListHref)(l))}),null===o?(0,i.jsx)(_,{children:(0,i.jsx)(x,{children:"제공인력 정보를 찾을 수 없습니다."})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(_,{children:[(0,i.jsxs)(p,{children:[(0,i.jsx)(x,{children:o.name}),(0,i.jsx)(b,{children:(0,i.jsx)(g,{children:`일상돌봄 ${k.label}관리 서비스 - ${k.code}`})})]}),(0,i.jsxs)(m,{children:[(0,i.jsxs)(w,{children:[(0,i.jsx)(v,{children:"계약 기간"}),(0,i.jsx)(j,{children:(r=y?.contractStartDate??null,h=y?.contractEndDate??null,T=f(r),A=f(h),null===T||null===A?"-":`${T} ~ ${A}`)})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(v,{children:"서비스 기간"}),(0,i.jsx)(j,{children:"-"})]})]})]}),(0,i.jsx)(C,{}),(0,i.jsxs)(c.default.Tabbed.Tabs,{children:[(0,i.jsx)(c.default.Tabbed.Tab,{$selected:e===d.BASIC_INFO_PATH,onClick:()=>z.push((0,d.buildDetailHref)(o.id,l,d.BASIC_INFO_PATH)),disabled:!0,children:"기본 정보"}),(0,i.jsx)(c.default.Tabbed.Tab,{$selected:e===d.DOCUMENT_MANAGEMENT_PATH,onClick:()=>z.push((0,d.buildDetailHref)(o.id,l,d.DOCUMENT_MANAGEMENT_PATH)),children:"서류 관리"})]})]}),(0,i.jsx)(I,{children:t})]})});function f(e){if(null===e)return null;let[i,t,n]=e.split("-");return void 0===i||""===i||void 0===t||""===t||void 0===n||""===n?e:`${i}년 ${Number(t)}월 ${Number(n)}일`}let u=r.default.main.withConfig({componentId:"zh_mobile_web__sc-32de50e7-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,_=r.default.section.withConfig({componentId:"zh_mobile_web__sc-32de50e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;

  background: #fff;
`,p=r.default.div.withConfig({componentId:"zh_mobile_web__sc-32de50e7-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,x=r.default.h2.withConfig({componentId:"zh_mobile_web__sc-32de50e7-3"})`
  flex-shrink: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,b=r.default.div.withConfig({componentId:"zh_mobile_web__sc-32de50e7-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
`,g=r.default.span.withConfig({componentId:"zh_mobile_web__sc-32de50e7-5"})`
  padding: 2px 8px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;
`,m=r.default.div.withConfig({componentId:"zh_mobile_web__sc-32de50e7-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,w=r.default.div.withConfig({componentId:"zh_mobile_web__sc-32de50e7-7"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,v=r.default.span.withConfig({componentId:"zh_mobile_web__sc-32de50e7-8"})`
  flex-shrink: 0;
  font-weight: 700;
`,j=r.default.span.withConfig({componentId:"zh_mobile_web__sc-32de50e7-9"})`
  font-weight: 400;
`,C=r.default.div.withConfig({componentId:"zh_mobile_web__sc-32de50e7-10"})`
  height: 1px;
  background: #e5e7eb;
`,I=r.default.section.withConfig({componentId:"zh_mobile_web__sc-32de50e7-11"})`
  display: flex;
  flex: 1 0 0;
  background: #f8fafc;
`,T=(0,t.observer)(function({children:e}){let t=(0,n.usePathname)(),r=(0,n.useSearchParams)(),a=r.get("serviceWorkerId"),c=(0,d.getServiceType)(r.get("serviceType")),s=o.default.serviceWorker.detail,f=t.endsWith(`/${d.BASIC_INFO_PATH}`)?d.BASIC_INFO_PATH:d.DOCUMENT_MANAGEMENT_PATH;return(0,l.useEffect)(()=>(s.setServiceWorkerId(a),o.default.serviceWorker.documentManagement.setContext(a,c),()=>{s.clear(),o.default.serviceWorker.documentManagement.clearContext()}),[s,c,a]),(0,i.jsx)(h,{activePagePath:f,serviceType:c,serviceWorker:s.data,children:e})});e.s(["default",0,T],13796)}]);