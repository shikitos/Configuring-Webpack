const path = require("path"); //connect plugin 'path'
const HTMLWebpackPlugin = require("html-webpack-plugin"); //connect htmlwebpackplugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //connect cleanwebpackplugin
const CopyWebpackPlugin = require("copy-webpack-plugin"); //connetct copewebpackplugin

module.exports = {
    context: path.resolve(__dirname, "src"),
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
    resolve: {
        extensions: [".js", ".json", ".css", ".png", ".xml"], //what extensions we should understand by default
        alias: {
            "@models": path.resolve(__dirname, "src/models"), //path to models
            "@": path.resolve(__dirname, "src"),
        },
    },
    optimization: {
        splitChunks: {
            chunks: "all", //connecting the same thing twice - put it in a separate file (vendors)
        },
    },
    devServer: {
        port: 4200, //live server's port
    },
    plugins: [
        //all webpack plugins
        new HTMLWebpackPlugin({
            template: "./index.html", //path to the index.html
        }),
        new CleanWebpackPlugin(), //clean dist folder
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src/favicon.ico"), //copy file or folder from
                to: path.resolve(__dirname, "dist"),
            }, ],
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/, //if webpack sees .css, it use 'use' rule
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"], // for use imgs
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/, //fonts
                use: ["file-loader"],
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"],
            },
        ],
    },
};