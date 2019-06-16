# Vue基础之组件之间的通信

## 前言
Vue组件之间的通信 其实是一种非常常见的场景 不管是业务逻辑还是前段面试中都是非常频繁出现的 这篇文章将会逐一讲解各个传值的方式 不过在此之前 先来总结一下各个传值方式吧

* 1.父组件向子组件传值  => `props`
* 2.子组件向父组件传值 => `$emit`
* 3.平级组件传值 => 总线机制 `event-bus`
* 4.Vuex

## 父组件向子组件传值
举个🌰 你在项目中定义了一个公共组件Header 这个Header里需要根据具体的业务场景去展示不同的title 那这个时候就是一个非常常见的父组件向子组件传值的业务场景了

下面 一起来看一下代码
首先 定义一个公用的Header组件 这个组件里也没有什么复杂的逻辑 就是用props接受一个父组件传递过来的title 并且渲染到页面上
```html
<template>
  <!-- 通用导航栏 -->
  <div class="head-title">
    {{title}}
  </div>
</template>
```
```js
export default {
  name: 'Header',
  props: {
    title: String
  }
}  
```
父组件其实也是啥都没有 也就是引入Header组件 并且向子组件传递一个title的值 子组件利用props接收到这个值 并且渲染在页面上
```html
<template>
  <div class="container">
    <Header :title="title" />
  </div>
</template>
```
```js
import Header from "components/header/header";
export default {
  name: "Home",
  data() {
    return {
      title: "首页"
    }
  },
  components: {
    Header
  }
}
```
这样就完成了一个最简单最基础的父组件向子组件传值的过程 不过呢 这个`props` Vue其实也是支持许多拓展的了 
* 
* 例如开发者可以通过 `defalut`
去定义一个默认值 当没有接受到父组件传递过来的值的时候 可以展示这个默认值
* `type` 给props指定一个类型 当类型不符合预期的时候 会在控制台上报错
* 当默认的校验规则都无法满足要求的时候 props也支持自定义一个validator 只需要在props里传递一个validator函数即可 
```js
props: {
    title: {
        validator: function () {
            // do somethings
        }
    }
}
```

## 子组件向父组件传值
说到子组件向父组件传值之前 需要解释一个名词 `单项数据流` 也就是 子组件不能随意更改父组件传递过来的值 以免造成一些数据污染之类的情况 推荐的做法是 如果子组件想要更改一个值 应该是通知父组件 让父组件进行更改

话不多说 还是继续缕一缕思路 然后写代码 
首先 需要在子组件里定义一个事件 例如点击事件 通过点击向父组件派发一个事件同时可以在事件里携带需要向外传递的值 同时父组件监听到了这个事件 并且在事件里处理对应的逻辑
```html
<template>
  <!-- 通用导航栏 -->
  <div class="head-title" @click="toParent">
    {{title}}
  </div>
</template>
```
```js
export default {
  name: 'Header',
  props: {
    title: String
  },
  methods: {
      toParent () {
        // 第一个参数 需要父组件监听的时间 第二个参数 向外传递的值
        this.$emit('getMsg','这是传递给父组件的值')
      }
  }
}  
```
这个时候 子组件已经通过```$emit```向外传递了一个事件 那么接下去就是在父组件里去监听这个事件 并且处理对应逻辑
```html
<template>
  <div class="container">
    <Header :title="title" @getMsg="getMsg" />
  </div>
</template>
```
```js
import Header from "components/header/header";
export default {
  name: "Home",
  data() {
    return {
      title: "首页",
      msg: ''
    }
  },
  components: {
    Header
  },
  methods: {
    getMsg(msg) {
        console.log(this.msg)
        this.msg = msg
        console.log(this.msg)
    }
  }
}
```
这样通过```$emit```就可以成功获取从子组件传递过来的值 并且父组件可以更改这个值 从而实现一些对应的业务逻辑

## 平级组件之间传值
两个没什么关系的组件之间有时候也是会需要传递一些值 例如页面A要传递值给页面B B接受这个值并且渲染在页面上

下面来说一下实现思路
 * 1.创建一个js文件 在文件中新建一个vue的实例 并且在实例上新建一个EventBus  或者在vue的属性上挂载一个envent-bus 这样通过属性的方式创建的event-bus是一个全局的属性
 * 2.在需要使用event-bus的组件里引入 bus并且利用`$emit`向外触发事件
 * 3.在需要接受值的组件里利用`$on`来接受值


## 新建一个.js文件 并且创建event-bus

```js
import Vue from 'vue'
export const EventBus = new Vue()
```

## 利用enent-bus向外触发事件
```html
<template>
    <button @click="handleClick">-</button>
</template>
```
```js
import { EventBus } from "../event-bus.js";
    export default {
        name: "Count",
        data () {
            return {
                num: 1,
            }
        },
        methods: {
            decrease() {
                EventBus.$emit("getNum", {
                    num:this.num,
                })
            }
        }
    }
```

## 监听事件
```js
 EventBus.$on("getNum", (num) => {
                console.log(num)
            })
            
```

这样就通过event-bus成功将页面A的值传递给了页面B的值 写起来的感觉 其实还是和子组件向父组件传值的过程非常相似 

下面还会提到Vuex传值 不过感觉可以新开一个文章..所以..下次再见啦 👋👋
