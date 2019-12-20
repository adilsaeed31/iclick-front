import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Divider extends Component {
  static propTypes = {
    label: PropTypes.string
  }

  render() {
    const { label } = this.props;

    return (
      <div>
        <hr />
        {!!label && <div component="span">{label}</div>}
        <hr />
      </div>
    );
  }
}
