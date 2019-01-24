const path = require('path');
const ExtractTextPlguin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProd = env === 'production'
    const CSSExtract = new ExtractTextPlguin('styles.css')

    return {
        entry: './src/app.js', // ENTRY to OUTPUT
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
    
    // LOADER - Costumizes the behavior for a file
}