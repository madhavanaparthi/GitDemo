var bankManger = require("../pageObjects/bankManagerModule.js")
var EC = protractor.ExpectedConditions;
var BMData= require('../testData/bm_data.json');

describe('Login to Banak Manager Account and Add Customer',function()
{ 
    
    it('Add Customer',async ()=>
    {
      bankManger.BankManagerLogin();
      bankManger.AddCustomer(BMData.addcustomer.fname,BMData.addcustomer.lname,BMData.addcustomer.pscard);
      browser.wait(EC.alertIsPresent(),10000);
      expect(browser.switchTo().alert().getText()).toContain("added");
     await browser.switchTo().alert().accept();
      

    })

});

