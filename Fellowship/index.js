(function(B,A,i,d,r,o,u){"use strict";const y=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(t){return typeof t=="object"&&!Array.isArray(t)};return[e,n(e[e.length-1])?e.pop():{}]},c=function(e,n){return n.all?r.findAll(e):r.find(e)},w=function(e){return c(e,{all:!0})},f={byProps:function(e){return function(n){return e.every(function(t){return n[t]!==void 0})}},byDisplayName:function(e,n){return n?function(t){return t?.displayName===e}:function(t){return t?.default?.displayName===e}},byTypeName:function(e,n){return n?function(t){return t?.type?.name===e}:function(t){return t?.default?.type?.name===e}},byName:function(e,n){return n?function(t){return t?.name===e}:function(t){return t?.default?.name===e}}};var D=Object.freeze({__proto__:null,filters:f,getByDisplayName:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const[s,a]=y(n);return c(f.byDisplayName(s[0],a.default),a)},getByName:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const[s,a]=y(n);return c(f.byName(s[0],a.default),a)},getByProps:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const[s,a]=y(n);return c(f.byProps(s),a)},getByTypeName:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];const[s,a]=y(n);return c(f.byTypeName(s[0],a.default),a)},getModule:c,getModules:w});const M=r.common.constants,C=r.common.clipboard,_=r.findByProps("registerAsset"),z=r.findByProps("recieveMessage","sendMessage"),R=r.findByProps("createBotMessage"),k=r.findByProps("BOT_AVATARS"),L=r.common.ReactNative.NativeModules,U=r.common.React,x=r.common.FluxDispatcher,F=r.findByProps("getItem"),$=r.common.toasts,j=r.findByProps("show","openLazy","close"),O=r.findByProps("getToken"),E=r.findByProps("getAPIBaseURL"),G=r.findByProps("watchKeys"),H=r.findByProps("getCurrentUser"),V=r.findByProps("getUser","fetchProfile"),K=r.common.navigation,q=r.common.NavigationNative,J=r.findByProps("theme"),Q=r.common.ReactNative.Linking,W=r.common.stylesheet,X={ThemeColorMap:o.semanticColors,Colors:o.rawColors},Y={Forms:d.Forms,General:d.General},Z=r.findByProps("Messages"),ee=r.findByProps("showUserProfile"),ne=r.findByProps("debounce","throttle"),te=r.findByName("Logger"),re=r.common.Flux,ae=r.findByProps("Svg"),se=r.findByName("getScreens",!1),oe=r.common.moment;var ie=Object.freeze({__proto__:null,Assets:_,AsyncUsers:V,Avatars:k,Clipboard:C,Clyde:R,ColorMap:X,Components:Y,Constants:M,Dialog:j,Dispatcher:x,Flux:re,Linking:Q,Locale:Z,Lodash:ne,Logger:te,Messages:z,Moment:oe,Native:L,Navigation:K,NavigationNative:q,Profiles:ee,REST:E,React:U,SVG:ae,Scenes:se,Settings:G,Storage:F,StyleSheet:W,Theme:J,Toasts:$,Token:O,Users:H});const l={};function p(e,n,t){l[e]||(l[e]={before:[],instead:[],after:[]}),l[e][n].push(t)}function m(e,n,t){var s=this;switch(e){case"before":return function(a){return n(s,a,t)};case"instead":return function(a,g){return n(s,a,g)};case"after":return function(a,g){return n(s,a,g)}}}const N=function(e,n,t,s,a){return p(e,"before",i.patcher.before(t,n,m("before",s,n?.[t]),a))},b=function(e,n,t,s,a){return p(e,"instead",i.patcher.instead(t,n,m("instead",s),a))},P=function(e,n,t,s,a){return p(e,"after",i.patcher.after(t,n,m("after",s),a))},h=function(e){return[...l[e].before,...l[e].instead,...l[e].after]},T=function(e){return h(e).forEach(function(n){return n()})};var ue=Object.freeze({__proto__:null,after:P,before:N,create:function(e){return{getPatchesByCaller:function(){return h(e)},before:N,instead:b,after:P,unpatchAll:T}},getPatchesByCaller:h,instead:b,unpatchAll:T});function I(e,n){return i.logger.warn(`Tried to call ${e}, not implemented!`),n}const{uuid4:ce}=r.findByProps("uuid4"),le=function(e){return u.lodash.memoize(e)},fe=function(e,n){return u.lodash.debounce(e,n)},ge=function(){return I("createStore",{})},de=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(s){return s},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return i.utils.findInTree(e,n,{walkable:["props","children"],...t})},ye=u.ReactNative.PixelRatio.getPixelSizeForLayoutSize;var pe=Object.freeze({__proto__:null,createStore:ge,debounce:fe,findInReactTree:de,findInTree:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(g){return g},{ignore:t=[],walkable:s=[],maxProperties:a=100}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return i.utils.findInTree(e,n,{ignore:t,walkable:s,maxDepth:a})},memoize:le,normalizeSize:ye,sleep:function(e){return new Promise(function(n){return setTimeout(n,e)})},uuid:ce,wrapInHooks:function(){return I("wrapInHooks",u.React.createElement(u.ReactNative.Text,{},"Stubbed wrapInHooks"))}});const{InfoDictionaryManager:v,BundleUpdaterManager:me,DCDDeviceManager:S}=u.ReactNative.NativeModules,he=v.Identifier,ve=me.reload,Be=v.Version,Ne=S.systemVersion,be=v.Build,Pe=S.device;var Te=Object.freeze({__proto__:null,build:be,bundle:he,device:Pe,os:Ne,reload:ve,version:Be});const Ie=o.assets.all,Se=o.assets.find,Ae=function(e){return o.assets.getAssetByName(e)},we=function(e){return o.assets.getAssetByID(e)},De=function(e){return o.assets.getAssetIDByName(e)},Me=new Proxy({},{get:function(e,n){return o.assets.getAssetIDByName(n)}});var Ce=Object.freeze({__proto__:null,Icons:Me,assets:Ie,find:Se,getByID:we,getByName:Ae,getIDByName:De});function _e(){return globalThis.enmity={modules:{...D,common:ie},patcher:ue,version:`Fellowship ${i.plugin.manifest.hash.slice(7)}`,utilities:pe,components:new Proxy({},{get:function(e,n){return d.General[n]??d.Forms[n]}}),native:Te,assets:Ce},function(){return delete globalThis.enmity}}A.storage.plugins??={};const ze=[_e()],Re=function(){return ze.forEach(function(e){return e()})};return B.onUnload=Re,B})({},vendetta.plugin,vendetta,vendetta.ui.components,vendetta.metro,vendetta.ui,vendetta.metro.common);
