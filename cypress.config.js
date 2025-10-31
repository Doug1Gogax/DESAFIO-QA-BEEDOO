const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://creative-sherbet-a51eac.netlify.app/',
    supportFile:false,
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      
    },
  },
})