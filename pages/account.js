module.exports = {
  commands: [],
  elements: {
    welcomeMessage: {
      selector: '//div[contains(@class,"container")]//h3',
      locateStrategy: 'xpath',
      index: 0
    },
    errorMessage: {
      selector: '//div[@class="message"]',
      locateStrategy: 'xpath',
      index: 0}
  }
};
