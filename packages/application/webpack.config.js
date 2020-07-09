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
