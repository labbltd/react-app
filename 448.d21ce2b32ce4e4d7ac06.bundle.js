"use strict";(self.webpackChunkreact_sdk=self.webpackChunkreact_sdk||[]).push([[448],{1248:function(n,e,t){var r=t(3645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,"/* CSS Variables used in SDK components */\n:root {\n  --app-white: rgb(246, 246, 246);\n  --app-white-check: rgb(243, 247, 249);\n  --app-whiter: rgb(233, 238, 241);\n  --app-disabled-base: rgb(179, 192, 202);\n  --app-base: rgb(221, 230, 237);\n  --app-dark: rgb(118, 141, 160);\n  --app-darker: rgb(51, 73, 90);\n  --app-darkest: rgb(4, 46, 71);\n\n  --app-success: rgb(229, 249, 231);\n  --app-success-dark: rgb(67, 191, 104);\n  --app-error: rgb(251, 232, 232);\n  --app-error-dark: rgb(253, 94, 88);\n\n  /* Some standard values for typography */\n  --font-weight-bold: 700;\n  --font-weight-semibold: 600;\n  --font-weight-normal: 400;\n}\n",""]),e.Z=a},4020:function(n,e,t){var r=t(3645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,'.MuiPaper-root.MuiDialog-paper {\n  color: var(--app-darker);\n  background-color: var(--app-white);\n}\n\n#pega-root {\n  line-height: normal;\n}\n\ninput[type="text"],\ninput[type="email"],\ninput[type="date"],\ninput[type="datetime-local"],\ninput[type="time"],\ninput[type="number"],\nselect,\ntextarea {\n  background-color: var(--app-base);\n  padding: 13px;\n  padding-top: 14px;\n  width: 100%;\n  border: 0;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  outline: none;\n  font-family: inherit;\n  font-size: 12px;\n}\ninput[type="text"],\ninput[type="email"],\ninput[type="date"],\ninput[type="datetime-local"],\ninput[type="time"],\ninput[type="number"],\nselect {\n  max-height: 40px;\n}\ntextarea {\n  resize: vertical;\n}\n\ninput:focus, select:focus, textarea:focus {\n  outline: max(2px, 0.15em) solid var(--app-dark);\n  outline-offset: max(2px, 0.15em);\n}\n\ninput::placeholder {\n  color: var(--app-dark);\n}\n\ninput:disabled, select:disabled, textarea:disabled {\n  background-color: var(--app-white);\n  color: var(--app-darker);\n  opacity: 1;\n  cursor: not-allowed;\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n}\n\n.input-label {\n  position: relative;\n  display: block;\n}\n.required::after {\n  display: inline;\n  content: " *";\n  vertical-align: top;\n  color: var(--app-error-dark);\n}\n.required-before::before {\n  display: inline;\n  content: " *";\n  vertical-align: top;\n  color: var(--app-error-dark);\n}\n.input-label.invalid input,\n.input-label.invalid select {\n  outline: max(2px, 0.15em) solid var(--app-error-dark);\n  background-color: var(--app-error);\n}\n.input-label.invalid .helperText {\n  color: var(--app-error-dark);\n}\n\n.input-icon {\n  position: absolute;\n  right: 15px;\n  top: 35px;\n  pointer-events: none;\n}\n\n.has-currency .currency-symbol {\n  position: absolute;\n  left: 10px;\n  top: 35px;\n}\n\n.has-currency input {\n  padding-left: 25px;\n}\n.has-currency.no-symbol input {\n  padding-left: 50px;\n}\n\n.button {\n  border-radius: 0;\n  border-width: 2px;\n  border-style: solid;\n  font-family: inherit;\n  padding: 10px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.button.primary {\n  background-color: var(--app-darkest);\n  border-color: var(--app-darkest);\n  color: var(--app-white);\n}\n\n.button.secondary {\n  background-color: var(--app-white);\n  border-color: var(--app-base);\n  color: var(--app-darkest);\n}\n\ninput:-internal-autofill-previewed,input:-internal-autofill-selected {\n  background-color: var(--app-base) !important;\n}\n\n.MuiTypography-root.MuiTypography-h2 {\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.MuiTypography-root.MuiTypography-h3 {\n  font-size: 0.9rem;\n  margin-bottom: 10px;\n}\n\n.psdk-default-form-two-column > div {\n  grid-column: 1/3;\n}\n\n.psdk-default-form-three-column > div {\n  grid-column: 1/4;\n}\n\n.input-label .sr-hidden, td label.input-label span, td legend {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1;\n  margin: -1;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  top: 20;\n  width: 1;\n}\n',""]),e.Z=a},5448:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(7294),a=t(3935),o=t(4619),p=t(5756),i=t(8463),l=t(9912),s=t(3379),d=t.n(s),u=t(1248),c=(d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,t(4020));function b(n,e){const{props:t,domContainerID:s=null,componentName:d,portalTarget:u,styleSheetTarget:c}=n;let b=null;s?b=document.getElementById(s):u?b=u:e&&(b=document.getElementById(e));const g=n=>{const[e,t]=(0,r.useState)(!0);if(window.pega.errorLoading)return r.createElement(i.Z,null,r.createElement(l.Z,null,"Failed to establish a connection with the pega server. Please try again later."));if(window.PCore.getPubSubUtils().subscribe(window.PCore.getConstants().PUB_SUB_EVENTS.EVENT_FULL_REAUTH,(()=>t(!1)),"authFullReauth"),window.PCore.getPubSubUtils().subscribe(window.PCore.getConstants().PUB_SUB_EVENTS.EVENT_REAUTH,(()=>t(!1)),"auth"),e){const e=(0,o.default)(),t=r.createElement(e,Object.assign({},n));return r.createElement(p.Z.Provider,{value:{store:window.PCore.getStore(),displayOnlyFA:!0,isMashup:!0}},t)}return r.createElement(i.Z,null,r.createElement(l.Z,null,"The session with the pega server has been lost. Please refresh the page or log in again."))};d&&(g.displayName=d);const h=r.createElement(g,Object.assign({},t,{displayOnlyFA:!1,portalTarget:u,styleSheetTarget:c}));(0,a.render)(r.createElement(r.Fragment,null,h),b)}d()(c.Z,{insert:"head",singleton:!1}),c.Z.locals}}]);