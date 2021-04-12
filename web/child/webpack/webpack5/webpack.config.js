const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		react: './src/react/index.js',
		vue: './src/vue/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]/[name].boundle.js'
	},
	module: {
		rules: [
			{ test: /\.vue$/, use: ['vue-loader'] },
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader'
				}
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'css-loader'}
        ]
      }
		]
	},
  plugins: [new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'react/index.html',
      chunks: ['react']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'vue/index.html',
      chunks: ['vue']
    }),
  ],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['*', '.js', '.json', '.vue', '.jsx']
	}
}
