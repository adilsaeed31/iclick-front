import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Router } from "routes";
import withCart from "containers/cart/withCart";
import withShop from "containers/shop/withShop";
import trackCartItems from "lib/tracking/trackCartItems";
import track from "lib/tracking/track";
import variantById from "lib/utils/variantById";
import TRACKING from "lib/tracking/constants";
import Link from "custom/iclick/components/Link";

const { CART_VIEWED, PRODUCT_REMOVED } = TRACKING;

@withShop
@withCart
@inject("uiStore")
@track()
@observer
export default class MiniCart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object),
      checkout: PropTypes.shape({
        itemTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
        taxTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        })
      })
    }),
    hasMoreCartItems: PropTypes.bool,
    loadMoreCartItems: PropTypes.func,
    onChangeCartItemsQuantity: PropTypes.func,
    onRemoveCartItems: PropTypes.func,
    uiStore: PropTypes.shape({
      isCartOpen: PropTypes.bool.isRequired,
      openCart: PropTypes.func.isRequired,
      closeCart: PropTypes.func.isRequired
    })
  };

  constructor(props) {
    super(props);

    this.setPopoverAnchorEl = element => {
      this.anchorElement = element;
    };
  }

  state = {
    anchorElement: null
  };

  anchorElement = null;

  handlePopperOpen = () => {
    const {
      cart,
      uiStore: { openCart }
    } = this.props;
    openCart();

    // Track a cart view event, only if the cart contains items
    if (cart && Array.isArray(cart.items) && cart.items.length) {
      this.trackAction({ cartItems: cart.items, cartId: cart._id, action: CART_VIEWED });
    }
  };

  handleClick = () => Router.pushRoute("/");

  handleCheckoutButtonClick = () => {
    this.handleLeavePopper();
    Router.pushRoute("/cart/checkout");
  };

  handleOnClick = () => {
    const { closeCart } = this.props.uiStore;
    closeCart();
    Router.pushRoute("cart");
  };

  handleItemQuantityChange = (quantity, cartItemId) => {
    const { onChangeCartItemsQuantity } = this.props;

    onChangeCartItemsQuantity({ quantity, cartItemId });
  };

  @trackCartItems()
  trackAction() {}

  handleRemoveItem = async itemId => {
    console.log(itemId, "itemId");
    const {
      cart: { items },
      onRemoveCartItems
    } = this.props;

    const { data, error } = await onRemoveCartItems(itemId);
    if (data && !error) {
      const {
        cart: { _id }
      } = data.removeCartItems;
      const removedItem = { cart_id: _id, ...variantById(items, itemId) }; // eslint-disable-line camelcase

      // Track removed item
      this.trackAction({ cartItems: removedItem, action: PRODUCT_REMOVED });
    }
  };

  render() {
    const { cart } = this.props;

    return (
      <div className="dropdown cart-dropdown">
        <div
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {cart && cart.items.length > 0 && <span className="cart-count">{cart.totalItemQuantity}</span>}
        </div>

        <div className="dropdown-menu">
          <div className="dropdownmenu-wrapper">
            <div className="dropdown-cart-header">
              <span>{cart && cart.items.length > 0 && cart.totalItemQuantity}</span>

              <Link to="/cart" onClick={this.handleOnClick}>
                View Cart
              </Link>
            </div>

            <div className="dropdown-cart-products">
              {cart && Array.isArray(cart.items) && cart.items.length ? (
                cart.items.map((item, i) => {
                  return (
                    <div className="product" key={i}>
                      <div className="product-details">
                        <h4 className="product-title">
                          <Link to={`/product/${item.productSlug}`}>{item && item.title}</Link>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">{item && item.quantity}</span>x{" "}
                          {item && item.price.displayAmount}
                        </span>
                      </div>

                      <figure className="product-image-container">
                        <Link to={`/product/${item.productSlug}`} className="product-image">
                          {/* <img src={item.imageURLs.thumbnail} alt="product" /> */}
                        </Link>
                        <a href="#" onClick={() => this.handleRemoveItem(item._id)} className="btn-remove">
                          <i className="icon-cancel" />
                        </a>
                      </figure>
                    </div>
                  );
                })
              ) : (
                <Fragment>
                  <p style={{ textAlign: "center", marginTop: "20px" }}>Your Shopping Cart is Empty</p>
                  <div className="dropdown-cart-action">
                    <Link href="#" onClick={this.handleClick} className="btn btn-block">
                      Shopping Continue
                    </Link>
                  </div>
                </Fragment>
              )}
            </div>
            {cart && Array.isArray(cart.items) && cart.items.length > 0 && (
              <Fragment>
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">{cart && cart.checkout.summary.total.displayAmount}</span>
                </div>

                <div className="dropdown-cart-action">
                  <Link to="/checkout" onClick={this.handleCheckoutButtonClick} className="btn btn-block">
                    Checkout
                  </Link>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
