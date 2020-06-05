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

const fillInStripeCheckoutForm = function(browser, card) {
  return Promise.all([
    browser.findElement(By.name('number')).sendKeys(card.number),
    browser.findElement(By.name('cvc')).sendKeys(card.cvc),
    browser.findElement(By.name('expiration_date')).sendKeys(card.expiration_date),
  ])
}

const fillInDeposit = function(browser, deposit) {
  return Promise.all([
    browser.findElement(By.name('amount')).sendKeys(deposit.amount),
    browser.findElement(By.name('email')).sendKeys(deposit.email)
  ])
}

When('they submit the deposit waste capital widget with:', function (dataTable) {
  const deposit = dataTable.rowsHash();
  const card = cards[deposit.payment_information]
  return fillInDeposit(this.browser, deposit)
    .then(() => this.browser.findElement(By.name('sponsor')).click())
    .then(() => fillInStripeCheckoutForm(this.browser, card))
    .then(() => this.browser.findElement(By.name('buy')).click())
});

Then('the waste composting balance is ${int}', async function (amount) {
  const response = await this.api.getCompostPile(this.compostPile)
  assert.equal(amount * 100, response.composting_cents)
});