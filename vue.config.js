module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todolist-vue/'
    : '/',
  devServer: {
    open: true,
    proxy: {
      '/': {
        target: 'https://cryptic-caverns-48253.herokuapp.com',
        pathRewrite: {
          '^/': ''
        }
      },
      '/todolist-vue': {
        target: 'https://cryptic-caverns-48253.herokuapp.com',
        pathRewrite: {
          '^/todolist-vue': ''
        }
      }
    }
    // proxy: 'https://cryptic-caverns-48253.herokuapp.com' || 'http://localhost:8081'
  }
}
