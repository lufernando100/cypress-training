class ProductsListPage {
  private productList: string;
  private proceedToCheckoutButton: string;

  constructor() {
    this.productList =
      "a[title='Add to cart']";
      this.proceedToCheckoutButton =".button-container a[title='Proceed to checkout']"
  }
  selectProductList(): void {
    cy.get(this.productList).click();
  }
  goToShopping(): void{
    cy.get(this.proceedToCheckoutButton).click();
  }
}
 
export{ProductsListPage}

