import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  static propTypes = {
    inputProps: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  renderOptions() {
    const { options } = this.props;

    return options.map((option, key) => <div key={key}>{option.name}</div>);
  }

  handleChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    return <div>{this.renderOptions()}</div>;
  }
}

export default Select;
