// const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
const TerserWebpackPlugin = require("terser-webpack-plugin"); //取消console日志打印

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.optimization = {
                // 优化项
                // 分割代码块
                splitChunks: {
                    minSize: 0,
                    cacheGroups: {
                        commons: {
                            name: "commons",
                            chunks: "initial",
                            minChunks: 1, // 某个方法至少引用了两次，才会单独抽离
                        },
                        vendor: {
                            priority: 1, //权重
                            test: /node_modules/,
                            chunks: "initial",
                            minSize: 0, //大于0个字节
                            minChunks: 1, //在分割之前，这个代码块最小应该被引用的次数
                        },
                    },
                },
                minimizer: [
                    new TerserWebpackPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: true, // Must be set to true if using source-maps in production
                        terserOptions: {
                            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                        },
                    }),
                ],
            };
            return webpackConfig;
        },
        // optimization: {
        //     // 优化项
        //     // 分割代码块
        //     splitChunks: {
        //         minSize: 0,
        //         cacheGroups: {
        //             commons: {
        //                 name: "commons",
        //                 chunks: "initial",
        //                 minChunks: 1, // 某个方法至少引用了两次，才会单独抽离
        //             },
        //             vendor: {
        //                 priority: 1, //权重
        //                 test: /node_modules/,
        //                 chunks: "initial",
        //                 minSize: 0, //大于0个字节
        //                 minChunks: 1, //在分割之前，这个代码块最小应该被引用的次数
        //             },
        //         },
        //     },
        // },
    },
    babel: {
        plugins: [
            //按需加载antd
            ["import", { libraryName: "antd", style: true }, "pc"],
        ],
    },
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            // options: {
            //     lessLoaderOptions: {
            //         lessOptions: {
            //             modifyVars: { "@primary-color": "#1DA57A" },
            //             javascriptEnabled: true,
            //         },
            //     },
            // },
        },
    ],
};
