(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[16,17],{43:function(e,t){e.exports={whiteList:["/login"],theme:{"primary-color":"#396afe"}}},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(72),c=n(2),u=n(19),i=n(43),l=n.n(i);t.default=Object(o.b)("userStore")(Object(o.c)((function(e){console.log(e);var t=l.a.whiteList,n=e.route,a=n.path,o=n.name,i=n.children,s=n.component,p=n.authority,m=e.userStore,f=m.token,h=m.flatRoutes,d=function(t,n){return t?n?r.a.createElement(u.default,{route:e.route}):r.a.createElement(r.a.Fragment,null,t):r.a.createElement(u.default,{route:e.route})};return t.includes(a||"")?a.indexOf("login")>-1&&f&&""!==f?r.a.createElement(c.a,{key:a,to:"/"}):d(i,s):f&&""!==f?p?function(e){return!!h.includes(e)}(o)?d(i,s):d(void 0,"/pages/Exception/403"):d(i,s):r.a.createElement(c.a,{key:a,to:"/login"})})))}}]);