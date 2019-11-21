

var BankManager = function()
{
    this.BankManagerLogin = function()
    {
    element(by.buttonText("Bank Manager Login")).click()
    }
    this.AddCustomer = async function(fname,lname,postcard)
    {
       await element(by.buttonText("Add Customer")).click();
       await element(by.model("fName")).sendKeys(fname)
       await element(by.model("lName")).sendKeys(lname)
       await element(by.model("postCd")).sendKeys(postcard)
       await element(by.css("button[type='submit']")).click();

    }

}

module.exports= new BankManager();