import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavigationDesktop } from "custom/iclick/components/NavigationDesktop";
import TopHeader from "custom/iclick/components/TopHeader";
import MiddleHeader from "custom/iclick/components/MiddleHeader";

class Header extends Component {
  static propTypes = {
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }

  state = {
    headerCls: "header-bottom sticky-header"
  }

  _mounted = false

  componentDidMount() {
    this._mounted = true;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    this._mounted = false;
    window.removeEventListener("scroll", this.handleScroll, { passive: true });
  }

  handleScroll = () => {
    if (this._mounted) {
      if (this.scrollCalc() >= 8) {
        this.setState({ headerCls: "header-bottom sticky-header fixed" });
        return;
      }

      this.setState({ headerCls: "header-bottom sticky-header" });
    }
  }

  scrollCalc = () => {
    const getDocHeight = () => {
      const getDOM = document;
      return Math.max(
        getDOM.body.scrollHeight,
        getDOM.documentElement.scrollHeight,
        getDOM.body.offsetHeight,
        getDOM.documentElement.offsetHeight,
        getDOM.body.clientHeight,
        getDOM.documentElement.clientHeight
      );
    };

    const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    const docHeight = getDocHeight();
    const scrollTop =
      window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.floor((scrollTop / trackLength) * 100);

    return pctScrolled === undefined ? null : pctScrolled;
  }

  render() {
    const { shop } = this.props;
    const { headerCls } = this.state;
    return (
      <header className="header">
        <div className="header-top">
          <TopHeader />
        </div>
        <div className="header-middle">
          <MiddleHeader shop={shop} />
        </div>
        <div className="sticky-wrapper">
          <div className={headerCls}>
            <div className="container">
              <NavigationDesktop shop={shop} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
