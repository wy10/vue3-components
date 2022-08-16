module.exports = {
  title: 'Hello VitePress', // 标题
  description: 'Just playing around.', // 副标题
  themeConfig: {
    // 顶部导航栏内容
    nav: [{ text: '指南', link: '/guide/installation',activeMatch: '/guide/' }],
    // 侧边栏导航内容
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/getting-started' },
          ],
        },
      ],
    },
  },
};
