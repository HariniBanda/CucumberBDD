package PageObjectsWithCucumber;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPageObjects  {
    WebDriver driver;
    public CheckOutPageObjects(WebDriver driver)
    {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }
    @FindBy(className="checkout-as-guest-button")
    public WebElement checkoutAsGuestButton;
    public void setCheckoutAsGuest(){checkoutAsGuestButton.click();}

    @FindBy(className="new-address-next-step-button")
    public WebElement continueButtonOnBillingAddressPage;
    public void setContinueButtonOnBillingAddressPage()
    { continueButtonOnBillingAddressPage.click(); }

    @FindBy(className="shipping-method-next-step-button")
    public WebElement continueButtonOnShippingMethodPage;
    public  void setContinueButtonOnShippingMethodPage()
    { continueButtonOnShippingMethodPage.click(); }

    @FindBy(className="payment-method-next-step-button")
    public WebElement  continueButtonOnPaymentMethodPage;
    public void setContinueButtonOnPaymentMethodPage()
    { continueButtonOnPaymentMethodPage.click(); }

    @FindBy(className="payment-info-next-step-button")
    public WebElement continueButtonOnPaymentInformationPage;
    public void setContinueButtonOnPaymentInformationPage()
    { continueButtonOnPaymentInformationPage.click(); }

    @FindBy(className="confirm-order-next-step-button")
    public WebElement confirmButtonOnConfirmOrderPage;
    public void setConfirmButtonOnConfirmOrderPage()
    {confirmButtonOnConfirmOrderPage.click(); }

    @FindBy(xpath="//div[@class='title']/strong")
    public WebElement orderHasBeenSuccessfullyProcessed;
    public void setorderHasBeenSuccessfullyProcessed()
    {orderHasBeenSuccessfullyProcessed.getText(); }
}
