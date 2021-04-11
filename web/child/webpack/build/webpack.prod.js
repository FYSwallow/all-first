const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //不支持es6语法，已跟换
const TerserPlugin = require('terser-webpack-plugin')
//mode为production情况下js默认为压缩的， 但optimize-css-assets-webpack-plugin压缩css会破坏js原有压缩效果，使用terser-webpack-plugin压缩js

module.exports = merge(base, {
    mode: 'production',
    /*   watch: true, //实时监控，重新打包
    watchOptions:{ // 监控参数
        poll: 1000, // 1s触发一次
        aggregateTimeout: 500, // 防抖
        ignored: /node_modules/ // 不监控
    }, */
    optimization: { // 优化项
	    minimize: true,
	    minimizer:[
	        // new UglifyJsPlugin({//压缩js
	        //     cache:true,
	        //     parallel:true, // 并行压缩
	        //     sourceMap:true // 调试源码
	        // }),
	        new TerserPlugin({
	            parallel: true,
	        }),
	        new OptimizeCssAssetsPlugin({parallel:true}),
	    ]
	}
})