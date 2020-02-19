import React from "react";
import PropTypes from "prop-types";
import Detail from "custom/iclick/components/Detail";
import Figure from "custom/iclick/components/Figure";
import withCart from "containers/cart/withCart";
import withCatalogItemProduct from "containers/catalog/withCatalogItemProduct";

@withCart
// @withCatalogItemProduct
class Product extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className={`product ${props.isActionsOnImage && "product-overlay"} ${props.isSmallSize && "product-sm"}`}>
        <Figure {...props} />
        <Detail {...props} />
      </div>
    );
  }
}
Product.propTypes = {
  imagePath: PropTypes.string,
  isActionsOnImage: PropTypes.bool,
  isBackorder: PropTypes.bool,
  isLowQuantity: PropTypes.bool,
  isNew: PropTypes.bool,
  isOnSale: PropTypes.bool,
  isSmallSize: PropTypes.bool,
  isSoldOut: PropTypes.bool,
  price: PropTypes.number,
  priceUnit: PropTypes.string,
  productName: PropTypes.string,
  productUrl: PropTypes.string,
  saleValue: PropTypes.number
};
Product.defaultProps = {
  actionsOnImage: false,
  isSmallSize: false,
  productName: "-",
  productUrl: "#",
  priceUnit: "د.إ.",
  imagePath: "/static/images/placeholder.gif",
  isNew: false,
  price: 0,
  saleValue: 0,
  isLowQuantity: false,
  isSoldOut: false,
  isBackorder: false,
  isOnSale: false
};

export default Product;
