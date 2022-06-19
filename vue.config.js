module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/pwa/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
