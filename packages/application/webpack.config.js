const path = require('path');

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const baseConfig = require('../../configurations/webpack.config');

const dependencies = require('./package.json').dependencies;

module.exports = merge(baseConfig, {
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
    plugins: [
        new ModuleFederationPlugin({
            name: 'application',
            library: { type: 'var', name: 'application' },
            remotes: {
                feature1: 'feature1',
                feature2: 'feature2',
                feature3: 'feature3',
            },
            shared: {
                'react': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies.react,
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies['react-dom'],
                },
                'react-router-dom': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies['react-router-dom'],
                },
            },
        }),
    ],
});
