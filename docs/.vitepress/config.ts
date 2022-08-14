import { defineConfig } from 'vitepress'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'


export default defineConfig({
  title: '开发配置',
  description: '',
  base: '/app-config-docs/',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lihawhaw/app-config-docs' }
    ],

    localeLinks: {
      text: '简体中文',
      items: []
    },

    nav: [
      { text: '指南', link: '/docs/', activeMatch: '/docs/' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: '指南',
          items: [
            {
              text: '开始',
              link: '/docs/'
            },
          ]
        },
      ]
    }
  },

  markdown: {
    // anchor: {
    //   permalink: renderPermaLink,
    // },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})
