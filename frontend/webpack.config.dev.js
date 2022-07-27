const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');

module.exports = () => merge(BaseConfig, {
    mode: "development",
    devServer: {
        port: 3000
    },
    devtool: 'source-map',
})