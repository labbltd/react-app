"use strict";(self.webpackChunkreact_sdk=self.webpackChunkreact_sdk||[]).push([[448],{1248:function(n,t,e){var a=e(3645),o=e.n(a)()((function(n){return n[1]}));o.push([n.id,"/* CSS Variables used in SDK components */\n:root {\n  --app-white: rgb(246, 246, 246);\n  --app-white-check: rgb(243, 247, 249);\n  --app-whiter: rgb(233, 238, 241);\n  --app-disabled-white: rgb(179, 192, 202);\n  --app-base: rgb(221, 230, 237);\n  --app-dark: rgb(118, 141, 160);\n  --app-darker: rgb(51, 73, 90);\n  --app-darkest: rgb(4, 46, 71);\n\n  --app-success: rgb(229, 249, 231);\n  --app-success-dark: rgb(67, 191, 104);\n  --app-error: rgb(251, 232, 232);\n  --app-error-dark: rgb(253, 94, 88);\n\n  /* Some standard values for typography */\n  --font-weight-bold: 700;\n  --font-weight-semibold: 600;\n  --font-weight-normal: 400;\n}\n",""]),t.Z=o},4020:function(n,t,e){var a=e(3645),o=e.n(a),r=e(1667),i=e.n(r),l=e(933),f=e(378),p=e(8123),d=e(3495),c=e(8716),s=e(2154),u=e(8633),h=e(7773),g=o()((function(n){return n[1]})),U=i()(l.Z),m=i()(f.Z),v=i()(p.Z),y=i()(d.Z),b=i()(c.Z),F=i()(s.Z),w=i()(u.Z),k=i()(h.Z);g.push([n.id,'@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 200;\n  font-weight: var(--font-weight-ultralight);\n  src: local("Gilroy UltraLight"), url('+U+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 300;\n  font-weight: var(--font-weight-light);\n  src: local("Gilroy Light"), url('+m+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 400;\n  font-weight: var(--font-weight-default);\n  src: local("Gilroy Regular"), url('+v+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 500;\n  font-weight: var(--font-weight-medium);\n  src: local("Gilroy Medium"), url('+y+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 600;\n  font-weight: var(--font-weight-semibold);\n  src: local("Gilroy SemiBold"), url('+b+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 700;\n  font-weight: var(--font-weight-bold);\n  src: local("Gilroy Bold"), url('+F+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 800;\n  font-weight: var(--font-weight-extrabold);\n  src: local("Gilroy ExtraBold"), url('+w+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n@font-face {\n  font-family: "Gilroy";\n  font-display: swap;\n  font-display: var(--font-display-default);\n  font-stretch: normal;\n  font-stretch: var(--font-stretch-default);\n  font-style: normal;\n  font-variant: normal;\n  font-variant: var(--font-variant-default);\n  font-weight: 900;\n  font-weight: var(--font-weight-heavy);\n  src: local("Gilroy Heavy"), url('+k+') format("opentype");\n  unicode-range: "U+0020-007D,  U+007F-00FF,  U+0131,  U+0152-0153,  U+02C6,  U+02DA,  U+02DC,  U+2000-206F,  U+2074,  U+20AC,  U+2212,  U+2215,  U+E0FF,  U+EFFD,  U+F000";\n  unicode-range: var(--unicode-range-default);\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    font-family: "Gilroy",  sans-serif;\n    color: var(--app-darker);\n    background-color: var(--app-white);\n    font-weight: 300;\n}\n\n\n.MuiPaper-root.MuiDialog-paper {\n  color: var(--app-darker);\n  background-color: var(--app-white);\n}\n\ninput[type="text"],\ninput[type="email"],\ninput[type="date"],\ninput[type="number"],\nselect,\ntextarea {\n  background-color: var(--app-base);\n  padding: 13px;\n  width: 100%;\n  border: 0;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  outline: none;\n  font-family: inherit;\n  font-size: 12px;\n}\ninput[type="text"],\ninput[type="email"],\ninput[type="date"],\ninput[type="number"],\nselect {\n  max-height: 40px;\n}\ntextarea {\n  resize: vertical;\n}\n\ninput:focus, select:focus {\n  outline: max(2px, 0.15em) solid var(--app-dark);\n  outline-offset: max(2px, 0.15em);\n}\n\ninput::placeholder {\n  color: var(--app-dark);\n}\n\ninput:disabled, input:read-only, \nselect:disabled, select:read-only,\ntextarea:disabled, textarea:read-only {\n  background-color: var(--app-whiter);\n  color: var(--app-disabled-white);\n  cursor: not-allowed;\n}\n\nselect {\n  appearance: none;\n  cursor: pointer;\n}\n\n.input-label {\n  position: relative;\n}\n.input-label.required span:first-of-type::after {\n  display: inline;\n  content: " *";\n  vertical-align: top;\n  color: var(--app-error-dark);\n}\n.input-label.invalid input,\n.input-label.invalid select {\n  outline: max(2px, 0.15em) solid var(--app-error-dark);\n  background-color: var(--app-error);\n}\n.input-label.invalid .helperText {\n  color: var(--app-error-dark);\n}\n\n.input-icon {\n  position: absolute;\n  right: 15px;\n  top: 35px;\n  pointer-events: none;\n}\n\n.checkbox {\n  font-family: system-ui, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 1.1;\n  display: grid;\n  grid-template-columns: 1em auto;\n  gap: 0.5em;\n}\n\n.checkbox + .checkbox {\n  margin-top: 1em;\n}\n\n.checkbox--disabled {\n  color: var(--app-whiter);\n  cursor: not-allowed;\n}\n\ninput[type="checkbox"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  /* Remove most all native input styles */\n  appearance: none;\n  /* For iOS < 15 */\n  background-color: var(--app-white-check);\n  /* Not removed via appearance */\n  margin: 0;\n\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type="checkbox"]::before {\n  content: "";\n  width: 0.65em;\n  height: 0.65em;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n  transform: scale(0);\n  transform-origin: bottom left;\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--app-dark);\n  /* Windows High Contrast Mode */\n  background-color: CanvasText;\n}\n\ninput[type="checkbox"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type="checkbox"]:disabled {\n  color: var(--app-whiter);\n  cursor: not-allowed;\n}\n\n.button {\n  border-radius: 0;\n  border-width: 2px;\n  border-style: solid;\n  font-family: inherit;\n  padding: 10px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.button.primary {\n  background-color: var(--app-darkest);\n  border-color: var(--app-darkest);\n  color: var(--app-white);\n}\n\n.button.secondary {\n  background-color: var(--app-white);\n  border-color: var(--app-base);\n  color: var(--app-darkest);\n}\n\ninput:-internal-autofill-previewed,input:-internal-autofill-selected {\n  background-color: var(--app-base) !important;\n}\n\nform { \n  padding: 20px;\n}\n',""]),t.Z=g},1667:function(n){n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},2154:function(n,t,e){t.Z=e.p+"a64a9abefbbe02db74efd2eed91e335c.otf"},8633:function(n,t,e){t.Z=e.p+"0094146a0505298ed06a0ef3af075f2e.otf"},7773:function(n,t,e){t.Z=e.p+"401eb83230d5d306f6715f6056fd3a14.otf"},378:function(n,t,e){t.Z=e.p+"cc7ab55d27205bd640016b19810e50c7.otf"},3495:function(n,t,e){t.Z=e.p+"9f1092d036076c58004147643fcedf04.otf"},8123:function(n,t,e){t.Z=e.p+"86bc2a5a8350170447c9ab13f76f8be0.otf"},8716:function(n,t,e){t.Z=e.p+"017ff10cc8aae083265027dfa41e229a.otf"},933:function(n,t,e){t.Z=e.p+"f740ead48e00dc85a7437abade99a01c.otf"},5448:function(n,t,e){e.r(t),e.d(t,{default:function(){return c}});var a=e(7294),o=e(3935),r=e(8429),i=e(5756),l=e(3379),f=e.n(l),p=e(1248),d=(f()(p.Z,{insert:"head",singleton:!1}),p.Z.locals,e(4020));function c(n,t){const{props:e,domContainerID:l=null,componentName:f,portalTarget:p,styleSheetTarget:d}=n;let c=null;l?c=document.getElementById(l):p?c=p:t&&(c=document.getElementById(t));const s=n=>{const t=(0,r.default)(),e=a.createElement(t,Object.assign({},n));return a.createElement(i.Z.Provider,{value:{store:window.PCore.getStore(),displayOnlyFA:!0,isMashup:!0}},e)};f&&(s.displayName=f);const u=a.createElement(s,Object.assign({},e,{displayOnlyFA:!1,portalTarget:p,styleSheetTarget:d}));(0,o.render)(a.createElement(a.Fragment,null,u),c)}f()(d.Z,{insert:"head",singleton:!1}),d.Z.locals}}]);