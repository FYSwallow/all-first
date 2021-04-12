const path = require('path')
const Webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将css文件单独提取出来
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const HappyPack = require('happypack')
// const os = require('os')
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// const WebpackBar = require('webpackbar')

module.exports = {
	mode: 'production',
	// JavaScript 执行入口文件, 多入口打包
	entry: {
		react: [
			'@babel/polyfill',
			path.resolve(__dirname, '../src/react/index.js')
		], //转义(promise、Generator、Set、Maps、Proxy等新api)
		vue: path.resolve(__dirname, '../src/vue/index.js')
	},
	output: {
		// 把所有依赖的模块合并输出到一个 bundle.js 文件
		filename: '[name]/[name]_[hash:8].js',
		// 输出文件都放到 dist 目录下
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			/* 编译vue文件 */
			{
				test: /\.vue$/,
				use: ['vue-loader'],
				// include: [path.resolve(__dirname, '../src/vue')],
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: '/node_modules'
			},
			{
				test: /\.css$/,
				use: [
					// MiniCssExtractPlugin.loader,
					{ loader: 'vue-style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require('autoprefixer')(), //需要在package.json配置浏览器属性
									[
										'postcss-preset-env',
										{
											// Options
										}
									]
								]
							}
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					// MiniCssExtractPlugin.loader,
					{ loader: 'vue-style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											// Options
										}
									]
								]
							}
						}
					},
					{ loader: 'less-loader' }
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'img/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'media/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'fonts/[name].[hash:8].[ext]'
								}
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		// new MiniCssExtractPlugin({
		//   // 从 .js 文件中提取出来的 .css 文件的名称
		//   filename: `[name]/.[hash:8].css`,
		//   chunkFilename: '[id].css',
		// }),
		// 为不同入口配置不同页面模板
		// new WebpackBar(),
		// new HtmlWebpackPlugin({
		// 	template: path.resolve(__dirname, '../public/index.html'),
		// 	filename: 'react/index.html',
		// 	chunks: ['react'] //指定多入口打包文件需要引入
		// }),
		// new HtmlWebpackPlugin({
		// 	template: path.resolve(__dirname, '../public/index.html'),
		// 	filename: 'vue/index.html',
		// 	chunks: ['vue']
		// }),
		new CleanWebpackPlugin(),
		// autoWebPlugin,
		new VueLoaderPlugin(),
		// new HappyPack({
		// 	//用id来标识 happypack处理那里类文件
		// 	id: 'happyBabel',
		// 	//如何处理  用法和loader 的配置一样
		// 	loaders: [
		// 		{
		// 			loader: 'babel-loader?cacheDirectory=true'
		// 		}
		// 	],
		// 	//共享进程池
		// 	threadPool: happyThreadPool,
		// 	//允许 HappyPack 输出日志
		// 	verbose: true
		// })
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['*', '.js', '.json', '.vue', '.jsx']
	}
}
