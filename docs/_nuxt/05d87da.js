(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{433:function(e,t,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("e8b41e5e",content,!0,{sourceMap:!1})},434:function(e,t,r){var n=r(17)(!1);n.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=n},439:function(e,t,r){"use strict";r.r(t);var n={name:"Section",props:{id:String,subtitle:String,text:String}},o=r(60),c=r(65),l=r.n(c),d=r(461),h=r(465),f=r(455),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{id:e.id}},[r("v-col",[r("v-subheader",{staticClass:"text-h3 my-4 text-decoration-underline"},[e._v(e._s(e.subtitle))])],1),e._v(" "),r("v-col",[r("p",{staticClass:"text-center"},[e._v(e._s(e.text))])]),e._v(" "),e._t("default")],2)}),[],!1,null,"5d6785ea",null);t.default=component.exports;l()(component,{VCol:d.a,VContainer:h.a,VSubheader:f.a})},455:function(e,t,r){"use strict";r(11),r(9),r(13),r(4),r(14),r(8),r(15);var n=r(2),o=(r(433),r(22)),c=r(6);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:d({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);