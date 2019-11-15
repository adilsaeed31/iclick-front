import React, {Component} from "react";
import SortBySelector from "custom/iclick/components/SortBySelector"
import PageSizeSelector from "custom/iclick/components/PageSizeSelector"

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


class TagSort extends Component{

  render(){    
    return(
      <nav className="toolbox">
      <div className="toolbox-left">
        <SortBySelector
          sortBy={this.props.sortBy}  
          labelValue={"Sort By:"}
          classes={"toolbox-item toolbox-sort"}
          selectorName={"orderby"}
          options={SORT_BY}
        />
      </div>
      <PageSizeSelector  
          sortBy={this.props.sortBy}  
          labelValue={"Show:"}
          classes={"toolbox-item toolbox-show"}
          selectorName={"count"}
      />
      <div className="layout-modes">
        <a href="category.html" className="layout-btn btn-grid active" title="Grid">
          <i className="icon-mode-grid" />
        </a>
        <a href="category-list.html" className="layout-btn btn-list" title="List">
          <i className="icon-mode-list" />
        </a>
      </div>
    </nav>
    
    )
  }
}

export default TagSort;
