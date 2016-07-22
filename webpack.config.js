module.exports = {
    entry: [
        __dirname + '/app/App.js'
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devSever: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
