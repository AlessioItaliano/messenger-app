"use strict";(self.webpackChunkmessenger_app=self.webpackChunkmessenger_app||[]).push([[53],{864:(e,n,t)=>{t.d(n,{A:()=>c});var r,o=t(528);const a=t(197).Ay.button(r||(r=(0,o.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 11px 21px;\n\n  cursor: pointer;\n\n  border-radius: 5px;\n  border: 1px solid black;\n  background: lightgrey;\n\n  color: black;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  &:focus,\n  &:hover,\n  &:active {\n    color: red;\n  }\n"])));var i=t(579);const c=e=>{let{func:n,name:t,type:r}=e;return(0,i.jsx)(a,{type:r,onClick:n,children:t})}},53:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(43);function o(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}u((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function i(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,a=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i}function u(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function s(e,n,t,r,s){for(var d=[],p=5;p<arguments.length;p++)d[p-5]=arguments[p];return o(this,void 0,void 0,(function(){var o,p,h,y,v,b;return a(this,(function(a){switch(a.label){case 0:a.trys.push([0,12,13,14]),o=i(d),p=o.next(),a.label=1;case 1:if(p.done)return[3,11];switch(typeof(h=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,l(e,n,h,t,r,s)];case 3:return a.sent(),[3,10];case 4:return[4,f(h)];case 5:return a.sent(),[3,10];case 6:return[4,h.apply(void 0,u([e,n,t,r,s],c(d),!1))];case 7:return a.sent(),[3,10];case 8:return[4,h];case 9:a.sent(),a.label=10;case 10:return p=o.next(),[3,1];case 11:return[3,14];case 12:return y=a.sent(),v={error:y},[3,14];case 13:try{p&&!p.done&&(b=o.return)&&b.call(o)}finally{if(v)throw v.error}return[7];case 14:return[2]}}))}))}function l(e,n,t,r,i,s){return o(this,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:return o=e.textContent||"",l=function(e,n){var t=c(n).slice(0);return u(u([],c(e),!1),[NaN],!1).findIndex((function(e,n){return t[n]!==e}))}(o,t),[4,d(e,u(u([],c(h(o,n,l)),!1),c(p(t,n,l)),!1),r,i,s)];case 1:return a.sent(),[2]}}))}))}function f(e){return o(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout(n,e)}))];case 1:return n.sent(),[2]}}))}))}function d(e,n,t,r,u){return o(this,void 0,void 0,(function(){var o,s,l,d,p,h,y,v,b,m,g,x,w;return a(this,(function(k){switch(k.label){case 0:if(o=n,u){for(s=0,l=1;l<n.length;l++)if(d=c([n[l-1],n[l]],2),p=d[0],(h=d[1]).length>p.length||""===h){s=l;break}o=n.slice(s,n.length)}k.label=1;case 1:k.trys.push([1,6,7,8]),y=i(function(e){var n,t,r,o,c,u,s;return a(this,(function(l){switch(l.label){case 0:n=function(e){return a(this,(function(n){switch(n.label){case 0:return[4,{op:function(n){return requestAnimationFrame((function(){return n.textContent=e}))},opCode:function(n){var t=n.textContent||"";return""===e||t.length>e.length?"DELETE":"WRITING"}}];case 1:return n.sent(),[2]}}))},l.label=1;case 1:l.trys.push([1,6,7,8]),t=i(e),r=t.next(),l.label=2;case 2:return r.done?[3,5]:(o=r.value,[5,n(o)]);case 3:l.sent(),l.label=4;case 4:return r=t.next(),[3,2];case 5:return[3,8];case 6:return c=l.sent(),u={error:c},[3,8];case 7:try{r&&!r.done&&(s=t.return)&&s.call(t)}finally{if(u)throw u.error}return[7];case 8:return[2]}}))}(o)),v=y.next(),k.label=2;case 2:return v.done?[3,5]:(b=v.value,m="WRITING"===b.opCode(e)?t+t*(Math.random()-.5):r+r*(Math.random()-.5),b.op(e),[4,f(m)]);case 3:k.sent(),k.label=4;case 4:return v=y.next(),[3,2];case 5:return[3,8];case 6:return g=k.sent(),x={error:g},[3,8];case 7:try{v&&!v.done&&(w=y.return)&&w.call(y)}finally{if(x)throw x.error}return[7];case 8:return[2]}}))}))}function p(e,n,t){var r,o;return void 0===t&&(t=0),a(this,(function(a){switch(a.label){case 0:r=n(e),o=r.length,a.label=1;case 1:return t<o?[4,r.slice(0,++t).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}function h(e,n,t){var r,o;return void 0===t&&(t=0),a(this,(function(a){switch(a.label){case 0:r=n(e),o=r.length,a.label=1;case 1:return o>t?[4,r.slice(0,--o).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var y,v=(0,r.memo)((0,r.forwardRef)((function(e,n){var t=e.sequence,o=e.repeat,a=e.className,i=e.speed,l=void 0===i?40:i,f=e.deletionSpeed,d=e.omitDeletionAnimation,p=void 0!==d&&d,h=e.preRenderFirstString,y=void 0!==h&&h,v=e.wrapper,b=void 0===v?"span":v,m=e.splitter,g=void 0===m?function(e){return u([],c(e),!1)}:m,x=e.cursor,w=void 0===x||x,k=e.style,S=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),j=S["aria-label"],E=S["aria-hidden"],A=S.role;f||(f=l);var C=new Array(2).fill(40);[l,f].forEach((function(e,n){switch(typeof e){case"number":C[n]=Math.abs(e-100);break;case"object":var t=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===t&&(C[n]=r)}}));var _,O,R,N,P,T,G=C[0],I=C[1],q=function(e,n){void 0===n&&(n=null);var t=(0,r.useRef)(n);return(0,r.useEffect)((function(){e&&("function"==typeof e?e(t.current):e.current=t.current)}),[e]),t}(n),D="index-module_type__E-SaG";_=a?"".concat(w?D+" ":"").concat(a):w?D:"",O=(0,r.useRef)((function(){var e,n=t;o===1/0?e=s:"number"==typeof o&&(n=Array(1+o).fill(t).flat());var r=e?u(u([],c(n),!1),[e],!1):u([],c(n),!1);return s.apply(void 0,u([q.current,g,G,I,p],c(r),!1)),function(){q.current}})),R=(0,r.useRef)(),N=(0,r.useRef)(!1),P=(0,r.useRef)(!1),T=c((0,r.useState)(0),2)[1],N.current&&(P.current=!0),(0,r.useEffect)((function(){return N.current||(R.current=O.current(),N.current=!0),T((function(e){return e+1})),function(){P.current&&R.current&&R.current()}}),[]);var M=b,F=y?t.find((function(e){return"string"==typeof e}))||"":null;return r.createElement(M,{"aria-hidden":E,"aria-label":j,role:A,style:k,className:_,children:j?r.createElement("span",{"aria-hidden":"true",ref:q,children:F}):F,ref:j?void 0:q})})),(function(e,n){return!0})),b=t(475),m=t(864),g=t(528);const x=t(197).Ay.div(y||(y=(0,g.A)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: #191970;\n  color: white;\n\n  font-size: 24px;\n\n  padding: 15px 75px;\n  width: 100%;\n  height: 100%;\n  // max-width: 767px;\n"])));var w=t(579);const k=()=>(0,w.jsxs)(x,{children:[(0,w.jsx)(v,{style:{whiteSpace:"pre-line",height:"57px",display:"block"},sequence:["Greetings from the friendly Casper Chat!\nHere, everyone finds their place and trustworthy friends.\nJoin us and feel the warmth of our hearts!"],speed:10,repeat:1/0}),(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{children:"Get started:"}),(0,w.jsx)(b.k2,{to:"/login",children:(0,w.jsx)(m.A,{name:"Log in"})})]})]})}}]);
//# sourceMappingURL=53.f22151d3.chunk.js.map