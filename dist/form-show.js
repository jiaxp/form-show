!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("form-show",[],e):"object"==typeof exports?exports["form-show"]=e():t["form-show"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=7)}([function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+b+'~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(_){var i=p++;r=d||(d=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),v.ssrId&&t.setAttribute(b,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f=n(11),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,m=function(){},v=null,b="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){h=n,v=o||{};var i=f(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}e?(i=f(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,s=t.default);var f="function"==typeof s?s.options:s;e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o);var u;if(i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=u):r&&(u=r),u){var c=f.functional,d=c?f.render:f.beforeCreate;c?(f._injectStyles=u,f.render=function(t,e){return u.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:f}}},function(t,e,n){"use strict";e.a={name:"FormShow",props:{labelWidth:[String,Number],labelSuffix:{type:String,default:"："},labelPosition:{type:String,default:"right"},backgroundColor:{type:String,default:"#ffffff"}},data:function(){return{maxLabelWidth:void 0}},computed:{styleCss:function(){return{backgroundColor:this.backgroundColor}}},created:function(){"String"===this.getObjectType(this.labelWidth)?this.maxLabelWidth=this.labelWidth:"Number"===this.getObjectType(this.labelWidth)&&(this.maxLabelWidth=this.labelWidth+"px")},methods:{setLabelWidth:function(t){var e=this.maxLabelWidth?Number(this.maxLabelWidth.replace("px","")):0;this.maxLabelWidth=Math.max(e,t)+"px"},getObjectType:function(t){var e=Object.prototype.toString.call(t),n=/^\[object\s([a-zA-Z]+)\]$/;return e.match(n)[1]}}}},function(t,e,n){"use strict";e.a={name:"FormShowRow",data:function(){return{}},methods:{}}},function(t,e,n){"use strict";e.a={name:"FormShowCol",props:{span:{type:Number,default:24}},data:function(){return{}},computed:{colStyle:function(){return{width:100*Math.min(24,this.span)/24+"%"}}},methods:{}}},function(t,e,n){"use strict";e.a={name:"FormShowItem",props:{label:String},data:function(){return{}},computed:{form:function(){for(var t=this.$parent,e=t.$options.name;"FormShow"!==e;)t=t.$parent,e=t.$options.name;return t},labelWidth:function(){return this.form?this.form.maxLabelWidth:void 0},labelStyle:function(){var t={};if("top"===this.form.labelPosition)return t;var e=this.labelWidth,n=this.form.labelPosition;return e&&(t.width=e),n&&(t.textAlign=n),t}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$refs.label.clientWidth;t.form.labelWidth||t.form.setLabelWidth(e)})},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(13),i=n(17),a=n(21),s={install:function(t){t.component(r.a.name,r.a),t.component(o.a.name,o.a),t.component(i.a.name,i.a),t.component(a.a.name,a.a)}};"undefined"!=typeof window&&window.Vue&&s.install(window.Vue),e.default=s},function(t,e,n){"use strict";function r(t){n(9)}var o=n(3),i=n(12),a=n(2),s=r,l=a(o.a,i.a,!1,s,"data-v-44852ad9",null);e.a=l.exports},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("5918461d",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".form-show[data-v-44852ad9]{width:100%;border:1px solid #e4e7ed;border-bottom:none;border-right:none;background-color:#fff}",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],l=i[2],f=i[3],u={id:t+":"+o,css:s,media:l,sourceMap:f};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"form-show",style:t.styleCss},[t._t("default")],2)},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";function r(t){n(14)}var o=n(4),i=n(16),a=n(2),s=r,l=a(o.a,i.a,!1,s,"data-v-90750e0c",null);e.a=l.exports},function(t,e,n){var r=n(15);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("1524d713",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".form-show_row[data-v-90750e0c]{display:flex;flex-direction:row}",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"form-show_row"},[t._t("default")],2)},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";function r(t){n(18)}var o=n(5),i=n(20),a=n(2),s=r,l=a(o.a,i.a,!1,s,"data-v-7ad59629",null);e.a=l.exports},function(t,e,n){var r=n(19);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("3e5d6901",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".form-show_col[data-v-7ad59629]{border-right:1px solid #e4e7ed;border-bottom:1px solid #e4e7ed}",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"form-show_col",style:t.colStyle},[t._t("default")],2)},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";function r(t){n(22)}var o=n(6),i=n(24),a=n(2),s=r,l=a(o.a,i.a,!1,s,"data-v-1d7f71e8",null);e.a=l.exports},function(t,e,n){var r=n(23);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("20a34f21",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".form-show_item[data-v-1d7f71e8]{height:100%;font-size:13px;color:#303133;line-height:20px;display:flex;flex-direction:row}.form-show_item>.form-show_item__label[data-v-1d7f71e8]{position:relative;color:#909399;font-weight:700;padding:6px 0 6px 12px;display:flex;flex-direction:row}.form-show_item>.form-show_item__label>.form-show_item__label__text[data-v-1d7f71e8]{flex:1;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.form-show_item>.form-show_item__label>.form-show_item__label__suffix[data-v-1d7f71e8]{min-width:14px;text-align:center}.form-show_item>.form-show_item__content[data-v-1d7f71e8]{flex:1;word-break:break-all;border-left:1px solid #e4e7ed;padding:6px 12px}",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-show_item"},[n("label",{ref:"label",staticClass:"form-show_item__label",style:t.labelStyle,attrs:{title:t.label}},[n("span",{staticClass:"form-show_item__label__text"},[t._v(t._s(t.label))]),t._v(" "),n("span",{staticClass:"form-show_item__label__suffix"},[t._v(t._s(t.label?t.form.labelSuffix:""))])]),t._v(" "),n("div",{staticClass:"form-show_item__content"},[t._t("default")],2)])},o=[],i={render:r,staticRenderFns:o};e.a=i}])});
//# sourceMappingURL=form-show.js.map