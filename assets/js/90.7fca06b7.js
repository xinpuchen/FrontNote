(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{519:function(t,s,a){"use strict";a.r(s);var n=a(55),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plugin-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-loader"}},[t._v("#")]),t._v(" plugin - loader")]),t._v(" "),a("h2",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),a("p",[t._v("对于 loader，它就是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://7xt6po.com1.z0.glb.clouddn.com/loader%E7%89%B9%E6%80%A7-1.png",alt:"imgs"}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.ts$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ts-loader'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" plugin")]),t._v(" "),a("p",[t._v("对于 plugin，它就是一个扩展器，它丰富了 wepack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，例如")]),t._v(" "),a("ul",[a("li",[t._v("run：开始编译")]),t._v(" "),a("li",[t._v("make：从 entry 开始递归分析依赖并对依赖进行 build")]),t._v(" "),a("li",[t._v("build-moodule：使用 loader 加载文件并 build 模块")]),t._v(" "),a("li",[t._v("normal-module-loader：对 loader 加载的文件用 acorn 编译，生成抽象语法树 AST")]),t._v(" "),a("li",[t._v("program：开始对 AST 进行遍历，当遇到 require 时触发 call require 事件")]),t._v(" "),a("li",[t._v("seal：所有依赖 build 完成，开始对 chunk 进行优化（抽取公共模块、加 hash 等）")]),t._v(" "),a("li",[t._v("optimize-chunk-assets：压缩代码")]),t._v(" "),a("li",[t._v("emit：把各个 chunk 输出到结果文件")])]),t._v(" "),a("p",[t._v("通过对节点的监听，从而找到合适的节点对文件做适当的处理")])])}),[],!1,null,null,null);s.default=e.exports}}]);