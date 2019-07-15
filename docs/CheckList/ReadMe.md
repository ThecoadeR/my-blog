## 前端代码规范
* ## 代码静态检查工具
  * 使用 eslint 工具对 javascript 代码进行检查 规范继承自```@vue/eslint-config-standard```

* ## 变量命名规范
  * JavaScript变量命名采用Camel Case驼峰式命名
  ```js
  var getUserInfo
  ```
  * 函数命名注意语义化 可以适当加入描述性的动词 提高代码可阅读性
  
  |  动词   | 含义  |
  |  ----  | ----  |
  | get  | 表示该函数用于获取值 |
  | set  | 表示该函数用于设置值 |
  | is   | 表示是否为某个值 |
  | has  | 表示是否存在某个值 |

 * ## JavaScript推荐写法
  * 常量都应该赋值给某个变量 提高代码阅读性
  ```js
  const COUNT_NUM = 10
  let  total = COUNT_NUM + 1
  ```
  * 创建对象和数组推荐使用字面常量创建
  ```js
  let obj = {
    name: 'T-mac',
    gender: 'man',
    age: '32'
  }
  let array = [1, 2, 3]
  ```
  * <span style="color: red">不要写全局方法！！！防止出现意向不到的bug或者迷之方法重载</span>

  * 定时器 ```setTimeout``` ```setInterval```需要在对应的逻辑处销毁 例如页面销毁

* ## Vue推荐写法
  * 自定义组件名应该是多个单词 可以有效避免因```html```模板标签重复而出现的问题
  ```html
  // 不推荐
  <Header></Header>
  ```
  ```html 推荐
  <Home-Header></Home-Header>
  ```
  * 组件书写顺序 ```html``` ```script``` ```style```

  * 组件中的```data```必须是一个函数 而不是对象 防止多个子组件如果使用了相同的变量 而造成的变量污染 相互影响问题
  ```js
  export default {
    name: 'component',
    data () {
      return {
        value: 'example'
      }
    }
  }
  ```

  * 组件中必须声明```name``` 方便在调试台里快速定位组件进行调试 以及在```keep-alive```下可以根据name进行过滤
  ```js
  export default {
    name: 'component'
  }
  ```

  * 组件的```props```定义尽量详细 可以不写```validator``` 但是至少需要定义类型和默认值
  ```js
  export default {
    name: 'component',
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
  ```
  * 使用```v-for```的时候 必须搭配```key``` key值可以提高性能 快速查找对应dom节点
  ```html
  <Home-Header v-for="item in dataList" :key="item.id">
  ```

  * 模板中尽量不涉及到逻辑部分 模板只涉及展示 复杂运算应使用```computed```
  ```js
  <Home-Header>{{getTotal}}</Home-Header>
  export default {
    computed: {
      getTotal () {
        return COUNT_NUM + 1
      }
    }
  }
  ```
  * 标签中如果有多个特定的属性 需要分行显示
  ```html
  <Home-Header 
    v-for="item in dataList"
    :dataList="dataList"
  />
  ```
  * ```script```内部书写顺序
  ```js
  export default {
    name: 'component',
    data () {
      return {

      }
    },
    components: {

    },
    // 生命周期钩子函数书写顺序按照生命周期书写
    mounted () {

    },
    methods: {

    },
    watch: {

    },
    computed: {

    }
  }
  ```
  * ```v-if```以及```v-show```的使用选择
    * 如果是频繁的切换显示和隐藏 那么使用```v-show``` 减少页面的repaint
    * 如果条件很少发生切换 则使用```v-if```
  
  * 如果是在使用vue的情况下 应该尽量减少dom的操作 而专注于数据的操作 通过操作数据来改变视图

  * 书写必要的注释 尤其是页面逻辑复杂时 提高代码可读性

  * 及时删除弃用代码

  * 单文件尽量保持300行以内 提高代码可阅读性

  * 配置husky 代码提交时 触发git hooks eslint有有报错无法提交git

  * ```git commit -m ``` ```git commit -am```