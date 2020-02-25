import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "custom/iclick/components/Select";
import { PAGE_SIZES } from "lib/utils/pageSizes";

const SELECTOR_OPTIONS = [
  {
    name: "5 Products",
    value: PAGE_SIZES._5
  },
  {
    name: "10 Products",
    value: PAGE_SIZES._10
  },
  {
    name: "20 Products",
    value: PAGE_SIZES._20
  },
  {
    name: "60 Products",
    value: PAGE_SIZES._60
  },
  {
    name: "100 Products",
    value: PAGE_SIZES._100
  }
];

class PageSizeSelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { pageSize,labelValue,classes,selectorName } = this.props;

    return (
      <div className={classes}>
        <label>{labelValue}</label>
        <div className="select-custom">
          <Select 
            selectorName = {selectorName}
            value={pageSize}
            options={SELECTOR_OPTIONS}
            inputProps={{
              name: "pageSize",
              id: "page-size"
            }}
            onChange={this.handleChange}
          />
        </div>
        {/* <a href="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></a> */}
      </div>
    );
  }
}

export default PageSizeSelector;
