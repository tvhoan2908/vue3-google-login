import{reactive as e,watch as t,defineComponent as i,useSlots as o,ref as n,onMounted as l,openBlock as a,createElementBlock as c,normalizeClass as d,unref as r,createCommentVNode as p,renderSlot as s}from"vue";var u=Object.freeze({__proto__:null});var g={library:"https://accounts.google.com/gsi/client",defaultButtonConfig:{theme:"outline",size:"large"},scopes:"email profile openid"};const f=e({clientId:null,popupType:"CODE",prompt:!1,autoLogin:!1,idConfiguration:null,buttonConfig:g.defaultButtonConfig,callback:()=>{},error:null}),b=e({apiLoaded:!1,apiLoadIntitited:!1}),m=e=>{try{const t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(Buffer.from(t,"base64").toString("ascii").split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(i)}catch(e){throw"JWT provided is invalid"}},I=new Promise((e=>{const t="undefined"!=typeof window;if(!b.apiLoadIntitited&&t){const t=document.createElement("script");b.apiLoadIntitited=!0,t.addEventListener("load",(()=>{b.apiLoaded=!0,e(window.google)})),t.src=g.library,t.async=!0,t.defer=!0,document.head.appendChild(t)}})),w=e=>{b.apiLoadIntitited?b.apiLoaded?e(window.google):t((()=>b.apiLoaded),(t=>{t&&e(window.google)})):I.then((t=>{e(t)}))},y=(e,t,i,o)=>{if(!e.client_id)throw new Error("Prop client id required since plugin is not initialized with a client id");w((()=>{((e,t,i,o,n)=>{if(n){const t=e.callback;e.callback=e=>{e.credential?t&&t(e):n(e)}}window.google.accounts.id.initialize(e);const l=t.value;l&&!o&&window.google.accounts.id.renderButton(l,i)})(e,t,i.buttonConfig,o,i.error),i.prompt&&C({clientId:i.clientId,callback:i.callback,error:i.error,autoLogin:i.autoLogin})}))},k=e=>new Promise(((t,i)=>{w((o=>{if(!(e&&e.clientId||f.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");o.accounts.oauth2.initCodeClient({client_id:e&&e.clientId||f.clientId||"",scope:g.scopes,ux_mode:"popup",callback:e=>{e.code?t(e):i(e)}}).requestCode()}))})),h=e=>new Promise(((t,i)=>{w((o=>{if(!(e&&e.clientId||f.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");o.accounts.oauth2.initTokenClient({client_id:e&&e.clientId||f.clientId||"",scope:g.scopes,callback:e=>{e.access_token?t(e):i(e)}}).requestAccessToken()}))})),C=e=>{if(!e&&(e={}),!e.clientId&&!f.clientId)throw new Error("clientId is required");const t={};return e.clientId&&(t.client_id=e.clientId),!e.clientId&&f.clientId&&(t.client_id=f.clientId),e.context&&(t.context=e.context),null!=e.autoLogin&&(t.auto_select=e.autoLogin),null!=e.cancelOnTapOutside&&(t.cancel_on_tap_outside=e.cancelOnTapOutside),new Promise(((i,o)=>{t.callback=t=>{e&&e.callback&&e.callback(t),t.credential?i(t):o(t)},w((i=>{i.accounts.id.initialize(t),i.accounts.id.prompt((t=>{e&&e.onNotification&&e.onNotification(t),(e=>{const t=e.notification;let i="";t.isNotDisplayed()&&(i="suppressed_by_user"===t.getNotDisplayedReason()?"Prompt was suppressed by user'. Refer https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown for more info":`Prompt was not displayed, reason for not displaying: ${t.getNotDisplayedReason()}`),t.isSkippedMoment()&&(i=`Prompt was skipped, reason for skipping: ${t.getSkippedReason()}`),i.length&&(e.error?e.error(i):e.reject(i))})({notification:t,reject:o,error:e&&e.error})}))}))}))},_=()=>{w((e=>{e.accounts.id.disableAutoSelect()}))};var L=i({__name:"GoogleLogin",props:{clientId:{type:String,required:!1},prompt:{type:Boolean,required:!1,default:!1},autoLogin:{type:Boolean,required:!1,default:!1},popupType:{type:String,required:!1,default:"CODE"},idConfiguration:{type:Object,required:!1},buttonConfig:{type:Object,required:!1},callback:{type:Function,required:!1},error:{type:Function,required:!1}},setup(e){const t=e,i=!!o().default,u=((e,t)=>{const i={...e};for(const e in t)void 0!==t[e]&&null!==t[e]&&(i[e]=t[e]);return i})(f,t),g={client_id:u.clientId||null,auto_select:u.autoLogin||!1,callback:u.callback,...u.idConfiguration},m=n();return l((()=>{y(g,m,u,i)})),(e,t)=>(a(),c("div",{class:d(["g-btn-wrapper",[!r(b).apiLoaded&&"api-loading"]]),onClick:t[0]||(t[0]=e=>r(i)&&void("TOKEN"===r(u).popupType?h({clientId:u.clientId}).then((e=>{u.callback&&u.callback(e)})):k({clientId:u.clientId}).then((e=>{u.callback&&u.callback(e)}))))},[r(i)?p("v-if",!0):(a(),c("span",{key:0,ref_key:"buttonRef",ref:m,class:"g-btn"},null,512)),s(e.$slots,"default")],2))}});!function(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}("\n.g-btn-wrapper.api-loading[data-v-5e610566] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n"),L.__scopeId="data-v-5e610566",L.__file="src/plugin/GoogleLogin.vue";var v={install:(e,t)=>{t&&(e=>{e.clientId&&(f.clientId=e.clientId),e.popupType&&(f.popupType=e.popupType),null!=e.prompt&&(f.prompt=e.prompt),null!=e.autoLogin&&(f.autoLogin=e.autoLogin),e.idConfiguration&&(f.idConfiguration=e.idConfiguration),e.buttonConfig&&(f.buttonConfig=e.buttonConfig),e.callback&&(f.callback=e.callback)})(t),I.then((()=>{if(t.clientId){const e={client_id:t.clientId,auto_select:!0===t.autoLogin,callback:t.callback,...t.idConfiguration};window.google.accounts.id.initialize(e),t.prompt&&window.google.accounts.id.prompt()}})),e.component("GoogleLogin",L)}};export{u as CallbackTypes,L as GoogleLogin,m as decodeCredential,v as default,k as googleAuthCodeLogin,_ as googleLogout,C as googleOneTap,w as googleSdkLoaded,h as googleTokenLogin};
