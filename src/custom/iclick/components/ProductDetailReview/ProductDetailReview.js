import React, {Component} from "react";

class ProductDetailReview extends Component{
  render(){
    return(
      <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
        <div className="product-reviews-content">
          <div className="collateral-box">
            <ul>
              <li>Be the first to review this product</li>
            </ul>
          </div>
          <div className="add-product-review">
            <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
            <p>How do you rate this product? *</p>
            <form action="#">
              <table className="ratings-table">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>1 star</th>
                    <th>2 stars</th>
                    <th>3 stars</th>
                    <th>4 stars</th>
                    <th>5 stars</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quality</td>
                    <td>
                      <input type="radio" name="ratings[1]" id="Quality_1" defaultValue={1} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ratings[1]" id="Quality_2" defaultValue={2} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ratings[1]" id="Quality_3" defaultValue={3} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ratings[1]" id="Quality_4" defaultValue={4} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="ratings[1]" id="Quality_5" defaultValue={5} className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td>
                      <input type="radio" name="value[1]" id="Value_1" defaultValue={1} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="value[1]" id="Value_2" defaultValue={2} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="value[1]" id="Value_3" defaultValue={3} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="value[1]" id="Value_4" defaultValue={4} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="value[1]" id="Value_5" defaultValue={5} className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>
                      <input type="radio" name="price[1]" id="Price_1" defaultValue={1} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="price[1]" id="Price_2" defaultValue={2} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="price[1]" id="Price_3" defaultValue={3} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="price[1]" id="Price_4" defaultValue={4} className="radio" />
                    </td>
                    <td>
                      <input type="radio" name="price[1]" id="Price_5" defaultValue={5} className="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label>Nickname <span className="required">*</span></label>
                <input type="text" className="form-control form-control-sm" required />
              </div>
              <div className="form-group">
                <label>Summary of Your Review <span className="required">*</span></label>
                <input type="text" className="form-control form-control-sm" required />
              </div>
              <div className="form-group mb-2">
                <label>Review <span className="required">*</span></label>
                <textarea cols={5} rows={6} className="form-control form-control-sm" defaultValue={""} />
              </div>
              <input type="submit" className="btn btn-primary" defaultValue="Submit Review" />
            </form>
          </div>
        </div>
      </div>  
    )
  }
}

export default ProductDetailReview;
