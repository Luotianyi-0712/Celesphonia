import { defineConfig } from 'vitepress'

export const zhCN = defineConfig({
    lang: 'zh-CN',
    description: 'Celesphonia',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh-CN/guide/': { base: '/zh-CN/', items: sidebarGuide() },
            '/zh-CN/develop/': { base: '/zh-CN/', items: sidebarDevelop() }
        },

        editLink: {
            pattern: 'https://github.com/Luotianyi-0712/Celesphonia/tree/master/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav() {
    return [
        { text: '指南', link: '/zh-CN/guide/getting-started' },
        { text: '开发', link: '/zh-CN/develop/quick-start' }
    ];
}
function sidebarGuide() {
    return [
        {
            text: '基础配置',
            collapsed: false,
            items: [
                { text: '快速开始', link: 'guide/getting-started', activeMatch: '/zh-CN/guide/' },
                { text: '对接配置', link: 'guide/configuration', activeMatch: '/zh-CN/guide/' },
                { text: '常见问题', link: 'guide/faq', activeMatch: '/zh-CN/guide/' },
                { text: '从零安装 ', link: 'guide/nonebot2', activeMatch: '/zh-CN/guide/' }
            ]
        }, {
            text: '进阶配置',
            collapsed: false,
            items: [{ text: '配置', link: 'guide/ffmpeg', activeMatch: '/en-US/guide/' }]

        }
    ];
}
function sidebarDevelop() {
    return [
        {
            text: '开发信息',
            collapsed: false,
            items: [
                { text: '快速开始', link: 'develop/quick-start', activeMatch: '/zh-CN/develop/' },
                { text: '列表', link: 'develop/api', activeMatch: '/zh-CN/develop/api' },
                { text: '事件', link: 'develop/event', activeMatch: '/zh-CN/develop/event' },
                { text: '消息', link: 'develop/msg', activeMatch: '/zh-CN/develop/msg' },
                { text: '扩展', link: 'develop/extends_api', activeMatch: '/zh-CN/develop/extends_api' },
            ]
        }
    ];
}
