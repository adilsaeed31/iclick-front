import React, {Component} from "react";
import PropTypes from "prop-types";
import {inject, observer} from "mobx-react";
import MiniCartComponent from "@reactioncommerce/components/MiniCart/v1";
import CartItems from "components/CartItems";
import CartEmptyMessage from "@reactioncommerce/components/CartEmptyMessage/v1";
import {Router} from "routes";
import withCart from "containers/cart/withCart";
import withShop from "containers/shop/withShop";
import trackCartItems from "lib/tracking/trackCartItems";
import track from "lib/tracking/track";
import variantById from "lib/utils/variantById";
import TRACKING from "lib/tracking/constants";

const {CART_VIEWED, PRODUCT_REMOVED} = TRACKING;

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
  }

  constructor(props) {
    super(props);

    this.setPopoverAnchorEl = (element) => {
      this.anchorElement = element;
    };
  }

  state = {
    anchorElement: null
  }

  anchorElement = null

  handlePopperOpen = () => {
    const {
      cart,
      uiStore: {openCart}
    } = this.props;
    openCart();

    // Track a cart view event, only if the cart contains items
    if (cart && Array.isArray(cart.items) && cart.items.length) {
      this.trackAction({cartItems: cart.items, cartId: cart._id, action: CART_VIEWED});
    }
  }

  handleClick = () => Router.pushRoute("/")

  handleCheckoutButtonClick = () => {
    this.handleLeavePopper();
    Router.pushRoute("/cart/checkout");
  }

  handlePopperClose = () => {
    const {closeCart} = this.props.uiStore;
    closeCart(0);
  }

  handleEnterPopper = () => {
    const {openCart} = this.props.uiStore;
    openCart();
  }

  handleLeavePopper = () => {
    const {closeCart} = this.props.uiStore;
    closeCart();
  }

  handleOnClick = () => {
    const {closeCart} = this.props.uiStore;
    closeCart();
    Router.pushRoute("cart");
  }

  handleItemQuantityChange = (quantity, cartItemId) => {
    const {onChangeCartItemsQuantity} = this.props;

    onChangeCartItemsQuantity({quantity, cartItemId});
  }

  @trackCartItems()
  trackAction() {
  }

  handleRemoveItem = async (itemId) => {
    const {
      cart: {items},
      onRemoveCartItems
    } = this.props;
    const {data, error} = await onRemoveCartItems(itemId);

    if (data && !error) {
      const {
        cart: {_id}
      } = data.removeCartItems;
      const removedItem = {cart_id: _id, ...variantById(items, itemId)}; // eslint-disable-line camelcase

      // Track removed item
      this.trackAction({cartItems: removedItem, action: PRODUCT_REMOVED});
    }
  }

  renderMiniCart() {
    const {cart, hasMoreCartItems, loadMoreCartItems} = this.props;

    if (cart && Array.isArray(cart.items) && cart.items.length) {
      return (
        <MiniCartComponent
          cart={cart}
          onCheckoutButtonClick={this.handleCheckoutButtonClick}
          components={{
            QuantityInput: "div",
            CartItems: (cartItemProps) => (
              <CartItems
                {...cartItemProps}
                hasMoreCartItems={hasMoreCartItems}
                onRemoveItemFromCart={this.handleRemoveItem}
                onChangeCartItemQuantity={this.handleItemQuantityChange}
                onLoadMoreCartItems={loadMoreCartItems}
              />
            )
          }}
        />
      );
    }

    return (
      <div>
        <CartEmptyMessage onClick={this.handleClick}/>
      </div>
    );
  }

  render() {
    const {cart, uiStore} = this.props;
    const {isCartOpen} = uiStore;
    const id = isCartOpen ? "simple-popper" : null;
    let total = 0;
    if (cart) {
      total = cart.items.reduce((accumulator, item) => {
        return accumulator + (item.price.amount * item.quantity)
      }, 0);
    }
    return (
      <div className="dropdown cart-dropdown">
        <a
          href="/"
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          <span className="cart-count">{cart && cart.totalItemQuantity}</span>
        </a>

        <div className="dropdown-menu">
          <div className="dropdownmenu-wrapper">
            <div className="dropdown-cart-header">
              <span>{cart && cart.items.length}</span>

              <a href="#" onClick={this.handleOnClick
              }>View Cart</a>
            </div>
            <div className="dropdown-cart-products">
              {cart && cart.items.map((item, i) => {
                return (
                  <div className="product">
                    <div className="product-details">
                      <h4 className="product-title">
                        <a href="#">{item && item.title}</a>
                      </h4>

                      <span className="cart-product-info">
        <span className="cart-product-qty">{item && item.quantity}</span>x {item && item.price.displayAmount}
      </span>
                    </div>

                    <figure className="product-image-container">
                      <a href="#" className="product-image">
                        <img src="/static/images/products/cart/product-1.jpg" alt="product"/>
                      </a>
                      <a href="/" className="btn-remove" title="Remove Product">
                        <i className="icon-cancel"/>
                      </a>
                    </figure>
                  </div>
                )
              })}
            </div>

            <div className="dropdown-cart-total">
              <span>Total</span>

              <span className="cart-total-price">{Number.parseFloat(total).toFixed(2)}</span>
            </div>

            <div className="dropdown-cart-action">
              <button onClick={this.handleCheckoutButtonClick} className="btn btn-block">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
