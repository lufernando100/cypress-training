class CheckoutCompletePage {
  private finishButton: string;

  constructor() {
    this.finishButton = "#finish";
  }

  finishShopping() {
    cy.get(this.finishButton).click();
  }
}

export { CheckoutCompletePage };
