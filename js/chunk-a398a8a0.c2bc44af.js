(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a398a8a0"],{"0e32":function(e,t,n){"use strict";n("a434");var o=n("7a23");function c(e,t,n,c,a,r){var l=Object(o["A"])("ArrayControl"),u=Object(o["A"])("btn"),i=Object(o["A"])("EditorCard");return Object(o["r"])(),Object(o["d"])(i,{icon:"sticky_note_2",header:"Notes"},{header:Object(o["L"])((function(){return[Object(o["g"])(l,{modelValue:e.notes,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.notes=t}),add:""},null,8,["modelValue"])]})),caption:Object(o["L"])((function(){return[Object(o["z"])(e.$slots,"default")]})),default:Object(o["L"])((function(){return[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.notes,(function(t,n){return Object(o["r"])(),Object(o["d"])("div",{key:n,class:"row"},[Object(o["M"])(Object(o["g"])("input",{"onUpdate:modelValue":function(t){return e.notes[n]=t},type:"text",placeholder:"note #"+n},null,8,["onUpdate:modelValue","placeholder"]),[[o["H"],e.notes[n]]]),Object(o["g"])(u,{icon:"clear",onClick:function(t){return e.notes.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})}var a=n("7694"),r=n("b5cc"),l=Object(o["h"])({name:"NotesEditor",components:{ArrayControl:r["a"],EditorCard:a["a"]},props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(o["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});return{notes:c}}});l.render=c;t["a"]=l},"13d5":function(e,t,n){"use strict";var o=n("23e7"),c=n("d58f").left,a=n("a640"),r=n("ae40"),l=n("2d00"),u=n("605d"),i=a("reduce"),d=r("reduce",{1:0}),b=!u&&l>79&&l<83;o({target:"Array",proto:!0,forced:!i||!d||b},{reduce:function(e){return c(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},7883:function(e,t,n){"use strict";n("edf2")},a1df:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),c=Object(o["N"])("data-v-c153ba04");Object(o["u"])("data-v-c153ba04");var a={key:0,class:"section col-2 small grid"},r={class:"col-2"},l={class:"col"},u={class:"col"},i={class:"row"},d=Object(o["g"])("p",{class:"icon"},"topic",-1),b={class:"col flex"},s={key:0,class:"row"},O=Object(o["g"])("p",{class:"icon"},"short_text",-1),j=Object(o["g"])("hr",null,null,-1),f=Object(o["g"])("p",{class:"text-faded text-caption"}," The source corpus is loading from what is saved on Phrasebook Corpus editor page. ",-1),p=Object(o["f"])(" You can add notes, for example, to explain certain grammatical rules. ");Object(o["s"])();var v=c((function(e,t,n,v,m,h){var k,g,y=Object(o["A"])("VContext"),x=Object(o["A"])("Block"),V=Object(o["A"])("BlocksOrderEditor"),C=Object(o["A"])("NotesEditor"),w=Object(o["A"])("ContextTranslationEditor"),A=Object(o["A"])("BlockEditor");return e.file&&e.corpus?(Object(o["r"])(),Object(o["d"])("div",a,[Object(o["g"])("div",r,[Object(o["g"])("div",l,[Object(o["g"])("div",u,[Object(o["g"])("div",i,[d,Object(o["g"])("h2",b,[Object(o["M"])(Object(o["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.section=t})},[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.corpus,(function(e){return Object(o["r"])(),Object(o["d"])("option",{key:e.name,value:e},Object(o["C"])(e.name),9,["value"])})),128))],512),[[o["G"],e.section]])])]),e.section?(Object(o["r"])(),Object(o["d"])("div",s,[O,Object(o["M"])(Object(o["g"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.phrase=t})},[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.section.phrases,(function(e){return Object(o["r"])(),Object(o["d"])("option",{key:e.id,value:e},Object(o["C"])(e.name),9,["value"])})),128))],512),[[o["G"],e.phrase]])])):Object(o["e"])("",!0)]),j,f,Object(o["g"])(y),e.phrase?(Object(o["r"])(),Object(o["d"])("div",{key:e.phrase.id,class:"row wrap flex"},[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(e.phrase.blocks,(function(e,t){return Object(o["r"])(),Object(o["d"])(x,{key:t,block:e},null,8,["block"])})),128))])):Object(o["e"])("",!0)]),e.translation?(Object(o["r"])(),Object(o["d"])(o["a"],{key:0},[Object(o["g"])(V,{key:null===(k=e.phrase)||void 0===k?void 0:k.id,modelValue:e.block,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.block=t}),phrase:e.translation,"onUpdate:phrase":t[4]||(t[4]=function(t){return e.translation=t})},null,8,["modelValue","phrase"]),Object(o["g"])(C,{modelValue:e.translation.notes,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.translation.notes=t})},{default:c((function(){return[p]})),_:1},8,["modelValue"]),Object(o["g"])(w,{modelValue:e.translation.context,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.translation.context=t})},null,8,["modelValue"])],64)):Object(o["e"])("",!0)]),e.block?(Object(o["r"])(),Object(o["d"])(A,{key:null===(g=e.phrase)||void 0===g?void 0:g.id,modelValue:e.block,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.block=t})},null,8,["modelValue"])):Object(o["e"])("",!0)])):Object(o["e"])("",!0)})),m=n("3835"),h=n("0e32"),k=n("5794"),g=n("72e9"),y=n("428a"),x=n("9362"),V=Object(o["N"])("data-v-02de8f76");Object(o["u"])("data-v-02de8f76");var C=Object(o["f"])(" Translate the context tags to show localized hints when needed. "),w={class:"text-caption"},A={class:"row wrap"};Object(o["s"])();var E=V((function(e,t,n,c,a,r){var l=Object(o["A"])("ConfirmButton"),u=Object(o["A"])("btn"),i=Object(o["A"])("EditorCard");return Object(o["r"])(),Object(o["d"])(i,{icon:"list_alt",header:"context translation"},{header:V((function(){return[e.translation?(Object(o["r"])(),Object(o["d"])(l,{key:0,onConfirm:t[1]||(t[1]=function(t){return e.translation=void 0})})):(Object(o["r"])(),Object(o["d"])(u,{key:1,icon:"add",onClick:e.create},null,8,["onClick"]))]})),caption:V((function(){return[C]})),default:V((function(){return[e.translation?(Object(o["r"])(!0),Object(o["d"])(o["a"],{key:0},Object(o["y"])(e.context,(function(t,n){var c=t.entity,a=t.tags;return Object(o["r"])(),Object(o["d"])("div",{key:c,class:["col","colored-dot-"+n]},[Object(o["g"])("h2",w,Object(o["C"])(c),1),Object(o["g"])("div",A,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(a,(function(t){return Object(o["M"])((Object(o["r"])(),Object(o["d"])("input",{key:t,"onUpdate:modelValue":function(n){return e.translation[c][t]=n},size:e.getSize(c,t),placeholder:t,type:"text"},null,8,["onUpdate:modelValue","size","placeholder"])),[[o["H"],e.translation[c][t]]])})),128))])],2)})),128)):Object(o["e"])("",!0)]})),_:1})})),U=(n("13d5"),n("04d4")),_=n("7694"),B=Object(o["h"])({name:"TranslationEditor",components:{ConfirmButton:U["a"],EditorCard:_["a"]},props:{modelValue:{type:Object,default:void 0}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(o["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}}),a=Object(o["k"])("contextSource",{});function r(){null!==a&&void 0!==a&&a.value&&(c.value=a.value.reduce((function(e,t){var n=t.entity;return e[n]={},e}),{}))}function l(e,t){var n,o;if(c.value){var a=null!==(n=null===(o=c.value[e][t])||void 0===o?void 0:o.length)&&void 0!==n?n:0;return a>0?a:t.length}}return{translation:c,context:a,create:r,getSize:l}}});n("7883");B.render=E,B.__scopeId="data-v-02de8f76";var J=B,N=n("3a0b"),z=n("9392"),S=n("7ec3"),T=Object(o["h"])({components:{VContext:k["a"],Block:g["a"],NotesEditor:h["a"],BlocksOrderEditor:y["a"],BlockEditor:x["a"],ContextTranslationEditor:J},setup:function(){var e,t=Object(o["x"])([]);t.value=JSON.parse(null!==(e=localStorage["editor.phrasebookCorpus"])&&void 0!==e?e:"[]"),t.value.length||Object(N["b"])("phrasebook").then((function(e){return t.value=e}));var n=Object(o["x"])(void 0),c=Object(o["x"])(void 0),a=Object(o["x"])({}),r=Object(o["x"])(void 0),l=Object(z["d"])({defaultFile:{},filename:"phrasebook",storage:"editor.phrasebook"}),u=Object(o["b"])((function(){var e;return null===(e=c.value)||void 0===e?void 0:e.context})),i=Object(o["x"])({});return Object(o["t"])("contextSource",u),Object(o["t"])("context",i),Object(o["J"])(u,(function(e){return Object(S["c"])(i,e)}),{immediate:!0}),Object(o["J"])(t,(function(e){return n.value=e[e.length-1]}),{immediate:!0}),Object(o["J"])(n,(function(e){null!==e&&void 0!==e&&e.phrases&&(c.value=e.phrases[e.phrases.length-1])}),{immediate:!0}),Object(o["J"])([c,l],(function(e){var t=Object(m["a"])(e,1),n=t[0];n&&(l.value[n.id]||(l.value[n.id]={blocks:[]}),a.value=l.value[n.id])}),{immediate:!0}),Object(o["J"])(a,(function(e){var t;return r.value=null===e||void 0===e||null===(t=e.blocks)||void 0===t?void 0:t[e.blocks.length-1]}),{immediate:!0}),{file:l,corpus:t,section:n,phrase:c,translation:a,block:r}}});n("b7d4");T.render=v,T.__scopeId="data-v-c153ba04";t["default"]=T},b7d4:function(e,t,n){"use strict";n("ddd7")},d58f:function(e,t,n){var o=n("1c0b"),c=n("7b0b"),a=n("44ad"),r=n("50c4"),l=function(e){return function(t,n,l,u){o(n);var i=c(t),d=a(i),b=r(i.length),s=e?b-1:0,O=e?-1:1;if(l<2)while(1){if(s in d){u=d[s],s+=O;break}if(s+=O,e?s<0:b<=s)throw TypeError("Reduce of empty array with no initial value")}for(;e?s>=0:b>s;s+=O)s in d&&(u=n(u,d[s],s,i));return u}};e.exports={left:l(!1),right:l(!0)}},ddd7:function(e,t,n){},edf2:function(e,t,n){}}]);