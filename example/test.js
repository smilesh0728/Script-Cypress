require('chromedriver');
//const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const driver = new Builder().forBrowser('chrome').build();
// let driver = new webdriver.Builder()

//   .forBrowser('chrome')
//   //.usingServer('http://localhost:4444/wd/hub')
//   .build();

driver.get('http://business.qa.fastcampus.co.kr');

var usr = "jinhwan.choi@fastcampus.co.kr";
var pw = "test1234";

//EmailUser
//driver.findElement(webdriver.By.name('email')).sendKeys(usr);
driver.findElement(By.name('email')).sendKeys(usr);

//Password 
//driver.findElement(webdriver.By.name('password')).sendKeys(pw, webdriver.Key.ENTER);
driver.findElement(By.name('password')).sendKeys(pw, Key.ENTER);

//const {Builder, By, Key, until} = require('selenium-webdriver');를 추가한 후 click 동작함.
//driver.findElement(By.xpath("//span[contains(@class,'primary-post__more')]")).click();

driver.sleep(20000);
//driver.quit();
