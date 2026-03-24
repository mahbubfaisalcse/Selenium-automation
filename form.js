import {Browser, Builder, By, Key} from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();


async function form() {

    await driver.get("file:///j:/OSTAD/JAVA%20Script/SELENIUM/index-form.html");
    await driver.sleep(2000); 
    await driver.manage().window().maximize(); 
    await driver.sleep(2000); 
    await driver.findElement(By.xpath("//input[@id='fullName']")).sendKeys("Mahbubul Islam");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@id='email']")).sendKeys("mahbubfaisal.cse@gmail.com");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@id='street']")).sendKeys("40 feet road, Dhaka");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@id='city']")).sendKeys("Dhaka");
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//option[@value='Marketing']")).click(Marketing);
}
form();
