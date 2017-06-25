import { browser, by, element } from 'protractor';

export class EmployeeHierarchyClientPage {
  navigateTo() {
    return browser.get('/process-employee-hierarchy');
  }

  getInputText() {
    return element(by.id('input')).element(by.css('.panel-heading')).element(by.css('h4')).getText();
  }

  getInputTextArea() {
    return element(by.id('payload'));
  }

  getSubmitButton() {
    return element(by.css('.btn'))
  }

  getAlertText() {
    return element(by.css('.alert')).getText();
  }

  getResultList() {
    return element(by.id('result-list'))
  }

  getErrorResult() {
    return element(by.id('error'))
  }
}
