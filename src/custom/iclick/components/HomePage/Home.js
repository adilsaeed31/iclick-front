import React, { Component, Fragment } from "react";
import BigBanner from "custom/iclick/components/BigBanner";
import AfterBanner from "custom/iclick/components/AfterBanner";
import InfoBox from "custom/iclick/components/InfoBox";
import BlackBanner from "custom/iclick/components/BlackBanner";
import Partners from "custom/iclick/components/Partners";
import MixGrid from "custom/iclick/components/MixGrid";
import ProductCarouselTab from "custom/iclick/components/ProductCarouselTab";
import Space from "custom/iclick/components/Space";
import TwoCol from "custom/iclick/components/TwoCol";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <BigBanner />
        <AfterBanner />
        <TwoCol />
        <ProductCarouselTab title="Featured Products" style={{ borderBottom: "none" }} />
        <ProductCarouselTab title="Latest Products" style={{ borderBottom: "none" }} />
        <ProductCarouselTab title="Hot Deals" />
        <InfoBox />
        <BlackBanner />
        <Partners />
        <MixGrid />
        <BlackBanner />
        <Space />
        <ProductCarouselTab title="Best Sellers" style={{ borderBottom: "none" }} />
        <ProductCarouselTab title="Last Chance" style={{ borderBottom: "none" }} />
        <Space />
      </Fragment>
    );
  }
}

export default Home;
