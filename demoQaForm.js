import {Browser, Builder, By, Key, until} from "selenium-webdriver";


const driver = new Builder().forBrowser(Browser.CHROME).build();

const firstName = "Faisal";
const lastName = "Mahbub";
const email = "mahbubfaisal.cse@gmail.com"
const gender = "Male"
const mobileNumber = "01234887766"
const hobbies = "Sports"
const subject = "Computer"

//DOB
const month = "January";
const day = "15";
const year = "1993";

async function demoForm() {
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath("//h5[text()='Forms']")).click();
    await driver.findElement(By.xpath("//a[contains(@href,'practice-form')]")).click();

    await driver.findElement(By.id("firstName")).sendkeys(firstName);
    await driver.sleep(2000); 
    await driver.findElement(By.id("lastName")).sendkeys(lastName);
    await driver.findElement(By.id("userEmail")).sendkeys(email);
    await driver.findElement(By.xpath(`//label()='${gender}'`)).click();
    await driver.findElement(By.id("userNumber")).sendkeys(mobileNumber);
    await driver.findElement(By.id("dateOfBirthInput")).click();
    //DOB
    await driver.findElement(By.className("react-datepicker__month-select")).click();
    await driver.findElement(By.xpath(`//option[text()='${month}']`)).click();
    await driver.findElement(By.className("react-datepicker__year-select")).click();
    await driver.findElement(By.xpath(`//option[text()='${year}']`)).click();
    await driver.findElement(By.xpath(`//option[text()='${month}']`)).click();
    await driver.findElement(By.xpath(`//div[contains(@aria-label,'${month}') and text()='${day}']`)).click();

    await driver.findElement(By.id("subjectsInput")).sendkeys(subject);
    await driver.sleep(2000); 
    await driver.findElement(By.xpath(`//div[@role='option' and contains(text(),'${subject}')]`));
    await driver.findElement(By.xpath(`//label[text()='${hobbies}']/..//input[@id='hobbbies-checkbox-1']`)).click();
    await driver.quite();
}

// async function demoForm() {
//     await driver.get("https://demoqa.com/"); 
//     await driver.sleep(2000); 
//     await driver.manage().window().maximize(); 
//     await driver.sleep(2000); 
//     await driver.findElement(By.css("a[href='/forms']")).click();
//     await driver.sleep(2000); 
//     await driver.findElement(By.css("a[href='/automation-practice-form']")).click(); 
//     await driver.sleep(2000); 
//     await driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys("Mahbubul");
//     await driver.sleep(2000); 
//     await driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys("Islam");
//     await driver.sleep(2000); 
//     await driver.findElement(By.xpath("//input[@placeholder='name@example.com']")).sendKeys("mahbubul.islam@example.com");
//     await driver.sleep(2000); 
//     await driver.findElement(By.id("gender-radio-1")).click();
//     await driver.sleep(2000); 
//     await driver.findElement(By.xpath("//input[@placeholder='Mobile Number']")).sendKeys("0171234567");
//     await driver.sleep(2000);
// 
//     // Date of birth
//     await driver.findElement(By.id("dateOfBirthInput")).click();
//     await driver.findElement(By.className("react-datepicker__month-select")).sendKeys("May");
//     await driver.findElement(By.className("react-datepicker__year-select")).sendKeys("1990");
//     await driver.findElement(By.xpath("//div[contains(@class,'react-datepicker__day') and text()='15']")).click();
//     await driver.sleep(2000);
// 
//     let subject = await driver.findElement(By.id("subjectsInput"));
//     await subject.sendKeys("Computer Science");
//     await subject.sendKeys(Key.ENTER);
//     await subject.sendKeys(Key.TAB);   // move to next section
//     await driver.sleep(2000);
// 
//     await driver.findElement(By.xpath("//input[@id='hobbies-checkbox-1']")).click();
//     //await subject.sendKeys(Key.TAB);   // move to next section
//     
//     await driver.sleep(2000); 
// 
//     let upload = await driver.findElement(By.id("uploadPicture"));
//     await driver.executeScript("arguments[0].style.display='block';", upload);
//     await upload.sendKeys("J:\\OSTAD\\JAVA Script\\pic.jpg");
// 
//     let address = await driver.findElement(By.xpath("//textarea[@class='form-control' and @id='currentAddress']"));
//     await address.click(); 
//     await address.sendKeys("123 Main Street, City, Country");
//     await driver.sleep(2000);
// 
//    // STATE
//     let state = await driver.findElement(By.id("state"));
//     await driver.executeScript("arguments[0].scrollIntoView(true);", state);
//     await state.click();
//     await driver.wait(until.elementLocated(By.xpath("//div[text()='NCR']")), 5000).click();
// 
//     // CITY
//     let city = await driver.findElement(By.id("city"));
//     await city.click();
//     await driver.wait(until.elementLocated(By.xpath("//div[text()='Delhi']")), 5000).click();
//     
// 
//     // await driver.findElement(By.id("submit")).click();
//     // await driver.sleep(2000); 
//     await driver.findElement(By.xpath("//button[text()='Submit']")).click();
//     await driver.sleep(2000); 
// 
//     const closeBtn = await driver.wait(until.elementLocated(By.id("closeLargeModal")), 5000);
//     await driver.executeScript("arguments[0].scrollIntoView(true); arguments[0].click();", closeBtn);
//     
//     await driver.sleep(2000); 
//     await driver.quit();
// }

demoForm();
