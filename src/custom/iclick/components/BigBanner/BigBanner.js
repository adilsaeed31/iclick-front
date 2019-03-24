import React from "react";
import MyCarousel from "custom/iclick/components/MyCarousel";

const BigBanner = () => (
  <MyCarousel showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={true}>
    <div className="home-slider-container">
      <div className="home-slider">
        <img src="/static/images/slider/slide-1.jpg" alt="1" />
      </div>
    </div>

    <div className="home-slider-container">
      <div className="home-slider">
        <img src="/static/images/slider/slide-2.jpg" alt="1" />
      </div>
    </div>
  </MyCarousel>
);
export default BigBanner;
