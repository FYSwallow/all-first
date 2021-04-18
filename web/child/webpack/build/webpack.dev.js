const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
	mode: 'development', // 默认不压缩文件
    devServer: {
		port: 8080,
		progress: true, //进度条
		contentBase: '../dist',
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:3000',
		// 		pathRewrite: {'^/api' : ''}
		// 	  } // 跨域
		// }
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 打印哪个模块更新了
        new webpack.HotModuleReplacementPlugin(), // 本地启动热更新
    ]
})