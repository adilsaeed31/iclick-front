import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "custom/iclick/components/Header";
import Footer from "custom/iclick/components/Footer";
import AlertDialogBox from "custom/iclick/components/AlertDialogBox";

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    router: PropTypes.shape({
      asPath: PropTypes.string.isRequired
    }),
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    viewer: PropTypes.object
  };

  state = {
    open: false
  };

  newsLetter = (event) => {
    event.preventDefault();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { children, shop, viewer } = this.props;

    return (
      <React.Fragment>
        <div className="page-wrapper">
          <Header shop={shop} viewer={viewer} />
          <main className="main">{children}</main>
          <Footer newsLetter={this.newsLetter} />
          <AlertDialogBox open={open} handleClose={this.handleClose} />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
