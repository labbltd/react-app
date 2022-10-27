!function(){"use strict";var e,t,n,o,r={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);a.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},a.d(r,i),r},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return e+".bundle.js"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="react-sdk:",a.l=function(e,t,r,i){if(n[e])n[e].push(t);else{var u,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",o+r),u.src=e),n[e]=[t];var f=function(t,o){u.onerror=u.onload=null,clearTimeout(p);var r=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var i=a.p+a.u(t),u=new Error;a.l(i,(function(n){if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,o[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var o,r,i=n[0],u=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);c&&c(a)}for(t&&t(n);s<i.length;s++)r=i[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunkreact_sdk=self.webpackChunkreact_sdk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),a.nc=void 0;var u=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((o=o.apply(e,t||[])).next())}))};function c(e,t){return u(this,void 0,void 0,(function*(){return new Promise((n=>{window.PCore.onPCoreReady((e=>u(this,void 0,void 0,(function*(){window.PCore.getDebugger().toggleXRay(!0);const t=(yield a.e(294).then(a.t.bind(a,7294,19))).default,o=(yield Promise.all([a.e(899),a.e(626),a.e(448)]).then(a.bind(a,5448))).default,r=(yield Promise.all([a.e(899),a.e(626)]).then(a.bind(a,5626))).default;window.PCore.registerComponentCreator(((e,n={})=>{const o=r();return t.createElement(o,Object.assign({},Object.assign(Object.assign(Object.assign(Object.assign({},e),e.getPConnect().getConfigProps()),e.getPConnect().getActions()),{additionalProps:n})))})),console.log("PCore ready!"),PCore.getPCoreVersion().includes("8.7")?console.log(`sdkVersion: 8.7 matches PCore version: ${PCore.getPCoreVersion()}`):console.error(`sdkVersion: 8.7 does NOT match PCore version: ${PCore.getPCoreVersion()}`),o(e),n(e.props.getPConnect())}))));const o=document.createElement("div");o.id="pega-root",t.prepend(o),"mashup"===e?window.loadMashup("pega-root",!1):window.loadPortal("pega-root","WebPortal")}))}))}window.pega={initPega:function(e,t){return u(this,void 0,void 0,(function*(){const t=yield(yield fetch(e.authConfig.jwtUri)).text(),n=yield(yield fetch(`${e.authConfig.tokenUri}?token=${t}`)).json(),o=yield import(`${e.serverConfig.sdkContentServerUrl}bootstrap-shell.js`);window.loadView=o.loadView,window.loadPortal=o.loadPortal,window.loadComponent=o.loadComponent,window.loadMashup=o.loadMashup,window.loadViewByName=o.loadViewByName,window.loadCase=o.loadCase,window.createCase=o.createCase,window.loadAssignment=o.loadAssignment;try{const t={authInfo:{tokenInfo:{token_type:"Bearer",access_token:n.access_token}},restServerUrl:e.serverConfig.infinityRestServerUrl,staticContentServerUrl:e.serverConfig.sdkContentServerUrl,dynamicLoadComponents:!1,dynamicSetCookie:!1,renderingMode:"EMBED",customRendering:null==e.serverConfig.customRendering||e.serverConfig.customRendering};try{yield o.bootstrapWithAuthHeader(t),console.log("Bootstrap successful!")}catch(e){console.error(e)}}catch(e){console.error(`Constellation JS Engine bootstrap failed. ${e}`)}}))},initMashup:function(e){return u(this,void 0,void 0,(function*(){window.PConn=yield c("mashup",e)}))},initPortal:function(e){return u(this,void 0,void 0,(function*(){window.PConn=yield c("portal",e)}))},getNotificationCount:function(e){return u(this,void 0,void 0,(function*(){return(yield window.PCore.getDataApiUtils().getListCount(null==e?"D_pyMyWorkList":e,{})).data.resultCount}))},showPage:function(e,t){return u(this,void 0,void 0,(function*(){return window.PCore.getMashupApi().openPage(e,t,"root")}))},startCase:function(e,t){return u(this,void 0,void 0,(function*(){return yield window.PCore.getMashupApi().createCase(e,"root",{pageName:"pyEmbedAssignment",startingFields:t})}))},continueCase:function(e){return u(this,void 0,void 0,(function*(){return window.PCore.getMashupApi().openAssignment(e,"root")}))},getBuildTime:function(){return"2022-10-27T18:16:12.789Z"}}}();