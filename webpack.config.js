let path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    config = require('./config'),
	poststylus = require('poststylus'),
    development = ((config.environment || process.env.NODE_ENV) !== 'production'),
    plugins = [
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
	    new ExtractTextPlugin('bundle.css'),
	    new webpack.LoaderOptionsPlugin({
		    options: {
			    stylus: {
				    use: [poststylus([ 'autoprefixer', 'rucksack-css' ])]
			    }
		    }
	    })
    ];

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
                        'style-loader',
                        'css-loader'
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
    plugins: development ? plugins : [
        ...plugins,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            warnings: false
        })
    ]
};