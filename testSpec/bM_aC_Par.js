var bankManger = require("../pageObjects/bankManagerModule.js")
var EC = protractor.ExpectedConditions;
var using= require('jasmine-data-provider');
var dataParam= require('../testData/BankPara.json');
describe('Reading Data From the json files & and Login to Banak Manager Account and Add Customer',function()
{ 
    
    using(dataParam.param,function(data,description)
    {
    it('Add Customer'+':'+description,async ()=>
    {
      bankManger.BankManagerLogin();
      bankManger.AddCustomer(data.fname,data.lname,data.pscard);
      browser.wait(EC.alertIsPresent(),10000);
      expect(browser.switchTo().alert().getText()).toContain("added");
     await browser.switchTo().alert().accept();
      

    })
    });
});
