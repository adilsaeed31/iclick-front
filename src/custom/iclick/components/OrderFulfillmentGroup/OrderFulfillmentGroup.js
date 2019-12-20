import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CartItems from "components/CartItems";
import OrderSummary from "components/OrderSummary";

class OrderFulfillmentGroup extends Component {
  static propTypes = {
    fulfillmentGroup: PropTypes.shape({
      items: PropTypes.shape({
        nodes: PropTypes.arrayOf(PropTypes.object)
      }),
      data: PropTypes.shape({
        shippingAddress: PropTypes.object
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

  static defaultProps = {
    hasMoreCartItems: false,
    loadMoreCartItems() {},
    onChangeCartItemsQuantity() {},
    onRemoveCartItems() {}
  }

  handleItemQuantityChange = (quantity, cartItemId) => {
    const { onChangeCartItemsQuantity } = this.props;

    onChangeCartItemsQuantity({ quantity, cartItemId });
  }

  handleRemoveItem = (_id) => {
    const { onRemoveCartItems } = this.props;

    onRemoveCartItems(_id);
  }

  renderItems() {
    const { fulfillmentGroup, hasMoreCartItems, loadMoreCartItems } = this.props;

    if (fulfillmentGroup && Array.isArray(fulfillmentGroup.items.nodes)) {
      return (
        <div>
          <Grid item xs={12}>
            <CartItems
              isMiniCart
              isReadOnly
              hasMoreCartItems={hasMoreCartItems}
              onLoadMoreCartItems={loadMoreCartItems}
              items={fulfillmentGroup.items.nodes}
              onChangeCartItemQuantity={this.handleItemQuantityChange}
              onRemoveItemFromCart={this.handleRemoveItem}
            />
          </Grid>
        </div>
      );
    }

    return null;
  }

  renderFulfillmentInfo() {
    const { fulfillmentGroup } = this.props;

    if (fulfillmentGroup.data && fulfillmentGroup.data.shippingAddress) {
      const {
        data: { shippingAddress }
      } = fulfillmentGroup;
      const address = (
        <Typography variant="body2">
          {shippingAddress.fullName && (
            <span>
              {shippingAddress.fullName}
              <br />
            </span>
          )}
          {shippingAddress.address1}
          <br />
          {shippingAddress.address2 && shippingAddress.address2 !== "" && (
            <span>
              {shippingAddress.address2} <br />
            </span>
          )}
          {shippingAddress.city}, {shippingAddress.region} {shippingAddress.postal} <br />
          {shippingAddress.country}
        </Typography>
      );

      return (
        <div>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Typography variant="subheading">{"Shipping Address"}</Typography>
            </Grid>
            <Grid item xs={9}>
              {address}
            </Grid>
          </Grid>
        </div>
      );
    }

    return null;
  }

  render() {
    const { fulfillmentGroup } = this.props;
    const { fulfillmentMethod } = fulfillmentGroup.selectedFulfillmentOption;
    return (
      <Fragment>
        <section>
          <header>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Typography variant="subheading">{fulfillmentMethod.displayName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{fulfillmentMethod.group}</Typography>
              </Grid>
            </Grid>
          </header>
          {this.renderItems()}
          {this.renderFulfillmentInfo()}
        </section>
        <section>
          <OrderSummary fulfillmentGroup={fulfillmentGroup} />
        </section>
      </Fragment>
    );
  }
}

export default OrderFulfillmentGroup;
