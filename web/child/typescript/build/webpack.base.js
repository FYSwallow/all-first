const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.ts')
    },
    output: {
        filename: 'js/[name]_[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_module/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../pubilc/index.html'),
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            chunks:['main']
        }),
        new CleanWebpackPlugin()
    ]
}