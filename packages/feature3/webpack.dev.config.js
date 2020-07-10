const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.dev.config');
const config = require('./webpack.config');

const { name } = require('./package.json');

const {
    [name]: { publicPath },
} = require('../../configurations/features');

module.exports = merge(baseConfig, config, {
    output: {
        publicPath,
    },
});
