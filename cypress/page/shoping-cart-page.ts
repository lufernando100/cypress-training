class ShoppingCartPage {
  private checkoutButton: string;
  private useraname: string;
  private password: string;
  private signInButton: string;

  constructor() {
    this.checkoutButton = ".cart_navigation > .button > span";
    this.useraname = "#email";
    this.password = "#passwd";
    this.signInButton = "#SubmitLogin > span";
  }

  proceedCheckout(): void {
    cy.get(this.checkoutButton).click();
  }
  signInApplication(): void {
    cy.get(this.useraname).type("aperdomobo@gmail.com");
    cy.get(this.password).type("WorkshopProtractor");
    cy.get(this.signInButton).click();
  }
}
export { ShoppingCartPage };
