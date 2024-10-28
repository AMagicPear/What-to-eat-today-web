<<<<<<<< HEAD:dist/assets/status-tap-BgwSJV1m.js
import{a4 as r,a5 as i,a6 as c,a7 as d,a8 as l}from"./index-BqRaVnWC.js";/*!
========
import{a4 as r,a5 as i,a6 as c,a7 as d,a8 as l}from"./index-B55ykX1A.js";/*!
>>>>>>>> dbc87a8ff4ca7569d24c3fae62f103e8bcb4e34d:dist/assets/status-tap-CRoSBSUy.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",()=>{r(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(a=>c(t,a)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{m as startStatusTap};
