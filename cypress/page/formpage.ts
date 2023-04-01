import { personalData } from "../e2e/fillForm.cy";

class FormPage {
  private nameField: string;
  private lastNameField: string;
  private emailField: string;
  private genderRadio: string;
  private mobileField: string;
  private birthDate: string;
  private subjectsField: string;
  private hobbiesField: string;
  private pictureFile: string;
  private currentAddressField: string;
  private stateList: string;
  private cityList: string;
  private submmitButton: string;
  private stateSelectDrop: string;
  private citySelectDrop: string;
  private tableDataList: string;

  constructor() {
    this.nameField = "#firstName";
    this.lastNameField = "#lastName";
    this.emailField = "#userEmail";
    this.genderRadio = "label.custom-control-label";
    this.mobileField = "#userNumber";
    this.birthDate = "#dateOfBirthInput";
    this.subjectsField = "#subjectsContainer";
    this.hobbiesField = "label.custom-control-label";
    this.pictureFile = "#inventory_container";
    this.currentAddressField = "#currentAddress";
    this.stateList = "div[id*=react-select-3]";
    this.stateSelectDrop = "#state";
    this.citySelectDrop = "#city";
    this.cityList = "div[id*=react-select-4]";
    this.submmitButton = "#submit";
    this.tableDataList = "div.modal-body tbody>tr>td";
  }

  public fillForm(data: typeof personalData): void {
    cy.get(this.nameField).type(data.name);
    cy.get(this.lastNameField).type(data.lastName);
    cy.get(this.emailField).type(data.email);
    cy.get(this.genderRadio).contains(data.gender).click();
    cy.get(this.mobileField).type(data.mobileNumber);
    cy.get(this.subjectsField).type(`${data.subjects}{enter}`);
    cy.get(this.hobbiesField).contains(data.hobbies[1]).click();
    cy.get(this.currentAddressField).type(data.currentAddress);
    cy.get(this.stateSelectDrop).click();
    cy.get(this.stateList).contains(data.state).click();
    cy.get(this.citySelectDrop).click();
    cy.get(this.cityList).contains(data.city).click();
    cy.get(this.submmitButton).click();
  }

  public validateModal(data: typeof personalData): void {
    this.getValueModal(data.studentNameLabel, `${data.name} ${data.lastName}`);
    this.getValueModal(data.genderLabel, data.gender);
    this.getValueModal(data.studentEmailLabel, data.email);
    this.getValueModal(data.mobileLabel, data.mobileNumber);
    this.getValueModal(data.subjectsLabel, data.subjects);
    this.getValueModal(data.hobbiesLabel, data.hobbies[1]);
    this.getValueModal(data.addressLabel, data.currentAddress);
    this.getValueModal(data.stateAndCityLabel, `${data.state} ${data.city}`);
  }
  private getValueModal(label: string, text: string): void {
    cy.get(this.tableDataList).contains(label).next().should("have.text", text);
  }
}
export { FormPage };
