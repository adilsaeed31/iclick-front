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
  

    return options.map((option, key) => <option value={option.value} key={key}>{option.name}</option>);
  }

  handleChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    const { selectorName } = this.props
    return (
      <select 
        name = {selectorName} 
        className="form-control">
          {this.renderOptions()}
      </select>
    );
  }
}

export default Select;
