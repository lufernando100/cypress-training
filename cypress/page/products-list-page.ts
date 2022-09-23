class ProductsListPage {
  private productList: string;
  private proceedToCheckoutButton: string;
  private productos: string;

  constructor() {
    this.productList = "a[title='Add to cart']";
    this.proceedToCheckoutButton =
      ".button-container a[title='Proceed to checkout']";
    this.productos = ".container";
  }
  selectProductList(productName: string): void {
    this.findProductByName(productName).find(this.productList).click();
  }
  goToShopping(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }

  private findProductByName(
    name: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productos).filter(`:contains("${name}")`);
  }
}

export { ProductsListPage };
