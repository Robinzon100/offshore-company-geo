const path = require("path");
module.exports = {
    devtool: "none",
    mode: "development",
    entry: "./development_javascript/test.js",
    output: {
        filename: "main.min.js",
        path: path.resolve(__dirname, "production_javascript")
    }
};