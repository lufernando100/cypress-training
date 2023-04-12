class IframePage {
  private iframeTitle: string;
  private iframeName: string;

  constructor() {
    this.iframeTitle = "#main > h1";
    this.iframeName ="iframe[src='default.asp']";
  }
  public visit(): void {
    cy.visit("https://www.w3schools.com/html/html_iframe.asp");
  }

  goFrameName(): Cypress.Chainable {
    return cy.frameLoaded(this.iframeName)
      .iframe(this.iframeName);
  }

  getIframeTitle(title: string): void {
    this.goFrameName().find(this.iframeTitle).should("have.text",title)
  }
}
export { IframePage };
