const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://exusai.github.io/CursoFrontEnd/dist/'
    : '/'
}
