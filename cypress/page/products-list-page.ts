class ProductsListPage {
  private productList: string;
  private proceedToCheckoutButton: string;

  constructor() {
    this.productList =
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
      this.proceedToCheckoutButton =".button-container > .button-medium > span"
  }
  selectProductList(): void {
    cy.get(this.productList).click();
  }
  goToShopping(): void{
    cy.get(this.proceedToCheckoutButton).click();
  }
}
 
export{ProductsListPage}

