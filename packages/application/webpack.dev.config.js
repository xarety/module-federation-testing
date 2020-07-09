const path = require('path');

const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.dev.config');
const config = require('./webpack.config');

module.exports = merge(baseConfig, config, {
    devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: [
            path.join(__dirname, '../../packages/feature1/dist/bundle'),
            path.join(__dirname, '../../packages/feature2/dist/bundle'),
            path.join(__dirname, '../../packages/feature3/dist/bundle'),
        ],
        contentBasePublicPath: ['/packages/feature1', '/packages/feature2', '/packages/feature3'],
        watchContentBase: true,
    },
});
