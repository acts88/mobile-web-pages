(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25661,(e,t,r)=>{"use strict";var s=e.r(7744),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=s.useState,a=s.useEffect,i=s.useLayoutEffect,l=s.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),s=n({inst:{value:r,getSnapshot:t}}),o=s[0].inst,u=s[1];return i(function(){o.value=r,o.getSnapshot=t,c(o)&&u({inst:o})},[e,r,t]),a(function(){return c(o)&&u({inst:o}),e(function(){c(o)&&u({inst:o})})},[e]),l(r),r};r.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:u},15833,(e,t,r)=>{"use strict";t.exports=e.r(25661)},3159,46907,e=>{"use strict";e.i(35910);var t,r,s,o=e.i(61206),n=e.i(7744);if(!n.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!o.makeObservable)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=e.i(20276);function i(e){return(0,o.getDependencyTree)(e)}var l=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var r=Date.now();t.registrations.forEach(function(s,o){r-s.registeredAt>=e&&(t.finalize(s.value),t.registrations.delete(o))}),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){this.registrations.set(r,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),c=new("u">typeof FinalizationRegistry?FinalizationRegistry:l)(function(e){var t;null==(t=e.reaction)||t.dispose(),e.reaction=null}),u=e.i(15833);function d(e){e.reaction=new o.Reaction("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),null==(t=e.onStoreChange)||t.call(e)})}var h="function"==typeof Symbol&&Symbol.for,f=null!=(s=null==(r=Object.getOwnPropertyDescriptor(function(){},"name"))?void 0:r.configurable)&&s,p=h?Symbol.for("react.forward_ref"):"function"==typeof n.forwardRef&&(0,n.forwardRef)(function(e){return null}).$$typeof,g=h?Symbol.for("react.memo"):"function"==typeof n.memo&&(0,n.memo)(function(e){return null}).$$typeof,m={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};e.s(["observer",0,function(e,t){if(g&&e.$$typeof===g)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r,s,o,a=null!=(o=null==t?void 0:t.forwardRef)&&o,l=e,h=e.displayName||e.name;if(p&&e.$$typeof===p&&(a=!0,"function"!=typeof(l=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var _=function(e,t){return function(e,t){void 0===t&&(t="observed");var r,s,o=n.default.useRef(null);if(!o.current){var a={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(e){return c.unregister(a),a.onStoreChange=e,a.reaction||(d(a),a.stateVersion=Symbol()),function(){var e;a.onStoreChange=null,null==(e=a.reaction)||e.dispose(),a.reaction=null}},getSnapshot:function(){return a.stateVersion}};o.current=a}var l=o.current;if(l.reaction||(d(l),c.register(o,l,l)),n.default.useDebugValue(l.reaction,i),(0,u.useSyncExternalStore)(l.subscribe,l.getSnapshot,l.getSnapshot),l.reaction.track(function(){try{r=e()}catch(e){s=e}}),s)throw s;return r}(function(){return l(e,t)},h)};return _.displayName=e.displayName,f&&Object.defineProperty(_,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(_.contextTypes=e.contextTypes),a&&(_=(0,n.forwardRef)(_)),r=e,s=_=(0,n.memo)(_),Object.keys(r).forEach(function(e){m[e]||Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(r,e))}),_}],46907),(t=a.unstable_batchedUpdates)||(t=function(e){e()}),(0,o.configure)({reactionScheduler:t}),c.finalizeAllImmediately,e.s([],3159)},25521,e=>{"use strict";e.i(35910);let t={IMAGE:[".jpg",".jpeg",".png"],AUDIO:[".mp3",".wav",".m4a",".aac"],DOCUMENT:[".hwp",".hwpx",".doc",".docx",".txt",".pdf",".xls",".xlsx"]},r={MAX_FILE_SIZE:0x6400000,MAX_FILE_SIZE_TEXT:"100MB",FILE_EXTENSION_WHITELIST_BY_GROUP:t,FILE_EXTENSION_WHITELIST:Object.values(t).flat()};e.s(["default",0,{env:{IS_DEV:!1,PUBLIC_PATH:"",BACKEND_URL:"https://api.acts88.site"},file:r}],25521)},85586,e=>{"use strict";let{IS_DEV:t}=e.i(25521).default.env,r={INFO:"#d3e3fd",WARN:"#fef6d5",ERROR:"#fcebeb"},s=1,o=null,n=e=>{let n="INFO"===e?console.info:"WARN"===e?console.warn:console.error;return({publicLog:a,devLogs:i=[],groupKey:l})=>{let c=void 0!==a||0!==i.length;t&&c&&(o&&clearTimeout(o),o=setTimeout(()=>{o=null,console.log("%c= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =","background-color: gainsboro; padding: 2px;")},1e3));let u=!1;if(t&&c){let t="string"==typeof i[0]?i[0]:void 0!==l?l:"log";console.group(`%c[Logger #${s++}] ${t}`,`background-color: ${r[e]}; padding: 2px;`),u=!0}if(void 0!==a&&n(a),t&&i.length>1)for(let e=1;e<i.length;e++)n(i[e]);t&&u&&console.groupEnd()}},a={info:n("INFO"),warn:n("WARN"),error:n("ERROR")};e.s(["default",0,{logger:a}],85586)},43174,e=>{"use strict";let t,r;var s=e.i(61206),o=e.i(25521);function n(e){if("string"!=typeof e)return null;let t=e.trim();return 0===t.length||"undefined"===t||"null"===t?null:t}let a=new class{_fallbackAccessToken=null;_fallbackRefreshToken=null;_accessTokenSource=null;configureAccessTokenSource(e){this._accessTokenSource=e,null!==this._fallbackAccessToken&&(this._accessTokenSource.setAccessToken(this._fallbackAccessToken),this._fallbackAccessToken=null),null!==this._fallbackRefreshToken&&(this._accessTokenSource.setRefreshToken(this._fallbackRefreshToken),this._fallbackRefreshToken=null)}getAccessToken(){return null===this._accessTokenSource?n(this._fallbackAccessToken):n(this._accessTokenSource.getAccessToken())}setAccessToken(e){let t=n(e);if(null===t)return void this.clearAccessToken();if(null===this._accessTokenSource){this._fallbackAccessToken=t;return}this._accessTokenSource.setAccessToken(t)}getRefreshToken(){return null===this._accessTokenSource?n(this._fallbackRefreshToken):n(this._accessTokenSource.getRefreshToken())}setRefreshToken(e){let t=n(e);if(null===t)return void this.clearRefreshToken();if(null===this._accessTokenSource){this._fallbackRefreshToken=t;return}this._accessTokenSource.setRefreshToken(t)}clearRefreshToken(){if(null===this._accessTokenSource){this._fallbackRefreshToken=null;return}this._accessTokenSource.clearRefreshToken()}clearAccessToken(){if(null===this._accessTokenSource){this._fallbackAccessToken=null;return}this._accessTokenSource.clearAccessToken()}clearTokens(){this.clearAccessToken(),this.clearRefreshToken()}},i=async e=>e(),l=()=>{};function c(e){if("string"!=typeof e)return!1;let t=e.trim();return 0!==t.length&&"undefined"!==t&&"null"!==t}class u extends Error{status;payload;constructor(e,t,r){super(t),this.status=e,this.payload=r}}let d=new class{_baseUrl;_refreshPromise=null;constructor(e){this._baseUrl=e.replace(/\/$/,"")}async request(e,t={}){let r=t.withAuth??!0,s=t.retryOnAuthError??!0,o=null;try{o=t.withLoadingCount??!0?await i(()=>this._fetchJson(e,t)):await this._fetchJson(e,t)}catch(t){let e=new u(0,t instanceof Error?t.message:"Network request failed",null);return l(e),[e,null]}if(null===o){let e=new u(0,"Network request failed",null);return l(e),[e,null]}if(!o.ok){if(401===o.status&&r&&s&&"/auth/refresh"!==e&&"/auth/login"!==e){if(await this._refreshAccessToken())return this.request(e,{...t,retryOnAuthError:!1});a.clearTokens()}return[new u(o.status,o.statusText,o.data),null]}return[null,o.data]}async _fetchJson(e,t){let r=t.method??"GET",s=t.withAuth??!0?a.getAccessToken():null,o=t.body instanceof FormData,n={...t.headers??{}};void 0===t.body||o||(n["Content-Type"]=n["Content-Type"]??"application/json"),null!==s&&(n.Authorization=`Bearer ${s}`);let i=await fetch(this._toUrl(e),{method:r,headers:n,body:this._toRequestBody(t.body),signal:t.signal}),l=await this._parseJson(i),c=this._unwrapEnvelope(l);return{ok:i.ok,status:i.status,statusText:i.statusText,data:c}}async _refreshAccessToken(){if(null!==this._refreshPromise)return this._refreshPromise;this._refreshPromise=this._runRefreshAccessToken();try{return await this._refreshPromise}finally{this._refreshPromise=null}}async _runRefreshAccessToken(){let e=a.getRefreshToken();if(null===e)return!1;try{let t=await this._fetchJson("/auth/refresh",{method:"POST",body:{refreshToken:e},withAuth:!1,withLoadingCount:!1,retryOnAuthError:!1});if(!t.ok)return!1;let r=t.data;if(!("object"==typeof r&&null!==r&&"accessToken"in r&&c(Reflect.get(r,"accessToken"))))return!1;let{accessToken:s}=r;if(!c(s))return!1;return a.setAccessToken(s),c(r.refreshToken)&&a.setRefreshToken(r.refreshToken),!0}catch{return!1}}_unwrapEnvelope(e){return"object"==typeof e&&null!==e&&"statusCode"in e&&"data"in e?e.data:e}async _parseJson(e){let t=e.headers.get("Content-Type");if(null===t||!t.includes("application/json"))return null;try{return await e.json()}catch{return null}}_toRequestBody(e){if(void 0!==e)return e instanceof FormData?e:JSON.stringify(e)}_toUrl(e){let t=e.startsWith("/")?e:`/${e}`;return t.startsWith("/mock-api/")?this._toPublicPathUrl(t):`${this._baseUrl}${t}`}_toPublicPathUrl(e){let t=o.default.env.PUBLIC_PATH;return""===t?e:`${t}${e}`}}(o.default.env.BACKEND_URL);function h(e){if("string"!=typeof e)return!1;let t=e.trim();return 0!==t.length&&"undefined"!==t&&"null"!==t}let f=new class{async login(e){let[t,r]=await d.request("/auth/login",{method:"POST",body:e,withAuth:!1,retryOnAuthError:!1});return null!==t?[t,null]:h(r.accessToken)?(a.setAccessToken(r.accessToken),h(r.refreshToken)?a.setRefreshToken(r.refreshToken):a.clearRefreshToken(),[null,!0]):(a.clearTokens(),[Error("Invalid login response: accessToken is missing"),null])}async refresh(e){let t=e?.refreshToken??a.getRefreshToken();if(null===t)return a.clearTokens(),[Error("Refresh token is missing"),null];let[r,s]=await d.request("/auth/refresh",{method:"POST",body:{refreshToken:t},withAuth:!1,retryOnAuthError:!1});return null!==r?[r,null]:h(s.accessToken)?(a.setAccessToken(s.accessToken),h(s.refreshToken)&&a.setRefreshToken(s.refreshToken),[null,!0]):(a.clearTokens(),[Error("Invalid refresh response: accessToken is missing"),null])}async restoreSession(){return null!==a.getAccessToken()||null!==a.getRefreshToken()?[null,!0]:(a.clearTokens(),[null,!1])}async getMe(){let[e,t]=await d.request("/auth/me",{method:"GET",withAuth:!0});return null!==e?[e,null]:[null,t]}async logout(){a.clearTokens()}},p=new class{async getList(e){let t=new URLSearchParams({serviceType:e.serviceType}).toString(),[r,s]=await d.request(`/contracts?${t}`,{method:"GET",withAuth:!0});return null!==r?[r,null]:[null,s]}},g=new class{async getList(e){let[t,r]=await d.request(`/contracts/${e.contractId}/documents`,{method:"GET",withAuth:!0});return null!==t?[t,null]:[null,r]}async getOcrResult(e){let t=new FormData;t.append("templateId",e.templateId),"string"==typeof e.documentId&&""!==e.documentId.trim()&&t.append("documentId",e.documentId),t.append("file",e.file);let[r,s]=await d.request("/ocr/document-ai",{method:"POST",body:t,withAuth:!0,withLoadingCount:!1});return null!==r?[r,null]:[null,s]}async patchFieldList(e){let[t]=await d.request(`/documents/${e.documentId}`,{method:"PATCH",body:{fields:e.fields},withAuth:!0});return null!==t?[t,null]:[null,!0]}async getFieldList(e){let[t,r]=await d.request(`/documents/${e.documentId}`,{method:"GET",withAuth:!0});return null!==t?[t,null]:[null,r]}async getTemplateList(e){let t=new URLSearchParams({serviceType:e.serviceType}),[r,s]=await d.request(`/documents/templates?${t.toString()}`,{method:"GET",withAuth:!0});return null!==r?[r,null]:[null,s]}async getTemplateFieldList(e){let[t,r]=await d.request(`/documents/templates/${e.templateId}`,{method:"GET",withAuth:!0});return null!==t?[t,null]:[null,r]}},m=p,_={REPRESENTATIVE:{label:"대표"},CHIEF:{label:"국장"},MANAGER:{label:"과장"},DIRECTOR:{label:"단장"},TEAM_LEADER:{label:"팀장"},ASSOCIATE:{label:"사원"},SOCIAL_WORKER:{label:"사회복지사"}};var b=e.i(85586);let w="아이디는 영문과 숫자만 입력해 주세요.",y="아이디를 입력해 주세요.",T="비밀번호는 영문, 숫자, 특수문자(!@#$%^&*)만 입력해 주세요.",k="비밀번호는 8자 이상으로 입력해 주세요.",v=new Set([401,403]),S=class{_root;_loginId;_isNeedLoginId;_loginIdErrMsg;_password;_isShowPwd;_pwdErrMsg;constructor(e){this._root=e,this._loginId="",this._isNeedLoginId=!1,this._loginIdErrMsg=null,this._password="",this._isShowPwd=!1,this._pwdErrMsg=null,(0,s.makeAutoObservable)(this,void 0,{autoBind:!0})}get loginId(){return this._loginId}setLoginId(e){let t=e.replace(/[^A-Za-z0-9]/g,""),r=t.length!==e.length;this._loginId=t,r?this._loginIdErrMsg=w:this._loginIdErrMsg===w&&(this._loginIdErrMsg=null),this._loginId.length>0&&(this._isNeedLoginId=!1)}get isNeedLoginId(){return this._isNeedLoginId}get loginIdErrMsg(){return this._loginIdErrMsg}get password(){return this._password}setPassword(e){let t=e.replace(/[^A-Za-z0-9!@#$%^&*]/g,""),r=t.length!==e.length;if(this._password=t,r){this._pwdErrMsg=T;return}this._pwdErrMsg===T&&(this._pwdErrMsg=null),this._password.length>=8&&this._pwdErrMsg===k&&(this._pwdErrMsg=null)}get isShowPwd(){return this._isShowPwd}setIsShowPwd(e){this._isShowPwd=e}get pwdErrMsg(){return this._pwdErrMsg}_extractErrorStatus(e){if("object"!=typeof e||null===e||!("status"in e))return null;let t=Reflect.get(e,"status");return"number"==typeof t?t:null}async login(){if(!this.validate())return;let[e]=await f.login({loginId:this._loginId,password:this._password});if(e){let t=this._extractErrorStatus(e);null!==t&&v.has(t)?this._root.ui.layout.toast.error("로그인에 실패했습니다. 아이디와 비밀번호를 확인해 주세요."):b.default.logger.error({devLogs:["login failed",e]})}else this.reset(),window.location.reload()}validate(){let e=!1;return 0===this._loginId.length?(this._isNeedLoginId=!0,this._loginIdErrMsg=y,e=!0):this._loginIdErrMsg===y&&(this._loginIdErrMsg=null),this._password.length<8&&(this._pwdErrMsg=k,e=!0),!e}reset(){this._loginId="",this._password="",this._isNeedLoginId=!1,this._loginIdErrMsg=null,this._pwdErrMsg=null,this._isShowPwd=!1}},I="auth.accessToken",E="auth.refreshToken",A={accessToken:null===(t=window.localStorage.getItem(I))||0===t.length||"undefined"===t||"null"===t?null:t,refreshToken:null===(r=window.localStorage.getItem(E))||0===r.length||"undefined"===r||"null"===r?null:r},x=class{_root;_accessToken;_refreshToken;login;constructor(e){this._root=e,this._accessToken=A.accessToken,this._refreshToken=A.refreshToken,(0,s.makeAutoObservable)(this,void 0,{autoBind:!0}),a.configureAccessTokenSource({getAccessToken:()=>this._accessToken,setAccessToken:e=>{(0,s.runInAction)(()=>{this._accessToken=e}),window.localStorage.setItem(I,e)},clearAccessToken:()=>{(0,s.runInAction)(()=>{this._accessToken=null}),window.localStorage.removeItem(I)},getRefreshToken:()=>this._refreshToken,setRefreshToken:e=>{(0,s.runInAction)(()=>{this._refreshToken=e}),window.localStorage.setItem(E,e)},clearRefreshToken:()=>{(0,s.runInAction)(()=>{this._refreshToken=null}),window.localStorage.removeItem(E)}}),this.login=new S(this._root)}get isAuthed(){return null!==this._accessToken}get me(){return this._root.data.auth.me.data}get mePositionLabel(){let e=this.me?.position;return null==e?null:"SOCIAL_WORKER"===e?"복지사":_[e].label}get meNameWithPosition(){let e=this.me?.name,t=this.mePositionLabel;return void 0===e||null===t?null:`${e} ${t}`}async _initializeMeQuery(){null===this._root.data.auth.me.query&&(this._root.data.auth.me.setQuery({}),await (0,s.when)(()=>"success"===this._root.data.auth.me.status||"error"===this._root.data.auth.me.status))}async refetchMe(){return null===this._root.data.auth.me.query?await this._initializeMeQuery():await this._root.data.auth.me.refetch(),null===this._root.data.auth.me.error&&null!==this._root.data.auth.me.data}async restoreSession(){let[e,t]=await f.restoreSession();return null!==e||!1===t?(this._root.data.auth.me.reset(),!1):this.refetchMe()}async logout(){await f.logout(),this._root.data.auth.me.reset()}reset(){let e={accessToken:A.accessToken,refreshToken:A.refreshToken};this._accessToken=e.accessToken,this._refreshToken=e.refreshToken,this._root.data.auth.me.reset()}};function R(e,t){return`${e}:${t}`}function L(e){if(null==e||""===e.trim())return Number.MIN_SAFE_INTEGER;let t=Date.parse(e);return Number.isNaN(t)?Number.MIN_SAFE_INTEGER:t}function C(e,t){let r=Math.max(L(t.serviceStartDate),L(t.contractStartDate),L(t.createdAt)),s=Math.max(L(e.serviceStartDate),L(e.contractStartDate),L(e.createdAt));return s!==r?r-s:String(t.id).localeCompare(String(e.id),void 0,{numeric:!0,sensitivity:"base"})}let O=class{_root;_clientId;_serviceType;_selectedContractId;_capturedPhotoDataUrl;constructor(e){this._root=e,this._clientId=null,this._serviceType="MEAL",this._selectedContractId=null,this._capturedPhotoDataUrl=null,(0,s.makeAutoObservable)(this,void 0,{autoBind:!0}),(0,s.reaction)(()=>this._serviceType,e=>{this._root.data.docs.templateList.setQuery({serviceType:e})},{fireImmediately:!0}),(0,s.reaction)(()=>this.selectedContractId,e=>{null===e?this._root.data.docs.list.reset():this._root.data.docs.list.setQuery({contractId:e})},{fireImmediately:!0})}setContext(e,t){this._clientId=e,this._serviceType=t,this._selectedContractId=null}clearContext(){this._clientId=null,this._selectedContractId=null,this._root.data.docs.list.reset(),this._root.data.docs.templateFieldList.reset(),this._root.data.docs.fieldList.reset(),this._root.data.docs.ocrResult.reset(),this._capturedPhotoDataUrl=null}requestComparisonFieldData(e){null===e.templateId||""===e.templateId.trim()?this._root.data.docs.templateFieldList.reset():this._root.data.docs.templateFieldList.setQuery({templateId:e.templateId}),null===e.documentId||""===e.documentId.trim()?this._root.data.docs.fieldList.reset():this._root.data.docs.fieldList.setQuery({documentId:e.documentId})}setSelectedContractId(e){this._selectedContractId=e}setCapturedPhotoDataUrl(e){this._capturedPhotoDataUrl=e}clearCapturedPhotoDataUrl(){this._capturedPhotoDataUrl=null}get capturedPhotoDataUrl(){return this._capturedPhotoDataUrl}requestOcrAnalyze(e){this._root.data.docs.ocrResult.setQuery(e)}async saveDocumentFields(e){return this._root.data.docs.fieldList.patchFields(e)}resetOcrAnalyze(){this._root.data.docs.ocrResult.reset()}get ocrAnalyzeStatus(){return this._root.data.docs.ocrResult.status}get ocrAnalyzeResult(){return this._root.data.docs.ocrResult.data}get ocrAnalyzeError(){return this._root.data.docs.ocrResult.error}get comparisonTemplateFieldListStatus(){return this._root.data.docs.templateFieldList.status}get comparisonDocumentFieldListStatus(){return this._root.data.docs.fieldList.status}get comparisonIsLoading(){return"loading"===this.comparisonTemplateFieldListStatus||"loading"===this.comparisonDocumentFieldListStatus}get comparisonFields(){let e=this._root.data.docs.templateFieldList.data??[],t=new Map((this._root.data.docs.fieldList.data??[]).map(e=>[R(e.page,e.fieldKey),e])),r=e.map(e=>{let r=t.get(R(e.page,e.fieldKey));return{page:e.page,fieldKey:e.fieldKey,labelGroupName:e.uiProps.label?.group?.name??null,labelFieldName:e.uiProps.label?.field?.name??e.fieldKey,value:r?.value??e.value??"",triggerKeys:e.uiProps.triggerKeys??[],triggerKeyScopes:e.uiProps.triggerKeyScopes??{},labelGroupSortOrder:e.uiProps.label?.group?.sortOrder??Number.MAX_SAFE_INTEGER,labelFieldSortOrder:e.uiProps.label?.field?.sortOrder??Number.MAX_SAFE_INTEGER}});return r.sort((e,t)=>e.page!==t.page?e.page-t.page:e.labelGroupSortOrder!==t.labelGroupSortOrder?e.labelGroupSortOrder-t.labelGroupSortOrder:e.labelFieldSortOrder!==t.labelFieldSortOrder?e.labelFieldSortOrder-t.labelFieldSortOrder:e.fieldKey.localeCompare(t.fieldKey)),r.map(e=>({page:e.page,fieldKey:e.fieldKey,labelGroupName:e.labelGroupName,labelFieldName:e.labelFieldName,value:e.value,triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes}))}get comparisonRenderableFields(){let e=this._root.data.docs.templateFieldList.data??[],t=new Map((this._root.data.docs.fieldList.data??[]).map(e=>[R(e.page,e.fieldKey),e])),r=e.map(e=>{let r=t.get(R(e.page,e.fieldKey));return{...e,value:r?.value??e.value}});return r.sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey)),r}get selectedContractId(){let e=this.contractsOfSelectedClient.find(e=>e.id===this._selectedContractId);if(void 0!==e)return e.id;let t=[...this.contractsOfSelectedClient].reverse().find(e=>e.hasNeedUpdateDocument);if(void 0!==t)return t.id;let r=this.contractsOfSelectedClient.find(e=>(function(e){let t,r,s,o,n=e.serviceStartDate,a=e.serviceEndDate;if(null===n||null===a)return!1;let i=(r=(t=new Date).getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),`${r}-${s}-${o}`);return n<=i&&i<=a})(e))??this.contractsOfSelectedClient[0]??null;return r?.id??null}get documentListStatus(){return this._root.data.docs.list.status}get templateListStatus(){return this._root.data.docs.templateList.status}get isLoading(){return"loading"===this.documentListStatus||"loading"===this.templateListStatus}get isError(){return"error"===this.documentListStatus||"error"===this.templateListStatus}get contractsOfSelectedClient(){return null===this._clientId?[]:(this._root.data.contract.list.data??[]).filter(e=>e.clientId===this._clientId).sort(C)}get templates(){return this._root.data.docs.templateList.data??[]}get documents(){return(this._root.data.docs.list.data??[]).flatMap(e=>e.documents.map(t=>({id:t.id,templateId:e.templateId,templateName:e.templateName,displayStatus:t.displayStatus})))}get updateNeededDocumentCards(){let e=new Map(this.templates.map(e=>[e.id,e]));return this.documents.filter(e=>"NEED_UPDATE"===e.displayStatus||"NEED_MATCHING"===e.displayStatus).map(t=>{let r=e.get(t.templateId);return{id:t.id,templateId:t.templateId,name:r?.name??t.templateName,thumbnailImagePath:r?.templateImagePath?.[0]??null,displayStatus:t.displayStatus}})}get shouldShowEmpty(){return!this.isLoading&&!this.isError&&0===this.updateNeededDocumentCards.length}},D=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],N=e=>e.normalize("NFC").toLowerCase().replace(/\s+/g,"");function P(e){if(null==e||""===e.trim())return Number.MIN_SAFE_INTEGER;let t=Date.parse(e);return Number.isNaN(t)?Number.MIN_SAFE_INTEGER:t}function M(e,t){let r=Math.max(P(t.serviceStartDate),P(t.contractStartDate),P(t.createdAt)),s=Math.max(P(e.serviceStartDate),P(e.contractStartDate),P(e.createdAt));return s!==r?r-s:String(t.id).localeCompare(String(e.id),void 0,{numeric:!0,sensitivity:"base"})}let F=class{_root;_serviceType;_searchText;constructor(e){this._root=e,this._serviceType="MEAL",this._searchText="",(0,s.makeAutoObservable)(this,void 0,{autoBind:!0}),(0,s.reaction)(()=>this._serviceType,e=>{this._root.data.contract.list.setQuery({serviceType:e})},{fireImmediately:!0})}get serviceType(){return this._serviceType}setServiceType(e){this._serviceType=e}get searchText(){return this._searchText}setSearchText(e){this._searchText=e}get status(){return this._root.data.contract.list.status}get isLoading(){return"loading"===this.status}get isError(){return"error"===this.status}get _contracts(){return this._root.data.contract.list.data??[]}get _allItems(){let e=new Map;return this._contracts.forEach(t=>{let r=e.get(t.clientId);r?r.push(t):e.set(t.clientId,[t])}),[...e.values()].map(e=>{let t,r,s=[...e].sort(M),o=s.find(e=>(function(e){let t,r,s,o,n=e.serviceStartDate,a=e.serviceEndDate;if(null===n||null===a)return!1;let i=(r=(t=new Date).getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),`${r}-${s}-${o}`);return n<=i&&i<=a})(e))??s[0],n=s.some(e=>e.hasNeedUpdateDocument),a=s.some(e=>e.hasNeedMatchingDocument);if(void 0===o)throw Error("contracts list must not be empty");let i=o.client.phoneNumber??o.client.contact,l=[o.client.address,o.client.addressDetail].filter(e=>!!e).join(" ");return{id:o.clientId,name:o.client.name,grade:o.grade,serviceType:o.serviceType??this._serviceType,managementCode:o.managementCode,hasNeedUpdateDocument:n,hasNeedMatchingDocument:a,contractStartDate:o.contractStartDate,contractEndDate:o.contractEndDate,serviceStartDate:o.serviceStartDate,serviceEndDate:o.serviceEndDate,phoneNumber:i,address:l,_searchable:(r=(e=>{let t="";for(let r=0;r<e.length;r+=1){let s=e.charCodeAt(r)-44032;s>=0&&s<=11171?t+=D[Math.floor(s/588)]:t+=e[r]}return t})(t=N(o.client.name)),t+r)}})}get items(){return this._allItems.filter(e=>{var t;let r;return t=e._searchable,!(r=N(this._searchText))||t.includes(r)})}findItem(e){return null===e?null:this.items.find(t=>t.id===e)??null}get shouldShowEmpty(){return!this.isLoading&&!this.isError&&0===this.items.length}},$=class{documentManagement;list;constructor(e){this.documentManagement=new O(e),this.list=new F(e)}},q=class{_query=null;_status="idle";_data=null;_syncedAt=null;_error=null;_requestSequence=0;constructor(){(0,s.makeObservable)(this,{_query:s.observable,_status:s.observable,_data:s.observable,_syncedAt:s.observable,_error:s.observable,query:s.computed,status:s.computed,data:s.computed,syncedAt:s.computed,error:s.computed,setQuery:s.action.bound,refetch:s.action.bound,reset:s.action.bound}),(0,s.reaction)(()=>this._query,()=>{null!==this._query&&this.refetch()})}get query(){return this._query}setQuery(e){this._query=e}get status(){return this._status}get data(){return this._data}get syncedAt(){return this._syncedAt}get error(){return this._error}async refetch(){if(null===this._query||!0===this._query)throw Error("Invalid query state for refetch");let e=++this._requestSequence,t=this._query;this._status="loading",this._error=null;try{let r=await this._fetch(t);if(e!==this._requestSequence)return;(0,s.runInAction)(()=>{this._data=r,this._syncedAt=new Date,this._status="success"})}catch(t){if(e!==this._requestSequence)return;(0,s.runInAction)(()=>{this._status="error",this._error=t instanceof Error?t:Error(String(t))})}}reset(){this._requestSequence+=1,this._query=null,this._status="idle",this._data=null,this._syncedAt=null,this._error=null}},j=class extends q{async _fetch(){let[e,t]=await f.getMe();if(null!==e)throw e;return t}},z=class{me;constructor(){this.me=new j}},U=class extends q{async _fetch(e){let[t,r]=await m.getList(e);if(null!==t)throw t;return r}},K=class{list;constructor(){this.list=new U}},B=class extends q{async _fetch(e){let[t,r]=await g.getFieldList(e);if(null!==t)throw t;return r}async patchFields(e){let[t,r]=await g.patchFieldList(e);if(null!==t)throw t;return null!==this.query&&!0!==this.query&&this.query.documentId===e.documentId&&await this.refetch(),r}},G=class extends q{async _fetch(e){let[t,r]=await g.getList(e);if(null!==t)throw t;return r}},Q=class extends q{async _fetch(e){let[t,r]=await g.getOcrResult(e);if(null!==t)throw t;return r}},W=class extends q{async _fetch(e){let[t,r]=await g.getTemplateFieldList(e);if(null!==t)throw t;return r}},V=class extends q{async _fetch(e){let[t,r]=await g.getTemplateList(e);if(null!==t)throw t;return r}},H=class{fieldList;list;ocrResult;templateFieldList;templateList;constructor(){this.fieldList=new B,this.list=new G,this.ocrResult=new Q,this.templateFieldList=new W,this.templateList=new V}},J=class{auth;contract;docs;constructor(){this.auth=new z,this.contract=new K,this.docs=new H}};class X{_items=[];_sequence=0;_timerById=new Map;constructor(){(0,s.makeAutoObservable)(this,void 0,{autoBind:!0})}get items(){return this._items}show(e,t="info",r=3e3){let s=e.trim();if(""===s)return null;this._sequence+=1;let o=`toast-${Date.now()}-${this._sequence}`,n=Number.isFinite(r)?Math.max(0,r):3e3;if(this._items.push({id:o,message:s,type:t,durationMs:n,createdAt:Date.now()}),n>0){let e=window.setTimeout(()=>{this.remove(o)},n);this._timerById.set(o,e)}return o}success(e,t){return this.show(e,"success",t)}error(e,t){return this.show(e,"error",t)}info(e,t){return this.show(e,"info",t)}remove(e){let t=this._timerById.get(e);void 0!==t&&(window.clearTimeout(t),this._timerById.delete(e)),this._items=this._items.filter(t=>t.id!==e)}clear(){this._timerById.forEach(e=>{window.clearTimeout(e)}),this._timerById.clear(),this._items=[]}}let Z=class{toast;constructor(){this.toast=new X}},Y=class{layout;constructor(){this.layout=new Z}},ee=new class{auth;client;data;ui;constructor(){this.auth=new x(this),this.data=new J,this.ui=new Y,this.client=new $(this)}};e.s(["default",0,ee],43174)},64954,77264,e=>{"use strict";var t=e.i(38803);let r=t.default.button.withConfig({componentId:"zh_mobile_web__sc-6e84832e-0"})`
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
`,s=t.default.button.withConfig({componentId:"zh_mobile_web__sc-b7046250-0"})`
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
`,n=t.default.button.withConfig({componentId:"zh_mobile_web__sc-a74db8c6-0"})`
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
`;e.s(["default",0,n],77264);let a=t.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh_mobile_web__sc-ad5f4fe-0"})`
  margin: 0;
`;var i=e.i(9735);let l=t.default.input.withConfig({componentId:"zh_mobile_web__sc-8ddaf0af-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,c=t.default.input.withConfig({componentId:"zh_mobile_web__sc-b197aeeb-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,u=t.default.input.withConfig({componentId:"zh_mobile_web__sc-e5171c59-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,d=t.default.input.attrs({type:"radio"}).withConfig({componentId:"zh_mobile_web__sc-70f7c952-0"})`
  margin: 0;
`,h=t.default.select.withConfig({componentId:"zh_mobile_web__sc-a2b4c7f5-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,f=t.default.input.attrs({type:"text"}).withConfig({componentId:"zh_mobile_web__sc-68834895-0"})`
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
`,p=t.default.textarea.withConfig({componentId:"zh_mobile_web__sc-254a5c92-0"})`
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
`,g=t.default.button.withConfig({componentId:"zh_mobile_web__sc-2b9f99e9-0"})`
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
`,m=t.default.div.withConfig({componentId:"zh_mobile_web__sc-b758e8bd-0"})`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`;e.s(["default",0,{Button:{Filled:{Primary:o,Blue:r,Orange:s},Outlined:n},Tabbed:{Tab:g,Tabs:m},Input:{Text:f,Money:function({value:e,onChange:t,...r}){return(0,i.jsx)(c,{...r,type:"text",value:e,onChange:e=>t?.(e.target.value)})},Date:function({value:e,onChange:t,...r}){return(0,i.jsx)(l,{...r,type:"text",value:e,onChange:e=>t?.(e.target.value)})},Select:h,Radio:d,Check:a,MultiDate:function({value:e,onChange:t,...r}){return(0,i.jsx)(u,{...r,type:"text",value:e,onChange:e=>t?.(e.target.value)})},Textarea:p}}],64954)}]);