(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eed20cf"],{"13d5":function(e,t,c){"use strict";var n=c("23e7"),r=c("d58f").left,a=c("a640"),i=c("ae40"),u=c("2d00"),l=c("605d"),o=a("reduce"),b=i("reduce",{1:0}),d=!l&&u>79&&u<83;n({target:"Array",proto:!0,forced:!o||!b||d},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"21ae":function(e,t,c){"use strict";c("6fc0")},"23f3":function(e,t,c){"use strict";c("f3db")},"45fc":function(e,t,c){"use strict";var n=c("23e7"),r=c("b727").some,a=c("a640"),i=c("ae40"),u=a("some"),l=i("some");n({target:"Array",proto:!0,forced:!u||!l},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,c){"use strict";var n=c("23e7"),r=c("b727").filter,a=c("1dde"),i=c("ae40"),u=a("filter"),l=i("filter");n({target:"Array",proto:!0,forced:!u||!l},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"4fad":function(e,t,c){var n=c("23e7"),r=c("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6fc0":function(e,t,c){},"966a":function(e,t,c){},a8d4:function(e,t,c){},c178:function(e,t,c){"use strict";c("a8d4")},d58f:function(e,t,c){var n=c("1c0b"),r=c("7b0b"),a=c("44ad"),i=c("50c4"),u=function(e){return function(t,c,u,l){n(c);var o=r(t),b=a(o),d=i(o.length),s=e?d-1:0,f=e?-1:1;if(u<2)while(1){if(s in b){l=b[s],s+=f;break}if(s+=f,e?s<0:d<=s)throw TypeError("Reduce of empty array with no initial value")}for(;e?s>=0:d>s;s+=f)s in b&&(l=c(l,b[s],s,o));return l}};e.exports={left:u(!1),right:u(!0)}},e3df:function(e,t,c){"use strict";c("966a")},f3db:function(e,t,c){},f5be:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r=Object(n["N"])("data-v-5c3fc418");Object(n["u"])("data-v-5c3fc418");var a={class:"section col small"},i={class:"row-1 lects fill"},u={class:"col card lect"},l=Object(n["f"])(" English "),o={class:"flex"},b=Object(n["g"])("hr",null,null,-1),d={class:"row-1 lects"},s={class:"lect text-faded"};Object(n["s"])();var f=r((function(e,t,c,r,f,j){var O=Object(n["A"])("btn"),p=Object(n["A"])("Flag"),v=Object(n["A"])("EntryCard");return Object(n["r"])(),Object(n["d"])("div",a,[Object(n["g"])("div",i,[Object(n["g"])("div",u,[l,e.lect?(Object(n["r"])(),Object(n["d"])(O,{key:1,icon:"search",text:"Search by meaning...",onClick:t[2]||(t[2]=function(t){return e.lect=""})},null,8,["text"])):Object(n["M"])((Object(n["r"])(),Object(n["d"])("input",{key:0,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.query=t}),type:"text"},null,512)),[[n["H"],e.query]])]),(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(e.dictionaries,(function(c,r){return Object(n["r"])(),Object(n["d"])("div",{key:r,class:"col card lect flag"},[Object(n["g"])(p,{lect:r,class:"blur"},null,8,["lect"]),Object(n["g"])("h2",o,Object(n["C"])(r),1),e.lect===r?Object(n["M"])((Object(n["r"])(),Object(n["d"])("input",{key:0,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.query=t}),type:"text"},null,512)),[[n["H"],e.query]]):(Object(n["r"])(),Object(n["d"])(O,{key:1,icon:"search",text:"Search by ".concat(r," form..."),onClick:function(t){return e.lect=r}},null,8,["text","onClick"]))])})),128))]),(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(e.searchResult,(function(e,t){return Object(n["r"])(),Object(n["d"])(n["a"],{key:t},[b,Object(n["g"])("div",d,[Object(n["g"])("i",s,Object(n["C"])(t),1),(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(e,(function(e,t){return Object(n["r"])(),Object(n["d"])("div",{key:t,class:"col lect"},[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(e,(function(e,t){return Object(n["r"])(),Object(n["d"])(v,{key:t,entry:e},null,8,["entry"])})),128))])})),128))])],64)})),128))])})),j=(c("4de4"),c("4160"),c("caad"),c("d81d"),c("13d5"),c("45fc"),c("4fad"),c("2532"),c("159b"),c("3835")),O=(c("96cf"),c("1da1")),p=c("3a0b"),v=Object(n["B"])({});function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e&&Object.entries(v.value).forEach((function(n){var r=Object(j["a"])(n,2),a=r[0],i=r[1];i.filter((function(c){return t?c.meaning.primary===e:c.meaning.primary.includes(e)})).forEach((function(e){var t=e.meaning.primary;c[t]||(c[t]={}),c[t][a]||(c[t][a]=[]),c[t][a].push(e)}))})),c}function g(e,t){return t&&e?v.value[e].filter((function(e){var c=e.forms;return c.some((function(e){var c=e.text;return c.plain.includes(t)}))})).map((function(e){var t=e.meaning;return t.primary})).reduce((function(e,t){return y(t,!0,e)}),{}):y(t)}Object(n["J"])(p["a"],Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v.value={},e.next=3,Object(p["c"])("dictionary");case 3:v.value=e.sent;case 4:case"end":return e.stop()}}),e)}))));var x=Object(n["N"])("data-v-cdf198c4");Object(n["u"])("data-v-cdf198c4");var m={key:0,class:"col"},h={class:"row"},k={key:0,class:"col card"},C=Object(n["g"])("h2",null,"Info",-1),w=Object(n["g"])("h2",null,"Forms",-1),_={class:"text-faded text-caption"},A=Object(n["g"])("h2",null,"Samples",-1),E={class:"text-faded text-caption"};Object(n["s"])();var q=x((function(e,t,c,r,a,i){var u=Object(n["A"])("btn");return e.entry?(Object(n["r"])(),Object(n["d"])("div",m,[Object(n["g"])("div",h,[Object(n["g"])(u,{class:"flex","is-on":e.expand>0,text:e.plain,onClick:t[1]||(t[1]=function(t){return e.expand=e.expand?0:1})},null,8,["is-on","text"]),e.expand?(Object(n["r"])(),Object(n["d"])(n["a"],{key:0},[Object(n["g"])(u,{icon:"info","is-on":1===e.expand,onClick:t[2]||(t[2]=function(t){return e.expand=1})},null,8,["is-on"]),Object(n["g"])(u,{icon:"format_list_bulleted","is-on":2===e.expand,onClick:t[3]||(t[3]=function(t){return e.expand=2})},null,8,["is-on"]),Object(n["g"])(u,{icon:"speaker_notes","is-on":3===e.expand,onClick:t[4]||(t[4]=function(t){return e.expand=3})},null,8,["is-on"])],64)):Object(n["e"])("",!0)]),e.expand?(Object(n["r"])(),Object(n["d"])("div",k,[1===e.expand?(Object(n["r"])(),Object(n["d"])(n["a"],{key:0},[C,Object(n["g"])("p",null,Object(n["C"])(e.entry.meaning.primary),1)],64)):2===e.expand?(Object(n["r"])(),Object(n["d"])(n["a"],{key:1},[w,(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(e.entry.forms,(function(e,t){return Object(n["r"])(),Object(n["d"])("div",{key:t,class:"col-0"},[Object(n["f"])(Object(n["C"])(e.text.plain)+Object(n["C"])(e.text.glossed)+" ",1),Object(n["g"])("span",_,Object(n["C"])(e.grammar),1)])})),128))],64)):3===e.expand?(Object(n["r"])(),Object(n["d"])(n["a"],{key:2},[A,(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(e.entry.samples,(function(e,t){return Object(n["r"])(),Object(n["d"])("div",{key:t,class:"col-0"},[Object(n["g"])("p",null,Object(n["C"])(e.text.plain),1),Object(n["g"])("p",E,Object(n["C"])(e.translation),1)])})),128))],64)):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])):Object(n["e"])("",!0)})),R=Object(n["h"])({name:"EntryCard",props:{entry:{type:Object,default:void 0}},setup:function(e){var t=Object(n["x"])(0),c=Object(n["b"])((function(){var t;return null===(t=e.entry)||void 0===t?void 0:t.forms[0].text.plain}));return{expand:t,plain:c}}});c("23f3");R.render=q,R.__scopeId="data-v-cdf198c4";var I=R,S=c("f929"),F=Object(n["h"])({components:{EntryCard:I,Flag:S["a"]},setup:function(){var e=Object(n["v"])({}),t=Object(n["x"])(""),c=Object(n["b"])({get:function(){return e[t.value]},set:function(c){return e[t.value]=c}}),r=Object(n["b"])((function(){return g(t.value,c.value)}));return{dictionaries:v,query:c,lect:t,searchResult:r}}});c("e3df");F.render=f,F.__scopeId="data-v-5c3fc418";t["default"]=F},f929:function(e,t,c){"use strict";var n=c("7a23"),r=Object(n["N"])("data-v-54304c3e"),a=r((function(e,t,c,r,a,i){return e.lect?(Object(n["r"])(),Object(n["d"])("img",{key:0,src:e.src,class:"no-select"},null,8,["src"])):Object(n["e"])("",!0)})),i=c("3a0b"),u=Object(n["h"])({props:{lect:{type:String,default:""}},setup:function(e){var t=Object(n["b"])((function(){return i["d"]+e.lect+"/flag.png"}));return{src:t}}});c("21ae"),c("c178");u.render=a,u.__scopeId="data-v-54304c3e";t["a"]=u}}]);