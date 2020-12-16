# 搭建过程

## 初始化项目
新建一个目录,初始化npm
```
npm init
```
安装包
```
npm i -D webpack webpack-cli
```
新建config/webpack.config.js
```
const path = require('path');
module.exports = {
    mode:'development', // 开发模式
    entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    output: {
        // filename: 'output.js',      // 打包后的文件名称
        filename: '[name].[hash:8].js',      // 通常使用原文件名 + 8位哈希值命名
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    }
}
```
添加打包命令
```
"build": "webpack --config config/webpack.config.js"
```

注意: 使用hash打包出来的文件名每次都不一样,引入html都需要去修改,因此引入 html-webpack-plugin 插件,可以动态引入打包后的js文件

安装
新建public/index.html
