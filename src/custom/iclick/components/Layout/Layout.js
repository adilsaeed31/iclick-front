import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "custom/iclick/components/Header";
import Footer from "custom/iclick/components/Footer";

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    viewer: PropTypes.object
  };

  state = {
    isMarkerShown: true,
    isVisible: false
  };

  handleEnter = () => {
    this.setState({ isVisible: true });
  };

  handleLeave = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { children, shop, viewer } = this.props;
    const { isVisible } = this.state;
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <Header shop={shop} viewer={viewer} />
          <main className="main">{children}</main>
          <Footer
            isVisible={isVisible}
            isMarkerShown={true}
            handleEnter={this.handleEnter}
            handleLeave={this.handleLeave}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
