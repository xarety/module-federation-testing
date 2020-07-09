const HtmlWebpackPlugin = require('html-webpack-plugin');

const { createWebpackConfig } = require('@servicetitan/startup');

const config = createWebpackConfig({
    configuration: {
        mode: 'production',
    },
});

config.plugins.splice(
    0,
    1,
    new HtmlWebpackPlugin({
        template: './src/index.ejs',
    })
);

module.exports = config;
