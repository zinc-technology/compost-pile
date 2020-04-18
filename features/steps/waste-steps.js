const { Given, When, Then } = require('cucumber')
const { By } = require('selenium-webdriver');

const assert = require('assert')
Given('a waste composting balance of ${int}', async function (dollars) {
  this.compostPile = await this.api.createCompostPile({ compostingCents: dollars * 100 })
});

When('they submit the deposit waste capital widget with:', function (dataTable) {
  return Promise.all(dataTable.hashes().map(({ field, value }) =>
    this.browser.findElement(By.name(field)).sendKeys(value)
  )).then(() => this.browser.findElement(By.name('commit')).click())
});

Then('the waste composting balance is ${int}', async function (amount) {
  const response = await this.api.getCompostPile(this.compostPile)
  assert.equal(amount * 100, response.data.composting_cents)
});