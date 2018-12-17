
const autoprefixer = require('autoprefixer');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { alias } = require('../config');

module.exports = {
    target: 'node',
    devtool: 'source-map',
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [{
                    loader: require.resolve('eslint-loader'),
                    options: {
                        eslintPath: require.resolve('eslint'),
                        emitWarning: false
                    }
                }],
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src/')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    "plugins": [
                        [
                            "import",
                            {
                                "libraryName": "antd",
                                "style": false
                            }
                        ]
                    ]
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 500,
                        outputPath: 'public/images/',
                        name: '[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local].[hash:8]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias
    }
};
