module.exports = {
  base: "/vue-press/",
  dest: 'dist',
  title: '前端打杂师 - Zhu',
  description: 'All is well',
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