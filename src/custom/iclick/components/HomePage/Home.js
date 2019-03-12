import React, { Component, Fragment } from "react";
import BigBanner from "custom/iclick/components/BigBanner";
import AfterBanner from "custom/iclick/components/AfterBanner";
import InfoBox from "custom/iclick/components/InfoBox";
import BlackBanner from "custom/iclick/components/BlackBanner";
import Partners from "custom/iclick/components/Partners";
import MixGrid from "custom/iclick/components/MixGrid";
import Space from "custom/iclick/components/Space";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <BigBanner />
        <AfterBanner />
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
