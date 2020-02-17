import React, { Component } from "react";
import ProductItem from "custom/iclick/components/ProductItem"

class CatalogGrid extends Component {


	componentDidMount() { }

	render() {
		const { products } = this.props;
		let items = []
		if (products) {
			items = products.map((product) => (
				< div className="col-6 col-md-4 col-xl-3" key={product._id} >
					<ProductItem
						productName={product.title}
						imagePath={product.primaryImage.URLs.medium}
						price={product.pricing[0].displayPrice}
						isOnSale={product.isOnSale}
						productUrl={`product/${product.slug}`}
					/>
				</div >
			));
		}
		return (
			<div className="row row-sm">
				{items}
			</div>
		);
	}
}

export default CatalogGrid;
