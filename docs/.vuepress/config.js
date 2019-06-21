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
      { text: 'Home', 
        link: '/' 
      },
      { text: 'Blog', 
        link: '/vue/',
      },
      { text: 'GitHub', link: 'https://github.com/ThecoadeR/vue-press/'}
    ],
    sidebar: [
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
      }
    ],
    markdown: {
      // 显示代码块行号
      lineNumbers: true
    },
  }
}