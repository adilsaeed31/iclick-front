import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckoutButtons from "custom/iclick/components/CheckoutButtons";

@inject("uiStore")
@observer
class CartPopover extends Component {
  static propTypes = {
    /**
     * CartItem data
     */
    cartItem: PropTypes.shape({
      /**
       * The cart item ID
       */
      _id: PropTypes.string,
      /**
       * Array of additional attributes of the chosen item.
       */
      attributes: PropTypes.arrayOf(PropTypes.shape({
          /**
           * Attribute label (i.e. "Color").
           */
          label: PropTypes.string,
          /**
           *  Attribute value (i.e. "Red").
           */
          value: PropTypes.string
        })),
      /**
       * Current stock quantity of item
       */
      currentQuantity: PropTypes.number,
      /**
       * Image url of chosen item
       */
      imageUrl: PropTypes.string,
      /**
       * Is the chosen item have a low quantity
       */
      isLowInventoryQuantity: PropTypes.bool,
      /**
       * Price object of chosen item
       */
      price: PropTypes.shape({
        /**
         * Chosen items compare at price
         */
        compareAtPrice: PropTypes.string,
        /**
         * Chosen items display price
         */
        displayPrice: PropTypes.string
      }),
      /**
       * Chosen items slug
       */
      productSlug: PropTypes.string,
      /**
       * Chosen items title
       */
      title: PropTypes.string,
      /**
       * Quantity of chosen item in cart
       */
      quantity: PropTypes.number
    }),
    theme: PropTypes.object,
    uiStore: PropTypes.shape({
      isCartPopoverOpen: PropTypes.bool
    }).isRequired
  }

  handleOnClick = () => {
    // This will need to pass the correct function and data into the Checkout Buttons
  }

  render() {
    const { cartItem } = this.props;

    if (cartItem) {
      return (
        <div>
          <Grid>
            <Grid item xs={12}>
              <img alt={cartItem.title} src={cartItem.imageUrl} />
              <Typography component="span">
                {cartItem.quantity} "<span>{cartItem.title}</span>" added to cart
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CheckoutButtons onClick={this.handleOnClick} />
            </Grid>
          </Grid>
        </div>
      );
    }

    return null;
  }
}

export default CartPopover;
