const webpack = require('webpack');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        // new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(['dist']),
        // new webpack.ProvidePlugin({
        //     // _: 'lodash'      // 全量引入lodash
        //     join: ['lodash', 'assign', 'join']    // 引入loash中的assign、join 模块，这样就可以直接assign() 不用的部分不会被引入
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true,
        //     minify: {
        //         html5: true,
        //         ignoreCustomComments: true,
        //         minifyCSS: true,
        //         minifyJS: true,
        //         preserveLineBreaks: true,
        //         preventAttributesEscaping: true
        //     },
        //     chunksSortMode: 'dependency'
        })
    ]
});