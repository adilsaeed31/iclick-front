import React from "react";
import MyCarousel from "custom/iclick/components/MyCarousel";

const BigBanner = () => (
  <div className="home-slider-container">
    <MyCarousel className="home-slider" items={1}>
      <div className="home-slide">
        <div className="slide-bg" data-src="/static/images/slider/slide-1.jpg" />
        <div className="home-slide-content container">
          <div className="row">
            <div className="col-md-6 offset-md-6 col-lg-5 offset-lg-7">
              <h4>Premium</h4>
              <h1>Headphones</h1>
              <h3>
                Only <strong>199 AED</strong>
              </h3>
              <a href="category.html" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-slide">
        <div className="slide-bg" data-src="/static/images/slider/slide-2.jpg" />
        <div className="home-slide-content container">
          <h4>Amazing</h4>
          <h1>Micro Drones</h1>
          <h3>
            Only <strong>399 AED</strong>
          </h3>
          <a href="category.html" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </MyCarousel>
  </div>
);
export default BigBanner;
