import {Browser, Builder, By} from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner() {
    await driver.get("https://demo.evershop.io/"); // get for the url
    await driver.sleep(2000); // wait for 2 seconds
    await driver.manage().window().maximize(); // maximize the window
    await driver.sleep(2000); // wait for 2 seconds
    await driver.findElement(By.className("search__icon")).click(); // click the search icon
    await driver.sleep(2000); // wait for 2 seconds
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Stainless Steel Thermos"); // input the search keyword
    await driver.sleep(2000); // wait for 2 seconds
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER); // press enter to search
    await driver.sleep(2000); // wait for 2 seconds
    await driver.quit(); // quit the driver
}

testRunner();