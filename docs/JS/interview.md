# 前端面试题(想到什么写什么)

* ## Vue部分
  * 解释一下mvvm框架
    * model =》 数据 
    * view =》 视图层 dom  
    * vm =》 model和view通讯的中间件 会实现一个 observe观察者模式 当数据发生变化vm可以通知到对应的view做页面的更新
  * Vue的核心
    * 数据驱动 也就是说 vue给dom做了一层封装 当数据发生变化以后 通过指令来修改dom  当操作视图并且引起数据变化的时候vue也会对数据进行更新
  * 解释一下双向绑定的原理
    * 双向绑定是利用了object.definePrototype中的getter和setter方法 同时vue也会生成一个指令对象 这个指令对象关联一个watcher 当对vue指令进行操作的时候 例如求值操作 那么就会触发getter方法 同时 如果当值发生变化了以后 就会触发setter方法 watcher会比较新的值和旧的值 如果发生变化 就会更新dom
  
  * vue的生命周期
    * ```beforeCreated```
    * ```created```
    * ```beforeMounted```
    * ```mounted```
    * ```beforeDestoryed```
    * ```destoryed```
    * ```beforeUpdate```
    * ```updated```
    需要注意的是```beforeDestroy```是要我们自己手动调用的 然后才会执行```destoryed``` 最后的两个生命周期 只有在数据更新的时候 才会被调用
  
  * ```computed```和```watch```的区别
    * 前者拥有缓存机制 也就是说 假设页面下的某个值 如果没有发生变化 前者只会执行一次 性能更高 computed更适用于计算一些已经有的值 而watch更适用于监听接口返回的某个值

  * router中```params```和```query```传参的区别
    * params传参的时候 push的必须是路由的name 
    ```js
    // 传值
    this.$router.push({
      name: 'xxx',
      params: {
        id: '1'
      }
    })
    // 取值
    this.$route.params.id
    ```
    * query传参的时候 push的时候写的是path
    ```js
    this.$router.push({
      path: '/xxx',
      query: {
        id: '1'
      }
    })
    this.$route.query.id
    ```
    * query的参数会直接显示在url上 而params并不会 类似于get请求和post请求
    * $router相当于是router的实例而$route相当于当前路由跳转之后的对象

  * 为什么v-for的时候 需要加上key
    * 为了更高效的更新虚拟dom 降低时间复杂度

  * 为什么组件里的data需要是一个函数
    * 为了防止各个组件中的数据相互污染 所以vue规定 组件中的data必须是一个函数

  * 解释一下单向数据流
    * vue提倡单向数据流 也就是说 父组件传递给子组件的值 父组件可以随意修改 但是子组件无法修改 这样做的好处在于 可以避免 如果有多个页面共用了同一个值
    如果子组件修改了某个值 那有可能造成其他组件也跟着修改了这个值 那显然不是我们希望看到的
  
  * 稍微描述一下Vuex
    * 首先vuex适用于一些同级组件或者完全八竿子打不着关系的组件之间进行传值
    * state: 组件之间需要公用的值 可以存放在state里
    * actions: 存放的是异步操作或者是批量的同步操作 组件通过```dispatch```调用actions
    * mutations: 存放的是一些同步方法 对state的修改 actions通过```commit```调用

* ## Javascript基础部分
  * Javascript中的数据类型
    * ```String```
    * ```Number```
    * ```Boolean```
    * ```Object```
    * ```undefined```
    * ```null```

  * JS根据变量存储方式的不同把数据类型分为哪两种类型 分别是什么
    * 值类型: String Number Boolean Undefined null
    * 引用类型: Object

  * 引用类型和值类型的区别
    * 引用类型: 两个值相同的引用类型 由于指向的都是相同的内存地址 如果改变了其中一个那么另一个的值也会跟着改变
    * 值类型: 每个变量都是相互独立的 不会相互影响
  * typeOf和instanceOf的区别
    * typeof只能区分值类型 唯一可以区分的引用类型是```Function``` instanceof用于区分引用类型
    ```js
    typeof(null) // 返回object 
    ```
  * instanceof的原理
    * 首先 需要知道的是 实例和原型对象之间是通过```__proto__```关联的 而原型对象又是通过```prototype```和构造函数关联 
    ```js
    var obj={x:100,y:200}
    obj.__proto__ === Object.prototype // true
    instanceof(obj) // Object
    ```
    * 用instanceof去判断某个引用对象是否是特定类的实例其实并不准确 最好的方法还是用 某个实例的```constructor```去判断

  * 解释一下eventloop
    * 在JS的运行栈中 JS会先执行同步任务 当所有的同步任务都已经执行完毕了以后 再返回来执行异步任务 并且执行完一个异步以后 去查找下一个异步任务 直到所有的事件都被处理完
    ```js
    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 0)
    console.log(3)
    // 输出顺序 1 3 2 先执行同步再执行异步
    ```
  * 理解异步任务被放入任务栈和执行时间
  ```js
  for(var i = 0; i < 3; i++) {
    setTimeout((i) => {
      console.log(i)
    },1000)
  }
  // 永远输出的是2 因为首先执行同步任务 当for循环结束以后 才会执行setTimeout 一个for循环可能只需要几毫秒 但是setTimeout过了1秒才执行打印 这个时候 for循环已经结束了
  ```
  * JavaScript中的继承方式
    * 通过改变this指向继承
  ```js
   function Car (type) {
     this.type = '车'
   }
   new Car()

   function Audi () {
     Car.apply(this)
     this.name = '奥迪'
   }
  ```
    * 通过改变this指向继承 这样的继承方式有一个问题就是 无法继承原型链上的一些方法和属性
    * 通过原型链继承
    ```js
    function Parent () {
      this.type = 'parent'
    }
    function Child () {
      this.name = 'Child'
    }
    // 将child的原型指向Parent
    Child.prototype = new Parent()
    var c = new Child()
    console.log(c) // {type:'parent',name:'Child'}  c的__proto__ 指向了 Parent 同时继承了 type这个属性 
    ```
  * 为什么class里需要写一句```super()```
    * 为了执行父类的构造函数  
  * 解释一下暂时性死区
    * 在块及作用域中 如果访问一个未声明的变量 那么会返回一个undefined 如果在块及作用域外 会报引用错误

  * 箭头函数和普通函数的区别
    * 箭头函数没有this指向
    * 箭头函数无法通过arguments访问函数
    * 箭头函数没有constructor
    * 箭头函数无法改变this指向
    * 箭头函数不支持重复的命名
    * 箭头函数没有原型

  * 手写一个Ajax请求
    ```js
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadtstatechange = function () {
        if (xhr.readystate == 4) {
            //响应内容解析完成，可以在客户端调用了
            if (xhr.status == 200) {
                //客户端的请求成功了
                alert(xhr.responseText);
            }
        }
    }
    xhr.send(null);
    /** readystate状态 
    0 未初始化还没有调用send 
    1 载入状态 已调用send 
    2 载入完成 已经收到全部的响应内容
    3 正在解析响应内容
    4 解析完毕 可以在客户端调用
    */
    ```
  * 浏览器从输入URL到页面渲染的过程
    * 浏览器解析地址
    * 解析dns
    * 寻找服务器地址
    * tcp三次握手
    * 浏览器发送数据 等待服务器响应
    * 服务器处理请求 并返回给浏览器
    * 浏览器收到响应内容 得到html代码
    * 渲染页面

  * GET请求和POST请求的区别  
    * GET请求参数暴露在URL里 POST不会
    * GET请求在浏览器回退的时候是无害的 不会提交二次请求
    * GET请求参数放在URL里 POST请求放在Request header中
    * GET请求参数长度有限制 POST没有
    * GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
    * GET请求参数数据类型只接受ASCII字符，而POST没有限制。
    * GET请求会参数被完整的保留在浏览器历史记录里 POST不会
    * GET产生的URL地址可以被Bookmark，而POST不可以
    * GET请求只能进行url编码，而POST支持多种编码方式

## CSS部分
  * 实现一个三栏布局
    * float
    * 绝对定位
    * flex布局
    * table布局
    * grid布局

  * 标准盒模型和IE盒模型的区别
    * 标准盒模型的content宽高就是标准的content宽高
    * IE盒子模型的content包含了```padding```和```border```

  * 实现水平垂直居中的方式
    * 不确定宽高的情况下 可以用绝对定位+transform
    * 确定宽高的情况下可以用绝对定位+margin
    * 确定宽高的情况下 可以用绝对定位 top left bottom right 都为0 margin为auto
    * flex布局
    * display: table-cell
    ```css
      .table-cell {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      width: 240px;
      height: 180px;
      border:1px solid #666;
      }
    ```
## 浏览器性能优化
  * 触发浏览器重排
    * DOM 结构中的各个元素都有自己的盒子模型 这些都需要浏览器根据各种样式来计算并根据结果将元素放到它该出现的位置 这个过程就是重排
    * 增加、删除、修改DOM节点时 会导致重排或者重绘
    * 当移动Dom的位置 或者有动画的情况
    * 当修改CSS样式的时候
    * 当浏览器窗口大小发生变化 或者滚动的时候
    * 修改浏览器字体大小
  * 触发浏览器重绘
    * 什么是重绘: 当各种盒子的位置、大小以及其他属性都确定以后 浏览器把元素按照各自特性绘制 这个过程就是重绘
    * 页面内容发生变化 一定会触发重绘  
  * 性能优化
    * 使用浏览器缓存 强缓存 协商缓存
    * 资源压缩合并 减少http请求
    * 使用DNS预解析
    * 异步加载资源 ```defer``` ```async``` 前者是在HTML解析完之后才执行 如果是多个 按照加载顺序依次执行 后者是在加载完之后立即执行 如果是多个 执行顺序和加载顺序无关
    * 使用CDN