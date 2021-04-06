const path = require('path')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
// const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝静态资源
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩打包后的css
// // const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 不支持es6语法
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = WebpackMerge.merge(webpackConfig, {
	
})
