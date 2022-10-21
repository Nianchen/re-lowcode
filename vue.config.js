// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: './',
//   transpileDependencies: true,
  
// })
const path = require('path');
module.exports={
  assetsDir: 'static',   
  publicPath: './',
  productionSourceMap: false, //不输出map文件
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "./src/assets/css/variables.less")
      ]
    }
  }
}