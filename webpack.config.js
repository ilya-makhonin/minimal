let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
// let CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: {
        vendors: path.join(__dirname, 'src', 'vendors.js'),
        app: path.join(__dirname, 'src', 'app.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins: [ 
                        '@babel/plugin-proposal-decorators',
                        '@babel/plugin-proposal-class-properties',
                        'react-html-attrs'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test   : /\.(jpg|png|gif)$/,
				exclude: /node_modules/,
                loader : 'url-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
            },
            {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=application/svg+xml&name=./fonts/[name].[ext]"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.sass', '.css']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};