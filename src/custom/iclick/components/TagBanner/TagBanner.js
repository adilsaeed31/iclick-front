import React from "react";
import PropTypes from "prop-types";

const TagBanner = ({ tag }) => {
  if (tag && tag.heroMediaUrl) {
    return <div className="banner banner-cat mb-3" style={{ backgroundImage: `url(${tag.heroMediaUrl})` }} />;
  }

  return (
    <div
      className="banner banner-cat mb-3"
      style={{ backgroundImage: "url('/static/images/banners/banner-fashion.jpg')" }}
    />
  );
};

TagBanner.propTypes = {
  tag: PropTypes.object
};

export default TagBanner;
