@unreleased
Feature: Depositing Waste

  In order to create fertilizer
  As a sponsor,
  I want to give cash to the compost pile


  Scenario: Guest Sponsor deposits waste one-time
    Given a Guest Sponsor is on the home page
    And a waste composting balance of $50
    When they submit the deposit waste capital widget with:
      | amount              | $10                       |
      | payment_information | valid                     |
    Then the waste composting balance is $60
    And they receive an email receipt with refund instructions

