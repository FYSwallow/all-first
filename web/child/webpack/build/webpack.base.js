const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader') // 打包vue
const CopyPlugin = require('copy-webpack-plugin') // 拷贝静态资源
const happypack = require('happypack')

module.exports = {
	/* 
        source-map增加映射文件， 出错会标识当前报错的列和行, 大而全
        eval-source-map 不会产生新的文件， 也会显示行和列
        cheap-module-source-map 不会产生列， 但会产生一个单独的映射文件
        cheap-module-eval-source-map不会产生文件， 集成在打包文件中， 而且不会产生行和列
    */
	// devtool: 'source-map',
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
		react: path.resolve(__dirname, '../src/react/index.js'),
		vue: path.resolve(__dirname, '../src/vue/index.js')
	},
	output: {
		filename: 'js/[name]_[hash:8].js', // 实现多出口
		path: path.resolve(__dirname, '../dist'),
		publicPath: '' //公共资源路径， 当加载所有静态资源时，使用该路径
	},
	module: {
		noParse: /jquery/, // 不去解析jquer模块中的依赖，加快编译速度
		rules: [
			/* 
                从右向左执行， 从下向上执行
            */
			{
				//当有模块使用jquery插件，将插件注入widow对象
				test: require.resolve('jquery'),
				use: [
					{
						loader: 'expose-loader',
						options: {
							exposes: ['$', 'jQuery']
						}
					}
				]
			},
			{
				enforce: 'pre', //执行方式从上到下， 该配置表明提前执行
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: 'eslint-loader' //从eslint官网下载json配置文件
					}
				],
				include: path.resolve(__dirname, '../src'), //只解析某个文件夹
				exclude: /node_modules/ //排除某个文件夹
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				], // 还需要下载vue-template-compiler
				include: [path.resolve(__dirname, '../src/vue')],
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: 'HappyPack/loader?id=js' // 使用happypack打包，使用的配置为id=js
					}
					// {loader: 'babel-loader'}
				],
				include: path.resolve(__dirname, '../src'),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' }
				],
				include: path.resolve(__dirname, '../src'),
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{ loader: 'less-loader' }
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
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 200 * 1024, //小于200k生成base64
							outputPath: 'img/', // 打包路径， 并自动修改打包后文件引入文件的路径
							esModule: false // 不加会导致打包html模板文件中的img图片报错
							// publicPath: 'cdn.com',  //公共资源路径， 当加载所有静态资源时，使用该路径
						}
					}
				]
			}
		]
	},
	externals: {
		// 使用第三方模块，即cdn引入，不参与打包
		jquery: '$'
	},
	plugins: [
		new happypack({
			id: 'js',
			use: [{ loader: 'babel-loader' }]
		}),
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '../copyTest'),
					to: '../dist/'
				}
			]
		}),
		new HtmlWebpackPlugin({
			title: 'webpack4',
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'main.html',
			chunks: ['main'],
			minify: {
				//优化体积
				removeAttributeQuotes: true, // 移除引号
				collapseWhitespace: true //移除换行和空格
			},
			hash: true //为路径添加hash
		}),
		new HtmlWebpackPlugin({
			title: 'vue',
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'vue.html',
			chunks: ['vue']
		}),
		new HtmlWebpackPlugin({
			title: 'react',
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'react.html',
			chunks: ['react']
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name]_[hash:8].css'
		}),
		/* new webpack.ProvidePlugin({
			// 将每个模块注入jquery插件
			$: 'jquery'
		}), */
		new VueLoaderPlugin(),
		// new webpack.BannerPlugin('webpack打包测试'), // 为每个打包文件添加文件声明
		new webpack.IgnorePlugin(/\.\local/, /moment/) // 当打包遇到moment, local就忽略，此时需要手动映入local包
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['*', '.js', '.json', '.vue', '.jsx'] //可以省略文件后缀名
	},
	optimization: {
		// 优化项
		// 分割代码块
		splitChunks: {
			cacheGroups: {
				//公用模块抽离
				common: {
					chunks: 'initial',
					minSize: 0, //大于0个字节
					minChunks: 2 //抽离公共代码时，这个代码块最小被引用的次数
				},
				//第三方库抽离
				/* 
				注意：这里需要配置权重 priority，因为抽离的时候会执行第一个common配置，
				入口处看到jquery也被公用了就一起抽离了，不会再执行wendor的配置了，所以加了权重之后会先抽离第三方模块，
				然后再抽离公共common的，这样就实现了第三方和公用的都被抽离了
			*/
				vendor: {
					priority: 1, //权重
					test: /node_modules/,
					chunks: 'initial',
					minSize: 0, //大于0个字节
					minChunks: 2 //在分割之前，这个代码块最小应该被引用的次数
				}
			}
		}
	}
}
