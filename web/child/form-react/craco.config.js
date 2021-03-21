const CracoLessPlugin = require("craco-less");
//多线程
const WebpackBar = require('webpackbar')//进度条
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = {
  wabpack: {
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
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
