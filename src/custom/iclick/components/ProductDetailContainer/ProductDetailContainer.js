import React, {Component} from "react";

class ProductDetailContainer extends Component{
  render(){
    return(
      <main className="main">
      <div className="container">
        {this.props.children}
        </div>
    </main>
    )
  }
}

export default ProductDetailContainer;
