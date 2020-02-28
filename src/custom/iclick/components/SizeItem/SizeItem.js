import React, { Component } from "react";
import PropTypes from "prop-types";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";

class SizeItem extends Component {
  static propTypes = {
    currencyCode: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    variant: PropTypes.object.isRequired
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.handleClick(this.props.variant);
  }

  render() {
    const { currencyCode, variant, isActive } = this.props;
    const { pricing, title } = variant;

    // const variantPrice = priceByCurrencyCode(currencyCode, pricing);

    const initials = variant.optionTitle.split(" ").map((st) => (st).toUpperCase().charAt()).join("");

    return (
      <li className={isActive ? "active" : ""} onClick={this.onClick} title={variant.optionTitle}>
        <a href="#">{initials}</a>
      </li>
    );
  }
}

export default SizeItem;
