import React from "react";
import MyCarousel from "custom/iclick/components/MyCarousel";

class Partners extends React.Component {
  render() {
    return (
      <div className="partners-container">
        <div className="container">
          <MyCarousel className="partners-carousel owl-theme" loop items={5}>
            <div>
              <a href="/" className="partner">
                <img src="/static/images/logos/1.png" alt="logo" />
              </a>
            </div>
            <div>
              <a href="/" className="partner">
                <img src="/static/images/logos/1.png" alt="logo" />
              </a>
            </div>
            <div>
              <a href="/" className="partner">
                <img src="/static/images/logos/1.png" alt="logo" />
              </a>
            </div>
            <div>
              <a href="/" className="partner">
                <img src="/static/images/logos/1.png" alt="logo" />
              </a>
            </div>
            <div>
              <a href="/" className="partner">
                <img src="/static/images/logos/1.png" alt="logo" />
              </a>
            </div>
            <div>
              <a href="/" className="partner">
                <img src="/static/images/logos/1.png" alt="logo" />
              </a>
            </div>
          </MyCarousel>
        </div>
      </div>
    );
  }
}

export default Partners;
