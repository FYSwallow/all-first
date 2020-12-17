# 搭建过程

## 初始化项目
新建一个目录,初始化npm
```
npm init
```
安装包
```
npm i -D webpack webpack-cli // -D 是--save -dev 的缩写，生产阶段使用（打包）
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
新建public/index.html,在config/webpack.config.js中配置如下
```
const HtmlWebpackPlugin = require('html-webpack-plugin')
    ...
plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html')
    })
]
```
使用打包命令，即可看见dist/index.html已经引入了打包后的js

多入口打包
```
<!-- 为入口配置模块 -->
entry：{
    main: path.resolve(__dirname, '../src/main.js')
    test: path.resolve(__dirname, '../src/test.js')
},
...
//配置多个html-webpack-plugin实例
/**
*   html-webpack-plugin常用配置属性
*       template： 模板位置； filename：输出模板名称； chunks：针对多文件打包，指定需要将那些js加入模板； inject：引入js的位置(true/body：代表body结尾，false：不引入，head：引入头部)； head：代表head标签；favicon：生成favicon
*/
plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../pubilc/index.html'),
        filename: 'index.html',
        chunks: ['main']
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../pubilc/index.html'),
        filename: 'test.html',
        chunks: ['test']
    })
]
```
每次执行打包语句之后，不能清楚原有残留的文件
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清除遗留的打包文件
...
plugins: [
    ...
    new CleanWebpackPlugin()
]
```

引用css
```
npm install style-loader css-loader less less-loader node-sass sass-loader -D
...
    module:{
            rules: [
                {test: /\.css$/, use: ['style-loader', 'css-loader']}, //从右往前执行
                {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, //从右往前执行
                {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}, //从右往前执行
            ]
    },
```
为css添加前缀
```
npm install postcss-loader autoprefixer -D
1. 在loader中加入postcss-loader 
2. 生效方法
    a.创建postcss.config.js
        module.exports = {
            plugins: [require('autoprefixer)]
        }
    
    b.
    ...
     {
         test: /\.css$/, 
         use: ['style-loader', 'css-loader', {
             loader: 'postcss-loader',
             options: {
                 plugins: [require('autoprefixer')]
             }
        }]
     }

```

将css从js中提取到css文件当中，使用mini-css-extract-plugin
```
将css-loader用MiniCssExtractPlugin.loader代替
并添加new MiniCssExtractPlugin({
    filename: 文件输出名，
    chunkFilename：[id].css
}),
