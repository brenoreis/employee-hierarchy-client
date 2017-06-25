import { AppClientPage } from './app.po';

describe('employee-hierarchy-client App', () => {
  let page: AppClientPage;

  beforeEach(() => {
    page = new AppClientPage();
  });

  it('should display app header message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Employee Hierarchy App');
  });

  it('should display process url', () => {
    page.navigateTo();
    expect(page.getProcessUrlText()).toEqual('Process Employees Hierarchy');
  });

});
