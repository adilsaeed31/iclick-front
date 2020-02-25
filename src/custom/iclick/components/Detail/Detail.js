import React from "react";
import PropTypes from "prop-types";
import Link from "custom/iclick/components/Link";
import Action from "custom/iclick/components/Action";

const Detail = ({
  isActionsOnImage,
  isSmallSize,
  productName,
  productUrl,
  priceUnit,
  price,
  saleValue,
  layout,
  description,
  ...rest
}) => (
  <div className="product-details">
    <h2 className="product-title text-truncate">
      <Link route={productUrl}>{productName}</Link>
    </h2>
    {layout === "list" && <div className="product-desc">
      <p>{description}</p>
    </div>}
    <div className="price-box">
      {!!saleValue && <span className="old-price">{saleValue} {priceUnit}</span>}
      <span className="product-price">{price} {priceUnit}</span>
    </div>
    {!isActionsOnImage && !isSmallSize && <Action {...rest}/>}
  </div>
);
Detail.propTypes = {
  isActionsOnImage: PropTypes.bool,
  isSmallSize: PropTypes.bool,
  layout: PropTypes.string,
  price: PropTypes.string,
  priceUnit: PropTypes.string,
  productName: PropTypes.string,
  productUrl: PropTypes.string,
  rating: PropTypes.number,
  saleValue: PropTypes.number
};
Detail.defaultProps = {
  isActionsOnImage: false,
  isSmallSize: false,
  layout: "grid",
  productName: "-",
  productUrl: "#",
  priceUnit: "AED",
  rating: 0,
  price: "0",
  saleValue: 0
};
export default Detail;
