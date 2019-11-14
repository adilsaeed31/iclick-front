import React from 'react';

const TopLinks = (props) => (
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
);

export default TopLinks;
