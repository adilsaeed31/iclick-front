import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Minus from "mdi-material-ui/Minus";
import Plus from "mdi-material-ui/Plus";
import { inject, observer } from "mobx-react";
import CartPopover from "custom/iclick/components/CartPopover";
import Divider from "custom/iclick/components/Divider";

import customTheme from "custom/reactionTheme"; // added custom theme

// This is a temporary cartItem object to be used for testing
// pending the GraphQL endpoint being hooked up
// Remove the code between these comments when live data is available

const cartItem = {
  _id: "abcdefghijklmnop",
  attributes: [
    {
      label: "Color",
      value: "Red"
    },
    {
      label: "Season",
      value: "Summer"
    }
  ],
  currentQuantity: 10,
  imageUrl: "//placehold.it/100",
  isLowInventoryQuantity: false,
  price: {
    compareAtPrice: "19.99",
    displayPrice: "18.99"
  },
  productSlug: "product-slug",
  title: "Item Title",
  quantity: 10
};
// This is a temporary cartItem object to be used for testing
// pending the GraphQL endpoint being hooked up
// Remove the code between these comments when live data is available

@inject("uiStore")
@observer
export default class ProductDetailAddToCart extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    selectedOptionId: PropTypes.string,
    selectedVariantId: PropTypes.string,
    uiStore: PropTypes.shape({
      openCartWithTimeout: PropTypes.func
    }).isRequired,
    variants: PropTypes.array
  }

  static defaultProps = {
    classes: {},
    onClick: () => {}
  }

  state = {
    addToCartQuantity: 1
  }

  handleOnClick = async (e) => {
    e.preventDefault();
    const { onClick, uiStore } = this.props;

    // Pass chosen quantity to onClick callback
    await onClick(this.state.addToCartQuantity);

    // Scroll to the top
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    // Reset cart quantity to 1 after items are added to cart
    this.setState({
      addToCartError: null,
      addToCartQuantity: 1
    });

    // Open cart popper on addToCart
    uiStore.openCartWithTimeout();
  }

  handleQuantityInputChange = (event) => {
    const { value } = event.target;
    const numericValue = Math.floor(Number(value));
    const variant = this.getVariantToCheckAvailableToSellQuantity();
    const { canBackorder, inventoryAvailableToSell } = variant;

    if (Number.isNaN(numericValue)) {
      return null;
    }

    if (canBackorder === true) {
      return this.setState({
        addToCartError: null,
        addToCartQuantity: numericValue
      });
    }

    if (inventoryAvailableToSell && inventoryAvailableToSell >= value) {
      return this.setState({
        addToCartError: null,
        addToCartQuantity: numericValue
      });
    }

    return this.setState({ addToCartError: "Sorry, you are trying to add too many items to your cart." });
  }

  handleIncrementButton = () => {
    const value = this.state.addToCartQuantity + 1;
    const variant = this.getVariantToCheckAvailableToSellQuantity();
    const { canBackorder, inventoryAvailableToSell } = variant;

    if (canBackorder === true) {
      return this.setState({
        addToCartError: null,
        addToCartQuantity: value
      });
    }

    if (inventoryAvailableToSell && inventoryAvailableToSell >= value) {
      return this.setState({
        addToCartError: null,
        addToCartQuantity: value
      });
    }

    return this.setState({ addToCartError: "Sorry, you are trying to add too many items to your cart." });
  }

  handleDecrementButton = () => {
    const value = this.state.addToCartQuantity - 1;

    if (value >= 1) {
      this.setState({
        addToCartError: null,
        addToCartQuantity: value
      });
    }
  }

  getVariantToCheckAvailableToSellQuantity = () => {
    const { selectedOptionId, selectedVariantId, variants } = this.props;
    const selectedVariant = variants.find((variant) => variant._id === selectedVariantId);

    if (selectedOptionId) {
      // Check to make sure the selected option is from this current page, and not left over from a previous page
      const options =
        selectedVariant && Array.isArray(selectedVariant.options) && selectedVariant.options.length
          ? selectedVariant.options
          : null;

      if (options) {
        return options.find((option) => option._id === selectedOptionId);
      }
    }

    // If we don't have an option, use the variant for inventory status information
    if (selectedVariantId) {
      return selectedVariant;
    }

    // We should always have a selected option or variant, so we should never get this far
    return null;
  }

  render() {
    const { addToCartQuantity } = this.state;

    return (
      <Fragment>
        <div className="product-single-qty">
          <div className="input-group">
            <span className="input-group-btn input-group-prepend">
              <button
                className="btn btn-outline btn-down-icon"
                type="button"
                onClick={this.handleDecrementButton}
              />
            </span>
            <input className="horizontal-quantity form-control px-2 text-center" type="text" value={addToCartQuantity} />
            <span className="input-group-btn input-group-append">
              <button
                className="btn btn-outline btn-up-icon"
                type="button"
                onClick={this.handleIncrementButton}
              />
            </span>
          </div>
        </div>
        <button className="paction add-cart" title="Add to Cart" onClick={this.handleOnClick}>
          <span>Add to Cart</span>
        </button>

        {/* <CartPopover cartItem={cartItem} /> */}
      </Fragment>
    );
  }
}
