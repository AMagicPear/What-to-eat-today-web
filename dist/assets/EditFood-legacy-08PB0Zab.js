System.register(["./index-legacy-Dko6_CYa.js","./foodConstructor-legacy-BdHuhVqQ.js"],(function(e,o){"use strict";var n,l,a,t,d,i,u,s,c,g,r,f,h,m,v,p,_,b,y,W,N,w,k,C,x,E,I,M,F,$,D,L,j,z,A,B,H,P,R,T,q,G;return{setters:[e=>{n=e.d,l=e.r,a=e.o,t=e.a,d=e.w,i=e.u,u=e.b,s=e.e,c=e.I,g=e.f,r=e.g,f=e.h,h=e.s,m=e.v,v=e.m,p=e.x,_=e.y,b=e.z,y=e.A,W=e.F,N=e.n,w=e.B,k=e.l,C=e.i,x=e.C,E=e.D,I=e.E,M=e.G,F=e.H,$=e.J,D=e.p,L=e.K,j=e.j,z=e.L,A=e.M,B=e.N,H=e.O,P=e.P,R=e.Q,T=e.R,q=e.q},e=>{G=e.F}],execute:function(){var o=document.createElement("style");o.textContent="#add-button[data-v-3d5383c9]{margin:2vw}ion-note[data-v-3d5383c9]{display:block}\n",document.head.appendChild(o);const{foodList:J,addFood:K,loadFoods:O,deleteFood:Q,saveFoods:S}=G(),U=e("message",l(null)),V=e("checkedList",l([])),X=e("isCheckBoxDisabled",l(!0));e("default",q(n({__name:"EditFood",setup(e){const o=l(!1),n=[{text:"取消",role:"cancel",handler:()=>{U.value=null,console.log("已取消添加食物")}},{text:"添加",handler:async e=>e.foodName&&e.foodWeightMorning&&e.foodWeightNoon&&e.foodWeightEvening?e.foodWeightMorning<0||e.foodWeightNoon<0||e.foodWeightEvening<0?(U.value="权重不能是负数！",!1):(console.log(`准备添加食物${e.foodName}`),!!(await K(e.foodName,{morning:e.foodWeightMorning,noon:e.foodWeightNoon,evening:e.foodWeightEvening}))&&(U.value=`${e.foodName}添加成功！`,!0)):(console.log("食物未输入"),U.value="请输入食物名称和权重后再提交",!1)}],q=[{name:"foodName",placeholder:"食物名称"},{name:"foodWeightMorning",type:"number",placeholder:"权重：早",min:0},{name:"foodWeightNoon",type:"number",placeholder:"权重：午",min:0},{name:"foodWeightEvening",type:"number",placeholder:"权重：晚",min:0}],G=e=>{switch(e){case"morning":return"早";case"noon":return"午";case"evening":return"晚";default:return""}};a((()=>{O().then((()=>{console.log("加载食物列表："),console.log(J.value),V.value=new Array(J.value.length).fill(!1)}))}));const Y=e=>{o.value=!e.detail.checked},Z=e=>{X.value=!e.detail.checked};return(e,l)=>(u(),t(i(D),null,{default:d((()=>[s(i(f),null,{default:d((()=>[s(i(c),null,{default:d((()=>[s(i(g),null,{default:d((()=>l[2]||(l[2]=[r("编辑食物信息")]))),_:1})])),_:1})])),_:1}),s(i(N),null,{default:d((()=>[s(i(h),{inset:!0},{default:d((()=>[s(i(m),{style:{"font-weight":"bold"}},{default:d((()=>[s(i(v),null,{default:d((()=>l[3]||(l[3]=[r("食物")]))),_:1}),s(i(p),{slot:"end"},{default:d((()=>l[4]||(l[4]=[r("所占权重")]))),_:1}),s(i(p),{slot:"end",color:"secondary"},{default:d((()=>l[5]||(l[5]=[r("已选次数")]))),_:1})])),_:1}),s(i(_),{disabled:o.value,onIonItemReorder:l[0]||(l[0]=e=>(e=>{console.log(`${J.value[e.detail.from].name}移到了位置${e.detail.to}`);const o=V.value.splice(e.detail.from,1)[0];V.value.splice(e.detail.to,0,o),J.value=e.detail.complete(J.value),S()})(e))},{default:d((()=>[(u(!0),b(W,null,y(i(J),((e,o)=>(u(),t(i(L),{key:e.name},{default:d((()=>[s(i(m),null,{default:d((()=>[s(i(v),null,{default:d((()=>[r(j(e.name),1)])),_:2},1024),s(i(z),{slot:"end",disabled:X.value,onIonChange:n=>((e,o)=>{V.value[e]=!V.value[e],console.log(`${o} 已${V.value[e]?"选中":"取消勾选"}.`)})(o,e.name)},null,8,["disabled","onIonChange"]),s(i(A),{slot:"end"}),(u(!0),b(W,null,y(e.weight,((e,o)=>(u(),t(i(p),{slot:"end",key:o},{default:d((()=>[r(j(G(o))+" "+j(e),1)])),_:2},1024)))),128)),s(i(p),{slot:"end",color:"secondary"},{default:d((()=>[r(j(e.counts),1)])),_:2},1024)])),_:2},1024),s(i(B),{side:"end"},{default:d((()=>[s(i(H),{onClick:o=>(async e=>{console.log("正在编辑食物");const o=await T.create({header:"编辑食物",inputs:[{name:"foodName",placeholder:"食物名称",value:e.name},{name:"foodWeightMorning",type:"number",placeholder:"权重",value:e.weight.morning,min:0},{name:"foodWeightNoon",type:"number",placeholder:"权重",value:e.weight.noon,min:0},{name:"foodWeightEvening",type:"number",placeholder:"权重",value:e.weight.evening,min:0}],buttons:[{text:"取消",role:"cancel"},{text:"保存",handler:async o=>{o.foodName&&o.foodWeightMorning&&o.foodWeightNoon&&o.foodWeightEvening&&(e.name=o.foodName,e.weight.morning=o.foodWeightMorning,e.weight.noon=o.foodWeightNoon,e.weight.evening=o.foodWeightEvening)}}]});await o.present()})(e)},{default:d((()=>[s(i(E),{slot:"end",icon:i(P)},null,8,["icon"]),l[6]||(l[6]=r("编辑"))])),_:2},1032,["onClick"]),s(i(H),{color:"danger",expandable:"",onClick:o=>i(Q)(e.name)},{default:d((()=>[s(i(E),{slot:"end",icon:i(R)},null,8,["icon"]),l[7]||(l[7]=r("删除"))])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["disabled"])])),_:1})])),_:1}),s(i(m),null,{default:d((()=>[s(i(w),{class:"ion-padding","enable-on-off-labels":!0,checked:!0,onIonChange:Y},{default:d((()=>l[8]||(l[8]=[r("开启排序")]))),_:1}),s(i(w),{class:"ion-padding","enable-on-off-labels":!0,checked:!1,onIonChange:Z},{default:d((()=>l[9]||(l[9]=[r("开启选择")]))),_:1})])),_:1}),s(i(C),{class:"ion-padding",style:{"text-align":"center"}},{default:d((()=>[k("span",{innerHTML:"TIP：点击右侧+号添加食物 滑动来编辑或删除<br/>所占权重越大，食物被选中的几率更高"})])),_:1}),s(i(M),{slot:"fixed",vertical:"bottom",horizontal:"end",id:"add-button"},{default:d((()=>[s(i(x),null,{default:d((()=>[s(i(E),{icon:i(I)},null,8,["icon"])])),_:1})])),_:1}),s(i(F),{header:"添加食物",trigger:"add-button",buttons:n,inputs:q}),s(i($),{"is-open":U.value,message:U.value,duration:2e3,onDidDismiss:l[1]||(l[1]=e=>U.value=null)},null,8,["is-open","message"])])),_:1}))}}),[["__scopeId","data-v-3d5383c9"]]))}}}));
