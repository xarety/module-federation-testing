const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.dev.config');
const config = require('./webpack.config');

module.exports = merge(baseConfig, config, {
    output: {
        publicPath: '/packages/feature3/',
    },
});
