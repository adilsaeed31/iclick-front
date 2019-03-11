import React from 'react';

const CartDropDown = (props) => (
	<div className="dropdown cart-dropdown">
		<a
			href="#"
			className="dropdown-toggle"
			role="button"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			data-display="static"
		>
			<span className="cart-count">2</span>
		</a>

		<div className="dropdown-menu">
			<div className="dropdownmenu-wrapper">
				<div className="dropdown-cart-header">
					<span>2 Items</span>

					<a href="cart.html">View Cart</a>
				</div>
				<div className="dropdown-cart-products">
					<div className="product">
						<div className="product-details">
							<h4 className="product-title">
								<a href="product.html">Woman Ring</a>
							</h4>

							<span className="cart-product-info">
								<span className="cart-product-qty">1</span>
								x $99.00
							</span>
						</div>

						<figure className="product-image-container">
							<a href="product.html" className="product-image">
								<img src="/static/images/products/cart/product-1.jpg" alt="product" />
							</a>
							<a href="#" className="btn-remove" title="Remove Product">
								<i className="icon-cancel" />
							</a>
						</figure>
					</div>

					<div className="product">
						<div className="product-details">
							<h4 className="product-title">
								<a href="product.html">Woman Necklace</a>
							</h4>

							<span className="cart-product-info">
								<span className="cart-product-qty">1</span>
								x $35.00
							</span>
						</div>

						<figure className="product-image-container">
							<a href="product.html" className="product-image">
								<img src="/static/images/products/cart/product-2.jpg" alt="product" />
							</a>
							<a href="#" className="btn-remove" title="Remove Product">
								<i className="icon-cancel" />
							</a>
						</figure>
					</div>
				</div>

				<div className="dropdown-cart-total">
					<span>Total</span>

					<span className="cart-total-price">$134.00</span>
				</div>

				<div className="dropdown-cart-action">
					<a href="checkout-shipping.html" className="btn btn-block">
						Checkout
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default CartDropDown;
