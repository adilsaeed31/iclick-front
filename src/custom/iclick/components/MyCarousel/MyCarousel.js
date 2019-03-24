import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class MyCarousel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, ...rest } = this.props;
    return <Carousel {...rest}>{children}</Carousel>;
  }
}

export default MyCarousel;
