import { BookingManagementSystemPage } from './app.po';

describe('booking-management-system App', () => {
  let page: BookingManagementSystemPage;

  beforeEach(() => {
    page = new BookingManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
