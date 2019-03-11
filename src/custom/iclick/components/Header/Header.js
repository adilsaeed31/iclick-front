import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
 
import { NavigationDesktop } from 'custom/iclick/components/NavigationDesktop';
import { NavigationMobile, NavigationToggleMobile } from 'custom/iclick/components/NavigationMobile';
import AccountDropdown from 'components/AccountDropdown';
import ShopLogo from '@reactioncommerce/components/ShopLogo/v1';
import Link from 'custom/iclick/components/Link';
import MiniCart from 'components/MiniCart';

@inject('uiStore')
class Header extends Component {
	static propTypes = {
		shop: PropTypes.shape({
			name: PropTypes.string
		}).isRequired,
		uiStore: PropTypes.shape({
			toggleMenuDrawerOpen: PropTypes.func.isRequired
		}).isRequired,
		viewer: PropTypes.object
	};

	handleNavigationToggleClick = () => {
		this.props.uiStore.toggleMenuDrawerOpen();
	};

	render() {
		const { shop } = this.props;

		return (
			<header className="header">
				<div className="header-top">
					<div className="container">
						<div className="header-left header-dropdowns">
							<div className="header-dropdown">
								<a href="#">USD</a>
								<div className="header-menu">
									<ul>
										<li>
											<a href="#">EUR</a>
										</li>
										<li>
											<a href="#">USD</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="header-dropdown">
								<a href="#">
									<img src="/static/images/flags/en.png" alt="England flag" />ENGLISH
								</a>
								<div className="header-menu">
									<ul>
										<li>
											<a href="#">
												<img src="/static/images/flags/en.png" alt="England flag" />ENGLISH
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/static/images/flags/fr.png" alt="France flag" />FRENCH
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="dropdown compare-dropdown">
								<a
									href="#"
									className="dropdown-toggle"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									data-display="static"
								>
									<i className="icon-retweet" /> Compare (2)
								</a>

								<div className="dropdown-menu">
									<div className="dropdownmenu-wrapper">
										<ul className="compare-products">
											<li className="product">
												<a href="#" className="btn-remove" title="Remove Product">
													<i className="icon-cancel" />
												</a>
												<h4 className="product-title">
													<a href="product.html">Lady White Top</a>
												</h4>
											</li>
											<li className="product">
												<a href="#" className="btn-remove" title="Remove Product">
													<i className="icon-cancel" />
												</a>
												<h4 className="product-title">
													<a href="product.html">Blue Women Shirt</a>
												</h4>
											</li>
										</ul>

										<div className="compare-actions">
											<a href="#" className="action-link">
												Clear All
											</a>
											<a href="#" className="btn btn-primary">
												Compare
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="header-right">
							<p className="welcome-msg">Default welcome msg! </p>

							<div className="header-dropdown dropdown-expanded">
								<a href="#">Links</a>
								<div className="header-menu">
									<ul>
										<li>
											<a href="my-account.html">MY ACCOUNT </a>
										</li>
										<li>
											<a href="#">DAILY DEAL</a>
										</li>
										<li>
											<a href="#">MY WISHLIST </a>
										</li>
										<li>
											<a href="blog.html">BLOG</a>
										</li>
										<li>
											<a href="contact.html">Contact</a>
										</li>
										<li>
											<a href="#" className="login-link">
												LOG IN
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="header-middle">
					<div className="container">
						<div className="header-left">
							<button className="mobile-menu-toggler" type="button">
								<i className="icon-menu" />
							</button>
							<div className="header-search">
								<a href="#" className="search-toggle" role="button">
									<i className="icon-magnifier" />
								</a>
								<form action="#" method="get">
									<div className="header-search-wrapper">
										<input
											type="search"
											className="form-control"
											name="q"
											id="q"
											placeholder="Search..."
											required
										/>
										<div className="select-custom">
											<select id="cat" name="cat">
												<option value="">All Categories</option>
											</select>
										</div>
										<button className="btn" type="submit">
											<i className="icon-magnifier" />
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="header-center">
							<Link route="/">
								<ShopLogo
									className="logo"
									shopName={shop.name}
									shopLogoUrl="/static/images/iclicklogo.png"
								/>
							</Link>
						</div>

						<div className="header-right">
							<div className="header-contact">
								<span>Call us now</span>
								<a href="tel:#">
									<strong>+123 5678 890</strong>
								</a>
							</div>

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
														<img
															src="/static/images/products/cart/product-1.jpg"
															alt="product"
														/>
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
														<img
															src="/static/images/products/cart/product-2.jpg"
															alt="product"
														/>
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
						</div>
					</div>
				</div>

				<div className="header-bottom sticky-header">
					<div className="container">
						<NavigationDesktop />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
