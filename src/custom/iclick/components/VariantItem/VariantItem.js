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

  onClick = () => {
    this.props.handleClick(this.props.variant);
  }

  render() {
    const { currencyCode, variant } = this.props;
    const { pricing, title } = variant;

    const variantPrice = priceByCurrencyCode(currencyCode, pricing);

    return (
      <ButtonBase disableRipple onClick={this.onClick}>
        <Typography component="span" variant="body1">
          {title}
        </Typography>
        <Typography component="span" variant="body1">
          {variantPrice.displayPrice}
        </Typography>
      </ButtonBase>
    );
  }
}

export default VariantItem;
