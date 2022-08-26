class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
    this.menuContentPageURL = "http://automationpractice.com/";
    cy.pause
  }
  
  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToShirtMenu(): void{
    cy.get(this.tShirtMenu).click();
  }
}

export {MenuContentPage}
