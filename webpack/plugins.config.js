const path = require('path');
const constants = require('./constants');
const multipage = require('./multipage.config');


const miniCss = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loader = require('sass-loader');
const webpack = require('webpack');

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

const result = {};

const htmlPlugins = multipage.pages.map((page) => { 
    return new HtmlWebpackPlugin({
        inject: true,
        template: page.template,
        filename: page.page,
        chunks: [...page.chunks],
    }); 
});

result.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new miniCss({
        filename: './styles/[name].css',
    }),
    ...htmlPlugins
]

result.module = {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                          progressive: true,
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                          enabled: false,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }
                }
            ],
            type: 'asset/resource',
        },
        {
            test: /\.(sa|sc|c)ss$/i,
            exclude: /node_modules/,
            use: [
                {
                    loader: miniCss.loader
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                },
            ]
        },
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    targets: "defaults",
                    presets: [
                        ['@babel/preset-env']
                    ]
                }
            }
        }
    ]
}

if (buildType === constants.modes.prod) {
    result.optimization = {
      ...result.optimization,
      minimize: true,
      minimizer: [new TerserPlugin()],
    }
}
  
  
  
module.exports = result