class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string;
  private dressMenu: string;

  constructor() {
    this.tShirtMenu = "li:nth-child(3) [title='T-shirts']";
    this.menuContentPageURL = "http://automationpractice.com/";
    this.dressMenu = "#block_top_menu > ul > li:nth-child(2) > a";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public goToDressesMenu(): void {
    cy.get(this.dressMenu).click();
  }
}

export { MenuContentPage };
