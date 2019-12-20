import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import { NavigationItemDesktop } from "custom/iclick/components/NavigationDesktop";

@inject("navItems")
export class NavigationDesktop extends Component {
  static propTypes = {
    navItems: PropTypes.object
  };

  static defaultProps = {
    navItems: []
  };

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }

  render() {
    const { navItems } = this.props;

    if (navItems && navItems.items) {
      return (
        <nav className="main-nav">
          <ul className="menu sf-arrows sf-js-enabled">{navItems.items.map(this.renderNavItem)}</ul>
        </nav>
      );
    }

    // If navItems.items aren't available, skip rendering of navigation
    return null;
  }
}

export default NavigationDesktop;
