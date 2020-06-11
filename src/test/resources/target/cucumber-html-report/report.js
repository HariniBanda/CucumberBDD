$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/ShoppingUsingCouponCode.feature");
formatter.feature({
  "name": "End to End scenario to create an order with discount coupon code",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Coupon"
    }
  ]
});
formatter.scenario({
  "name": "Create an order with discount coupon code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Coupon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the nopsHomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iAmOnTheNopsHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iAddAProductToTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click shopping cart on the homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickShoppingCartOnTheHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a discount coupon code \"TUBE\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iEnterADiscountCouponCodeTUBE(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Apply coupon button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnApplyCouponButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tick Agree with Terms and Conditions checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iTickAgreeWithTermsAndConditionsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Checkout as guest button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnCheckoutAsGuestButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Billing address details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iEnterBillingAddressDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on continue button on Billing address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnBillingAddressPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on continue button on Shipping method page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnShippingMethodPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on continue button on Payment method page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnPaymentMethodPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on continue button on Payment information page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnPaymentInformationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on confirm button on Confirm order page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnConfirmButtonOnConfirmOrderPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that the order is successfully processed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.verifyThatTheOrderIsSuccessfullyProcessed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on continue button order completion page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOrderCompletionPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});