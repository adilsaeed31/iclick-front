import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import Grid from "@material-ui/core/Grid";

class ProductDetailPrice extends Component {
  static propTypes = {
    /**
     * Sale or adjusted price.
     * If defined, the priceRange will be crossed out
     */
    compareAtPrice: PropTypes.string,

    /**
     * Use the compact layout
     */
    isCompact: PropTypes.bool,

    /**
     * Price or price range as a string
     */
    price: PropTypes.string
  }

  static defaultProps = {
    isCompact: false
  }

  render() {
    const { compareAtPrice, price, isCompact } = this.props;

    // If all props are undefined then skip rendering component
    if (!price) return null;

    if (isCompact) {
      return (
        <Grid item sm={12}>
          <Typography component="span" variant="body1">
            {price}
          </Typography>
          <Typography variant="caption">{compareAtPrice}</Typography>
        </Grid>
      );
    }

    return (
      <Grid item sm={12}>
        <Typography variant="caption">{compareAtPrice}</Typography>
        <Typography component="div" variant="title">
          {price}
        </Typography>
      </Grid>
    );
  }
}

export default ProductDetailPrice;
