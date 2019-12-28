/**
 * @see https://www.npmjs.com/package/next-routes
 * @param {Object} routes The next-routes `routes` object.
 * @returns {undefined}
 */
function defineRoutes(routes) {
  routes
    .add("home", "/", "home")
    .add("cart", "/cart", "cart")
    .add("checkout", "/cart/checkout", "checkout")
    .add("checkoutLogin", "/cart/login", "checkout")
    .add("checkoutComplete", "/checkout/order/:orderId", "checkoutComplete")
    .add("login", "/login", "login")
    .add("shopProduct", "/shop/:shopSlug/product/:slugOrId", "product")
    .add("product", "/product/:slugOrId/:variantId?", "product")
    .add("shop", "/shop/:shopId/:tag", "productGrid")
    .add("tag", "/tag/:slug", "tag")
    .add("profileAddressBook", "/profile/address", "profileAddressBook")
    .add("profileOrders", "/profile/orders", "profileOrders")

    // Adding static pages to bottom
    .add("aboutPortfolio", "/about-portfolio", "aboutPortfolio")
    .add("privacyPolicy", "/privacy-policy", "privacyPolicy")
    .add("shippingReturns", "/shipping-returns", "shippingReturns")
    .add("deliveryInformation", "/delivery-information", "deliveryInformation")
    .add("faq", "/faq", "faq")
    .add("termsOfUse", "/terms-of-use", "termsOfUse")
    .add("termsOfService", "/terms-of-service", "termsOfService")
    .add("contactUs", "/contact-us", "contactUs")
    .add("profileDashboard", "/profile/dashboard", "dashboard")
    .add("fixit", "/fix-it", "fixit")
    .add("business", "/business", "business")
    .add("orderHistory", "/order/history", "profileOrders");
}

module.exports = defineRoutes;
