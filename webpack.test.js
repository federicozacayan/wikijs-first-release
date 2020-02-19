module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.spec\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                enforce: 'post',
                test: /\.js$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    query: {
                        esModules: true
                    },
                },
                exclude: /node_modules|\.spec\.js$/
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development'
}