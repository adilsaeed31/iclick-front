import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";

class VariantItem extends Component {
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

    const variantPrice = priceByCurrencyCode(currencyCode, pricing);

    return (
      <button onClick={this.onClick} className={`btn btn-md my-1 mx-1 flex-fill ${isActive ? "btn-primary" : "btn-outline-primary"}`}>
        <div className="text-truncate">{title}</div>
        <div>{variantPrice.displayPrice}</div>
      </button>
      // <ButtonBase disableRipple onClick={this.onClick}>
      //   <Typography component="span" variant="body1">
      //     {title}
      //   </Typography>
      //   <Typography component="span" variant="body1">
      //     {variantPrice.displayPrice}
      //   </Typography>
      // </ButtonBase>
    );
  }
}

export default VariantItem;
