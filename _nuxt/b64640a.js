(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(e,t,o){"use strict";var r=o(111),n=o.n(r);t.a=function(e){var t=e.$vuetify,o=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):{dark:!0,color:"blue"};t.theme.themes.dark.primary=n.a[o.color].darken2,t.theme.themes.light.primary=n.a[o.color].darken2,t.theme.dark=o.dark}},246:function(e,t,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("7388ab72",content,!0,{sourceMap:!1})},248:function(e,t,o){var content=o(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("22b83116",content,!0,{sourceMap:!1})},249:function(e,t,o){var content=o(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("67e3f6a5",content,!0,{sourceMap:!1})},259:function(e,t,o){var content=o(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("72fdb220",content,!0,{sourceMap:!1})},268:function(e,t,o){"use strict";o(12),o(10),o(13),o(3),o(17),o(11),o(18);var r=o(2);o(46);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={data:function(){return{overlay:!1,password:"",godDamnRight:!1}},mounted:function(){JSON.parse(localStorage.getItem("passwordFound"))&&this.$store.dispatch("passwordFound")},methods:{checkPassword:function(){var e=this;"armin"===this.password.toLowerCase()&&(this.godDamnRight=!0,setTimeout((function(){e.overlay=!1,e.$store.dispatch("showArmin"),e.$store.dispatch("passwordFound"),localStorage.setItem("passwordFound",!0);var t=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):{dark:!0,color:"blue"};localStorage.setItem("theme",JSON.stringify(c(c({},t),{},{show:!0}))),e.$refs.navbar.loadTheme()}),2e3))}}},d=(o(324),o(61)),f=o(66),h=o.n(f),v=o(411),m=o(269),y=o(420),_=o(90),w=o(418),x=o(191),O=o(403),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("TheNavbar",{ref:"navbar"}),e._v(" "),o("v-main",{class:e.$store.state.arminLover?"my-"+(e.$vuetify.theme.dark?"dark":"light")+"-app":"my-app"},[o("v-container",[o("Nuxt")],1)],1),e._v(" "),o("TheFooter",{on:{overlay:function(t){e.overlay=!0}}}),e._v(" "),o("v-overlay",{attrs:{absolute:!0,opacity:"0.9",value:e.overlay}},[o("div",{staticClass:"overlay"},[o("v-text-field",{attrs:{label:"say my name",outlined:""},on:{input:e.checkPassword},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),o("v-expand-transition",[e.godDamnRight?o("h2",[e._v("you're god damn right")]):e._e()]),e._v(" "),o("br"),e._v(" "),o("v-btn",{attrs:{color:"error"},on:{click:function(t){e.overlay=!1}}},[e._v(" go back ")])],1)])],1)}),[],!1,null,"1f51b656",null);t.a=component.exports;h()(component,{TheNavbar:o(397).default,TheFooter:o(398).default}),h()(component,{VApp:v.a,VBtn:m.a,VContainer:y.a,VExpandTransition:_.a,VMain:w.a,VOverlay:x.a,VTextField:O.a})},281:function(e,t,o){o(282),e.exports=o(283)},312:function(e,t,o){"use strict";o(246)},313:function(e,t,o){var r=o(15)(!1);r.push([e.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),e.exports=r},318:function(e,t,o){var content=o(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("3e7ab538",content,!0,{sourceMap:!1})},319:function(e,t,o){var r=o(15),n=o(320),c=o(321),l=o(322),d=o(323),f=r(!1),h=n(c),v=n(l),m=n(d);f.push([e.i,".round-flex{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center}.my-blue .v-input__slot{background-color:#00f!important}.my-blue .v-icon,.my-blue .v-select__selection{color:#fff!important}.my-red .v-input__slot{background-color:red!important}.my-red .v-icon,.my-red .v-select__selection{color:#fff!important}.my-yellow .v-input__slot{background-color:#ff0!important}.my-yellow .v-icon,.my-yellow .v-select__selection{color:#000!important}.my-white .v-input__slot{background-color:#fff!important}.my-white .v-icon,.my-white .v-select__selection{color:#000!important}.my-black .v-input__slot{background-color:#000!important}.my-black .v-icon,.my-black .v-select__selection{color:#fff!important}.my-score{margin:0!important;border-radius:5px 5px 0 0}.my-score .v-select__selection{margin-left:5px}.box{border-style:dashed;border-width:2px;border-radius:5px;margin:15px 0;padding:0 15px}.my-dark-app{background-image:url("+h+");background-size:cover}.my-app{background-image:url("+v+");background-size:360px;background-position:100% 100%}.my-light-app{background-image:url("+m+");background-repeat:repeat;background-size:contain}.report-yellow{background-color:#ff0;color:#000;padding:0 5px}.report-red{background-color:red;color:#fff;padding:0 5px}.report-blue{background-color:#00f;color:#fff;padding:0 5px}.report-white{background-color:#fff;color:#000;padding:0 5px}.report-black{background-color:#000;color:#fff;padding:0 5px}.report-miss{background-color:grey;color:#000;padding:0 5px}.report-score-dark{border:2px solid #000}.report-score-light{border:2px solid #fff}",""]),e.exports=f},321:function(e,t,o){e.exports=o.p+"img/Armin1.cdfb369.jpeg"},322:function(e,t,o){e.exports=o.p+"img/archery-face.0e92980.png"},323:function(e,t,o){e.exports=o.p+"img/Armin2.3496e2e.jpeg"},324:function(e,t,o){"use strict";o(248)},325:function(e,t,o){var r=o(15)(!1);r.push([e.i,".overlay[data-v-1f51b656]{display:flex;flex-direction:column;align-items:center}",""]),e.exports=r},326:function(e,t,o){"use strict";o(249)},327:function(e,t,o){var r=o(15)(!1);r.push([e.i,".theme-chooser[data-v-b4a806c2]{display:flex;justify-content:center;align-items:center}",""]),e.exports=r},382:function(e,t,o){"use strict";o(259)},383:function(e,t,o){var r=o(15)(!1);r.push([e.i,".footer-text[data-v-7c88008e]{cursor:default;margin:auto;display:flex;align-items:center}",""]),e.exports=r},395:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return l})),o.d(t,"getters",(function(){return d})),o.d(t,"actions",(function(){return f})),o.d(t,"mutations",(function(){return h}));o(12),o(10),o(13),o(17),o(11),o(18);var r=o(2);o(255),o(3),o(52),o(21);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=function(){return{qualy:{roundsCount:12,arrowsPerRound:3,distance:30,roundScores:new Array(12).fill(new Array(3).fill(0)),faceType:30,x:0,10:0},showScore:!0,shooting:!1,arminLover:!1,passwordFound:!1}},d={score:function(e){return e.qualy.roundScores.reduce((function(e,t){return e+t.reduce((function(e,t){return e+("x"===t?10:"m"===t?0:t)}),0)}),0)}},f={clearRecord:function(e){(0,e.commit)("CLEAR")},setQualy:function(e,t){(0,e.commit)("SET_QUALY",{qualy:t.qualy})},setScore:function(e,t){(0,e.commit)("SET_SCORE",{round:t.round,arrow:t.arrow,score:t.score})},showArmin:function(e){(0,e.commit)("I_LOVE_ARMIN")},hideArmin:function(e){(0,e.commit)("I_DONT_LOVE_ARMIN")},passwordFound:function(e){(0,e.commit)("PASSWORD_FOUND")},setShowScore:function(e,t){(0,e.commit)("SET_SHOW_SCORE",{showScore:t.showScore})},setShooting:function(e,t){(0,e.commit)("SET_SHOOTING",{shooting:t.shooting})}},h={CLEAR:function(e){e.qualy={roundsCount:12,arrowsPerRound:3,distance:30,roundScores:new Array(12).fill(new Array(3).fill(0)),faceType:30}},SET_QUALY:function(e,t){var o=t.qualy;e.qualy=c(c({},o),{},{roundScores:new Array(Number(o.roundsCount)).fill(null).map((function(){return new Array(Number(o.arrowsPerRound)).fill(0)})),x:0,10:0})},SET_SCORE:function(e,t){var o=t.round,r=t.arrow,n=t.score;"x"!==n&&10!==n||this._vm.$set(e.qualy,n,e.qualy[n]+1);var s=e.qualy.roundScores[o][r];"x"!==s&&10!==s||this._vm.$set(e.qualy,s,e.qualy[s]-1),this._vm.$set(e.qualy.roundScores[o],r,n)},I_LOVE_ARMIN:function(e){e.arminLover=!0},I_DONT_LOVE_ARMIN:function(e){e.arminLover=!1},PASSWORD_FOUND:function(e){e.passwordFound=!0},SET_SHOW_SCORE:function(e,t){var o=t.showScore;e.showScore=o},SET_SHOOTING:function(e,t){var o=t.shooting;e.shooting=o}}},397:function(e,t,o){"use strict";o.r(t);var r=o(111),n=o.n(r),c={data:function(){return{drawer:!1,dark:!0,color:"blue",show:!1,score:!0}},mounted:function(){this.loadTheme()},methods:{toggleTheme:function(){this.$vuetify.theme.dark=this.dark,this.saveTheme()},changeColor:function(){this.$vuetify.theme.themes.dark.primary=n.a[this.color].darken2,this.$vuetify.theme.themes.light.primary=n.a[this.color].darken2,this.saveTheme()},saveTheme:function(){localStorage.setItem("theme",JSON.stringify({dark:this.dark,color:this.color,show:this.show}))},loadTheme:function(){var e=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):{dark:!0,color:"blue",show:!1},t=e.color,o=e.dark,r=e.show;this.color=t,this.dark=o,this.show=r,this.toggleArmin()},toggleArmin:function(){this.show?this.$store.dispatch("showArmin"):this.$store.dispatch("hideArmin"),this.saveTheme()},toggleScore:function(){this.$store.dispatch("setShowScore",{showScore:this.score})}}},l=(o(326),o(61)),d=o(66),f=o.n(d),h=o(419),v=o(412),m=o(189),y=o(421),_=o(413),w=o(414),x=o(415),O=o(416),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-navigation-drawer",{attrs:{right:"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("div",{staticClass:"theme-chooser"},[o("v-icon",[e._v(" mdi-weather-"+e._s(e.dark?"sunny":"night")+" ")]),e._v(" "),o("v-switch",{on:{change:e.toggleTheme},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1),e._v(" "),o("div",{staticClass:"theme-chooser"},[o("v-radio-group",{on:{change:e.changeColor},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}},[o("v-radio",{attrs:{label:"blue",value:"blue"}}),e._v(" "),o("v-radio",{attrs:{label:"purple",value:"purple"}}),e._v(" "),o("v-radio",{attrs:{label:"green",value:"green"}})],1)],1),e._v(" "),e.$store.state.shooting?o("div",{staticClass:"theme-chooser"},[o("div",{staticStyle:{"max-width":"100px","text-align":"center"}},[e._v("\n        show scores while shooting:\n      ")]),e._v(" "),o("v-switch",{on:{change:e.toggleScore},model:{value:e.score,callback:function(t){e.score=t},expression:"score"}})],1):e._e(),e._v(" "),e.$store.state.passwordFound?o("div",{staticClass:"theme-chooser"},[o("v-icon",{staticStyle:{color:"red"}},[e._v("\n        mdi-heart"+e._s(e.show?"":"-broken")+"\n      ")]),e._v(" "),o("v-switch",{on:{change:e.toggleArmin},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1):e._e()]),e._v(" "),o("v-app-bar",{attrs:{fixed:"",app:""}},[o("v-spacer"),e._v(" "),o("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1)],1)}),[],!1,null,"b4a806c2",null);t.default=component.exports;f()(component,{VAppBar:h.a,VAppBarNavIcon:v.a,VIcon:m.a,VNavigationDrawer:y.a,VRadio:_.a,VRadioGroup:w.a,VSpacer:x.a,VSwitch:O.a})},398:function(e,t,o){"use strict";o.r(t);o(46);var r={data:function(){return{size:20,interval:void 0}},methods:{touchStart:function(){var e=this;this.$store.state.passwordFound||this.interval||(this.interval=setInterval((function(){if(e.size>=30)return clearInterval(e.interval),e.$emit("overlay"),void(e.interval=void 0);e.size+=.5}),200))},touchEnd:function(){clearInterval(this.interval),this.interval=void 0,this.size=20}}},n=(o(382),o(61)),c=o(66),l=o.n(c),d=o(417),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-footer",{attrs:{absolute:"",app:""}},[o("h5",{staticClass:"footer-text"},[e._v("\n    Copyright\n    "),o("span",{style:"font-size: "+e.size+"px",on:{touchstart:function(t){return t.preventDefault(),e.touchStart.apply(null,arguments)},touchend:function(t){return t.preventDefault(),e.touchEnd.apply(null,arguments)}}},[e._v("\n      ©\n    ")]),e._v("\n    2021 Ghanat Inc. All rights reserved.\n  ")])])}),[],!1,null,"7c88008e",null);t.default=component.exports;l()(component,{VFooter:d.a})},86:function(e,t,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(312),o(61)),c=o(66),l=o.n(c),d=o(411),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{dark:""}},[404===e.error.statusCode?o("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):o("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),o("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);t.a=component.exports;l()(component,{VApp:d.a})}},[[281,10,4,11]]]);