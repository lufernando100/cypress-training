class ProductsListPage {
  private productList: string;

  constructor() {
    this.productList = "#inventory_container";
  }
  public goToTShirtMenu(productName:string): void {
    this.findProductByName(productName);
  }
  
  public findProductByName(productListName: string) {
    return cy.get(this.productList).filter(`:contains(${productListName})`)
  }
 
}
export { ProductsListPage };
