const { override, fixBabelImports } = require("customize-cra");
// module.exports = function override(config, env) {
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: 'css',
//     })
//     config.optimization= {
//         // 优化项
//         // 分割代码块
//         splitChunks: {
//             minSize: 0,
//             cacheGroups: {
//                 commons: {
//                     name: "commons",
//                     chunks: "initial",
//                     minChunks: 1, // 某个方法至少引用了两次，才会单独抽离
//                 },
//                 vendor: {
//                     priority: 1, //权重
//                     test: /node_modules/,
//                     chunks: "initial",
//                     minSize: 0, //大于0个字节
//                     minChunks: 1, //在分割之前，这个代码块最小应该被引用的次数
//                 },
//             },
//         },
//     }
    
//     return config;
// };
module.exports = override(
    fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
}))