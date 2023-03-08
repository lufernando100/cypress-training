class ShoppingCartPage {

  private shoppingCartButton: string;

  constructor() {
 
    this.shoppingCartButton = '.shopping_cart_link';
  }
  public selectShoppingCart():void {
  cy.get(this.shoppingCartButton).click();
  }
}
export { ShoppingCartPage };
