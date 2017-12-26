var webpack = require("webpack");
var path = require("path");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: "./dist"
    },
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|otf|woff|eot)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        //new BundleAnalyzerPlugin(),
        new LodashModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
