module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todolist-vue/'
    : '/',
  devServer: {
    open: true,
    proxy: process.env.HEROKU_URL || 'http://localhost:8081'
  }
}
