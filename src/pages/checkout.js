import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Router } from "routes";
import { observer } from "mobx-react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CartEmptyMessage from "@reactioncommerce/components/CartEmptyMessage/v1";
import CheckoutActions from "custom/iclick/components/CheckoutActions";
import CheckoutEmailAddress from "@reactioncommerce/components/CheckoutEmailAddress/v1";
import CheckoutTopHat from "@reactioncommerce/components/CheckoutTopHat/v1";
import Entry from "custom/iclick/components/Entry";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import CartIcon from "mdi-material-ui/Cart";
import ChevronLeftIcon from "mdi-material-ui/ChevronLeft";
import LockIcon from "mdi-material-ui/Lock";
import withCart from "containers/cart/withCart";
import Link from "custom/iclick/components/Link";
import CheckoutSummary from "custom/iclick/components/CheckoutSummary";
import PageLoading from "custom/iclick/components/PageLoading";

import withAvailablePaymentMethods from "containers/payment/withAvailablePaymentMethods";
import definedPaymentMethods from "../custom/paymentMethods";


const hasIdentityCheck = (cart) => !!((cart && cart.account !== null) || (cart && cart.email));

@withCart
@withAvailablePaymentMethods
@observer
class Checkout extends Component {
  static propTypes = {
    availablePaymentMethods: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })),
    cart: PropTypes.shape({
      account: PropTypes.object,
      checkout: PropTypes.object,
      email: PropTypes.string,
      items: PropTypes.array
    }),
    hasMoreCartItems: PropTypes.bool,
    isLoadingAvailablePaymentMethods: PropTypes.bool,
    isLoadingCart: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    router: PropTypes.object,
    setEmailOnAnonymousCart: PropTypes.func,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  }

  state = {}

  componentDidMount() {
    this.handleRouteChange();
  }

  componentDidUpdate() {
    this.handleRouteChange();
  }

  /**
   *
   * @name handleRouteChange
   * @summary Determines which /cart route (/cart/login || /cart/checkout) to display.
   * @return {undefined}
   */
  handleRouteChange = () => {
    const { cart } = this.props;
    // Skipping if the `cart` is not available
    if (!cart) return;
    if (hasIdentityCheck(cart) && this.pagePath === "/cart/login") {
      Router.replaceRoute("/cart/checkout", {}, { shallow: true });
    } else if (!hasIdentityCheck(cart) && this.asPath === "/cart/checkout") {
      Router.replaceRoute("/cart/login", {}, { shallow: true });
    }
  }

  handleCartEmptyClick = () => Router.pushRoute("/")

  get pagePath() {
    return this.props.router.asPath;
  }

  /**
   *
   * @name hasIdentity
   * @summary `true` if a customer is signed in or has set a "guest email" on their cart.
   * @return {Boolean} - true if cart.account or cart.email are set.
   */
  get hasIdentity() {
    const { cart } = this.props;
    return hasIdentityCheck(cart);
  }

  // render page head
  renderCheckoutHead() {
    const { shop } = this.props;
    const pageTitle = this.hasIdentity ? `Checkout | ${shop && shop.name}` : `Login | ${shop && shop.name}`;
    return <Helmet title={pageTitle} meta={[{ name: "description", content: shop && shop.description }]} />;
  }

  // render page top bar
  renderCheckoutTopHat() {
    return <CheckoutTopHat checkoutMessage="Free Shipping + Free Returns" />;
  }

  // render page header
  renderCheckoutHeader() {
    return this.hasIdentity ? this.renderCheckoutActionsHeader() : this.renderLoginHeader();
  }

  renderLoginHeader() {
    const { shop } = this.props;

    return (
      <div>
        <div>
          <Link route="/">
            <ChevronLeftIcon style={{ fontSize: 18, color: "inherit", verticalAlign: "sub", transition: "none" }} />
            <span>Back</span>
          </Link>
        </div>

        <Link route="home">
          <div>
            <ShopLogo shopName={shop.name} />
          </div>
        </Link>

        <div />
      </div>
    );
  }

  renderCheckoutActionsHeader() {
    const { shop } = this.props;
    return (
      <div>
        <Link route="home">
          <div>
            <ShopLogo shopName={shop.name} />
          </div>
        </Link>
        <div>
          <LockIcon />
          <Typography>Checkout</Typography>
        </div>
        <Link route="cart">
          <CartIcon />
        </Link>
      </div>
    );
  }

  renderCheckoutContent() {
    const {
      cart,
      router: { asPath }
    } = this.props;
    // sanity check that "tries" to render the correct /cart view if SSR doesn't provide the `cart`
    if (!cart) return asPath === "/cart/checkout" ? this.renderCheckoutActions() : this.renderCheckoutLogin();
    return this.hasIdentity ? this.renderCheckoutActions() : this.renderCheckoutLogin();
  }

  // render page content: login || checkout
  renderCheckoutLogin() {
    const { setEmailOnAnonymousCart } = this.props;

    return (
      <main>
        <Entry setEmailOnAnonymousCart={setEmailOnAnonymousCart} />
      </main>
    );
  }

  renderCheckoutActions() {
    const {

      availablePaymentMethods,
      cart,
      cartStore,
      checkoutMutations,
      clearAuthenticatedUsersCart,
      hasMoreCartItems,
      loadMoreCartItems,
      onRemoveCartItems,
      onChangeCartItemsQuantity
    } = this.props;

    if (!cart || (cart && Array.isArray(cart.items) && cart.items.length === 0)) {
      return (
        <div>
          <div>
            <div>
              <CartEmptyMessage onClick={this.handleCartEmptyClick} />
            </div>
          </div>
        </div>
      );
    }

    const hasAccount = !!cart.account;
    const displayEmail =
      (hasAccount && Array.isArray(cart.account.emailRecords) && cart.account.emailRecords[0].address) || cart.email;
    const orderEmailAddress = (hasAccount && Array.isArray(cart.account.emailRecords) && cart.account.emailRecords[0].address) || cart.email;

    // Filter the hard-coded definedPaymentMethods list from the client to remove any
    // payment methods that were not returned from the API as currently available.
    const paymentMethods = definedPaymentMethods.filter((method) =>
      !!availablePaymentMethods.find((availableMethod) => availableMethod.name === method.name));

    return (
      
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} md={7}>
             
               
                  {orderEmailAddress ? (
                    <CheckoutEmailAddress emailAddress={orderEmailAddress} isAccountEmail={hasAccount} />
                  ) : null}
                  <CheckoutActions
                    cart={cart}
                    cartStore={cartStore}
                    checkoutMutations={checkoutMutations}
                    clearAuthenticatedUsersCart={clearAuthenticatedUsersCart}
                    orderEmailAddress={orderEmailAddress}
                    paymentMethods={paymentMethods}
                  />
                
              
            </Grid>
            <Grid item xs={12} md={5}>
            
                  <CheckoutSummary
                    cart={cart}
                    hasMoreCartItems={hasMoreCartItems}
                    onRemoveCartItems={onRemoveCartItems}
                    onChangeCartItemsQuantity={onChangeCartItemsQuantity}
                    onLoadMoreCartItems={loadMoreCartItems}
                  />
               
            </Grid>
          </Grid>
        </div>
     
    );
  }

  render() {
    const {
      isLoadingCart,
      isLoadingAvailablePaymentMethods
    } = this.props;

    if (isLoadingCart || isLoadingAvailablePaymentMethods) {
      return <PageLoading delay={0} />;
    }

    return (
      <Fragment>
        {this.renderCheckoutHead()}
        {this.renderCheckoutTopHat()}
        {this.renderCheckoutHeader()}
        {this.renderCheckoutContent()}
      </Fragment>
    );
  }
}

export default Checkout;
