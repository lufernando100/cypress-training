class DownloadPage {
  private downloadButton: string;

  constructor() {
    this.downloadButton = "#downloadButton";
  }

  public goToPageToDownload(): void {
    cy.visit("https://demoqa.com/upload-download");
  }

  public downloadFile(): void {
    cy.get(this.downloadButton).click();
  }
}
export { DownloadPage };
