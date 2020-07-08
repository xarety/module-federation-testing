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
        port: 8080,
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
            name: 'application',
            remotes: {
                feature_a: 'feature_a',
                feature_b: 'feature_b',
                feature_c: 'feature_с',
            },
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            inject: false,
        }),
    ],
};
