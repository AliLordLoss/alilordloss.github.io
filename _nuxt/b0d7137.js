(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,6,7],{398:function(t,e,r){var content=r(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("a9649032",content,!0,{sourceMap:!1})},399:function(t){t.exports=JSON.parse('{"18":["x",10,9,8,7,6,"m"],"30":["x",10,9,8,7,6,5,"m"],"70":["x",10,9,8,7,6,5,4,3,2,1,"m"]}')},400:function(t,e,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("f95a2f40",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";r.r(e);var o=r(120),n=(r(23),r(399)),c={props:{id:{required:!0,type:Number}},data:function(){return{arrows:Object(o.a)(this.$store.state.qualy.roundScores[this.id-1]),scores:n[this.$store.state.qualy.faceType]}},methods:{scoreChanged:function(i){this.$store.dispatch("setScore",{round:this.id-1,arrow:i,score:this.arrows[i]})}}},l=r(60),d=r(64),v=r.n(d),f=r(482),_=r(483),y=r(489),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t._v("Round "+t._s(t.id)+" of "+t._s(t.$store.state.qualy.roundsCount))]),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.arrows,(function(e,o){return r("v-col",{key:o,attrs:{cols:"4"}},[r("v-select",{class:["my-score","x"==t.arrows[o]||t.arrows[o]>8?"my-yellow":t.arrows[o]>6?"my-red":t.arrows[o]>4?"my-blue":t.arrows[o]>2?"my-black":t.arrows[o]>0?"my-white":""],attrs:{items:t.scores},on:{change:function(e){return t.scoreChanged(o)}},model:{value:t.arrows[o],callback:function(e){t.$set(t.arrows,o,e)},expression:"arrows[index]"}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:f.a,VRow:_.a,VSelect:y.a})},404:function(t,e,r){"use strict";r(398)},405:function(t,e,r){var o=r(15)(!1);o.push([t.i,".banner[data-v-fcd2eff0]{text-align:center;color:#2e8b57}.score[data-v-fcd2eff0]{text-decoration:underline}",""]),t.exports=o},421:function(t,e,r){"use strict";r(400)},422:function(t,e,r){var o=r(15)(!1);o.push([t.i,".box{border-style:dashed;border-width:2px;border-radius:5px;margin:15px 0;padding:0 15px}.center-text{text-align:center}",""]),t.exports=o},432:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{round:1,dialog:!1}},methods:{getConfirm:function(){this.dialog=!0},startAnew:function(){this.dialog=!1,this.$emit("end")},closeDialog:function(){this.dialog=!1}}},n=(r(404),r(60)),c=r(64),l=r.n(c),d=r(260),v=r(431),f=r(397),_=r(482),y=r(485),w=r(486),h=r(483),m=r(189),x=r(389),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.$store.state.qualy.roundScores,(function(e,o){return r("div",{key:o},[r("v-scroll-x-transition",{attrs:{mode:"out-in","hide-on-leave":""}},[r("RoundListItem",{directives:[{name:"show",rawName:"v-show",value:t.round===o+1,expression:"round === index + 1"}],attrs:{id:o+1}})],1)],1)})),t._v(" "),r("v-pagination",{attrs:{length:Number(t.$store.state.qualy.roundsCount),circle:"","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.round,callback:function(e){t.round=e},expression:"round"}}),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"11"}},[r("h2",{staticClass:"banner"},[t._v("\n        Your score is\n        "),r("span",{staticClass:"score"},[t._v(t._s(t.$store.getters.score))]),t._v(" out of\n        "+t._s(t.$store.state.qualy.roundsCount*t.$store.state.qualy.arrowsPerRound*10)+"!\n      ")])])],1),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"11"}},[r("h2",{staticClass:"banner"},[t._v("\n        X + 10: "+t._s(t.$store.state.qualy.x+t.$store.state.qualy[10])+"\n      ")])])],1),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"11"}},[r("h2",{staticClass:"banner"},[t._v("10: "+t._s(t.$store.state.qualy[10]))])])],1),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("br"),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-btn",{attrs:{color:"info"},on:{click:function(e){t.dialog=!0}}},[t._v(" back ")])],1),t._v(" "),r("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[t._v(" Are you sure? ")]),t._v(" "),r("v-card-text",[t._v(" You will lose all your records! ")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.startAnew}},[t._v("yes")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.closeDialog}},[t._v("no")]),t._v(" "),r("v-spacer")],1)],1)],1)],2)}),[],!1,null,"fcd2eff0",null);e.default=component.exports;l()(component,{RoundListItem:r(402).default}),l()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:_.a,VDialog:y.a,VPagination:w.a,VRow:h.a,VScrollXTransition:m.f,VSpacer:x.a})},433:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{config:"18",qualy:{roundsCount:"12",distance:"30",arrowsPerRound:"3",faceType:"30"},standards:{18:{roundsCount:"10",distance:"18",arrowsPerRound:"3",faceType:"18"},30:{roundsCount:"12",distance:"30",arrowsPerRound:"3",faceType:"30"},50:{roundsCount:"6",distance:"50",arrowsPerRound:"6",faceType:"30"},70:{roundsCount:"6",distance:"70",arrowsPerRound:"6",faceType:"70"}}}},methods:{validateDistance:function(t){return isNaN(t)||isNaN(parseFloat(t))?"must be a number":!(t>70||t<=0)||"between 1 and 70"},validateArrows:function(t){return isNaN(t)||isNaN(parseFloat(t))?"must be a number":!(t>10||t<=0)||"between 1 and 10"},start:function(){"custom"!==this.config&&(this.qualy=this.standards[this.config]),!0===this.validateDistance(this.qualy.distance)?!0===this.validateArrows(this.qualy.arrowsPerRound)?(this.$store.dispatch("setQualy",{qualy:this.qualy}),this.$emit("submit")):this.$vuetify.goTo(this.$refs.arrows):this.$vuetify.goTo(this.$refs.distance)}}},n=(r(421),r(60)),c=r(64),l=r.n(c),d=r(260),v=r(482),f=r(189),_=r(487),y=r(387),w=r(388),h=r(483),m=r(489),x=r(488),C=r(389),$=r(481),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("br"),t._v(" "),r("v-row",[r("h1",[t._v("Welcome!")])]),t._v(" "),r("v-row",[r("h3",[t._v("Please select an option below:")])]),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-radio-group",{model:{value:t.config,callback:function(e){t.config=e},expression:"config"}},[t._l(Object.keys(t.standards),(function(t){return r("v-radio",{key:t,attrs:{label:"standard "+t+"m",value:t}})})),t._v(" "),r("v-radio",{attrs:{label:"custom",value:"custom"}})],2)],1),t._v(" "),r("v-expand-transition",["custom"==t.config?r("div",{staticClass:"box"},[r("div",{staticClass:"box"},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"4"}},[t._v(" Distance: ")]),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{ref:"distance",attrs:{rules:[t.validateDistance]},model:{value:t.qualy.distance,callback:function(e){t.$set(t.qualy,"distance",e)},expression:"qualy.distance"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"box"},[r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            Select how many rounds you want to shoot:\n          ")])],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-slider",{attrs:{"thumb-color":t.$vuetify.theme.primary,"thumb-label":"always",min:"1",max:"30"},model:{value:t.qualy.roundsCount,callback:function(e){t.$set(t.qualy,"roundsCount",e)},expression:"qualy.roundsCount"}})],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            or enter a number yourself (between 1 and 30):\n          ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{model:{value:t.qualy.roundsCount,callback:function(e){t.$set(t.qualy,"roundsCount",e)},expression:"qualy.roundsCount"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"box"},[r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            How many arrows do you shoot each round?\n          ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{ref:"arrows",attrs:{rules:[t.validateArrows]},model:{value:t.qualy.arrowsPerRound,callback:function(e){t.$set(t.qualy,"arrowsPerRound",e)},expression:"qualy.arrowsPerRound"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"box"},[r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            What kind of face are you using?\n          ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:[{text:"18m face",value:"18"},{text:"30m face",value:"30"},{text:"70m face",value:"70"}]},model:{value:t.qualy.faceType,callback:function(e){t.$set(t.qualy,"faceType",e)},expression:"qualy.faceType"}})],1)],1)],1)]):t._e()]),t._v(" "),r("v-row",[r("v-spacer"),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:"success"},on:{click:t.start}},[t._v(" let's shoot! ")])],1),t._v(" "),r("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VExpandTransition:f.a,VForm:_.a,VRadio:y.a,VRadioGroup:w.a,VRow:h.a,VSelect:m.a,VSlider:x.a,VSpacer:C.a,VTextField:$.a})},490:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{begin:!1}},computed:{},methods:{start:function(){this.begin=!0},end:function(){this.$store.dispatch("clearRecord"),this.begin=!1}}},n=r(60),c=r(64),l=r.n(c),d=r(394),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.begin?r("RecordRounds",{on:{end:t.end}}):r("RecordForm",{on:{submit:t.start}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{RecordRounds:r(432).default,RecordForm:r(433).default}),l()(component,{VContainer:d.a})}}]);