import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "custom/iclick/components/Select";


class SortBySelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
  }

  componentDidMount(){
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    
    const { sortBy,labelValue,classes,selectorName,options } = this.props;
    return (
      <div className={classes}>
        <label>{labelValue}</label>
        <div className="select-custom">
          <Select 
            selectorName = {selectorName}
            value={sortBy}
            options={options}
            inputProps={{
              name: "sortBy",
              id: "sort-by"
            }}
            onChange={this.handleChange}
          />
        </div>
        <a href="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></a>
      </div>
      
    );
  }
}

export default SortBySelector;
