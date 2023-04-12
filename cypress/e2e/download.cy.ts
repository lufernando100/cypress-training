import { DownloadPage } from "../page/index";

const downloadPage = new DownloadPage();

before(() => {
  downloadPage.goToPageToDownload();
});

describe("Upload test", () => {
  it("should upload a file", () => {
    downloadPage.downloadFile();
  });
});
