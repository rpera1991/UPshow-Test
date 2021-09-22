const homeCommands = {
  createAccount() {
    this.waitForElementVisible('@signUpButton', 1000)
      .click('@signUpButton')
      .api.pause(1000);

    return this; // Return page object for chaining
  }
};

module.exports = {
  commands: [homeCommands],
  elements: { 
    firstNameInput: {selector: 'input[name=first_name]'},
    lastNameInput: {selector: 'input[name=last_name]'},
    phoneInput: {selector: 'input[name=phone]'},
    emailInput: {selector: 'input[name=email]'},
    passwordInput: {selector: 'input[name=password]'},
    //rePasswordInput: {selector: 'input[name=confirmpassword]'},
    signUpButton: {selector: 'button[type=submit]'}
  }
};
