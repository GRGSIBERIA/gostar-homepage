module.exports = {
    entry: `./src/index.js`,

    // development -- ソースマップ有効
    // production -- 最適化
    mode: "development",

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    // linkタグに出力するローダ
                    "style-loader",
                    {   // CSSをバンドル
                        loader: "css-loader",
                        options: { 
                            url: false ,
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    {   // PostCSS
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    // ベンダープレフィクスを自動付与
                                    ["autoprefixer", { grid: true }]
                                ]
                            }
                        }
                    },
                    {   // Sassをバンドル
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
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