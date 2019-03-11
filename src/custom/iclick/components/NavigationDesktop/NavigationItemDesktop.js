import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import Link from 'custom/iclick/components/Link';

@inject('routingStore')
class NavigationItemDesktop extends Component {
	static propTypes = {
		navItem: PropTypes.object,
		routingStore: PropTypes.object
	};

	static defaultProps = {
		navItem: {},
		routingStore: {}
	};

	linkPath = (providedNavItem) => {
		const { navItem, routingStore } = this.props;

		const currentNavItem = providedNavItem || navItem;

		return routingStore.queryString !== ''
			? `/tag/${currentNavItem.slug}?${routingStore.queryString}`
			: `/tag/${currentNavItem.slug}`;
	};

	get hasSubNavItems() {
		const { navItem: { subTags } } = this.props;
		return Array.isArray(subTags) && subTags.length > 0;
	}

	renderSubNav(navItemGroup) {
		const menuItems = navItemGroup.subTags.map(({ node: navItem }, index) => (
			<Link route={`${this.linkPath(navItem)}`}>{navItem.name}</Link>
		));

		return menuItems;
	}

	renderPopover() {
		const { navItem: { subTags } } = this.props;

		if (subTags) {
			return (
				<ul style={{ display: 'none' }}>
					{subTags.map(({ node: navItemGroup }, index) => (
						<Fragment>
							<Link route={`${this.linkPath(navItemGroup)}`}>{navItemGroup.name}</Link>
							{Array.isArray(navItemGroup.subTags) && this.renderSubNav(navItemGroup)}
						</Fragment>
					))}
				</ul>
			);
		}

		return null;
	}

	render() {
		const { navItem } = this.props;
		return (
			<li>
				<Link className={this.hasSubNavItems && 'sf-with-ul'} route={this.linkPath(navItem)}>
					{navItem.name}
				</Link>
				{this.hasSubNavItems && this.renderPopover()}
			</li>
		);
	}
}

export default NavigationItemDesktop;
