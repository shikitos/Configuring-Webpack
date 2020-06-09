const path = require('path');

module.exports = {
    entry: './src/index.js', //entry point
    output: {
        filename: 'bundle.js', //where to connect all javascript files
        path: path.resolve(__dirname, 'dist') //where to add all javascript files
    }
}