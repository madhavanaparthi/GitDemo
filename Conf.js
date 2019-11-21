var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config=
{
directConnect:true,
capabilities: {
    browserName: 'chrome'
  },
specs:["./testSpec/*.js"],
onPrepare:function()
{
browser.driver.manage().window().maximize();
browser.manage().timeouts().implicitlyWait(30000);
jasmine.getEnv().addReporter(
    new Jasmine2HtmlReporter({
      savePath: 'Reports/screenshots15'
    }))
beforeEach(function()
{
    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
})
}
}