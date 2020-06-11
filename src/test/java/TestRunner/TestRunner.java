package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


   @RunWith(Cucumber.class)
    @CucumberOptions(
            features={"Features"},
            glue={"StepDefinitions"},
            plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report.json"},
            tags = {"@Coupon"}
    )
    public class TestRunner
    {

    }

 /*

   @CucumberOptions(features={"src\\test\\resources\\ShoppingUsingCouponCode.feature"},
           glue={"stepDefinitions"},
           plugin={"json:target/cucumber.json","html:target/site/cucumber-pretty"})
   @RunWith(Cucumber.class)
   public class TestRunner.TestRunner {
   }

*/