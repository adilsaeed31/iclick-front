import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationDesktop } from 'custom/iclick/components/NavigationDesktop';
import TopHeader from 'custom/iclick/components/TopHeader';
import MiddleHeader from 'custom/iclick/components/MiddleHeader';

class Header extends Component {
	static propTypes = {
		shop: PropTypes.shape({
			name: PropTypes.string
		}).isRequired,
		viewer: PropTypes.object
	};
	render() {
		const { shop } = this.props;
		return (
			<header className="header">
				<div className="header-top">
					<TopHeader />
				</div>
				<div className="header-middle">
					<MiddleHeader shop={shop} />
				</div>
				<div className="sticky-wrapper">
					<div className="header-bottom sticky-header">
						<div className="container">
							<NavigationDesktop />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
