const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV);
const config = {
    context: path.resolve('src'),
    entry: {
        app: ['./js/index.jsx'],
        vendor: ['react', 'react-dom', 'react-router'],
    },
    output: {
        filename: 'asset/js/[name].js?[hash]',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    // devtool: "source-map",
    resolve: {
        modules: [
            path.resolve('src/html'),
            path.resolve('src/ts'),
            path.resolve('node_modules'),
        ],
        extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },

    devServer: {    // https://webpack.js.org/configuration/dev-server/#devserver
        hot: true,
        stats: {    // https://webpack.js.org/configuration/stats/
            colors: true,
            hash: false,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            chunkModules: false,
            modules: false,
            cached: false,
            reasons: false,
            source: true,
            error: true,
            errorDetails: true,
            chunkOrigins: false,
        },
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                include: path.resolve('src'),
                exclude: /node_modules/,
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus',
                include: [
                    path.resolve('src/css'),
                    path.resolve('src'),
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=1024',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug',
                options: {
                    self: true,
                    pretty: DEV_MODE,
                },
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),

        new HtmlWebpackPlugin({
            template: 'html/index.template.pug',
            data: {
                DEV_MODE,
            },
        }),
        new webpack.DefinePlugin({
            __DEV__: DEV_MODE,
            'process.env.NODE_ENV': DEV_MODE ? "'development'" : '"production"',
        }),
        ...DEV_MODE ? [
            new webpack.HotModuleReplacementPlugin(),
        ] : [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false,
                },
            }),
        ],
    ],
    externals: {
    /*    "react"         : "React",
        "react-dom"     : "ReactDOM",
        "react-router"  : "ReactRouter",*/
    },
};

module.exports = config;
