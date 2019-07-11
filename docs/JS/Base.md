# JavaScript之变量类型

## 在JavaScript中变量的存储方式
  * 值类型 引用类型
  * 值类型: ```String``` ```Number``` ```Boolean``` ```undefined```
  * 值类型的特点: 每个变量是相互独立的不会相互影响 
    ```js
    var a = 100
    var b = a 
    a = 200
    console.log(b) // 100
    ```
  * 引用类型: ```Object``` ```Array``` ```Function```
  * 引用类型的特点: 由于值类型引用的是同一个内存地址 两个相同值的变量会相互影响 同时引用类型可以添加不同的属性
    ```js
    var obj1 = {
      name: 'T-mac'
    }
    var obj2 = obj1
    obj1.name = 'kobe'
    console.log(obj2.name) // kobe 指向的是相同的内存地址
    obj1.age = 32
    obj1.gender = 'Man'
    console.log(obj1) // {name: "kobe", gender: "Man", age: 32}  可以不停的添加不同的属性
    ```
  * 为什么引用类型会引用相同的指针: 因为引用类型可以不停的添加属性 那相同的两个值 如果都开辟内存空间 会浪费内存空间 所以 指向同一个内存地址 可以做到节约内存空间的目的  
  * 总结: 值类型每一个变量存储在不同的内存中 是相互独立的 所以不会相互影响 引用类型下相同变量的值指向的是同一个内存地址 所以会相互影响 

## typeof 运算符
  * ```typeof```只能区分值类型的详细类型 除了```Function``` 那是因为Function在JS的权重比非常高 需要在任意时刻都能分辨出这是一个函数 所以```typeof```唯一可以区分的引用类型只有Function 其他引用类型只会返回```Object```
  ```js
  typeof undefined // undefined
  typeof 'string' // string
  typeof 1 // number
  typeof true // boolean
  typeof null // object
  typeof {} // object
  typeof [] // object
  typeof console.log // Function
  ```
  * ```typeof```有一个很特别的地方 在于null null其实指向的是一个空指针 所以返回的值是一个```object```

## 值类型的变量计算 (强制类型转换)
  * 字符串拼接
    * ```js
      var a = 1 + 1 // 2
      var b = 1 + '1' // '11' (String)
      ```
    从上述代码中可以看出 当相同类型相加的时候 变量不会发生强制转换 但是当不同的类型相加的时候 JavaScript会对变量做一个强制类型转换 最终的值变为```String```类型

  * == 运算符
    * ```js
      console.log(1 == '1') // true
      console.log(0 == '') // true
      console.log(null == undefined) // true
      ```
    所以```==```用的时候 还是要小心一点 🤣🤣
  * if语句
    * ```js
      // 这里 1 被强制转换成了 true
      if (1) {
        console.log(1)
      } // 1
      // 这里空字符串被强制转换成了 false
      if ('') {
        console.log(1)
      }
  * 逻辑计算
    * ```js
      1 && 0 // 0 这里1也被强制转换了
      '' || 'a' // a 空字符串也被强制转换了
## JavaScript中的内置函数
  * Object
  * Array
  * Function
  * Error
  * RegExp
  * Date
  * Number
  * String
  * Boolean

## this指向
  * ```this``` 在定义的时候并不清楚指向 只有在执行的时候才清楚
  * ```this``` 会根据执行上下文的不同指向也会不同
    * 作为构造函数执行
    ```js
    function Person (name) {
      this.name = name
    }
    var p1 = new Person('T-mac')
    // this === Person
    // 在构造函数里 this其实指向的应该就是构造函数本身
    ```
    * 作为对象属性执行
    ```js
    var obj = {
      name: 'A',
      fn: function () {
        console.log(this.name)
      }
    }
    obj.fn()
    // this === obj
    // 在对象属性里 this指向的就是这个对象本身
    ```
    * 作为普通函数执行
    ```js
    function = function () {
      console.log('function')
    }
    function()
    // this === window
    // 作为一个普通函数执行 那么this指向的就是window对象
    ```
    * ```call``` ```apply``` ```bind```
    这三个方法都可以改变this的指向
    ```js
    fn = function (name) {
      console.log(name)
      console.log(this)
    }
    fn.call('A','T-mac')
    // 这样就把this的指向 从window指向了字符串A

    fn1 = function (name) {
      console.log(name)
      console.log(this)
    }.bind('B','T-mac')
    ```
    * ```call``` ```apply```区别就在于传参方式不同 ```apply```则是传入一个数组