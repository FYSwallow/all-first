const path = require("path");
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将css文件单独提取出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
// const { AutoWebPlugin } = require('web-webpack-plugin');

// // 使用本文的主角 AutoWebPlugin，自动寻找 pages 目录下的所有目录，把每一个目录看成一个单页应用
// const autoWebPlugin = new AutoWebPlugin('./src/pages', {
//   template: './public/index.html', // HTML 模版文件所在的文件路径
//   postEntrys: ['./src/style/common.css'],// 所有页面都依赖这份通用的 CSS 样式文件
//   // 提取出所有页面公共的代码
//   commonsChunk: {
//     name: 'common',// 提取出公共代码 Chunk 的名称
//   },
// });

module.exports = {
    mode:'production',
  // JavaScript 执行入口文件, 多入口打包
  entry: {
     main: ["@babel/polyfill",path.resolve(__dirname, '../index.js')], //转义(promise、Generator、Set、Maps、Proxy等新api)
    //  main: path.resolve(__dirname, '../index.js'),
    //  child: path.resolve(__dirname, '../src/modules/child/index.js'),
    //  subling: path.resolve(__dirname, '../src/modules/subling/index.js'),
  },
  // entry: () => {
  //   return {
  //     a: "./index.js"
  //   }
  // },
  // entry: autoWebPlugin.entry({
  //   // 这里可以加入你额外需要的 Chunk 入口
  //   default: "./index.js"
  // }),
  output: {
      // 把所有依赖的模块合并输出到一个 bundle.js 文件
      filename: "js/[name]_[hash:8].js",
      // 输出文件都放到 dist 目录下
      path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use : [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader" },
                { 
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        require('autoprefixer')(), //需要在package.json配置浏览器属性
                        [
                          "postcss-preset-env",
                          {
                            // Options
                          },
                        ], 
                      ],
                    },
                  },
                },
            ],
        },
        {
            test: /\.less$/,
            use : [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader" },
                { 
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "postcss-preset-env",
                          {
                            // Options
                          },
                        ],
                      ],
                    },
                  },
                },
                { loader: "less-loader" }
            ]
        },
        {
            test: /\.(jpe?g|png|gif)$/i,
            use : [
                { 
                  loader: "url-loader",
                  options: {
                    limit: 1024,
                    fallback: {
                      loader: 'file-loader',
                      options: {
                        name: 'img/[name].[hash:8].[ext]'
                      }
                    }
                  },
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
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: '/node_modules'
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `css/.[hash:8].css`,
      chunkFilename: '[id].css',
    }),
    // 为不同入口配置不同页面模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'child/child.html',
      chunks: ['child']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'subling/subling.html',
      chunks: ['subling']
    }),
    new CleanWebpackPlugin(),
    // autoWebPlugin,
    new Webpack.HotModuleReplacementPlugin()

  ],
  resolve: {
    alias: {
      '@':'./src'
    }
  },
  devServer:{
    port:3000,
    hot:true,
    contentBase:'../dist'
  }
};
