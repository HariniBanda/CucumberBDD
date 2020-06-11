package PageObjectsWithCucumber;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartPageObejects  {
    WebDriver driver;
    public ShoppingCartPageObejects(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    @FindBy(id="discountcouponcode")
    public WebElement enterYourCoupon;
    public void setEnterYourCoupon(String couponCode){enterYourCoupon.sendKeys(couponCode);}

    @FindBy(id="applydiscountcouponcode")
    public WebElement applyCouponButton;
    public void setApplyCouponButton(){applyCouponButton.click();}

    @FindBy(id="termsofservice")
    public WebElement iAgreeWithTermsAndSevice;
    public void setiAgreeWithTermsAndSevice(){iAgreeWithTermsAndSevice.click();}

    @FindBy(id="checkout")
    public WebElement checkoutButton;
    public void setCheckoutButton(){checkoutButton.click();}


}
