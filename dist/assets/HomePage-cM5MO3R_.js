import{r as w,d as y,o as N,a as g,c as b,w as a,u as l,b as I,e as u,f as i,I as p,t as v,g as _,h as B,i as C,j as h}from"./index-B1ZvEb2v.js";import{s as F,F as x}from"./foodConstructor-j_7ID23b.js";const L=()=>{const e=w([]);return{saveLog:async s=>{const o={time:d.value,name:s};e.value.push(o),await F.set("log",JSON.parse(JSON.stringify(e.value))),console.log("成功保存记录")},loadLog:async()=>{const s=await F.get("log");e.value=s?s.map(o=>({...o,time:new Date(o.time)})):[],console.log("已读取记录"),console.log(e.value)}}},d=w(new Date),{foodList:f,loadFoods:D,saveFoods:V}=x(),{saveLog:W}=L(),k=e=>{const n=e.getHours();return n>=6&&n<9?"morning":n>=9&&n<11?"brunch":n>=11&&n<14?"noon":"evening"},P=async()=>(await D(),f.value),S=async()=>{const e=await P();console.log("正在选择食物，当前可选食物列表："),console.log(e);const n=e.reduce((o,r)=>o+Number(r.weight),0);if(n===0)return alert("当前时段所有可选食物的概率都为零。无法选择！"),null;const s=((o,r)=>{let c=Math.random()*r;for(const m of o)if(c-=Number(m.weight),c<=0)return m;return null})(e,n);if(s){const o=f.value.find(r=>r.name===s.name);o&&(console.log("选择了："),o.counts+=1,V(),console.log(o),console.log("目前的食物列表："),console.log(f.value),W(o.name))}return s};function T(){d.value=new Date}const{loadLog:H}=L(),O=y({__name:"HomePage",setup(e){return N(()=>{setInterval(T,1e3),H()}),(n,t)=>{const s=g("ion-title"),o=g("ion-toolbar"),r=g("ion-header");return I(),b(l(h),null,{default:a(()=>[u(r,null,{default:a(()=>[u(o,null,{default:a(()=>[u(s,null,{default:a(()=>t[1]||(t[1]=[i("主页")])),_:1})]),_:1})]),_:1}),u(l(C),{style:{"padding-top":"20px"}},{default:a(()=>[u(l(p),null,{default:a(()=>[i(v(l(d)),1)]),_:1}),t[3]||(t[3]=_("br",null,null,-1)),u(l(B),{onClick:t[0]||(t[0]=c=>l(S)())},{default:a(()=>t[2]||(t[2]=[i("选择食物")])),_:1}),t[4]||(t[4]=_("br",null,null,-1)),u(l(p),null,{default:a(()=>[i(v(l(k)(l(d))),1)]),_:1})]),_:1})]),_:1})}}});export{O as default};