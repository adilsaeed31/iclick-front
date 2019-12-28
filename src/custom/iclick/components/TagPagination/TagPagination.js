import React, { Component } from "react";
import PageSizeSelector from "custom/iclick/components/PageSizeSelector";
import PageStepper from "custom/iclick/components/PageStepper";

class TagPagination extends Component {
  render() {
    const { pageInfo, pageSize, setPageSize } = this.props;
    return (
      <nav className="toolbox toolbox-pagination">
        <PageSizeSelector
          pageSize={pageSize}
          onChange={setPageSize}
          labelValue={"Show:"}
          classes={"toolbox-item toolbox-show"}
          selectorName={"count"}
        />
        {pageInfo && <PageStepper pageInfo={pageInfo} />}
      </nav>
    );
  }
}

export default TagPagination;
