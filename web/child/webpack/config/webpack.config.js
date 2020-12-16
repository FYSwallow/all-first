const path = require('path');
module.exports = {
    mode:'development', // 开发模式
    entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    output: {
        // filename: 'output.js',      // 打包后的文件名称
        filename: '[name].[hash:8].js', //使用文件名+ 8位hash作为文件名
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    plugins: {
        const name = new type(arguments);
    }
}