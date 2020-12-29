module.exports = {
    entry: `./src/index.js`,

    // development -- ソースマップ有効
    // production -- 最適化
    mode: "development",

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { 
                            url: false ,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            }
        ]
    },

    output: {
        path: `${__dirname}/dist`,
        filename: "index.js"
    },

    devServer: {
        contentBase: "dist",
        open: true
    },

    target: ["web", "es5"]
};