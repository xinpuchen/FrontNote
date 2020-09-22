(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{529:function(t,s,a){"use strict";a.r(s);var e=a(55),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-fiber-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber-详解"}},[t._v("#")]),t._v(" React-Fiber 详解")]),t._v(" "),a("h2",{attrs:{id:"什么是刷新率？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是刷新率？"}},[t._v("#")]),t._v(" 什么是刷新率？")]),t._v(" "),a("ul",[a("li",[t._v("大部分显示器屏幕都有固定的刷新率（比如最新的一般在 60Hz），所以浏览器更新最好是在 60fps")]),t._v(" "),a("li",[t._v("如果在两次硬件刷新之间浏览器进行两次重绘是没有意义的只会消耗性能")]),t._v(" "),a("li",[t._v("浏览器会利用这个间隔 16ms(一帧)适当地对绘制进行节流，如果在 16ms 内做了太多事情，会阻塞渲染，造成页面卡顿")]),t._v(" "),a("li",[t._v("因此 16ms 就成为页面渲染优化的一个关键时间")])]),t._v(" "),a("h2",{attrs:{id:"一帧做了哪些事情？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一帧做了哪些事情？"}},[t._v("#")]),t._v(" 一帧做了哪些事情？")]),t._v(" "),a("ul",[a("li",[t._v("events: 点击事件、键盘事件、滚动事件等")]),t._v(" "),a("li",[t._v("macro: 宏任务，如 setTimeout")]),t._v(" "),a("li",[t._v("micro: 微任务，如 Promise")]),t._v(" "),a("li",[t._v("rAF: requestAnimationFrame")]),t._v(" "),a("li",[t._v("Layout: CSS 计算，页面布局")]),t._v(" "),a("li",[t._v("Paint: 页面绘制")]),t._v(" "),a("li",[t._v("rIC: requestIdleCallback")])]),t._v(" "),a("p",[a("code",[t._v("window.requestIdleCallback()")]),t._v(" 方法将在浏览器的空闲时段内调用的函数排队:")]),t._v(" "),a("ol",[a("li",[t._v("这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应")]),t._v(" "),a("li",[t._v("函数一般会按先进先调用的顺序执行，然而，"),a("strong",[t._v("如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序")])])]),t._v(" "),a("h2",{attrs:{id:"fiber-做了哪些事情？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber-做了哪些事情？"}},[t._v("#")]),t._v(" Fiber 做了哪些事情？")]),t._v(" "),a("p",[t._v("Fiber 是对 React 核心算法的重构，2 年重构的产物就是 Fiber Reconciler")]),t._v(" "),a("p",[t._v("核心目标：扩大其适用性，包括动画，布局和手势")]),t._v(" "),a("ul",[a("li",[t._v("把可中断的工作拆分成小任务")]),t._v(" "),a("li",[t._v("对正在做的工作调整优先次序、重做、复用上次（做了一半的）成果")]),t._v(" "),a("li",[t._v("在父子任务之间从容切换（yield back and forth），以支持 React 执行过程中的布局刷新")]),t._v(" "),a("li",[t._v("支持 render() 返回多个元素")]),t._v(" "),a("li",[t._v("更好地支持 error boundary")])]),t._v(" "),a("blockquote",[a("p",[t._v("每一个 Virtual DOM 节点内部都会生成对应的 Fiber")])]),t._v(" "),a("h3",{attrs:{id:"怎么中断一个任务？利用单链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么中断一个任务？利用单链表"}},[t._v("#")]),t._v(" 怎么中断一个任务？利用单链表")]),t._v(" "),a("ol",[a("li",[t._v("存储数据的数据结构")]),t._v(" "),a("li",[t._v("数据以节点的形式表示，每个节点的构成：元素 + 指针(后续元素存储位置)，元素就是存储数据的存储单元")]),t._v(" "),a("li",[t._v("单链表是 Fiber 中很重要的一个数据结构，很多异步更新逻辑都是通过单链表结构来实现的(setState 中的 UpdateQueue 更新链表也是基于单链表结构)")])]),t._v(" "),a("h2",{attrs:{id:"react-中的-fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中的-fiber"}},[t._v("#")]),t._v(" React 中的 Fiber")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Fiber 的两个执行阶段")]),t._v(" "),a("ul",[a("li",[t._v("协调 Reconcile(render)：对 virtualDOM 操作阶段，对应到新的调度算法中，就是通过 Diff Fiber Tree 找出要做的更新工作，生成 Fiber 树。这是一个 js 计算过程，计算结果可以被缓存，计算过程可以被打断，也可以恢复执行。 所以，React 介绍 Fiber Reconciler 调度算法时，有提到新算法具有可拆分、可中断任务的新特性，就是因为这部分的工作是一个纯 js 计算过程，所以是可以被缓存、被打断和恢复的。")]),t._v(" "),a("li",[t._v("提交更新 commit: 渲染阶段，拿到更新工作，提交更新并调用对应渲染模块（React-DOM）进行渲染。为了防止页面抖动，该 过程是同步且不能被打断。")])])]),t._v(" "),a("li",[a("p",[t._v("React 中定义一个组件用来创建 Fiber")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B1")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("上面定义的 Component 是一个组件，babel 解析时候会默认调用 React.createElement()方法，最终生成下面代码所示这样的 virtualDOM 结构并传给 ReactDOM.render()方法进行调度")])]),t._v(" "),a("li",[a("p",[t._v("render 方法会接受 Virtual DOM，为每个 Virtual DOM 创建 Fiber(render 阶段)，并且按照一定关系连接接起来")])]),t._v(" "),a("li",[a("p",[t._v("Fiber 结构")]),t._v(" "),a("p",[t._v("Fiber 有很多属性，所有子节点 Fiber 的连接接是通过 child，return，sibling 链接起来，alternate 连接的是每一次更新的状态，用来对比每次状态更新以及缓存，我们使用节点的 id 来标识每个 Fiber 组件，转换为 Fiber 最终会生成如下图所示的结构，也是类似于 virtualDOM 结构的，构建的顺序是先 child => sibling => return，如果当前节点没有 child 了，这个节点就会完成")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FiberNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pendingProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标记不同组件类型，如 classComponent，functionComponent")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react 元素上的 key 就是 jsx 上写的那个 key，也就是最终    ReactElement 上的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createElement 的第一个参数，ReactElement 上的    type")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示 fiber 的真实类型 ，elementType 基本一样")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例对象，比如 class 组件 new 完后就挂载在这个属性上   面，如果是 RootFiber，那么它上面挂的是 FiberRoot")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fiber")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("return "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父节点，指向上一个 fiber")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子节点，指向自身下面的第一个 fiber")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兄弟组件, 指向一个兄弟节点")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  一般如果没有兄弟节点的话是 0 当某个父节点下的子节点是数组类型   的时候会给每个子节点一个 index，index 和 key 要一起做 diff")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ref "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reactElement 上的 ref 属性")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pendingProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pendingProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的 props")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 旧的 props")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fiber 上的更新队列 执行一次 setState 就会往这个属   性上挂一个新的更新, 每条更新最终会形成一个链表结构，最后做批量更新")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 memoizedProps，上次渲染的 state，相当于当   前的 state，理解成 prev 和 next 的关系")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示当前组件下的子组件的渲染方式")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// effects")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示当前 fiber 要进行何种更新")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向下个需要更新的 fiber")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向所有子节点里，需要更新的 fiber 里的第一个")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastEffect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向所有子节点中需要更新的 fiber 的最后一个")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expirationTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过期时间，代表任务在未来的哪个时间点应该被完成")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childExpirationTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoWork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// child 过期时间")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current 树和 workInprogress 树之间的相互引用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"fiber-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber-树"}},[t._v("#")]),t._v(" Fiber 树")]),t._v(" "),a("h3",{attrs:{id:"收集依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收集依赖"}},[t._v("#")]),t._v(" 收集依赖")]),t._v(" "),a("p",[t._v("收集依赖是在生成 Fiber 过程 (render 阶段) 中同时完成的，按照每个节点完成的顺序来构建链表，每个有了 Fiber 的组件通过自己的 nextEffect 指向下一个需要更新的组件，每一个父节点都有 firstEffect 和 lastEffect 来连接自己子节点的第一次更新和最后一次更新，最终会生成下图这样的更新链表")]),t._v(" "),a("h3",{attrs:{id:"提交更新-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交更新-commit"}},[t._v("#")]),t._v(" 提交更新 commit")]),t._v(" "),a("p",[t._v("全部节点创建完 Fiber 之后，会进入 commit 阶段，会从 root 的 fistEffect（所有节点的第一个副作用阶段）开始更新，然后找 firstEffect 的 nextEffect 节点，以此类推，一气呵成全部更新完，然后清空更新链表，完成此次更新，这个过程不可打断")]),t._v(" "),a("p",[t._v("原文链接："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/MFNDCrhb3Ui-ubfl56gErg",target:"_blank",rel:"noopener noreferrer"}},[t._v("解析 React 性能利器 — Fiber"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);