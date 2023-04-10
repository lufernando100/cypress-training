class UploadPage {

  private uploadField: string;

  constructor() {
    this.uploadField = "#file-upload";
  }
  public goToPage(): void {
    cy.visit("https://the-internet.herokuapp.com/upload");
  }

  public goToPageToDownload(): void {
    cy.visit("https://demoqa.com/upload-download");
  }

  public uploadFile(fileName: string): void {
    cy.get(this.uploadField).attachFile(fileName)
  }
}
export { UploadPage };
