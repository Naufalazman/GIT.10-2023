const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    execTimeout: 600000,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000
  },
});
