import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Logo from "./Logo";
import Contact from "./Contact";
import CartDropDown from "./CartDropDown";

class MiddleHeader extends React.Component {
  static propTypes = {
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }

  render() {
    const { shop } = this.props;
    return (
      <div className="container">
        <div className="header-left">
          <Search />
        </div>
        <div className="header-center">
          <Logo shop={shop} />
        </div>
        <div className="header-right">
          <Contact />
          <CartDropDown />
        </div>
      </div>
    );
  }
}

export default MiddleHeader;
