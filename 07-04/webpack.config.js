var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

// 向外暴露一个打包的配置对象。
// 因为 webpack 是基于 node 构建的，所以 webpack 支持所有 Node API 和语法
module.exports = {
    mode: 'development', // production可用于上线前压缩代码
    devServer: {
        host: '127.0.0.1',
        port: '8090'
    },
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    // 在webpack 4.x中，有一个很大的特性，就是约定大于配置，默认的打包入口路径是src -> index.js
    entry: "./src/js/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};

// webpack-dev-server --contentbase -src --inline --hot  启动命令