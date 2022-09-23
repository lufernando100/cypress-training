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

describe("Buy a t-shirt", () => {
  let menuContentPageURL: MenuContentPage;
  let productListPage: ProductsListPage;
  let shoppingCartPage: ShoppingCartPage;
  let shippingStepPage: ShippingStepPage;
  let addressStepPage: AddressStepPage;
  let paymentStepPage: PaymentStepPage;
  let confirmationMessage = "Your order on My Store is complete.";
  let productName = "Faded Short Sleeve T-shirts";

  before(() => {
    menuContentPageURL = new MenuContentPage();
    productListPage = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    shippingStepPage = new ShippingStepPage();
    addressStepPage = new AddressStepPage();
    paymentStepPage = new PaymentStepPage();

    menuContentPageURL.visitMenuContentPage();
    menuContentPageURL.goToShirtMenu();
    productListPage.selectProductList(productName);
    productListPage.goToShopping();
    shoppingCartPage.proceedCheckout();
    shoppingCartPage.signInApplication();
    addressStepPage.goToShippingCart();
    shippingStepPage.goToPayment();
    paymentStepPage.goToPayProduct();
  });
  it("then the t-shirt should be bought", () => {
    paymentStepPage.validateItemsNumber(confirmationMessage);
  });
});
