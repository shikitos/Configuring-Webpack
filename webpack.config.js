const path = require("path"); //connect plugin 'path'
const HTMLWebpackPlugin = require("html-webpack-plugin"); //connect htmlwebpackplugin
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin"); //connect cleanwebpackplugin

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development", //mode
    entry: {
        //entry point
        main: "./index.js", //for the main file
        analytics: "./analytics.js", //analytics file
    },
    output: {
        filename: "[name].[contenthash].js", //where to connect all javascript files - [name] => keys for the several files system
        //[contenthash] - for the future, for cache — when user redirects to the page - need new file
        //[] calls — pattern
        path: path.resolve(__dirname, "dist"), //where to add all javascript files
    },
    plugins: [
        //all webpack plugins
        new HTMLWebpackPlugin({
            template: "./index.html", //path to the index.html
        }),
        new CleanWebpackPlugin(), //clean dist folder
    ],
    module: {
        rules: [{
            test: /\.css$/, //if webpack sees .css, it use 'use' rule
            use: ['style-loader', 'css-loader'],
        }]
    }
};