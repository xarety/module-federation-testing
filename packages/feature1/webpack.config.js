const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const baseConfig = require('../../configurations/webpack.config');

const dependencies = require('./package.json').dependencies;

module.exports = merge(baseConfig, {
    output: {
        publicPath: '/packages/feature1/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'feature1',
            library: { type: 'var', name: 'feature1' },
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/app',
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
