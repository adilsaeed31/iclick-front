import React, {Component} from "react";
import PageSizeSelector from "custom/iclick/components/PageSizeSelector"
import PageStepper from "custom/iclick/components/PageStepper"

class TagPagination extends Component{
  render(){
    const { pageCursor } = this.props;
    return(
      <nav className="toolbox toolbox-pagination">
        <PageSizeSelector  
          sortBy={this.props.sortBy}  
          labelValue={"Show:"}
          classes={"toolbox-item toolbox-show"}
          selectorName={"count"}
      />
      <PageStepper pageInfo={pageCursor}/>
      </nav> 
    )
  }
}

export default TagPagination;
