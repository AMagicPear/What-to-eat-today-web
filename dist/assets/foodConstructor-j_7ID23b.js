const __vite__fileDeps=["assets/EditFood-C9YdIOqz.js","assets/index-B1ZvEb2v.js","assets/index-CM9SeqgC.css","assets/EditFood-B4E3yhjp.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Gr=Object.defineProperty;var Qr=(C,h,p)=>h in C?Gr(C,h,{enumerable:!0,configurable:!0,writable:!0,value:p}):C[h]=p;var ae=(C,h,p)=>(Qr(C,typeof h!="symbol"?h+"":h,p),p);import{r as Hr,s as Xr}from"./index-B1ZvEb2v.js";var ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jr(C){return C&&C.__esModule&&Object.prototype.hasOwnProperty.call(C,"default")?C.default:C}function ue(C){throw new Error('Could not dynamically require "'+C+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ge={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(C,h){(function(p){C.exports=p()})(function(){return function p(M,D,b){function N(L,W){if(!D[L]){if(!M[L]){var d=typeof ue=="function"&&ue;if(!W&&d)return d(L,!0);if(E)return E(L,!0);var m=new Error("Cannot find module '"+L+"'");throw m.code="MODULE_NOT_FOUND",m}var A=D[L]={exports:{}};M[L][0].call(A.exports,function(x){var K=M[L][1][x];return N(K||x)},A,A.exports,p,M,D,b)}return D[L].exports}for(var E=typeof ue=="function"&&ue,F=0;F<b.length;F++)N(b[F]);return N}({1:[function(p,M,D){(function(b){var N=b.MutationObserver||b.WebKitMutationObserver,E;if(N){var F=0,L=new N(x),W=b.document.createTextNode("");L.observe(W,{characterData:!0}),E=function(){W.data=F=++F%2}}else if(!b.setImmediate&&typeof b.MessageChannel<"u"){var d=new b.MessageChannel;d.port1.onmessage=x,E=function(){d.port2.postMessage(0)}}else"document"in b&&"onreadystatechange"in b.document.createElement("script")?E=function(){var B=b.document.createElement("script");B.onreadystatechange=function(){x(),B.onreadystatechange=null,B.parentNode.removeChild(B),B=null},b.document.documentElement.appendChild(B)}:E=function(){setTimeout(x,0)};var m,A=[];function x(){m=!0;for(var B,V,O=A.length;O;){for(V=A,A=[],B=-1;++B<O;)V[B]();O=A.length}m=!1}M.exports=K;function K(B){A.push(B)===1&&!m&&E()}}).call(this,typeof ie<"u"?ie:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(p,M,D){var b=p(1);function N(){}var E={},F=["REJECTED"],L=["FULFILLED"],W=["PENDING"];M.exports=d;function d(l){if(typeof l!="function")throw new TypeError("resolver must be a function");this.state=W,this.queue=[],this.outcome=void 0,l!==N&&K(this,l)}d.prototype.catch=function(l){return this.then(null,l)},d.prototype.then=function(l,_){if(typeof l!="function"&&this.state===L||typeof _!="function"&&this.state===F)return this;var y=new this.constructor(N);if(this.state!==W){var I=this.state===L?l:_;A(y,I,this.outcome)}else this.queue.push(new m(y,l,_));return y};function m(l,_,y){this.promise=l,typeof _=="function"&&(this.onFulfilled=_,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}m.prototype.callFulfilled=function(l){E.resolve(this.promise,l)},m.prototype.otherCallFulfilled=function(l){A(this.promise,this.onFulfilled,l)},m.prototype.callRejected=function(l){E.reject(this.promise,l)},m.prototype.otherCallRejected=function(l){A(this.promise,this.onRejected,l)};function A(l,_,y){b(function(){var I;try{I=_(y)}catch(P){return E.reject(l,P)}I===l?E.reject(l,new TypeError("Cannot resolve promise with itself")):E.resolve(l,I)})}E.resolve=function(l,_){var y=B(x,_);if(y.status==="error")return E.reject(l,y.value);var I=y.value;if(I)K(l,I);else{l.state=L,l.outcome=_;for(var P=-1,U=l.queue.length;++P<U;)l.queue[P].callFulfilled(_)}return l},E.reject=function(l,_){l.state=F,l.outcome=_;for(var y=-1,I=l.queue.length;++y<I;)l.queue[y].callRejected(_);return l};function x(l){var _=l&&l.then;if(l&&(typeof l=="object"||typeof l=="function")&&typeof _=="function")return function(){_.apply(l,arguments)}}function K(l,_){var y=!1;function I($){y||(y=!0,E.reject(l,$))}function P($){y||(y=!0,E.resolve(l,$))}function U(){_(P,I)}var Y=B(U);Y.status==="error"&&I(Y.value)}function B(l,_){var y={};try{y.value=l(_),y.status="success"}catch(I){y.status="error",y.value=I}return y}d.resolve=V;function V(l){return l instanceof this?l:E.resolve(new this(N),l)}d.reject=O;function O(l){var _=new this(N);return E.reject(_,l)}d.all=le;function le(l){var _=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=l.length,I=!1;if(!y)return this.resolve([]);for(var P=new Array(y),U=0,Y=-1,$=new this(N);++Y<y;)G(l[Y],Y);return $;function G(q,te){_.resolve(q).then(de,function(k){I||(I=!0,E.reject($,k))});function de(k){P[te]=k,++U===y&&!I&&(I=!0,E.resolve($,P))}}}d.race=J;function J(l){var _=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=l.length,I=!1;if(!y)return this.resolve([]);for(var P=-1,U=new this(N);++P<y;)Y(l[P]);return U;function Y($){_.resolve($).then(function(G){I||(I=!0,E.resolve(U,G))},function(G){I||(I=!0,E.reject(U,G))})}}},{1:1}],3:[function(p,M,D){(function(b){typeof b.Promise!="function"&&(b.Promise=p(2))}).call(this,typeof ie<"u"?ie:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(p,M,D){var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch(e){return}}var F=E();function L(){try{if(!F||!F.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch(r){return!1}}function W(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(n){if(n.name!=="TypeError")throw n;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,o=new r,a=0;a<e.length;a+=1)o.append(e[a]);return o.getBlob(t.type)}}typeof Promise>"u"&&p(3);var d=Promise;function m(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function A(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function x(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function K(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var B="local-forage-detect-blob-support",V=void 0,O={},le=Object.prototype.toString,J="readonly",l="readwrite";function _(e){for(var t=e.length,r=new ArrayBuffer(t),o=new Uint8Array(r),a=0;a<t;a++)o[a]=e.charCodeAt(a);return r}function y(e){return new d(function(t){var r=e.transaction(B,l),o=W([""]);r.objectStore(B).put(o,"key"),r.onabort=function(a){a.preventDefault(),a.stopPropagation(),t(!1)},r.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function I(e){return typeof V=="boolean"?d.resolve(V):y(e).then(function(t){return V=t,V})}function P(e){var t=O[e.name],r={};r.promise=new d(function(o,a){r.resolve=o,r.reject=a}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function U(e){var t=O[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Y(e,t){var r=O[e.name],o=r.deferredOperations.pop();if(o)return o.reject(t),o.promise}function $(e,t){return new d(function(r,o){if(O[e.name]=O[e.name]||Ie(),e.db)if(t)P(e),e.db.close();else return r(e.db);var a=[e.name];t&&a.push(e.version);var n=F.open.apply(F,a);t&&(n.onupgradeneeded=function(i){var u=n.result;try{u.createObjectStore(e.storeName),i.oldVersion<=1&&u.createObjectStore(B)}catch(f){if(f.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw f}}),n.onerror=function(i){i.preventDefault(),o(n.error)},n.onsuccess=function(){var i=n.result;i.onversionchange=function(u){u.target.close()},r(i),U(e)}})}function G(e){return $(e,!1)}function q(e){return $(e,!0)}function te(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),o=e.version<e.db.version,a=e.version>e.db.version;if(o&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||r){if(r){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function de(e){return new d(function(t,r){var o=new FileReader;o.onerror=r,o.onloadend=function(a){var n=btoa(a.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},o.readAsBinaryString(e)})}function k(e){var t=_(atob(e.data));return W([t],{type:e.type})}function Ee(e){return e&&e.__local_forage_encoded_blob}function Qe(e){var t=this,r=t._initReady().then(function(){var o=O[t._dbInfo.name];if(o&&o.dbReady)return o.dbReady});return A(r,e,e),r}function He(e){P(e);for(var t=O[e.name],r=t.forages,o=0;o<r.length;o++){var a=r[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,G(e).then(function(n){return e.db=n,te(e)?q(e):n}).then(function(n){e.db=t.db=n;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=n}).catch(function(n){throw Y(e,n),n})}function Q(e,t,r,o){o===void 0&&(o=1);try{var a=e.db.transaction(e.storeName,t);r(null,a)}catch(n){if(o>0&&(!e.db||n.name==="InvalidStateError"||n.name==="NotFoundError"))return d.resolve().then(function(){if(!e.db||n.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),q(e)}).then(function(){return He(e).then(function(){Q(e,t,r,o-1)})}).catch(r);r(n)}}function Ie(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Xe(e){var t=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var a=O[r.name];a||(a=Ie(),O[r.name]=a),a.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Qe);var n=[];function i(){return d.resolve()}for(var u=0;u<a.forages.length;u++){var f=a.forages[u];f!==t&&n.push(f._initReady().catch(i))}var s=a.forages.slice(0);return d.all(n).then(function(){return r.db=a.db,G(r)}).then(function(c){return r.db=c,te(r,t._defaultConfig.version)?q(r):c}).then(function(c){r.db=a.db=c,t._dbInfo=r;for(var v=0;v<s.length;v++){var g=s[v];g!==t&&(g._dbInfo.db=r.db,g._dbInfo.version=r.version)}})}function je(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){Q(r._dbInfo,J,function(i,u){if(i)return n(i);try{var f=u.objectStore(r._dbInfo.storeName),s=f.get(e);s.onsuccess=function(){var c=s.result;c===void 0&&(c=null),Ee(c)&&(c=k(c)),a(c)},s.onerror=function(){n(s.error)}}catch(c){n(c)}})}).catch(n)});return m(o,t),o}function Je(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){Q(r._dbInfo,J,function(i,u){if(i)return n(i);try{var f=u.objectStore(r._dbInfo.storeName),s=f.openCursor(),c=1;s.onsuccess=function(){var v=s.result;if(v){var g=v.value;Ee(g)&&(g=k(g));var w=e(g,v.key,c++);w!==void 0?a(w):v.continue()}else a()},s.onerror=function(){n(s.error)}}catch(v){n(v)}})}).catch(n)});return m(o,t),o}function ke(e,t,r){var o=this;e=x(e);var a=new d(function(n,i){var u;o.ready().then(function(){return u=o._dbInfo,le.call(t)==="[object Blob]"?I(u.db).then(function(f){return f?t:de(t)}):t}).then(function(f){Q(o._dbInfo,l,function(s,c){if(s)return i(s);try{var v=c.objectStore(o._dbInfo.storeName);f===null&&(f=void 0);var g=v.put(f,e);c.oncomplete=function(){f===void 0&&(f=null),n(f)},c.onabort=c.onerror=function(){var w=g.error?g.error:g.transaction.error;i(w)}}catch(w){i(w)}})}).catch(i)});return m(a,r),a}function Ze(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){Q(r._dbInfo,l,function(i,u){if(i)return n(i);try{var f=u.objectStore(r._dbInfo.storeName),s=f.delete(e);u.oncomplete=function(){a()},u.onerror=function(){n(s.error)},u.onabort=function(){var c=s.error?s.error:s.transaction.error;n(c)}}catch(c){n(c)}})}).catch(n)});return m(o,t),o}function qe(e){var t=this,r=new d(function(o,a){t.ready().then(function(){Q(t._dbInfo,l,function(n,i){if(n)return a(n);try{var u=i.objectStore(t._dbInfo.storeName),f=u.clear();i.oncomplete=function(){o()},i.onabort=i.onerror=function(){var s=f.error?f.error:f.transaction.error;a(s)}}catch(s){a(s)}})}).catch(a)});return m(r,e),r}function er(e){var t=this,r=new d(function(o,a){t.ready().then(function(){Q(t._dbInfo,J,function(n,i){if(n)return a(n);try{var u=i.objectStore(t._dbInfo.storeName),f=u.count();f.onsuccess=function(){o(f.result)},f.onerror=function(){a(f.error)}}catch(s){a(s)}})}).catch(a)});return m(r,e),r}function rr(e,t){var r=this,o=new d(function(a,n){if(e<0){a(null);return}r.ready().then(function(){Q(r._dbInfo,J,function(i,u){if(i)return n(i);try{var f=u.objectStore(r._dbInfo.storeName),s=!1,c=f.openKeyCursor();c.onsuccess=function(){var v=c.result;if(!v){a(null);return}e===0||s?a(v.key):(s=!0,v.advance(e))},c.onerror=function(){n(c.error)}}catch(v){n(v)}})}).catch(n)});return m(o,t),o}function tr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){Q(t._dbInfo,J,function(n,i){if(n)return a(n);try{var u=i.objectStore(t._dbInfo.storeName),f=u.openKeyCursor(),s=[];f.onsuccess=function(){var c=f.result;if(!c){o(s);return}s.push(c.key),c.continue()},f.onerror=function(){a(f.error)}}catch(c){a(c)}})}).catch(a)});return m(r,e),r}function nr(e,t){t=K.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;if(!e.name)a=d.reject("Invalid arguments");else{var n=e.name===r.name&&o._dbInfo.db,i=n?d.resolve(o._dbInfo.db):G(e).then(function(u){var f=O[e.name],s=f.forages;f.db=u;for(var c=0;c<s.length;c++)s[c]._dbInfo.db=u;return u});e.storeName?a=i.then(function(u){if(u.objectStoreNames.contains(e.storeName)){var f=u.version+1;P(e);var s=O[e.name],c=s.forages;u.close();for(var v=0;v<c.length;v++){var g=c[v];g._dbInfo.db=null,g._dbInfo.version=f}var w=new d(function(S,T){var R=F.open(e.name,f);R.onerror=function(z){var re=R.result;re.close(),T(z)},R.onupgradeneeded=function(){var z=R.result;z.deleteObjectStore(e.storeName)},R.onsuccess=function(){var z=R.result;z.close(),S(z)}});return w.then(function(S){s.db=S;for(var T=0;T<c.length;T++){var R=c[T];R._dbInfo.db=S,U(R._dbInfo)}}).catch(function(S){throw(Y(e,S)||d.resolve()).catch(function(){}),S})}}):a=i.then(function(u){P(e);var f=O[e.name],s=f.forages;u.close();for(var c=0;c<s.length;c++){var v=s[c];v._dbInfo.db=null}var g=new d(function(w,S){var T=F.deleteDatabase(e.name);T.onerror=function(){var R=T.result;R&&R.close(),S(T.error)},T.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},T.onsuccess=function(){var R=T.result;R&&R.close(),w(R)}});return g.then(function(w){f.db=w;for(var S=0;S<s.length;S++){var T=s[S];U(T._dbInfo)}}).catch(function(w){throw(Y(e,w)||d.resolve()).catch(function(){}),w})})}return m(a,t),a}var or={_driver:"asyncStorage",_initStorage:Xe,_support:L(),iterate:Je,getItem:je,setItem:ke,removeItem:Ze,clear:qe,length:er,key:rr,keys:tr,dropInstance:nr};function ar(){return typeof openDatabase=="function"}var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ir="~~local_forage_type~",De=/^~~local_forage_type~([^~]+)~/,ne="__lfsc__:",ve=ne.length,he="arbf",me="blob",Re="si08",Ae="ui08",Te="uic8",Ne="si16",xe="si32",Be="ur16",Ce="ui32",Oe="fl32",Le="fl64",Pe=ve+he.length,Fe=Object.prototype.toString;function Me(e){var t=e.length*.75,r=e.length,o,a=0,n,i,u,f;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var s=new ArrayBuffer(t),c=new Uint8Array(s);for(o=0;o<r;o+=4)n=H.indexOf(e[o]),i=H.indexOf(e[o+1]),u=H.indexOf(e[o+2]),f=H.indexOf(e[o+3]),c[a++]=n<<2|i>>4,c[a++]=(i&15)<<4|u>>2,c[a++]=(u&3)<<6|f&63;return s}function ge(e){var t=new Uint8Array(e),r="",o;for(o=0;o<t.length;o+=3)r+=H[t[o]>>2],r+=H[(t[o]&3)<<4|t[o+1]>>4],r+=H[(t[o+1]&15)<<2|t[o+2]>>6],r+=H[t[o+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function ur(e,t){var r="";if(e&&(r=Fe.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Fe.call(e.buffer)==="[object ArrayBuffer]")){var o,a=ne;e instanceof ArrayBuffer?(o=e,a+=he):(o=e.buffer,r==="[object Int8Array]"?a+=Re:r==="[object Uint8Array]"?a+=Ae:r==="[object Uint8ClampedArray]"?a+=Te:r==="[object Int16Array]"?a+=Ne:r==="[object Uint16Array]"?a+=Be:r==="[object Int32Array]"?a+=xe:r==="[object Uint32Array]"?a+=Ce:r==="[object Float32Array]"?a+=Oe:r==="[object Float64Array]"?a+=Le:t(new Error("Failed to get type for BinaryArray"))),t(a+ge(o))}else if(r==="[object Blob]"){var n=new FileReader;n.onload=function(){var i=ir+e.type+"~"+ge(this.result);t(ne+me+i)},n.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),t(null,i)}}function fr(e){if(e.substring(0,ve)!==ne)return JSON.parse(e);var t=e.substring(Pe),r=e.substring(ve,Pe),o;if(r===me&&De.test(t)){var a=t.match(De);o=a[1],t=t.substring(a[0].length)}var n=Me(t);switch(r){case he:return n;case me:return W([n],{type:o});case Re:return new Int8Array(n);case Ae:return new Uint8Array(n);case Te:return new Uint8ClampedArray(n);case Ne:return new Int16Array(n);case Be:return new Uint16Array(n);case xe:return new Int32Array(n);case Ce:return new Uint32Array(n);case Oe:return new Float32Array(n);case Le:return new Float64Array(n);default:throw new Error("Unkown type: "+r)}}var ye={serialize:ur,deserialize:fr,stringToBuffer:Me,bufferToString:ge};function Ue(e,t,r,o){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,o)}function sr(e){var t=this,r={db:null};if(e)for(var o in e)r[o]=typeof e[o]!="string"?e[o].toString():e[o];var a=new d(function(n,i){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(u){return i(u)}r.db.transaction(function(u){Ue(u,r,function(){t._dbInfo=r,n()},function(f,s){i(s)})},i)});return r.serializer=ye,a}function X(e,t,r,o,a,n){e.executeSql(r,o,a,function(i,u){u.code===u.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(f,s){s.rows.length?n(f,u):Ue(f,t,function(){f.executeSql(r,o,a,n)},n)},n):n(i,u)},n)}function cr(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(u){X(u,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(f,s){var c=s.rows.length?s.rows.item(0).value:null;c&&(c=i.serializer.deserialize(c)),a(c)},function(f,s){n(s)})})}).catch(n)});return m(o,t),o}function lr(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(u){X(u,i,"SELECT * FROM "+i.storeName,[],function(f,s){for(var c=s.rows,v=c.length,g=0;g<v;g++){var w=c.item(g),S=w.value;if(S&&(S=i.serializer.deserialize(S)),S=e(S,w.key,g+1),S!==void 0){a(S);return}}a()},function(f,s){n(s)})})}).catch(n)});return m(o,t),o}function Ye(e,t,r,o){var a=this;e=x(e);var n=new d(function(i,u){a.ready().then(function(){t===void 0&&(t=null);var f=t,s=a._dbInfo;s.serializer.serialize(t,function(c,v){v?u(v):s.db.transaction(function(g){X(g,s,"INSERT OR REPLACE INTO "+s.storeName+" (key, value) VALUES (?, ?)",[e,c],function(){i(f)},function(w,S){u(S)})},function(g){if(g.code===g.QUOTA_ERR){if(o>0){i(Ye.apply(a,[e,f,r,o-1]));return}u(g)}})})}).catch(u)});return m(n,r),n}function dr(e,t,r){return Ye.apply(this,[e,t,r,1])}function vr(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(u){X(u,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){a()},function(f,s){n(s)})})}).catch(n)});return m(o,t),o}function hr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"DELETE FROM "+n.storeName,[],function(){o()},function(u,f){a(f)})})}).catch(a)});return m(r,e),r}function mr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(u,f){var s=f.rows.item(0).c;o(s)},function(u,f){a(f)})})}).catch(a)});return m(r,e),r}function gr(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(u){X(u,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(f,s){var c=s.rows.length?s.rows.item(0).key:null;a(c)},function(f,s){n(s)})})}).catch(n)});return m(o,t),o}function yr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT key FROM "+n.storeName,[],function(u,f){for(var s=[],c=0;c<f.rows.length;c++)s.push(f.rows.item(c).key);o(s)},function(u,f){a(f)})})}).catch(a)});return m(r,e),r}function pr(e){return new d(function(t,r){e.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(a,n){for(var i=[],u=0;u<n.rows.length;u++)i.push(n.rows.item(u).name);t({db:e,storeNames:i})},function(a,n){r(n)})},function(o){r(o)})})}function br(e,t){t=K.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;return e.name?a=new d(function(n){var i;e.name===r.name?i=o._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?n({db:i,storeNames:[e.storeName]}):n(pr(i))}).then(function(n){return new d(function(i,u){n.db.transaction(function(f){function s(w){return new d(function(S,T){f.executeSql("DROP TABLE IF EXISTS "+w,[],function(){S()},function(R,z){T(z)})})}for(var c=[],v=0,g=n.storeNames.length;v<g;v++)c.push(s(n.storeNames[v]));d.all(c).then(function(){i()}).catch(function(w){u(w)})},function(f){u(f)})})}):a=d.reject("Invalid arguments"),m(a,t),a}var _r={_driver:"webSQLStorage",_initStorage:sr,_support:ar(),iterate:lr,getItem:cr,setItem:dr,removeItem:vr,clear:hr,length:mr,key:gr,keys:yr,dropInstance:br};function wr(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}function $e(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Sr(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(t){return!0}}function Er(){return!Sr()||localStorage.length>0}function Ir(e){var t=this,r={};if(e)for(var o in e)r[o]=e[o];return r.keyPrefix=$e(e,t._defaultConfig),Er()?(t._dbInfo=r,r.serializer=ye,d.resolve()):d.reject()}function Dr(e){var t=this,r=t.ready().then(function(){for(var o=t._dbInfo.keyPrefix,a=localStorage.length-1;a>=0;a--){var n=localStorage.key(a);n.indexOf(o)===0&&localStorage.removeItem(n)}});return m(r,e),r}function Rr(e,t){var r=this;e=x(e);var o=r.ready().then(function(){var a=r._dbInfo,n=localStorage.getItem(a.keyPrefix+e);return n&&(n=a.serializer.deserialize(n)),n});return m(o,t),o}function Ar(e,t){var r=this,o=r.ready().then(function(){for(var a=r._dbInfo,n=a.keyPrefix,i=n.length,u=localStorage.length,f=1,s=0;s<u;s++){var c=localStorage.key(s);if(c.indexOf(n)===0){var v=localStorage.getItem(c);if(v&&(v=a.serializer.deserialize(v)),v=e(v,c.substring(i),f++),v!==void 0)return v}}});return m(o,t),o}function Tr(e,t){var r=this,o=r.ready().then(function(){var a=r._dbInfo,n;try{n=localStorage.key(e)}catch(i){n=null}return n&&(n=n.substring(a.keyPrefix.length)),n});return m(o,t),o}function Nr(e){var t=this,r=t.ready().then(function(){for(var o=t._dbInfo,a=localStorage.length,n=[],i=0;i<a;i++){var u=localStorage.key(i);u.indexOf(o.keyPrefix)===0&&n.push(u.substring(o.keyPrefix.length))}return n});return m(r,e),r}function xr(e){var t=this,r=t.keys().then(function(o){return o.length});return m(r,e),r}function Br(e,t){var r=this;e=x(e);var o=r.ready().then(function(){var a=r._dbInfo;localStorage.removeItem(a.keyPrefix+e)});return m(o,t),o}function Cr(e,t,r){var o=this;e=x(e);var a=o.ready().then(function(){t===void 0&&(t=null);var n=t;return new d(function(i,u){var f=o._dbInfo;f.serializer.serialize(t,function(s,c){if(c)u(c);else try{localStorage.setItem(f.keyPrefix+e,s),i(n)}catch(v){(v.name==="QuotaExceededError"||v.name==="NS_ERROR_DOM_QUOTA_REACHED")&&u(v),u(v)}})})});return m(a,r),a}function Or(e,t){if(t=K.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var o=this,a;return e.name?a=new d(function(n){e.storeName?n($e(e,o._defaultConfig)):n(e.name+"/")}).then(function(n){for(var i=localStorage.length-1;i>=0;i--){var u=localStorage.key(i);u.indexOf(n)===0&&localStorage.removeItem(u)}}):a=d.reject("Invalid arguments"),m(a,t),a}var Lr={_driver:"localStorageWrapper",_initStorage:Ir,_support:wr(),iterate:Ar,getItem:Rr,setItem:Cr,removeItem:Br,clear:Dr,length:xr,key:Tr,keys:Nr,dropInstance:Or},Pr=function(t,r){return t===r||typeof t=="number"&&typeof r=="number"&&isNaN(t)&&isNaN(r)},Fr=function(t,r){for(var o=t.length,a=0;a<o;){if(Pr(t[a],r))return!0;a++}return!1},ze=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ee={},We={},Z={INDEXEDDB:or,WEBSQL:_r,LOCALSTORAGE:Lr},Mr=[Z.INDEXEDDB._driver,Z.WEBSQL._driver,Z.LOCALSTORAGE._driver],oe=["dropInstance"],pe=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(oe),Ur={description:"",driver:Mr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Yr(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function be(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(ze(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}var $r=function(){function e(t){N(this,e);for(var r in Z)if(Z.hasOwnProperty(r)){var o=Z[r],a=o._driver;this[r]=a,ee[a]||this.defineDriver(o)}this._defaultConfig=be({},Ur),this._config=be({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(r){if((typeof r>"u"?"undefined":b(r))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var o in r){if(o==="storeName"&&(r[o]=r[o].replace(/\W/g,"_")),o==="version"&&typeof r[o]!="number")return new Error("Database version must be a number.");this._config[o]=r[o]}return"driver"in r&&r.driver?this.setDriver(this._config.driver):!0}else return typeof r=="string"?this._config[r]:this._config},e.prototype.defineDriver=function(r,o,a){var n=new d(function(i,u){try{var f=r._driver,s=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!r._driver){u(s);return}for(var c=pe.concat("_initStorage"),v=0,g=c.length;v<g;v++){var w=c[v],S=!Fr(oe,w);if((S||r[w])&&typeof r[w]!="function"){u(s);return}}var T=function(){for(var re=function(Kr){return function(){var Vr=new Error("Method "+Kr+" is not implemented by the current driver"),Ke=d.reject(Vr);return m(Ke,arguments[arguments.length-1]),Ke}},_e=0,Wr=oe.length;_e<Wr;_e++){var we=oe[_e];r[we]||(r[we]=re(we))}};T();var R=function(re){ee[f]&&console.info("Redefining LocalForage driver: "+f),ee[f]=r,We[f]=re,i()};"_support"in r?r._support&&typeof r._support=="function"?r._support().then(R,u):R(!!r._support):R(!0)}catch(z){u(z)}});return A(n,o,a),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(r,o,a){var n=ee[r]?d.resolve(ee[r]):d.reject(new Error("Driver not found."));return A(n,o,a),n},e.prototype.getSerializer=function(r){var o=d.resolve(ye);return A(o,r),o},e.prototype.ready=function(r){var o=this,a=o._driverSet.then(function(){return o._ready===null&&(o._ready=o._initDriver()),o._ready});return A(a,r,r),a},e.prototype.setDriver=function(r,o,a){var n=this;ze(r)||(r=[r]);var i=this._getSupportedDrivers(r);function u(){n._config.driver=n.driver()}function f(v){return n._extend(v),u(),n._ready=n._initStorage(n._config),n._ready}function s(v){return function(){var g=0;function w(){for(;g<v.length;){var S=v[g];return g++,n._dbInfo=null,n._ready=null,n.getDriver(S).then(f).catch(w)}u();var T=new Error("No available storage method found.");return n._driverSet=d.reject(T),n._driverSet}return w()}}var c=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=c.then(function(){var v=i[0];return n._dbInfo=null,n._ready=null,n.getDriver(v).then(function(g){n._driver=g._driver,u(),n._wrapLibraryMethodsWithReady(),n._initDriver=s(i)})}).catch(function(){u();var v=new Error("No available storage method found.");return n._driverSet=d.reject(v),n._driverSet}),A(this._driverSet,o,a),this._driverSet},e.prototype.supports=function(r){return!!We[r]},e.prototype._extend=function(r){be(this,r)},e.prototype._getSupportedDrivers=function(r){for(var o=[],a=0,n=r.length;a<n;a++){var i=r[a];this.supports(i)&&o.push(i)}return o},e.prototype._wrapLibraryMethodsWithReady=function(){for(var r=0,o=pe.length;r<o;r++)Yr(this,pe[r])},e.prototype.createInstance=function(r){return new e(r)},e}(),zr=new $r;M.exports=zr},{3:3}]},{},[4])(4)})})(Ge);var Jr=Ge.exports;const se=jr(Jr),fe={SecureStorage:"ionicSecureStorage",IndexedDB:se.INDEXEDDB,LocalStorage:se.LOCALSTORAGE},Ve={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[fe.SecureStorage,fe.IndexedDB,fe.LocalStorage]};class kr{constructor(h=Ve){this._db=null,this._secureStorageDriver=null;const p=Object.assign({},Ve,h||{});this._config=p}async create(){const h=se.createInstance(this._config);return this._db=h,await h.setDriver(this._config.driverOrder||[]),this}async defineDriver(h){return h._driver===fe.SecureStorage&&(this._secureStorageDriver=h),se.defineDriver(h)}get driver(){var h;return((h=this._db)===null||h===void 0?void 0:h.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(h){return this.assertDb().getItem(h)}set(h,p){return this.assertDb().setItem(h,p)}remove(h){return this.assertDb().removeItem(h)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(h){return this.assertDb().iterate(h)}setEncryptionKey(h){var p;if(this._secureStorageDriver)(p=this._secureStorageDriver)===null||p===void 0||p.setEncryptionKey(h);else throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available")}}const Se=new kr;Se.create();class ce{constructor(h,p,M=0){ae(this,"name");ae(this,"weight");ae(this,"counts");this.name=h,this.weight=p,this.counts=M}toStorage(){return{name:this.name,weight:this.weight,counts:this.counts}}static fromStorage(h){return new ce(h.name,h.weight,h.counts)}}const j=Hr([]),rt=()=>{const C=async()=>{console.log("正在加载食物，加载前："),console.log(j.value);const D=await Se.get("foodList");console.log("读取到的存储："),console.log(D),D&&(j.value=D.map(b=>ce.fromStorage(b)))},h=async()=>{const D=j.value.map(b=>b.toStorage());console.log(D),await Se.set("foodList",D)};return{foodList:j,loadFoods:C,addFood:async(D,b)=>{if(j.value.find(N=>N.name===D)){const{message:N}=await Xr(()=>import("./EditFood-C9YdIOqz.js"),__vite__mapDeps([0,1,2,3]));return N.value="已经存在该食物，请勿重复添加",!1}return console.log("正在添加食物".concat(D,"，").concat(b)),j.value.push(new ce(D,b)),await h(),!0},saveFoods:h,deleteFood:async D=>(console.log("正在删除食物".concat(D)),j.value=j.value.filter(b=>b.name!==D),await h(),!0)}};export{rt as F,Se as s};
