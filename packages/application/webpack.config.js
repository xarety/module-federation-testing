const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const dependencies = require('./package.json').dependencies;

module.exports = {
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
