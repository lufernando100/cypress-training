import {
  AddressStepPage,
  MenuContentPage,
  PaymentStepPage,
} from "../page/index";
import {
  ProductsListPage,
  ShippingStepPage,
  ShoppingCartPage,
} from "../page/index";

const menuContentPageURL = new MenuContentPage();
const productListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const shippingStepPage = new ShippingStepPage();
const addressStepPage = new AddressStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPageURL.visitMenuContentPage();
    menuContentPageURL.goToShirtMenu();
    productListPage.selectProductList();
    productListPage.goToShopping();
    shoppingCartPage.proceedCheckout();
    shoppingCartPage.signInApplication();
    addressStepPage.goToShippingCart();
    shippingStepPage.goToPayment();
    paymentStepPage.goToPayProduct();
    paymentStepPage
      .getConfirmationMessage()
      .should("have.text", "Your order on My Store is complete.");
  });
});
