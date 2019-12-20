import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="loading-overlay">
        <div className="bounce-loader">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    );
  }
}

export default Loader;
