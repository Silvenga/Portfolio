var Path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: Path.join(__dirname, 'src'),
    entry: {
        main: [
            './app/entry.js'
        ]
    },
    output: {
        path: Path.join(__dirname, 'bin'),
        filename: "bundle.js"
    },
    plugins: [
        new AureliaWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but expose it to every module
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015-loose', 'stage-1'],
                plugins: ['transform-decorators-legacy']
            }
        }, {
            test: /\.css?$/,
            loader: 'style!css'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|gif|jpg)$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff2'
        }, {
            test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
        }]
    },
    resolve: {
        modulesDirectories: [
            "web_modules",
            "node_modules",
            // "semantic"
        ]
    }
};