const __vite__fileDeps=["./WheelSpinner-DXgO-Sn0.js","./index-2jvkvsLy.js","./index-7CQuqmcz.css","./WheelSpinner-CkFBoQ4I.css","./EditFood-Dzvohqzq.js","./EditFood-DYhC-VJe.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as Qr,Q as Ve}from"./index-2jvkvsLy.js";var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(U){return U&&U.__esModule&&Object.prototype.hasOwnProperty.call(U,"default")?U.default:U}function ie(U){throw new Error('Could not dynamically require "'+U+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Qe={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(U,y){(function(S){U.exports=S()})(function(){return function S(O,R,_){function D(L,W){if(!R[L]){if(!O[L]){var d=typeof ie=="function"&&ie;if(!W&&d)return d(L,!0);if(E)return E(L,!0);var h=new Error("Cannot find module '"+L+"'");throw h.code="MODULE_NOT_FOUND",h}var N=R[L]={exports:{}};O[L][0].call(N.exports,function(x){var V=O[L][1][x];return D(V||x)},N,N.exports,S,O,R,_)}return R[L].exports}for(var E=typeof ie=="function"&&ie,F=0;F<_.length;F++)D(_[F]);return D}({1:[function(S,O,R){(function(_){var D=_.MutationObserver||_.WebKitMutationObserver,E;if(D){var F=0,L=new D(x),W=_.document.createTextNode("");L.observe(W,{characterData:!0}),E=function(){W.data=F=++F%2}}else if(!_.setImmediate&&typeof _.MessageChannel<"u"){var d=new _.MessageChannel;d.port1.onmessage=x,E=function(){d.port2.postMessage(0)}}else"document"in _&&"onreadystatechange"in _.document.createElement("script")?E=function(){var B=_.document.createElement("script");B.onreadystatechange=function(){x(),B.onreadystatechange=null,B.parentNode.removeChild(B),B=null},_.document.documentElement.appendChild(B)}:E=function(){setTimeout(x,0)};var h,N=[];function x(){h=!0;for(var B,K,C=N.length;C;){for(K=N,N=[],B=-1;++B<C;)K[B]();C=N.length}h=!1}O.exports=V;function V(B){N.push(B)===1&&!h&&E()}}).call(this,typeof ae<"u"?ae:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(S,O,R){var _=S(1);function D(){}var E={},F=["REJECTED"],L=["FULFILLED"],W=["PENDING"];O.exports=d;function d(l){if(typeof l!="function")throw new TypeError("resolver must be a function");this.state=W,this.queue=[],this.outcome=void 0,l!==D&&V(this,l)}d.prototype.catch=function(l){return this.then(null,l)},d.prototype.then=function(l,p){if(typeof l!="function"&&this.state===L||typeof p!="function"&&this.state===F)return this;var g=new this.constructor(D);if(this.state!==W){var I=this.state===L?l:p;N(g,I,this.outcome)}else this.queue.push(new h(g,l,p));return g};function h(l,p,g){this.promise=l,typeof p=="function"&&(this.onFulfilled=p,this.callFulfilled=this.otherCallFulfilled),typeof g=="function"&&(this.onRejected=g,this.callRejected=this.otherCallRejected)}h.prototype.callFulfilled=function(l){E.resolve(this.promise,l)},h.prototype.otherCallFulfilled=function(l){N(this.promise,this.onFulfilled,l)},h.prototype.callRejected=function(l){E.reject(this.promise,l)},h.prototype.otherCallRejected=function(l){N(this.promise,this.onRejected,l)};function N(l,p,g){_(function(){var I;try{I=p(g)}catch(P){return E.reject(l,P)}I===l?E.reject(l,new TypeError("Cannot resolve promise with itself")):E.resolve(l,I)})}E.resolve=function(l,p){var g=B(x,p);if(g.status==="error")return E.reject(l,g.value);var I=g.value;if(I)V(l,I);else{l.state=L,l.outcome=p;for(var P=-1,M=l.queue.length;++P<M;)l.queue[P].callFulfilled(p)}return l},E.reject=function(l,p){l.state=F,l.outcome=p;for(var g=-1,I=l.queue.length;++g<I;)l.queue[g].callRejected(p);return l};function x(l){var p=l&&l.then;if(l&&(typeof l=="object"||typeof l=="function")&&typeof p=="function")return function(){p.apply(l,arguments)}}function V(l,p){var g=!1;function I($){g||(g=!0,E.reject(l,$))}function P($){g||(g=!0,E.resolve(l,$))}function M(){p(P,I)}var Y=B(M);Y.status==="error"&&I(Y.value)}function B(l,p){var g={};try{g.value=l(p),g.status="success"}catch(I){g.status="error",g.value=I}return g}d.resolve=K;function K(l){return l instanceof this?l:E.resolve(new this(D),l)}d.reject=C;function C(l){var p=new this(D);return E.reject(p,l)}d.all=ce;function ce(l){var p=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var g=l.length,I=!1;if(!g)return this.resolve([]);for(var P=new Array(g),M=0,Y=-1,$=new this(D);++Y<g;)Q(l[Y],Y);return $;function Q(q,te){p.resolve(q).then(le,function(J){I||(I=!0,E.reject($,J))});function le(J){P[te]=J,++M===g&&!I&&(I=!0,E.resolve($,P))}}}d.race=j;function j(l){var p=this;if(Object.prototype.toString.call(l)!=="[object Array]")return this.reject(new TypeError("must be an array"));var g=l.length,I=!1;if(!g)return this.resolve([]);for(var P=-1,M=new this(D);++P<g;)Y(l[P]);return M;function Y($){p.resolve($).then(function(Q){I||(I=!0,E.resolve(M,Q))},function(Q){I||(I=!0,E.reject(M,Q))})}}},{1:1}],3:[function(S,O,R){(function(_){typeof _.Promise!="function"&&(_.Promise=S(2))}).call(this,typeof ae<"u"?ae:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(S,O,R){var _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch(e){return}}var F=E();function L(){try{if(!F||!F.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch(r){return!1}}function W(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(n){if(n.name!=="TypeError")throw n;for(var r=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,o=new r,a=0;a<e.length;a+=1)o.append(e[a]);return o.getBlob(t.type)}}typeof Promise>"u"&&S(3);var d=Promise;function h(e,t){t&&e.then(function(r){t(null,r)},function(r){t(r)})}function N(e,t,r){typeof t=="function"&&e.then(t),typeof r=="function"&&e.catch(r)}function x(e){return typeof e!="string"&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function V(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var B="local-forage-detect-blob-support",K=void 0,C={},ce=Object.prototype.toString,j="readonly",l="readwrite";function p(e){for(var t=e.length,r=new ArrayBuffer(t),o=new Uint8Array(r),a=0;a<t;a++)o[a]=e.charCodeAt(a);return r}function g(e){return new d(function(t){var r=e.transaction(B,l),o=W([""]);r.objectStore(B).put(o,"key"),r.onabort=function(a){a.preventDefault(),a.stopPropagation(),t(!1)},r.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function I(e){return typeof K=="boolean"?d.resolve(K):g(e).then(function(t){return K=t,K})}function P(e){var t=C[e.name],r={};r.promise=new d(function(o,a){r.resolve=o,r.reject=a}),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then(function(){return r.promise}):t.dbReady=r.promise}function M(e){var t=C[e.name],r=t.deferredOperations.pop();if(r)return r.resolve(),r.promise}function Y(e,t){var r=C[e.name],o=r.deferredOperations.pop();if(o)return o.reject(t),o.promise}function $(e,t){return new d(function(r,o){if(C[e.name]=C[e.name]||Ee(),e.db)if(t)P(e),e.db.close();else return r(e.db);var a=[e.name];t&&a.push(e.version);var n=F.open.apply(F,a);t&&(n.onupgradeneeded=function(i){var f=n.result;try{f.createObjectStore(e.storeName),i.oldVersion<=1&&f.createObjectStore(B)}catch(u){if(u.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+i.oldVersion+" to version "+i.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw u}}),n.onerror=function(i){i.preventDefault(),o(n.error)},n.onsuccess=function(){var i=n.result;i.onversionchange=function(f){f.target.close()},r(i),M(e)}})}function Q(e){return $(e,!1)}function q(e){return $(e,!0)}function te(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),o=e.version<e.db.version,a=e.version>e.db.version;if(o&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),a||r){if(r){var n=e.db.version+1;n>e.version&&(e.version=n)}return!0}return!1}function le(e){return new d(function(t,r){var o=new FileReader;o.onerror=r,o.onloadend=function(a){var n=btoa(a.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},o.readAsBinaryString(e)})}function J(e){var t=p(atob(e.data));return W([t],{type:e.type})}function Se(e){return e&&e.__local_forage_encoded_blob}function Ge(e){var t=this,r=t._initReady().then(function(){var o=C[t._dbInfo.name];if(o&&o.dbReady)return o.dbReady});return N(r,e,e),r}function He(e){P(e);for(var t=C[e.name],r=t.forages,o=0;o<r.length;o++){var a=r[o];a._dbInfo.db&&(a._dbInfo.db.close(),a._dbInfo.db=null)}return e.db=null,Q(e).then(function(n){return e.db=n,te(e)?q(e):n}).then(function(n){e.db=t.db=n;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=n}).catch(function(n){throw Y(e,n),n})}function G(e,t,r,o){o===void 0&&(o=1);try{var a=e.db.transaction(e.storeName,t);r(null,a)}catch(n){if(o>0&&(!e.db||n.name==="InvalidStateError"||n.name==="NotFoundError"))return d.resolve().then(function(){if(!e.db||n.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),q(e)}).then(function(){return He(e).then(function(){G(e,t,r,o-1)})}).catch(r);r(n)}}function Ee(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Xe(e){var t=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var a=C[r.name];a||(a=Ee(),C[r.name]=a),a.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Ge);var n=[];function i(){return d.resolve()}for(var f=0;f<a.forages.length;f++){var u=a.forages[f];u!==t&&n.push(u._initReady().catch(i))}var s=a.forages.slice(0);return d.all(n).then(function(){return r.db=a.db,Q(r)}).then(function(c){return r.db=c,te(r,t._defaultConfig.version)?q(r):c}).then(function(c){r.db=a.db=c,t._dbInfo=r;for(var v=0;v<s.length;v++){var m=s[v];m!==t&&(m._dbInfo.db=r.db,m._dbInfo.version=r.version)}})}function je(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){G(r._dbInfo,j,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.get(e);s.onsuccess=function(){var c=s.result;c===void 0&&(c=null),Se(c)&&(c=J(c)),a(c)},s.onerror=function(){n(s.error)}}catch(c){n(c)}})}).catch(n)});return h(o,t),o}function Je(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){G(r._dbInfo,j,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.openCursor(),c=1;s.onsuccess=function(){var v=s.result;if(v){var m=v.value;Se(m)&&(m=J(m));var b=e(m,v.key,c++);b!==void 0?a(b):v.continue()}else a()},s.onerror=function(){n(s.error)}}catch(v){n(v)}})}).catch(n)});return h(o,t),o}function ke(e,t,r){var o=this;e=x(e);var a=new d(function(n,i){var f;o.ready().then(function(){return f=o._dbInfo,ce.call(t)==="[object Blob]"?I(f.db).then(function(u){return u?t:le(t)}):t}).then(function(u){G(o._dbInfo,l,function(s,c){if(s)return i(s);try{var v=c.objectStore(o._dbInfo.storeName);u===null&&(u=void 0);var m=v.put(u,e);c.oncomplete=function(){u===void 0&&(u=null),n(u)},c.onabort=c.onerror=function(){var b=m.error?m.error:m.transaction.error;i(b)}}catch(b){i(b)}})}).catch(i)});return h(a,r),a}function Ze(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){G(r._dbInfo,l,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=u.delete(e);f.oncomplete=function(){a()},f.onerror=function(){n(s.error)},f.onabort=function(){var c=s.error?s.error:s.transaction.error;n(c)}}catch(c){n(c)}})}).catch(n)});return h(o,t),o}function qe(e){var t=this,r=new d(function(o,a){t.ready().then(function(){G(t._dbInfo,l,function(n,i){if(n)return a(n);try{var f=i.objectStore(t._dbInfo.storeName),u=f.clear();i.oncomplete=function(){o()},i.onabort=i.onerror=function(){var s=u.error?u.error:u.transaction.error;a(s)}}catch(s){a(s)}})}).catch(a)});return h(r,e),r}function er(e){var t=this,r=new d(function(o,a){t.ready().then(function(){G(t._dbInfo,j,function(n,i){if(n)return a(n);try{var f=i.objectStore(t._dbInfo.storeName),u=f.count();u.onsuccess=function(){o(u.result)},u.onerror=function(){a(u.error)}}catch(s){a(s)}})}).catch(a)});return h(r,e),r}function rr(e,t){var r=this,o=new d(function(a,n){if(e<0){a(null);return}r.ready().then(function(){G(r._dbInfo,j,function(i,f){if(i)return n(i);try{var u=f.objectStore(r._dbInfo.storeName),s=!1,c=u.openKeyCursor();c.onsuccess=function(){var v=c.result;if(!v){a(null);return}e===0||s?a(v.key):(s=!0,v.advance(e))},c.onerror=function(){n(c.error)}}catch(v){n(v)}})}).catch(n)});return h(o,t),o}function tr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){G(t._dbInfo,j,function(n,i){if(n)return a(n);try{var f=i.objectStore(t._dbInfo.storeName),u=f.openKeyCursor(),s=[];u.onsuccess=function(){var c=u.result;if(!c){o(s);return}s.push(c.key),c.continue()},u.onerror=function(){a(u.error)}}catch(c){a(c)}})}).catch(a)});return h(r,e),r}function nr(e,t){t=V.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;if(!e.name)a=d.reject("Invalid arguments");else{var n=e.name===r.name&&o._dbInfo.db,i=n?d.resolve(o._dbInfo.db):Q(e).then(function(f){var u=C[e.name],s=u.forages;u.db=f;for(var c=0;c<s.length;c++)s[c]._dbInfo.db=f;return f});e.storeName?a=i.then(function(f){if(f.objectStoreNames.contains(e.storeName)){var u=f.version+1;P(e);var s=C[e.name],c=s.forages;f.close();for(var v=0;v<c.length;v++){var m=c[v];m._dbInfo.db=null,m._dbInfo.version=u}var b=new d(function(w,T){var A=F.open(e.name,u);A.onerror=function(z){var re=A.result;re.close(),T(z)},A.onupgradeneeded=function(){var z=A.result;z.deleteObjectStore(e.storeName)},A.onsuccess=function(){var z=A.result;z.close(),w(z)}});return b.then(function(w){s.db=w;for(var T=0;T<c.length;T++){var A=c[T];A._dbInfo.db=w,M(A._dbInfo)}}).catch(function(w){throw(Y(e,w)||d.resolve()).catch(function(){}),w})}}):a=i.then(function(f){P(e);var u=C[e.name],s=u.forages;f.close();for(var c=0;c<s.length;c++){var v=s[c];v._dbInfo.db=null}var m=new d(function(b,w){var T=F.deleteDatabase(e.name);T.onerror=function(){var A=T.result;A&&A.close(),w(T.error)},T.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},T.onsuccess=function(){var A=T.result;A&&A.close(),b(A)}});return m.then(function(b){u.db=b;for(var w=0;w<s.length;w++){var T=s[w];M(T._dbInfo)}}).catch(function(b){throw(Y(e,b)||d.resolve()).catch(function(){}),b})})}return h(a,t),a}var or={_driver:"asyncStorage",_initStorage:Xe,_support:L(),iterate:Je,getItem:je,setItem:ke,removeItem:Ze,clear:qe,length:er,key:rr,keys:tr,dropInstance:nr};function ar(){return typeof openDatabase=="function"}var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ir="~~local_forage_type~",Ie=/^~~local_forage_type~([^~]+)~/,ne="__lfsc__:",de=ne.length,ve="arbf",he="blob",De="si08",Re="ui08",Ae="uic8",Ne="si16",Te="si32",xe="ur16",Be="ui32",Ce="fl32",Oe="fl64",Le=de+ve.length,Pe=Object.prototype.toString;function Fe(e){var t=e.length*.75,r=e.length,o,a=0,n,i,f,u;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var s=new ArrayBuffer(t),c=new Uint8Array(s);for(o=0;o<r;o+=4)n=H.indexOf(e[o]),i=H.indexOf(e[o+1]),f=H.indexOf(e[o+2]),u=H.indexOf(e[o+3]),c[a++]=n<<2|i>>4,c[a++]=(i&15)<<4|f>>2,c[a++]=(f&3)<<6|u&63;return s}function me(e){var t=new Uint8Array(e),r="",o;for(o=0;o<t.length;o+=3)r+=H[t[o]>>2],r+=H[(t[o]&3)<<4|t[o+1]>>4],r+=H[(t[o+1]&15)<<2|t[o+2]>>6],r+=H[t[o+2]&63];return t.length%3===2?r=r.substring(0,r.length-1)+"=":t.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function fr(e,t){var r="";if(e&&(r=Pe.call(e)),e&&(r==="[object ArrayBuffer]"||e.buffer&&Pe.call(e.buffer)==="[object ArrayBuffer]")){var o,a=ne;e instanceof ArrayBuffer?(o=e,a+=ve):(o=e.buffer,r==="[object Int8Array]"?a+=De:r==="[object Uint8Array]"?a+=Re:r==="[object Uint8ClampedArray]"?a+=Ae:r==="[object Int16Array]"?a+=Ne:r==="[object Uint16Array]"?a+=xe:r==="[object Int32Array]"?a+=Te:r==="[object Uint32Array]"?a+=Be:r==="[object Float32Array]"?a+=Ce:r==="[object Float64Array]"?a+=Oe:t(new Error("Failed to get type for BinaryArray"))),t(a+me(o))}else if(r==="[object Blob]"){var n=new FileReader;n.onload=function(){var i=ir+e.type+"~"+me(this.result);t(ne+he+i)},n.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(i){console.error("Couldn't convert value into a JSON string: ",e),t(null,i)}}function ur(e){if(e.substring(0,de)!==ne)return JSON.parse(e);var t=e.substring(Le),r=e.substring(de,Le),o;if(r===he&&Ie.test(t)){var a=t.match(Ie);o=a[1],t=t.substring(a[0].length)}var n=Fe(t);switch(r){case ve:return n;case he:return W([n],{type:o});case De:return new Int8Array(n);case Re:return new Uint8Array(n);case Ae:return new Uint8ClampedArray(n);case Ne:return new Int16Array(n);case xe:return new Uint16Array(n);case Te:return new Int32Array(n);case Be:return new Uint32Array(n);case Ce:return new Float32Array(n);case Oe:return new Float64Array(n);default:throw new Error("Unkown type: "+r)}}var ge={serialize:fr,deserialize:ur,stringToBuffer:Fe,bufferToString:me};function Me(e,t,r,o){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,o)}function sr(e){var t=this,r={db:null};if(e)for(var o in e)r[o]=typeof e[o]!="string"?e[o].toString():e[o];var a=new d(function(n,i){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(f){return i(f)}r.db.transaction(function(f){Me(f,r,function(){t._dbInfo=r,n()},function(u,s){i(s)})},i)});return r.serializer=ge,a}function X(e,t,r,o,a,n){e.executeSql(r,o,a,function(i,f){f.code===f.SYNTAX_ERR?i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(u,s){s.rows.length?n(u,f):Me(u,t,function(){u.executeSql(r,o,a,n)},n)},n):n(i,f)},n)}function cr(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],function(u,s){var c=s.rows.length?s.rows.item(0).value:null;c&&(c=i.serializer.deserialize(c)),a(c)},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function lr(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"SELECT * FROM "+i.storeName,[],function(u,s){for(var c=s.rows,v=c.length,m=0;m<v;m++){var b=c.item(m),w=b.value;if(w&&(w=i.serializer.deserialize(w)),w=e(w,b.key,m+1),w!==void 0){a(w);return}}a()},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function Ue(e,t,r,o){var a=this;e=x(e);var n=new d(function(i,f){a.ready().then(function(){t===void 0&&(t=null);var u=t,s=a._dbInfo;s.serializer.serialize(t,function(c,v){v?f(v):s.db.transaction(function(m){X(m,s,"INSERT OR REPLACE INTO "+s.storeName+" (key, value) VALUES (?, ?)",[e,c],function(){i(u)},function(b,w){f(w)})},function(m){if(m.code===m.QUOTA_ERR){if(o>0){i(Ue.apply(a,[e,u,r,o-1]));return}f(m)}})})}).catch(f)});return h(n,r),n}function dr(e,t,r){return Ue.apply(this,[e,t,r,1])}function vr(e,t){var r=this;e=x(e);var o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],function(){a()},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function hr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"DELETE FROM "+n.storeName,[],function(){o()},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function mr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT COUNT(key) as c FROM "+n.storeName,[],function(f,u){var s=u.rows.item(0).c;o(s)},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function gr(e,t){var r=this,o=new d(function(a,n){r.ready().then(function(){var i=r._dbInfo;i.db.transaction(function(f){X(f,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],function(u,s){var c=s.rows.length?s.rows.item(0).key:null;a(c)},function(u,s){n(s)})})}).catch(n)});return h(o,t),o}function yr(e){var t=this,r=new d(function(o,a){t.ready().then(function(){var n=t._dbInfo;n.db.transaction(function(i){X(i,n,"SELECT key FROM "+n.storeName,[],function(f,u){for(var s=[],c=0;c<u.rows.length;c++)s.push(u.rows.item(c).key);o(s)},function(f,u){a(u)})})}).catch(a)});return h(r,e),r}function pr(e){return new d(function(t,r){e.transaction(function(o){o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(a,n){for(var i=[],f=0;f<n.rows.length;f++)i.push(n.rows.item(f).name);t({db:e,storeNames:i})},function(a,n){r(n)})},function(o){r(o)})})}function br(e,t){t=V.apply(this,arguments);var r=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var o=this,a;return e.name?a=new d(function(n){var i;e.name===r.name?i=o._dbInfo.db:i=openDatabase(e.name,"","",0),e.storeName?n({db:i,storeNames:[e.storeName]}):n(pr(i))}).then(function(n){return new d(function(i,f){n.db.transaction(function(u){function s(b){return new d(function(w,T){u.executeSql("DROP TABLE IF EXISTS "+b,[],function(){w()},function(A,z){T(z)})})}for(var c=[],v=0,m=n.storeNames.length;v<m;v++)c.push(s(n.storeNames[v]));d.all(c).then(function(){i()}).catch(function(b){f(b)})},function(u){f(u)})})}):a=d.reject("Invalid arguments"),h(a,t),a}var _r={_driver:"webSQLStorage",_initStorage:sr,_support:ar(),iterate:lr,getItem:cr,setItem:dr,removeItem:vr,clear:hr,length:mr,key:gr,keys:yr,dropInstance:br};function wr(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}function Ye(e,t){var r=e.name+"/";return e.storeName!==t.storeName&&(r+=e.storeName+"/"),r}function Sr(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(t){return!0}}function Er(){return!Sr()||localStorage.length>0}function Ir(e){var t=this,r={};if(e)for(var o in e)r[o]=e[o];return r.keyPrefix=Ye(e,t._defaultConfig),Er()?(t._dbInfo=r,r.serializer=ge,d.resolve()):d.reject()}function Dr(e){var t=this,r=t.ready().then(function(){for(var o=t._dbInfo.keyPrefix,a=localStorage.length-1;a>=0;a--){var n=localStorage.key(a);n.indexOf(o)===0&&localStorage.removeItem(n)}});return h(r,e),r}function Rr(e,t){var r=this;e=x(e);var o=r.ready().then(function(){var a=r._dbInfo,n=localStorage.getItem(a.keyPrefix+e);return n&&(n=a.serializer.deserialize(n)),n});return h(o,t),o}function Ar(e,t){var r=this,o=r.ready().then(function(){for(var a=r._dbInfo,n=a.keyPrefix,i=n.length,f=localStorage.length,u=1,s=0;s<f;s++){var c=localStorage.key(s);if(c.indexOf(n)===0){var v=localStorage.getItem(c);if(v&&(v=a.serializer.deserialize(v)),v=e(v,c.substring(i),u++),v!==void 0)return v}}});return h(o,t),o}function Nr(e,t){var r=this,o=r.ready().then(function(){var a=r._dbInfo,n;try{n=localStorage.key(e)}catch(i){n=null}return n&&(n=n.substring(a.keyPrefix.length)),n});return h(o,t),o}function Tr(e){var t=this,r=t.ready().then(function(){for(var o=t._dbInfo,a=localStorage.length,n=[],i=0;i<a;i++){var f=localStorage.key(i);f.indexOf(o.keyPrefix)===0&&n.push(f.substring(o.keyPrefix.length))}return n});return h(r,e),r}function xr(e){var t=this,r=t.keys().then(function(o){return o.length});return h(r,e),r}function Br(e,t){var r=this;e=x(e);var o=r.ready().then(function(){var a=r._dbInfo;localStorage.removeItem(a.keyPrefix+e)});return h(o,t),o}function Cr(e,t,r){var o=this;e=x(e);var a=o.ready().then(function(){t===void 0&&(t=null);var n=t;return new d(function(i,f){var u=o._dbInfo;u.serializer.serialize(t,function(s,c){if(c)f(c);else try{localStorage.setItem(u.keyPrefix+e,s),i(n)}catch(v){(v.name==="QuotaExceededError"||v.name==="NS_ERROR_DOM_QUOTA_REACHED")&&f(v),f(v)}})})});return h(a,r),a}function Or(e,t){if(t=V.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var o=this,a;return e.name?a=new d(function(n){e.storeName?n(Ye(e,o._defaultConfig)):n(e.name+"/")}).then(function(n){for(var i=localStorage.length-1;i>=0;i--){var f=localStorage.key(i);f.indexOf(n)===0&&localStorage.removeItem(f)}}):a=d.reject("Invalid arguments"),h(a,t),a}var Lr={_driver:"localStorageWrapper",_initStorage:Ir,_support:wr(),iterate:Ar,getItem:Rr,setItem:Cr,removeItem:Br,clear:Dr,length:xr,key:Nr,keys:Tr,dropInstance:Or},Pr=function(t,r){return t===r||typeof t=="number"&&typeof r=="number"&&isNaN(t)&&isNaN(r)},Fr=function(t,r){for(var o=t.length,a=0;a<o;){if(Pr(t[a],r))return!0;a++}return!1},$e=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ee={},ze={},k={INDEXEDDB:or,WEBSQL:_r,LOCALSTORAGE:Lr},Mr=[k.INDEXEDDB._driver,k.WEBSQL._driver,k.LOCALSTORAGE._driver],oe=["dropInstance"],ye=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(oe),Ur={description:"",driver:Mr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Yr(e,t){e[t]=function(){var r=arguments;return e.ready().then(function(){return e[t].apply(e,r)})}}function pe(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&($e(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}var $r=function(){function e(t){D(this,e);for(var r in k)if(k.hasOwnProperty(r)){var o=k[r],a=o._driver;this[r]=a,ee[a]||this.defineDriver(o)}this._defaultConfig=pe({},Ur),this._config=pe({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(r){if((typeof r>"u"?"undefined":_(r))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var o in r){if(o==="storeName"&&(r[o]=r[o].replace(/\W/g,"_")),o==="version"&&typeof r[o]!="number")return new Error("Database version must be a number.");this._config[o]=r[o]}return"driver"in r&&r.driver?this.setDriver(this._config.driver):!0}else return typeof r=="string"?this._config[r]:this._config},e.prototype.defineDriver=function(r,o,a){var n=new d(function(i,f){try{var u=r._driver,s=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!r._driver){f(s);return}for(var c=ye.concat("_initStorage"),v=0,m=c.length;v<m;v++){var b=c[v],w=!Fr(oe,b);if((w||r[b])&&typeof r[b]!="function"){f(s);return}}var T=function(){for(var re=function(Vr){return function(){var Kr=new Error("Method "+Vr+" is not implemented by the current driver"),We=d.reject(Kr);return h(We,arguments[arguments.length-1]),We}},be=0,Wr=oe.length;be<Wr;be++){var _e=oe[be];r[_e]||(r[_e]=re(_e))}};T();var A=function(re){ee[u]&&console.info("Redefining LocalForage driver: "+u),ee[u]=r,ze[u]=re,i()};"_support"in r?r._support&&typeof r._support=="function"?r._support().then(A,f):A(!!r._support):A(!0)}catch(z){f(z)}});return N(n,o,a),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(r,o,a){var n=ee[r]?d.resolve(ee[r]):d.reject(new Error("Driver not found."));return N(n,o,a),n},e.prototype.getSerializer=function(r){var o=d.resolve(ge);return N(o,r),o},e.prototype.ready=function(r){var o=this,a=o._driverSet.then(function(){return o._ready===null&&(o._ready=o._initDriver()),o._ready});return N(a,r,r),a},e.prototype.setDriver=function(r,o,a){var n=this;$e(r)||(r=[r]);var i=this._getSupportedDrivers(r);function f(){n._config.driver=n.driver()}function u(v){return n._extend(v),f(),n._ready=n._initStorage(n._config),n._ready}function s(v){return function(){var m=0;function b(){for(;m<v.length;){var w=v[m];return m++,n._dbInfo=null,n._ready=null,n.getDriver(w).then(u).catch(b)}f();var T=new Error("No available storage method found.");return n._driverSet=d.reject(T),n._driverSet}return b()}}var c=this._driverSet!==null?this._driverSet.catch(function(){return d.resolve()}):d.resolve();return this._driverSet=c.then(function(){var v=i[0];return n._dbInfo=null,n._ready=null,n.getDriver(v).then(function(m){n._driver=m._driver,f(),n._wrapLibraryMethodsWithReady(),n._initDriver=s(i)})}).catch(function(){f();var v=new Error("No available storage method found.");return n._driverSet=d.reject(v),n._driverSet}),N(this._driverSet,o,a),this._driverSet},e.prototype.supports=function(r){return!!ze[r]},e.prototype._extend=function(r){pe(this,r)},e.prototype._getSupportedDrivers=function(r){for(var o=[],a=0,n=r.length;a<n;a++){var i=r[a];this.supports(i)&&o.push(i)}return o},e.prototype._wrapLibraryMethodsWithReady=function(){for(var r=0,o=ye.length;r<o;r++)Yr(this,ye[r])},e.prototype.createInstance=function(r){return new e(r)},e}(),zr=new $r;O.exports=zr},{3:3}]},{},[4])(4)})})(Qe);var Hr=Qe.exports;const ue=Gr(Hr),fe={SecureStorage:"ionicSecureStorage",IndexedDB:ue.INDEXEDDB,LocalStorage:ue.LOCALSTORAGE},Ke={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[fe.SecureStorage,fe.IndexedDB,fe.LocalStorage]};class Xr{constructor(y=Ke){this._db=null,this._secureStorageDriver=null;const S=Object.assign({},Ke,y||{});this._config=S}async create(){const y=ue.createInstance(this._config);return this._db=y,await y.setDriver(this._config.driverOrder||[]),this}async defineDriver(y){return y._driver===fe.SecureStorage&&(this._secureStorageDriver=y),ue.defineDriver(y)}get driver(){var y;return((y=this._db)===null||y===void 0?void 0:y.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(y){return this.assertDb().getItem(y)}set(y,S){return this.assertDb().setItem(y,S)}remove(y){return this.assertDb().removeItem(y)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(y){return this.assertDb().iterate(y)}setEncryptionKey(y){var S;if(this._secureStorageDriver)(S=this._secureStorageDriver)===null||S===void 0||S.setEncryptionKey(y);else throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available")}}const we=new Xr;we.create();class se{constructor(y,S,O=0){this.name=y,this.weight=S,this.counts=O}static fromStorage({name:y,weight:S,counts:O}){return new se(y,{morning:Number(S.morning),noon:Number(S.noon),evening:Number(S.evening)},O)}}const Z=Qr([]),kr=()=>{const U=async()=>{console.log("正在加载食物");const R=await we.get("foodList");console.log("读取到的存储："),console.log(R),R&&(Z.value=R.map(_=>se.fromStorage(_)))},y=async()=>{const R=Z.value.map(D=>JSON.parse(JSON.stringify(D)));console.log(R),await we.set("foodList",R);const{updateChartData:_}=await Ve(()=>import("./WheelSpinner-DXgO-Sn0.js").then(D=>D.b),__vite__mapDeps([0,1,2,3]),import.meta.url);_()};return{loadFoods:U,addFood:async(R,_)=>{if(Z.value.find(D=>D.name===R)){const{message:D}=await Ve(()=>import("./EditFood-Dzvohqzq.js"),__vite__mapDeps([4,1,2,5]),import.meta.url);return D.value="已经存在该食物，请勿重复添加",!1}return console.log("正在添加食物".concat(R)),Z.value.push(new se(R,_)),await y(),!0},saveFoods:y,deleteFood:async R=>(console.log("正在删除食物".concat(R)),Z.value=Z.value.filter(_=>_.name!==R),await y(),!0)}};export{kr as F,Z as f,we as s};