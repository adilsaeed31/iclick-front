import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import { NavigationItemDesktop } from "custom/iclick/components/NavigationDesktop";

@inject("navItems")
export class NavigationDesktop extends Component {
  static propTypes = {
    navItems: PropTypes.array
  }

  static defaultProps = {
    navItems: []
  }

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }

  render() {
    const { navItems } = this.props;
    return (
      <nav className="main-nav">
        <ul className="menu sf-arrows sf-js-enabled">{navItems.items.map(this.renderNavItem)}</ul>
      </nav>
    );
  }
}

export default NavigationDesktop;
