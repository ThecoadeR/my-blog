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

* ## Javascript部分
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
    * ```js
    typeof(null) // 返回object 
    ```

  * 解释一下暂时性死区
    * 在块及作用域中 如果访问一个未声明的变量 那么会返回一个undefined 如果在块及作用域外 会报引用错误

  * 箭头函数和普通函数的区别
    * 箭头函数没有this指向
    * 箭头函数无法通过arguments访问函数
    * 箭头函数没有constructor
    * 箭头函数无法改变this指向
    * 箭头函数不支持重复的命名
    * 箭头函数没有原型
