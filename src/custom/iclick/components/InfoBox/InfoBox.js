import React from "react";

const InfoBox = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="feature-box">
          <i className="icon-star" />

          <div className="feature-box-content">
            <h3>Dedicated Service</h3>
            <p>Consult our specialists for help with an order, customization, or design advice</p>
            <a href="/" className="btn btn-sm btn-outline-dark">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-box">
          <i className="icon-reply" />

          <div className="feature-box-content">
            <h3>Free returns</h3>
            <p>We stand behind our goods and services and want you to be satisfied with them.</p>
            <a href="/" className="btn btn-sm btn-outline-dark">
              Return Policy
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-box">
          <i className="icon-paper-plane" />

          <div className="feature-box-content">
            <h3>international shipping</h3>
            <p>Currently over 50 countries qualify for express international shipping.</p>
            <a href="/" className="btn btn-sm btn-outline-dark">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InfoBox;
