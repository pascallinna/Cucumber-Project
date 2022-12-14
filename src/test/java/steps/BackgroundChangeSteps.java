package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.AfterClass;
import page.TestPage;
import util.BrowserFactory;

public class BackgroundChangeSteps {

    WebDriver driver;
    TestPage domain;

    @Before
    public void before_run() {
        driver = BrowserFactory.init();
        domain = PageFactory.initElements(driver, TestPage.class);
    }

    @Given("^User is on the techfios page$")
    public void user_is_on_the_techFios_page() throws Throwable {
        driver.get("http://techfios.com/test/101/");
    }

    @When("^I click on the SetSkyBlueBackground button$")
    public void i_click_on_the_setskybluebackground_button() throws Throwable {
        domain.clickOnSetSkyBlueBackgroundButton();
    }

    @Then("^the background color will change to sky blue$")
    public void the_background_color_will_change_to_sky_blue() throws Throwable {
        domain.takeScreenshotAtEndOfSkyBlueBackgroundChange();
    }

    @When("^I click on the SetWhiteBackground button$")
    public void i_click_on_the_setwhitebackground_button() throws Throwable {
        domain.clickOnSetWhiteBackgroundButton();
    }

    @Then("^the background color will change to white$")
    public void the_background_color_will_change_to_white() throws Throwable {
        domain.takeScreenshotAtEndOfWhiteBackgroundChange();
    }

    @After
    public void tear_down() {
        driver.close();
        driver.quit();
    }


}
