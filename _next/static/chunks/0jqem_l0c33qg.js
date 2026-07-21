(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44182,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},65576,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return _},PageNotFoundError:function(){return y},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return i},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return x}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>a.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class _ extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},76268,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return a}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,s(e));else t.set(r,s(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},25661,(e,t,r)=>{"use strict";var n=e.r(7744),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,s=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,u=n[1];return a(function(){o.value=r,o.getSnapshot=t,c(o)&&u({inst:o})},[e,r,t]),s(function(){return c(o)&&u({inst:o}),e(function(){c(o)&&u({inst:o})})},[e]),l(r),r};r.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},15833,(e,t,r)=>{"use strict";t.exports=e.r(25661)},3159,46907,e=>{"use strict";e.i(35910);var t,r,n,o=e.i(61206),i=e.i(7744);if(!i.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!o.makeObservable)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var s=e.i(20276);function a(e){return(0,o.getDependencyTree)(e)}var l=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach(function(n,o){r-n.registeredAt>=e&&(t.finalize(n.value),t.registrations.delete(o))}),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),c=new("u">typeof FinalizationRegistry?FinalizationRegistry:l)(function(e){var t;null==(t=e.reaction)||t.dispose(),e.reaction=null}),u=e.i(15833);function d(e){e.reaction=new o.Reaction("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),null==(t=e.onStoreChange)||t.call(e)})}var f="function"==typeof Symbol&&Symbol.for,h=null!=(n=null==(r=Object.getOwnPropertyDescriptor(function(){},"name"))?void 0:r.configurable)&&n,p=f?Symbol.for("react.forward_ref"):"function"==typeof i.forwardRef&&(0,i.forwardRef)(function(e){return null}).$$typeof,g=f?Symbol.for("react.memo"):"function"==typeof i.memo&&(0,i.memo)(function(e){return null}).$$typeof,m={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};e.s(["observer",0,function(e,t){if(g&&e.$$typeof===g)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r,n,o,s=null!=(o=null==t?void 0:t.forwardRef)&&o,l=e,f=e.displayName||e.name;if(p&&e.$$typeof===p&&(s=!0,"function"!=typeof(l=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var b=function(e,t){return function(e,t){void 0===t&&(t="observed");var r,n,o=i.default.useRef(null);if(!o.current){var s={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(e){return c.unregister(s),s.onStoreChange=e,s.reaction||(d(s),s.stateVersion=Symbol()),function(){var e;s.onStoreChange=null,null==(e=s.reaction)||e.dispose(),s.reaction=null}},getSnapshot:function(){return s.stateVersion}};o.current=s}var l=o.current;if(l.reaction||(d(l),c.register(o,l,l)),i.default.useDebugValue(l.reaction,a),(0,u.useSyncExternalStore)(l.subscribe,l.getSnapshot,l.getSnapshot),l.reaction.track(function(){try{r=e()}catch(e){n=e}}),n)throw n;return r}(function(){return l(e,t)},f)};return b.displayName=e.displayName,h&&Object.defineProperty(b,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(b.contextTypes=e.contextTypes),s&&(b=(0,i.forwardRef)(b)),r=e,n=b=(0,i.memo)(b),Object.keys(r).forEach(function(e){m[e]||Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),b}],46907),(t=s.unstable_batchedUpdates)||(t=function(e){e()}),(0,o.configure)({reactionScheduler:t}),c.finalizeAllImmediately,e.s([],3159)},25521,e=>{"use strict";e.i(35910);let t={IMAGE:[".jpg",".jpeg",".png"],AUDIO:[".mp3",".wav",".m4a",".aac"],DOCUMENT:[".hwp",".hwpx",".doc",".docx",".txt",".pdf",".xls",".xlsx"]},r={MAX_FILE_SIZE:0x6400000,MAX_FILE_SIZE_TEXT:"100MB",FILE_EXTENSION_WHITELIST_BY_GROUP:t,FILE_EXTENSION_WHITELIST:Object.values(t).flat()};e.s(["default",0,{env:{IS_DEV:!1,PUBLIC_PATH:"",BACKEND_URL:"https://api.acts88.site"},file:r}],25521)},85586,e=>{"use strict";let{IS_DEV:t}=e.i(25521).default.env,r={INFO:"#d3e3fd",WARN:"#fef6d5",ERROR:"#fcebeb"},n=1,o=null,i=e=>{let i="INFO"===e?console.info:"WARN"===e?console.warn:console.error;return({publicLog:s,devLogs:a=[],groupKey:l})=>{let c=void 0!==s||0!==a.length;t&&c&&(o&&clearTimeout(o),o=setTimeout(()=>{o=null,console.log("%c= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =","background-color: gainsboro; padding: 2px;")},1e3));let u=!1;if(t&&c){let t="string"==typeof a[0]?a[0]:void 0!==l?l:"log";console.group(`%c[Logger #${n++}] ${t}`,`background-color: ${r[e]}; padding: 2px;`),u=!0}if(void 0!==s&&i(s),t&&a.length>1)for(let e=1;e<a.length;e++)i(a[e]);t&&u&&console.groupEnd()}},s={info:i("INFO"),warn:i("WARN"),error:i("ERROR")};e.s(["default",0,{logger:s}],85586)},43174,e=>{"use strict";let t;var r=e.i(61206),n=e.i(25521);function o(e){if("string"!=typeof e)return null;let t=e.trim();return 0===t.length||"undefined"===t||"null"===t?null:t}let i=new class{_fallbackAccessToken=null;_accessTokenSource=null;configureAccessTokenSource(e){this._accessTokenSource=e,null!==this._fallbackAccessToken&&(this._accessTokenSource.setAccessToken(this._fallbackAccessToken),this._fallbackAccessToken=null)}getAccessToken(){return null===this._accessTokenSource?o(this._fallbackAccessToken):o(this._accessTokenSource.getAccessToken())}setAccessToken(e){let t=o(e);if(null===t)return void this.clearAccessToken();if(null===this._accessTokenSource){this._fallbackAccessToken=t;return}this._accessTokenSource.setAccessToken(t)}clearAccessToken(){if(null===this._accessTokenSource){this._fallbackAccessToken=null;return}this._accessTokenSource.clearAccessToken()}},s=async e=>e(),a=()=>{};class l extends Error{status;payload;constructor(e,t,r){super(t),this.status=e,this.payload=r}}let c=new class{_baseUrl;constructor(e){this._baseUrl=e.replace(/\/$/,"")}async request(e,t={}){let r=null;try{r=t.withLoadingCount??!0?await s(()=>this._fetchJson(e,t)):await this._fetchJson(e,t)}catch(t){let e=new l(0,t instanceof Error?t.message:"Network request failed",null);return a(e),[e,null]}if(null===r){let e=new l(0,"Network request failed",null);return a(e),[e,null]}return r.ok?[null,r.data]:(401===r.status&&i.clearAccessToken(),[new l(r.status,r.statusText,r.data),null])}async _fetchJson(e,t){let r=t.method??"GET",n=t.withAuth??!0?i.getAccessToken():null,o=t.body instanceof FormData,s={...t.headers??{}};void 0===t.body||o||(s["Content-Type"]=s["Content-Type"]??"application/json"),null!==n&&(s.Authorization=`Bearer ${n}`);let a=await fetch(this._toUrl(e),{method:r,headers:s,body:this._toRequestBody(t.body),signal:t.signal}),l=await this._parseJson(a),c=this._unwrapEnvelope(l);return{ok:a.ok,status:a.status,statusText:a.statusText,data:c}}_unwrapEnvelope(e){return"object"==typeof e&&null!==e&&"statusCode"in e&&"data"in e?e.data:e}async _parseJson(e){let t=e.headers.get("Content-Type");if(null===t||!t.includes("application/json"))return null;try{return await e.json()}catch{return null}}_toRequestBody(e){if(void 0!==e)return e instanceof FormData?e:JSON.stringify(e)}_toUrl(e){let t=e.startsWith("/")?e:`/${e}`;return t.startsWith("/mock-api/")?this._toPublicPathUrl(t):`${this._baseUrl}${t}`}_toPublicPathUrl(e){let t=n.default.env.PUBLIC_PATH;return""===t?e:`${t}${e}`}}(n.default.env.BACKEND_URL),u=new class{async login(e){let[t,r]=await c.request("/auth/login",{method:"POST",body:e,withAuth:!1,retryOnAuthError:!1});return null!==t?[t,null]:"string"!=typeof r.accessToken||0===r.accessToken.trim().length||"undefined"===r.accessToken||"null"===r.accessToken?(i.clearAccessToken(),[Error("Invalid login response: accessToken is missing"),null]):(i.setAccessToken(r.accessToken),[null,!0])}async restoreSession(){return null===i.getAccessToken()?(i.clearAccessToken(),[null,!1]):[null,!0]}async getMe(){let[e,t]=await c.request("/auth/me",{method:"GET",withAuth:!0,retryOnAuthError:!1});return null!==e?[e,null]:[null,t]}async logout(){i.clearAccessToken()}},d=new class{async getList(e){let t=new URLSearchParams({serviceType:e.serviceType}).toString(),[r,n]=await c.request(`/contracts?${t}`,{method:"GET",withAuth:!0});return null!==r?[r,null]:[null,n]}},f=new class{async getList(e){let[t,r]=await c.request(`/contracts/${e.contractId}/documents`,{method:"GET",withAuth:!0});return null!==t?[t,null]:[null,r]}async getOcrResult(e){let t=new FormData;t.append("templateId",e.templateId),t.append("documentId",e.documentId),t.append("file",e.file);let[r,n]=await c.request("/ocr/document-ai",{method:"POST",body:t,withAuth:!0,withLoadingCount:!1});return null!==r?[r,null]:[null,n]}async patchFieldList(e){let[t]=await c.request(`/documents/${e.documentId}`,{method:"PATCH",body:{fields:e.fields},withAuth:!0});return null!==t?[t,null]:[null,!0]}async getTemplateList(e){let t=new URLSearchParams({serviceType:e.serviceType}),[r,n]=await c.request(`/documents/templates?${t.toString()}`,{method:"GET",withAuth:!0});return null!==r?[r,null]:[null,n]}async getTemplateFieldList(e){let[t,r]=await c.request(`/documents/templates/${e.templateId}`,{method:"GET",withAuth:!0});return null!==t?[t,null]:[null,r]}},h=d,p={REPRESENTATIVE:{label:"대표"},CHIEF:{label:"국장"},MANAGER:{label:"과장"},DIRECTOR:{label:"단장"},TEAM_LEADER:{label:"팀장"},ASSOCIATE:{label:"사원"},SOCIAL_WORKER:{label:"사회복지사"}};var g=e.i(85586);let m="아이디는 영문과 숫자만 입력해 주세요.",b="아이디를 입력해 주세요.",_="비밀번호는 영문, 숫자, 특수문자(!@#$%^&*)만 입력해 주세요.",y="비밀번호는 8자 이상으로 입력해 주세요.",w=new Set([401,403]),v=class{_root;_loginId;_isNeedLoginId;_loginIdErrMsg;_password;_isShowPwd;_pwdErrMsg;constructor(e){this._root=e,this._loginId="",this._isNeedLoginId=!1,this._loginIdErrMsg=null,this._password="",this._isShowPwd=!1,this._pwdErrMsg=null,(0,r.makeAutoObservable)(this,void 0,{autoBind:!0})}get loginId(){return this._loginId}setLoginId(e){let t=e.replace(/[^A-Za-z0-9]/g,""),r=t.length!==e.length;this._loginId=t,r?this._loginIdErrMsg=m:this._loginIdErrMsg===m&&(this._loginIdErrMsg=null),this._loginId.length>0&&(this._isNeedLoginId=!1)}get isNeedLoginId(){return this._isNeedLoginId}get loginIdErrMsg(){return this._loginIdErrMsg}get password(){return this._password}setPassword(e){let t=e.replace(/[^A-Za-z0-9!@#$%^&*]/g,""),r=t.length!==e.length;if(this._password=t,r){this._pwdErrMsg=_;return}this._pwdErrMsg===_&&(this._pwdErrMsg=null),this._password.length>=8&&this._pwdErrMsg===y&&(this._pwdErrMsg=null)}get isShowPwd(){return this._isShowPwd}setIsShowPwd(e){this._isShowPwd=e}get pwdErrMsg(){return this._pwdErrMsg}_extractErrorStatus(e){if("object"!=typeof e||null===e||!("status"in e))return null;let t=Reflect.get(e,"status");return"number"==typeof t?t:null}async login(){if(!this.validate())return;let[e]=await u.login({loginId:this._loginId,password:this._password});if(e){let t=this._extractErrorStatus(e);null!==t&&w.has(t)?this._root.ui.layout.toast.error("로그인에 실패했습니다. 아이디와 비밀번호를 확인해 주세요."):g.default.logger.error({devLogs:["login failed",e]})}else this.reset(),window.location.reload()}validate(){let e=!1;return 0===this._loginId.length?(this._isNeedLoginId=!0,this._loginIdErrMsg=b,e=!0):this._loginIdErrMsg===b&&(this._loginIdErrMsg=null),this._password.length<8&&(this._pwdErrMsg=y,e=!0),!e}reset(){this._loginId="",this._password="",this._isNeedLoginId=!1,this._loginIdErrMsg=null,this._pwdErrMsg=null,this._isShowPwd=!1}},x="auth.accessToken",E={accessToken:null===(t=window.localStorage.getItem(x))||0===t.length||"undefined"===t||"null"===t?null:t},S=class{_root;_accessToken;login;constructor(e){this._root=e,this._accessToken=E.accessToken,(0,r.makeAutoObservable)(this,void 0,{autoBind:!0}),i.configureAccessTokenSource({getAccessToken:()=>this._accessToken,setAccessToken:e=>{(0,r.runInAction)(()=>{this._accessToken=e}),window.localStorage.setItem(x,e)},clearAccessToken:()=>{(0,r.runInAction)(()=>{this._accessToken=null}),window.localStorage.removeItem(x)}}),this.login=new v(this._root)}get isAuthed(){return null!==this._accessToken}get me(){return this._root.data.auth.me.data}get mePositionLabel(){let e=this.me?.position;return null==e?null:"SOCIAL_WORKER"===e?"복지사":p[e].label}get meNameWithPosition(){let e=this.me?.name,t=this.mePositionLabel;return void 0===e||null===t?null:`${e} ${t}`}async _initializeMeQuery(){null===this._root.data.auth.me.query&&(this._root.data.auth.me.setQuery({}),await (0,r.when)(()=>"success"===this._root.data.auth.me.status||"error"===this._root.data.auth.me.status))}async refetchMe(){return null===this._root.data.auth.me.query?await this._initializeMeQuery():await this._root.data.auth.me.refetch(),null===this._root.data.auth.me.error&&null!==this._root.data.auth.me.data}async restoreSession(){let[e,t]=await u.restoreSession();return null!==e||!1===t?(this._root.data.auth.me.reset(),!1):this.refetchMe()}async logout(){await u.logout(),this._root.data.auth.me.reset()}reset(){let e={accessToken:E.accessToken};this._accessToken=e.accessToken,this._root.data.auth.me.reset()}};function T(e){if(null==e||""===e.trim())return Number.MIN_SAFE_INTEGER;let t=Date.parse(e);return Number.isNaN(t)?Number.MIN_SAFE_INTEGER:t}function I(e,t){let r=Math.max(T(t.serviceStartDate),T(t.contractStartDate),T(t.createdAt)),n=Math.max(T(e.serviceStartDate),T(e.contractStartDate),T(e.createdAt));return n!==r?r-n:String(t.id).localeCompare(String(e.id),void 0,{numeric:!0,sensitivity:"base"})}let k=class{_root;_clientId;_serviceType;_capturedPhotoDataUrl;constructor(e){this._root=e,this._clientId=null,this._serviceType="MEAL",this._capturedPhotoDataUrl=null,(0,r.makeAutoObservable)(this,void 0,{autoBind:!0}),(0,r.reaction)(()=>this._serviceType,e=>{this._root.data.docs.templateList.setQuery({serviceType:e})},{fireImmediately:!0}),(0,r.reaction)(()=>this.selectedContractId,e=>{null===e?this._root.data.docs.list.reset():this._root.data.docs.list.setQuery({contractId:e})},{fireImmediately:!0})}setContext(e,t){this._clientId=e,this._serviceType=t}clearContext(){this._clientId=null,this._root.data.docs.list.reset(),this._root.data.docs.ocrResult.reset(),this._capturedPhotoDataUrl=null}setCapturedPhotoDataUrl(e){this._capturedPhotoDataUrl=e}clearCapturedPhotoDataUrl(){this._capturedPhotoDataUrl=null}get capturedPhotoDataUrl(){return this._capturedPhotoDataUrl}requestOcrAnalyze(e){this._root.data.docs.ocrResult.setQuery(e)}async saveDocumentFields(e){return this._root.data.docs.fieldList.patchFields(e)}resetOcrAnalyze(){this._root.data.docs.ocrResult.reset()}get ocrAnalyzeStatus(){return this._root.data.docs.ocrResult.status}get ocrAnalyzeResult(){return this._root.data.docs.ocrResult.data}get ocrAnalyzeError(){return this._root.data.docs.ocrResult.error}get selectedContractId(){let e=this.contractsOfSelectedClient.find(e=>(function(e){let t,r,n,o,i=e.serviceStartDate,s=e.serviceEndDate;if(null===i||null===s)return!1;let a=(r=(t=new Date).getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),`${r}-${n}-${o}`);return i<=a&&a<=s})(e))??this.contractsOfSelectedClient[0]??null;return e?.id??null}get documentListStatus(){return this._root.data.docs.list.status}get templateListStatus(){return this._root.data.docs.templateList.status}get isLoading(){return"loading"===this.documentListStatus||"loading"===this.templateListStatus}get isError(){return"error"===this.documentListStatus||"error"===this.templateListStatus}get contractsOfSelectedClient(){return null===this._clientId?[]:(this._root.data.contract.list.data??[]).filter(e=>e.clientId===this._clientId).sort(I)}get templates(){return this._root.data.docs.templateList.data??[]}get documents(){return this._root.data.docs.list.data??[]}get updateNeededDocumentCards(){let e=new Map(this.templates.map(e=>[e.id,e]));return this.documents.filter(e=>"NEED_UPDATE"===e.displayStatus).map(t=>{let r=e.get(t.templateId);return{id:t.id,templateId:t.templateId,name:r?.name??t.templateName,thumbnailImagePath:r?.templateImagePath?.[0]??null}})}get shouldShowEmpty(){return!this.isLoading&&!this.isError&&0===this.updateNeededDocumentCards.length}},O=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],P=e=>e.normalize("NFC").toLowerCase().replace(/\s+/g,"");function j(e){if(null==e||""===e.trim())return Number.MIN_SAFE_INTEGER;let t=Date.parse(e);return Number.isNaN(t)?Number.MIN_SAFE_INTEGER:t}function C(e,t){let r=Math.max(j(t.serviceStartDate),j(t.contractStartDate),j(t.createdAt)),n=Math.max(j(e.serviceStartDate),j(e.contractStartDate),j(e.createdAt));return n!==r?r-n:String(t.id).localeCompare(String(e.id),void 0,{numeric:!0,sensitivity:"base"})}let A=class{_root;_serviceType;_searchText;constructor(e){this._root=e,this._serviceType="MEAL",this._searchText="",(0,r.makeAutoObservable)(this,void 0,{autoBind:!0}),(0,r.reaction)(()=>this._serviceType,e=>{this._root.data.contract.list.setQuery({serviceType:e})},{fireImmediately:!0})}get serviceType(){return this._serviceType}setServiceType(e){this._serviceType=e}get searchText(){return this._searchText}setSearchText(e){this._searchText=e}get status(){return this._root.data.contract.list.status}get isLoading(){return"loading"===this.status}get isError(){return"error"===this.status}get _contracts(){return this._root.data.contract.list.data??[]}get _allItems(){let e=new Map;return this._contracts.forEach(t=>{let r=e.get(t.clientId);r?r.push(t):e.set(t.clientId,[t])}),[...e.values()].map(e=>{let t,r,n=[...e].sort(C),o=n.find(e=>(function(e){let t,r,n,o,i=e.serviceStartDate,s=e.serviceEndDate;if(null===i||null===s)return!1;let a=(r=(t=new Date).getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),`${r}-${n}-${o}`);return i<=a&&a<=s})(e))??n[0];if(void 0===o)throw Error("contracts list must not be empty");let i=o.client.phoneNumber??o.client.contact,s=[o.client.address,o.client.addressDetail].filter(e=>!!e).join(" ");return{id:o.clientId,name:o.client.name,grade:o.grade,serviceType:o.serviceType??this._serviceType,managementCode:o.managementCode,hasNeedUpdateDocument:o.hasNeedUpdateDocument,contractStartDate:o.contractStartDate,contractEndDate:o.contractEndDate,serviceStartDate:o.serviceStartDate,serviceEndDate:o.serviceEndDate,phoneNumber:i,address:s,_searchable:(r=(e=>{let t="";for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r)-44032;n>=0&&n<=11171?t+=O[Math.floor(n/588)]:t+=e[r]}return t})(t=P(o.client.name)),t+r)}})}get items(){return this._allItems.filter(e=>{var t;let r;return t=e._searchable,!(r=P(this._searchText))||t.includes(r)})}findItem(e){return null===e?null:this.items.find(t=>t.id===e)??null}get shouldShowEmpty(){return!this.isLoading&&!this.isError&&0===this.items.length}},R=class{documentManagement;list;constructor(e){this.documentManagement=new k(e),this.list=new A(e)}},L=class{_query=null;_status="idle";_data=null;_syncedAt=null;_error=null;_requestSequence=0;constructor(){(0,r.makeObservable)(this,{_query:r.observable,_status:r.observable,_data:r.observable,_syncedAt:r.observable,_error:r.observable,query:r.computed,status:r.computed,data:r.computed,syncedAt:r.computed,error:r.computed,setQuery:r.action.bound,refetch:r.action.bound,reset:r.action.bound}),(0,r.reaction)(()=>this._query,()=>{null!==this._query&&this.refetch()})}get query(){return this._query}setQuery(e){this._query=e}get status(){return this._status}get data(){return this._data}get syncedAt(){return this._syncedAt}get error(){return this._error}async refetch(){if(null===this._query||!0===this._query)throw Error("Invalid query state for refetch");let e=++this._requestSequence,t=this._query;this._status="loading",this._error=null;try{let n=await this._fetch(t);if(e!==this._requestSequence)return;(0,r.runInAction)(()=>{this._data=n,this._syncedAt=new Date,this._status="success"})}catch(t){if(e!==this._requestSequence)return;(0,r.runInAction)(()=>{this._status="error",this._error=t instanceof Error?t:Error(String(t))})}}reset(){this._requestSequence+=1,this._query=null,this._status="idle",this._data=null,this._syncedAt=null,this._error=null}},$=class extends L{async _fetch(){let[e,t]=await u.getMe();if(null!==e)throw e;return t}},M=class{me;constructor(){this.me=new $}},D=class extends L{async _fetch(e){let[t,r]=await h.getList(e);if(null!==t)throw t;return r}},z=class{list;constructor(){this.list=new D}},N=class{async patchFields(e){let[t,r]=await f.patchFieldList(e);if(null!==t)throw t;return r}},F=class extends L{async _fetch(e){let[t,r]=await f.getList(e);if(null!==t)throw t;return r}},q=class extends L{async _fetch(e){let[t,r]=await f.getOcrResult(e);if(null!==t)throw t;return r}},U=class extends L{async _fetch(e){let[t,r]=await f.getTemplateFieldList(e);if(null!==t)throw t;return r}},B=class extends L{async _fetch(e){let[t,r]=await f.getTemplateList(e);if(null!==t)throw t;return r}},W=class{fieldList;list;ocrResult;templateFieldList;templateList;constructor(){this.fieldList=new N,this.list=new F,this.ocrResult=new q,this.templateFieldList=new U,this.templateList=new B}},G=class{auth;contract;docs;constructor(){this.auth=new M,this.contract=new z,this.docs=new W}},V=class{error(e){}},H=class{toast;constructor(){this.toast=new V}},Q=class{layout;constructor(){this.layout=new H}},X=new class{auth;client;data;ui;constructor(){this.auth=new S(this),this.data=new G,this.ui=new Q,this.client=new R(this)}};e.s(["default",0,X],43174)},64954,e=>{"use strict";var t=e.i(38803);let r=t.default.button.withConfig({componentId:"zh_mobile_web__sc-6e84832e-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #2264e8;
  border-radius: 4px;

  color: #fff;

  background: #2264e8;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }

  &:not(:disabled):hover {
    background: #1d56c8;
  }

  &:not(:disabled):active {
    background: #1746a2;
  }
`,n=t.default.button.withConfig({componentId:"zh_mobile_web__sc-b7046250-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ff6900;
  border-radius: 4px;

  color: #fff;

  background: #ff6900;

  &:hover {
    border: 1px solid #ea580c;
    background: #ea580c;
  }

  &:active {
    border: 1px solid #c2410c;
    background: #c2410c;
  }
`,o=t.default.button.withConfig({componentId:"zh_mobile_web__sc-ef0268b1-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #fff;

  background: #4f39f6;

  ${({$processing:e})=>!0===e&&t.css`
      pointer-events: none;
      cursor: not-allowed;
      border-color: #6c4cff;
      background: #6c4cff;
    `}

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #d1d5db;
  }

  ${({$processing:e})=>!0!==e&&t.css`
      &:not(:disabled):hover {
        background: #4328d8;
      }

      &:not(:disabled):active {
        background: #3822b8;
      }
    `}
`,i=t.default.button.withConfig({componentId:"zh_mobile_web__sc-a74db8c6-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;

  background: #fff;

  &:disabled {
    cursor: not-allowed;

    ${({$status:e})=>void 0===e&&t.css`
        border: 1px solid #d1d5db;
        color: #9ca3af;
        background: #f9fafb;
      `}
  }

  ${({$status:e})=>"processing"===e&&t.css`
      & {
        pointer-events: none;
        cursor: not-allowed;

        border: 1px solid #4f39f6;

        color: #4f39f6;

        background: #f6f3ff;
      }
    `}

  ${({$status:e})=>"success"===e&&t.css`
      & {
        pointer-events: none;
        cursor: not-allowed;

        border: 1px solid #00b979;

        color: #00a66a;

        background: #f3fff8;
      }
    `}

	${({$status:e})=>void 0===e&&t.css`
      &:not(:disabled):hover {
        border-color: #4328d8;
        color: #4328d8;
        background: #f6f3ff;
      }

      &:not(:disabled):active {
        border-color: #3822b8;
        color: #3822b8;
        background: #efeaff;
      }
    `}
`,s=t.default.input.attrs({type:"text"}).withConfig({componentId:"zh_mobile_web__sc-68834895-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  color: #0a0a0a;

  appearance: none;
  background: #fff;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border-color: #a998ff;
    background: #fbfcff;
  }

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }

  ${e=>!0===e.$autoFilled&&t.css`
      color: #4f39f6;
      background: #f4f2ff;

      &:hover {
        border-color: #a998ff;
        background: #e7e1ff;
      }

      &:focus {
        border-color: #5635ff;
        color: #0a0a0a;
        background: #fff;
      }
    `}

  &:read-only {
    pointer-events: none;
    border: 1px solid #d1d5db;
    color: #0a0a0a;
    background: #f9fafb;
  }
`,a=t.default.textarea.withConfig({componentId:"zh_mobile_web__sc-254a5c92-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  color: #0a0a0a;

  appearance: none;
  background: #fff;

  &::placeholder {
    color: ${e=>e.$placeholderColor??"#9ca3af"};
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border-color: #a998ff;
    background: #fbfcff;
  }

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }

  ${e=>!0===e.$autoFilled&&t.css`
      color: #4f39f6;
      background: #f4f2ff;

      &:hover {
        border-color: #a998ff;
        background: #e7e1ff;
      }

      &:focus {
        border-color: #5635ff;
        color: #0a0a0a;
        background: #fff;
      }
    `}

  &:read-only {
    pointer-events: none;
    border: 1px solid #d1d5db;
    color: #0a0a0a;
    background: #f9fafb;
  }

  ${e=>!0===e.$autoFilled&&t.css`
      &:read-only {
        color: #4f39f6;
        background: #f4f2ff;
      }
    `}
`,l=t.default.button.withConfig({componentId:"zh_mobile_web__sc-2b9f99e9-0"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  min-width: 80px;
  height: 56px;
  padding: 0 8px;
  border-bottom: ${({$selected:e})=>!0===e?"4px solid #063A74":"2px solid #b1b8be"};

  font-size: 16px;
  font-weight: 700;
  line-height: 150%; /* 24px */
  color: ${({$selected:e})=>!0===e?"#052B57":"#464c53"};
  text-align: center;
  letter-spacing: 0;

  background: rgb(255 255 255 / 0%);

  &:disabled {
    color: #8a949e;
  }
`,c=t.default.div.withConfig({componentId:"zh_mobile_web__sc-b758e8bd-0"})`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`;e.s(["default",0,{Button:{Filled:{Primary:o,Blue:r,Orange:n},Outlined:i},Tabbed:{Tab:l,Tabs:c},Input:{Text:s,Textarea:a}}],64954)},45856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(7744);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},96736,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:s}){let a=r?40*r:e,l=o?40*o:t,c=a&&l?`viewBox='0 0 ${a} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},64864,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},14871,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(44182);let n=e.r(47037),o=e.r(96736),i=e.r(64864),s=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:d=!1,loading:f,className:h,quality:p,width:g,height:m,fill:b=!1,style:_,overrideSrc:y,onLoad:w,onLoadingComplete:v,placeholder:x="empty",blurDataURL:E,fetchPriority:S,decoding:T="async",layout:I,objectFit:k,objectPosition:O,lazyBoundary:P,lazyRoot:j,...C},A){var R;let L,$,M,{imgConf:D,showAltText:z,blurComplete:N,defaultLoader:F}=A,q=D||i.imageConfigDefault;if("allSizes"in q)L=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t),r=q.qualities?.sort((e,t)=>e-t);L={...q,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let U=C.loader||F;delete C.loader,delete C.srcSet;let B="__next_img_default"in U;if(B){if("custom"===L.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=U;U=t=>{let{config:r,...n}=t;return e(n)}}if(I){"fill"===I&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(_={..._,...e});let r={responsive:"100vw",fill:"100vw"}[I];r&&!t&&(t=r)}let W="",G=l(g),V=l(m);if((R=e)&&"object"==typeof R&&(a(R)||void 0!==R.src)){let t=a(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if($=t.blurWidth,M=t.blurHeight,E=E||t.blurDataURL,W=t.src,!b)if(G||V){if(G&&!V){let e=G/t.width;V=Math.round(t.height*e)}else if(!G&&V){let e=V/t.height;G=Math.round(t.width*e)}}else G=t.width,V=t.height}let H=!u&&!d&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,H=!1),L.unoptimized&&(r=!0),B&&!L.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let Q=l(p),X=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:O}:{},z?{}:{color:"transparent"},_),J=N||"empty"===x?null:"blur"===x?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:G,heightInt:V,blurWidth:$,blurHeight:M,blurDataURL:E||"",objectFit:X.objectFit})}")`:`url("${x}")`,K=s.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,Y=J?{backgroundSize:K,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:r,width:o,quality:i,sizes:s,loader:a}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=r.exec(n);)o.push(parseInt(e[2]));if(o.length){let r=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,s),u=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((r,n)=>`${a({config:e,src:t,quality:i,width:r})} ${"w"===c?r:n+1}${c}`).join(", "),src:a({config:e,src:t,quality:i,width:l[u]})}}({config:L,src:e,unoptimized:r,width:G,quality:Q,sizes:t,loader:U}),ee=H?"lazy":f;return{props:{...C,loading:ee,fetchPriority:S,width:G,height:V,decoding:T,className:h,style:{...X,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:y||Z.src},meta:{unoptimized:r,preload:d||u,placeholder:x,fill:b}}}},22148,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let n=e.r(7744),o="u"<typeof window,i=o?()=>{}:n.useLayoutEffect,s=o?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),a()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},31779,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(81258),s=e.r(44066),a=e.r(9735),l=s._(e.r(7744)),c=i._(e.r(22148)),u=e.r(8514);function d(){return[(0,a.jsx)("meta",{charSet:"utf-8"},"charset"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(44182);let h=["name","httpEquiv","charSet","itemProp"];function p(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let i=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!s)&&n.has(t)?i=!1:(n.add(t),o[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,a.jsx)(c.default,{reduceComponentsToState:p,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},8552,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=e.r(81258)._(e.r(7744)),o=e.r(64864),i=n.default.createContext(o.imageConfigDefault)},89297,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(81258)._(e.r(7744)).default.createContext(null)},32927,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},28956,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(32927),o=e.r(47037);function i({config:e,src:t,width:r,quality:s}){let a=(0,o.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){a=n,r.delete("dpl");let o=r.toString();t=t.slice(0,e)+(o?"?"+o:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,n.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&a?`&dpl=${a}`:""}`}i.__next_img_default=!0;let s=i},69683,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return w}});let n=e.r(81258),o=e.r(44066),i=e.r(9735),s=o._(e.r(7744)),a=n._(e.r(20276)),l=n._(e.r(31779)),c=e.r(14871),u=e.r(64864),d=e.r(8552);e.r(44182);let f=e.r(89297),h=n._(e.r(28956)),p=e.r(45856),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i,s){let a=e?.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function b(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let _=(0,s.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:o,decoding:a,className:l,style:c,fetchPriority:u,placeholder:d,loading:f,unoptimized:h,fill:g,onLoadRef:_,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:v,sizesInput:x,onLoad:E,onError:S,...T},I)=>{let k=(0,s.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&m(e,d,_,y,w,h,x))},[e,d,_,y,w,S,h,x]),O=(0,p.useMergedRef)(I,k);return(0,i.jsx)("img",{...T,...b(u),loading:f,width:o,height:n,decoding:a,"data-nimg":g?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:O,onLoad:e=>{m(e.currentTarget,d,_,y,w,h,x)},onError:e=>{v(!0),"empty"!==d&&w(!0),S&&S(e)}})});function y({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&a.default.preload?(a.default.preload(t.src,r),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),n=(0,s.useContext)(d.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=g||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:o,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:a,onLoadingComplete:l}=e,p=(0,s.useRef)(a);(0,s.useEffect)(()=>{p.current=a},[a]);let m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let[b,w]=(0,s.useState)(!1),[v,x]=(0,s.useState)(!1),{props:E,meta:S}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:o,blurComplete:b,showAltText:v});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{...E,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:x,sizesInput:e.sizes,ref:t}),S.preload?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},31083,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return u},getImageProps:function(){return c}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(81258),s=e.r(14871),a=e.r(69683),l=i._(e.r(28956));function c(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=a.Image},7665,(e,t,r)=>{t.exports=e.r(31083)},35305,(e,t,r)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61227,(e,t,r)=>{"use strict";var n=e.r(35305);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},4153,(e,t,r)=>{t.exports=e.r(61227)()},48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var r=e.i(46907),n=e.i(7744),o=e.i(43174),i=e.i(7665),s=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=(0,n.forwardRef)(function(e,t){var r=e.color,o=e.size,i=void 0===o?24:o,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["color","size"]);return n.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),n.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}l.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},l.displayName="Eye";var u=(0,n.forwardRef)(function(e,t){var r=e.color,o=e.size,i=void 0===o?24:o,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["color","size"]);return n.default.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),n.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});u.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number])},u.displayName="EyeOff";var d=e.i(38803);let f=function(){let[e,r]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=e=>{"prompt"in e&&"function"==typeof e.prompt&&(e.preventDefault(),r(e))};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}},[]);let o=async()=>{null!==e&&(await e.prompt(),await e.userChoice,r(null))};return null===e?null:(0,t.jsx)(h,{type:"button",onClick:()=>void o(),children:"앱 설치"})},h=d.default.button.withConfig({componentId:"zh_mobile_web__sc-2a17cab3-0"})`
  position: fixed;
  z-index: 1000;
  right: 16px;
  bottom: 16px;

  padding: 10px 14px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
  color: #fff;

  background-color: #4f39f6;
  box-shadow: 0 6px 20px rgb(79 57 246 / 35%);
`;var p=e.i(64954),g=e.i(25521);let m=(0,r.observer)(function(){let{loginId:e,setLoginId:r,isNeedLoginId:s,loginIdErrMsg:a,password:c,setPassword:d,isShowPwd:h,setIsShowPwd:p,pwdErrMsg:m,login:k}=o.default.auth.login,[O,P]=(0,n.useState)(!1),j=(0,n.useRef)(null),C=(0,n.useRef)(null);return(0,n.useEffect)(()=>{j.current?.focus()},[]),(0,t.jsxs)(b,{children:[(0,t.jsx)(i.default,{src:`${g.default.env.PUBLIC_PATH}/icon/logo-signature.svg`,width:1,height:1,style:{height:32,width:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(y,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{$error:s||null!==a,children:"이메일 / 아이디"}),(0,t.jsx)(x,{$error:s||null!==a,$hasValue:e.length>0,children:(0,t.jsx)(E,{ref:j,value:e,onChange:e=>r(e.target.value),placeholder:"영문 아이디"})}),null!==a?(0,t.jsx)(T,{children:a}):null]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{$error:null!==m,children:"비밀번호"}),(0,t.jsxs)(x,{$error:null!==m,$hasValue:c.length>0,children:[(0,t.jsx)(E,{ref:C,type:h?"text":"password",value:c,onChange:e=>d(e.target.value),onFocus:()=>P(!0),onBlur:()=>P(!1),onKeyDown:e=>{"Enter"===e.key&&k()},placeholder:"영문, 숫자, 특수문자"}),(0,t.jsx)(S,{type:"button",$active:O,$error:null!==m,onClick:()=>p(!h),onFocus:()=>P(!0),onBlur:()=>P(!1),children:h?(0,t.jsx)(l,{size:24}):(0,t.jsx)(u,{size:24})})]}),null!==m?(0,t.jsx)(T,{children:m}):null]})]}),(0,t.jsx)(I,{type:"button",onClick:()=>void k(),disabled:0===e.length||0===c.length,children:"로그인하기"})]}),(0,t.jsx)(f,{})]})}),b=d.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-0"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-self: stretch;

  padding: 40px 24px;
`,_=d.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,y=d.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,w=d.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-3"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,v=d.default.span.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-4"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px; /* 125% */
  color: #111827;
`,x=d.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-5"})`
  display: flex;
  gap: 16px;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 55px;
  padding: 8px 16px;
  border: 1px solid
    ${({$error:e,$hasValue:t})=>!0===e?"#ff003e":!0===t?"#45464e":"#ced0d9"};
  border-radius: 8px;

  &:focus-within {
    border-color: #4f39f6;
  }

  &:focus-within ${v} {
    color: #4f39f6;
  }
`,E=d.default.input.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-6"})`
  flex: 1;

  min-width: 0;
  border: none;

  font-size: 20px;
  font-weight: 400;
  color: #1c1d22;

  background: transparent;
  outline: none;

  /* Hide native password reveal controls (e.g., Edge/IE) */
  &::-ms-reveal {
    display: none;
  }

  &::placeholder {
    color: #ced0d9;
  }
`,S=d.default.button.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-7"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  color: ${({$active:e,$error:t})=>!0===e?"#4f39f6":!0===t?"#ff3b6b":"#ced0d9"};

  background: none;
`,T=d.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-8"})`
  font-size: 12px;
  color: #ff3b6b;
`,I=(0,d.default)(p.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-9eaa5006-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 56px;
  padding: 18px 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
`,k=(0,r.observer)(function({children:e}){let{isAuthed:r}=o.default.auth,[i,s]=(0,n.useState)(!0);return((0,n.useEffect)(()=>{let e=!0;return(async()=>{await o.default.auth.restoreSession(),e&&s(!1)})(),()=>{e=!1}},[]),i)?null:(0,t.jsx)(t.Fragment,{children:r?e:(0,t.jsx)(m,{})})});e.s(["default",0,k],48271)},41873,e=>{"use strict";var t=e.i(7744),r=e.i(25521);e.s(["default",0,function(){return(0,t.useEffect)(()=>{if(!("serviceWorker"in navigator))return;let e=`${r.default.env.PUBLIC_PATH}/sw.js`,t=!1,n=()=>{t||(t=!0,window.location.reload())},o=e=>{e.update()},i=()=>{"visible"===document.visibilityState&&navigator.serviceWorker.getRegistration(e).then(e=>{void 0!==e&&o(e)})},s=()=>{navigator.serviceWorker.getRegistration(e).then(e=>{void 0!==e&&o(e)})};return navigator.serviceWorker.addEventListener("controllerchange",n),navigator.serviceWorker.register(e).then(e=>{o(e)}),document.addEventListener("visibilitychange",i),window.addEventListener("pageshow",s),()=>{navigator.serviceWorker.removeEventListener("controllerchange",n),document.removeEventListener("visibilitychange",i),window.removeEventListener("pageshow",s)}},[]),null}])}]);