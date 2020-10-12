const themeConfig = require('./config/theme/index.js')
const pluginsConf = require('./config/plugins/index')
module.exports = {
    title: "Zhy's Blog",
    description: '文废画渣の博客',
    dest: 'dist',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      ["meta", { name: "robots", content: "all" }],
      ["meta", { name: "author", content: "wenfeihuazha" }],
      ['script', { "data-ad-client": "ca-pub-6661696030972028", async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }, ``],
      ['script', { src: "/assets/js/jq3.5.1.js" }, ``],
      ['script', { src: "/assets/js/mouse.js" }, ``],
      ['script', { src:"//github.atool.org/canvas-nest.min.js"},``]
    ],
    theme: 'reco',
    themeConfig: themeConfig,
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}