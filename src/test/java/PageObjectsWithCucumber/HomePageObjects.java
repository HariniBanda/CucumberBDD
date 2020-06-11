package PageObjectsWithCucumber;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePageObjects {

    WebDriver driver;
    public HomePageObjects(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    /*className="product-box-add-to-cart-button   "
    @FindBy(className = "product-box-add-to-cart-button")
   public List<WebElement> ListOfItems;
    public void addToCart(){ListOfItems.get(ListOfItems.size()-1).click();}

    @FindBy(xpath="//input[@value='Add to cart']")
    public WebElement addToCart;
    public void setAddtoCart(){addToCart.click();}*/
    //@FindBy(how = How.XPATH, using = "//input[@value='Add to cart']")
    //WebElement addtoCartButton;
    @FindBy(how = How.XPATH, using = "(//input[@class='button-2 product-box-add-to-cart-button'])[1]")
    public  WebElement firstItemHmPage;

    public void addFirstItemToCart(){
        firstItemHmPage.click();}

        @FindBy(how = How.CLASS_NAME,using = "cart-label")
    public WebElement shoppingCart;
    public void setShoppingcart(){shoppingCart.click();}





}
