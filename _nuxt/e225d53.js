(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{424:function(r){r.exports=JSON.parse('{"18":["x",10,9,8,7,6,"m"],"30":["x",10,9,8,7,6,5,"m"],"70":["x",10,9,8,7,6,5,4,3,2,1,"m"]}')},427:function(r,e,t){"use strict";t.r(e);var o=t(99),n=(t(21),t(45),t(60),t(424)),c={props:{id:{required:!0,type:Number}},data:function(){return{arrows:Object(o.a)(this.$store.state.qualy.roundScores[this.id-1]),scores:n[this.$store.state.qualy.faceType]}},methods:{scoreChanged:function(i){this.$store.dispatch("setScore",{round:this.id-1,arrow:i,score:this.arrows[i]}),this.arrows.includes(0)||this.$emit("done"),"x"===this.arrows[i]&&this.$emit("good-job")}}},l=t(61),d=t(66),w=t.n(d),h=t(498),m=t(499),y=t(506),component=Object(l.a)(c,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"box"},[t("div",[r._v("Round "+r._s(r.id)+" of "+r._s(r.$store.state.qualy.roundsCount))]),r._v(" "),t("v-row",{attrs:{justify:"center",align:"center"}},r._l(r.arrows,(function(e,o){return t("v-col",{key:o,attrs:{cols:"4"}},[t("v-select",{class:["my-score","x"==r.arrows[o]||r.arrows[o]>8?"my-yellow":r.arrows[o]>6?"my-red":r.arrows[o]>4?"my-blue":r.arrows[o]>2?"my-black":r.arrows[o]>0?"my-white":""],attrs:{items:r.scores},on:{change:function(e){return r.scoreChanged(o)}},model:{value:r.arrows[o],callback:function(e){r.$set(r.arrows,o,e)},expression:"arrows[index]"}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCol:h.a,VRow:m.a,VSelect:y.a})}}]);