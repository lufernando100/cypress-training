class MenuContentPage {
  menuContentPageURL: string;

  constructor() {
    this.menuContentPageURL = "https://www.saucedemo.com/";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
    cy.get("input[id='user-name']").type("standard_user"); //(2)
    cy.get("input[id='password']").type("secret_sauce"); //(2)
    cy.get("input[type='submit']").click();
  }

  public goToTShirtMenu(): void {
    cy.get("#item_1_title_link > .inventory_item_name").click();
  
  }

  public goToAddShoppingCart(): void {
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_link').click();

  }

  public goToFinishShopping(): void {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Cypress");
    cy.get('[data-test="lastName"]').type("Workshop");
    cy.get('[data-test="postalCode"]').type("00000");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should("have.text", "Thank you for your order!");
  }


}

export { MenuContentPage };
