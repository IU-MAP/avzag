(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba1b15c8"],{"886c":function(e,t,n){},acdc:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),r=Object(c["I"])("data-v-be8e1ed0");Object(c["u"])("data-v-be8e1ed0");var a={id:"root",class:"small"},i={class:"section row scroll"},o={class:"row"},u={href:"https://github.com/alkaitagi/Avzag/wiki",class:"wrap"},l={class:"row"};Object(c["s"])();var s=r((function(e,t,n,s,b,O){var f=Object(c["z"])("btn"),d=Object(c["z"])("router-link"),j=Object(c["z"])("ConfirmButton"),m=Object(c["z"])("router-view");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",a,[Object(c["g"])("div",i,[Object(c["g"])("div",o,[Object(c["g"])(d,{to:"/home"},{default:r((function(){return[Object(c["g"])(f,{icon:"arrow_back"})]})),_:1}),Object(c["H"])(Object(c["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.menu=t})},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(e.menus,(function(e){var t=e.text,n=e.name;return Object(c["r"])(),Object(c["d"])("option",{key:n,value:n},Object(c["B"])(t),9,["value"])})),128))],512),[[c["D"],e.menu]]),Object(c["g"])("a",u,[Object(c["g"])(f,{icon:"help_outline"})])]),Object(c["g"])("div",l,[Object(c["g"])(f,{icon:"language",onClick:e.loadLect},null,8,["onClick"]),Object(c["g"])(f,{icon:"code",onClick:e.loadJSON},null,8,["onClick"]),Object(c["g"])(f,{icon:"integration_instructions",onClick:e.saveJSON},null,8,["onClick"]),Object(c["g"])(j,{message:"Reset file?",onConfirm:e.resetFile},null,8,["onConfirm"])])])]),Object(c["g"])(m)],64)})),b=n("1da1");n("96cf");function O(e,t,n,r,a,i){var o=Object(c["z"])("btn");return Object(c["r"])(),Object(c["d"])(o,{class:"highlight-font-alert",icon:e.icon,text:e.text,onClick:e.confirm},null,8,["icon","text","onClick"])}var f=Object(c["h"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(e,t){var n=t.emit;function c(){window.confirm(e.message)&&n("confirm")}return{confirm:c}}});f.render=O;var d=f,j=n("6c02"),m=n("3a0b"),p={defaultFile:{},storage:"",filename:""},g=Object(c["w"])();function v(){g.value=JSON.parse(JSON.stringify(p.defaultFile))}var w=Object(c["h"])({components:{ConfirmButton:d},setup:function(){var e,t=Object(j["c"])(),n=Object(j["d"])(),r=[{text:"Dictionary",name:"DictionaryEditor"}],a=Object(c["w"])(null!==(e=t.name)&&void 0!==e?e:r[0].name);function i(){return o.apply(this,arguments)}function o(){return o=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("string"!==typeof p.filename){e.next=9;break}if(n=window.prompt("Enter lect name"),n){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Object(m["b"])(n+"/"+p.filename);case 6:t=e.sent,e.next=12;break;case 9:return e.next=11,Object(m["b"])(p.filename());case 11:t=e.sent;case 12:t&&(g.value=t);case 13:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function u(){var e,t=JSON.parse(null!==(e=window.prompt("Enter JSON"))&&void 0!==e?e:"0");t&&(g.value=t)}function l(){navigator.clipboard.writeText(JSON.stringify(g.value,null,2)+"\n")}return Object(c["F"])(a,(function(e){return n.push({name:e})})),{menu:a,menus:r,loadLect:i,loadJSON:u,saveJSON:l,resetFile:v}}});n("ae41");w.render=s,w.__scopeId="data-v-be8e1ed0";t["default"]=w},ae41:function(e,t,n){"use strict";n("886c")}}]);