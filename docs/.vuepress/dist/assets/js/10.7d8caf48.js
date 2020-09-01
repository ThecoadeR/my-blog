(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{203:function(t,e,a){t.exports=a.p+"assets/img/context.6e76ad7e.jpg"},228:function(t,e,a){"use strict";a.r(e);var v=a(28),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"react16新特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react16新特性"}},[t._v("#")]),t._v(" React16新特性")]),t._v(" "),v("h2",{attrs:{id:"生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),v("h3",{attrs:{id:"组件初始化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件初始化"}},[t._v("#")]),t._v(" 组件初始化")]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"constructor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" Constructor")])])]),t._v(" "),v("ol",[v("li",[t._v("用于初始化组建内部状态")]),t._v(" "),v("li",[t._v("唯一可以直接修改State的地方 (由于是在constructor中 所以可以直接通过 "),v("code",[t._v("this.state = xxx")]),t._v(" 直接修改 而不需要通过"),v("code",[t._v("setState")]),t._v(")")])]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"getderivedstatefromprops"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops"}},[t._v("#")]),t._v(" getDerivedStateFromProps")])])]),t._v(" "),v("ol",[v("li",[t._v("当state需要从props初始化时使用")]),t._v(" "),v("li",[t._v("尽量不要使用 => "),v("span",{staticStyle:{color:"red"}},[t._v("维护两者状态一致性会增加复杂度")])]),t._v(" "),v("li",[t._v("每次render都会调用")]),t._v(" "),v("li",[t._v("典型场景: 获取表单控件默认值")])]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"componentdidmount"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount")])])]),t._v(" "),v("ol",[v("li",[t._v("UI渲染完以后调用")]),t._v(" "),v("li",[t._v("只执行一次")]),t._v(" "),v("li",[t._v("场景: 获取外部资源 => 发起ajax请求")])]),t._v(" "),v("h3",{attrs:{id:"组件卸载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件卸载"}},[t._v("#")]),t._v(" 组件卸载")]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"componentwillunmount"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnMount")])])]),t._v(" "),v("ol",[v("li",[t._v("组件移除时被调用")]),t._v(" "),v("li",[t._v("场景: 资源释放 => 清空定时器")])]),t._v(" "),v("h3",{attrs:{id:"组件更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件更新"}},[t._v("#")]),t._v(" 组件更新")]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"getsnapshotbeforeupdate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")])])]),t._v(" "),v("ol",[v("li",[t._v("在render之前被调用 此时state已被更新")]),t._v(" "),v("li",[t._v("场景: 获取render之前的Dom状态")])]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"componentdidupdate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate")])])]),t._v(" "),v("ol",[v("li",[t._v("每次UI更新时被调用")]),t._v(" "),v("li",[t._v("场景: 页面根据props变化重新获取数据")])]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"shouldcomponentupdate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate"}},[t._v("#")]),t._v(" shouldComponentUpdate")])])]),t._v(" "),v("ol",[v("li",[t._v("决定虚拟dom是否要重绘")]),t._v(" "),v("li",[t._v("一般可以由"),v("code",[t._v("PureComponent")]),t._v("自动实现")]),t._v(" "),v("li",[t._v("场景: 性能优化")])]),t._v(" "),v("h2",{attrs:{id:"virtual-dom以及key"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom以及key"}},[t._v("#")]),t._v(" Virtual Dom以及key")]),t._v(" "),v("ul",[v("li",[v("h3",{attrs:{id:"广度优先分层比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#广度优先分层比较"}},[t._v("#")]),t._v(" 广度优先分层比较")]),t._v(" "),v("ol",[v("li",[t._v("从根结点开始比较")]),t._v(" "),v("li",[t._v("如果是属性变化或者是顺序变化 => 通过组件标识 然后交换节点位置")]),t._v(" "),v("li",[t._v("如果组件类型发生变化 => 直接删除的原有节点并替换")]),t._v(" "),v("li",[t._v("节点跨层移动 => 删除原有的节点 在新层级下append节点 (性能比较低)")])])])]),t._v(" "),v("h2",{attrs:{id:"context-api-切勿滥用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#context-api-切勿滥用"}},[t._v("#")]),t._v(" Context Api "),v("span",{staticStyle:{color:"red","font-size":"16px"}},[t._v("切勿滥用")])]),t._v(" "),v("ul",[v("li",[t._v("定义\n"),v("ul",[v("li",[t._v("提供了一种方式 能够让数据在组件树中传递 而不需要一层一层的向下props")]),t._v(" "),v("li",[t._v("类似"),v("code",[t._v("vue")]),t._v("中的"),v("code",[t._v("provide/inject")])])])]),t._v(" "),v("li",[t._v("创建\n"),v("ul",[v("li",[v("code",[t._v("React.createContent(val)")])]),t._v(" "),v("li",[v("code",[t._v("val")]),t._v(" 如果"),v("code",[t._v("Consumer")]),t._v("找不到对应的"),v("code",[t._v("Provider")]),t._v(" 那么就会使用传入的val")]),t._v(" "),v("li",[t._v("需要创建一个"),v("code",[t._v("Provider")]),t._v("和一个"),v("code",[t._v("Consumer")])]),t._v(" "),v("li",[t._v("示例代码\n"),v("img",{attrs:{src:a(203),alt:""}})])])])]),t._v(" "),v("h2",{attrs:{id:"purecomponent和memo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent和memo"}},[t._v("#")]),t._v(" PureComponent和memo")]),t._v(" "),v("ul",[v("li",[t._v("两者都可以避免组件的重复渲染 减少性能开销")]),t._v(" "),v("li",[t._v("前者为类组件使用 后者为函数式组件使用")])]),t._v(" "),v("h2",{attrs:{id:"hooks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),v("ul",[v("li",[t._v("定义\n"),v("ul",[v("li",[t._v("在函数组件中使用特定的预定义函数来标记状态和组件生命周期 使得所有组件都可以使用函数来编写")])])]),t._v(" "),v("li",[t._v("优化了类组件的三大问题\n"),v("ol",[v("li",[t._v("函数组件无"),v("code",[t._v("this")]),t._v("指向问题")]),t._v(" "),v("li",[t._v("自定义hook方便复用逻辑")]),t._v(" "),v("li",[t._v("副作用的关注点分离 => 副作用指视图修改以外的所有事件 例如: ajax请求 本地持久化缓存 绑定事件等")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);