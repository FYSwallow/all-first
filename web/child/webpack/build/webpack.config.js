const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin') //压缩css
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //不支持es6语法，已跟换
const TerserPlugin = require('terser-webpack-plugin') 
//mode为production情况下js默认为压缩的， 但optimize-css-assets-webpack-plugin压缩css会破坏js原有压缩效果，使用terser-webpack-plugin压缩js
const { VueLoaderPlugin } = require('vue-loader') // 打包vue

module.exports = {
    mode: 'development', // 默认不压缩文件
    /* 
        source-map增加映射文件， 出错会标识当前报错的列和行, 大而全
        eval-source-map 不会产生新的文件， 也会显示行和列
        cheap-module-source-map 不会产生列， 但会产生一个单独的映射文件
        cheap-module-eval-source-map不会产生文件， 集成在打包文件中， 而且不会产生行和列
    */
    // devtool: 'source-map', 
    entry:{
        main: path.resolve(__dirname, '../src/index.js'),
        react: path.resolve(__dirname, '../src/react/index.js'),
        vue: path.resolve(__dirname, '../src/vue/index.js'),
    },
    output: {
        filename: 'js/[name]_[hash:8].js', // 实现多出口
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',  //公共资源路径， 当加载所有静态资源时，使用该路径
    },
    devServer: {
        port: 8080,
        progress: true, //进度条
        contentBase: '../dist',
    },
  /*   watch: true, //实时监控，重新打包
    watchOptions:{ // 监控参数
        poll: 1000, // 1s触发一次
        aggregateTimeout: 500, // 防抖
        ignored: /node_modules/ // 不监控
    }, */
    module: {
        rules: [
            /* 
                从右向左执行， 从下向上执行
            */
           {  //当有模块使用jquery插件，将插件注入widow对象
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: {
                        exposes: ["$", "jQuery"],
                      },
                }]
            },
           {
               enforce: 'pre', //执行方式从上到下， 该配置表明提前执行
               test: /\.(js|jsx)$/,
               use: [
                   {
                       loader: 'eslint-loader', //从eslint官网下载json配置文件
                   }
               ], 
               include: path.resolve(__dirname, '../src'),
               exclude: /node_modules/
           },
           {
                test: /\.vue$/,
                use: ['vue-loader'], // 还需要下载vue-template-compiler
                include: [path.resolve(__dirname, '../src/vue')],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                ], 
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                ], 
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'less-loader'},
                ], 
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ['html-withimg-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 200* 1024, //小于200k生成base64
                            outputPath: 'img/', // 打包路径， 并自动修改打包后文件引入文件的路径
                            esModule:false, // 不加会导致打包html模板文件中的img图片报错
                            // publicPath: 'cdn.com',  //公共资源路径， 当加载所有静态资源时，使用该路径
                        }
                    }
                ]
            },
        ]  
    },
    externals: { // 使用第三方模块，即cdn引入，不参与打包
        jquery:  '$' 
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'webpack4',
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'main.html',
            chunks: ['main'],
            minify: { //优化体积
                removeAttributeQuotes: true, // 移除引号
                collapseWhitespace: true, //移除换行和空格
            },
            hash: true, //为路径添加hash
        }),
        new HtmlWebpackPlugin({
            title:'vue',
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'vue.html',
            chunks: ['vue'],
        }),
        new HtmlWebpackPlugin({
            title:'react',
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'react.html',
            chunks: ['react'],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[hash:8].css'
        }),
        new webpack.HotModuleReplacementPlugin(), // 本地启动热更新
        new webpack.ProvidePlugin({ // 将每个模块注入jquery插件
            $: 'jquery'
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
		extensions: ['*', '.js', '.json', '.vue', '.jsx'], //可以省略文件后缀名
    }
    // optimization: { // 优化项
    //     minimize: true,
    //     minimizer:[
    //         // new UglifyJsPlugin({//压缩js
    //         //     cache:true,
    //         //     parallel:true, // 并行压缩
    //         //     sourceMap:true // 调试源码
    //         // }),
    //         // new TerserPlugin({
    //         //     parallel: true,
    //         // }),
    //         // new OptimizeCssAssetsPlugin({parallel:true}),
    //     ]
    // }
}