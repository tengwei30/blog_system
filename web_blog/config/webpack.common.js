const path = require('path');
const webpack = require('webpack')
const config = require('./base-file.js')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[hash].bundle.js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ['file-loader']
            },
            {
               test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
               use: [{
                   loader: 'url-loader',
               }]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.bundle\.js$/,
                use: 'bundle-loader'
            }
        ]
    },
    node: {
        fs: "empty",
        child_process: "empty"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'src': path.resolve(__dirname, '../src'),
        }
    }
}
