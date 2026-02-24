const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const extractSass = new ExtractTextPlugin({
    filename: "bootstrap.bundle.css"
});
const extractCss = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = {
    mode: 'development',
    entry: [
        './src/js/app.js',
        './src/js/main-style.js',
        './src/js/select2.min.js',
        './src/js/dropdown.js',
        './src/js/google-map.js',
        './src/js/html5shiv.min.js',
        './src/js/lightslider.js',
        './src/js/lightslider-script.js',
        './src/js/wow.min.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCss.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }
            },
            {
                test: /\webpack-bootstrap.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            alias: {
                                "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                            }
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
                            ]
                        }
                    }]
                })
            }
            ]
    },
    plugins: [
        extractCss,
        extractSass,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};