import React, {Component} from "react";

class ProductDetailGallery extends Component{
  render(){
    return(
      <div className="col-lg-7 col-md-6 product-single-gallery">
      <div className="product-slider-container product-item">
        <div className="product-single-carousel owl-carousel owl-theme">
          <div className="product-item">
            <img className="product-single-image" src="/static/images/products/zoom/product-1.jpg" data-zoom-image="/static/images/products/zoom/product-1-big.jpg" />
          </div>
        </div>
        <span className="prod-full-screen">
          <i className="icon-plus" />
        </span>
      </div>
      <div className="prod-thumbnail row owl-dots" id="carousel-custom-dots">
        <div className="col-3 owl-dot">
          <img src="/static/images/products/zoom/product-1.jpg" />
        </div>
      </div>
    </div>
    )
  }
}

export default ProductDetailGallery;
