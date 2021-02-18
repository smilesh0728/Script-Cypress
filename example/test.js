require('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
let driver = new webdriver.Builder()
  .forBrowser('chrome')
  //.usingServer('http://localhost:4444/wd/hub')
  .build();

driver.get('http://business.qa.fastcampus.co.kr');

var emailname = "jinhwan.choi@fastcampus.co.kr";
var pw = "test1234";

var email = driver.findElement(webdriver.By.name('email'));
var passward = driver.findElement(webdriver.By.name('password'));
var submitBtn = driver.findElement(webdriver.By.className('btn btn--md btn--wide'));

email.sendKeys(emailname);
passward.sendKeys(pw);

submitBtn.submit();
