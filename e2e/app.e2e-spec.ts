import { EmployeeHierarchyClientPage } from './app.po';

describe('employee-hierarchy-client App', () => {
  let page: EmployeeHierarchyClientPage;

  beforeEach(() => {
    page = new EmployeeHierarchyClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
