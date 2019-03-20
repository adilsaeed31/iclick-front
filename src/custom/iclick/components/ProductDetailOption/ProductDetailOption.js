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

  handleOnClick = () => {
    this.props.onClick && this.props.onClick(this.props.option);
  }

  render() {
    const { option } = this.props;

    return (
      <ButtonBase disableRipple onClick={this.handleOnClick}>
        <Typography component="span" variant="body1">
          {option.optionTitle}
        </Typography>
      </ButtonBase>
    );
  }
}
