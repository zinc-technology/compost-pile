const { Given, When, Then } = require('cucumber')
const { By } = require('selenium-webdriver');

const assert = require('assert')
Given('a waste composting balance of ${int}', async function (dollars) {
  this.compostPile = await this.api.createCompostPile({ compostingCents: dollars * 100 })
});

const cards = {
  valid: {
    number: "4242 4242 4242 4242",
    cvc: "123",
    expiration_date: "4242"
  }
}

When('they submit the deposit waste capital widget with:', function (dataTable) {
  const deposit = dataTable.rowsHash();
  const card = cards[deposit.payment_information]
  return this.browser.submitDeposit(deposit)
    .then(this.browser.submitStripeCheckoutForm(card))

});

Then('the waste composting balance is ${int}', async function (amount) {
  const response = await this.api.getCompostPile(this.compostPile)
  assert.equal(amount * 100, response.composting_cents)
});