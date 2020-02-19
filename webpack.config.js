module.exports = {
    entry:  './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: {
                    loader: 'source-map-loader'
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development'
}