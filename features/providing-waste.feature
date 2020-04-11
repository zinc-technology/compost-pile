Feature: Providing Waste

  In order to create fertilizer
  As a sponsor,
  I want to give cash to the compost pile


  Scenario: Guest Sponsor gives waste one-time
    Given a Guest Sponsor is on the home page
    When they submit the give waste capital widget for $10 with valid payment information
    Then they receive a receipt with refund instructions
    And the waste composting increases by $10
