import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

class MyCarousel extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  componentDidMount() {}

  render() {
    // const { children } = this.props;
    return (
      // eslint-disable-next-line no-return-assign
      <div className="home-slider owl-carousel">
        <Carousel>
          <div className="home-slide">
            <div className="slide-bg owl-lazy" data-src="/static/images/slider/slide-1.jpg" />
            <div className="home-slide-content container">
              <div className="row">
                <div className="col-md-6 offset-md-6 col-lg-5 offset-lg-7">
                  <h4>Premium</h4>
                  <h1>Headphones</h1>
                  <h3>
                    Only <strong>199 USD</strong>
                  </h3>
                  <a href="category.html" className="btn btn-primary">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="home-slide">
            <div className="slide-bg owl-lazy" data-src="/static/images/slider/slide-2.jpg" />
            <div className="home-slide-content container">
              <h4>Amazing</h4>
              <h1>Micro Drones</h1>
              <h3>
                Only <strong>399 USD</strong>
              </h3>
              <a href="category.html" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;
