var bankManger = require("../pageObjects/bankManagerModule.js")
var EC = protractor.ExpectedConditions;

describe('Login to Banak Manager Account and Add Customer',function()
{ 
    for(var i=0;i<2;i++)
    {
    it('Add Customer',async ()=>
    {
      bankManger.BankManagerLogin();
      bankManger.AddCustomer("madhava","reddy","560071");
      browser.wait(EC.alertIsPresent(),10000);
      expect(browser.switchTo().alert().getText()).toContain("added");
     await browser.switchTo().alert().accept();
      

    })
}
});

