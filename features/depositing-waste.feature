Feature: Depositing Waste

  In order to create fertilizer
  As a sponsor,
  I want to give cash to the compost pile


  Scenario: Guest Sponsor deposits waste one-time
    Given a Guest Sponsor is on the home page
    And a waste composting balance of $50
    When they submit the deposit waste capital widget with:
      | field               | value                     |
      | amount              | $10                       |
      | payment_information | valid                     |
      # We may not need this, as it could be in the
      # Guest Sponsor that's part of the test context
      | email               | guest-sponsor@example.com |
    Then the waste composting balance is $60
    And they receive a receipt with refund instructions

