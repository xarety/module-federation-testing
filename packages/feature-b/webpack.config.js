const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./dist/index'],
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        port: 8082,
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader',
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'feature-b',
            library: { type: 'var', name: 'feature_b' },
            filename: 'remoteEntry.js',
            exposes: {
                './App': './dist/app.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};