/* eslint-disable array-callback-return */
/* eslint-disable function-paren-newline */
/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import Link from "components/Link";

@inject("routingStore")
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
    show: "megamenu-container"
  };

  linkPath = (providedNavItem) => {
    const { navItem, routingStore } = this.props;

    const currentNavItem = (providedNavItem && providedNavItem.navigationItem) || navItem.navigationItem;

    return routingStore.queryString !== ""
      ? `${currentNavItem.data.url}?${routingStore.queryString}`
      : `${currentNavItem.data.url}`;
  };

  renderSubNavItems = (items) => {
    const MenuItems = [];

    items.map((item, index) => {
      const {
        navigationItem: {
          data: { contentForLanguage, classNames: navigationItemClassNames, isUrlRelative, shouldOpenInNewWindow }
        }
      } = item;

      MenuItems.push(
        <div className="menu-title" key={index}>
          <Link
            isUrlAbsolute={!isUrlRelative}
            className={navigationItemClassNames}
            key={index}
            route={this.linkPath(item)}
            href={this.linkPath(item)}
            shouldOpenInNewWindow={shouldOpenInNewWindow}
          >
            {contentForLanguage}
          </Link>
        </div>
      );
    });

    return MenuItems;
  };

  renderPopover() {
    const {
      navItem: { items }
    } = this.props;

    if (items) {
      return (
        <div className="megamenu">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-3">{this.renderSubNavItems(items)}</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner">
                <img src="/static/images/menu-banner.jpg" alt="Menu banner" className="product-promo" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  handleOnFocus = () => {
    this.setState({ show: "megamenu-container show" });
  };

  handleOnBlur = () => {
    this.setState({ show: "megamenu-container" });
  };

  render() {
    const { navItem } = this.props;
    const { show } = this.state;
    return (
      <li className={show} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>
        <Link route={this.linkPath(navItem)}>{navItem.navigationItem.data.contentForLanguage}</Link>
        {this.renderPopover()}
      </li>
    );
  }
}

export default NavigationItemDesktop;
