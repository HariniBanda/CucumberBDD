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
  "error_message": "org.openqa.selenium.WebDriverException: element click intercepted: Element \u003cspan class\u003d\"cart-label\"\u003e...\u003c/span\u003e is not clickable at point (920, 22). Other element would receive the click: \u003cp class\u003d\"content\"\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.71 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 17:00:58\u0027\nSystem info: host: \u0027185-129-71-84\u0027, ip: \u0027185.129.71.84\u0027, os.name: \u0027windows\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:3635}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Windows\\proxy\\scoped_dir1444_1631679673}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.61, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 3f0b5b0dc384f5f335b4fdf7423a6470\nCommand duration or timeout: 0 milliseconds\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat PageObjectsWithCucumber.HomePageObjects.setShoppingcart(HomePageObjects.java:36)\r\n\tat StepDefinitions.MyStepdefs.iClickShoppingCartOnTheHomepage(MyStepdefs.java:84)\r\n\tat ✽.I click shopping cart on the homepage(file:///C:/Users/kishore/IdeaProjects/CucumberBDD/src/test/resources/Features/ShoppingUsingCouponCode.feature:7)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat PageObjectsWithCucumber.HomePageObjects.setShoppingcart(HomePageObjects.java:36)\r\n\tat StepDefinitions.MyStepdefs.iClickShoppingCartOnTheHomepage(MyStepdefs.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: org.openqa.selenium.WebDriverException: element click intercepted: Element \u003cspan class\u003d\"cart-label\"\u003e...\u003c/span\u003e is not clickable at point (920, 22). Other element would receive the click: \u003cp class\u003d\"content\"\u003e...\u003c/p\u003e\n  (Session info: chrome\u003d83.0.4103.61)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.71 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 17:00:58\u0027\nSystem info: host: \u0027185-129-71-84\u0027, ip: \u0027185.129.71.84\u0027, os.name: \u0027windows\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:3635}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Windows\\proxy\\scoped_dir1444_1631679673}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.61, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 3f0b5b0dc384f5f335b4fdf7423a6470\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2MHROPJ\u0027, ip: \u0027192.168.1.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:335)\r\n\tat com.sun.proxy.$Proxy3.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:348)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.KnownElements$1.invoke(KnownElements.java:64)\r\n\tat com.sun.proxy.$Proxy4.click(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.handler.ClickElement.call(ClickElement.java:30)\r\n\tat org.openqa.selenium.remote.server.handler.ClickElement.call(ClickElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter a discount coupon code \"TUBE\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iEnterADiscountCouponCodeTUBE(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Apply coupon button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnApplyCouponButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I tick Agree with Terms and Conditions checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iTickAgreeWithTermsAndConditionsCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Checkout as guest button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnCheckoutAsGuestButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Billing address details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iEnterBillingAddressDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on continue button on Billing address page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnBillingAddressPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on continue button on Shipping method page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnShippingMethodPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on continue button on Payment method page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnPaymentMethodPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on continue button on Payment information page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOnPaymentInformationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on confirm button on Confirm order page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnConfirmButtonOnConfirmOrderPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that the order is successfully processed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.verifyThatTheOrderIsSuccessfullyProcessed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on continue button order completion page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.MyStepdefs.iClickOnContinueButtonOrderCompletionPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});