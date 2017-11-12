var packageJSON = require('./package.json');
var path = require('path');

const PATHS = {
    build: path.join(__dirname,
        'target',
        'classes',
        'static',
        'js')
};

module.exports = {
    entry: './src/main/resources/static/js/app.js',

    output: {
        path: PATHS.build,
        publicPath: '/dist',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    },

    stats: {
        colors: true
    }
    ,

    devtool: 'source-map'
}
;

