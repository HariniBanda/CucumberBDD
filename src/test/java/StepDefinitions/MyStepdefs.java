package StepDefinitions;

import PageObjectsWithCucumber.CheckOutPageObjects;
import PageObjectsWithCucumber.HomePageObjects;
import PageObjectsWithCucumber.ShoppingCartPageObejects;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.net.Urls;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class MyStepdefs {
    static WebDriver driver;
    static HomePageObjects homePage;
    static CheckOutPageObjects checkoutPage;
    static ShoppingCartPageObejects shoppingcartPage;
    public static final String USERNAME = "harinibanda1";
    public static final String AUTOMATE_KEY = "wqFfWXmEAi6nRAgLCyzq";
    public static final String url = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
    @Before
    public void start() throws MalformedURLException {

        WebDriverManager.chromedriver().setup();
        //WebDriverManager.firefoxdriver().setup();
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("browserName", "Chrome");
        //caps.setCapability("device", "iPhone 8 Plus");
        //caps.setCapability("realMobile", "true");
        //caps.setCapability("os_version", "Windows");
        caps.setCapability("name", "Bstack-[Java] Sample Test");

        //driver = new ChromeDriver();
        //driver = new FirefoxDriver();
        driver = new RemoteWebDriver(new URL(url), caps);
        driver.navigate().to("http://twentyconsulting-001-site1.dtempurl.com/");
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        homePage = new HomePageObjects(driver);
        checkoutPage = new CheckOutPageObjects(driver);
        shoppingcartPage = new ShoppingCartPageObejects(driver);;

    }

    @After
    public void stop(Scenario scenario){
        // if(scenario.isFailed()) {
        byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshotBytes, "image/png");
        // }
        // driver.quit();

    }
    @Given("I am on the nopsHomePage")
    public void iAmOnTheNopsHomePage() {

    }

    @And("I add a product to the cart")
    public void iAddAProductToTheCart() {
        homePage.addFirstItemToCart();

    }

    @And("I click shopping cart on the homepage")
    public void iClickShoppingCartOnTheHomepage()  {

        homePage.setShoppingcart();
    }

    @When("I enter a discount coupon code {string}")
    public void iEnterADiscountCouponCodeTUBE(String arg0) throws Throwable {
        shoppingcartPage.setEnterYourCoupon(arg0);
    }

    @And("I click on Apply coupon button")
    public void iClickOnApplyCouponButton() {
        shoppingcartPage.setApplyCouponButton();
    }

    @And("I tick Agree with Terms and Conditions checkbox")
    public void iTickAgreeWithTermsAndConditionsCheckbox() {
        shoppingcartPage.setiAgreeWithTermsAndSevice();
    }

    @And("I click on Checkout button")
    public void iClickOnCheckoutButton() {
        shoppingcartPage.setCheckoutButton();

    }

    @And("I click on Checkout as guest button")
    public void iClickOnCheckoutAsGuestButton() {
        checkoutPage.setCheckoutAsGuest();
    }

    @And("I enter Billing address details")
    public void iEnterBillingAddressDetails() {
        driver.findElement(By.id("BillingNewAddress_FirstName")).sendKeys("Harini");
        driver.findElement(By.id("BillingNewAddress_LastName")).sendKeys("Banda");
        driver.findElement(By.id("BillingNewAddress_Email")).sendKeys("harinibanda@gmail.com");
        Select city = new Select(driver.findElement(By.id("BillingNewAddress_CountryId")));
        city.selectByVisibleText("United Kingdom");
        driver.findElement(By.id("BillingNewAddress_City")).sendKeys("London");
        driver.findElement(By.id("BillingNewAddress_Address1")).sendKeys("london road");
        driver.findElement(By.id("BillingNewAddress_ZipPostalCode")).sendKeys("ln1201pe");
        driver.findElement(By.id("BillingNewAddress_PhoneNumber")).sendKeys("0123456789");

    }

    @And("I click on continue button on Billing address page")
    public void iClickOnContinueButtonOnBillingAddressPage() {
        checkoutPage.setContinueButtonOnBillingAddressPage();
    }

    @And("I click on continue button on Shipping method page")
    public void iClickOnContinueButtonOnShippingMethodPage() {
        checkoutPage.setContinueButtonOnShippingMethodPage();
    }

    @And("I click on continue button on Payment method page")
    public void iClickOnContinueButtonOnPaymentMethodPage() {
        checkoutPage.setContinueButtonOnPaymentMethodPage();
    }

    @And("I click on continue button on Payment information page")
    public void iClickOnContinueButtonOnPaymentInformationPage() {
        checkoutPage.setContinueButtonOnPaymentInformationPage();
    }

    @And("I click on confirm button on Confirm order page")
    public void iClickOnConfirmButtonOnConfirmOrderPage() {
        checkoutPage.setConfirmButtonOnConfirmOrderPage();
    }

    @Then("Verify that the order is successfully processed")
    public void verifyThatTheOrderIsSuccessfullyProcessed() {

    }

    @And("I click on continue button order completion page")
    public void iClickOnContinueButtonOrderCompletionPage() {
        checkoutPage.setorderHasBeenSuccessfullyProcessed();
    }
}
