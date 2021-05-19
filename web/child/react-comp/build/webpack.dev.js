const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(base, {
    mode: 'development', // 默认不压缩文件
    devtool: 'eval-cheap-module-source-map', //[inline- | hidden- | eval- ][nosources-][cheap-[module-]]source-map; inline 表示内联式,在文件最后使用sourceMappingURL引入map,hidden使用外链,产生一个新的map文件,并且表示浏览器不会引入map文件, eval表示代码与map文件混合在一起的,nosources不会显示源码,只会显示行和列和文件信息, cheap不会显示列, [inline, hidden, eval]互斥, cheap-module 不包含列信息, 调试的开发时的源代码
    devServer: {
		port: 8080,
		progress: true, //进度条
        contentBase: '../dist',
        open: true,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:3000',
		// 		pathRewrite: {'^/api' : ''}
		// 	  } // 跨域
		// }
    },
})