const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.prod.config');
const config = require('./webpack.config');

const version = require('./package.json').version;

module.exports = merge(baseConfig, config, {
    output: {
        publicPath: `https://unpkg.com/@module-federation-testing/feature2@${version}/dist/`,
    },
});
