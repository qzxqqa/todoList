var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/App.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react'] }
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};