module.exports = {
    'Registrer - Unique Email' : function(browser) {
        //Email should be unique for a register
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
                    .setValue('@emailInput','testemail53'+drop_ddl+'@gmail.com')
                    .setValue('@passwordInput','456rty678');
        browser.windowMaximize();
        createAccount.createAccount();

        var registerSuccessfully = browser.page.account();

        //registerSuccessfully.expect.element('@welcomeMessage').to.be.visible;
        registerSuccessfully.click('xpath','//a[@href="https://www.phptravels.net/signup"]');
  
        var newCreateAccount = browser.page.registration();
        newCreateAccount.expect.element('@signUpButton').to.be.present;
        newCreateAccount.setValue('@firstNameInput', 'Ricky')
                        .setValue('@lastNameInput', 'Pera')
                        .setValue('@phoneInput','16541354')
                        .setValue('@emailInput','testemail53'+drop_ddl+'@gmail.com')
                        .setValue('@passwordInput','456rty678');
        newCreateAccount.createAccount();
        var RegSuccessfully = browser.page.account();
        RegSuccessfully.expect.element('@errorMessage').to.be.visible
        // .api.pause(2000);
        }
        
    };
  