const homeCommands = {
  register() {
    this.waitForElementVisible('@myAccountDropdown', 1000)
        .click('@myAccountDropdown')
        .waitForElementVisible('@signUpLink', 1000)
        .click('@signUpLink')
        .api.pause(1000);

    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'https://www.phptravels.net/',
  commands: [homeCommands],
  elements: {
    myAccountDropdown: {
      selector: '//a[@class="down-button waves-effect"]',
      locateStrategy: 'xpath',
      index: 0},
    signUpLink: {
      selector: '//a[@href="https://www.phptravels.net/signup"]',  //a[text()="SignUp"]
      locateStrategy: 'xpath',
      index: 0
    }
  }
};
