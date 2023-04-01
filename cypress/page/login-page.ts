class LoginPage {
    private loginURL: string;
    private loginUrlForm: string;
    private userNameField: string;
    private passwordField: string;
    private loginButton: string;
  
    constructor() {
      this.loginURL = "https://www.saucedemo.com/";
      this.loginUrlForm = "https://demoqa.com/automation-practice-form";
      this.userNameField = "#user-name";
      this.passwordField = "#password";
      this.loginButton = "#login-button";
    }
  
    public visitLoginPage(): void {
      cy.visit(this.loginURL);
    }

    public visitLoginPageForm(): void{
      cy.visit(this.loginUrlForm);

    }
  
    public signIn(): void {
      cy.get(this.userNameField).type("standard_user");
      cy.get(this.passwordField).type("secret_sauce");
      cy.get(this.loginButton).click();
    }
  }
  
  export { LoginPage };
