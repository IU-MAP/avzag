(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81f284b8"],{"0905":function(e,t,n){"use strict";n("2039")},1276:function(e,t,n){"use strict";var c=n("d784"),r=n("44e7"),l=n("825a"),a=n("1d80"),i=n("4840"),u=n("8aa5"),o=n("50c4"),s=n("14c3"),d=n("9263"),b=n("d039"),f=[].push,p=Math.min,O=4294967295,j=!b((function(){return!RegExp(O,"y")}));c("split",2,(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=String(a(this)),l=void 0===n?O:n>>>0;if(0===l)return[];if(void 0===e)return[c];if(!r(e))return t.call(c,e,l);var i,u,o,s=[],b=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,j=new RegExp(e.source,b+"g");while(i=d.call(j,c)){if(u=j.lastIndex,u>p&&(s.push(c.slice(p,i.index)),i.length>1&&i.index<c.length&&f.apply(s,i.slice(1)),o=i[0].length,p=u,s.length>=l))break;j.lastIndex===i.index&&j.lastIndex++}return p===c.length?!o&&j.test("")||s.push(""):s.push(c.slice(p)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=a(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,r,n):c.call(String(r),t,n)},function(e,r){var a=n(c,e,this,r,c!==t);if(a.done)return a.value;var d=l(e),b=String(this),f=i(d,RegExp),v=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(j?"y":"g"),g=new f(j?d:"^(?:"+d.source+")",x),y=void 0===r?O:r>>>0;if(0===y)return[];if(0===b.length)return null===s(g,b)?[b]:[];var h=0,m=0,E=[];while(m<b.length){g.lastIndex=j?m:0;var k,R=s(g,j?b:b.slice(m));if(null===R||(k=p(o(g.lastIndex+(j?0:m)),b.length))===h)m=u(b,m,v);else{if(E.push(b.slice(h,m)),E.length===y)return E;for(var I=1;I<=R.length-1;I++)if(E.push(R[I]),E.length===y)return E;m=h=k}}return E.push(b.slice(h)),E}]}),!j)},"14c3":function(e,t,n){var c=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var l=n.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==c(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},2039:function(e,t,n){},"21ae":function(e,t,n){"use strict";n("6fc0")},"286b":function(e,t,n){},"498a":function(e,t,n){"use strict";var c=n("23e7"),r=n("58a8").trim,l=n("c8d2");c({target:"String",proto:!0,forced:l("trim")},{trim:function(){return r(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var c=n("1d80"),r=n("5899"),l="["+r+"]",a=RegExp("^"+l+l+"*"),i=RegExp(l+l+"*$"),u=function(e){return function(t){var n=String(c(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"6fc0":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},9263:function(e,t,n){"use strict";var c=n("ad6d"),r=n("9f7f"),l=n("5692"),a=RegExp.prototype.exec,i=l("native-string-replace",String.prototype.replace),u=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],b=o||d||s;b&&(u=function(e){var t,n,r,l,u=this,b=s&&u.sticky,f=c.call(u),p=u.source,O=0,j=e;return b&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),j=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(p="(?: "+p+")",j=" "+j,O++),n=new RegExp("^(?:"+p+")",f)),d&&(n=new RegExp("^"+p+"$(?!\\s)",f)),o&&(t=u.lastIndex),r=a.call(b?n:u,j),b?r?(r.input=r.input.slice(O),r[0]=r[0].slice(O),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:o&&r&&(u.lastIndex=u.global?r.index+r[0].length:t),d&&r&&r.length>1&&i.call(r[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),e.exports=u},"9cbc":function(e,t,n){"use strict";n("286b")},"9f7f":function(e,t,n){"use strict";var c=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=c((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=c((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a8d4:function(e,t,n){},ac1f:function(e,t,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var c=n("825a");e.exports=function(){var e=c(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b64b:function(e,t,n){var c=n("23e7"),r=n("7b0b"),l=n("df75"),a=n("d039"),i=a((function(){l(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(e){return l(r(e))}})},c178:function(e,t,n){"use strict";n("a8d4")},c8d2:function(e,t,n){var c=n("d039"),r=n("5899"),l="​᠎";e.exports=function(e){return c((function(){return!!r[e]()||l[e]()!=l||r[e].name!==e}))}},d784:function(e,t,n){"use strict";n("ac1f");var c=n("6eeb"),r=n("d039"),l=n("b622"),a=n("9263"),i=n("9112"),u=l("species"),o=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=l("replace"),b=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var p=l(e),O=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),j=O&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!O||!j||"replace"===e&&(!o||!s||b)||"split"===e&&!f){var v=/./[p],x=n(p,""[e],(function(e,t,n,c,r){return t.exec===a?O&&!r?{done:!0,value:v.call(t,n,c)}:{done:!0,value:e.call(n,t,c)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:b}),g=x[0],y=x[1];c(String.prototype,e,g),c(RegExp.prototype,p,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&i(RegExp.prototype[p],"sham",!0)}},f5be:function(e,t,n){"use strict";n.r(t);var c=n("3835"),r=n("7a23"),l=Object(r["I"])("data-v-4998f654");Object(r["u"])("data-v-4998f654");var a={class:"section col small"},i={class:"row-1 lects fill"},u={class:"col lect"},o={class:"row"},s={class:"flex"},d={class:"col lect"},b=Object(r["g"])("hr",null,null,-1),f={class:"text-faded translation"},p=Object(r["g"])("hr",null,null,-1);Object(r["s"])();var O=l((function(e,t,n,l,O,j){var v=Object(r["z"])("btn"),x=Object(r["z"])("Flag"),g=Object(r["z"])("EntryCard");return Object(r["r"])(),Object(r["d"])("div",a,[Object(r["g"])("div",i,[Object(r["g"])("div",u,[Object(r["g"])("div",o,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.queryModes,(function(t){var n=Object(c["a"])(t,2),l=n[0],a=n[1];return Object(r["r"])(),Object(r["d"])(v,{key:l,text:e.queryMode===l?l:"",icon:a,class:e.queryMode===l&&"highlight flex",onClick:function(){e.queryMode=l,e.lect=""}},null,8,["text","icon","class","onClick"])})),128))]),"Lists"===e.queryMode?Object(r["H"])((Object(r["r"])(),Object(r["d"])("select",{key:0,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.queries[""]=t})},[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.dictionaryMeta.lists,(function(e,t){return Object(r["r"])(),Object(r["d"])("option",{key:t,value:e},Object(r["B"])(t),9,["value"])})),128))],512)),[[r["D"],e.queries[""]]]):Object(r["H"])((Object(r["r"])(),Object(r["d"])("input",{key:1,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.queries[""]=t}),class:"selectable",type:"text",placeholder:"Search...",readonly:!!e.lect,onClick:t[3]||(t[3]=function(t){return e.lect=""})},null,8,["readonly"])),[[r["E"],e.queries[""]]])]),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.lects,(function(t){return Object(r["r"])(),Object(r["d"])("div",{key:t,class:"col lect flag"},[Object(r["g"])(x,{lect:t,class:"blur"},null,8,["lect"]),Object(r["g"])("h2",s,Object(r["B"])(t),1),Object(r["H"])(Object(r["g"])("input",{"onUpdate:modelValue":function(n){return e.queries[t]=n},class:"selectable",type:"text",placeholder:"Search by ".concat(t," form..."),readonly:e.lect!==t,onClick:function(n){return e.lect=t}},null,8,["onUpdate:modelValue","placeholder","readonly","onClick"]),[[r["E"],e.queries[t]]])])})),128))]),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.searchResult,(function(t,n){return Object(r["r"])(),Object(r["d"])("div",{key:n,class:"row-1 lects"},[Object(r["g"])("div",d,[b,Object(r["g"])("i",f,Object(r["B"])(n),1)]),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.lects,(function(e){return Object(r["r"])(),Object(r["d"])("div",{key:e,class:"col lect"},[p,(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(t[e],(function(e,t){return Object(r["r"])(),Object(r["d"])(g,{key:t,entry:e},null,8,["entry"])})),128))])})),128))])})),128))])})),j=(n("b64b"),n("4de4"),n("d81d"),n("1276"),n("ac1f"),n("498a"),n("9041")),v=Object(r["I"])("data-v-5f1fbe62");Object(r["u"])("data-v-5f1fbe62");var x={key:0,class:"col"},g={class:"row"},y={key:0,class:"col card"},h={class:"col-0"},m={class:"text-ipa"},E={key:0},k={class:"text-faded text-caption"},R={class:"text-faded text-caption"};Object(r["s"])();var I=v((function(e,t,n,l,a,i){var u=Object(r["z"])("btn");return e.entry&&e.expand>=0?(Object(r["r"])(),Object(r["d"])("div",x,[Object(r["g"])("div",g,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.views,(function(t,n){var l=Object(c["a"])(t,2),a=l[0],i=l[1];return Object(r["r"])(),Object(r["d"])(u,{key:i,icon:i,text:e.expand===n?a:"",class:e.expand===n&&"highlight flex",onClick:function(t){return e.expand=e.expand===n?-1:n}},null,8,["icon","text","class","onClick"])})),128))]),e.expand>=0?(Object(r["r"])(),Object(r["d"])("div",y,[0===e.expand?(Object(r["r"])(),Object(r["d"])(r["a"],{key:0},[Object(r["g"])("p",h,[Object(r["f"])(Object(r["B"])(e.entry.forms[0].text.plain)+" ",1),Object(r["g"])("span",m,Object(r["B"])(e.entry.forms[0].text.ipa),1)]),e.entry.explanation?(Object(r["r"])(),Object(r["d"])("p",E,Object(r["B"])(e.entry.explanation),1)):Object(r["e"])("",!0)],64)):1===e.expand?(Object(r["r"])(!0),Object(r["d"])(r["a"],{key:1},Object(r["x"])(e.entry.forms,(function(e,t){return Object(r["r"])(),Object(r["d"])("div",{key:t,class:"col-0"},[Object(r["f"])(Object(r["B"])(e.text.plain)+Object(r["B"])(e.text.glossed)+" ",1),Object(r["g"])("span",k,Object(r["B"])(e.grammar),1)])})),128)):2===e.expand?(Object(r["r"])(!0),Object(r["d"])(r["a"],{key:2},Object(r["x"])(e.entry.samples,(function(e,t){return Object(r["r"])(),Object(r["d"])("div",{key:t,class:"col-0"},[Object(r["g"])("p",null,Object(r["B"])(e.text.plain),1),Object(r["g"])("p",R,Object(r["B"])(e.translation),1)])})),128)):Object(r["e"])("",!0)])):Object(r["e"])("",!0)])):e.entry?(Object(r["r"])(),Object(r["d"])(u,{key:1,text:e.plain,onClick:t[1]||(t[1]=function(t){return e.expand=0})},null,8,["text"])):Object(r["e"])("",!0)})),w=Object(r["h"])({name:"EntryCard",props:{entry:{type:Object,default:void 0}},setup:function(e){var t=Object(r["w"])(-1),n=[["Info","info"],["Forms","tune"],["Samples","speaker_notes"]],c=Object(r["b"])((function(){var t;return null===(t=e.entry)||void 0===t?void 0:t.forms[0].text.plain}));return{expand:t,plain:c,views:n}}});n("9cbc");w.render=I,w.__scopeId="data-v-5f1fbe62";var C=w,_=n("f929"),S=Object(r["h"])({components:{EntryCard:C,Flag:_["a"]},setup:function(){var e=Object(r["v"])({}),t=Object(r["w"])("Translations"),n=Object(r["w"])(""),c=Object(r["b"])((function(){return Object.keys(j["a"].value)})),l=Object(r["b"])((function(){var c,r;return Object(j["c"])(n.value,null!==(c=null===(r=e[n.value])||void 0===r?void 0:r.toLowerCase().split(",").map((function(e){return e.trim()})).filter((function(e){return e})))&&void 0!==c?c:[],t.value)})),a=[["Translations","bookmark_border"],["Tags","label"],["Lists","format_list_bulleted"]];return{queryModes:a,dictionaries:j["a"],lects:c,queries:e,queryMode:t,lect:n,searchResult:l,dictionaryMeta:j["b"]}}});n("0905");S.render=O,S.__scopeId="data-v-4998f654";t["default"]=S},f929:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["I"])("data-v-54304c3e"),l=r((function(e,t,n,r,l,a){return e.lect?(Object(c["r"])(),Object(c["d"])("img",{key:0,src:e.src,class:"no-select"},null,8,["src"])):Object(c["e"])("",!0)})),a=n("3a0b"),i=Object(c["h"])({props:{lect:{type:String,default:""}},setup:function(e){var t=Object(c["b"])((function(){return a["d"]+e.lect+"/flag.png"}));return{src:t}}});n("21ae"),n("c178");i.render=l,i.__scopeId="data-v-54304c3e";t["a"]=i}}]);