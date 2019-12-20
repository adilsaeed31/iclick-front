import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "custom/iclick/components/Select";

const SORT_BY = [
  {
    name: "Newest",
    value: "updatedAt-desc"
  },
  {
    name: "Price: low to high",
    value: "minPrice-asc"
  },
  {
    name: "Price: high to low",
    value: "minPrice-desc"
  }
]

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
    
    const { sortBy,labelValue,classes,selectorName } = this.props;
    return (
      <div className={classes}>
        <label>{labelValue}</label>
        <div className="select-custom">
          <Select 
            selectorName = {selectorName}
            value={sortBy}
            options={SORT_BY}
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
