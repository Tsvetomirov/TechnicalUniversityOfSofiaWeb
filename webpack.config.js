const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        bundle: ['@babel/polyfill','./tsx/common/router/ReactRouter.tsx'],
        erasmus: ['@babel/polyfill','./tsx/common/router/ReactRouter.tsx'],
        erasmusCSS: ["./resources/erasmus/erasmus.scss"],
        main: ['./resources/portal/main.scss'],
        login: ['@babel/polyfill','./resources/login/login.scss']

    },
    output: {
        path: path.resolve(__dirname, "target/js/"),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.ts$|tsx/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        //options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                        //    publicPath: '../',
                       //     hmr: process.env.NODE_ENV === 'development',
                       // },
                    },
                    'css-loader',
            {
                    loader: "sass-loader"
                },]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../resources/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    mode: "development",
};
