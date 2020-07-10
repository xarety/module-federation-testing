const HtmlWebpackPlugin = require('html-webpack-plugin');

const { createWebpackConfig } = require('@servicetitan/startup');

const config = createWebpackConfig({
    configuration: {
        mode: 'development',
    },
});

const features = require('./features');
const scope = process.env.SERVICETITAN_SCOPE;

config.plugins.splice(
    0,
    3, // WriteFilePlugin & WatchIgnorePlugin aren't ready
    new HtmlWebpackPlugin({
        template: './src/index.ejs',
        templateParameters: {
            features: Object.entries(features).map(([package, { publicPath, cdn }]) => {
                if (!scope.length) {
                    return publicPath;
                }

                return scope.includes(package) ? publicPath : cdn;
            }),
        },
    })
);

module.exports = config;
