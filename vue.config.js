module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
