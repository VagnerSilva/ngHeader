import { NgHeaderPage } from './app.po';

describe('ng-header App', () => {
  let page: NgHeaderPage;

  beforeEach(() => {
    page = new NgHeaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
