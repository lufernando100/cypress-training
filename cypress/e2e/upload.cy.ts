import { UploadPage } from "../page/index";

const uploadPage = new UploadPage();

before(() => {
  uploadPage.goToPage();
});

describe("Upload test", () => {
  it("should upload a file", () => {
    uploadPage.uploadFile("testUpload.json");
  });
});
