const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const dependencies = require('./package.json').dependencies;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'feature2',
            library: { type: 'var', name: 'feature2' },
            filename: 'remoteEntry.js',
            exposes: {
                './App': './dist/app',
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
};
