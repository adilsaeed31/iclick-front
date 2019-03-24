import React from "react";
import $ from "jquery";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(import("react-owl-carousel"));

class Partners extends React.Component {
  render() {
    return (
      <div className="partners-container">
        <div className="container">
          <div className="partners-carousel owl-carousel owl-theme">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div>
                <a href="/" className="partner">
                  <img src="/static/images/logos/1.png" alt="logo" />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
