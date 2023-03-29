import { FormPage } from "../page/index";
import { LoginPage } from "../page/index";
import { Information } from "../e2e/interfaces/information";

const loginPageForm = new LoginPage();
const formPage = new FormPage();
export const personalData: Information = {
  name: "Holmes",
  lastName: "Salazar",
  email: "test@email.com",
  gender: "Male",
  mobileNumber: "3656589156",
  subjects: "Computer Science",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
  state: "Uttar Pradesh",
  city: "Agra",
  successfulMessage: "Thanks for submitting the form",
  studentNameLabel: "Student Name",
  studentEmailLabel: "Student Email",
  genderLabel: "Gender",
  mobileLabel: "Mobile",
  subjectsLabel: "Subjects",
  hobbiesLabel: "Hobbies",
  addressLabel: "Address",
  stateAndCityLabel: "State and City",
};

//arrange
before(() => {
  loginPageForm.visitLoginPageForm();
  cy.viewport(1538, 1286);
});

describe("Test to fill forms", () => {
  it("submit a form", () => {
    formPage.fillForm(personalData);
    formPage.validateModal(personalData);
  });
});
