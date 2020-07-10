const { merge } = require('webpack-merge');
const baseConfig = require('../../configurations/webpack.dev.config');
const config = require('./webpack.config');

const scope = process.env.SERVICETITAN_SCOPE;
const features = Object.entries(require('../../configurations/features')).filter(([package]) => {
    if (!scope.length) {
        return true;
    }

    return scope.includes(package);
});

module.exports = merge(baseConfig, config, {
    devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: features.map(([, { contentBase }]) => contentBase),
        contentBasePublicPath: features.map(([, { publicPath }]) => publicPath),
        watchContentBase: true,
    },
});
