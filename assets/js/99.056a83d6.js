(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{529:function(t,s,a){"use strict";a.r(s);var e=a(55),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),a("h2",{attrs:{id:"setstate-的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate-的用法"}},[t._v("#")]),t._v(" setState 的用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 官方定义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updater"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/80/4fd1a155faedff00910dfabe5de143fc_hd.jpg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("首先将 newState 存入 pending 队列")]),t._v(" "),a("li",[t._v("根据 isBatchingUpdates 判断是否直接更新\n"),a("ul",[a("li",[t._v("False:遍历 dirtyComponents,调用 updateComponent,更新 pending state 和 props")]),t._v(" "),a("li",[t._v("True:保存组件到 dirtyComponents")])])])]),t._v(" "),a("p",[a("strong",[t._v("解释：")]),t._v(" 函数 batchedUpdates,会将 isbatchedUpdates 设置为 true,在 React 调用事件处理函数之前就会调用这个函数，造成的后果就是不会同步更新 state")]),t._v(" "),a("p",[a("strong",[t._v("原因：")]),t._v(" 每次进行 setState 必然触发更新过程，所以一是可以通过 shouldComponentUpdate 进行一个筛选，二是可以将之前的 setState 进行一个 merge 统一 render，保证 render 不是每次都执行，否则则十分消耗性能")]),t._v(" "),a("h2",{attrs:{id:"setstate-调用后，会触发哪些生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate-调用后，会触发哪些生命周期函数"}},[t._v("#")]),t._v(" setState 调用后，会触发哪些生命周期函数")]),t._v(" "),a("ul",[a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("componentWillUpdate")]),t._v(" "),a("li",[t._v("render "),a("strong",[t._v("(在 render 的时候才会更新 state)")])]),t._v(" "),a("li",[t._v("componentDidUpdate")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"updater"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updater"}},[t._v("#")]),t._v(" updater")]),t._v(" "),a("h4",{attrs:{id:"传统调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统调用"}},[t._v("#")]),t._v(" 传统调用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count : 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("在传统调用当中，执行完上面的两次 setState 后，count 为 1，不为 2")])]),t._v(" "),a("h5",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),a("p",[t._v("在调用 setState 时，不是同步变化的，所以 state 并没有变化(参见上述生命周期)，所以 setState 只是在重复设置一个值")]),t._v(" "),a("h4",{attrs:{id:"函数式调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式调用"}},[t._v("#")]),t._v(" 函数式调用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updater")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("preState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" preState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count : 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updater"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count: 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("updater"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count: 2")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("updater 可以是一个函数，函数返回 setState 需要更改的键值对对象")]),t._v(" "),a("li",[t._v("函数有两个形参，一个是 state,一个是 props")]),t._v(" "),a("li",[t._v("使用函数式调用的时候可以完成同步更新 state(但是依然是在 render 的时候更新 state)")])])])}),[],!1,null,null,null);s.default=n.exports}}]);