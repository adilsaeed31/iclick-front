import React, {Component} from "react";

class TagBanner extends Component{
  render(){
    return(
      <div className="banner banner-cat mb-3" style={{backgroundImage: 'url("static/images/banners/banner-fashion.jpg")'}}>
        <div className="banner-content container offset-1">
          <h2 className="banner-subtitle">check out over <span>200+</span></h2>
          <h1 className="banner-title">
            Coasts &amp; Jackets For Woman
          </h1>
          <a href="#" className="btn btn-primary">Shop Now</a>
        </div>
      </div>
    )
  }
}

export default TagBanner;
