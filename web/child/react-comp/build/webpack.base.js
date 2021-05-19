const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const happypack = require('happypack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index'),
    },
    output: {
        filename: 'js/[name]_[hash:8].js', // 实现多出口
        path: path.resolve(__dirname, '../dist'),
        publicPath: '' //公共资源路径， 当加载所有静态资源时，使用该路径
    },
    module: {
        // noParse: /jquery/, // 不去解析jquer模块中的依赖，加快编译速度
        rules: [
            /* 
                从右向左执行， 从下向上执行
            */
            // {
            //     enforce: 'pre', //执行方式从上到下， 该配置表明提前执行
            //     test: /\.(js|jsx)$/,
            //     use: [{
            //         loader: 'eslint-loader' //从eslint官网下载json配置文件
            //     }],
            //     include: path.resolve(__dirname, '../src'), //只解析某个文件夹
            //     exclude: /node_modules/ //排除某个文件夹
            // },
            // {
            //     test: /\.(ts|js|tsx|jsx)$/,
            //     use: [{
            //         loader: 'HappyPack/loader?id=js' // 使用happypack打包，使用的配置为id=js
            //     }],
            //     include: path.resolve(__dirname, '../src'),
            //     exclude: /node_modules/
            // },
            {
                test: /\.(tsx)$/,
                use: ['babel-loader','ts-loader'],
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 200 * 1024, //小于200k生成base64
                        outputPath: 'img/', // 打包路径， 并自动修改打包后文件引入文件的路径
                        esModule: false // 不加会导致打包html模板文件中的img图片报错
                        // publicPath: 'cdn.com',  //公共资源路径， 当加载所有静态资源时，使用该路径
                    }
                }]
            }
        ]
    },
    externals: {
        // 使用第三方模块，即cdn引入，不参与打包
        jquery: '$'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'react组件',
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new happypack({
            id: 'js',
            use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[hash:8].css'
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['*', '.js', '.json', '.vue', '.tsx'] //可以省略文件后缀名
    },
    optimization: {
        // 优化项
        // 分割代码块
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 1 // 某个方法至少引用了两次，才会单独抽离
                },
                vendor: {
                    priority: 1, //权重
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0, //大于0个字节
                    minChunks: 1 //在分割之前，这个代码块最小应该被引用的次数
                }
            }
        }
    }
}