## webpack是什么?
关于webpack是什么 其实这个问题也很好解答 只需要打开webpack的官网 首先映入眼帘便是这么一段话 ``` webpack is a module bundler``` 翻译过来就是 webpack是一个```模块打包工具``` 也就是说 当我们的项目工程变得非常庞大的时候 我们可以将项目拆分成一个个的模块 同时借助webpack帮助我们打包最后整合在一起 这样可以便于后期的维护和迭代 

## webpack的安装
关于webpack的安装 其实也就是通过npm安装 只需要一行命令 简单粗暴 值得注意的一点是 webpack最好是不要全局安装 否则容易引起因为webpack版本的问题 从而使得互相依赖的两个项目有冲突 
安装命令: ``` npm install webpack webpack-cli -D``` 安装好以后 在命令行工具里输入 ```npx webpack -v``` 如果正确显示版本号 那么就是成功安装了webpack

## 关于webpack-cli
听起来像是像是一个webpack的脚手架工具是不是? 其实webpack-cli最大的作用在于 帮助我们可以在命令行里 可以直接使用webpack这个命令 例如 借助node提供的npx 可以直接在命令行里进入项目 ```npx webpack```

## webpack打包命令简化
写过vue的同学应该很熟悉这个命令 ```npm run dev/start``` 其实就是通过项目里```package.json```文件下的npm scripts来改变了原先的webpack打包命令 

![](https://user-gold-cdn.xitu.io/2019/4/6/169f0bdfebb2e2e5?w=534&h=152&f=png&s=58678) 其中 键``dev``表示的就是打包的命令 值就是一些打包的规则 后面会讲到

## webpack的loader
webpack其实只认识js工具 也就是说webpack只会自动识别.js后缀为结尾的文件 清楚该怎么打包js文件 但是随着项目的不断扩展 只有js文件是肯定不行的 所以这个时候 我们就需要借助各种各样的loader来帮助我们告诉webpack 这个是个什么文件 这个文件要怎么打包 这也就是loader的概念

现在假设 我们的项目下 有一个```index.js```文件 和一个 ```index.css文件``` 同时你在```index.js```文件里通过```import```或者```require```的方式引入了```index.css``` 这个时候你想让webpack打包 那么一定是会报错的 所以我们需要借助一些loader来帮助我们 —— ```style-loader``` 和 ```css-loader```

这两个loader首先通过npm install 安装在项目里 同时在项目里新建一个webpack.config.js文件 做好如下配置 就可以让webpack知道该如何打包.css文件了 是不是很简单

![](https://user-gold-cdn.xitu.io/2019/4/6/169f0d201397e091?w=360&h=182&f=png&s=68578)

其中 键 ```test```对应的是一个正则 也就是是什么后缀的文件 键 ```use```对应的数组就是 使用哪一些loader 

## loader之间的关系
关于这些loader的关系其实 首先css-loader帮助我们梳理各个css之间的关系 然后 style-css帮助我们将css文件挂载到index.html文件的头部 

## postcss-loader
这个loader其实就是 借助```autoprefixer```帮助我们自动添加厂商前缀 使用这个loader的话 还需要配置一个额外postcss.config.js文件 
![](https://user-gold-cdn.xitu.io/2019/4/6/169f0e34e86a603e?w=462&h=196&f=png&s=55364)

## plugins
plugins 翻译过来就是插件 webpack也提供了非常多的插件 来帮助我们在webpack打包的时候 自动的做一些事情 这里介绍两个插件

① ```clean-webpack-plugin``` 这个插件的作用在于 可以在我们每次打包之前 删除掉原先打包好的文件 具体使用方法 先通过npm install安装该插件 然后在webpack配置文件里 引入这个插件 
```const CleanWebpackPlugin = require('clean-webpack-plugin')```
最后在wepback的plugins这个字段里 新建一个实例```  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true
  })```

② HotModuleReplacementPlugin  看名字其实也就很简单粗暴了 也就是热更新 也就是 当代码变化的时候你不需要手动刷新页面 他可以自动帮你刷新页面 是不是还挺方便  具体配置的话 其实基本和第一个插件大同小异 先安装 然后引入 最后new一个实例就好了
``` new webpack.HotModuleReplacementPlugin()```

## devServer
通过配置devServer可以快速在本地构建一个http服务器 首先 你需要在package.json的scripts字段下 新增一条webpack打包的规则

![](https://user-gold-cdn.xitu.io/2019/4/6/169f0f8e523a6f33?w=516&h=146&f=png&s=53554)
当然 光有这个东西是不够的 你还需要在webpack配置文件里 配置一下这个devServer 具体配置如下 
![](https://user-gold-cdn.xitu.io/2019/4/6/169f0f9c7ee22a84?w=390&h=142&f=png&s=55125) 


  