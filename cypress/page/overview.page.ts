class OverviewPage {
    
    private continueButton: string;

    constructor() {
        this.continueButton = "#continue"
    }

    goToOverview(): void{
        cy.get(this.continueButton).click();
    }
}
 export{OverviewPage}
