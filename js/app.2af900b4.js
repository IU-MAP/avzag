(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d217db3":"e4cdfdf0","chunk-5009582e":"5199678d","chunk-6b37bbd2":"ea51123e","chunk-81f284b8":"6f5c02f3","chunk-ba1b15c8":"fe5a4447"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5009582e":1,"chunk-6b37bbd2":1,"chunk-81f284b8":1,"chunk-ba1b15c8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d217db3":"31d6cfe0","chunk-5009582e":"04fc3d56","chunk-6b37bbd2":"b2b2ea6f","chunk-81f284b8":"06585a28","chunk-ba1b15c8":"f378756b"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Avzag/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3a0b":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));var r,o=n("b85c"),c=n("1da1"),a=(n("96cf"),n("d3b7"),n("7a23")),u=Object(a["w"])([]),i=null!==(r="https://raw.githubusercontent.com/IU-MAP/Avzag/store/")&&void 0!==r?r:"https://raw.githubusercontent.com/alkaitagi/Avzag/store/";function l(e,t){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+t+".json").then((function(e){return e.json()})).catch((function(){return n}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={},r=Object(o["a"])(u.value),e.prev=2,r.s();case 4:if((c=r.n()).done){e.next=12;break}return a=c.value,e.next=8,l(a+"/"+t);case 8:i=e.sent,i&&(n[a]=i);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),r.e(e.t0);case 17:return e.prev=17,r.f(),e.finish(17);case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),f.apply(this,arguments)}},7249:function(e,t,n){"use strict";n("b806")},9041:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return d}));var r=n("3835"),o=n("1da1"),c=(n("13d5"),n("159b"),n("4fad"),n("4de4"),n("caad"),n("2532"),n("d81d"),n("96cf"),n("3a0b")),a=n("7a23"),u=Object(a["A"])(),i=Object(a["A"])({});function l(e,t){return e.reduce((function(e,n){return Object.entries(i.value).forEach((function(o){var c=Object(r["a"])(o,2),a=c[0],u=c[1];u.filter((function(e){var r,o;return null===(r="Tags"===t?null!==(o=e.tags)&&void 0!==o?o:"":e.translation)||void 0===r?void 0:r.includes(n)})).forEach((function(t){var n=t.translation;e[n]||(e[n]={}),e[n][a]||(e[n][a]=[]),e[n][a].push(t)}))})),e}),{})}function s(e,t){return i.value[e].filter((function(e){var n=e.forms;return n.some((function(e){var n=e.text;return t.some((function(e){return n.plain.includes(e)}))}))})).map((function(e){var t=e.translation;return t}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Translation";return e?l(s(e,t),"Translation"):l(t,n)}Object(a["F"])(c["a"],Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.value={},u.value=void 0,e.next=4,Object(c["c"])("dictionary");case 4:return i.value=e.sent,e.next=7,Object(c["b"])("dictionary");case 7:u.value=e.sent;case 8:case"end":return e.stop()}}),e)}))))},b806:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("9483");Object(r["a"])("".concat("/Avzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var o=n("7a23"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),a=function(){return n.e("chunk-6b37bbd2").then(n.bind(null,"36e7"))},u=function(){return n.e("chunk-5009582e").then(n.bind(null,"900c"))},i=function(){return n.e("chunk-ba1b15c8").then(n.bind(null,"acdc"))},l=function(){return n.e("chunk-81f284b8").then(n.bind(null,"f5be"))},s=function(){return n.e("chunk-2d217db3").then(n.bind(null,"c907"))},d=[{path:"/home",name:"Home",component:a},{path:"/",component:u,children:[{path:"dictionary",name:"Dictionary",component:l}]},{path:"/editor/",component:i,children:[{path:"dictionary",name:"DictionaryEditor",component:s}]},{path:"/:pathMatch(.*)",redirect:{name:"Home"}}],f=Object(c["a"])({history:Object(c["b"])(),routes:d});function p(e,t,n,r,c,a){var u=Object(o["z"])("router-view");return Object(o["r"])(),Object(o["d"])(u)}n("b0c0"),n("caad");var b=n("3a0b"),h=(n("9041"),Object(o["h"])({setup:function(){var e,t=Object(c["c"])(),n=Object(c["d"])();t.name&&"Home"!==t.name||n.push(localStorage.url&&localStorage.url!==t.path?{path:localStorage.url}:{name:"Home"}),"Home"!==t.name&&(b["a"].value=JSON.parse(null!==(e=localStorage.lects)&&void 0!==e?e:'["Kaitag"]')),Object(o["G"])((function(){var e=t.name;e&&(localStorage.url=t.path,["Dictionary"].includes(e)&&(localStorage.urlUser=t.path))}))}}));n("7249");h.render=p;var v=h,g={key:0,class:"icon"},m={key:1};function O(e,t,n,r,c,a){return Object(o["r"])(),Object(o["d"])("button",{class:{highlight:e.isOn}},[e.icon?(Object(o["r"])(),Object(o["d"])("p",g,Object(o["B"])(e.icon),1)):Object(o["e"])("",!0),e.text?(Object(o["r"])(),Object(o["d"])("p",m,Object(o["B"])(e.text),1)):Object(o["e"])("",!0)],2)}var j=Object(o["h"])({props:{icon:{type:String,default:""},text:{type:String,default:""},isOn:Boolean}});j.render=O;var y=j;function k(e,t,n,r,c,a){var u=Object(o["z"])("btn");return Object(o["r"])(),Object(o["d"])("div",{onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[Object(o["y"])(e.$slots,"default",{on:e.modelValue},(function(){return[Object(o["g"])(u,Object(o["l"])({style:{width:"100%"}},e.attrs,{icon:e.icon,text:e.text,"is-on":e.modelValue}),null,16,["icon","text","is-on"])]}))])}var w=Object(o["h"])({props:{modelValue:Boolean,icon:{type:String,default:""},text:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=t.attrs;function o(){n("update:modelValue",!e.modelValue)}return{toggle:o,attrs:r}}});w.render=k;var x=w,S=Object(o["c"])(v);S.component("Btn",y),S.component("Toggle",x),S.use(f),f.isReady().then((function(){return S.mount("#app")}))}});