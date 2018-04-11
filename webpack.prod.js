const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');

module.exports = [{
    // SERVER
    target: 'node',
    node: {
        __dirname: false
    },
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                minimize: true
                            }
                        },
                        'less-loader'
                    ]
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`public/${pkg.name}.${pkg.version}.min.css`),
        new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions: { ecma: 8 }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.DefinePlugin({
            __isBrowser__: 'false'
        })
    ]
}, {
    // BROWSER
    entry: './src/browser.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: `${pkg.name}.${pkg.version}.min.js`
    },
    node: {
        __dirname: false
    },
    target: 'web',
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                minimize: true
                            }
                        },
                        'less-loader'
                    ]
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`${pkg.name}.${pkg.version}.min.css`),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.DefinePlugin({
            __isBrowser__: 'false'
        })
    ]
}];
