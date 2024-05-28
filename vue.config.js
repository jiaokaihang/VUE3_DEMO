const { defineConfig } = require("@vue/cli-service");
// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const {viteMockServe} = require("vite-plugin-mock");
const windicss = require("vite-plugin-windicss");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查器
  // devServer: {  //dev环境下，webpack-dev-serve的相关配置
  //   port: 8083, //开发运行时的端口
  //   host: '0.0.0.0', //开发运行时的域名，设置成 0.0.0.0，在同一个局域网下，如果你的项目在运行，可以通过http://......这种方式来进行访问
  //   https: false, //是否启用https
  //   open: true  //npm run serve时是否直接打开浏览器
  // },
  // pluginOptions: {
  //   windicss: {
  //     // 具体配置请查看 https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
  //   },
  // },

  devServer:{
     proxy:{
       '/api':{
         target:'https://luckycola.com.cn/tools/yiyan',
         changeOrigin:true,
         pathRewrite:{
           '^/api':''
         }
       }
     }
  },

  configureWebpack: { //插件以及规则的配置


    plugins: [

      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),


    ],
  },

});
