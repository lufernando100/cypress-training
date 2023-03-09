class ProductsListPage {
  private productList: string;

  constructor() {
    this.productList = "#item_1_title_link > .inventory_item_name";
  }
  public goToTShirtMenu(): void {
    cy.get(this.productList).click();
  }
}
export { ProductsListPage };
