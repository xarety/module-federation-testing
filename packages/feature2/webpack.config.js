const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3002,
    },
    output: {
        publicPath: 'http://localhost:3002/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /bootstrap\.tsx$/,
                loader: 'bundle-loader',
                options: {
                    lazy: true,
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'feature2',
            library: { type: 'var', name: 'feature2' },
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/app',
            },
            // shared: ['react', 'react-dom', 'react-router-dom'],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
