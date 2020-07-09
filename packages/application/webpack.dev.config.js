const path = require('path');

const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.dev.config');
const config = require('./webpack.config');

module.exports = merge(baseConfig, config, {
    devServer: {
        contentBase: [
            path.join(__dirname, '../../packages/feature1/dist'),
            path.join(__dirname, '../../packages/feature2/dist'),
            path.join(__dirname, '../../packages/feature3/dist'),
        ],
        contentBasePublicPath: ['/packages/feature1', '/packages/feature2', '/packages/feature3'],
        port: 8080,
        historyApiFallback: true,
        watchContentBase: true,
    },
});
