let path = require('path'),
    config = require('./config'),
    development = (process.env.NODE_ENV || config.environment) !== 'production',
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './dev/js/index.js']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                        'stage-2',
                        'react'
                    ]
                }
            },
            {
                test: /\.jpg$|\.png$/,
                loader: 'file-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'autoprefixer-loader',
                    ]
                })
            },
            {
                test: /\.styl/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'stylus-loader'
                    ]
                })
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: development ? [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'dev/index.html'),
                to: '../build'
            },
            {
                from: path.join(__dirname, 'dev/img/favicon.ico'),
                to: '../build'
            }
        ]),
        new ExtractTextPlugin('bundle.css')
    ] : [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '/index.html'),
                to: '../build'
            },
            {
                from: path.join(__dirname, 'dev/img/favicon.ico'),
                to: '../build'
            }
        ]),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            warnings: false
        })
    ]
};