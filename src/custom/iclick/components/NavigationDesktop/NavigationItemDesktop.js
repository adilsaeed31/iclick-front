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

	state = {
		show: ''
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
			<Link key={index} route={`${this.linkPath(navItem)}`}>
				{navItem.name}
			</Link>
		));

		return menuItems;
	}

	renderPopover() {
		const { navItem: { subTags } } = this.props;
		if (subTags) {
			return (
				<ul>
					{subTags.map(({ node: navItemGroup }, index) => (
						<li key={index}>
							<Link route={`${this.linkPath(navItemGroup)}`}>{navItemGroup.name}</Link>
							{Array.isArray(navItemGroup.subTags) && this.renderSubNav(navItemGroup)}
						</li>
					))}
				</ul>
			);
		}

		return null;
	}

	handleMouseOver = () => {
		this.setState({ show: 'show' });
	};


	handleMouseOut = () => {
		this.setState({ show: '' });
	};

	render() {
		const { navItem } = this.props;
		const { show } = this.state;
		return (
			<li onMouseOver={this.handleMouseOver} className={show} onMouseOut={this.handleMouseOut}>
				<Link className={this.hasSubNavItems ? 'sf-with-ul' : ''} route={this.linkPath(navItem)}>
					{navItem.name}
				</Link>
				{this.hasSubNavItems && this.renderPopover()}
			</li>
		);
	}
}

export default NavigationItemDesktop;
