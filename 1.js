const webpack = require('webpack')
const path = require('path')
const {cleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 删除 build.js 内的注释
class Myplugin{
  apply(compiler){
    console.log('Myplugin 启动');

    // 第一个参数是方法名称
    compiler.hook.emit.tap('Myplugin',compilation=>{
      // compilation => 可以理解为此次打包的上下文
      // compilation.assets 资源文件对象
      for (const name in compilation.assets){
        // console.log(name) //资源文件名称
        // console.log(compilation.assets[name].source());//获取资源文件内容
        if(name.endsWith('.js')){//判断是否以 .js 为结尾
          const contents = compilation.assets[name].source();
          const withoutComments = contents.replace(/\/\*\*+\*\//g,'')
          compilation.assets.name = {
            source: () => withoutComments,
            size:() => withoutComments.length
          }
        }
      }
    })
  }
}

module.exports = {
  entry:"./src/main.css",//知道webpack打包入口路径
  output:{
    filename:"bundle.js",//输出文件名
    path:path.join(__dirname,'output'),//输出文件目录(要求绝对路径)
    publicPath:'dist/',//打包后根目录文件夹
  },
  devtool:'source-map',
  // Webpack Dev Serve 配置选项
  devServer:{
    hot:true,//开启 HMR
    contentBase:['./public'],//静态资源路径
    proxy:{//代理配置
      '/api':{//什么开头的地址配置到 xx地址
        // http://loaclhost:8080/api/users => https://api.github.com/api/users
        target:'https://api.github.com',
        pathRewite:{
          // http://loaclhost:8080/api/users => https://api.github.com/users
          '^/api':''
        },
        // 不能使用 localhost:8080 作为请求 github 的主机名
        changeOrigin:true,
      }
    }
  },
  module:{
    rules:[
      {
        test:/.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test:/.css$/,//正则表达式,用来匹配文件路径
        use:[
          'style-loader',//通过style-loader将css-loader转换为style注入
          'css-loader',
        ],//loader使用路径,从后向前执行
      },
      {
        test:/.png$/,
        use:'file-loader'
      },
      {
        test:/.png$/,
        use:{
          loader:'url-loader',
          options:{ //配置项
            limit:10 * 1024,//10kb以下文件转换为 dataurl,其他自动转换为file-loader形式
          }
        }
      },
      {
        test:/.html$/,
        use:{
          loader:'html-loader',
          options:{
            attrs:['img:src','a:href'],//针对a标签中静态资源打包处理
          }
        }
      },
      {
        test:/.md$/,
        use:{
          loader:[
            'html-loader',
            './markdown-loader',//相对路径
          ]
        }
      }
    ]
  },
  plugins:[
    new cleanWebpackPlugin(),
    // 生成index.html
    new HtmlWebpackPlugin({ //对html文件配置
      title:'webpack Plugin Sample',
      meta:{
        viewport:'width=device-width'
      },
      template:'./src/index.html',//指定模板文件渲染index
    }),
    // 用于生成about.html
    new HtmlWebpackPlugin({
      filename:'about.html'
    }),
    // 开发过程中一般不会使用,所以在 devServer 中配置
    new CopyWebpackPlugin([
      'public',//将public下所有文件输出到dist目录
    ]),
    new Myplugin(),
    new webpack.HotModuleReplacementPlugin(),//开启HMR需要的插件
    new webpack.DefinePlugin({
      API_BASE_URL:"'http://api.example/com'",//变量会挂载到 env.API_BASE_URL
    })
  ],
  optimization:{ //代码压缩功能配置
    usedExports:true,//只导出外部使用了的成员
    minimize:true,//压缩代码,删除未引用代码
    concarenateModules:true,//合并模块代码
    sideEffects:true,//没有用到的模块是否有副作用 是否可以清除
    splitChunks:{
      chunks:'all',//将所有公共模块打包
    }
  }
}
