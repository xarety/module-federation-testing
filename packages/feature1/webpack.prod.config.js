const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.prod.config');
const config = require('./webpack.config');

const { name } = require('./package.json');

const {
    [name]: { cdn },
} = require('../../configurations/features');

module.exports = merge(baseConfig, config, {
    output: {
        publicPath: cdn,
    },
});
