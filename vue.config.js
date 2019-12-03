// const materialLastAndThis = require('./src/mock/menus.json')
const publicCdnConfig = require('./cdn.config')
const targetUrl = 'http://192.168.153.44'
module.exports = {
  publicPath: './',
  // transpileDependencies: ['gys-page-frame'],  //依赖包里面需要做语法转换的模块
  // 下面是多页面打包的相关配置
  pages: {
    home: {
      entry: 'src/views/home/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '物料验收首页',
      cdnConfig: publicCdnConfig
    },
    domo: {
      entry: 'src/views/demo/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'demo.html', // 在 dist/demo.html 的输出
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '物料验收首页',
      cdnConfig: publicCdnConfig
    }
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    },
    performance: {
      hints: false
    }
  },
  devServer: {
    before: function (app, server) {
      // 在这里面可以添加前端mock的数据
      // 获取菜单信息
      // app.get('/gys/system/permission/info', function (req, res) {
      //   res.json(materialLastAndThis)
      // })
    },
    proxy: {
      '/wl/': {
        target: targetUrl,
        changeOrigin: true
      },
      '/gys/': {
        target: targetUrl,
        changeOrigin: true
      },
      '/pmpp/': {
        target: targetUrl,
        changeOrigin: true
      },
      '/cas/': {
        target: targetUrl,
        changeOrigin: true
      }
    }
  }
}
