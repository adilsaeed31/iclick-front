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
      <div
        className={`product ${props.isActionsOnImage && "product-overlay"} ${props.isSmallSize && "product-sm"} ${props.layout === "list" && "product-list"}`}
      >
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
  layout: PropTypes.string,
  price: PropTypes.string,
  priceUnit: PropTypes.string,
  product: PropTypes.object,
  productName: PropTypes.string,
  productUrl: PropTypes.string,
  saleValue: PropTypes.number
};
Product.defaultProps = {
  actionsOnImage: false,
  isSmallSize: false,
  product: {},
  productName: "-",
  productUrl: "#",
  priceUnit: "د.إ.",
  imagePath: "/static/images/placeholder.gif",
  isNew: false,
  layout: "grid",
  price: "0",
  saleValue: 0,
  isLowQuantity: false,
  isSoldOut: false,
  isBackorder: false,
  isOnSale: false
};

export default Product;
