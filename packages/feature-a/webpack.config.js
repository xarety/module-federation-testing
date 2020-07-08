const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./dist/index'],
    resolve: {
        extensions: ['.js'],
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8081,
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
            name: 'feature_a',
            library: { type: 'var', name: 'feature_a' },
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
