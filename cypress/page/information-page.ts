class InformationPage {
  private checkoutButton: string;
  private firstNameField: string;
  private lastNameField: string;
  private postalCode: string;

  constructor() {
    this.checkoutButton = "#checkout";
    this.firstNameField = "#first-name";
    this.lastNameField = "#last-name";
    this.postalCode ="#postal-code";
  }
  goToCheckout(): void {
    cy.get(this.checkoutButton).click();
  }

  fillForm(): void {
    cy.get(this.firstNameField).type("Cypress");
    cy.get(this.lastNameField).type("Workshop");
    cy.get(this.postalCode).type("00000");
  }
}

export { InformationPage };
