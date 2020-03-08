Feature: Giving a Shit

  Giving a shit is how we start to turn cash into fertilizer.
  At present, we're going to start with one-time shit-giving.
  I would love to add support for giving a shit

  Scenario: Guest gives a one-time shit
    Given a guest is on the home page
    When they submit the give a shit widget for $10 with valid payment information
    Then they receive a receipt with refund instructions
    And the shit composting increases by $10
