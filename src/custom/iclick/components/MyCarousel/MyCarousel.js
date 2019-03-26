import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

class MyCarousel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    isLoaded: false
  }
  componentDidMount() {
    if (process.browser) {
      window.$ = $;
      window.jQuery = $;
      this.hasLoaded();
    }
  }

  hasLoaded = () => {
    this.setState({ isLoaded: true });
  }

  render() {
    const { children, ...rest } = this.props;
    const { isLoaded } = this.state;

    if (isLoaded) {
      return (
        <OwlCarousel
          nav
          dots={false}
          navText={['<i class="icon-left-open-big"></i>', '<i class="icon-right-open-big"></i>']}
          {...rest}
        >
          {children}
        </OwlCarousel>
      );
    }
    return <div />;
  }
}

export default MyCarousel;
