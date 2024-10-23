import{d as y,r as F,o as h,c as m,w as n,u as e,a as r,b as o,I as C,e as k,f as s,g as w,n as B,p as g,k as c,q as u,s as W,v as $,F as T,l as D,j as p,h as E,x as L,y as i,z as V,A as z,B as A,C as H,m as O,D as P,t as f,E as S,G as I,H as j,J as q,K as G,_ as J}from"./index-D2QuaPaO.js";import{F as K}from"./foodConstructor-CnAj7M3z.js";const{foodList:_,addFood:M,loadFoods:Q,deleteFood:R}=K(),d=F(null),U=y({__name:"EditFood",setup(X){const b=[{text:"取消",role:"cancel",handler:()=>{d.value=null,console.log("已取消添加食物")}},{text:"添加",handler:async t=>t.foodName&&t.foodWeight?t.foodWeight<0?(d.value="权重不能是负数！",!1):(console.log("准备添加食物".concat(t.foodName,"，").concat(t.foodWeight)),await M(t.foodName,t.foodWeight)?(d.value="".concat(t.foodName,"添加成功！"),!0):!1):(console.log("食物未输入"),d.value="请输入食物名称和权重后再提交",!1)}],v=[{name:"foodName",placeholder:"食物名称"},{name:"foodWeight",type:"number",placeholder:"权重",min:0}],x=async t=>{console.log("正在编辑食物"),await(await G.create({header:"编辑食物",inputs:[{name:"foodName",placeholder:"食物名称",value:t.name},{name:"foodWeight",type:"number",placeholder:"权重",value:t.weight,min:0}],buttons:[{text:"取消",role:"cancel"},{text:"保存",handler:async a=>{a.foodName&&a.foodWeight&&(t.name=a.foodName,t.weight=Number(a.foodWeight))}}]})).present()};return h(()=>{Q().then(()=>{console.log("加载食物列表："),console.log(_.value)})}),(t,l)=>(r(),m(e(O),null,{default:n(()=>[o(e(w),null,{default:n(()=>[o(e(C),null,{default:n(()=>[o(e(k),null,{default:n(()=>l[1]||(l[1]=[s("编辑食物信息")])),_:1})]),_:1})]),_:1}),o(e(D),null,{default:n(()=>[o(e(B),{inset:!0},{default:n(()=>[o(e(g),{style:{"font-weight":"bold"}},{default:n(()=>[o(e(c),null,{default:n(()=>l[2]||(l[2]=[s("食物")])),_:1}),o(e(u),{slot:"end"},{default:n(()=>l[3]||(l[3]=[s("所占权重")])),_:1}),o(e(u),{slot:"end",color:"secondary"},{default:n(()=>l[4]||(l[4]=[s("已选次数")])),_:1})]),_:1}),(r(!0),W(T,null,$(e(_),a=>(r(),m(e(P),{key:a.name},{default:n(()=>[o(e(g),null,{default:n(()=>[o(e(c),null,{default:n(()=>[s(f(a.name),1)]),_:2},1024),o(e(u),{slot:"end"},{default:n(()=>[s(f(a.weight),1)]),_:2},1024),o(e(u),{slot:"end",color:"secondary"},{default:n(()=>[s(f(a.counts),1)]),_:2},1024)]),_:2},1024),o(e(S),{side:"end"},{default:n(()=>[o(e(I),{onClick:N=>x(a)},{default:n(()=>[o(e(i),{slot:"end",icon:e(j)},null,8,["icon"]),l[5]||(l[5]=s("编辑"))]),_:2},1032,["onClick"]),o(e(I),{color:"danger",expandable:"",onClick:N=>e(R)(a.name)},{default:n(()=>[o(e(i),{slot:"end",icon:e(q)},null,8,["icon"]),l[6]||(l[6]=s("删除"))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),o(e(E),{class:"ion-padding",style:{"text-align":"center"}},{default:n(()=>l[7]||(l[7]=[s("TIP："),p("br",null,null,-1),s("点击右侧+号添加食物 滑动来编辑或删除"),p("br",null,null,-1),s("所占权重越大，食物被选中的几率更高")])),_:1}),o(e(z),{slot:"fixed",vertical:"bottom",horizontal:"end",id:"add-button"},{default:n(()=>[o(e(L),null,{default:n(()=>[o(e(i),{icon:e(V)},null,8,["icon"])]),_:1})]),_:1}),o(e(A),{header:"添加食物",trigger:"add-button",buttons:b,inputs:v}),o(e(H),{"is-open":d.value,message:d.value,duration:2e3,onDidDismiss:l[0]||(l[0]=a=>d.value=null)},null,8,["is-open","message"])]),_:1}))}}),ee=J(U,[["__scopeId","data-v-193936e9"]]);export{ee as default,d as message};
