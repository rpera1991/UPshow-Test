module.exports = {
    'Validate Screen' : function(browser) {
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
                    .setValue('@emailInput','rpera'+drop_ddl+'@gmail.com')
                    .setValue('@passwordInput','456rty678');
      browser.windowMaximize();
                   createAccount.createAccount();
      var registerSuccessfully = browser.page.account();
      registerSuccessfully.expect.element('@welcomeMessage').to.be.visible;
       
      //modificar mannana o ahorita porqe ya es mannana
      registerSuccessfully.click('//a[@href="https://www.phptravels.net/signup"]')

      var newCreateAccount = browser.page.registration();
      newCreateAccount.expect.element('@signUpButton').to.be.present;
      newCreateAccount.setValue('@firstNameInput', 'Ricky')
                    .setValue('@lastNameInput', 'Pera')
                    .setValue('@phoneInput','16541354')
                    .setValue('@emailInput','rpera'+drop_ddl+'@gmail.com')
                    .setValue('@passwordInput','456rty678');
      newCreateAccount.createAccount();
      var registerSuccessfully = browser.page.account();
      registerSuccessfully.expect.element('//div[contains(@class,"alert alert-danger")]').to.be.visible; ////div[contains(@class,"alert alert-danger")]//h3
      // .api.pause(2000);
      
      
      
      
      //browser
        //.windowMaximize()
        //.url('https://www.phptravels.net/')
        //.waitForElementVisible('body')
        //.assert.titleContains('PHPTRAVELS')
        //.assert.visible('button[type=submit]')
        //.setValue('input[type=search]', 'nightwatch')
        //.assert.visible('a[href="https://www.phptravels.net/signup"]')
        //.click('a[href="https://www.phptravels.net/signup"]')
        //.assert.visible('p[class=font-size-14]')
        //.assert.containsText('p[class=font-size-14]', 'Please enter all credentials to signup')
        //.end();
        
    }
  };
