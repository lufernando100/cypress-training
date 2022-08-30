class ShippingStepPage {
  private agreeTermsCheckbox: string;
  private proceedCheckoutButton: string;

  constructor() {
    this.agreeTermsCheckbox = "#cgv";
    this.proceedCheckoutButton = ".cart_navigation > .button";
  }

  goToPayment(): void {
    cy.get(this.agreeTermsCheckbox).check();
    cy.get(this.proceedCheckoutButton).click();
  }
}

export { ShippingStepPage };
