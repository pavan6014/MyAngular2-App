import { SrsPage } from './app.po';

describe('srs App', () => {
  let page: SrsPage;

  beforeEach(() => {
    page = new SrsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
