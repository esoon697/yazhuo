const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const Timestamp = new Date().getTime()
console.log(isProduction)
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/portal/',
    outputDir: 'doctorUnit',
    lintOnSave: true,
    configureWebpack: {
        output: {
            filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
            chunkFilename: `[name].${
                process.env.VUE_APP_Version
                }.${Timestamp}.js`,
        },
    },
    chainWebpack: (config) => {
        config
            .entry('index')
            .add('babel-polyfill')
            .end()
        config.resolve.alias.set('@', resolve('src'))
        if (isProduction) {
            config.plugins.delete('preload')
            config.plugins.delete('prefetch')
            config.optimization.minimize(true)
            config.optimization.splitChunks({
                chunks: 'all',
            })
        }
    },
    configureWebpack: (config) => {
        if (isProduction) {
            config.optimization = {
                splitChunks: {
                    minSize: 1000000,
                    maxSize: 2000000,
                    minChunks: 2,
                    maxAsyncRequests: 5,
                    maxInitialRequests: 3,
                    automaticNameDelimiter: '~',
                    name: true,
                    chunks: 'async',
                },
            }
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                }),
                new SimpleProgressWebpackPlugin(),
            )
        }
    },
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        requireModuleExtension: false,
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    parallel: require('os').cpus().length > 1,
    devServer: {
        disableHostCheck: true,
        port: 4399,
        open: true,
        compress: false,
        proxy: {
          '/api': {
            // 目标 API 地址
            target: 'http://api.yazhuokj.com/',
            // 如果要代理 websockets
            ws: true,
            // 将主机标头的原点更改为目标URL
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''    //代理的路径
            }
          }
        }
    },
}
