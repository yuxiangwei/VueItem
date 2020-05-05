const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
  //基本路径
  publicPath: './',//相对路径
  assetsDir: 'static', //生成静态文件存放位置
  productionSourceMap: false, // 设置上线后是否加载webpack文件
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('views',resolve('src/views'))
    .set('assets',resolve('src/assets'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
  },
}