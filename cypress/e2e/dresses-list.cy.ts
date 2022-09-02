import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let dressNumber: number;
  let dressName: Array<string>;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    menuContentPage.visitMenuContentPage();
    dressName = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
    dressNumber = dressName.length;
  });

  it("show the available dresses", () => {
    menuContentPage.goToDressesMenu();
    dressesListPage.validateItemsNames(dressName);
    dressesListPage.validateItemsNumber(dressNumber);
  });
});
