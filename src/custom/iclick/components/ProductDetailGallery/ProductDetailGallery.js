import React, { Fragment } from "react";
// import OwlCarousel from "react-owl-carousel";

import PropTypes from "prop-types";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
class ProductCarousel extends React.Component {
  static propTypes = {
    mediaItems: PropTypes.arrayOf(PropTypes.object)
  }

  componentDidMount() {
    $(this.thumbnails).children(".owl-dot").eq(0).addClass("active");
  }

  owl;
  onDotClick = (el) => {
    if (process.browser) {
      this.owl.to($(el.currentTarget).index());
    }
  }
  render() {
    if (process.browser) {
      return (<Fragment>
        <div className="product-slider-container product-item">
          <OwlCarousel
            className="product-single-carousel owl-theme"
            nav
            navText={['<i class="icon-angle-left" />', '<i class="icon-angle-right" />']}
            items={1}
            dots={false}
            onInitialized={(el) => { this.owl = el.relatedTarget; }}
            onChanged = {(el) => {
              const $dots = $(this.thumbnails).children(".owl-dot");
              $dots.removeClass("active");
              $dots.eq(+el.item.index).addClass("active");
            }}
          >
            {this.props.mediaItems.map((media) =>
              <div className="product-item">
                <img
                  alt={media.URLs.medium}
                  className="product-single-image"
                  src={media.URLs.medium}
                  data-zoom-image={media.URLs.large}
                />
              </div>)}
          </OwlCarousel>

          {/* <span className="prod-full-screen">
            <i className="icon-plus" />
          </span> */}
        </div>
        <div className="prod-thumbnail row owl-dots" id="carousel-custom-dots" ref={(el) => { this.thumbnails = el; }}>
          {this.props.mediaItems.map((media) =>
            <div className="col-3 owl-dot" onClick={this.onDotClick} role="link" tabIndex={0}>
              <img alt="" src={media.URLs.thumbnail} />
            </div>)}

        </div>
      </Fragment>);
    }
    return null;
  }
}

export default ProductCarousel;
