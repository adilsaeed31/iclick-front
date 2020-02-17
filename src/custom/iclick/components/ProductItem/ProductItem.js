import React from "react";
import PropTypes from "prop-types";
import Detail from "custom/iclick/components/Detail";
import Figure from "custom/iclick/components/Figure";
const Product = (props) => (
	<div className={`product ${props.actionsOnImage && 'product-overlay'} ${props.smallSize && 'product-sm'}`}>
		<Figure {...props} />
		<Detail {...props} />
	</div>
);
Product.propTypes = {
	actionsOnImage: PropTypes.bool,
	smallSize: PropTypes.bool,
	productName: PropTypes.string,
	productUrl: PropTypes.string,
	priceUnit: PropTypes.string,
	imagePath: PropTypes.string,
	isNew: PropTypes.bool,
	price: PropTypes.number,
	saleValue: PropTypes.number,
	isLowQuantity: PropTypes.bool,
	isSoldOut: PropTypes.bool,
	isBackorder: PropTypes.bool,
	isOnSale: PropTypes.bool
};
Product.defaultProps = {
	actionsOnImage: false,
	smallSize: false,
	productName: '-',
	productUrl: '#',
	priceUnit: '',
	imagePath: '/static/images/placeholder.gif',
	isNew: false,
	price: 0,
	saleValue: 0,
	isLowQuantity: false,
	isSoldOut: false,
	isBackorder: false,
	isOnSale: false
};

export default Product;