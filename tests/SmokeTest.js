module.exports = {
    'Smoke Test Registration' : function(browser) {
      //Correct flow of the User Registration
       var homePage = browser.page.home();
       homePage.navigate();
       homePage.expect.element('@myAccountDropdown').to.be.present;
       homePage.register();

       var drop_ddl=Math.floor((Math.random() * 8) + 1);
       var createAccount = browser.page.registration();
       createAccount.expect.element('@signUpButton').to.be.present;
       createAccount.setValue('@firstNameInput', 'Ricardo')
                    .setValue('@lastNameInput', 'Pera')
                    .setValue('@phoneInput','16541354')
                    .setValue('@emailInput','rpera152'+drop_ddl+'@gmail.com')
                    .setValue('@passwordInput','456rty678');
      browser.windowMaximize();
                   createAccount.createAccount();
      var registerSuccessfully = browser.page.account();
      registerSuccessfully.expect.element('@welcomeMessage').to.be.visible;
    }, 
      
  };
