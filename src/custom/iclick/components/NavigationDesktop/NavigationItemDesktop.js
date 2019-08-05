import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import Link from "custom/iclick/components/Link";

@inject("routingStore")
class NavigationItemDesktop extends Component {
  static propTypes = {
    navItem: PropTypes.object,
    routingStore: PropTypes.object
  }

  static defaultProps = {
    navItem: {},
    routingStore: {}
  }

  state = {
    show: "megamenu-container"
  }

  linkPath = (providedNavItem) => {
    const { navItem, routingStore } = this.props;

    const currentNavItem = providedNavItem || navItem;

    return routingStore.queryString !== ""
      ? `/tag/${currentNavItem.slug}?${routingStore.queryString}`
      : `/tag/${currentNavItem.slug}`;
  }

  get hasSubNavItems() {
    const {
      navItem: { subTags }
    } = this.props;
    return Array.isArray(subTags) && subTags.length > 0;
  }

  renderSubNav(navItemGroup) {
    const menuItems = navItemGroup.subTags.map(({ node: navItem }, index) => (
      <li key={index}>
        <Link route={`${this.linkPath(navItem)}`}>{navItem.navigationItem.data.contentForLanguage}</Link>
      </li>
    ));

    return menuItems;
  }

  renderPopover() {
    const {
      navItem: { subTags }
    } = this.props;
    if (subTags) {
      return (
        <div className="megamenu">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {subTags.map(({ node: navItemGroup }, index) => (
                  <div className="col-lg-3" key={index}>
                    <div className="menu-title">
                      <Link route={`${this.linkPath(navItemGroup)}`}>{navItemGroup.name}</Link>
                    </div>

                    <ul>{Array.isArray(navItemGroup.subTags) && this.renderSubNav(navItemGroup)}</ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner">
                <a href="/">
                  <img src="/static/images/menu-banner.jpg" alt="Menu banner" className="product-promo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  handleMouseOver = () => {
    this.setState({ show: "megamenu-container show" });
  }

  handleMouseOut = () => {
    this.setState({ show: "megamenu-container" });
  }

  render() {
    const { navItem } = this.props;
    const { show } = this.state;
    return (
      <li onMouseOver={this.handleMouseOver} className={show} onMouseOut={this.handleMouseOut}>
         <Link className={this.hasSubNavItems ? "sf-with-ul" : ""} route={this.linkPath(navItem)}>
          {navItem.navigationItem.data.contentForLanguage}
          </Link>
        {this.hasSubNavItems && this.renderPopover()}
      </li>
    );
  }
}

export default NavigationItemDesktop;
