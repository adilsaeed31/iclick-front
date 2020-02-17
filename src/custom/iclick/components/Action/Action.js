import React from "react";
import Link from "custom/iclick/components/Link";
const ProductAction = () => (
	<div className="product-action">
		<Link to="#" className="paction add-wishlist" title="Add to Wishlist">
			<span>Add to Wishlist</span>
		</Link>
		<a href="product.html" className="paction add-cart" title="Add to Cart">
			<span>Add to Cart</span>
		</a>
		<a href="#" className="paction add-compare" title="Add to Compare">
			<span>Add to Compare</span>
		</a>
	</div>
);
export default ProductAction;