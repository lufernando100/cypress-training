class ItemPage {
  private itemName: string;

  constructor() {
    this.itemName = "#add-to-cart-sauce-labs-bolt-t-shirt"
  }
  public selectItem(): void {
    cy.get(this.itemName).click();
  }
}
export { ItemPage };
