const nav = require('../nav');
const {VALINEID,VALINEKEY} = require('../../../../configKey.js')
module.exports = {
  type: 'blog',
  smoothScroll: true,
  // 博客设置
  blogConfig: {
      category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认 “分类”
      },
      tag: {
          location: 3, // 在导航栏菜单中所占的位置，默认3
          text: '标签' // 默认 “标签”
      }
  },
  valineConfig: {
      appId: VALINEID,// your appId
      appKey: VALINEKEY, // your appKey
      recordIP:true,
      placeholder:'填写邮箱地址可以及时收到回复噢...',
      visitor:true,
  },
  authorAvatar: '/avatar.png',
  // 最后更新时间
  lastUpdated: '上次更新时间', // string | boolean
  repo: 'wenfeihuazha/wenfeihuazha.github.io/tree/develop',
  // 如果你的文档不在仓库的根部
  // docsDir: 'docs',
  // 可选，默认为 master
  // docsBranch: 'develop',
  // editLinks: true,
  // editLinkText: '在 GitHub 上编辑此页！',
  // 作者
  author: 'ZHY',
  // 项目开始时间
  startYear: '2020',
  nav: nav,
  // sidebar: sidebarConf,
  // logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 备案
  // record: '粤ICP备20036386号-1',
  // recordLink: 'http://www.beian.miit.gov.cn/',
  // cyberSecurityRecord: '粤公网安备 44060602001609号',
  // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060602001609',
}