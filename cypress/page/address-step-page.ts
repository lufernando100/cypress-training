class AddressStepPage {
    
    private proceedToCheckoutButton: string;

    constructor() {
        this.proceedToCheckoutButton = "button[name='processAddress']"
    }

    goToShippingCart(): void{
        cy.get(this.proceedToCheckoutButton).click();
    }
}
 export{AddressStepPage}
