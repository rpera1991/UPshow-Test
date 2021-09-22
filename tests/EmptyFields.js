module.exports = {
    'Empty Fields' : function(browser) {
      //Empty Fields - User Registration
       var homePage = browser.page.home();
       homePage.navigate();
       homePage.expect.element('@myAccountDropdown').to.be.present;
       homePage.register();

      browser.windowMaximize();
                   createAccount.createAccount();
      var registerSuccessfully = browser.page.account();
      registerSuccessfully.expect.element('@welcomeMessage').to.be.visible;
    }, 
      
  };
