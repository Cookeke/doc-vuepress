const { defaultTheme } = require('vuepress')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
// const { searchPlugin } = require('@vuepress/plugin-search')
const { shikiPlugin } = require('@vuepress/plugin-shiki')

module.exports = {
    lang: 'zh-CN',
    base: '/doc-vuepress/',
    title: '科科的知识库',
    description: '科科的知识库',
    theme: defaultTheme({
        navbar: [
            { text: '首页', link: '/' },
            { text: '科科的掘金', link: 'https://juejin.cn/user/3526889033186839/posts' },
            { text: '科科的GitHub', link: 'https://github.com/Cookeke' },
        ],
        sidebar: [
            {
                text: '欢迎页面',
                link: '/',
                children: [
                    '/README.md',
                ],
            },
            {
                text: 'JavaScript',
                // collapsible: true,
                children: [
                    // { text: 'github', link: 'https://github.com', children: [], },
                    '/JavaScript/js.md',
                    '/JavaScript/js copy.md',
                ],
            },
            {
                text: 'React',
                children: [
                    '/React/React.md',
                ],
            },
        ],
        logo: '/images/hero.jpg',
        contributorsText: '贡献者',
        lastUpdatedText: '上次更新',
    }),
    plugins: [
        // 回到顶部
        backToTopPlugin({}),
        // markdown链接增加图标
        externalLinkIconPlugin({}),
        // 图片缩放
        mediumZoomPlugin({}),
        // 进度条
        nprogressPlugin({}),
        // 搜索 
        // searchPlugin({}),
        // 高亮
        shikiPlugin({ theme: 'one-dark-pro' }),
    ],
}