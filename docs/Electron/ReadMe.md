# Electron 学习小记

## Chromium 下的进程

首先 Chromium 下的每一个 Tab 都是一个实例 也就是一个线程(Renderer Process) 同时有一个 Main Process 来管理所有的 Tab 所以 Chromium 其实是多个进程组成的
![](./img/process.png)

## 主进程 - Main Process

- 可以使用和系统对接的 Electron API 创建菜单 上传文件等等

* 创建渲染进程 - Renderer Porcess
* 支持 Node.js
* 有且只有一个 作为程序的入口点 类似于 `Main.js`

## 渲染进程 - Renderer Process

- 可以有多个 每个对应一个窗口(Tab)
- 每个都是单独的进程 不会相互影响
- 支持 Node.js 和 Dom API
- 部分 Electron API

## 进程之间的通信方式

- Electron 使用 IPC(interprocess communication)在进程之间进行通信 其实可以无需关心 IPC 是怎么实现的 只需要调用 Electron 暴露给我们的 API 就好 🤣🤣🤣
- 利用```ipcRenderer```模块 可以使得renderer process向 main process进行通信
```js
// 进程通信
const { ipcRenderer } = require('electron')
// 监听页面Dom渲染完成以后 利用Electron提供的ipcRender来发送一个事件两个参数 一个是事件名称(message) 一个是携带的参数(String)
window.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('message', 'hello from render')
  ipcRenderer.on('replay', (event, arg) => {
    console.log(arg)
    document.getElementById('message').innerHTML = arg
  })
})
```
* 利用```ipcMain```模块实现反向通信
```js
  // 主进程根据事件名称进行监听 并且可以利用event对象下的sender发送信息给renderer process
  ipcMain.on('message', (event, arg) => {
    console.log(arg)
    event.sender.send('replay', 'replay from main')
  })
```

## 未完待续...