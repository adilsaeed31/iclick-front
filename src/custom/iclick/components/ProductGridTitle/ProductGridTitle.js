import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProductGridTitle extends Component {
  static propTypes = {
    displayTitle: PropTypes.string
  };

  static defaultProps = {
    displayTitle: ""
  };

  render() {
    const { displayTitle } = this.props;

    if (!displayTitle) return null;

    return <h2>{displayTitle}</h2>;
  }
}
