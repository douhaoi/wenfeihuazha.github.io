const marked = require('marked');//引入marked,处理markdown代码

module.exports = source => {
  // console.log(source);
  // return 'console.log("hello ~")';//返回的一定要是一段JavaScript代码

  const html = marked(source);
  // return `module.exports = ${JSON.stringify(html)}` //通过json转义为字符串,用来保证不会出现问题
  // return `export default = ${JSON.stringify(html)}`

  // 返回html字符串交给下一个loader处理
  return html
}