import { IframePage } from "../page/index";

const iframePage = new IframePage();

before(() => {
  iframePage.visit();
});

describe("Iframe test", () => {
  it("should veirfy the title", () => {
    iframePage.goFrameName();
    iframePage.getIframeTitle("HTML Tutorial")
  });
});
