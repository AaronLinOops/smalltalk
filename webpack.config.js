module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/lib/smalltalk/main.js",
    output: {
        path: __dirname + "/target",
        filename: "smalltalk.js"
    },
    devServer: {
        port: 8088,
        contentBase: "./target",
        historyApiFallback: true,
        inline: true
    }
}