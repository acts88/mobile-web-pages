(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25431,e=>{"use strict";let t;var i=e.i(9735),l=e.i(88552),n=e.i(24655);e.i(3159);var r=e.i(46907),o=e.i(33261),a=e.i(7744),u=e.i(38803),d=e.i(51413),s=e.i(7665),_=e.i(62659);let c="TARGET_",p="SOURCE_",f={TARGET_PAY_SELF_PARTIAL:`${c}PAY_SELF_PARTIAL`,SOURCE_PAY_SELF_FULL:`${p}PAY_SELF_FULL`,SOURCE_MONTHLY_SERVICE_COUNT:`${p}MONTHLY_SERVICE_COUNT`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL:`${c}AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL`,SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON:`${p}CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_LOCK_WHILE_DRAWER_OPEN:`${c}AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_LOCK_WHILE_DRAWER_OPEN`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION:`${c}AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION`,SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON:`${p}CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON`,TARGET_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT:`${c}AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT`,SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON:`${p}CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON`,TARGET_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_LOCK_WHILE_DRAWER_OPEN:`${c}AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_LOCK_WHILE_DRAWER_OPEN`,TARGET_SHOW_TEXTAREA_SCROLL_NOTICE:`${c}SHOW_TEXTAREA_SCROLL_NOTICE`,SOURCE_TEXTAREA_SCROLL_OVERFLOW:`${p}TEXTAREA_SCROLL_OVERFLOW`,SOURCE_MEAL_SERVICE_DATE:`${p}MEAL_SERVICE_DATE`,SOURCE_MEAL_TYPE_GENERAL:`${p}MEAL_TYPE_GENERAL`,SOURCE_MEAL_TYPE_THERAPEUTIC:`${p}MEAL_TYPE_THERAPEUTIC`,SOURCE_MEAL_TYPE_TEXTURE_MODIFIED:`${p}MEAL_TYPE_TEXTURE_MODIFIED`,TARGET_MEAL_MENU_SOUP:`${c}MEAL_MENU_SOUP`,TARGET_MEAL_MENU_SIDE_DISHES:`${c}MEAL_MENU_SIDE_DISHES`,TARGET_MEAL_MENU_EXTRA:`${c}MEAL_MENU_EXTRA`,SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL:`${p}CLICK_SELECT_ALL_GENERAL_MEAL`,SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL:`${p}CLICK_SELECT_ALL_THERAPEUTIC_MEAL`,SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL:`${p}CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL`,SOURCE_MULTI_DATE_SELECTED_VALUES:`${p}MULTI_DATE_SELECTED_VALUES`,TARGET_MULTI_DATE_SELECTED_COUNT:`${c}MULTI_DATE_SELECTED_COUNT`,SOURCE_TOTAL_AMOUNT_PRICE:`${p}TOTAL_AMOUNT_PRICE`,SOURCE_TOTAL_AMOUNT_COUNT:`${p}TOTAL_AMOUNT_COUNT`,TARGET_TOTAL_AMOUNT:`${c}TOTAL_AMOUNT`,SOURCE_COMPUTE_SUM:`${p}COMPUTE_SUM`,TARGET_SUM_RESULT:`${c}SUM_RESULT`,RETROACTIVE_PAYMENT_DATE:"RETROACTIVE_PAYMENT_DATE",RETROACTIVE_PAYMENT_REASON:"RETROACTIVE_PAYMENT_REASON",ACTUAL_SERVICE_PROVIDED_DATE:"ACTUAL_SERVICE_PROVIDED_DATE",TARGET_ACTUAL_SERVICE_PERIOD_START_DATE:`${c}ACTUAL_SERVICE_PERIOD_START_DATE`,TARGET_ACTUAL_SERVICE_PERIOD_END_DATE:`${c}ACTUAL_SERVICE_PERIOD_END_DATE`,TARGET_ACTUAL_SERVICE_COUNT:`${c}ACTUAL_SERVICE_COUNT`,TARGET_COPAYMENT_RECEIPT_AMOUNT:`${c}COPAYMENT_RECEIPT_AMOUNT`,TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE:`${c}COPAYMENT_RECEIPT_RECEIVED_DATE`,COPAYMENT_RECEIPT_TRANSACTION_NUMBER:"COPAYMENT_RECEIPT_TRANSACTION_NUMBER",SYNC_VALUE:"SYNC_VALUE"},E=e=>{if("string"!=typeof e||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,i,l]=e.split("-").map(Number);if(void 0===t||void 0===i||void 0===l||i<1||i>12)return!1;let n=new Date(t,i,0).getDate();return!(l<1)&&!(l>n)},h=96/25.4,m=96/25.4*210,g=(e,t)=>{if("number"==typeof e)return e;if("string"!=typeof e)return null;let i=e.trim();if(i.endsWith("%")){let e=Number(i.replace("%","").trim());return Number.isFinite(e)?(t?.pageWidthPx??m)*e/100:null}let l=i.match(/^calc\(\s*([0-9]+(?:\.[0-9]+)?)mm\s*\*\s*([0-9]+(?:\.[0-9]+)?)\s*\)$/);if(null!==l){let e=Number(l[1]),t=Number(l[2]);return Number.isFinite(e)&&Number.isFinite(t)?e*t*h:null}if(i.endsWith("px")){let e=Number(i.replace("px","").trim());return Number.isFinite(e)?e:null}let n=Number(i);return Number.isFinite(n)?n:null},T=e=>{let{text:i,fontSizePx:l}=e,n=void 0!==t?t:t="u"<typeof document?null:document.createElement("canvas").getContext("2d");if(null===n){var r,o,a;let e=0;for(let t of i){if(" "===t){e+=.35;continue}e+=/[\u0000-\u00ff]/.test(t)?.55:1}return e*l}let u="number"==typeof(r=e.fontWeight)?`${r}`:"string"==typeof r&&""!==r.trim()?r.trim():"400",d="italic"===(o=e.fontStyle)||"oblique"===o||"normal"===o?o:"normal",s="string"==typeof(a=e.fontFamily)&&""!==a.trim()?a:"sans-serif";n.font=`${d} ${u} ${l}px ${s}`;let _=n.measureText(i).width,c=g(e.letterSpacing);return null===c||i.length<=1?_:_+c*(i.length-1)};var x=e.i(98273),b=e.i(77264);function C({onClick:e,disabled:t,style:l,label:n}){let r=1.1*Math.max(12,Math.min(20,Math.round(g(l?.fontSize)??14)));return(0,i.jsxs)(A,{onClick:e,disabled:t,style:l,children:[(0,i.jsx)(x.default.DocumentSearch,{size:r}),n]})}let A=(0,u.default)(b.default).withConfig({componentId:"zh_mobile_web__sc-43b6564f-0"})``,y={fontSize:13,lineHeight:1.2},R=({onClick:e,disabled:t,style:i,label:l,checked:n=!1})=>{let r={display:"inline-flex",alignItems:"center",gap:6,border:0,padding:0,background:"transparent",color:"inherit",cursor:t?"not-allowed":"pointer",...i??{}};return(0,a.createElement)("button",{type:"button",onClick:e,disabled:t,style:r},(0,a.createElement)(_.default.Input.Radio,{checked:n,disabled:t,readOnly:!0}),(0,a.createElement)("span",{style:y},l))},O={[f.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON]:C,[f.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON]:C,[f.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON]:C,[f.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL]:R,[f.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL]:R,[f.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL]:R},S="1px solid #58616a",$=96/25.4*210,P=96/25.4*297;function v({imagePath:e,fields:t=[],overlayBoxes:l=[],readOnly:n=!1,displayValueOnly:r=!1,showAssistUiComponents:o=!0,onAssistTriggerClick:u,isAssistButtonDisabled:d,resolveAssistButtonLabel:c,resolveAssistButtonChecked:p,isFieldEditable:h,isFieldAutoFilled:m,onChangeField:x,onOverlayBoxClick:b}){let C,A=(0,a.useRef)(null),[y,R]=(0,a.useState)(1),[z,V]=(0,a.useState)({width:0,height:0}),{registerTextarea:k,checkOverflow:W,recheckAllOverflow:K,isTextareaScrollOverflowActive:H}=function(){let e=(0,a.useRef)(new Map),t=(0,a.useRef)(new Map),i=(0,a.useRef)(new Map),[l,n]=(0,a.useState)({}),r=(0,a.useCallback)((e,t)=>{n(i=>i[e]===t?i:{...i,[e]:t})},[]),o=(0,a.useCallback)(t=>{let i=e.current.get(t);if(void 0===i)return!1;let l=i.scrollHeight-i.clientHeight>1;return r(t,l),l},[r]),u=(0,a.useCallback)(l=>{let r=t.current.get(l);if(void 0!==r)return r;let a=t=>{if(null===t){let t=i.current.get(l);void 0!==t&&cancelAnimationFrame(t);let r=requestAnimationFrame(()=>{i.current.delete(l),e.current.has(l)||(e.current.delete(l),n(e=>{if(void 0===e[l])return e;let t={...e};return delete t[l],t}))});i.current.set(l,r);return}let r=i.current.get(l);void 0!==r&&(cancelAnimationFrame(r),i.current.delete(l)),e.current.set(l,t),requestAnimationFrame(()=>{o(l)})};return t.current.set(l,a),a},[o]),d=(0,a.useCallback)(()=>{e.current.forEach((e,t)=>{o(t)})},[o]);return(0,a.useEffect)(()=>{let e=()=>{requestAnimationFrame(()=>{d()})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[d]),{registerTextarea:u,checkOverflow:o,recheckAllOverflow:d,isTextareaScrollOverflowActive:(0,a.useCallback)(e=>!0===l[e],[l])}}(),G=(0,a.useRef)(new Map),Y=e=>{let t=e.trim();if(t.endsWith("%")){let e=Number.parseFloat(t.slice(0,-1));return Number.isFinite(e)?{unit:"%",value:e}:null}if(t.endsWith("px")){let e=Number.parseFloat(t.slice(0,-2));return Number.isFinite(e)?{unit:"px",value:e}:null}let i=Number.parseFloat(t);return Number.isFinite(i)?{unit:"px",value:i}:null},B=e=>e.uiProps.style??{},X=e=>`${e.page}:${e.fieldKey}`,q=(0,a.useCallback)((e,t)=>{let i=B(e);if("textarea"!==e.uiProps.fieldType||"middle"!==i.verticalAlign)return void t.style.removeProperty("padding-top");t.style.removeProperty("padding-top");let l=window.getComputedStyle(t),n=Number.parseFloat(l.paddingTop)||0,r=Number.parseFloat(l.paddingBottom)||0,o=Number.parseFloat(l.paddingLeft)||0,a=Number.parseFloat(l.paddingRight)||0,u=Math.max(t.clientWidth-o-a,0);if(u<=0){t.style.paddingTop=`${n}px`;return}let d=document.createElement("textarea"),s="textarea"===e.uiProps.fieldType?e.uiProps.placeholder?.text??"":"";d.value=""===t.value.trim()?s:t.value,d.rows=t.rows,d.wrap=t.wrap,d.style.position="absolute",d.style.visibility="hidden",d.style.pointerEvents="none",d.style.zIndex="-1",d.style.height="0",d.style.minHeight="0",d.style.maxHeight="none",d.style.overflow="hidden",d.style.resize="none",d.style.boxSizing="content-box",d.style.width=`${u}px`,d.style.padding="0",d.style.border="0",d.style.fontFamily=l.fontFamily,d.style.fontSize=l.fontSize,d.style.fontWeight=l.fontWeight,d.style.fontStyle=l.fontStyle,d.style.letterSpacing=l.letterSpacing,d.style.lineHeight=l.lineHeight,document.body.appendChild(d);let _=Math.max(d.scrollHeight,0);d.remove();let c=Math.max(t.clientHeight-n-r,0);if(c<=0||_>=c-1){t.style.paddingTop=`${n}px`;return}t.style.paddingTop=`${n+(c-_)/2}px`},[]),J=(e,t)=>{if(e.uiProps.triggerKeys?.includes(t)!==!0)return null;let i=e.uiProps.triggerKeyScopes?.[t],l="string"==typeof i?i.trim():"";return""===l?void 0:l},Q=e=>t.some(t=>null!==J(t,f.SOURCE_TEXTAREA_SCROLL_OVERFLOW)&&(null===e||J(t,f.SOURCE_TEXTAREA_SCROLL_OVERFLOW)===e)&&H(X(t)));(0,a.useEffect)(()=>{let e=A.current;if(null===e)return;let t=()=>{let t=e.clientWidth;t<=0?R(1):R(t/$)};t();let i=new ResizeObserver(()=>{t()});return i.observe(e),()=>{i.disconnect()}},[]),(0,a.useEffect)(()=>{K()},[t,K]),(0,a.useEffect)(()=>{for(let e of t){if("textarea"!==e.uiProps.fieldType)continue;let t=X(e),i=G.current.get(t);void 0!==i&&q(e,i)}},[q,t]);let Z=(e,t)=>{let i=B(e),l=((e,t)=>{let i,l=B(e);if("check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType||"image"===e.uiProps.fieldType||"multi-date"===e.uiProps.fieldType)return null;let n=g(l.width);if(null===n||n<=0)return null;let r=g(l.fontSize)??16,o=(i=((e,t)=>{if("number"==typeof e)return 2*e;if("string"!=typeof e)return 0;let i=e.trim().split(/\s+/).map(e=>g(e,t));if(0===i.length)return 0;let[l,n,r,o]=[i[0],i[1]??i[0],i[2]??i[0],i[3]??i[1]??i[0]];return void 0===l||void 0===n||void 0===r||void 0===o||null===l||null===n||null===r||null===o?0:n+o})(l.padding,void 0),i+(g(l.paddingLeft,void 0)??0)+(g(l.paddingRight,void 0)??0));if("textarea"===e.uiProps.fieldType){let e,i=g(l.height);if(null===i||i<=0)return`${r}px`;let a=(e=>{let t=e.horizontalPaddingPx??0,i=e.verticalPaddingPx??0,l=e.minFontSizePx??12,n=e.targetWidthPx-t-2,r=e.targetHeightPx-i-2;if(""===e.text.trim()||n<=0||r<=0)return e.baseFontSizePx;let o=t=>(e=>{let t=e.text.split("\n"),i=0;for(let l of t){if(""===l){i+=1;continue}let t="";for(let n of l){let l=`${t}${n}`;if(T({text:l,fontSizePx:e.fontSizePx,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing})<=e.maxWidthPx||""===t){t=l;continue}i+=1,t=n}i+=1}return i})({text:e.text,maxWidthPx:n,fontSizePx:t,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing})*((e,t)=>{if("number"==typeof e)return e<=4?e*t:e;if("string"==typeof e){let i=e.trim();if(i.endsWith("%")){let e=Number(i.replace("%","").trim());if(Number.isFinite(e))return t*e/100}let l=g(i);if(null!==l)return l;let n=Number(i);if(Number.isFinite(n))return n<=4?n*t:n}return 1.2*t})(e.lineHeight,t)<=r;if(o(e.baseFontSizePx))return e.baseFontSizePx;let a=l,u=e.baseFontSizePx,d=l;for(;a<=u;){let e=Math.floor((a+u)/2);o(e)?(d=e,a=e+1):u=e-1}return d})({text:t,targetWidthPx:n,targetHeightPx:i,baseFontSizePx:r,horizontalPaddingPx:o,verticalPaddingPx:(e=((e,t)=>{if("number"==typeof e)return 2*e;if("string"!=typeof e)return 0;let i=e.trim().split(/\s+/).map(e=>g(e,t));if(0===i.length)return 0;let[l,n,r]=[i[0],i[1]??i[0],i[2]??i[0]];return void 0===l||void 0===n||void 0===r||null===l||null===n||null===r?0:l+r})(l.padding,void 0),e+(g(l.paddingTop,void 0)??0)+(g(l.paddingBottom,void 0)??0)),minFontSizePx:12,lineHeight:l.lineHeight,fontWeight:l.fontWeight,fontStyle:l.fontStyle,fontFamily:l.fontFamily,letterSpacing:l.letterSpacing});return`${a}px`}let a=(e=>{let t=e.horizontalPaddingPx??0,i=e.minFontSizePx??12,l=e.targetWidthPx-t-2;if(""===e.text.trim()||l<=0)return e.baseFontSizePx;let n=T({text:e.text,fontSizePx:e.baseFontSizePx,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing});return n<=l?e.baseFontSizePx:Math.max(i,Math.floor(e.baseFontSizePx*l/n))})({text:t,targetWidthPx:n,baseFontSizePx:r,horizontalPaddingPx:o,minFontSizePx:12,fontWeight:l.fontWeight,fontStyle:l.fontStyle,fontFamily:l.fontFamily,letterSpacing:l.letterSpacing});return`${a}px`})(e,t);return{position:"absolute",...i,...null===l?{}:{fontSize:l}}},ee=e=>{let t=B(e).textAlign;return"left"===t||"right"===t||"center"===t?t:"center"},et=e=>{if("select"!==e.uiProps.fieldType)return e.value??"";let t=e.value??"";if(0===e.uiProps.options.length||e.uiProps.options.some(e=>e.value===t))return t;let i=e.uiProps.options[0];return i?.value??""},ei=e=>Object.entries(e).filter(([,e])=>null!=e&&""!==e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}:${String(t)}`).join("|"),el=(e,t,l,n)=>{if(!((e,t)=>{if(!(e.triggerKeys??[]).includes(f.TARGET_SHOW_TEXTAREA_SCROLL_NOTICE))return!0;let i=((e,t,i)=>{if(!0!==t.triggerKeys.includes(i))return null;if(Object.prototype.hasOwnProperty.call(t.triggerKeyScopes??{},i)){let e=t.triggerKeyScopes?.[i],l="string"==typeof e?e.trim():"";return""===l?void 0:l}let l=J(e,i);return null===l?null:l})(t,e,f.TARGET_SHOW_TEXTAREA_SCROLL_NOTICE);return null===i?Q(null):Q(i)})(e,t))return[];if("message"===e.type)return[(0,i.jsx)("div",{style:{position:"absolute",...e.style},children:e.message},l)];if("button"===e.type){if(r)return[];let o=e.triggerKeys[0];if(void 0===o)return[];let s=O[o]??(e=>(0,i.jsx)("button",{type:"button",onClick:e.onClick,disabled:e.disabled,style:e.style,children:e.label})),_=d?.({triggerKey:o,field:t,isReadOnly:n})??n,f=c?.({triggerKey:o,field:t})??o,E=p?.({triggerKey:o,field:t})??void 0;return[(0,i.jsx)(a.Fragment,{children:s({disabled:_,label:f,checked:E,style:{position:"absolute",...e.style},onClick:()=>{u?.({triggerKey:o,field:t})}})},l)]}return[(0,i.jsx)("div",{style:{position:"absolute",...e.style},children:e.children.flatMap((e,i)=>{let r=`${l}-child-${i}-${e.type}-${e.triggerKeys.join(",")}-${ei(e.style)}`;return el(e,t,r,n)})},l)]},en=(e,t,i)=>o?(e.uiProps.assistUiComponents??[]).flatMap((l,n)=>{let r=`${t}-${n}-${l.type}-${l.triggerKeys.join(",")}-${ei(l.style)}`;return el(l,e,r,i)}):[],er=(C=new Map,l.map(e=>{let t=`${e.left}-${e.top}-${e.width}-${e.height}-${e.borderColor??""}`,i=(C.get(t)??0)+1;return C.set(t,i),{box:e,key:`overlay-box-${t}-${i}`}})),eo=(0,a.useMemo)(()=>{let e=z.width,t=z.height,i=e>0&&t>0,l=(()=>{if(!i)return{left:0,top:0,width:$,height:P};let l=Math.min($/e,P/t),n=e*l,r=t*l;return{left:($-n)/2,top:(P-r)/2,width:n,height:r}})(),n=t=>"%"===t.unit?l.left+l.width*t.value/100:i?l.left+l.width*t.value/e:t.value,r=e=>"%"===e.unit?l.top+l.height*e.value/100:i?l.top+l.height*e.value/t:e.value,o=t=>"%"===t.unit?l.width*t.value/100:i?l.width*t.value/e:t.value,a=e=>"%"===e.unit?l.height*e.value/100:i?l.height*e.value/t:e.value,u=[];for(let{key:e,box:t}of er){let i=Y(t.left),l=Y(t.top),d=Y(t.width),s=Y(t.height);if(null===i||null===l||null===d||null===s)continue;let _=n(i),c=r(l),p=o(d),f=a(s);p<=0||f<=0||u.push({key:e,box:{left:`${_}px`,top:`${c}px`,width:`${p}px`,height:`${f}px`,borderColor:t.borderColor}})}return u},[z.height,z.width,er]);return(0,i.jsx)(L,{ref:A,style:{height:`${Math.max(P*y,1)}px`},children:(0,i.jsxs)(I,{style:{width:`${$}px`,height:`${P}px`,transform:`scale(${y})`},children:[(0,i.jsx)(s.default,{src:e,style:{objectFit:"contain"},fill:!0,alt:"",loading:"eager",onLoad:e=>{let{naturalWidth:t,naturalHeight:i}=e.currentTarget;t<=0||i<=0||V({width:t,height:i})}}),(0,i.jsx)(N,{$interactive:void 0!==x&&!1===n,children:t.map((e,t)=>(0,i.jsx)(a.Fragment,{children:((e,t)=>{let l=`${e.page}-${e.fieldKey}-${t}`,o=n||h?.(e)===!1,a=m?.(e)===!0,u=(e=>{if("date"===e.uiProps.fieldType){if(!0===e.uiProps.isDotDateFormat&&E(e.value??""))return(e.value??"").replace(/-/g,".");if(!0===e.uiProps.isMonthDateFormat&&E(e.value??"")){let[,t="",i=""]=(e.value??"").split("-");return`${t}월 ${i}일`}return(e=>{if(!E(e))return e;let[t,i,l]=e.split("-");return`${t}년 ${i}월 ${l}일`})(e.value??"")}if("money"===e.uiProps.fieldType)return(e=>{let t=(e=>{let t=e.replace(/[^0-9.-]/g,"");if(""===t||"-"===t||"."===t||"-."===t)return"";let i=t.startsWith("-")?"-":"",[l="",...n]=("-"===i?t.slice(1):t).split("."),r=l.replace(/-/g,""),o=n.join("").replace(/-/g,"");return""===o?`${i}${r}`:`${i}${r}.${o}`})(e);if(""===t)return"";let i=t.startsWith("-")?"-":"",[l="",n]=("-"===i?t.slice(1):t).split("."),r=l.replace(/\B(?=(\d{3})+(?!\d))/g,",");return void 0===n||""===n?`${i}${r}`:`${i}${r}.${n}`})(e.value??"");if("select"===e.uiProps.fieldType){let t=et(e),i=e.uiProps.options.find(e=>e.value===t);return i?.label??t}if("check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType)return r&&"radio"===e.uiProps.fieldType&&!0===e.uiProps.usePrintBorderAsMarkOnPrint?"":"true"===e.value?"✓":"";if("month-with-year"===e.uiProps.fieldType){if(!(e=>{if("string"!=typeof e)return!1;let t=e.trim();if(!/^\d{4}-\d{2}$/.test(t))return!1;let[i,l]=t.split("-"),n=Number(i),r=Number(l);return!!Number.isInteger(n)&&!!Number.isInteger(r)&&!(n<1)&&!(n>9999)&&!(r<1)&&!(r>12)})(e.value??""))return e.value??"";let[t="",i=""]=(e.value??"").split("-");return`${t}년 ${i}월`}if("multi-date"===e.uiProps.fieldType){let t=Array.from(new Set((e.value??"").split(/[\s,]+/).map(e=>e.trim()).filter(e=>e.length>0).filter(e=>E(e)))).sort((e,t)=>e.localeCompare(t)),i="";return t.map(e=>{let[t="",l="",n=""]=e.split("-"),r=`${l}/${n}`;return i===t?r:(i=t,`${t} ${r}`)}).join(", ")}return e.value??""})(e),d={style:Z(e,u),readOnly:o};if(r){var s;let t;if("image"===e.uiProps.fieldType){let t=e.value??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{style:d.style,$textAlign:ee(e),children:""!==t?(0,i.jsx)(D,{src:t,alt:""}):null},l),en(e,l,o)]})}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F,{style:(t=Z(s=e,u),"radio"===s.uiProps.fieldType&&r&&!0===s.uiProps.usePrintBorderAsMarkOnPrint?"true"!==s.value?t:{...t,border:S,borderRadius:"50%"}:"radio"!==s.uiProps.fieldType||!0!==s.uiProps.showPrintFieldBorders?t:{...t,border:S,borderRadius:"50%"}),$textAlign:(e=>{if("radio"===e.uiProps.fieldType)return"center";let t=B(e).textAlign;return"center"===t||"right"===t?t:"left"})(e),$isTextarea:"textarea"===e.uiProps.fieldType,$isTextareaMiddleAligned:"textarea"===e.uiProps.fieldType&&"middle"===B(e).verticalAlign,children:u},l),en(e,l,o)]})}switch(e.uiProps.fieldType){case"text":{let t=e.uiProps.placeholder?.text??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Text,{...d,value:e.value??"",placeholder:t,$autoFilled:a,onChange:t=>x?.(e,t.target.value)},l),en(e,l,o)]})}case"money":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Money,{...d,value:e.value??"",$autoFilled:a,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"date":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Date,{...d,value:e.value??"",$autoFilled:a,disableHolidaySelection:e.uiProps.disableHolidaySelection,displayOptions:!0===e.uiProps.isDotDateFormat?{format:"dot"}:!0===e.uiProps.isMonthDateFormat?{hideYear:!0}:void 0,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"select":if(0===e.uiProps.options.length)return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Text,{...d,value:e.value??"",$autoFilled:a,onChange:t=>x?.(e,t.target.value)},l),en(e,l,o)]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Select,{...d,value:et(e),$autoFilled:a,disabled:o,onChange:t=>x?.(e,t.target.value),children:e.uiProps.options.map(e=>(0,i.jsx)("option",{value:e.value,children:e.label},e.value))},l),en(e,l,o)]});case"check":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Check,{style:d.style,checked:"true"===e.value,disabled:o,onChange:t=>x?.(e,t.target.checked?"true":"false")},l),en(e,l,o)]});case"radio":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Radio,{style:d.style,checked:"true"===e.value,disabled:o,onChange:t=>x?.(e,t.target.checked?"true":"false")},l),en(e,l,o)]});case"textarea":{let t,n,r=X(e),u=e.uiProps.placeholder,s=u?.text??"",c=u?.style??{},p="string"==typeof c.color?c.color:void 0,f={...d.style,resize:"none"},E=(e.value??"")===""?{...f,...c}:f;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Textarea,{...d,style:E,ref:(n=k(t=X(e)),i=>{(n(i),null===i)?G.current.delete(t):(G.current.set(t,i),q(e,i))}),value:e.value??"",placeholder:s,$placeholderColor:p,$autoFilled:a,onInput:t=>{q(e,t.currentTarget),W(r)},onChange:t=>{x?.(e,t.target.value),q(e,t.currentTarget),W(r)}},l),en(e,l,o)]})}case"month-with-year":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.Date,{...d,value:e.value??"",valueType:"year-month",$autoFilled:a,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"multi-date":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.default.Input.MultiDate,{...d,value:e.value??"",$autoFilled:a,onChange:t=>x?.(e,t)},l),en(e,l,o)]});case"image":{let t=e.value??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{style:d.style,$textAlign:ee(e),children:""!==t?(0,i.jsx)(D,{src:t,alt:""}):null},l),en(e,l,o)]})}default:return null}})(e,t)},`${e.page}-${e.fieldKey}`))}),(0,i.jsx)(M,{$clickable:void 0!==b,children:eo.map(({box:e,key:t},l)=>(0,i.jsx)(w,{type:"button",style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:e.borderColor??"#4f39f6"},onClick:()=>{b?.(l)},children:(0,i.jsx)(U,{children:l+1})},t))})]})})}let L=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-0"})`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #fff;
`,I=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-1"})`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
`,N=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-2"})`
  pointer-events: ${({$interactive:e})=>e?"auto":"none"};
  position: absolute;
  inset: 0;
`,M=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-3"})`
  pointer-events: ${({$clickable:e})=>e?"auto":"none"};
  position: absolute;
  inset: 0;
`,w=u.default.button.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-4"})`
  cursor: pointer;

  position: absolute;

  overflow: visible;

  margin: 0;
  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 4px;

  appearance: none;
  background: rgb(219 212 251 / 40%);
`,U=u.default.span.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-5"})`
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
`,F=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-6"})`
  overflow: hidden;
  display: flex;
  align-items: ${({$isTextarea:e,$isTextareaMiddleAligned:t})=>!0!==e||t?"center":"flex-start"};
  justify-content: ${({$textAlign:e})=>"center"===e?"center":"right"===e?"flex-end":"flex-start"};

  color: black;
  text-align: ${({$textAlign:e})=>e};
  white-space: pre-wrap;
`,j=u.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${({$textAlign:e})=>"center"===e?"center":"right"===e?"flex-end":"flex-start"};

  box-sizing: border-box;
  width: 100%;
  height: 100%;
`,D=u.default.img.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-8"})`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;var z=e.i(81911),V=e.i(43174),k=e.i(43172),W=e.i(80629);let K=(0,r.observer)(function(){let e=(0,o.useRouter)(),t=(0,o.useSearchParams)(),[r,u]=(0,a.useState)("manual"),[s,_]=(0,a.useState)(null),[c,p]=(0,a.useState)(!1),f=t.get("clientId"),E=t.get("serviceWorkerId"),h=(0,d.isServiceWorkerDocumentFlow)(E),m=h?V.default.serviceWorker.documentManagement:V.default.client.documentManagement,g=(0,W.getServiceType)(t.get("serviceType")),T=t.get("contractId"),x=t.get("templateId"),b=t.get("documentId"),C=t.get("documentStatus"),A=m.updateNeededDocumentCards.find(e=>e.templateId===x),y=m.templates.find(e=>e.id===x),R=A?.name??y?.name??null,O=h&&"LINKED_COMPLETED"===C&&(0,k.isSalaryProvisionMonthlyScheduleDocument)(R),S=`${A?.name??y?.name??"서류"} 비교`,$=(y?.templateImagePath??[]).filter(e=>""!==e.trim()),P=V.default.serviceWorker.documentManagement.monthlyScheduleComparisonResult,L=O?P?.imageUrl??null:m.capturedPhotoDataUrl,I=m.comparisonRenderableFields,N=m.comparisonIsLoading,M=m.ocrAnalyzeResult,w=$.length>0?$:A?.thumbnailImagePath!==null&&A?.thumbnailImagePath!==void 0?[A.thumbnailImagePath]:[];(0,a.useEffect)(()=>{m.requestComparisonFieldData({templateId:x,documentId:b}),O&&V.default.serviceWorker.documentManagement.requestMonthlyScheduleComparison(b)},[b,m,O,x]);let U=(()=>{if(O)return P?.unmatchedFieldBoundingBoxes.flatMap(e=>{let t=e.boundingBoxes.flatMap(e=>{let t=e.normalizedVertices??[];return t.length>0?t:e.vertices??[]});if(0===t.length)return[];let i=t.map(e=>e.x),l=t.map(e=>e.y),n=Math.min(...i),r=Math.max(...i),o=Math.min(...l),a=Math.max(...l);if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(o)||!Number.isFinite(a)||r<=n||a<=o)return[];let u=Math.max(r,a);return[{left:u<=1?`${100*Math.max(n,0)}%`:`${Math.max(n,0)}px`,top:u<=1?`${100*Math.max(o,0)}%`:`${Math.max(o,0)}px`,width:u<=1?`${(r-n)*100}%`:`${r-n}px`,height:u<=1?`${(a-o)*100}%`:`${a-o}px`,borderColor:"#2563eb",day:e.day,manualValue:e.ocrValue,digitalValue:e.actualValue,reasons:e.reasons}]})??[];let e=e=>e.replace(/\s+/g," ").trim(),t=(e,t,i)=>!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(i)||t<1||t>12||i<1||i>31?null:{year:e,month:t,day:i},i=i=>{let l,n,r,o,a=(n=(l=e(i.ocrValue)).replace(/\s+/g,""),/^\d{4}-\d{1,2}-\d{1,2}$/.test(l)?"Y-M-D":/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(l)?"Y/M/D":/^\d{4}\.\d{1,2}\.\d{1,2}$/.test(l)?"Y.M.D":/^\d{8}$/.test(n)?"YMD":/^\d{2,4}년\d{1,2}월\d{1,2}일$/.test(n)?"KOR_YMD":/^\d{1,2}월\d{1,2}일$/.test(n)?"KOR_MD":null);if(null===a)return i.currentValue;let u=(i=>{let l=e(i),n=l.replace(/\s+/g,""),r=l.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(null!==r||null!==(r=l.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/))||null!==(r=l.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})$/))||null!==(r=n.match(/^(\d{4})(\d{2})(\d{2})$/)))return t(Number(r[1]),Number(r[2]),Number(r[3]));if(null!==(r=n.match(/^(\d{2,4})년(\d{1,2})월(\d{1,2})일$/))){var o;return t((o=Number(r[1]))>=100?o:o+2e3,Number(r[2]),Number(r[3]))}return null})(i.currentValue);return null===u?i.currentValue:(r=String(u.month).padStart(2,"0"),o=String(u.day).padStart(2,"0"),"Y-M-D"===a?`${u.year}-${r}-${o}`:"Y/M/D"===a?`${u.year}/${r}/${o}`:"Y.M.D"===a?`${u.year}.${r}.${o}`:"YMD"===a?`${u.year}${r}${o}`:"KOR_YMD"===a?`${u.year}년 ${u.month}월 ${u.day}일`:`${u.month}월 ${u.day}일`)},l=new Map(I.map(e=>[`${e.page}:${e.fieldKey}`,e.value??""])),n=[];for(let t of M??[]){if(1!==t.page)continue;let r=`${t.page}:${t.fieldKey}`,o=l.get(r);if(void 0===o)continue;let a=i({currentValue:o,ocrValue:t.value}),u=e(a);if(e(t.value)===u)continue;let d=(t.boundingBoxes??[]).flatMap(e=>e.vertices).filter(e=>Number.isFinite(e.x)&&Number.isFinite(e.y));if(0===d.length)continue;let s=d.map(e=>e.x),_=d.map(e=>e.y),c=Math.min(...s),p=Math.max(...s),f=Math.min(..._),E=Math.max(..._);if(Number.isFinite(c)&&Number.isFinite(p)&&Number.isFinite(f)&&Number.isFinite(E)&&!(p<=c)&&!(E<=f)){if(1>=Math.max(p,E)){let e=Math.min(100*Math.max(c,0),100),i=Math.min(100*Math.max(f,0),100),l=Math.min((p-c)*100,100),r=Math.min((E-f)*100,100);if(l<=0||r<=0)continue;n.push({left:`${e}%`,top:`${i}%`,width:`${l}%`,height:`${r}%`,borderColor:"#2563eb",manualValue:t.value,digitalValue:a});continue}n.push({left:`${Math.max(c,0)}px`,top:`${Math.max(f,0)}px`,width:`${p-c}px`,height:`${E-f}px`,borderColor:"#2563eb",manualValue:t.value,digitalValue:a})}}return n})(),F=U.map(e=>({left:e.left,top:e.top,width:e.width,height:e.height,borderColor:e.borderColor})),j=`[수기 원본] 정보 불일치 ${F.length}건`,D="manual"===r&&null!==s&&s>=0&&s<U.length,K=D&&null!==s?U[s]??null:null,ee=null===K||""===K.manualValue.trim()?"-":K.manualValue,eg=null===K||""===K.digitalValue.trim()?"-":K.digitalValue,eb=async()=>{if(!c&&null!==b&&""!==b.trim()){p(!0);try{await m.saveDocumentFields({documentId:b,fields:[]}),e.push((0,d.buildDocumentFlowHref)({clientId:f,serviceType:g,monthlyScheduleSaved:O,page:"save-success",serviceWorkerId:E}))}finally{p(!1)}}};return(0,i.jsxs)(H,{children:[(0,i.jsx)(G,{children:(0,i.jsx)(z.default,{title:S,subtitle:j,onBack:()=>e.push((0,d.buildDocumentFlowDetailHref)({clientId:f,serviceType:g,serviceWorkerId:E}))})}),(0,i.jsxs)(Y,{role:"tablist","aria-label":"서류 비교 탭",children:[(0,i.jsx)(Z,{type:"button",role:"tab","aria-selected":"manual"===r,$active:"manual"===r,onClick:()=>{_(null),u("manual")},children:"수기 원본"}),O?null:(0,i.jsx)(Z,{type:"button",role:"tab","aria-selected":"digital"===r,$active:"digital"===r,onClick:()=>{_(null),u("digital")},children:"전산 서류"})]}),(0,i.jsx)(B,{children:O||"manual"===r?null===L?(0,i.jsx)(X,{children:"수기 원본 이미지를 찾을 수 없습니다."}):(0,i.jsx)(q,{children:(0,i.jsx)(J,{children:(0,i.jsx)(v,{imagePath:L,displayValueOnly:!0,readOnly:!0,showAssistUiComponents:!1,overlayBoxes:F,onOverlayBoxClick:e=>{_(e)}})})}):!0===N?(0,i.jsx)(X,{children:"전산 서류를 불러오는 중입니다."}):0===w.length?(0,i.jsx)(X,{children:"서류 배경 이미지를 찾을 수 없습니다."}):(0,i.jsx)(q,{children:w.map((e,t)=>(0,i.jsx)(J,{children:(0,i.jsx)(v,{imagePath:e,fields:I.filter(e=>e.page===t+1),displayValueOnly:!0,readOnly:!0,showAssistUiComponents:!1})},`digital-page-${t+1}`))})}),(0,i.jsx)(Q,{children:O?(0,i.jsxs)(el,{type:"button",disabled:c,onClick:()=>{eb()},children:[(0,i.jsx)(n.default,{sx:{fontSize:16}}),c?"저장중":"최종확인 및 저장"]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(et,{type:"button",onClick:()=>e.push((0,d.buildDocumentFlowHref)({clientId:f,serviceType:g,contractId:T,templateId:x??"",documentId:b,documentStatus:C,page:"capture",serviceWorkerId:E})),children:"다시 촬영하기"}),"manual"===r?(0,i.jsxs)(ei,{type:"button",onClick:()=>{_(null),u("digital")},children:["전산 서류 보기",(0,i.jsx)(l.default,{sx:{fontSize:16}})]}):(0,i.jsxs)(el,{type:"button",disabled:c,onClick:()=>{eb()},children:[(0,i.jsx)(n.default,{sx:{fontSize:16}}),c?"저장중":"최종확인 및 저장"]})]})}),D?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(en,{type:"button","aria-label":"불일치 패널 닫기",onClick:()=>{_(null)}}),(0,i.jsxs)(er,{children:[(0,i.jsxs)(eo,{children:[(0,i.jsx)(ea,{children:(0,i.jsx)(eu,{})}),(0,i.jsxs)(ed,{children:[(0,i.jsx)(es,{children:O?`${K?.day??"-"}일 제공 일정 비교`:"정보 불일치 항목 확인"}),O&&K?.reasons!==void 0&&K.reasons.length>0?(0,i.jsx)(e_,{children:K.reasons.join("\n")}):null,(0,i.jsxs)(ec,{children:[(0,i.jsxs)(ep,{children:[(0,i.jsx)(ef,{$variant:"manual",children:O?"수기 작성 서류":"수기서류 인식값"}),(0,i.jsx)(eE,{children:ee})]}),(0,i.jsxs)(ep,{children:[(0,i.jsx)(ef,{$variant:"digital",children:O?"실제 제공 내역":"전자 바우처 기준값"}),(0,i.jsx)(eE,{children:eg})]})]})]})]}),(0,i.jsx)(eh,{children:(0,i.jsxs)(em,{children:[(0,i.jsx)(eT,{type:"button",onClick:()=>{_(null)},children:"닫기"}),(0,i.jsxs)(ex,{type:"button",onClick:()=>{0!==U.length&&_(e=>((e??0)+1)%U.length)},children:["다음 리스트 보기",(0,i.jsx)(l.default,{sx:{fontSize:16}})]})]})})]})]}):null]})}),H=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-0"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,G=u.default.header.withConfig({componentId:"zh_mobile_web__sc-8c134b64-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,Y=u.default.section.withConfig({componentId:"zh_mobile_web__sc-8c134b64-2"})`
  position: relative;

  display: flex;

  width: 100%;
  height: 48px;
  border-bottom: 1px solid #d1d6de;

  background: #fff;
`,B=u.default.main.withConfig({componentId:"zh_mobile_web__sc-8c134b64-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  padding: 16px 24px;
`,X=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-4"})`
  margin: auto 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #6b7280;
  text-align: center;
`,q=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,J=u.default.section.withConfig({componentId:"zh_mobile_web__sc-8c134b64-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #d9d9d9;
`,Q=u.default.footer.withConfig({componentId:"zh_mobile_web__sc-8c134b64-7"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;

  margin-top: auto;
  padding: 24px 24px 48px;
`,Z=u.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-8"})`
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
`,ee=u.css`
  display: flex;
  flex: 1 0 0;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,et=(0,u.default)(_.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-8c134b64-9"})`
  ${ee}
`,ei=(0,u.default)(_.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-10"})`
  ${ee}
`,el=(0,u.default)(_.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-11"})`
  ${ee}
`,en=u.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-12"})`
  cursor: pointer;

  position: absolute;
  z-index: 20;
  inset: 0;

  border: 0;

  background: rgb(0 0 0 / 38%);
`,er=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-13"})`
  position: absolute;
  z-index: 30;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  border-radius: 16px 16px 0 0;

  background: #fff;
`,eo=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-14"})`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 10px 24px;
`,ea=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-15"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4px;
`,eu=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-16"})`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: #d1d6de;
`,ed=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,es=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-18"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #111827;
`,e_=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-19"})`
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #4a4f54;
`,ec=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-20"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ep=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-21"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,ef=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-22"})`
  margin: 0;

  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,eE=u.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-23"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #111827;
`,eh=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-24"})`
  padding: 24px 24px 48px;
  background: #fff;
`,em=u.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-25"})`
  display: flex;
  gap: 12px;
`,eg=u.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,eT=(0,u.default)(_.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-8c134b64-26"})`
  ${eg}
`,ex=(0,u.default)(_.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-27"})`
  ${eg}
`;e.s(["default",0,K],25431)}]);