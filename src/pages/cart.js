import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { inject, observer } from "mobx-react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CartEmptyMessage from "@reactioncommerce/components/CartEmptyMessage/v1"
import CartSummary from "@reactioncommerce/components/CartSummary/v1"
import withCart from "containers/cart/withCart"
import CartItems from "custom/iclick/components/CartItems"
import CheckoutButtons from "components/CheckoutButtons"
import Link from "custom/iclick/components/Link"
import { Router } from "routes"
import PageLoading from "custom/iclick/components/PageLoading"
import track from "lib/tracking/track"
import variantById from "lib/utils/variantById"
import trackCartItems from "lib/tracking/trackCartItems"
import TRACKING from "lib/tracking/constants"

@withCart
@inject("uiStore")
@track()
@observer
class CartPage extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      totalItems: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.object),
      checkout: PropTypes.shape({
        fulfillmentTotal: PropTypes.shape({
          displayAmount: PropTypes.string
        }),
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
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  }

  componentDidMount() {
    const { cart } = this.props

    // Track a cart view event
    if (cart && Array.isArray(cart.items) && cart.items.length) {
      this.trackAction({
        cartItems: cart.items,
        cartId: cart._id,
        action: TRACKING.CART_VIEWED
      })
    }
  }

  handleClick = () => Router.pushRoute("/")

  handleItemQuantityChange = (quantity, cartItemId) => {
    const { onChangeCartItemsQuantity } = this.props

    onChangeCartItemsQuantity({ quantity, cartItemId })
  }

  @trackCartItems()
  trackAction() {}

  handleRemoveItem = async itemId => {
    const {
      cart: { items },
      onRemoveCartItems
    } = this.props

    const { data, error } = await onRemoveCartItems(itemId)

    if (data && !error) {
      const {
        cart: { _id }
      } = data.removeCartItems
      const removedItem = { cart_id: _id, ...variantById(items, itemId) } // eslint-disable-line camelcase

      // Track removed item
      this.trackAction({
        cartItems: removedItem,
        action: TRACKING.PRODUCT_REMOVED
      })
    }
  }

  renderCartItems() {
    const { cart, hasMoreCartItems, loadMoreCartItems } = this.props

    if (cart && Array.isArray(cart.items) && cart.items.length) {
      return (
        <Grid item xs={12} md={8}>
          <div>
            <CartItems
              hasMoreCartItems={hasMoreCartItems}
              onLoadMoreCartItems={loadMoreCartItems}
              items={cart.items}
              onChangeCartItemQuantity={this.handleItemQuantityChange}
              onRemoveItemFromCart={this.handleRemoveItem}
            />
          </div>
        </Grid>
      )
    }

    return (
      <Grid item xs={12}>
        <CartEmptyMessage onClick={this.handleClick} />
      </Grid>
    )
  }

  renderCartSummary() {
    const { cart } = this.props

    if (
      cart &&
      cart.checkout &&
      cart.checkout.summary &&
      Array.isArray(cart.items) &&
      cart.items.length
    ) {
      const {
        fulfillmentTotal,
        itemTotal,
        surchargeTotal,
        taxTotal,
        total
      } = cart.checkout.summary

      return (
        <Grid item xs={12} md={3}>
          <CartSummary
            displayShipping={fulfillmentTotal && fulfillmentTotal.displayAmount}
            displaySubtotal={itemTotal && itemTotal.displayAmount}
            displaySurcharge={surchargeTotal && surchargeTotal.displayAmount}
            displayTax={taxTotal && taxTotal.displayAmount}
            displayTotal={total && total.displayAmount}
            itemsQuantity={cart.totalItemQuantity}
          />
          <div>
            <CheckoutButtons />
          </div>
        </Grid>
      )
    }

    return null
  }

  render() {
    const { cart, shop } = this.props
    // when a user has no item in cart in a new session, this.props.cart is null
    // when the app is still loading, this.props.cart is undefined
    if (typeof cart === "undefined") return <PageLoading delay={0} />

    return (
      <Fragment>
        <Helmet
          title={`Cart | ${shop && shop.name}`}
          meta={[{ name: "description", content: shop && shop.description }]}
        />
        <section>
          <Typography className={classes.title} variant="h6" align="center">
            Shopping Cart
          </Typography>
          <Grid container spacing={24}>
            {this.renderCartItems()}
            {this.renderCartSummary()}
            <Grid item>
              <Typography paragraph variant="caption">
                Have questions? call <span>1.800.555.5555</span>
              </Typography>
              <Typography paragraph variant="caption">
                <Link href="#">Shipping information</Link>
              </Typography>
              <Typography paragraph variant="caption">
                <Link href="#">Return policy</Link>
              </Typography>
            </Grid>
          </Grid>
        </section>
      </Fragment>
    )
  }
}

export default CartPage
