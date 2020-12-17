const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') //生成打包后的模板html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清除遗留的打包文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:'development', // 开发模式
    // entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    entry:{
        main: path.resolve(__dirname, '../src/main.js'),
        test: path.resolve(__dirname, '../src/test.js'),
        test2: path.resolve(__dirname, '../src/test2.js')
    },
    output: {
        // filename: 'output.js',      // 打包后的文件名称
        filename: '[name].[hash:8].js', //使用文件名+ 8位hash作为文件名
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    module:{
        rules: [
            /** 使用style标签引入 */
            // {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader']}, //从右往前执行
            // {test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader', 'less-loader']}, //从右往前执行
            // {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader']}, //从右往前执行
            /** 使用一个link标签引入 */
            // {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']}, //从右往前执行
            // {test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']}, //从右往前执行
            // {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']}, //从右往前执行
            /** 使用多个css引入 */
            // {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']}, //从右往前执行
            // {test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']}, //从右往前执行
            // {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']}, //从右往前执行
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../public/index.html')
        // })
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            chunks: ['main'],
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/test.html'),
            filename: 'test.html',
            chunks: ['test'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/test2.html'),
            filename: 'test2.html',
            chunks: ['test2'],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        })
    ]
}