import { BenitoitePage } from './app.po';

describe('benitoite App', () => {
  let page: BenitoitePage;

  beforeEach(() => {
    page = new BenitoitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
