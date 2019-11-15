import React, {Component} from "react";

class TagContainer extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default TagContainer;
