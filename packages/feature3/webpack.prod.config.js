const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.prod.config');
const config = require('./webpack.config');

module.exports = merge(baseConfig, config, {});
