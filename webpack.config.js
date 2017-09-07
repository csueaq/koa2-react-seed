const path = require('path');
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve('./public/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ ,options: {
                'presets': [
                    'react'
                ],
                'plugins': [
                    'transform-object-rest-spread'

                ],
            },}
        ],

    },

}