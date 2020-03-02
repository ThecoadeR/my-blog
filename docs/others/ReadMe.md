## 随手记
<!--
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 21:53:50
 * @LastEditTime: 2020-03-02 20:28:16
 -->

 * ### ES modules 和 commonJS导出规范差异
  * #### ES modules导出和引入规范
  ```js
  // 导出
  function foo() {
    // xxxx
  }
  export default foo
  // 引入
  import Foo from './foo.js'
  ```

  * #### commonJS导出和引入规范
  ```js
  // 导出
  function foo() {
    // xxx
  }
  module.exports = {
    foo
  }
  // 引入
  var Foo = require('./foo.js')
  ```
  * #### ES Module是静态引入的 commonJS是动态引入的

* #### 安装依赖还是尽量安装在当前项目内比较好 ```npm install xxx -D```

* #### gitignore忽略node_modules写法
  * ```**/node_modules/```