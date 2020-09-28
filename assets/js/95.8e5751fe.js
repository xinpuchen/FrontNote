(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{524:function(r,t,e){"use strict";e.r(t);var s=e(55),a=Object(s.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"错误监控原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误监控原理"}},[r._v("#")]),r._v(" 错误监控原理")]),r._v(" "),e("h2",{attrs:{id:"前端错误分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端错误分类"}},[r._v("#")]),r._v(" 前端错误分类")]),r._v(" "),e("ul",[e("li",[r._v("即时运⾏错误:代码错误")]),r._v(" "),e("li",[r._v("资源加载错误")])]),r._v(" "),e("h2",{attrs:{id:"错误的捕获⽅方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误的捕获⽅方法"}},[r._v("#")]),r._v(" 错误的捕获⽅方法")]),r._v(" "),e("ul",[e("li",[r._v("即时运⾏行行错误的捕获⽅方式:\n"),e("ol",[e("li",[r._v("try {} catch (){}")]),r._v(" "),e("li",[r._v("window.onerror")])])]),r._v(" "),e("li",[r._v("资源加载错误\n"),e("ol",[e("li",[r._v("object.onerror 比如 image object 可以通过 onerror 捕获加载错误，script 标签也可以通过添加 onerror 事件捕获加载错误")]),r._v(" "),e("li",[r._v("performance.getEntries() 获取所有已加载资源的加载时长，可以通过这个间接拿到没有加载资源的加载错误，通过 document.getElementsByTagName('img)，能拿到所有图⽚资源")])])]),r._v(" "),e("li",[r._v("Error 事件捕获(不是冒泡)")])]),r._v(" "),e("h2",{attrs:{id:"提问-跨域请求的-js-资源，其运⾏错误可以捕获吗-错误提示是什么-怎么处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提问-跨域请求的-js-资源，其运⾏错误可以捕获吗-错误提示是什么-怎么处理"}},[r._v("#")]),r._v(" 提问:跨域请求的 js 资源，其运⾏错误可以捕获吗? 错误提示是什么?怎么处理?")]),r._v(" "),e("p",[r._v('window.onerror 事件做过监控，跨域的 js 脚本会给出 "Script Error." 提示，拿不到具体的错误信息和堆栈信息。')]),r._v(" "),e("p",[e("strong",[r._v("解决办法:")])]),r._v(" "),e("ol",[e("li",[r._v("script 标签加上 "),e("code",[r._v("crossorigin")]),r._v(" 属性")]),r._v(" "),e("li",[r._v("在 server 端的 js 资源设置响应头: "),e("code",[r._v("Access-Control-Allow-Origin: *")])])]),r._v(" "),e("h2",{attrs:{id:"上报错误的基本原理理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上报错误的基本原理理"}},[r._v("#")]),r._v(" 上报错误的基本原理理")]),r._v(" "),e("ul",[e("li",[r._v("采⽤用 "),e("code",[r._v("ajax")]),r._v(" 通信⽅方式上报")]),r._v(" "),e("li",[r._v("利用 "),e("code",[r._v("Image")]),r._v(" 对象上报(⼤多数采⽤)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);