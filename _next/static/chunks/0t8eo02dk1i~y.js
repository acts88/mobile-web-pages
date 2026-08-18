(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25431,e=>{"use strict";let t;var i=e.i(9735),l=e.i(88552),n=e.i(24655);e.i(3159);var r=e.i(46907),o=e.i(33261),a=e.i(7744),u=e.i(38803),d=e.i(7665),s=e.i(64954);let _="TARGET_",p="SOURCE_",f={TARGET_PAY_SELF_PARTIAL:`${_}PAY_SELF_PARTIAL`,SOURCE_PAY_SELF_FULL:`${p}PAY_SELF_FULL`,SOURCE_MONTHLY_SERVICE_COUNT:`${p}MONTHLY_SERVICE_COUNT`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL:`${_}AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL`,SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON:`${p}CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_LOCK_WHILE_DRAWER_OPEN:`${_}AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_LOCK_WHILE_DRAWER_OPEN`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION:`${_}AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION`,SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON:`${p}CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON`,TARGET_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT:`${_}AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT`,SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON:`${p}CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON`,TARGET_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_LOCK_WHILE_DRAWER_OPEN:`${_}AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_LOCK_WHILE_DRAWER_OPEN`,TARGET_SHOW_TEXTAREA_SCROLL_NOTICE:`${_}SHOW_TEXTAREA_SCROLL_NOTICE`,SOURCE_TEXTAREA_SCROLL_OVERFLOW:`${p}TEXTAREA_SCROLL_OVERFLOW`,SOURCE_MEAL_SERVICE_DATE:`${p}MEAL_SERVICE_DATE`,SOURCE_MEAL_TYPE_GENERAL:`${p}MEAL_TYPE_GENERAL`,SOURCE_MEAL_TYPE_THERAPEUTIC:`${p}MEAL_TYPE_THERAPEUTIC`,SOURCE_MEAL_TYPE_TEXTURE_MODIFIED:`${p}MEAL_TYPE_TEXTURE_MODIFIED`,TARGET_MEAL_MENU_SOUP:`${_}MEAL_MENU_SOUP`,TARGET_MEAL_MENU_SIDE_DISHES:`${_}MEAL_MENU_SIDE_DISHES`,TARGET_MEAL_MENU_EXTRA:`${_}MEAL_MENU_EXTRA`,SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL:`${p}CLICK_SELECT_ALL_GENERAL_MEAL`,SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL:`${p}CLICK_SELECT_ALL_THERAPEUTIC_MEAL`,SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL:`${p}CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL`,SOURCE_MULTI_DATE_SELECTED_VALUES:`${p}MULTI_DATE_SELECTED_VALUES`,TARGET_MULTI_DATE_SELECTED_COUNT:`${_}MULTI_DATE_SELECTED_COUNT`,SOURCE_TOTAL_AMOUNT_PRICE:`${p}TOTAL_AMOUNT_PRICE`,SOURCE_TOTAL_AMOUNT_COUNT:`${p}TOTAL_AMOUNT_COUNT`,TARGET_TOTAL_AMOUNT:`${_}TOTAL_AMOUNT`,SOURCE_COMPUTE_SUM:`${p}COMPUTE_SUM`,TARGET_SUM_RESULT:`${_}SUM_RESULT`,RETROACTIVE_PAYMENT_DATE:"RETROACTIVE_PAYMENT_DATE",RETROACTIVE_PAYMENT_REASON:"RETROACTIVE_PAYMENT_REASON",ACTUAL_SERVICE_PROVIDED_DATE:"ACTUAL_SERVICE_PROVIDED_DATE",TARGET_ACTUAL_SERVICE_PERIOD_START_DATE:`${_}ACTUAL_SERVICE_PERIOD_START_DATE`,TARGET_ACTUAL_SERVICE_PERIOD_END_DATE:`${_}ACTUAL_SERVICE_PERIOD_END_DATE`,TARGET_ACTUAL_SERVICE_COUNT:`${_}ACTUAL_SERVICE_COUNT`,TARGET_COPAYMENT_RECEIPT_AMOUNT:`${_}COPAYMENT_RECEIPT_AMOUNT`,TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE:`${_}COPAYMENT_RECEIPT_RECEIVED_DATE`,COPAYMENT_RECEIPT_TRANSACTION_NUMBER:"COPAYMENT_RECEIPT_TRANSACTION_NUMBER",SYNC_VALUE:"SYNC_VALUE"},c=e=>{if("string"!=typeof e||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,i,l]=e.split("-").map(Number);if(void 0===t||void 0===i||void 0===l||i<1||i>12)return!1;let n=new Date(t,i,0).getDate();return!(l<1)&&!(l>n)},E=96/25.4,h=96/25.4*210,g=(e,t)=>{if("number"==typeof e)return e;if("string"!=typeof e)return null;let i=e.trim();if(i.endsWith("%")){let e=Number(i.replace("%","").trim());return Number.isFinite(e)?(t?.pageWidthPx??h)*e/100:null}let l=i.match(/^calc\(\s*([0-9]+(?:\.[0-9]+)?)mm\s*\*\s*([0-9]+(?:\.[0-9]+)?)\s*\)$/);if(null!==l){let e=Number(l[1]),t=Number(l[2]);return Number.isFinite(e)&&Number.isFinite(t)?e*t*E:null}if(i.endsWith("px")){let e=Number(i.replace("px","").trim());return Number.isFinite(e)?e:null}let n=Number(i);return Number.isFinite(n)?n:null},m=e=>{let{text:i,fontSizePx:l}=e,n=void 0!==t?t:t="u"<typeof document?null:document.createElement("canvas").getContext("2d");if(null===n){var r,o,a;let e=0;for(let t of i){if(" "===t){e+=.35;continue}e+=/[\u0000-\u00ff]/.test(t)?.55:1}return e*l}let u="number"==typeof(r=e.fontWeight)?`${r}`:"string"==typeof r&&""!==r.trim()?r.trim():"400",d="italic"===(o=e.fontStyle)||"oblique"===o||"normal"===o?o:"normal",s="string"==typeof(a=e.fontFamily)&&""!==a.trim()?a:"sans-serif";n.font=`${d} ${u} ${l}px ${s}`;let _=n.measureText(i).width,p=g(e.letterSpacing);return null===p||i.length<=1?_:_+p*(i.length-1)};var T=e.i(98273),x=e.i(77264);function C({onClick:e,disabled:t,style:l,label:n}){let r=1.1*Math.max(12,Math.min(20,Math.round(g(l?.fontSize)??14)));return(0,i.jsxs)(b,{onClick:e,disabled:t,style:l,children:[(0,i.jsx)(T.default.DocumentSearch,{size:r}),n]})}let b=(0,u.default)(x.default).withConfig({componentId:"zh_mobile_web__sc-43b6564f-0"})``,A={fontSize:13,lineHeight:1.2},y=({onClick:e,disabled:t,style:i,label:l,checked:n=!1})=>{let r={display:"inline-flex",alignItems:"center",gap:6,border:0,padding:0,background:"transparent",color:"inherit",cursor:t?"not-allowed":"pointer",...i??{}};return(0,a.createElement)("button",{type:"button",onClick:e,disabled:t,style:r},(0,a.createElement)(s.default.Input.Radio,{checked:n,disabled:t,readOnly:!0}),(0,a.createElement)("span",{style:A},l))},O={[f.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON]:C,[f.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON]:C,[f.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON]:C,[f.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL]:y,[f.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL]:y,[f.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL]:y},R="1px solid #58616a",S=96/25.4*210,P=96/25.4*297;function $({imagePath:e,fields:t=[],overlayBoxes:l=[],readOnly:n=!1,displayValueOnly:r=!1,showAssistUiComponents:o=!0,onAssistTriggerClick:u,isAssistButtonDisabled:_,resolveAssistButtonLabel:p,resolveAssistButtonChecked:E,isFieldEditable:h,isFieldAutoFilled:T,onChangeField:x,onOverlayBoxClick:C}){let b,A=(0,a.useRef)(null),[y,D]=(0,a.useState)(1),[z,V]=(0,a.useState)({width:0,height:0}),{registerTextarea:k,checkOverflow:K,recheckAllOverflow:W,isTextareaScrollOverflowActive:H}=function(){let e=(0,a.useRef)(new Map),t=(0,a.useRef)(new Map),i=(0,a.useRef)(new Map),[l,n]=(0,a.useState)({}),r=(0,a.useCallback)((e,t)=>{n(i=>i[e]===t?i:{...i,[e]:t})},[]),o=(0,a.useCallback)(t=>{let i=e.current.get(t);if(void 0===i)return!1;let l=i.scrollHeight-i.clientHeight>1;return r(t,l),l},[r]),u=(0,a.useCallback)(l=>{let r=t.current.get(l);if(void 0!==r)return r;let a=t=>{if(null===t){let t=i.current.get(l);void 0!==t&&cancelAnimationFrame(t);let r=requestAnimationFrame(()=>{i.current.delete(l),e.current.has(l)||(e.current.delete(l),n(e=>{if(void 0===e[l])return e;let t={...e};return delete t[l],t}))});i.current.set(l,r);return}let r=i.current.get(l);void 0!==r&&(cancelAnimationFrame(r),i.current.delete(l)),e.current.set(l,t),requestAnimationFrame(()=>{o(l)})};return t.current.set(l,a),a},[o]),d=(0,a.useCallback)(()=>{e.current.forEach((e,t)=>{o(t)})},[o]);return(0,a.useEffect)(()=>{let e=()=>{requestAnimationFrame(()=>{d()})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[d]),{registerTextarea:u,checkOverflow:o,recheckAllOverflow:d,isTextareaScrollOverflowActive:(0,a.useCallback)(e=>!0===l[e],[l])}}(),G=(0,a.useRef)(new Map),Y=e=>{let t=e.trim();if(t.endsWith("%")){let e=Number.parseFloat(t.slice(0,-1));return Number.isFinite(e)?{unit:"%",value:e}:null}if(t.endsWith("px")){let e=Number.parseFloat(t.slice(0,-2));return Number.isFinite(e)?{unit:"px",value:e}:null}let i=Number.parseFloat(t);return Number.isFinite(i)?{unit:"px",value:i}:null},B=e=>e.uiProps.style??{},X=e=>`${e.page}:${e.fieldKey}`,q=(0,a.useCallback)((e,t)=>{let i=B(e);if("textarea"!==e.uiProps.fieldType||"middle"!==i.verticalAlign)return void t.style.removeProperty("padding-top");t.style.removeProperty("padding-top");let l=window.getComputedStyle(t),n=Number.parseFloat(l.paddingTop)||0,r=Number.parseFloat(l.paddingBottom)||0,o=Number.parseFloat(l.paddingLeft)||0,a=Number.parseFloat(l.paddingRight)||0,u=Math.max(t.clientWidth-o-a,0);if(u<=0){t.style.paddingTop=`${n}px`;return}let d=document.createElement("textarea"),s="textarea"===e.uiProps.fieldType?e.uiProps.placeholder?.text??"":"";d.value=""===t.value.trim()?s:t.value,d.rows=t.rows,d.wrap=t.wrap,d.style.position="absolute",d.style.visibility="hidden",d.style.pointerEvents="none",d.style.zIndex="-1",d.style.height="0",d.style.minHeight="0",d.style.maxHeight="none",d.style.overflow="hidden",d.style.resize="none",d.style.boxSizing="content-box",d.style.width=`${u}px`,d.style.padding="0",d.style.border="0",d.style.fontFamily=l.fontFamily,d.style.fontSize=l.fontSize,d.style.fontWeight=l.fontWeight,d.style.fontStyle=l.fontStyle,d.style.letterSpacing=l.letterSpacing,d.style.lineHeight=l.lineHeight,document.body.appendChild(d);let _=Math.max(d.scrollHeight,0);d.remove();let p=Math.max(t.clientHeight-n-r,0);if(p<=0||_>=p-1){t.style.paddingTop=`${n}px`;return}t.style.paddingTop=`${n+(p-_)/2}px`},[]),J=(e,t)=>{if(e.uiProps.triggerKeys?.includes(t)!==!0)return null;let i=e.uiProps.triggerKeyScopes?.[t],l="string"==typeof i?i.trim():"";return""===l?void 0:l},Q=e=>t.some(t=>null!==J(t,f.SOURCE_TEXTAREA_SCROLL_OVERFLOW)&&(null===e||J(t,f.SOURCE_TEXTAREA_SCROLL_OVERFLOW)===e)&&H(X(t)));(0,a.useEffect)(()=>{let e=A.current;if(null===e)return;let t=()=>{let t=e.clientWidth;t<=0?D(1):D(t/S)};t();let i=new ResizeObserver(()=>{t()});return i.observe(e),()=>{i.disconnect()}},[]),(0,a.useEffect)(()=>{W()},[t,W]),(0,a.useEffect)(()=>{for(let e of t){if("textarea"!==e.uiProps.fieldType)continue;let t=X(e),i=G.current.get(t);void 0!==i&&q(e,i)}},[q,t]);let Z=(e,t)=>{let i=B(e),l=((e,t)=>{let i,l=B(e);if("check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType||"image"===e.uiProps.fieldType||"multi-date"===e.uiProps.fieldType)return null;let n=g(l.width);if(null===n||n<=0)return null;let r=g(l.fontSize)??16,o=(i=((e,t)=>{if("number"==typeof e)return 2*e;if("string"!=typeof e)return 0;let i=e.trim().split(/\s+/).map(e=>g(e,t));if(0===i.length)return 0;let[l,n,r,o]=[i[0],i[1]??i[0],i[2]??i[0],i[3]??i[1]??i[0]];return void 0===l||void 0===n||void 0===r||void 0===o||null===l||null===n||null===r||null===o?0:n+o})(l.padding,void 0),i+(g(l.paddingLeft,void 0)??0)+(g(l.paddingRight,void 0)??0));if("textarea"===e.uiProps.fieldType){let e,i=g(l.height);if(null===i||i<=0)return`${r}px`;let a=(e=>{let t=e.horizontalPaddingPx??0,i=e.verticalPaddingPx??0,l=e.minFontSizePx??12,n=e.targetWidthPx-t-2,r=e.targetHeightPx-i-2;if(""===e.text.trim()||n<=0||r<=0)return e.baseFontSizePx;let o=t=>(e=>{let t=e.text.split("\n"),i=0;for(let l of t){if(""===l){i+=1;continue}let t="";for(let n of l){let l=`${t}${n}`;if(m({text:l,fontSizePx:e.fontSizePx,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing})<=e.maxWidthPx||""===t){t=l;continue}i+=1,t=n}i+=1}return i})({text:e.text,maxWidthPx:n,fontSizePx:t,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing})*((e,t)=>{if("number"==typeof e)return e<=4?e*t:e;if("string"==typeof e){let i=e.trim();if(i.endsWith("%")){let e=Number(i.replace("%","").trim());if(Number.isFinite(e))return t*e/100}let l=g(i);if(null!==l)return l;let n=Number(i);if(Number.isFinite(n))return n<=4?n*t:n}return 1.2*t})(e.lineHeight,t)<=r;if(o(e.baseFontSizePx))return e.baseFontSizePx;let a=l,u=e.baseFontSizePx,d=l;for(;a<=u;){let e=Math.floor((a+u)/2);o(e)?(d=e,a=e+1):u=e-1}return d})({text:t,targetWidthPx:n,targetHeightPx:i,baseFontSizePx:r,horizontalPaddingPx:o,verticalPaddingPx:(e=((e,t)=>{if("number"==typeof e)return 2*e;if("string"!=typeof e)return 0;let i=e.trim().split(/\s+/).map(e=>g(e,t));if(0===i.length)return 0;let[l,n,r]=[i[0],i[1]??i[0],i[2]??i[0]];return void 0===l||void 0===n||void 0===r||null===l||null===n||null===r?0:l+r})(l.padding,void 0),e+(g(l.paddingTop,void 0)??0)+(g(l.paddingBottom,void 0)??0)),minFontSizePx:12,lineHeight:l.lineHeight,fontWeight:l.fontWeight,fontStyle:l.fontStyle,fontFamily:l.fontFamily,letterSpacing:l.letterSpacing});return`${a}px`}let a=(e=>{let t=e.horizontalPaddingPx??0,i=e.minFontSizePx??12,l=e.targetWidthPx-t-2;if(""===e.text.trim()||l<=0)return e.baseFontSizePx;let n=m({text:e.text,fontSizePx:e.baseFontSizePx,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing});return n<=l?e.baseFontSizePx:Math.max(i,Math.floor(e.baseFontSizePx*l/n))})({text:t,targetWidthPx:n,baseFontSizePx:r,horizontalPaddingPx:o,minFontSizePx:12,fontWeight:l.fontWeight,fontStyle:l.fontStyle,fontFamily:l.fontFamily,letterSpacing:l.letterSpacing});return`${a}px`})(e,t);return{position:"absolute",...i,...null===l?{}:{fontSize:l}}},ee=e=>{let t=B(e).textAlign;return"left"===t||"right"===t||"center"===t?t:"center"},et=e=>{if("select"!==e.uiProps.fieldType)return e.value??"";let t=e.value??"";if(0===e.uiProps.options.length||e.uiProps.options.some(e=>e.value===t))return t;let i=e.uiProps.options[0];return i?.value??""},ei=e=>Object.entries(e).filter(([,e])=>null!=e&&""!==e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}:${String(t)}`).join("|"),el=(e,t,l,n)=>{if(!((e,t)=>{if(!(e.triggerKeys??[]).includes(f.TARGET_SHOW_TEXTAREA_SCROLL_NOTICE))return!0;let i=((e,t,i)=>{if(!0!==t.triggerKeys.includes(i))return null;if(Object.prototype.hasOwnProperty.call(t.triggerKeyScopes??{},i)){let e=t.triggerKeyScopes?.[i],l="string"==typeof e?e.trim():"";return""===l?void 0:l}let l=J(e,i);return null===l?null:l})(t,e,f.TARGET_SHOW_TEXTAREA_SCROLL_NOTICE);return null===i?Q(null):Q(i)})(e,t))return[];if("message"===e.type)return[(0,i.jsx)("div",{style:{position:"absolute",...e.style},children:e.message},l)];if("button"===e.type){if(r)return[];let o=e.triggerKeys[0];if(void 0===o)return[];let d=O[o]??(e=>(0,i.jsx)("button",{type:"button",onClick:e.onClick,disabled:e.disabled,style:e.style,children:e.label})),s=_?.({triggerKey:o,field:t,isReadOnly:n})??n,f=p?.({triggerKey:o,field:t})??o,c=E?.({triggerKey:o,field:t})??void 0;return[(0,i.jsx)(a.Fragment,{children:d({disabled:s,label:f,checked:c,style:{position:"absolute",...e.style},onClick:()=>{u?.({triggerKey:o,field:t})}})},l)]}return[(0,i.jsx)("div",{style:{position:"absolute",...e.style},children:e.children.flatMap((e,i)=>{let r=`${l}-child-${i}-${e.type}-${e.triggerKeys.join(",")}-${ei(e.style)}`;return el(e,t,r,n)})},l)]},en=(e,t,i)=>o?(e.uiProps.assistUiComponents??[]).flatMap((l,n)=>{let r=`${t}-${n}-${l.type}-${l.triggerKeys.join(",")}-${ei(l.style)}`;return el(l,e,r,i)}):[],er=(b=new Map,l.map(e=>{let t=`${e.left}-${e.top}-${e.width}-${e.height}-${e.borderColor??""}`,i=(b.get(t)??0)+1;return b.set(t,i),{box:e,key:`overlay-box-${t}-${i}`}})),eo=(0,a.useMemo)(()=>{let e=z.width,t=z.height,i=e>0&&t>0,l=(()=>{if(!i)return{left:0,top:0,width:S,height:P};let l=Math.min(S/e,P/t),n=e*l,r=t*l;return{left:(S-n)/2,top:(P-r)/2,width:n,height:r}})(),n=t=>"%"===t.unit?l.left+l.width*t.value/100:i?l.left+l.width*t.value/e:t.value,r=e=>"%"===e.unit?l.top+l.height*e.value/100:i?l.top+l.height*e.value/t:e.value,o=t=>"%"===t.unit?l.width*t.value/100:i?l.width*t.value/e:t.value,a=e=>"%"===e.unit?l.height*e.value/100:i?l.height*e.value/t:e.value,u=[];for(let{key:e,box:t}of er){let i=Y(t.left),l=Y(t.top),d=Y(t.width),s=Y(t.height);if(null===i||null===l||null===d||null===s)continue;let _=n(i),p=r(l),f=o(d),c=a(s);f<=0||c<=0||u.push({key:e,box:{left:`${_}px`,top:`${p}px`,width:`${f}px`,height:`${c}px`,borderColor:t.borderColor}})}return u},[z.height,z.width,er]);return(0,i.jsx)(L,{ref:A,style:{height:`${Math.max(P*y,1)}px`},children:(0,i.jsxs)(v,{style:{width:`${S}px`,height:`${P}px`,transform:`scale(${y})`},children:[(0,i.jsx)(d.default,{src:e,style:{objectFit:"contain"},fill:!0,alt:"",loading:"eager",onLoad:e=>{let{naturalWidth:t,naturalHeight:i}=e.currentTarget;t<=0||i<=0||V({width:t,height:i})}}),(0,i.jsx)(I,{$interactive:void 0!==x&&!1===n,children:t.map((e,t)=>(0,i.jsx)(a.Fragment,{children:((e,t)=>{let l=`${e.page}-${e.fieldKey}-${t}`,o=n||h?.(e)===!1,a=T?.(e)===!0,u=(e=>{if("date"===e.uiProps.fieldType){if(!0===e.uiProps.isDotDateFormat&&c(e.value??""))return(e.value??"").replace(/-/g,".");if(!0===e.uiProps.isMonthDateFormat&&c(e.value??"")){let[,t="",i=""]=(e.value??"").split("-");return`${t}월 ${i}일`}return(e=>{if(!c(e))return e;let[t,i,l]=e.split("-");return`${t}년 ${i}월 ${l}일`})(e.value??"")}if("money"===e.uiProps.fieldType)return(e=>{let t=(e=>{let t=e.replace(/[^0-9.-]/g,"");if(""===t||"-"===t||"."===t||"-."===t)return"";let i=t.startsWith("-")?"-":"",[l="",...n]=("-"===i?t.slice(1):t).split("."),r=l.replace(/-/g,""),o=n.join("").replace(/-/g,"");return""===o?`${i}${r}`:`${i}${r}.${o}`})(e);if(""===t)return"";let i=t.startsWith("-")?"-":"",[l="",n]=("-"===i?t.slice(1):t).split("."),r=l.replace(/\B(?=(\d{3})+(?!\d))/g,",");return void 0===n||""===n?`${i}${r}`:`${i}${r}.${n}`})(e.value??"");if("select"===e.uiProps.fieldType){let t=et(e),i=e.uiProps.options.find(e=>e.value===t);return i?.label??t}if("check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType)return r&&"radio"===e.uiProps.fieldType&&!0===e.uiProps.usePrintBorderAsMarkOnPrint?"":"true"===e.value?"✓":"";if("month-with-year"===e.uiProps.fieldType){if(!(e=>{if("string"!=typeof e)return!1;let t=e.trim();if(!/^\d{4}-\d{2}$/.test(t))return!1;let[i,l]=t.split("-"),n=Number(i),r=Number(l);return!!Number.isInteger(n)&&!!Number.isInteger(r)&&!(n<1)&&!(n>9999)&&!(r<1)&&!(r>12)})(e.value??""))return e.value??"";let[t="",i=""]=(e.value??"").split("-");return`${t}년 ${i}월`}if("multi-date"===e.uiProps.fieldType){let t=Array.from(new Set((e.value??"").split(/[\s,]+/).map(e=>e.trim()).filter(e=>e.length>0).filter(e=>c(e)))).sort((e,t)=>e.localeCompare(t)),i="";return t.map(e=>{let[t="",l="",n=""]=e.split("-"),r=`${l}/${n}`;return i===t?r:(i=t,`${t} ${r}`)}).join(", ")}return e.value??""})(e),d={style:Z(e,u),readOnly:o};if(r){var _;let t;if("image"===e.uiProps.fieldType){let t=e.value??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F,{style:d.style,$textAlign:ee(e),children:""!==t?(0,i.jsx)(j,{src:t,alt:""}):null},l),en(e,l,o)]})}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{style:(t=Z(_=e,u),"radio"===_.uiProps.fieldType&&r&&!0===_.uiProps.usePrintBorderAsMarkOnPrint?"true"!==_.value?t:{...t,border:R,borderRadius:"50%"}:"radio"!==_.uiProps.fieldType||!0!==_.uiProps.showPrintFieldBorders?t:{...t,border:R,borderRadius:"50%"}),$textAlign:(e=>{if("radio"===e.uiProps.fieldType)return"center";let t=B(e).textAlign;return"center"===t||"right"===t?t:"left"})(e),$isTextarea:"textarea"===e.uiProps.fieldType,$isTextareaMiddleAligned:"textarea"===e.uiProps.fieldType&&"middle"===B(e).verticalAlign,children:u},l),en(e,l,o)]})}switch(e.uiProps.fieldType){case"text":{let t=e.uiProps.placeholder?.text??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Text,{...d,value:e.value??"",placeholder:t,$autoFilled:a,onChange:t=>x?.(e,t.target.value)},l),en(e,l,o)]})}case"money":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Money,{...d,value:e.value??"",$autoFilled:a,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"date":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Date,{...d,value:e.value??"",$autoFilled:a,disableHolidaySelection:e.uiProps.disableHolidaySelection,displayOptions:!0===e.uiProps.isDotDateFormat?{format:"dot"}:!0===e.uiProps.isMonthDateFormat?{hideYear:!0}:void 0,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"select":if(0===e.uiProps.options.length)return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Text,{...d,value:e.value??"",$autoFilled:a,onChange:t=>x?.(e,t.target.value)},l),en(e,l,o)]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Select,{...d,value:et(e),$autoFilled:a,disabled:o,onChange:t=>x?.(e,t.target.value),children:e.uiProps.options.map(e=>(0,i.jsx)("option",{value:e.value,children:e.label},e.value))},l),en(e,l,o)]});case"check":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Check,{style:d.style,checked:"true"===e.value,disabled:o,onChange:t=>x?.(e,t.target.checked?"true":"false")},l),en(e,l,o)]});case"radio":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Radio,{style:d.style,checked:"true"===e.value,disabled:o,onChange:t=>x?.(e,t.target.checked?"true":"false")},l),en(e,l,o)]});case"textarea":{let t,n,r=X(e),u=e.uiProps.placeholder,_=u?.text??"",p=u?.style??{},f="string"==typeof p.color?p.color:void 0,c={...d.style,resize:"none"},E=(e.value??"")===""?{...c,...p}:c;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Textarea,{...d,style:E,ref:(n=k(t=X(e)),i=>{(n(i),null===i)?G.current.delete(t):(G.current.set(t,i),q(e,i))}),value:e.value??"",placeholder:_,$placeholderColor:f,$autoFilled:a,onInput:t=>{q(e,t.currentTarget),K(r)},onChange:t=>{x?.(e,t.target.value),q(e,t.currentTarget),K(r)}},l),en(e,l,o)]})}case"month-with-year":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.Date,{...d,value:e.value??"",valueType:"year-month",$autoFilled:a,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"multi-date":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default.Input.MultiDate,{...d,value:e.value??"",$autoFilled:a,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"image":{let t=e.value??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F,{style:d.style,$textAlign:ee(e),children:""!==t?(0,i.jsx)(j,{src:t,alt:""}):null},l),en(e,l,o)]})}default:return null}})(e,t)},`${e.page}-${e.fieldKey}`))}),(0,i.jsx)(N,{$clickable:void 0!==C,children:eo.map(({box:e,key:t},l)=>(0,i.jsx)(M,{type:"button",style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:e.borderColor??"#4f39f6"},onClick:()=>{C?.(l)},children:(0,i.jsx)(w,{children:l+1})},t))})]})})}let L=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-0"})`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #fff;
`,v=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-1"})`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
`,I=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-2"})`
  pointer-events: ${({$interactive:e})=>e?"auto":"none"};
  position: absolute;
  inset: 0;
`,N=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-3"})`
  pointer-events: ${({$clickable:e})=>e?"auto":"none"};
  position: absolute;
  inset: 0;
`,M=u.default.button.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-4"})`
  cursor: pointer;

  position: absolute;

  overflow: visible;

  margin: 0;
  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 4px;

  appearance: none;
  background: rgb(219 212 251 / 40%);
`,w=u.default.span.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-5"})`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(120%, -50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${30}px;
  height: ${30}px;
  margin-right: ${8}px;
  border-radius: 50%;

  font-size: ${15}px;
  font-weight: 700;
  color: #fff;

  background: #4f39f6;
`,U=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-6"})`
  overflow: hidden;
  display: flex;
  align-items: ${({$isTextarea:e,$isTextareaMiddleAligned:t})=>!0!==e||t?"center":"flex-start"};
  justify-content: ${({$textAlign:e})=>"center"===e?"center":"right"===e?"flex-end":"flex-start"};

  color: black;
  text-align: ${({$textAlign:e})=>e};
  white-space: pre-wrap;
`,F=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${({$textAlign:e})=>"center"===e?"center":"right"===e?"flex-end":"flex-start"};

  box-sizing: border-box;
  width: 100%;
  height: 100%;
`,j=u.default.img.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-8"})`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;var D=e.i(81911),z=e.i(43174),V=e.i(80629);let k=(0,r.observer)(function(){let e=z.default.client.documentManagement,t=(0,o.useRouter)(),r=(0,o.useSearchParams)(),[u,d]=(0,a.useState)("manual"),[s,_]=(0,a.useState)(null),[p,f]=(0,a.useState)(!1),c=r.get("clientId"),E=(0,V.getServiceType)(r.get("serviceType")),h=r.get("contractId"),g=r.get("templateId"),m=r.get("documentId"),T=r.get("documentStatus"),x=e.updateNeededDocumentCards.find(e=>e.templateId===g),C=e.templates.find(e=>e.id===g),b=`${x?.name??C?.name??"서류"} 비교`,A=(C?.templateImagePath??[]).filter(e=>""!==e.trim()),y=e.capturedPhotoDataUrl,O=e.comparisonRenderableFields,R=e.comparisonIsLoading,S=e.ocrAnalyzeResult,P=A.length>0?A:x?.thumbnailImagePath!==null&&x?.thumbnailImagePath!==void 0?[x.thumbnailImagePath]:[];(0,a.useEffect)(()=>{e.requestComparisonFieldData({templateId:g,documentId:m})},[m,e,g]);let L=(0,a.useMemo)(()=>{let e=e=>e.replace(/\s+/g," ").trim(),t=(e,t,i)=>!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(i)||t<1||t>12||i<1||i>31?null:{year:e,month:t,day:i},i=i=>{let l,n,r,o,a=(n=(l=e(i.ocrValue)).replace(/\s+/g,""),/^\d{4}-\d{1,2}-\d{1,2}$/.test(l)?"Y-M-D":/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(l)?"Y/M/D":/^\d{4}\.\d{1,2}\.\d{1,2}$/.test(l)?"Y.M.D":/^\d{8}$/.test(n)?"YMD":/^\d{2,4}년\d{1,2}월\d{1,2}일$/.test(n)?"KOR_YMD":/^\d{1,2}월\d{1,2}일$/.test(n)?"KOR_MD":null);if(null===a)return i.currentValue;let u=(i=>{let l=e(i),n=l.replace(/\s+/g,""),r=l.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(null!==r||null!==(r=l.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/))||null!==(r=l.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})$/))||null!==(r=n.match(/^(\d{4})(\d{2})(\d{2})$/)))return t(Number(r[1]),Number(r[2]),Number(r[3]));if(null!==(r=n.match(/^(\d{2,4})년(\d{1,2})월(\d{1,2})일$/))){var o;return t((o=Number(r[1]))>=100?o:o+2e3,Number(r[2]),Number(r[3]))}return null})(i.currentValue);return null===u?i.currentValue:(r=String(u.month).padStart(2,"0"),o=String(u.day).padStart(2,"0"),"Y-M-D"===a?`${u.year}-${r}-${o}`:"Y/M/D"===a?`${u.year}/${r}/${o}`:"Y.M.D"===a?`${u.year}.${r}.${o}`:"YMD"===a?`${u.year}${r}${o}`:"KOR_YMD"===a?`${u.year}년 ${u.month}월 ${u.day}일`:`${u.month}월 ${u.day}일`)},l=new Map(O.map(e=>[`${e.page}:${e.fieldKey}`,e.value??""])),n=[];for(let t of S??[]){if(1!==t.page)continue;let r=`${t.page}:${t.fieldKey}`,o=l.get(r);if(void 0===o)continue;let a=i({currentValue:o,ocrValue:t.value}),u=e(a);if(e(t.value)===u)continue;let d=(t.boundingBoxes??[]).flatMap(e=>e.vertices).filter(e=>Number.isFinite(e.x)&&Number.isFinite(e.y));if(0===d.length)continue;let s=d.map(e=>e.x),_=d.map(e=>e.y),p=Math.min(...s),f=Math.max(...s),c=Math.min(..._),E=Math.max(..._);if(Number.isFinite(p)&&Number.isFinite(f)&&Number.isFinite(c)&&Number.isFinite(E)&&!(f<=p)&&!(E<=c)){if(1>=Math.max(f,E)){let e=Math.min(100*Math.max(p,0),100),i=Math.min(100*Math.max(c,0),100),l=Math.min((f-p)*100,100),r=Math.min((E-c)*100,100);if(l<=0||r<=0)continue;n.push({left:`${e}%`,top:`${i}%`,width:`${l}%`,height:`${r}%`,borderColor:"#2563eb",manualValue:t.value,digitalValue:a});continue}n.push({left:`${Math.max(p,0)}px`,top:`${Math.max(c,0)}px`,width:`${f-p}px`,height:`${E-c}px`,borderColor:"#2563eb",manualValue:t.value,digitalValue:a})}}return n},[O,S]),v=L.map(e=>({left:e.left,top:e.top,width:e.width,height:e.height,borderColor:e.borderColor})),I=`[수기 원본] 정보 불일치 ${v.length}건`,N="manual"===u&&null!==s&&s>=0&&s<L.length,M=N&&null!==s?L[s]??null:null,w=null===M||""===M.manualValue.trim()?"-":M.manualValue,U=null===M||""===M.digitalValue.trim()?"-":M.digitalValue,F=async()=>{if(!p&&null!==m&&""!==m.trim()){f(!0);try{await e.saveDocumentFields({documentId:m,fields:[]}),t.push((0,V.buildDocumentSaveSuccessHref)({clientId:c,serviceType:E}))}finally{f(!1)}}};return(0,i.jsxs)(K,{children:[(0,i.jsx)(W,{children:(0,i.jsx)(D.default,{title:b,subtitle:I,onBack:()=>t.push((0,V.buildDetailHref)(c,E,V.DOCUMENT_MANAGEMENT_PATH))})}),(0,i.jsxs)(H,{role:"tablist","aria-label":"서류 비교 탭",children:[(0,i.jsx)(J,{type:"button",role:"tab","aria-selected":"manual"===u,$active:"manual"===u,onClick:()=>{_(null),d("manual")},children:"수기 원본"}),(0,i.jsx)(J,{type:"button",role:"tab","aria-selected":"digital"===u,$active:"digital"===u,onClick:()=>{_(null),d("digital")},children:"전산 서류"})]}),(0,i.jsx)(G,{children:"manual"===u?null===y?(0,i.jsx)(Y,{children:"수기 원본 이미지를 찾을 수 없습니다."}):(0,i.jsx)(B,{children:(0,i.jsx)(X,{children:(0,i.jsx)($,{imagePath:y,displayValueOnly:!0,readOnly:!0,showAssistUiComponents:!1,overlayBoxes:v,onOverlayBoxClick:e=>{_(e)}})})}):R?(0,i.jsx)(Y,{children:"전산 서류를 불러오는 중입니다."}):0===P.length?(0,i.jsx)(Y,{children:"서류 배경 이미지를 찾을 수 없습니다."}):(0,i.jsx)(B,{children:P.map((e,t)=>(0,i.jsx)(X,{children:(0,i.jsx)($,{imagePath:e,fields:O.filter(e=>e.page===t+1),displayValueOnly:!0,readOnly:!0,showAssistUiComponents:!1})},`digital-page-${t+1}`))})}),(0,i.jsxs)(q,{children:[(0,i.jsx)(Z,{type:"button",onClick:()=>t.push((0,V.buildDocumentCaptureHref)({clientId:c,serviceType:E,contractId:h,templateId:g??"",documentId:m,documentStatus:T})),children:"다시 촬영하기"}),"manual"===u?(0,i.jsxs)(ee,{type:"button",onClick:()=>{_(null),d("digital")},children:["전산 서류 보기",(0,i.jsx)(l.default,{sx:{fontSize:16}})]}):(0,i.jsxs)(et,{type:"button",disabled:p,onClick:()=>{F()},children:[(0,i.jsx)(n.default,{sx:{fontSize:16}}),p?"저장중":"최종확인 및 저장"]})]}),N?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ei,{type:"button","aria-label":"불일치 패널 닫기",onClick:()=>{_(null)}}),(0,i.jsxs)(el,{children:[(0,i.jsxs)(en,{children:[(0,i.jsx)(er,{children:(0,i.jsx)(eo,{})}),(0,i.jsxs)(ea,{children:[(0,i.jsx)(eu,{children:"정보 불일치 항목 확인"}),(0,i.jsxs)(ed,{children:[(0,i.jsxs)(es,{children:[(0,i.jsx)(e_,{$variant:"manual",children:"수기서류 인식값"}),(0,i.jsx)(ep,{children:w})]}),(0,i.jsxs)(es,{children:[(0,i.jsx)(e_,{$variant:"digital",children:"전자 바우처 기준값"}),(0,i.jsx)(ep,{children:U})]})]})]})]}),(0,i.jsx)(ef,{children:(0,i.jsxs)(ec,{children:[(0,i.jsx)(eh,{type:"button",onClick:()=>{_(null)},children:"닫기"}),(0,i.jsxs)(eg,{type:"button",onClick:()=>{0!==L.length&&_(e=>((e??0)+1)%L.length)},children:["다음 리스트 보기",(0,i.jsx)(l.default,{sx:{fontSize:16}})]})]})})]})]}):null]})}),K=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-0"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,W=u.default.header.withConfig({componentId:"zh_mobile_web__sc-8c134b64-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,H=u.default.section.withConfig({componentId:"zh_mobile_web__sc-8c134b64-2"})`
  position: relative;

  display: flex;

  width: 100%;
  height: 48px;
  border-bottom: 1px solid #d1d6de;

  background: #fff;
`,G=u.default.main.withConfig({componentId:"zh_mobile_web__sc-8c134b64-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  padding: 16px 24px;
`,Y=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-4"})`
  margin: auto 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #6b7280;
  text-align: center;
`,B=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,X=u.default.section.withConfig({componentId:"zh_mobile_web__sc-8c134b64-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #d9d9d9;
`,q=u.default.footer.withConfig({componentId:"zh_mobile_web__sc-8c134b64-7"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;

  margin-top: auto;
  padding: 24px 24px 48px;
`,J=u.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-8"})`
  cursor: pointer;

  position: relative;
  bottom: -1px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 0 18px;
  padding: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 3px solid ${({$active:e})=>!0===e?"#4f39f6":"transparent"};
  border-left: 0;

  font-size: 16px;
  font-weight: ${({$active:e})=>!0===e?700:500};
  color: ${({$active:e})=>!0===e?"#4f39f6":"#4A4F54"};

  background: transparent;
`,Q=u.css`
  display: flex;
  flex: 1 0 0;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,Z=(0,u.default)(s.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-8c134b64-9"})`
  ${Q}
`,ee=(0,u.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-10"})`
  ${Q}
`,et=(0,u.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-11"})`
  ${Q}
`,ei=u.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-12"})`
  cursor: pointer;

  position: absolute;
  z-index: 20;
  inset: 0;

  border: 0;

  background: rgb(0 0 0 / 38%);
`,el=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-13"})`
  position: absolute;
  z-index: 30;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  border-radius: 16px 16px 0 0;

  background: #fff;
`,en=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-14"})`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 10px 24px;
`,er=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-15"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4px;
`,eo=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-16"})`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: #d1d6de;
`,ea=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,eu=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-18"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #111827;
`,ed=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,es=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-20"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,e_=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-21"})`
  margin: 0;

  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,ep=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-22"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #111827;
`,ef=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-23"})`
  padding: 24px 24px 48px;
  background: #fff;
`,ec=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-24"})`
  display: flex;
  gap: 12px;
`,eE=u.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,eh=(0,u.default)(s.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-8c134b64-25"})`
  ${eE}
`,eg=(0,u.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-26"})`
  ${eE}
`;e.s(["default",0,k],25431)}]);