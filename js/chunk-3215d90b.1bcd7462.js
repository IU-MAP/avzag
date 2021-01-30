(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3215d90b"],{"04d4":function(e,t,n){"use strict";var o=n("7a23");function r(e,t,n,r,a,c){var i=Object(o["B"])("btn");return Object(o["s"])(),Object(o["d"])(i,{class:"highlight-font-alert",icon:e.icon,text:e.text,onClick:e.confirm},null,8,["icon","text","onClick"])}var a=Object(o["i"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(e,t){var n=t.emit;function o(){window.confirm(e.message)&&n("confirm")}return{confirm:o}}});a.render=r;t["a"]=a},"09a7":function(e,t,n){},"0a68":function(e,t,n){"use strict";n("3266")},"0e32":function(e,t,n){"use strict";n("a434");var o=n("7a23");function r(e,t,n,r,a,c){var i=Object(o["B"])("ArrayControl"),u=Object(o["B"])("btn"),l=Object(o["B"])("EditorCard");return Object(o["s"])(),Object(o["d"])(l,{icon:"sticky_note_2",header:"Notes"},{header:Object(o["M"])((function(){return[Object(o["h"])(i,{modelValue:e.notes,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.notes=t}),add:""},null,8,["modelValue"])]})),caption:Object(o["M"])((function(){return[Object(o["A"])(e.$slots,"default")]})),default:Object(o["M"])((function(){return[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["z"])(e.notes,(function(t,n){return Object(o["s"])(),Object(o["d"])("div",{key:n,class:"row"},[Object(o["N"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return e.notes[n]=t},type:"text"},null,8,["onUpdate:modelValue"]),[[o["I"],e.notes[n]]]),Object(o["h"])(u,{icon:"clear",onClick:function(t){return e.notes.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})}var a=n("7694"),c=n("b5cc"),i=Object(o["i"])({name:"NotesEditor",components:{ArrayControl:c["a"],EditorCard:a["a"]},props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=Object(o["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});return{notes:r}}});i.render=r;t["a"]=i},3266:function(e,t,n){},4929:function(e,t,n){"use strict";n.r(t);n("a434");var o=n("7a23"),r=Object(o["O"])("data-v-d9690c2e");Object(o["v"])("data-v-d9690c2e");var a={class:"section col-2 small grid"},c={class:"row wrap"},i={key:0,class:"col-2 small"},u=Object(o["g"])(" You can add notes to clarify certain use cases or to give some additional info. "),l=Object(o["g"])(" Use cases of the phoneme within the language, defined by a letter, a word, and the word's ipa. ");Object(o["t"])();var d=r((function(e,t,n,d,s,f){var p=Object(o["B"])("ArrayControl"),b=Object(o["B"])("TableEntry"),O=Object(o["B"])("EditorCard"),m=Object(o["B"])("NotesEditor"),j=Object(o["B"])("btn");return Object(o["s"])(),Object(o["d"])("div",a,[Object(o["h"])(O,{icon:"view_comfy",header:"Phonemes"},{header:r((function(){return[Object(o["h"])(p,{modelValue:e.file,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.file=t}),item:e.phoneme,"onUpdate:item":t[2]||(t[2]=function(t){return e.phoneme=t}),add:{},remove:""},null,8,["modelValue","item"])]})),default:r((function(){return[Object(o["h"])("div",c,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["z"])(e.file,(function(t,n){return Object(o["s"])(),Object(o["d"])(b,{key:n,selected:e.phoneme===t,ipa:t.phoneme,str:e.graphemes[n],onClick:function(n){return e.phoneme=t}},null,8,["selected","ipa","str","onClick"])})),128))])]})),_:1}),e.phoneme?(Object(o["s"])(),Object(o["d"])("div",i,[Object(o["h"])(O,{icon:"hearing",header:"Phoneme"},{default:r((function(){return[Object(o["N"])(Object(o["h"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phoneme.phoneme=t}),type:"text",class:"text-ipa",placeholder:"phoneme"},null,512),[[o["I"],e.phoneme.phoneme]])]})),_:1}),Object(o["h"])(m,{modelValue:e.phoneme.notes,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.phoneme.notes=t})},{default:r((function(){return[u]})),_:1},8,["modelValue"]),Object(o["h"])(O,{header:"Samples",icon:"playlist_play"},{header:r((function(){return[Object(o["h"])(p,{modelValue:e.phoneme.samples,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.phoneme.samples=t}),add:{}},null,8,["modelValue"])]})),caption:r((function(){return[l]})),default:r((function(){return[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["z"])(e.phoneme.samples,(function(t,n){return Object(o["s"])(),Object(o["d"])("div",{key:n,class:"row sample"},[Object(o["N"])(Object(o["h"])("input",{"onUpdate:modelValue":function(e){return t.grapheme=e},type:"text",placeholder:"grapheme"},null,8,["onUpdate:modelValue"]),[[o["I"],t.grapheme]]),Object(o["N"])(Object(o["h"])("input",{"onUpdate:modelValue":function(e){return t.word=e},class:"flex",type:"text",placeholder:"word"},null,8,["onUpdate:modelValue"]),[[o["I"],t.word]]),Object(o["N"])(Object(o["h"])("input",{"onUpdate:modelValue":function(e){return t.ipa=e},class:"flex text-ipa",type:"text",placeholder:"ipa"},null,8,["onUpdate:modelValue"]),[[o["I"],t.ipa]]),Object(o["h"])(j,{icon:"clear",onClick:function(t){return e.phoneme.samples.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})])):Object(o["e"])("",!0)])})),s=(n("d81d"),n("b5cc")),f=n("7694"),p=n("ab04"),b=n("0e32"),O=n("9392"),m=Object(o["i"])({components:{ArrayControl:s["a"],EditorCard:f["a"],TableEntry:p["a"],NotesEditor:b["a"]},setup:function(){var e=Object(o["y"])(),t=Object(O["d"])({defaultFile:[],filename:"phonology",storage:"editor.phonology"}),n=Object(o["b"])((function(){return t.value.map((function(e){var t,n=e.samples;return null===n||void 0===n||null===(t=n[0])||void 0===t?void 0:t.grapheme}))}));return{file:t,phoneme:e,graphemes:n}}});n("bf30");m.render=d,m.__scopeId="data-v-d9690c2e";t["default"]=m},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),r=n("5899"),a="["+r+"]",c=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),u=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"595b":function(e,t,n){"use strict";n("09a7")},7156:function(e,t,n){var o=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var a,c;return r&&"function"==typeof(a=t.constructor)&&a!==n&&o(c=a.prototype)&&c!==n.prototype&&r(e,c),e}},7694:function(e,t,n){"use strict";var o=n("7a23"),r=Object(o["O"])("data-v-4097eb6a");Object(o["v"])("data-v-4097eb6a");var a={class:"col"},c={class:"row card-0"},i={class:"icon"},u={class:"flex"},l={key:0,class:"text-caption text-faded"},d={class:"col"};Object(o["t"])();var s=r((function(e,t,n,r,s,f){return Object(o["s"])(),Object(o["d"])("div",a,[Object(o["h"])("div",c,[Object(o["h"])("p",i,Object(o["D"])(e.icon),1),Object(o["h"])("h2",u,Object(o["D"])(e.header),1),Object(o["A"])(e.$slots,"header")]),e.caption?(Object(o["s"])(),Object(o["d"])("p",l,[Object(o["A"])(e.$slots,"caption")])):Object(o["e"])("",!0),Object(o["h"])("div",d,[Object(o["A"])(e.$slots,"default")])])})),f=Object(o["i"])({name:"EditorCard",props:{button:{type:String,default:"add"},icon:{type:String,default:""},header:{type:String,default:""}},emits:["action"],setup:function(e,t){var n=t.emit,o=t.slots;return{emit:n,caption:o.caption}}});n("0a68");f.render=s,f.__scopeId="data-v-4097eb6a";t["a"]=f},9392:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u}));var o=n("7a23"),r={defaultFile:{},storage:"",filename:""},a=Object(o["y"])();function c(){a.value=JSON.parse(JSON.stringify(r.defaultFile))}function i(){localStorage[r.storage]=JSON.stringify(a.value)}function u(e){Object.assign(r,e);try{a.value=JSON.parse(localStorage[r.storage])}catch(t){c()}return Object(o["K"])(a,i,{deep:!0}),a}},a434:function(e,t,n){"use strict";var o=n("23e7"),r=n("23cb"),a=n("a691"),c=n("50c4"),i=n("7b0b"),u=n("65f0"),l=n("8418"),d=n("1dde"),s=n("ae40"),f=d("splice"),p=s("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,O=Math.min,m=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var n,o,d,s,f,p,h=i(this),v=c(h.length),y=r(e,v),g=arguments.length;if(0===g?n=o=0:1===g?(n=0,o=v-y):(n=g-2,o=O(b(a(t),0),v-y)),v+n-o>m)throw TypeError(j);for(d=u(h,o),s=0;s<o;s++)f=y+s,f in h&&l(d,s,h[f]);if(d.length=o,n<o){for(s=y;s<v-o;s++)f=s+o,p=s+n,f in h?h[p]=h[f]:delete h[p];for(s=v;s>v-o+n;s--)delete h[s-1]}else if(n>o)for(s=v-o;s>y;s--)f=s+o-1,p=s+n-1,f in h?h[p]=h[f]:delete h[p];for(s=0;s<n;s++)h[s+y]=arguments[s+2];return h.length=v-o+n,d}})},a640:function(e,t,n){"use strict";var o=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,n){"use strict";var o=n("83ab"),r=n("da84"),a=n("94ca"),c=n("6eeb"),i=n("5135"),u=n("c6b6"),l=n("7156"),d=n("c04e"),s=n("d039"),f=n("7c73"),p=n("241c").f,b=n("06cf").f,O=n("9bf2").f,m=n("58a8").trim,j="Number",h=r[j],v=h.prototype,y=u(f(v))==j,g=function(e){var t,n,o,r,a,c,i,u,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+l}for(a=l.slice(2),c=a.length,i=0;i<c;i++)if(u=a.charCodeAt(i),u<48||u>r)return NaN;return parseInt(a,o)}return+l};if(a(j,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var x,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(y?s((function(){v.valueOf.call(n)})):u(n)!=j)?l(new h(g(t)),n,S):g(t)},N=o?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;N.length>C;C++)i(h,x=N[C])&&!i(S,x)&&O(S,x,b(h,x));S.prototype=v,v.constructor=S,c(r,j,S)}},ab04:function(e,t,n){"use strict";var o=n("7a23"),r=Object(o["O"])("data-v-143c97ea"),a=r((function(e,t,n,r,a,c){return Object(o["s"])(),Object(o["d"])("button",{class:[{"text-faded":e.faded,highlight:e.selected},"col-0"]},[Object(o["h"])("b",null,Object(o["D"])(e.str),1),Object(o["h"])("span",{class:["text-ipa",{"text-faded":e.str}]},Object(o["D"])(e.ipa),3)],2)})),c=Object(o["i"])({props:{selected:Boolean,faded:Boolean,ipa:{type:String,default:""},str:{type:String,default:""}}});n("595b");c.render=a,c.__scopeId="data-v-143c97ea";t["a"]=c},b5cc:function(e,t,n){"use strict";var o=n("7a23"),r={class:"row"},a={key:1,class:"row-0"};function c(e,t,n,c,i,u){var l=Object(o["B"])("btn"),d=Object(o["B"])("ConfirmButton");return Object(o["s"])(),Object(o["d"])("div",r,[void 0!==e.add?(Object(o["s"])(),Object(o["d"])(l,{key:0,icon:"add",onClick:e.action.add},null,8,["onClick"])):Object(o["e"])("",!0),e.array&&e.item?(Object(o["s"])(),Object(o["d"])(o["a"],{key:1},[e.copy?(Object(o["s"])(),Object(o["d"])(l,{key:0,icon:"queue",onClick:e.action.copy},null,8,["onClick"])):Object(o["e"])("",!0),e.shift?(Object(o["s"])(),Object(o["d"])("div",a,[Object(o["h"])(l,{icon:"keyboard_arrow_up",onClick:t[1]||(t[1]=function(t){return e.action.shift(-1)})}),Object(o["h"])(l,{icon:"keyboard_arrow_down",onClick:t[2]||(t[2]=function(t){return e.action.shift(1)})})])):Object(o["e"])("",!0),e.remove?(Object(o["s"])(),Object(o["d"])(d,{key:2,onConfirm:e.action.remove},null,8,["onConfirm"])):Object(o["e"])("",!0)],64)):Object(o["e"])("",!0)])}n("c975"),n("a434"),n("a9e3"),n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}n("96cf");var u=n("1da1"),l=n("04d4"),d=Object(o["i"])({name:"ArrayControl",components:{ConfirmButton:l["a"]},props:{modelValue:{type:Array,default:function(){}},item:{type:Object,default:void 0},add:{type:[Number,String,Object,Function],default:void 0},copy:Boolean,shift:Boolean,remove:Boolean},emits:["update:modelValue","update:item"],setup:function(e,t){var n=t.emit,r=Object(o["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function a(){n("update:item",r.value?r.value[r.value.length-1]:void 0)}function c(){return l.apply(this,arguments)}function l(){return l=Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.add,void 0!==!n){t.next=3;break}return t.abrupt("return");case 3:if(r.value){t.next=7;break}return r.value=[],t.next=7,Object(o["n"])();case 7:n="function"===typeof n?n():"object"===i(n)?JSON.parse(JSON.stringify(n)):n,r.value.push(n),a();case 10:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(){var t=JSON.parse(JSON.stringify(Object(o["E"])(e.item)));r.value.push(t),a()}function s(t){var n=r.value.length,a=e.item,c=r.value.indexOf(Object(o["E"])(a)),i=(c+t+n)%n;r.value.splice(c,1),r.value.splice(i,0,a)}function f(){var t=r.value.indexOf(Object(o["E"])(e.item));r.value.splice(t,1),a()}return Object(o["K"])(r,a,{immediate:!0}),{array:r,action:{add:c,copy:d,shift:s,remove:f}}}});d.render=c;t["a"]=d},bf30:function(e,t,n){"use strict";n("eea3")},c975:function(e,t,n){"use strict";var o=n("23e7"),r=n("4d64").indexOf,a=n("a640"),c=n("ae40"),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:u||!l||!d},{indexOf:function(e){return u?i.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},d81d:function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").map,a=n("1dde"),c=n("ae40"),i=a("map"),u=c("map");o({target:"Array",proto:!0,forced:!i||!u},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},eea3:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3215d90b.1bcd7462.js.map