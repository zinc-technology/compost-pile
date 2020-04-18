const { Given } = require("cucumber");
Given("a Guest Sponsor is on the home page", async function() {
  return this.browser.get('http://localhost:8080/')
});
