import React from 'react';

const Compare = (props) => (
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
);

export default Compare;
