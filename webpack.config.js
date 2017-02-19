var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var OUTPUT_DIR = path.resolve(__dirname, 'public/assets');
var APP_DIR = path.resolve(__dirname, 'src/client');
var config = {
    watch : true,

    entry:  {
        app : path.resolve(APP_DIR, 'app/index.js')
    },
    output: {
        path: OUTPUT_DIR ,
        filename: 'bundle.js',
         sourceMapFilename: "bundle.js.map"
 
    },

    devServer: {
        contentBase: 'public',
        port: 9900,
        hot : true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
       new HtmlWebpackPlugin({
            filename :  'index2.html'
        }),
        new ExtractTextPlugin("[name].css"),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'ThirdParty',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),*/
        new CopyWebpackPlugin([{
            from: '*.html'
        }])
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot-loader'],
                include: APP_DIR
            },
            {
                test: /\.js?$/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015', 'react','babel-preset-react']
                }
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }
        ]
    }
};

module.exports = config;

