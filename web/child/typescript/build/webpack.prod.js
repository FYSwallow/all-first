const {merge} = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
    mode: 'production',
    devServer: {
        port: 8080,
        progress: true,
        contentBase: '../dist/',
        hot:true,
        open: true
    }
})