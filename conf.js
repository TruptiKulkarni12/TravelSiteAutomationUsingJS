exports.config = {
		
    // Capabilities to be passed to the webdriver instance.
  
multiCapabilities: [{
  browserName: 'chrome'
},
],
  
  framework: 'jasmine2',
  

//	seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: ['./specs/SearchResultPage.js'],
 
  // Options to be passed to Jasmine.
    jasmineNodeOpts: {
    defaultTimeoutInterval: 300000,
    
    
    },

onPrepare: function () {

 // browser.waitForAngularEnabled(false);
  //
  browser.waitForAngularEnabled(false);
  browser.ignoreSynchronization=true;
  // Override the timeout for webdriver.
  browser.driver.manage().timeouts().implicitlyWait(10000);
  // Default window size
	browser.driver.manage().window().maximize();
	// Default implicit wait
	browser.manage().timeouts().implicitlyWait(60000);

  var AllureReporter = require('jasmine-allure-reporter');
  jasmine.getEnv().addReporter(new AllureReporter({
    allureReport: {
      resultsDir: 'allure-results'
    }
  }));
  jasmine.getEnv().afterEach(function (done) {
    browser.takeScreenshot().then(function (png) {
      allure.createAttachment('Screenshot', function () {
        return new Buffer(png, 'base64')
      }, 'image/png')();
      done();
    })
  });

}
}