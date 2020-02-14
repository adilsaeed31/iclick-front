import React from "react";
import PropTypes from "prop-types";
import Link from "custom/iclick/components/Link";
import Action from "custom/iclick/components/Action";
const Figure = ({
	actionsOnImage,
	smallSize,
	productUrl,
	imagePath,
	isNew,
	saleValue,
	isOnSale
}) => (
		<figure className="product-image-container">
			<Link href={productUrl} className="product-image">
				<img src={imagePath} alt="product" />
			</Link>
			{isOnSale && <span className="product-label label-sale">Sale</span>}
			{/* {!!saleValue && <span className="product-label label-sale">-{saleValue}%</span>} */}
			{isNew && <span className="product-label label-hot">Hot</span>}
			{!smallSize && <Link to="#" className="btn-quickview">Quick View</Link>}
			{actionsOnImage && !smallSize && <Action />}
		</figure>
	);
Figure.propTypes = {
	actionsOnImage: PropTypes.bool,
	smallSize: PropTypes.bool,
	productUrl: PropTypes.string,
	imagePath: PropTypes.string,
	isNew: PropTypes.bool,
	saleValue: PropTypes.number,
	isOnSale: PropTypes.bool
};
Figure.defaultProps = {
	actionsOnImage: false,
	smallSize: false,
	productUrl: '#',
	imagePath: '/',
	isNew: false,
	saleValue: 0,
	isOnSale: false
};
export default Figure;