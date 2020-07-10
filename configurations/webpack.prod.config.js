const HtmlWebpackPlugin = require('html-webpack-plugin');

const { createWebpackConfig } = require('@servicetitan/startup');

const config = createWebpackConfig({
    configuration: {
        mode: 'development',
    },
});

const features = require('./features');

config.plugins.splice(
    0,
    3, // WriteFilePlugin & WatchIgnorePlugin aren't ready
    new HtmlWebpackPlugin({
        template: './src/index.ejs',
        templateParameters: {
            features: Object.entries(features).map(([, { cdn }]) => cdn),
        },
    })
);

module.exports = config;
