import webpack from "webpack";
import path from "path";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

export default function(app) {
    const config = {
        devtool: "inline-source-map",
        devServer: {
            contentBase: "./dist",
            hot: true
        },
        entry: ["babel-polyfill", "webpack-hot-middleware/client", "./src/index.js"],
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
                    use: [
                        {
                            loader: "file-loader"
                        }
                    ]
                }
            ]
        },
        plugins: [
            //new BundleAnalyzerPlugin(),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
            // OccurenceOrderPlugin is needed for webpack 1.x only
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };

    const compiler = webpack(config);

    app.use(
        webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
            stats: { colors: true }
        })
    );
    app.use(webpackHotMiddleware(compiler));
}
