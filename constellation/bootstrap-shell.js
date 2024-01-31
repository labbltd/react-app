const rootContainerWithHybrid={type:"RootContainer",config:{renderingMode:"hybrid"},children:[{type:"HybridViewContainer",config:{routingInfo:"@ROUTING_INFO",name:"primary",contextName:"app"},children:[]}]},buildSemanticUrl=(e,o,t,n,i)=>{const a=new URLSearchParams(o);let r=!1;"true"===t&&(r=!0);let s=null,l=null;if(e){e.startsWith("/")&&(e=e.substring(1));const o=e.split("/");o.length>0&&o[0]&&(s=o[0]),o.length>1&&o[1]&&(l=o[1])}else r=!1;let c=n;s&&(c=`${c}/${s}`),l&&(c=`${c}/${l}`),r&&(!a.has("noPortal")&&a.append("noPortal",!0),l&&i&&a.append("view",i));const p=a.toString();return c+=p?`?${p}`:"",c};let containerCount=0;const loadView=(e,o,t=[],n,i,a,r)=>{const s=("hybrid"===r?"hybrid_"+ ++containerCount:r)||"mashup"+ ++containerCount,l={type:"RootContainer",config:{renderingMode:"portal",viewConfig:"@P .viewConfig",name:s}};window.PCore.getRuntimeParamsAPI().setRuntimeParams(n),constellationCore.loadRootComponent(e,l,t,i,a).then((()=>constellationCore.updateStoreWithUiRoot(o,s)))},loadPortal=(e,o,t=[],n)=>{const i=n||"portal"+ ++containerCount,a={type:"RootContainer",config:{viewConfig:"@P .viewConfig",renderingMode:"portal",skeleton:"LoadingComponent",name:i}};t.push(a.config.skeleton),PCore.getEnvironmentInfo().isPortalLoaded=!0,constellationCore.loadRootComponent(e,a,t).then((()=>constellationCore.loadPortalView(o,i)))},loadComponent=(e,o,t)=>constellationCore.loadComponent(o,e,t),loadViewByName=(e,o,t,n,i,a,r,s)=>{const l=s||"mashup"+ ++containerCount,c={type:"RootContainer",config:{viewConfig:"@P .viewConfig",renderingMode:"view",name:l}};constellationCore.loadRootComponent(e,c,i,a,r).then((()=>constellationCore.loadViewByName(o,t,n,l)))},loadMashup=(e,o=!0)=>{if(o){const o=document.getElementsByTagName(e)[0]&&document.getElementsByTagName(e)[0].parentNode;if(o){const e=document.createElement("style");e.setAttribute("id","portal-less-styles"),e.innerHTML="app-root.mashup > .case-view, app-root.mashup > .page-view { min-height: 0px !important; }",o.appendChild(e)}}constellationCore.loadRootComponent(e,{type:"RootContainer",config:{renderingMode:"noPortal"},children:[{type:"ViewContainer",config:{routingInfo:"@ROUTING_INFO",name:"primary"}}]},["View","ViewContainer"]),window.parent!==window&&import(`${constellationCore.PCoreInstance.getAssetLoader().getStaticServerUrl()}constellation-mashup-bridge.js`).then((e=>{e.mashup.init({resizing:"stretch"})}))},loadCase=(e,o,t=[],n,i)=>{t.push("HybridViewContainer","View"),constellationCore.loadRootComponent(e,rootContainerWithHybrid,t,n,i).then((()=>constellationCore.getCaseApi().openCase(o,"app","primary")))},createCase=(e,o,t=[],n,i)=>{t.push("HybridViewContainer","View"),constellationCore.loadRootComponent(e,rootContainerWithHybrid,t,n,i).then((()=>constellationCore.getCaseApi().createCase(o,"app","primary")))},loadAssignment=(e,o,t=[],n,i)=>{t.push("HybridViewContainer","View"),constellationCore.loadRootComponent(e,rootContainerWithHybrid,t,n,i).then((()=>constellationCore.getCaseApi().openAssignment(o,"app","primary")))},initCoreConfig=e=>{const{routingInfo:o,actionModel:t,serviceConfig:n,additionalHeaders:i,tokens:a,semanticUrl:r,queryParams:s,noPortal:l,timezone:c,noHistory:p,viewName:C,theme:d,fieldDefaults:m,restServerConfig:g,dynamicLoadComponents:u=!0,dynamicSemanticUrl:h=!0,enableRouting:f=!0,locale:w,environmentInfo:y,renderingMode:v="FULL_PORTAL",remoteCaseMapping:P={}}=e,{appAlias:S,googleMapKey:R,staticContentServer:b,appStaticContentServer:$=null,contextPath:A,messagingService:I=null}=n,U={...y,renderingMode:v};let L=location.origin;const M={};if(void 0!==g&&(L=g),A&&(L=`${L}${A}`),S&&(L=`${L}/${S}`),!0===h){const e=buildSemanticUrl(r,s,l,L,C);!p&&e&&history.pushState({},"home",e)}else if("HYBRID"!==v){let e=window.location.href;e.indexOf("?")>0&&(e=e.substring(0,e.indexOf("?")),history.pushState({},"home",e)),M.dynamicSemanticUrl=!1}!0!==u&&(M.dynamicLoadComponents=!1);let N=null;if(S){const e=S.indexOf("/app/");N=e>=0?S.substring(e+1):S}if(constellationCore.enableAppRouting(f),Object.keys(M).length>0&&PCore.setBehaviorOverrides(M),constellationCore.initStore(),d){let e="object"==typeof d?d:null;if(null===e)try{e=JSON.parse(d)}catch{e={}}PCore.getEnvironmentInfo().setTheme(e)}constellationCore.setFieldsDefaultConfigs(m),constellationCore.setFetchDefaultHeaders(i);const E={...o,domain:`${window.location.protocol}//${window.location.host}`,searchParams:window.location.search};constellationCore.initAppShell(E,t,{server:L}),constellationCore.setAppAlias(N),constellationCore.setGoogleMapsAPIKey(R),constellationCore.setStaticServerUrl(b,$,a.C11NB2S),constellationCore.PCoreInstance.getLocaleUtils().setTimezone(c),PCore.getRemoteCaseUtils().setRemoteCaseMapping(P),PCore.getEnvironmentInfo().setEnvironmentInfo(U),PCore.getEnvironmentInfo().setLocale(w),PCore.getMessagingServiceManager().setConnectionConfig({messagingService:I}),PCore.getNavigationUtils().init()},importConstellationCore=async(e,o)=>{const{isDevServerMode:t,isSdk:n}=o,{prerequisite:i}=o;if(i&&i.length>0){const o=i[0];let a;const r=Object.keys(o)[0];if(t){const e=Object.values(o)[0];a=e.endsWith("/")?`${e}prerequisite/${r}`:`${e}/prerequisite/${r}`}else a=e.endsWith("/")?`${e}prerequisite/${r}`:`${e}/prerequisite/${r}`;return n&&(a=`${e.endsWith("/")?e.slice(0,-1):e}/prerequisite/${r.startsWith("/")?r.slice(1):r}`),import(a).then((o=>{window.constellationCore=o,constellationCore.setStaticServerUrl(e,"no-appstatic"),void 0!==window.constellationCore.PCoreInstance&&(window.PCore=window.constellationCore.PCoreInstance);for(let o=1;o<i.length;o+=1){const n=i[o],a=Object.keys(n)[0];if(t){const e=Object.values(n)[0];import(`${e}prerequisite/${a}`).then((e=>{console.log(e)}))}else import(`${e}prerequisite/${a}`).then((e=>{console.log(e)}))}}))}return null},importExternals=async e=>{const{isDevServerMode:o}=e,t=constellationCore.PCoreInstance,n=t.getEnvironmentInfo().getLocale();if("en-US"!==n)try{const e=t.getLocaleUtils().GENERIC_BUNDLE_KEY,o=await t.getAssetLoader().getSvcLocale(n,`${e}.json`);if(o.ok){const n=await o.json();t.getLocaleUtils().setLocaleForRule(n,e)}}catch(e){console.warn(e)}await t.getAssetLoader().loadAssets(e.externals,{isDevServerMode:o}),await t.getAssetLoader().loadAssets(e.entry,{isDevServerMode:o})},importAssetsJson=async e=>{const o=(new Date).getTime();return fetch(`${e}lib_asset.json?v=${o}`).then((e=>e.json()))},importReactRoot=async()=>{const e=[];return PCore.getComponentsRegistry().getComponent("ReactRoot").modules.forEach((o=>{e.push(o())})),Promise.allSettled(e)},bootstrap=async(e,o)=>new Promise((async(t,n)=>{try{const{staticContentServer:n}=e.serviceConfig,i=await importAssetsJson(n);await importConstellationCore(n,i),initCoreConfig(e);const a=async()=>{await importReactRoot(),o&&o(),t(!0)};PCore.getPubSubUtils().subscribe("component-map-loaded",a),await importExternals(i),"ReactRoot"in PCore.getComponentsRegistry().getLazyMap()&&t(!0)}catch(e){n(e)}})),getBootstrapConfig=async(e,o)=>fetch(`${e}/api/applicationCustom/v2/data_views/D_pxBootstrapConfig`,{method:"GET",headers:new Headers({Authorization:o})}).then((e=>{if(e.ok)return e.json();throw new Error("")})).then((e=>({...e,pyConfigJSON:e.pyConfigJSON.replaceAll("/application/","/applicationCustom/")}))),loadRootContainer=(e,o=[],t,n)=>(o.push("HybridViewContainer","View"),constellationCore.loadRootComponent(e,rootContainerWithHybrid,o,t,n)),bootstrapWithAuthHeader=async(e,o,t=[],n,i)=>{const{restServerUrl:a,customRendering:r=!1,onPCoreReadyCallback:s,staticContentServerUrl:l,dynamicSetCookie:c=!1,authInfo:p={},theme:C={},renderingMode:d,locale:m}=e;let g,{authorizationHeader:u,appAlias:h}=e;if(u&&0===Object.keys(p).length&&(p.authType="custom"),!u&&p.tokenInfo){const{tokenInfo:e}=p;u=`${e.token_type} ${e.access_token}`}h?(h=-1!==h.indexOf("/")?h:`app/${h}`,g=await getBootstrapConfig(`${a}/${h}`,u)):g=await getBootstrapConfig(`${a}`,u);const f=JSON.parse(g.pyConfigJSON);f.restServerConfig=a,f.dynamicSemanticUrl=!1,f.dynamicSetCookie=c,f.enableRouting=!1,f.serviceConfig.contextPath="",f.serviceConfig.appAlias=h,f.additionalHeaders={Authorization:u},f.dynamicLoadComponents=!r,f.dynamicSemanticUrl=!r,f.noHistory=!0,f.theme=C??{},f.renderingMode=d??f.renderingMode,f.locale=m||f.locale;const w=l||f.serviceConfig.staticContentServer,y=await importAssetsJson(w);if(y.isSdk?await importConstellationCore(l,y):(f.serviceConfig.staticContentServer=w,await importConstellationCore(w,y)),initCoreConfig(f),s&&window.PCore.onPCoreReady(s),p&&["OAuth2.0","custom"].includes(p?.authType)&&constellationCore.setFetchAuthInfo(p),y.isSdk&&r&&await importExternals(y),!r){const e=new Promise((async(e,o)=>{try{const o=async()=>{await importReactRoot(),e(!0)};PCore.getPubSubUtils().subscribe("component-map-loaded",o),await importExternals(y),"ReactRoot"in PCore.getComponentsRegistry().getLazyMap()&&e(!0)}catch(e){o(e)}}));await e,await loadRootContainer(o,t,n,i)}},initConstellationCore=async e=>{const o=await importAssetsJson(e);await importConstellationCore(e,o)},loadDefaultPortal=(e,o=[],t)=>{const n=PCore.getEnvironmentInfo().getDefaultPortal();loadPortal(e,n,o,t)},isNewUnifiedBuild=()=>!1,updateLocale=e=>{PCore.getEnvironmentInfo().setLocale(e)};export{bootstrap,loadView,loadPortal,loadDefaultPortal,loadComponent,loadMashup,loadViewByName,loadCase,createCase,loadAssignment,bootstrapWithAuthHeader,initConstellationCore,isNewUnifiedBuild,updateLocale};