import React, { Component, Fragment } from "react";
import BigBanner from "custom/iclick/components/BigBanner";
import AfterBanner from "custom/iclick/components/AfterBanner";
import InfoBox from "custom/iclick/components/InfoBox";
import BlackBanner from "custom/iclick/components/BlackBanner";
import Partners from "custom/iclick/components/Partners";
import MixGrid from "custom/iclick/components/MixGrid";
import HomeProductTabs from "custom/iclick/components/HomeProductTabs";
import Space from "custom/iclick/components/Space";
import TwoCol from "custom/iclick/components/TwoCol";
import Carousel from "custom/iclick/components/Carousel";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <BigBanner />
        <AfterBanner />
        <TwoCol />
        <HomeProductTabs />
        <InfoBox />
        <BlackBanner />
        <Partners />
        <MixGrid />
        <Space />
      </Fragment>
    );
  }
}

export default Home;
