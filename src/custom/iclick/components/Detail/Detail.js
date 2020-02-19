import React from "react";
import PropTypes from "prop-types";
import Link from "custom/iclick/components/Link";
import Action from "custom/iclick/components/Action";

const Detail = ({
  actionsOnImage,
  smallSize,
  productName,
  productUrl,
  priceUnit,
  price,
  saleValue,
  ...rest
}) => (
  <div className="product-details">
    <h2 className="product-title text-truncate">
      <Link route={productUrl}>{productName}</Link>
    </h2>
    <div className="price-box">
      {!!saleValue && <span className="old-price">{saleValue} {priceUnit}</span>}
      <span className="product-price">{price} {priceUnit}</span>
    </div>
    {!actionsOnImage && !smallSize && <Action {...rest}/>}
  </div>
);
Detail.propTypes = {
  actionsOnImage: PropTypes.bool,
  price: PropTypes.number,
  priceUnit: PropTypes.string,
  productName: PropTypes.string,
  productUrl: PropTypes.string,
  rating: PropTypes.number,
  saleValue: PropTypes.number,
  smallSize: PropTypes.bool
};
Detail.defaultProps = {
  actionsOnImage: false,
  smallSize: false,
  productName: "-",
  productUrl: "#",
  priceUnit: "AED",
  rating: 0,
  price: 0,
  saleValue: 0
};
export default Detail;
