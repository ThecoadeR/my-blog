/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-02-29 11:40:04
 * @LastEditTime: 2020-03-16 10:58:01
 */
module.exports = {
  base: "/vue-press/",
  title: '前端打杂师 - Zhu',
  description: 'All is well',
  head: [
    ['link', { rel: 'icon', href: '/image/favicon.ico' }]
  ],
  lastUpdated: '最后更新时间',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', 
        link: '/' 
      },
      { text: '博客', 
        link: '/JS/Base.md',
      },
      { text: 'GitHub', link: 'https://github.com/ThecoadeR/vue-press/'}
    ],
    sidebar: [
      {
        title: 'VuePress',
        collapsable: true,
        children: [
          '/VuePress/' 
        ]
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [
          '/JS/Base.md',
          '/JS/',
          '/JS/OOP.md',
        ]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          '/Vue/',
          '/Vue/Vue-base.md'
        ]
      },
      {
        title: 'React',
        collapsable: true,
        children: [
          '/React/'
        ]
      },
      {
        title: 'Webpack',
        collapsable: true,
        children: [
          '/Webpack/',
        ]
      },
      {
        title: 'Electron',
        collapsable: true,
        children: [
          '/Electron/'
        ],
      },
      {
        title: '浏览器相关',
        collapsable: true,
        children: [
          '/Browser/'
        ]
      },
      {
        title: '前端代码规范',
        collapsable: true,
        children: [
          '/CheckList/'
        ]
      },
      {
        title: '前端面试',
        collapsable: true,
        children: [
          '/InterView/'
        ]
      },
      {
        title: '随手记',
        collapsable: true,
        children: [
          '/others/'
        ]
      },
    ],
    markdown: {
      // 显示代码块行号
      lineNumbers: true
    },
  }
}