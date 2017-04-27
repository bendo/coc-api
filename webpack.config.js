const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
})

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.styl$/, 
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'stylus-loader'}
                ]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
module.exports = config;
