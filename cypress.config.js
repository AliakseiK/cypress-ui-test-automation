const { defineConfig } = require('cypress')
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: '{REPORT_PORTAL_ENDPOINT}',
    apiKey: '',
    launch: 'ui-cypress-tests-execution',
    project: '',
    description: '',
    attributes: []
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    }
  },
})

