module.exports = {
    entry: `./src/index.js`,

    // development -- ソースマップ有効
    // production -- 最適化
    mode: "development",

    output: {
        path: `${__dirname}/dist`,
        filename: "index.js"
    },

    devServer: {
        contentBase: "dist",
        open: true
    }
};