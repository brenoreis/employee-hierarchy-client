import { browser, by, element } from 'protractor';

export class AppClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h3')).getText();
  }

  getProcessUrlText() {
    return element(by.css('h4')).element(by.css('a')).getText();
  }
}
