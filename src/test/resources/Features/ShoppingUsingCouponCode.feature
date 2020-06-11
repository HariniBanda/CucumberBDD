@Coupon
Feature: End to End scenario to create an order with discount coupon code

  Scenario: Create an order with discount coupon code
    Given  I am on the nopsHomePage
    And  I add a product to the cart
    And I click shopping cart on the homepage
    When  I enter a discount coupon code "TUBE"
    And  I click on Apply coupon button
    And  I tick Agree with Terms and Conditions checkbox
    And  I click on Checkout button
    And I click on Checkout as guest button
    And  I enter Billing address details
    And  I click on continue button on Billing address page
    And  I click on continue button on Shipping method page
    And  I click on continue button on Payment method page
    And  I click on continue button on Payment information page
    And  I click on confirm button on Confirm order page
    Then Verify that the order is successfully processed
    And  I click on continue button order completion page

