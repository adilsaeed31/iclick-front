import React, {Component} from "react";
import ProductDetailReview from "custom/iclick/components/ProductDetailReview"

class ProductDetailFooter extends Component{
  render(){
    return(
      <div className="product-single-tabs">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="product-tab-desc" data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="product-tab-tags" data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="product-tab-reviews" data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
            <div className="product-desc-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
              <ul>
                <li><i className="icon-ok" />Any Product types that You want - Simple, Configurable</li>
                <li><i className="icon-ok" />Downloadable/Digital Products, Virtual Products</li>
                <li><i className="icon-ok" />Inventory Management with Backordered items</li>
              </ul>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
          <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
            <div className="product-tags-content">
              <form action="#">
                <h4>Add Your Tags:</h4>
                <div className="form-group">
                  <input type="text" className="form-control form-control-sm" required />
                  <input type="submit" className="btn btn-primary" defaultValue="Add Tags" />
                </div>
              </form>
              <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
            </div>
          </div>
          <ProductDetailReview/>
        </div>
      </div>
    )
  }
}

export default ProductDetailFooter;
