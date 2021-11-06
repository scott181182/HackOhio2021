module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.module
            .rule("plotly")
            .test(/\.js$/)
            .use("ify-loader")
                .loader("ify-loader")
                .end();
    }
}
