const path = require('path')

module.exports = {
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
          alias: {
            '@': path.join(__dirname, 'src')
          }
        }
      }
}