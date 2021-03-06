const path = require("path");

const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

//多线程
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ttf$/,
                use: ["file-loader"],
            },
        ],
    },
    webpack: {
        plugins: [
            new WebpackBar(), //进度条
            new HappyPack({
                //用id来标识处理那里类文件
                id: "happyBabel",
                //如何处理  用法和loader 的配置一样
                loaders: [
                    {
                        loader: "babel-loader?cacheDirectory=true",
                    },
                ],
                //共享进程池
                threadPool: happyThreadPool,
                //允许 HappyPack 输出日志
                verbose: true,
            }),
            new MiniCssExtractPlugin({
                // 将css打包成单独的css文件
                filename: devMode ? "[name].css" : "[name].[hash:5].css",
                chunkFilename: devMode ? "[id].css" : "[id].[hash:5].css",
            }),
            new MonacoWebpackPlugin({
                // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
                languages: ["json"],
            }),
            // new webpack.HotModuleReplacementPlugin(),
            // new webpack.NamedModulesPlugin(),
        ],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};
