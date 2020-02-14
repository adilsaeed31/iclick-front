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
	saleValue
}) => (
		<div className="product-details">
			<h2 className="product-title">
				<Link href={productUrl}>{productName}</Link>
			</h2>
			<div className="price-box">
				{/* {!!saleValue && <span className="old-price">{saleValue} {priceUnit}</span>} */}
				<span className="product-price">{price} {priceUnit}</span>
			</div>
			{!actionsOnImage && !smallSize && <Action />}
		</div>
	);
Detail.propTypes = {
	actionsOnImage: PropTypes.bool,
	smallSize: PropTypes.bool,
	productName: PropTypes.string,
	productUrl: PropTypes.string,
	priceUnit: PropTypes.string,
	rating: PropTypes.number,
	price: PropTypes.number,
	saleValue: PropTypes.number
};
Detail.defaultProps = {
	actionsOnImage: false,
	smallSize: false,
	productName: '-',
	productUrl: '#',
	priceUnit: 'AED',
	rating: 0,
	price: 0,
	saleValue: 0
};
export default Detail;