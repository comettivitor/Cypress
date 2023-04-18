const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'C:/Users/MVSMART03/Desktop/Cypress/cypress/integration/examples/*.js'
  },
});
