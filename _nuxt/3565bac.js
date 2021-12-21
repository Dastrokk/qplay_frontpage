(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,n,e){"use strict";e.r(n);var r=e(4),o=(e(40),{data:function(){return{players:-1,playersMax:-1,timer:null}},computed:{playersShow:function(){return this.players>-1?this.players:"---"},playersMaxShow:function(){return this.playersMax>-1?this.playersMax:"---"}},mounted:function(){this.fetchPlayers(),this.timer=setInterval(this.fetchPlayers,5e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{fetchPlayers:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("https://info.qplay.cz/playersCount.aspx");case 2:return data=n.sent,n.next=5,t.$axios.$get("https://info.qplay.cz/playersMax.aspx");case 5:e=n.sent,data&&(t.players=data),e&&(t.playersMax=e);case 8:case"end":return n.stop()}}),n)})))()}}}),c=e(31),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nuxt-link",{attrs:{to:"/vip"}},[e("section",{staticClass:"banner zoomBanner"},[t._v(" ")])]),t._v(" "),t._m(0),t._v(" "),e("section",{staticClass:"wrapper style2"},[e("div",{staticClass:"container"},[e("header",{staticClass:"major"},[e("h2",[t._v("mc.qplay.cz")]),t._v(" "),e("p",[t._v("Online Players: "+t._s(t.playersShow)+"/"+t._s(t.playersMaxShow))])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"banner",staticStyle:{"background-image":"none",height:"inherit"}},[e("header",{staticClass:"external",staticStyle:{position:"relative"}},[e("a",{staticClass:"button",attrs:{href:"https://info.qplay.cz/",target:"_blank"}},[t._v("\n        Přihlášení do Info Panelu\n      ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"wrapper style3",attrs:{id:"cta"}},[e("div",{staticClass:"container"},[e("header",[e("h2",[t._v("Chceš se také připojit?")]),t._v(" "),e("a",{staticClass:"button",attrs:{href:"/jak-se-pripojit"}},[t._v("Klikni zde")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"wrapper style1"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row 200%"},[e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/coalblock.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("MiniAnnihilation")]),t._v(" "),e("p",[t._v("\n              Natěž si suroviny, ze kterých si vytvoříš své brnění a nástroje.\n              Ovládni střed mapy, abys získal i diamantové věci. Poté znič\n              nexus ostatním týmům.\n            ")])])]),t._v(" "),e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/ender_pearl.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("SkyWars")]),t._v(" "),e("p",[t._v("\n              Posbírej z truhel na ostrovech ty nejlepší věci pro boj a zabij\n              všechny nepřátele.\n            ")])])]),t._v(" "),e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/minecraft_golden_apple.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("MiniUHC")]),t._v(" "),e("p",[t._v("\n              Natěž si ve volné přírodě co nejlepší suroviny a zabij všechny\n              nepřátele.\n            ")])])])]),t._v(" "),e("div",{staticClass:"row 200%"},[e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/1vs1.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("1vs1")]),t._v(" "),e("p",[t._v("\n              Myslíš si, že jsi výborný zabiják? Dokaž to! Vyzvi svého\n              kamaráda nebo náhodného hráče na souboj a zab ho.\n            ")])])]),t._v(" "),e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/bed.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("BedWars")]),t._v(" "),e("p",[t._v("\n              Nasbírej na svém ostrově co nejvíce ingotů (bronze, iron, gold),\n              zakup si věci u vesničana a znič postel ostatním týmům.\n            ")])])]),t._v(" "),e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/crystals.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("Crystals")]),t._v(" "),e("p",[t._v("\n              Natěž si na svém ostrově suroviny, zakup si u vesničana\n              speciální předměty a připrav se k boji. Jakmile budeš připraven,\n              znič srdce ostatním týmům.\n            ")])])])]),t._v(" "),e("div",{staticClass:"row 200%"},[e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/gold_ingot.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("GoldRush")]),t._v(" "),e("p",[t._v("\n              Nakup si za získané levely věci k boji a získej od pig-zombie\n              pro svůj tým co nejvíce zlatých cihel.\n            ")])])]),t._v(" "),e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/nether_star.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("MicroBattle")]),t._v(" "),e("p",[t._v("\n              Chop se zbraně se svým spoluhráčem a vyzabíjej na mapě všechny\n              nepřátele.\n            ")])])]),t._v(" "),e("section",{staticClass:"4u 12u(narrower)"},[e("div",{staticClass:"box highlight"},[e("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/ironsword.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),e("h3",[t._v("Murder Mystery")]),t._v(" "),e("p",[t._v("\n              Sbírej gold ingoty, za které získáš šíp, a následně zabij\n              Murdera. V roli Murdera zabij všechny ostatní hráče.\n            ")])])])])])])}],!1,null,null,null);n.default=component.exports}}]);