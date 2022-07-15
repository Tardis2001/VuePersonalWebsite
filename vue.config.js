const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? 'https://master.d1obi0hfjntner.amplifyapp.com/'
  : '/',

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
  ? 'https://matheusevangelista.vercel.app'
  : '/'
})
