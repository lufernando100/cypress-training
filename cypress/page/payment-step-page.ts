class PaymentStepPage {
  private payByBankButton: string;
  private confirmOrderButton: string;
  private confirmationMessage: string;

  constructor() {
    this.payByBankButton = ".bankwire > span";
    this.confirmOrderButton = "#cart_navigation > .button > span";
    this.confirmationMessage = ".cheque-indent > .dark";
  }

 public  goToPayProduct(): void {
    cy.get(this.payByBankButton).click();
    cy.get(this.confirmOrderButton).click();
  }

  public getConfirmationMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.confirmationMessage);
  }
}

export { PaymentStepPage };
