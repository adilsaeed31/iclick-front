import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavigationDesktop } from 'custom/iclick/components/NavigationDesktop';
import { NavigationMobile, NavigationToggleMobile } from 'custom/iclick/components/NavigationMobile';
import AccountDropdown from 'components/AccountDropdown';
import ShopLogo from '@reactioncommerce/components/ShopLogo/v1';
import Link from 'components/Link';
import MiniCart from 'components/MiniCart';

@inject('uiStore')
class Header extends Component {
	static propTypes = {
		classes: PropTypes.object,
		shop: PropTypes.shape({
			name: PropTypes.string
		}).isRequired,
		uiStore: PropTypes.shape({
			toggleMenuDrawerOpen: PropTypes.func.isRequired
		}).isRequired,
		viewer: PropTypes.object
	};

	static defaultProps = {
		classes: {}
	};

	handleNavigationToggleClick = () => {
		this.props.uiStore.toggleMenuDrawerOpen();
	};

	render() {
		const { classes: { appBar, controls, toolbar, title }, shop } = this.props;

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
												<option value="4">Fashion</option>
												<option value="12">- Women</option>
												<option value="13">- Men</option>
												<option value="66">- Jewellery</option>
												<option value="67">- Kids Fashion</option>
												<option value="5">Electronics</option>
												<option value="21">- Smart TVs</option>
												<option value="22">- Cameras</option>
												<option value="63">- Games</option>
												<option value="7">Home &amp; Garden</option>
												<option value="11">Motors</option>
												<option value="31">- Cars and Trucks</option>
												<option value="32">- Motorcycles &amp; Powersports</option>
												<option value="33">- Parts &amp; Accessories</option>
												<option value="34">- Boats</option>
												<option value="57">- Auto Tools &amp; Supplies</option>
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
						<nav className="main-nav">
							<ul className="menu sf-arrows">
								<li className="active">
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="category.html" className="sf-with-ul">
										Categories
									</a>
									<div className="megamenu megamenu-fixed-width">
										<div className="row">
											<div className="col-lg-8">
												<div className="row">
													<div className="col-lg-6">
														<div className="menu-title">
															<a href="#">
																Variations 1<span className="tip tip-new">New!</span>
															</a>
														</div>
														<ul>
															<li>
																<a href="category-banner-full-width.html">
																	Fullwidth Banner<span className="tip tip-hot">Hot!</span>
																</a>
															</li>
														</ul>
													</div>
													<div className="col-lg-6">
														<div className="menu-title">
															<a href="#">Variations 2</a>
														</div>
														<ul>
															<li>
																<a href="#">Product List Item Types</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="banner">
													<a href="#">
														<img src="/static/images/menu-banner-2.jpg" alt="Menu banner" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="megamenu-container">
									<a href="product.html" className="sf-with-ul">
										Products
									</a>
									<div className="megamenu">
										<div className="row">
											<div className="col-lg-8">
												<div className="row">
													<div className="col-lg-4">
														<div className="menu-title">
															<a href="#">Variations</a>
														</div>
														<ul>
															<li>
																<a href="product.html">Horizontal Thumbnails</a>
															</li>
															<li>
																<a href="product-full-width.html">
																	Vertical Thumbnails<span className="tip tip-hot">Hot!</span>
																</a>
															</li>
															<li>
																<a href="product.html">Inner Zoom</a>
															</li>
															<li>
																<a href="product-addcart-sticky.html">
																	Addtocart Sticky
																</a>
															</li>
															<li>
																<a href="product-sidebar-left.html">Accordion Tabs</a>
															</li>
														</ul>
													</div>
													<div className="col-lg-4">
														<div className="menu-title">
															<a href="#">Variations</a>
														</div>
														<ul>
															<li>
																<a href="product-sticky-tab.html">Sticky Tabs</a>
															</li>
															<li>
																<a href="product-simple.html">Simple Product</a>
															</li>
															<li>
																<a href="product-sidebar-left.html">
																	With Left Sidebar
																</a>
															</li>
														</ul>
													</div>
													<div className="col-lg-4">
														<div className="menu-title">
															<a href="#">Product Layout Types</a>
														</div>
														<ul>
															<li>
																<a href="product.html">Default Layout</a>
															</li>
															<li>
																<a href="product-extended-layout.html">
																	Extended Layout
																</a>
															</li>
															<li>
																<a href="product-full-width.html">Full Width Layout</a>
															</li>
															<li>
																<a href="product-grid-layout.html">
																	Grid Images Layout
																</a>
															</li>
															<li>
																<a href="product-sticky-both.html">
																	Sticky Both Side Info<span className="tip tip-hot">Hot!</span>
																</a>
															</li>
															<li>
																<a href="product-sticky-info.html">
																	Sticky Right Side Info
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="banner">
													<a href="#">
														<img
															src="/static/images/menu-banner.jpg"
															alt="Menu banner"
															className="product-promo"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li>
									<a href="#" className="sf-with-ul">
										Pages
									</a>

									<ul>
										<li>
											<a href="cart.html">Shopping Cart</a>
										</li>
										<li>
											<a href="#">Checkout</a>
											<ul>
												<li>
													<a href="checkout-shipping.html">Checkout Shipping</a>
												</li>
												<li>
													<a href="checkout-shipping-2.html">Checkout Shipping 2</a>
												</li>
												<li>
													<a href="checkout-review.html">Checkout Review</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="#">Dashboard</a>
											<ul>
												<li>
													<a href="dashboard.html">Dashboard</a>
												</li>
												<li>
													<a href="my-account.html">My Account</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="about.html">About Us</a>
										</li>
										<li>
											<a href="#">Blog</a>
											<ul>
												<li>
													<a href="blog.html">Blog</a>
												</li>
												<li>
													<a href="single.html">Blog Post</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="contact.html">Contact Us</a>
										</li>
										<li>
											<a href="#" className="login-link">
												Login
											</a>
										</li>
										<li>
											<a href="forgot-password.html">Forgot Password</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#" className="sf-with-ul">
										Features
									</a>
									<ul>
										<li>
											<a href="#">Header Types</a>
										</li>
										<li>
											<a href="#">Footer Types</a>
										</li>
									</ul>
								</li>
								<li className="float-right">
									<a href="#">Special Offer!</a>
								</li>
								<li className="float-right">
									<a href="#">Buy Porto!</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
