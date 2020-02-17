import React, { Component } from "react";

class TagListing extends Component {
	componentDidMount() { }

	render() {
		const { tags } = this.props;

		let items = [];
		if (tags) {
			items = tags.map((item) => (
				<div className="product" key={item.id}>
					<figure className="product-image-container">
						<a href={item.slug} className="product-image">
							<img src={item.heroMediaUrl} alt="product" />
						</a>
						<a href={item.slug} className="btn-quickview">
							Quick View
            </a>
						<span className="product-label label-sale">-20%</span>
						<span className="product-label label-hot">New</span>
					</figure>
					<div className="product-details">
						<div className="ratings-container">
							<div className="product-ratings">
								<span className="ratings" style={{ width: "0%" }} />
							</div>
						</div>
						<h2 className="product-title">
							<a href={item.slug}>{item.name}</a>
						</h2>
						<div className="price-box">
							<span className="old-price">$60.00</span>
							<span className="product-price">$48.00</span>
						</div>
						<div className="product-action">
							<a href="/" className="paction add-wishlist" title="Add to Wishlist">
								<span>Add to Wishlist</span>
							</a>
							<a href="product.html" className="paction add-cart" title="Add to Cart">
								<span>Add to Cart</span>
							</a>
							<a href="/" className="paction add-compare" title="Add to Compare">
								<span>Add to Compare</span>
							</a>
						</div>
					</div>
				</div>
			));
		}

		return (
			<div className="row row-sm">
				<div className="col-6 col-md-4 col-xl-3">{items}</div>
			</div>
		);
	}
}

export default TagListing;
