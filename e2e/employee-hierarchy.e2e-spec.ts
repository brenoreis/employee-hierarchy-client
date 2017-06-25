import { EmployeeHierarchyClientPage } from './employee-hierarchy.po';

describe('employee-hierarchy-client App', () => {
  let page: EmployeeHierarchyClientPage;

  beforeEach(() => {
    page = new EmployeeHierarchyClientPage();
  });

  it('should display input textarea', () => {
    page.navigateTo();
    expect(page.getInputText()).toEqual('Enter input payload');
    expect(page.getInputTextArea()).toBeTruthy();
  });

  it('should display validation error when submitting empty payload', () => {
    page.navigateTo();
    page.getSubmitButton().click();
    expect(page.getAlertText()).toEqual('Input payload cannot be empty');
  });

  it('should display success results when submitting valid payload', () => {
    const payload = 'Alan;100;150\n' +
      'Martin;220;100\n' +
      'Jamie;150;\n' +
      'Alex;275;100\n' +
      'Steve;400;150\n' +
      'David;190;400\n';
    page.navigateTo();
    page.getInputTextArea().sendKeys(payload);
    page.getSubmitButton().click();
    expect(page.getResultList()).toBeTruthy();
  });

  it('should display error results when submitting invalid payload', () => {
    const payload = 'Alan;100;aaa\n' +
      'Martin;220;100\n' +
      'Jamie;150;\n' +
      'Alex;275;100\n' +
      'Steve;400;150\n' +
      'David;190;400\n';
    page.navigateTo();
    page.getInputTextArea().sendKeys(payload);
    page.getSubmitButton().click();
    expect(page.getErrorResult().isDisplayed()).toBeTruthy();
  });


});
