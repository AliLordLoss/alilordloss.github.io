(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{425:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("f95a2f40",content,!0,{sourceMap:!1})},445:function(t,e,r){"use strict";r(425)},446:function(t,e,r){var o=r(15)(!1);o.push([t.i,".center-text{text-align:center}",""]),t.exports=o},454:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{config:"18",qualy:{roundsCount:"12",distance:"30",arrowsPerRound:"3",faceType:"30"},standards:{18:{roundsCount:"10",distance:"18",arrowsPerRound:"3",faceType:"18"},30:{roundsCount:"12",distance:"30",arrowsPerRound:"3",faceType:"30"},50:{roundsCount:"6",distance:"50",arrowsPerRound:"6",faceType:"30"},70:{roundsCount:"6",distance:"70",arrowsPerRound:"6",faceType:"70"}}}},methods:{validateDistance:function(t){return isNaN(t)||isNaN(parseFloat(t))?"must be a number":!(t>70||t<=0)||"between 1 and 70"},validateArrows:function(t){return isNaN(t)||isNaN(parseFloat(t))?"must be a number":!(t>10||t<=0)||"between 1 and 10"},start:function(){"custom"!==this.config&&(this.qualy=this.standards[this.config]),!0===this.validateDistance(this.qualy.distance)?!0===this.validateArrows(this.qualy.arrowsPerRound)?(this.$store.dispatch("setQualy",{qualy:this.qualy}),this.$emit("submit")):this.$vuetify.goTo(this.$refs.arrows):this.$vuetify.goTo(this.$refs.distance)}}},n=(r(445),r(61)),c=r(66),l=r.n(c),v=r(269),d=r(498),f=r(90),y=r(504),w=r(412),_=r(413),m=r(499),h=r(506),x=r(505),C=r(414),$=r(402),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("br"),t._v(" "),r("v-row",[r("h1",[t._v("Welcome!")])]),t._v(" "),r("v-row",[r("h3",[t._v("Please select an option below:")])]),t._v(" "),r("br"),t._v(" "),r("hr"),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-radio-group",{model:{value:t.config,callback:function(e){t.config=e},expression:"config"}},[t._l(Object.keys(t.standards),(function(t){return r("v-radio",{key:t,attrs:{label:"standard "+t+"m",value:t}})})),t._v(" "),r("v-radio",{attrs:{label:"custom",value:"custom"}})],2)],1),t._v(" "),r("v-expand-transition",["custom"==t.config?r("div",{staticClass:"box"},[r("div",{staticClass:"box"},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"4"}},[t._v(" Distance: ")]),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{ref:"distance",attrs:{rules:[t.validateDistance]},model:{value:t.qualy.distance,callback:function(e){t.$set(t.qualy,"distance",e)},expression:"qualy.distance"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"box"},[r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            Select how many rounds you want to shoot:\n          ")])],1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-slider",{attrs:{"thumb-color":t.$vuetify.theme.primary,"thumb-label":"always",min:"1",max:"30"},model:{value:t.qualy.roundsCount,callback:function(e){t.$set(t.qualy,"roundsCount",e)},expression:"qualy.roundsCount"}})],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            or enter a number yourself (between 1 and 30):\n          ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{model:{value:t.qualy.roundsCount,callback:function(e){t.$set(t.qualy,"roundsCount",e)},expression:"qualy.roundsCount"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"box"},[r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            How many arrows do you shoot each round?\n          ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{ref:"arrows",attrs:{rules:[t.validateArrows]},model:{value:t.qualy.arrowsPerRound,callback:function(e){t.$set(t.qualy,"arrowsPerRound",e)},expression:"qualy.arrowsPerRound"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"box"},[r("br"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"center-text",attrs:{cols:"11"}},[t._v("\n            What kind of face are you using?\n          ")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{items:[{text:"18m face",value:"18"},{text:"30m face",value:"30"},{text:"70m face",value:"70"}]},model:{value:t.qualy.faceType,callback:function(e){t.$set(t.qualy,"faceType",e)},expression:"qualy.faceType"}})],1)],1)],1)]):t._e()]),t._v(" "),r("v-row",[r("v-spacer"),t._v(" "),r("v-col",[r("v-btn",{attrs:{color:"primary"},on:{click:t.start}},[t._v(" let's shoot! ")])],1),t._v(" "),r("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCol:d.a,VExpandTransition:f.a,VForm:y.a,VRadio:w.a,VRadioGroup:_.a,VRow:m.a,VSelect:h.a,VSlider:x.a,VSpacer:C.a,VTextField:$.a})}}]);