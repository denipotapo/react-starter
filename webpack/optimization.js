
'use strict';

const define = require('./define');

module.exports = {
    minimize: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true,
    runtimeChunk: {
        name: 'startup'
    },
    splitChunks: {
        name: true,
        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        cacheGroups: {
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            },
            polyfill: {
                test: /core-js/,
                reuseExistingChunk: true,
                priority: 10
            },
            styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true
            },
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                minChunks: 2,
                chunks: 'initial',
                enforce: true,
                reuseExistingChunk: false
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            }
        }
    }
};
