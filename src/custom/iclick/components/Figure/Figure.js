import React from "react";
import PropTypes from "prop-types";
import Link from "custom/iclick/components/Link";
import Action from "custom/iclick/components/Action";

const Figure = ({
  isActionsOnImage,
  isSmallSize,
  productUrl,
  imagePath,
  isNew,
  saleValue,
  isOnSale
}) => (
  <figure className="product-image-container">
    <Link route={productUrl} className="product-image">
      <img src={imagePath} alt="product" />
    </Link>
    {isOnSale && <span className="product-label label-sale">Sale</span>}
    {/* {!!saleValue && <span className="product-label label-sale">-{saleValue}%</span>} */}
    {isNew && <span className="product-label label-hot">Hot</span>}
    {/* {!isSmallSize && <Link to="#" className="btn-quickview">Quick View</Link>} */}
    {isActionsOnImage && !isSmallSize && <Action />}
  </figure>
);
Figure.propTypes = {
  imagePath: PropTypes.string,
  isActionsOnImage: PropTypes.bool,
  isNew: PropTypes.bool,
  isOnSale: PropTypes.bool,
  isSmallSize: PropTypes.bool,
  productUrl: PropTypes.string,
  saleValue: PropTypes.number
};
Figure.defaultProps = {
  isActionsOnImage: false,
  isSmallSize: false,
  productUrl: "#",
  imagePath: "/",
  isNew: false,
  saleValue: 0,
  isOnSale: false
};
export default Figure;
