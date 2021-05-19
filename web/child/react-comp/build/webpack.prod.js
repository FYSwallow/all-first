const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //不支持es6语法，已跟换
const TerserPlugin = require('terser-webpack-plugin')
//mode为production情况下js默认为压缩的， 但optimize-css-assets-webpack-plugin压缩css会破坏js原有压缩效果，使用terser-webpack-plugin压缩js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin(
            {
               analyzerMode: 'server',
               analyzerHost: '127.0.0.1',
               analyzerPort: 8890,
               reportFilename: 'report.html',
               defaultSizes: 'parsed',
               openAnalyzer: true,
               generateStatsFile: false,
               statsFilename: 'stats.json',
               statsOptions: null,
               logLevel: 'info'
            }
        )
    ],
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
	    ],
	}
})