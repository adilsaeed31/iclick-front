import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

export default class ProductDetailOption extends Component {
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
      <button onClick={this.handleOnClick} className={`btn btn-sm my-1 mx-1 ${isActive ? "btn-primary" : "btn-outline-primary"}`}>
        <span>{option.optionTitle}</span>
      </button>
      // <ButtonBase disableRipple onClick={this.handleOnClick}>
      //   <Typography component="div" variant="title" align="center">
      //     {option.optionTitle}
      //   </Typography>
      // </ButtonBase>
    );
  }
}
