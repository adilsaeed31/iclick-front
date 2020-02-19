import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ColorOption extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    option: PropTypes.object
  }

  handleOnClick = (e) => {
    e.preventDefault();
    this.props.onClick && this.props.onClick(this.props.option);
  }

  render() {
    const { option, isActive } = this.props;
    return (
      <li className={isActive ? "active" : ""} onClick={this.handleOnClick}>
        <a href="#" style={{ backgroundColor: option.optionTitle }} />
      </li>
    );
  }
}
