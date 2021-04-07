const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'public'),
    entry: {
        main: './script.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
}