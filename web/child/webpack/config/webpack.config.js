const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { webpack } = require('webpack');
module.exports = {
    mode:'development', // 开发模式
    // entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    entry: {
        main: path.resolve(__dirname,'../src/main.js'),
        test: path.resolve(__dirname,'../src/test.js'),
        test2: path.resolve(__dirname,'../src/test2.js')
    },
    output: {
        // filename: 'output.js',      // 打包后的文件名称
        filename: '[name].[hash:8].js', //使用文件名+ 8位hash作为文件名
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    module: {
        rules: [

            /**
             * 使用style标签引入
                {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
                {test: /\.less$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']},
                {test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
             */

            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']},
            {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']},
            {test: /\.(jpe?g|png|gif)$/i, use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        fallback: {
                            loader: 'fill-loader',
                            options: {
                                name: 'img/[name].[hash:8].text'
                            }
                        }
                    }
                }
            ]},
            
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: '../dist'
    },
    // 方便引入
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/test/test')
        },
        extensions: ['*', '.js', '.json', '.vue']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'test.html',
            chunks: ['test']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'test2.html',
            chunks: ['test2']
        }),
        new CleanWebpackPlugin(),
        require('autoprefixer'),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}