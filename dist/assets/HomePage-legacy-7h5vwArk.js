System.register(["./index-legacy-DAd-HFOP.js","./foodConstructor-legacy-BO6gyUdL.js"],(function(e,t){"use strict";var n,a,l,o,u,s,c,i,r,d,g,v,f,m,w,h,p,_,y,b,x,k,C,j,D;return{setters:[e=>{n=e.r,a=e.c,l=e.t,o=e._,u=e.d,s=e.o,c=e.a,i=e.w,r=e.u,d=e.b,g=e.e,v=e.I,f=e.f,m=e.g,w=e.h,h=e.i,p=e.j,_=e.k,y=e.l,b=e.m,x=e.n,k=e.p,C=e.q},e=>{j=e.s,D=e.F}],execute:function(){var F=document.createElement("style");F.textContent="ion-note[data-v-2e6c47cf]{display:block}ion-button[data-v-2e6c47cf]{margin:18px 0}\n",document.head.appendChild(F);const L=n(new Date),{foodList:N,loadFoods:I,saveFoods:S}=D(),{saveLog:E}=(()=>{const e=n([]);return(async()=>{const t=await j.get("log");e.value=t?t.map((e=>({...e,time:new Date(e.time)}))):[],console.log("已读取记录"),console.log(e.value)})(),{saveLog:async t=>{const n={time:L.value,name:t};e.value.push(n),await j.set("log",JSON.parse(JSON.stringify(e.value))),console.log("成功保存记录")}}})(),H=a((()=>{const e=L.value.getHours();return e>=6&&e<9?"早":e>=9&&e<11?"早中":e>=11&&e<14?"午":"晚"})),J=async()=>{const e=await(async()=>{await I();const{isCheckBoxDisabled:e,checkedList:n}=await o((()=>t.import("./EditFood-legacy-D4U-sGeH.js")),void 0);return(e.value?N.value:N.value.filter(((e,t)=>n.value[t]))).map((e=>{let t=0;return t="早"===H.value?e.weight.morning:"早中"===H.value?(e.weight.morning+e.weight.noon)/2:"午"===H.value?e.weight.noon:e.weight.evening,{name:e.name,weight:t}}))})();console.log("正在选择食物，当前可选食物列表："),console.log(e);const n=e.reduce(((e,t)=>e+Number(t.weight)),0);if(console.log(`当前总重：${n}`),0===n)return await(await l.create({message:"当前时段所有可选食物的概率都为零，无法选择！",duration:2e3})).present(),null;const a=((e,t)=>{let n=Math.random()*t;for(const a of e)if(n-=Number(a.weight),n<=0)return a;return null})(e,n);if(a){const e=N.value.find((e=>e.name===a.name));e&&(console.log("选择了："),e.counts+=1,await S(),console.log(e),console.log("目前的食物列表："),console.log(N.value),await E(e.name))}return a};function O(){L.value=new Date}e("default",C(u({__name:"HomePage",setup(e){s((()=>{setInterval(O,6e4)}));const t=n();return(e,n)=>(d(),c(r(k),null,{default:i((()=>[g(r(w),null,{default:i((()=>[g(r(v),null,{default:i((()=>[g(r(f),null,{default:i((()=>n[1]||(n[1]=[m("今天吃什么")]))),_:1})])),_:1})])),_:1}),g(r(x),{class:"ion-padding"},{default:i((()=>[g(r(h),null,{default:i((()=>[m(p(r(L)),1)])),_:1}),g(r(_),{onClick:n[0]||(n[0]=e=>r(J)().then((e=>t.value=e)))},{default:i((()=>n[2]||(n[2]=[m("选择食物")]))),_:1}),n[4]||(n[4]=y("br",null,null,-1)),g(r(b),null,{default:i((()=>[m("今天的"+p(r(H))+"饭要吃的食物是：",1),n[3]||(n[3]=y("br",null,null,-1))])),_:1}),g(r(b),{style:{"text-align":"center"}},{default:i((()=>{var e;return[m(p(null===(e=t.value)||void 0===e?void 0:e.name),1)]})),_:1})])),_:1})])),_:1}))}}),[["__scopeId","data-v-2e6c47cf"]]))}}}));