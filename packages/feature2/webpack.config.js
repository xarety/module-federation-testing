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
                '@module-federation-testing/shared': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies['@module-federation-testing/shared'],
                },
                '@servicetitan/design-system': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies['@servicetitan/design-system'],
                },
                '@servicetitan/react-ioc': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies['@servicetitan/react-ioc'],
                },
                'mobx-react': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies['mobx-react'],
                },
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
