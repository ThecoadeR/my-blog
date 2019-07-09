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
        link: '/vue/',
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
          '/JS/',
          '/JS/OOP.md',
          '/JS/Browser.md'
        ]
      },
      {
        title: 'Vue.js',
        collapsable: true,
        children: [
          '/Vue/',
          '/Vue/Vue-base.md'
        ]
      },
      {
        title: 'Webpack',
        collapsable: true,
        children: [
          '/Webpack/'
        ]
      },
      {
        title: '浏览器相关',
        collapsable: true,
        children: [
          '/Browser/'
        ]
      }
    ],
    markdown: {
      // 显示代码块行号
      lineNumbers: true
    },
  }
}