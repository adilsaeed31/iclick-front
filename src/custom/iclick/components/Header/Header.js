import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavigationDesktop} from "custom/iclick/components/NavigationDesktop";
import AccountDropdown from "./../AccountDropdown/AccountDropdown";
import Logo from "custom/iclick/components/MiddleHeader/Logo";
import MiniCart from './../MiniCart/MiniCart';

class Header extends Component {
  static propTypes = {
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }

  render() {
    const {shop} = this.props;
    return (
      <header className="header">
        <div className="sticky-wrapper">
          <div className="header-bottom sticky-header fixed">
            <div className="container wide-header">
              <Logo shop={shop}/>
              <div className="menu-bar">
                <NavigationDesktop/>
              </div>
              <MiniCart/>
              <AccountDropdown/>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
