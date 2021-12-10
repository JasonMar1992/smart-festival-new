module.exports = {
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: []
  //   }
  // },
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'button-primary-background-color': '@blue',
            // 'button-primary-border-color': '@blue',
          },
        },
      },
    },
  },

  devServer: {
    // open: process.platform === 'darwin',
    host: 'localhost',
    port: 7082,
    disableHostCheck: true,
    // open: true, //配置自动启动浏览器
    // https: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL, // 对应自己的接口
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/wx': {
        target: 'https://api.weixin.qq.com', // 对应自己的接口
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/wx': '',
        },
      },
    },
  },
};
