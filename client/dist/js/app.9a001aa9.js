(function(a){function t(t){for(var e,s,o=t[0],c=t[1],l=t[2],g=0,u=[];g<o.length;g++)s=o[g],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e]);h&&h(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var a,t=0;t<i.length;t++){for(var r=i[t],e=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(e=!1)}e&&(i.splice(t--,1),a=s(s.s=r[0]))}return a}var e={},n={app:0},i=[];function s(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return a[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=a,s.c=e,s.d=function(a,t,r){s.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:r})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,t){if(1&t&&(a=s(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)s.d(r,e,function(t){return a[t]}.bind(null,e));return r},s.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(t,"a",t),t},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=c;i.push([0,"chunk-vendors"]),r()})({0:function(a,t,r){a.exports=r("56d7")},"087f":function(a,t,r){},"564b":function(a,t,r){"use strict";var e=r("087f"),n=r.n(e);n.a},"56d7":function(a,t,r){"use strict";r.r(t);var e=r("2b0e"),n=r("bc3a"),i=r.n(n);let s={};const o=i.a.create(s);o.interceptors.request.use((function(a){return a}),(function(a){return Promise.reject(a)})),o.interceptors.response.use((function(a){return a}),(function(a){return Promise.reject(a)})),Plugin.install=function(a,t){a.axios=o,window.axios=o,Object.defineProperties(a.prototype,{axios:{get(){return o}},$axios:{get(){return o}}})},e["a"].use(Plugin);Plugin;var c=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-app",[r("v-container",{staticClass:"fill-height app-background pa-0",attrs:{fluid:""}},[r("Navbar",{on:{"select-game":a.selectGame}}),r("v-content",{staticClass:"fill-height"},[r("Game",{attrs:{typegame:a.typegame}})],1)],1)],1)},l=[],h=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-row",{staticClass:"fill-height ml-0 mr-0",attrs:{justify:"center",align:"center"}},[r("PreGame",{directives:[{name:"show",rawName:"v-show",value:a.showPreGame,expression:"showPreGame"}],attrs:{gametypeconfig:a.typegame},on:{"start-game":a.startGame}}),a.showPreGame||a.isEndGame?a._e():r("KanaCard",{attrs:{config:a.config},on:{"end-game":a.endGame}}),a.isEndGame?r("EndGame",{attrs:{examResult:a.examResult}}):a._e()],1)},g=[],u=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-card",{attrs:{width:"250",height:"350"}},[r("v-row",{staticClass:"fill-height d-flex flex-column",attrs:{"no-gutters":""}},[r("v-row",{staticClass:"caption",attrs:{"no-gutters":"",align:"center",justify:"center"}},[a._v(a._s(a.currentPos)+"/"+a._s(a.examLength))]),r("v-row",{attrs:{"no-gutters":"",justify:"center"}},[r("v-slide-x-transition",{attrs:{mode:"out-in"}},[r("v-card",{attrs:{width:"200",height:"200"}},[r("v-row",{staticClass:"fill-height",attrs:{justify:"center",align:"center","no-gutters":""}},[r("div",{staticClass:"display-4"},[a._v(a._s(a.currentKana))])])],1)],1)],1),r("v-row",{staticClass:"pl-7 pr-7",attrs:{"no-gutters":""}},[r("v-text-field",{staticClass:"centered-input",on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.submit(t)}},model:{value:a.answer,callback:function(t){a.answer=t},expression:"answer"}})],1),r("v-row",{attrs:{"no-gutters":"",align:"end"}},[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:a.isError,expression:"isError"}],attrs:{depressed:"",block:""},on:{click:a.getAnswer}},[a._v("ANSWER")])],1)],1)],1)},m=[];class k{constructor(a,t){this.caracMap=a,this.examSize=t}}class d{constructor(a,t,r){this.totalErrors=a,this.examLength=t,this.errorList=r}getSuccessRate(){return Math.floor(this.totalErrors/this.examLength*100)}getScore(){return this.examLength-this.totalErrors}}var v=[{romaji:"a",hiragana:"あ",katakana:"ア"},{romaji:"i",hiragana:"い",katakana:"イ"},{romaji:"u",hiragana:"う",katakana:"ウ"},{romaji:"e",hiragana:"え",katakana:"エ"},{romaji:"o",hiragana:"お",katakana:"オ"},{romaji:"ka",hiragana:"か",katakana:"カ"},{romaji:"ki",hiragana:"き",katakana:"キ"},{romaji:"ku",hiragana:"く",katakana:"ク"},{romaji:"ke",hiragana:"け",katakana:"ケ"},{romaji:"ko",hiragana:"こ",katakana:"コ"},{romaji:"sa",hiragana:"さ",katakana:"サ"},{romaji:"shi",hiragana:"し",katakana:"シ"},{romaji:"su",hiragana:"す",katakana:"ス"},{romaji:"se",hiragana:"せ",katakana:"セ"},{romaji:"so",hiragana:"そ",katakana:"ソ"},{romaji:"ta",hiragana:"た",katakana:"タ"},{romaji:"chi",hiragana:"ち",katakana:"チ"},{romaji:"tsu",hiragana:"つ",katakana:"ツ"},{romaji:"te",hiragana:"て",katakana:"テ"},{romaji:"to",hiragana:"と",katakana:"ト"},{romaji:"na",hiragana:"な",katakana:"ナ"},{romaji:"ni",hiragana:"に",katakana:"ニ"},{romaji:"nu",hiragana:"ぬ",katakana:"ヌ"},{romaji:"ne",hiragana:"ね",katakana:"ネ"},{romaji:"no",hiragana:"の",katakana:"ノ"},{romaji:"ha",hiragana:"は",katakana:"ハ"},{romaji:"hi",hiragana:"ひ",katakana:"ヒ"},{romaji:"fu",hiragana:"ふ",katakana:"フ"},{romaji:"he",hiragana:"へ",katakana:"ヘ"},{romaji:"ho",hiragana:"ほ",katakana:"ホ"},{romaji:"ma",hiragana:"ま",katakana:"マ"},{romaji:"mi",hiragana:"み",katakana:"ミ"},{romaji:"mu",hiragana:"む",katakana:"ム"},{romaji:"me",hiragana:"め",katakana:"メ"},{romaji:"mo",hiragana:"も",katakana:"モ"},{romaji:"ya",hiragana:"や",katakana:"ヤ"},{romaji:"yu",hiragana:"ゆ",katakana:"ユ"},{romaji:"yo",hiragana:"よ",katakana:"ヨ"},{romaji:"ra",hiragana:"ら",katakana:"ラ"},{romaji:"ri",hiragana:"り",katakana:"リ"},{romaji:"ru",hiragana:"る",katakana:"ル"},{romaji:"re",hiragana:"れ",katakana:"レ"},{romaji:"ro",hiragana:"ろ",katakana:"ロ"},{romaji:"wa",hiragana:"わ",katakana:"ワ"},{romaji:"wo",hiragana:"を",katakana:"ヲ"},{romaji:"n",hiragana:"ん",katakana:"ン"}],f=[{romaji:"ga",hiragana:"が",katakana:"ガ"},{romaji:"gi",hiragana:"ぎ",katakana:"ギ"},{romaji:"gu",hiragana:"ぐ",katakana:"グ"},{romaji:"ge",hiragana:"げ",katakana:"ゲ"},{romaji:"go",hiragana:"ご",katakana:"ゴ"},{romaji:"za",hiragana:"ざ",katakana:"ザ"},{romaji:"ji",hiragana:"じ",katakana:"ジ"},{romaji:"zu",hiragana:"ず",katakana:"ズ"},{romaji:"ze",hiragana:"ぜ",katakana:"ゼ"},{romaji:"zo",hiragana:"ぞ",katakana:"ゾ"},{romaji:"da",hiragana:"だ",katakana:"ダ"},{romaji:"ji",hiragana:"ぢ",katakana:"ヂ"},{romaji:"zu",hiragana:"づ",katakana:"ヅ"},{romaji:"de",hiragana:"で",katakana:"デ"},{romaji:"do",hiragana:"ど",katakana:"ド"},{romaji:"ba",hiragana:"ば",katakana:"バ"},{romaji:"bi",hiragana:"び",katakana:"ビ"},{romaji:"bu",hiragana:"ぶ",katakana:"ブ"},{romaji:"be",hiragana:"べ",katakana:"ベ"},{romaji:"bo",hiragana:"ぼ",katakana:"ボ"},{romaji:"pa",hiragana:"ぱ",katakana:"パ"},{romaji:"pi",hiragana:"ぴ",katakana:"ピ"},{romaji:"pu",hiragana:"ぷ",katakana:"プ"},{romaji:"pe",hiragana:"ぺ",katakana:"ペ"},{romaji:"po",hiragana:"ぽ",katakana:"ポ"}],p=[{romaji:"gya",hiragana:"ぎゃ",katakana:"ギャ"},{romaji:"gyu",hiragana:"ぎゅ",katakana:"ギュ"},{romaji:"gyo",hiragana:"ぎょ",katakana:"ギョ"},{romaji:"ja",hiragana:"じゃ",katakana:"ジャ"},{romaji:"ju",hiragana:"じゅ",katakana:"ジュ"},{romaji:"jo",hiragana:"じょ",katakana:"ジョ"},{romaji:"bya",hiragana:"びゃ",katakana:"ビャ"},{romaji:"byu",hiragana:"びゅ",katakana:"ビュ"},{romaji:"byo",hiragana:"びょ",katakana:"ビョ"},{romaji:"pya",hiragana:"ぴゃ",katakana:"ピャ"},{romaji:"pyu",hiragana:"ぴゅ",katakana:"ピュ"},{romaji:"pyo",hiragana:"ぴょ",katakana:"ピョ"}];let j=new Map([["monoHira",()=>v],["monoKata",()=>v],["diagraHira",()=>p],["diagraKata",()=>p],["diacriHana",()=>f],["diacriKata",()=>f]]);const w={MONOGRAPH:"monograph",DIACRITIC:"diacritic",DIAGRAPH:"diagraph"};var x=w,C={name:"KanaCard",data:()=>({answer:"",sequence:null,currentKana:"",idxKana:null,examCharArr:null,isError:!1,totalError:0,totalCarac:0,currentPos:0,examLength:0}),props:{config:{type:k}},methods:{submit(){this.idxKana[1]===this.answer?this.nextKana():(this.isError||this.totalError++,this.isError=!0,console.log("error")),this.answer=""},nextKana(){if(this.isError=!1,this.examCharArr.length>0)this.idxKana=this.examCharArr.shift(),this.currentKana=this.idxKana[0],this.currentPos++,console.log("reponse : "+this.idxKana[1]);else{var a=new d(this.totalError,this.examLength,null);this.$emit("end-game",a)}},generateQuizz(){for(var[a,t]of this.config.caracMap)t&&(this.totalCarac+=j.get(a)().length);for(let[o,c]of this.config.caracMap)0==c&&this.config.caracMap.delete(o);var r=0;for(var[a,t]of this.config.caracMap){var e=j.get(a)(),n=e.length/this.totalCarac,i=Math.floor(n*this.config.examSize);if(this.GetNRandCharacters(i,e,a),r++,r==this.config.caracMap.size&&this.examCharArr.length<this.config.examSize){var s=this.config.examSize-this.examCharArr.length;this.GetNRandCharacters(s,e,a)}}},getAnswer(){this.answer=this.idxKana[1]},GetNRandCharacters(a,t,r){var e=r.includes("Hira")?0:1,n=_(a,t);n.forEach(a=>{0==e?this.examCharArr.push([t[a].hiragana,t[a].romaji]):this.examCharArr.push([t[a].katakana,t[a].romaji])})}},mounted(){this.examCharArr=new Array,this.generateQuizz(),b(this.examCharArr),this.examLength=this.examCharArr.length,this.nextKana()}};function y(a){return Math.floor(Math.random()*Math.floor(a))}function b(a){var t,r,e;for(e=a.length-1;e>0;e--)t=Math.floor(Math.random()*(e+1)),r=a[e],a[e]=a[t],a[t]=r;return a}function _(a,t){var r=[];while(r.length<a){var e=y(t.length);-1===r.indexOf(e)&&r.push(e)}return r}var G=C,A=(r("564b"),r("2877")),D=r("6544"),K=r.n(D),E=r("8336"),S=r("b0af"),R=r("0fd9"),H=r("0789"),V=r("8654"),O=Object(A["a"])(G,u,m,!1,null,null,null),P=O.exports;K()(O,{VBtn:E["a"],VCard:S["a"],VRow:R["a"],VSlideXTransition:H["e"],VTextField:V["a"]});var M=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-card",{attrs:{width:"590"}},["random"==a.gametypeconfig?r("RandomGameConfig",{on:{"start-game":a.startGame}}):a._e(),"custom"==a.gametypeconfig?r("CustomGameConfig"):a._e()],1)},I=[],T=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-card",[r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",{attrs:{align:"center",justify:"center"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",[a._v("Hiragana")]),r("v-col",[r("v-switch",{attrs:{color:"#90CFD4",inset:""},on:{change:function(t){return a.onSwitchChange(a.caracEnum.MONOGRAPH,a.isHiragana)}},model:{value:a.isHiragana,callback:function(t){a.isHiragana=t},expression:"isHiragana"}})],1)],1)],1),r("v-divider",{attrs:{vertical:""}}),r("v-col",{attrs:{justify:"center",align:"center"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",[a._v("Katakana")]),r("v-col",[r("v-switch",{attrs:{color:"#90CFD4",inset:""},on:{change:function(t){return a.onSwitchChange(a.caracEnum.MONOGRAPH,a.isKatakana)}},model:{value:a.isKatakana,callback:function(t){a.isKatakana=t},expression:"isKatakana"}})],1)],1)],1)],1),r("v-divider"),r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",{attrs:{align:"center",justify:"center"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",[a._v("Diacritic")]),r("v-col",[r("v-switch",{attrs:{color:"#90CFD4",inset:""},on:{change:function(t){return a.onSwitchChange(a.caracEnum.DIACRITIC,a.isDiacriticHiragana)}},model:{value:a.isDiacriticHiragana,callback:function(t){a.isDiacriticHiragana=t},expression:"isDiacriticHiragana"}})],1)],1)],1),r("v-divider",{attrs:{vertical:""}}),r("v-col",{attrs:{justify:"center",align:"center"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",[a._v("Diacritic")]),r("v-col",[r("v-switch",{attrs:{color:"#90CFD4",inset:""},on:{change:function(t){return a.onSwitchChange(a.caracEnum.DIACRITIC,a.isDiacriticKatakana)}},model:{value:a.isDiacriticKatakana,callback:function(t){a.isDiacriticKatakana=t},expression:"isDiacriticKatakana"}})],1)],1)],1)],1),r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",{attrs:{align:"center",justify:"center"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",[a._v("Diagraph")]),r("v-col",[r("v-switch",{attrs:{color:"#90CFD4",inset:""},on:{change:function(t){return a.onSwitchChange(a.caracEnum.DIAGRAPH,a.isDiagraphHiragana)}},model:{value:a.isDiagraphHiragana,callback:function(t){a.isDiagraphHiragana=t},expression:"isDiagraphHiragana"}})],1)],1)],1),r("v-divider",{attrs:{vertical:""}}),r("v-col",{attrs:{justify:"center",align:"center"}},[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",{staticClass:"3B393C--text"},[a._v("Diagraph")]),r("v-col",[r("v-switch",{attrs:{color:"#90CFD4",inset:""},on:{change:function(t){return a.onSwitchChange(a.caracEnum.DIAGRAPH,a.isDiagraphKatakana)}},model:{value:a.isDiagraphKatakana,callback:function(t){a.isDiagraphKatakana=t},expression:"isDiagraphKatakana"}})],1)],1)],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-slider",{staticClass:"align-center",attrs:{max:a.max,min:0,"hide-details":"",color:"#90CFD4"},scopedSlots:a._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0 pr-3 centered-input",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":""},model:{value:a.slider,callback:function(t){a.slider=t},expression:"slider"}})]},proxy:!0}]),model:{value:a.slider,callback:function(t){a.slider=t},expression:"slider"}})],1),r("v-row",{staticClass:"pb-2",attrs:{justify:"center","no-gutters":""}},[r("v-btn",{staticClass:"white--text",attrs:{rounded:"",color:"#036273"},on:{click:a.start}},[a._v("Start Exam")])],1)],1)},N=[],z={data:()=>({slider:20,max:2*v.length,isHiragana:!0,isKatakana:!0,isDiacriticHiragana:!1,isDiacriticKatakana:!1,isDiagraphHiragana:!1,isDiagraphKatakana:!1,caracEnum:x,dialog:!1,showCustomGame:!0}),components:{},methods:{start(){var a=new Map;this.fillCaracMap(a),console.log(a);var t=new k(a,this.slider);this.$emit("start-game",t)},onSwitchChange(a,t){switch(a){case x.MONOGRAPH:t?this.max+=v.length:this.max-=v.length;break;case x.DIAGRAPH:t?this.max+=p.length:this.max-=p.length;break;case x.DIACRITIC:t?this.max+=f.length:this.max-=f.length;break}},clickCustomGame(){},fillCaracMap(a){a.set("monoHira",this.isHiragana),a.set("monoKata",this.isKatakana),a.set("diagraHira",this.isDiagraphHiragana),a.set("diagraKata",this.isDiagraphKatakana),a.set("diacriHana",this.isDiacriticHiragana),a.set("diacriKata",this.isDiacriticKatakana)}}},L=z,$=(r("9e1f"),r("62ad")),F=r("ce7e"),B=r("ba0d"),X=r("b73d"),q=Object(A["a"])(L,T,N,!1,null,null,null),J=q.exports;K()(q,{VBtn:E["a"],VCard:S["a"],VCol:$["a"],VDivider:F["a"],VRow:R["a"],VSlider:B["a"],VSwitch:X["a"],VTextField:V["a"]});var Q=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-card",[r("v-row",{attrs:{"no-gutters":""}},[r("v-tabs",{attrs:{grow:"",color:"#036273"}},[r("v-tab",{on:{click:a.clickTabHiragana}},[a._v("HIRAGANA")]),r("v-tab",{on:{click:a.clickTabKatakana}},[a._v("KATAKANA")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},a._l(a.display_array,(function(t,e){return r("v-row",{key:e,attrs:{"no-gutters":""}},[a._l(t,(function(t,e){return r("v-col",{key:e,attrs:{cols:"auto"}},[r("v-card",{attrs:{tile:"",height:"50",width:"50",outlined:"",disabled:t.disable,color:t.isSelected?"#B9CB65":""},on:{click:function(r){return a.onKanaClick(t)}}},[r("v-row",{staticClass:"fill-height d-flex flex-column",attrs:{"no-gutters":""}},[r("v-row",{staticClass:"pt-1 font-weight-bold",attrs:{"no-gutters":"",justify:"center"}},[a._v(a._s(t.value))]),r("v-row",{staticClass:"caption font-weight-thin",attrs:{"no-gutters":"",justify:"center"}},[a._v(a._s(t.romaji))])],1)],1)],1)})),r("v-row",{staticClass:"fill-height",attrs:{"no-gutters":"",align:"center"}},[r("v-checkbox",{staticClass:"mt-0 mb-0 pt-0",on:{change:function(t){return a.clickedRow(e,a.value)}}})],1)],2)})),1),r("v-row",{staticClass:"pb-2 pt-2",attrs:{"no-gutters":"",justify:"center"}},[r("v-btn",{staticClass:"white--text",attrs:{color:"#036273",rounded:""},on:{click:a.start}},[a._v("START EXAM")])],1)],1)},U=[],W={data:()=>({array_hiragana:null,array_katakana:null,suffix:null,display_array:null,list_exam:null}),methods:{onKanaClick(a){a.isSelected=0==a.isSelected,console.log(a)},clickTabHiragana(){this.display_array=this.array_hiragana},clickTabKatakana(){this.display_array=this.array_katakana},clickedRow(a,t){console.log(t),this.display_array[a].forEach(a=>{""!=a.value&&(a.isSelected=!0)})},getChar(a,t){var r;return r="hiragana"==t?v.filter(t=>t.hiragana==a):v.filter(t=>t.katakana==a),r},printChar(a,t){var r=this.getChar(a,t);return 0==r.length?{value:"",romaji:"",disable:!0,isSelected:!1}:{value:a,romaji:r[0].romaji,disable:!1,isSelected:!1}},start(){var a=[];this.array_hiragana.forEach(t=>{var r=t.filter(a=>1==a.isSelected);r.length>0&&a.push(r)});var t=[];this.array_katakana.forEach(a=>{var r=a.filter(a=>1==a.isSelected);r.length>0&&t.push(r)})}},mounted(){let a=[["あ","か","さ","た","な","は","ま","や","ら","わ","ん"],["い","き","し","ち","に","ひ","み","","り","",""],["う","く","す","つ","ぬ","ふ","む","ゆ","る","",""],["え","け","せ","て","ね","へ","め","","れ","",""],["お","こ","そ","と","の","ほ","も","よ","ろ","を",""]],t=[["ア","カ","サ","タ","ナ","ハ","マ","ヤ","ラ","ワ","ン"],["イ","キ","シ","チ","ニ","ヒ","ミ","","リ","",""],["ウ","ク","ス","ツ","ヌ","フ","ム","ユ","ル","",""],["エ","ケ","セ","テ","ネ","ヘ","メ","","レ","",""],["オ","コ","ソ","ト","ノ","ホ","モ","ヨ","ロ","ヲ",""]];this.array_hiragana=[];for(let r=0;r<a.length;r++){let t=[];for(let e=0;e<a[r].length;e++)t.push(this.printChar(a[r][e],"hiragana"));this.array_hiragana.push(t)}this.array_katakana=[];for(let r=0;r<t.length;r++){let a=[];for(let e=0;e<t[r].length;e++)a.push(this.printChar(t[r][e],"katakana"));this.array_katakana.push(a)}this.suffix=["a","i","u","e","o"],this.display_array=this.array_hiragana}},Y=W,Z=r("ac7c"),aa=r("71a3"),ta=r("fe57"),ra=Object(A["a"])(Y,Q,U,!1,null,null,null),ea=ra.exports;K()(ra,{VBtn:E["a"],VCard:S["a"],VCheckbox:Z["a"],VCol:$["a"],VRow:R["a"],VTab:aa["a"],VTabs:ta["a"]});var na={components:{RandomGameConfig:J,CustomGameConfig:ea},data:()=>({isCustomGame:!0}),props:{gametypeconfig:{type:String}},methods:{startGame(a){this.$emit("start-game",a)},showCustomGame(){this.isCustomGame=!0},showRandomGame(){this.isCustomGame=!1}}},ia=na,sa=Object(A["a"])(ia,M,I,!1,null,null,null),oa=sa.exports;K()(sa,{VCard:S["a"]});var ca=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-card",{attrs:{width:"450",height:"350"}},[r("v-row",{staticClass:"fill-height d-flex flex-column",attrs:{"no-gutters":""}},[r("v-row",{staticClass:"mt-2 display-1",class:a.getSuccessColor(),attrs:{"no-gutters":"",align:"start",justify:"center"}},[a._v(a._s(a.examResult.getScore())+"/"+a._s(a.examResult.examLength))]),r("v-row",{attrs:{"no-gutters":""}}),r("v-row",{attrs:{align:"end","no-gutters":""}},[r("v-btn",{attrs:{block:""}},[a._v("RETRY")])],1)],1)],1)},la=[],ha={data:()=>({successColor:null}),props:{examResult:{type:d}},methods:{getSuccessColor(){return this.examResult.getSuccessRate()>50?"red--text":"green--text"}}},ga=ha,ua=Object(A["a"])(ga,ca,la,!1,null,null,null),ma=ua.exports;K()(ua,{VBtn:E["a"],VCard:S["a"],VRow:R["a"]});var ka={name:"Game",components:{KanaCard:P,PreGame:oa,EndGame:ma},props:{typegame:{type:String}},data:()=>({showPreGame:!0,isEndGame:!1,config:null,examResult:null}),methods:{startGame(a){this.showPreGame=!1,this.config=a},endGame(a){this.isEndGame=!0,this.examResult=a}}},da=ka,va=Object(A["a"])(da,h,g,!1,null,null,null),fa=va.exports;K()(va,{VRow:R["a"]});var pa=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-navigation-drawer",{staticClass:"fill-height",attrs:{permanent:"","expand-on-hover":"",color:"#036273",app:""}},[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:"https://i.pinimg.com/236x/d4/08/82/d4088298ad3510ee746bde10585da6cd--anime-people-anime-guys.jpg"}})],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{attrs:{link:""},on:{click:function(t){return a.onGameSelect("custom")}}},[r("v-list-item-icon",[r("v-icon",{attrs:{"x-medium":""}},[a._v("mdi-school")])],1),r("v-list-item-title",{staticClass:"font-weight-bold"},[a._v("CUSTOM EXAM")])],1),r("v-list-item",{attrs:{link:""},on:{click:function(t){return a.onGameSelect("random")}}},[r("v-list-item-icon",[r("v-icon",{attrs:{"x-medium":""}},[a._v("mdi-shuffle")])],1),r("v-list-item-title",{staticClass:"font-weight-bold"},[a._v("RANDOM EXAM")])],1)],1)],1)},ja=[],wa={methods:{onGameSelect(a){this.$emit("select-game",a)}}},xa=wa,Ca=r("132d"),ya=r("adda"),ba=r("8860"),_a=r("da13"),Ga=r("8270"),Aa=r("34c3"),Da=r("5d23"),Ka=r("f774"),Ea=Object(A["a"])(xa,pa,ja,!1,null,null,null),Sa=Ea.exports;K()(Ea,{VDivider:F["a"],VIcon:Ca["a"],VImg:ya["a"],VList:ba["a"],VListItem:_a["a"],VListItemAvatar:Ga["a"],VListItemIcon:Aa["a"],VListItemTitle:Da["a"],VNavigationDrawer:Ka["a"]});var Ra={name:"App",components:{Game:fa,Navbar:Sa},methods:{selectGame(a){this.typegame=a}},data:()=>({typegame:"custom"})},Ha=Ra,Va=(r("8880"),r("7496")),Oa=r("a523"),Pa=r("a75b"),Ma=Object(A["a"])(Ha,c,l,!1,null,"91bcca6e",null),Ia=Ma.exports;K()(Ma,{VApp:Va["a"],VContainer:Oa["a"],VContent:Pa["a"]});var Ta=r("f309");e["a"].use(Ta["a"]);var Na=new Ta["a"]({}),za=r("9483");Object(za["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(a){console.error("Error during service worker registration:",a)}}),e["a"].config.productionTip=!1,new e["a"]({vuetify:Na,render:function(a){return a(Ia)}}).$mount("#app")},8880:function(a,t,r){"use strict";var e=r("ab93"),n=r.n(e);n.a},"9e1f":function(a,t,r){"use strict";var e=r("ce94"),n=r.n(e);n.a},ab93:function(a,t,r){},ce94:function(a,t,r){}});
//# sourceMappingURL=app.9a001aa9.js.map