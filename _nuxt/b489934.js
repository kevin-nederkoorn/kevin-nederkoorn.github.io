(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(o,t,d){var content=d(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,d(64).default)("9d36321e",content,!0,{sourceMap:!1})},358:function(o,t,d){"use strict";d(345)},359:function(o,t,d){var e=d(63)(!1);e.push([o.i,'.close-modal[data-v-6354bb06]{position:absolute;top:0;left:0;z-index:3;width:100%;height:100%}.modal-background[data-v-6354bb06]:before{position:fixed;z-index:2;content:"";top:0;left:0;width:100vw;height:100vh;background-color:#000;opacity:.7;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-name:show-modal-background-data-v-6354bb06;animation-name:show-modal-background-data-v-6354bb06}.my-modal[data-v-6354bb06]{position:absolute;z-index:10;display:block;top:50%;left:50%;transform:translate(-50%,-50%);max-width:80%;background-color:#17191c;border:1px solid #0c0f12;border-radius:2rem;box-shadow:0 0 10px #000;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-name:show-modal-data-v-6354bb06;animation-name:show-modal-data-v-6354bb06}@-webkit-keyframes show-modal-background-data-v-6354bb06{0%{opacity:0}to{opacity:.7}}@keyframes show-modal-background-data-v-6354bb06{0%{opacity:0}to{opacity:.7}}@-webkit-keyframes show-modal-data-v-6354bb06{0%{top:45%;opacity:0}to{top:50%;opacity:1}}@keyframes show-modal-data-v-6354bb06{0%{top:45%;opacity:0}to{top:50%;opacity:1}}.modal__header[data-v-6354bb06]{padding:1rem 2rem .5rem}.modal__body[data-v-6354bb06]{position:relative;display:block}.modal__body[data-v-6354bb06],.modal__footer[data-v-6354bb06]{padding:1rem 2rem}.modal-description[data-v-6354bb06],.modal-title[data-v-6354bb06]{color:#fff;margin-bottom:0}.modal-title[data-v-6354bb06]{font-size:1.25rem;color:var(--primary-color)}.modal-description[data-v-6354bb06]{font-size:1rem}',""]),o.exports=e},387:function(o,t,d){"use strict";d.r(t);var e={props:{modalDinge:{type:Object,default:function(){return{}}}},methods:{closeModal:function(){this.$nuxt.$emit("closeModal")}}},n=(d(358),d(54)),component=Object(n.a)(e,(function(){var o=this,t=o.$createElement,d=o._self._c||t;return d("div",{staticClass:"modal-background"},[d("div",{staticClass:"close-modal",on:{click:o.closeModal}}),o._v(" "),d("div",{staticClass:"my-modal",attrs:{id:"myModal"}},[d("div",{staticClass:"modal__header"},[d("h5",{staticClass:"modal-title"},[o._v(o._s(o.modalDinge.title))])]),o._v(" "),d("div",{staticClass:"modal__body"},[d("Comp-Gallery-modalSwiper",{attrs:{plaatjes:o.modalDinge.slides}})],1),o._v(" "),d("div",{staticClass:"modal__footer"},[d("p",{staticClass:"modal-description"},[o._v(o._s(o.modalDinge.description))])])])])}),[],!1,null,"6354bb06",null);t.default=component.exports}}]);