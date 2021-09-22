module.exports = {
    'Empty Fields' : function(browser) {
      //Empty Fields - User Registration
       var homePage = browser.page.home();
       homePage.navigate();
       homePage.expect.element('@myAccountDropdown').to.be.present;
       homePage.register();
       
       var createAccount = browser.page.registration();
       browser.windowMaximize();
       createAccount.createAccount();
       createAccount.expect.element('@firstNameInput').to.be.visible;
       createAccount.expect.element('@lastNameInput').to.be.visible;
       createAccount.expect.element('@phoneInput').to.be.visible;
       createAccount.expect.element('@emailInput').to.be.visible;
       createAccount.expect.element('@passwordInput').to.be.visible;
    
    }, 
      
  };
