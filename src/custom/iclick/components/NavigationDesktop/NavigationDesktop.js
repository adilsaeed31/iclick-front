import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import { NavigationItemDesktop } from "custom/iclick/components/NavigationDesktop";
import Logo from "custom/iclick/components/MiddleHeader/Logo";
import CartDropDown from "custom/iclick/components/MiddleHeader/CartDropDown";

@inject("navItems")
export class NavigationDesktop extends Component {
  static propTypes = {
    navItems: PropTypes.array,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }

  static defaultProps = {
    navItems: []
  }

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem.node} />;
  }

  render() {
    const { navItems, shop } = this.props;

    return (
      <Fragment>
        <Logo shop={shop} />
        <CartDropDown />
        <nav className="main-nav">
          <ul className="menu sf-arrows sf-js-enabled">{navItems.map(this.renderNavItem)}</ul>
        </nav>
      </Fragment>
    );
  }
}

export default NavigationDesktop;
