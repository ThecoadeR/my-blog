
### 前端面试题
<!--
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-02-29 17:17:00
 * @LastEditTime: 2020-02-29 17:44:33
 -->
* ## Vue部分
  * #### 解释一下mvvm框架
    * model =》 数据 
    * view =》 视图层 dom  
    * vm =》 model和view通讯的中间件 会实现一个 observe观察者模式 当数据发生变化vm可以通知到对应的view做页面的更新
  * #### Vue的核心
    * 数据驱动 也就是说 vue给dom做了一层封装 当数据发生变化以后 通过指令来修改dom  当操作视图并且引起数据变化的时候vue也会对数据进行更新
  * #### 解释一下双向绑定的原理
    * 双向绑定是利用了object.definePrototype中的getter和setter方法 同时vue也会生成一个指令对象 这个指令对象关联一个watcher 当对vue指令进行操作的时候 例如求值操作 那么就会触发getter方法 同时 如果当值发生变化了以后 就会触发setter方法 watcher会比较新的值和旧的值 如果发生变化 就会更新dom
  
  * #### vue的生命周期
    * ```beforeCreated```
    * ```created```
    * ```beforeMounted```
    * ```mounted```
    * ```beforeDestoryed```
    * ```destoryed```
    * ```beforeUpdate```
    * ```updated```
    * ```active```
    * ```deactived```
    * 后两个为keep-live专属
    
  * ### 父子组件生命周期
    父beforeCreated -> 父created -> 父beforeMounted -> 子beforeCreated -> 子created -> 子beforeMounted -> 子mounted -> 父mounted
    
  * #### ```computed```和```watch```的区别
    * 前者拥有缓存机制 也就是说 假设页面下的某个值 如果没有发生变化 前者只会执行一次 性能更高 computed更适用于计算一些已经有的值 而watch更适用于监听接口返回的某个值

  * #### router中```params```和```query```传参的区别
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

  * #### 为什么v-for的时候 需要加上key
    * 为了更高效的更新虚拟dom 降低时间复杂度 diff算法相关

  * #### 为什么组件里的data需要是一个函数
    * 为了防止各个组件中的数据相互污染 所以vue规定 组件中的data必须是一个函数

  * #### 解释一下单向数据流
    * vue提倡单向数据流 也就是说 父组件传递给子组件的值 父组件可以随意修改 但是子组件无法修改 这样做的好处在于 可以避免 如果有多个页面共用了同一个值
    如果子组件修改了某个值 那有可能造成其他组件也跟着修改了这个值 那显然不是我们希望看到的
  
  * #### 稍微描述一下Vuex
    * 首先vuex适用于一些同级组件或者完全八竿子打不着关系的组件之间进行传值
    * state: 组件之间需要公用的值 可以存放在state里
    * actions: 存放的是异步操作或者是批量的同步操作 组件通过```dispatch```调用actions
    * mutations: 存放的是一些同步方法 对state的修改 actions通过```commit```调用
    * actions和mutations最大的区别就是前者是异步的后者是同步的
  
  * #### 尝试用js模拟vnode
  ```html
  // html代码
  <div class="div-container" id="div">
    <p>vnode</p>
    <div>
      <p style="font-size: 12px">try to describe V-node by using js</p>
    </div> 
  </div>
  ```

  ```js
  // 用js对象模拟出的vnode
  {
    tag: 'div',
    props: {
      className: 'div-container',
      id: 'div'
    },
    children: [
      {
        tag: 'p',
        children: 'vnode'
      },
      {
        tag: 'div',
        children: [
          tag: 'p',
          props: {
            style: 'font-size: 20px'
          },
          children: 'try to describe V-node by using js'
        ]
      }
    ]
  }
  ```

  * #### 描述vue模板渲染以及更新的过程
    * 初次渲染
      * 解析模板为render函数
      * 触发响应式(Object.defineProptrty)
      * 执行render函数 生成vnode
      * patch(ele, vnode)

    * 数据更新
      * 触发obj.defineProperty的setter
      * 执行render函数 生成 newVnode
      * patch(vnode, newVnode)

  * #### Vue为什么要异步渲染
    * 整合data修改 提高渲染性能


* ## Javascript基础部分
  * #### Javascript中的数据类型
    * ```String```
    * ```Number```
    * ```Boolean```
    * ```Object```
    * ```undefined```
    * ```null```

  * #### JS根据变量存储方式的不同把数据类型分为哪两种类型 分别是什么
    * 值类型: String Number Boolean Undefined null
    * 引用类型: Object

  * #### 引用类型和值类型的区别
    * 引用类型: 两个值相同的引用类型 由于指向的都是相同的内存地址 如果改变了其中一个那么另一个的值也会跟着改变
    * 值类型: 每个变量都是相互独立的 不会相互影响
  * #### typeOf和instanceOf的区别
    * typeof只能区分值类型 唯一可以区分的引用类型是```Function``` instanceof用于区分引用类型
    ```js
    typeof(null) // 返回object 
    ```
  * #### instanceof的原理
    * 首先 需要知道的是 实例和原型对象之间是通过```__proto__```关联的 而原型对象又是通过```prototype```和构造函数关联 
    ```js
    var obj={x:100,y:200}
    obj.__proto__ === Object.prototype // true
    instanceof(obj) // Object
    ```
    * 用instanceof去判断某个引用对象是否是特定类的实例其实并不准确 最好的方法还是用 某个实例的```constructor```去判断

  * #### 解释一下eventloop
    * 在JS的运行栈中 JS会先执行同步任务 当所有的同步任务都已经执行完毕了以后 再返回来执行异步任务 并且执行完一个异步以后 去查找下一个异步任务 直到所有的事件都被处理完
    ```js
    console.log(1)
    setTimeout(() => {
      console.log(2)
    }, 0)
    console.log(3)
    // 输出顺序 1 3 2 先执行同步再执行异步
    ```
  * #### 理解异步任务被放入任务栈和执行时间
  ```js
  for(var i = 0; i < 3; i++) {
    setTimeout((i) => {
      console.log(i)
    },1000)
  }
  // 永远输出的是2 因为首先执行同步任务 当for循环结束以后 才会执行setTimeout 一个for循环可能只需要几毫秒 但是setTimeout过了1秒才执行打印 这个时候 for循环已经结束了
  ```
  * #### JavaScript中的继承方式
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
    * 组合继承

  * #### 为什么class里需要写一句```super()```
    * 为了执行父类的构造函数  
  * #### 解释一下暂时性死区
    * 在块及作用域中 如果访问一个未声明的变量 那么会返回一个undefined 如果在块及作用域外 会报引用错误

  * #### 箭头函数和普通函数的区别
    * 箭头函数没有this指向
    * 箭头函数无法通过arguments访问函数
    * 箭头函数没有constructor
    * 箭头函数无法改变this指向
    * 箭头函数不支持重复的命名
    * 箭头函数没有原型

  * #### 手写一个Ajax请求
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
  * #### 浏览器从输入URL到页面渲染的过程
    * 浏览器解析地址
    * 解析dns
    * 寻找服务器地址
    * tcp三次握手
    * 浏览器发送数据 等待服务器响应
    * 服务器处理请求 并返回给浏览器
    * 浏览器收到响应内容 得到html代码
    * 渲染页面

  * #### GET请求和POST请求的区别  
    * GET请求参数暴露在URL里 POST不会
    * GET请求在浏览器回退的时候是无害的 不会提交二次请求
    * GET请求参数放在URL里 POST请求放在Request header中
    * GET请求参数长度有限制 POST没有
    * GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
    * GET请求参数数据类型只接受ASCII字符，而POST没有限制。
    * GET请求会参数被完整的保留在浏览器历史记录里 POST不会
    * GET产生的URL地址可以被Bookmark，而POST不可以
    * GET请求只能进行url编码，而POST支持多种编码方式

  * #### ```new```运算符
    * 一个新的对象被创建 继承自构造函数的prototype  foo.prototype
    * 构造函数被执行传入参数 以及this this指向这个新的实例
    * 判断构造函数是否返回了对象 如果是返回的数据结构是一个对象 那么就会取代new 如果没有 那么就是第一步创建的对象  

## CSS部分
  * #### 实现一个三栏布局
    * float
    * 绝对定位
    * flex布局
    * table布局
    * grid布局

  * #### 标准盒模型和IE盒模型的区别
    * 标准盒模型的content宽高就是标准的content宽高
    * IE盒子模型的content包含了```padding```和```border```

  * #### 实现水平垂直居中的方式
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
  * #### 触发浏览器重排
    * DOM 结构中的各个元素都有自己的盒子模型 这些都需要浏览器根据各种样式来计算并根据结果将元素放到它该出现的位置 这个过程就是重排
    * 增加、删除、修改DOM节点时 会导致重排或者重绘
    * 当移动Dom的位置 或者有动画的情况
    * 当修改CSS样式的时候
    * 当浏览器窗口大小发生变化 或者滚动的时候
    * 修改浏览器字体大小
  * #### 触发浏览器重绘
    * 什么是重绘: 当各种盒子的位置、大小以及其他属性都确定以后 浏览器把元素按照各自特性绘制 这个过程就是重绘
    * 页面内容发生变化 一定会触发重绘  
  * #### 性能优化
    * 使用浏览器缓存 强缓存 协商缓存
    * 资源压缩合并 减少http请求
    * 使用DNS预解析
    * 异步加载资源 ```defer``` ```async``` 前者是在HTML解析完之后才执行 如果是多个 按照加载顺序依次执行 后者是在加载完之后立即执行 如果是多个 执行顺序和加载顺序无关
    * 使用CDN

    设计模式 es6 对象map

## Webpack相关面试题
* ###  webpack 基本配置
* #### 如何拆分配置和merge
  * 定义三个文件 
  * webpack.common.js(配置公用内容)
  * webpack.dev.js(配置开发环境内容)
  * webpack.prod.js(配置生产环境内容)
    公用内容通过webpack-merge这个库引入
    ```js
    import { commonJS } from './webpack.common.js'
    import { smart } from 'webpack-merge'

    module.exports = smart(commonJS, {
      // xxx新的配置项
    })
    ```

* ### 配置devServer
  引入webpack dev-server
  解决开发环境下跨域问题
  ```
  devSever: {
    port: 8080, // 端口
    progress: true, // 打包进度条
    open: true, // 自动打开浏览器
    compress: true, // gzip压缩 优化性能
    proxy: {
      '/api': 'http://localhost: 3000'
    }
  }
  ```

* ### 简述css loader
  * loader的执行顺序是从右往左
  * postcss-loader 自动添加厂商前缀 解决兼容性
  * 关于这些loader的关系其实 首先css-loader帮助我们梳理各个css之间的关系 然后 style-css帮助我们将css文件挂载到index.html文件的头部
  ```js
  {
    test: /\.css/,
    loader: ['style-loader', 'css-loader', 'postcss-loader']
  }
  ```

* ### 配置filename小技巧
  * 添加hash值 会比较打包过后的hash值 如果打包的文件js代码没有变化(hash值未变化) 浏览器可以直接读取缓存 增加响应速度 如果变化了 则会重新发起http请求重新请求网页
  ```js
  output: {
    filename: 'bundle.[contentHash:8].js'
  }
  ```

* ### 如何配置多页面入口
```js
entry: {
  index: path.join(path, 'index.js')
  other: path.join(path, 'other.js')
}

output: {
  filename: '[name].[contentHash:8].js'
}
// name 对应前面entry配置的key  index other

plugin: {
  new HtmlWebpackPlugin({
    template: path.join(path, 'index.js'),
    filename: 'index.html',
    chunks: ['index'] // 当前页面只引入与之相关的js 不配置chunks则会全部引入
  }),
  new HtmlWebpackPlugin({
    template: path.join(path, 'other.js'),
    filename: 'other.html',
    chunks: ['other'] // 当前页面只引入与之相关的js 不配置chunks则会全部引入
  })
}
```

* ### webpack如何异步加载js代码
适用js文件比较大情况下 打包以后也会生成chunk
```js
import('文件路径').then((res) => {
  console.log(res)
})
```

* ### module bundle chunk的区别
  * module - 源码文件(模块)
  * chunk - 多个模块合成的代码
  * bundle - 输出文件
