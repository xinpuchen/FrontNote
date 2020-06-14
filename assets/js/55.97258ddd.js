(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{484:function(t,e,v){"use strict";v.r(e);var a=v(55),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"事件传递机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件传递机制"}},[t._v("#")]),t._v(" 事件传递机制")]),t._v(" "),v("h2",{attrs:{id:"事件流（捕获，冒泡）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件流（捕获，冒泡）"}},[t._v("#")]),t._v(" 事件流（捕获，冒泡）")]),t._v(" "),v("blockquote",[v("p",[t._v("事件流：指从页面中接收事件的顺序，有冒泡流和捕获流。")])]),t._v(" "),v("p",[t._v("冒泡和捕获则描述了两种不同的顺序")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://www.peterchen.club/imgs/eventflow.png",alt:"img"}})]),t._v(" "),v("p",[t._v("假如我们点击一个 div, 实际上是先点击 document，然后点击事件传递到 div,而且并不会在这个 div 就停下，div 有子元素就还会向下传递，最后又会冒泡传递回 document，如上图")]),t._v(" "),v("h3",{attrs:{id:"dom0-级事件处理程序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom0-级事件处理程序"}},[t._v("#")]),t._v(" DOM0 级事件处理程序")]),t._v(" "),v("p",[t._v("基于 DOM0 的事件，对于同一个 dom 节点而言，只能注册一个，后边注册的 同种事件 会覆盖之前注册的")]),t._v(" "),v("p",[t._v("event.onclick = function(){}")]),t._v(" "),v("h3",{attrs:{id:"dom2-级事件处理程序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom2-级事件处理程序"}},[t._v("#")]),t._v(" DOM2 级事件处理程序")]),t._v(" "),v("p",[t._v("DOM2 支持同一 dom 元素注册多个同种事件，事件发生的顺序按照添加的顺序依次触发（IE 是相反的）\nDOM2 事件通过 addEventListener 和 removeEventListener 管理")]),t._v(" "),v("blockquote",[v("p",[t._v("addEventListener(eventName,handlers,boolean);removeEventListener(),两个方法都一样接收三个参数,第一个是要处理的事件名,第二个是事件处理程序,第三个值为 "),v("strong",[t._v("false")]),t._v(" 时表示在事件冒泡阶段调用事件处理程序,一般建议在冒泡阶段使用,特殊情况才在捕获阶段,"),v("strong",[t._v("true")]),t._v(" 时表示在事件捕获阶段调用事件处理程序。")])]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"event-方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-方法"}},[t._v("#")]),t._v(" Event 方法")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("event.stopPropagation")]),t._v("（阻止当前事件在 DOM 的进一步冒泡行，但不会影响该事件的其他监听方法执行）")]),t._v(" "),v("li",[v("code",[t._v("event.stopImmediatePropagation")]),t._v(" （不仅阻止事件冒泡，还会阻止该事件后面的监听方法执行）")]),t._v(" "),v("li",[v("code",[t._v("event.preventDefault")]),t._v(" (取消事件的默认动作)")]),t._v(" "),v("li",[v("code",[t._v("event.cancelBubble()")]),t._v(" (IE 兼容写法)")])])])}),[],!1,null,null,null);e.default=n.exports}}]);