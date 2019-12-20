import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavigationDesktop } from "custom/iclick/components/NavigationDesktop";
import AccountDropdown from "custom/iclick/components/AccountDropdown/AccountDropdown";
import Logo from "custom/iclick/components/MiddleHeader/Logo";
import MiniCart from "custom/iclick/components/MiniCart/MiniCart";

class Header extends Component {
  static propTypes = {
    shop: PropTypes.shape({
      name: PropTypes.string
    })
  };

  render() {
    const {
      shop: { name }
    } = this.props;

    return (
      <header className="header">
        <div className="sticky-wrapper">
          <div className="header-bottom sticky-header fixed">
            <div className="container wide-header">
              <Logo name={name} />
              <div className="menu-bar">
                <NavigationDesktop />
              </div>
              <MiniCart />
              <AccountDropdown />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
