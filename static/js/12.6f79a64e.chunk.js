(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[12,13,35,36,37,38],{164:function(e,n,t){e.exports={background:"Content_background__2BaOI"}},165:function(e,n,t){e.exports={content:"Footer_content__2Q1KO"}},166:function(e,n,t){e.exports={background:"Header_background__3gh-U",trigger:"Header_trigger__18_i-"}},167:function(e,n,t){e.exports={logo:"Sider_logo__zZy1K"}},204:function(e,n,t){"use strict";var a=t(69),r=t(30),o=t(68),c=t(0),i=t.n(c),l=t(10),s=t.n(l),u=t(70),m=t(102),f=t(184),d=t(103);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){return"object"===Object(u.a)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(u.a)(e.icon)||"function"===typeof e.icon)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var a=e[t];switch(t){case"class":n.className=a,delete n.class;break;default:n[t]=a}return n}),{})}function v(e){return Object(m.generate)(e)[0]}function O(e){return e?Array.isArray(e)?e:[e]:[]}var h="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",C=!1;function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var w=function(e){var n,t,a=e.icon,r=e.className,l=e.onClick,s=e.style,u=e.primaryColor,m=e.secondaryColor,b=Object(o.a)(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),O=k;if(u&&(O={primaryColor:u,secondaryColor:m||v(u)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;Object(c.useEffect)((function(){C||(Object(d.insertCss)(e,{prepend:!0}),C=!0)}),[])}(),n=p(a),t="icon should be icon definiton, but got ".concat(a),Object(f.a)(n,"[@ant-design/icons] ".concat(t)),!p(a))return null;var j=a;return j&&"function"===typeof j.icon&&(j=E(E({},j),{},{icon:j.icon(O.primaryColor,O.secondaryColor)})),function e(n,t,a){return a?i.a.createElement(n.tag,g(g({key:t},y(n.attrs)),a),(n.children||[]).map((function(a,r){return e(a,"".concat(t,"-").concat(n.tag,"-").concat(r))}))):i.a.createElement(n.tag,g({key:t},y(n.attrs)),(n.children||[]).map((function(a,r){return e(a,"".concat(t,"-").concat(n.tag,"-").concat(r))})))}(j.icon,"svg-".concat(j.name),E({className:r,onClick:l,style:s,"data-icon":j.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},b))};w.displayName="IconReact",w.getTwoToneColors=function(){return E({},k)},w.setTwoToneColors=function(e){var n=e.primaryColor,t=e.secondaryColor;k.primaryColor=n,k.secondaryColor=t||v(n),k.calculated=!!t};var N=w;function P(e){var n=O(e),t=Object(a.a)(n,2),r=t[0],o=t[1];return N.setTwoToneColors({primaryColor:r,secondaryColor:o})}P("#1890ff");var _=c.forwardRef((function(e,n){var t=e.className,i=e.icon,l=e.spin,u=e.rotate,m=e.tabIndex,f=e.onClick,d=e.twoToneColor,b=Object(o.a)(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),g=s()("anticon",Object(r.a)({},"anticon-".concat(i.name),Boolean(i.name)),t),p=s()({"anticon-spin":!!l||"loading"===i.name}),y=m;void 0===y&&f&&(y=-1);var v=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,h=O(d),C=Object(a.a)(h,2),j=C[0],E=C[1];return c.createElement("span",Object.assign({role:"img","aria-label":i.name},b,{ref:n,tabIndex:y,onClick:f,className:g}),c.createElement(N,{className:p,icon:i,primaryColor:j,secondaryColor:E,style:v}))}));_.displayName="AntdIcon",_.getTwoToneColor=function(){var e=N.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},_.setTwoToneColor=P;n.a=_},44:function(e,n,t){"use strict";t.r(n);t(216);var a=t(217),r=t(0),o=t.n(r),c=t(164),i=t.n(c),l=a.a.Content;n.default=function(e){console.log("content",e);var n=e.children;return o.a.createElement(l,{className:i.a.background},n)}},45:function(e,n,t){"use strict";t.r(n);t(216);var a=t(217),r=t(0),o=t.n(r),c=t(165),i=t.n(c),l=a.a.Footer;n.default=function(e){return o.a.createElement(l,{className:i.a.content},"Ant Design \xa92020 Created by Ant UED")}},46:function(e,n,t){"use strict";t.r(n);t(216);var a=t(217),r=(t(412),t(411)),o=t(0),c=t.n(o),i=t(72),l=t(167),s=t.n(l);n.default=Object(i.b)("layoutStore")(Object(i.c)((function(e){var n=r.a.SubMenu,t=a.a.Sider,o=e.layoutStore.collapsed,i=e.children;return console.log("sider",i),c.a.createElement(t,{trigger:null,collapsible:!0,collapsed:o},c.a.createElement("div",{className:s.a.logo}),c.a.createElement(r.a,{theme:"dark",mode:"inline"},c.a.createElement(n,{title:"aaa"},c.a.createElement(r.a.Item,null,"aaa-1"),c.a.createElement(r.a.Item,null,"aaa-2"),c.a.createElement(r.a.Item,null,"aaa-3")),c.a.createElement(n,{title:"bbb"},c.a.createElement(r.a.Item,null,"bbb-1"),c.a.createElement(r.a.Item,null,"bbb-2"),c.a.createElement(r.a.Item,null,"bbb-3"))))})))},50:function(e,n,t){"use strict";t.r(n);t(216);var a=t(217),r=t(0),o=t.n(r),c=t(72),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},l=t(204),s=function(e,n){return r.createElement(l.a,Object.assign({},e,{ref:n,icon:i}))};s.displayName="MenuUnfoldOutlined";var u=r.forwardRef(s),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},f=function(e,n){return r.createElement(l.a,Object.assign({},e,{ref:n,icon:m}))};f.displayName="MenuFoldOutlined";var d=r.forwardRef(f),b=t(166),g=t.n(b);n.default=Object(c.b)("layoutStore")(Object(c.c)((function(e){var n=a.a.Header,t=e.layoutStore,r=t.collapsed,c=t.toggle,i=r?o.a.createElement(u,{className:g.a.trigger,onClick:function(){c()}}):o.a.createElement(d,{className:g.a.trigger,onClick:function(){c()}});return o.a.createElement(n,{className:g.a.background},i)})))},53:function(e,n,t){"use strict";t.r(n);t(216);var a=t(217),r=t(0),o=t.n(r),c=t(50),i=t(44),l=t(46),s=t(45);n.default=function(e){console.log("layout",e);var n=e.children;return o.a.createElement(a.a,{style:{minHeight:"100vh"}},o.a.createElement(l.default,null,n),o.a.createElement(a.a,null,o.a.createElement(c.default,null),o.a.createElement(i.default,null,n),o.a.createElement(s.default,null)))}}}]);