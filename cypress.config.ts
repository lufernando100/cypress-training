import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: true,
        json: true,
      },
    },
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 10000
      config.defaultCommandTimeout = 50000;
      config.responseTimeout = 50000;
      // IMPORTANT return the updated config object
      return config;
    },
  },
  watchForFileChanges: false,
});
