import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "custom/iclick/components/Select";

const SORT_BY = [
  {
    name: "Newest",
    value: "updatedAt"
  },
  {
    name: "Price: low to high",
    value: "minPrice-asc"
  },
  {
    name: "Price: high to low",
    value: "minPrice-desc"
  }
];

class SortBySelector extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
  }

  componentDidMount() {
  }

  state = {
    sortBy: "updatedAt",
    direction: "desc"
  }

  handleChange = (event) => {
    this.setState({
      sortBy: event.target.value,
      direction: event.target.value === "minPrice-asc" ? "asc" : event.target.value === "minPrice-desc" ? "desc" : this.state.direction
    }, () => {
      this.props.onChange(this.getSortBy());
    });
  }

  getSortBy() {
    const { sortBy, direction } = this.state;
    if (sortBy === "minPrice-asc" || sortBy === "minPrice-desc") {
      return sortBy;
    }
    return `${sortBy}-${direction}`;
  }

  handleDirection = (e) => {
    e.preventDefault();
    this.setState({
      direction: this.state.direction === "desc" ? "asc" : "desc"
    }, () => {
      this.props.onChange(this.getSortBy());
    });
  }

  render() {
    const { sortBy, labelValue, classes, selectorName } = this.props;
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
        <a
          href="#"
          className={`sorter-btn btn-${this.state.direction}`}
          title="Set Ascending Direction"
          onClick={this.handleDirection}
        >
          <span className="sr-only">Set Ascending Direction</span>
        </a>
      </div>

    );
  }
}

export default SortBySelector;
