const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? 'https://master.d1obi0hfjntner.amplifyapp.com/'
  : 'matheusevangelista.xyz'
})
