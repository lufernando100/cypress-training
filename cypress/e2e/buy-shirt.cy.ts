import {
  CheckoutCompletePage,
  InformationPage,
  OverviewPage,
  ProductsListPage,
  ShoppingCartPage,
} from "../page/index";
import { LoginPage } from "../page/index";
import { ItemPage } from "../page/index";

const loginPage = new LoginPage();
const checkoutCompletePage = new CheckoutCompletePage();
const shoppingCartPage = new ShoppingCartPage();
const productsListPage = new ProductsListPage();
const itemPage = new ItemPage();
const informationPage = new InformationPage();
const overviewPage = new OverviewPage();
//Arrange
before(() => {
  loginPage.visitLoginPage();
  loginPage.signIn();
});

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    //Action
    productsListPage.goToTShirtMenu("Sauce Labs Bolt T-Shirt");
    itemPage.selectItem();
    shoppingCartPage.selectShoppingCart();
    informationPage.goToCheckout();
    informationPage.fillForm();
    overviewPage.goToOverview();
    //Assertion
    cy.get(".summary_subtotal_label").should("contain.text", "15.99");
    cy.get(".summary_total_label").should("contain.text", "17.27");
    //Action
    checkoutCompletePage.finishShopping();
    //Assertion
    cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
      "have.text",
      "Thank you for your order!"
    );
  });
});
