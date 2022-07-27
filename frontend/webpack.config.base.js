const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

const cssPlugin = new MiniCssExtractPlugin();

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // test: /\.(ts|tsx)$/,
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                // resolve: {
                //     extensions: ['.ts', '.tsx', '.js', '.json'],
                // },
                // use: "ts-loader",
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: "css-loader"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            },
        ]
    },
    plugins: [ htmlPlugin, cssPlugin ]
}