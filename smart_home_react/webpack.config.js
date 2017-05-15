module.exports = {
    entry: "./app/js/main.js",
    output: {
        filename: "./bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: [/node_modules/],
            options: {
                presets: ["react", "env"]
            }
        }]
    }
};