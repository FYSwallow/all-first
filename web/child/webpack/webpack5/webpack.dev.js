const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')

module.exports = WebpackMerge.merge(webpackConfig, {
	mode: 'development',
	devtool: 'cheap-module-source-map', //source-map, 功能齐全，减慢打包速度； eval-source-map； cheap-module-source-map；cheap-module-eval-source-map 
	devServer: {
		port: 3000,
		hot: true,
		contentBase: '../dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})
