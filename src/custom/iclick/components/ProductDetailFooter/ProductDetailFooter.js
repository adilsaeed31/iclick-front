import React from "react";
import { Tab, Tabs, NavItem, Nav } from "react-bootstrap";

const ProductDescription = (props) => (
  <div className="product-single-tabs">
    <Tab.Container id="left-tabs-example" defaultActiveKey="product-tab-desc">

      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="product-tab-desc">Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-tags">Tags</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-reviews">Reviews</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="product-tab-desc">
          <div className="product-desc-content">
            {props.description}
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-tags">
          <div className="product-tags-content">
            <form action="#">
              <h4>Add Your Tags:</h4>
              <div className="form-group">
                <input type="text" className="form-control form-control-sm" required="" />
                <input type="submit" className="btn btn-primary" value="Add Tags" />
              </div>
            </form>
            <p className="note">Use spaces to separate tags. Use single quotes for phrases.</p>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-reviews">
          <div className="product-reviews-content">
            <div className="collateral-box">
              <ul>
                <li>Be the first to review this product</li>
              </ul>
            </div>{/* End .collateral-box */}
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
                  <tbody />
                </table>
                <div className="form-group">
                  <label>Nickname <span className="required">*</span></label>
                  <input type="text" className="form-control form-control-sm" required />
                </div>{/* End .form-group */}
                <div className="form-group">
                  <label>Summary of Your Review <span className="required">*</span></label>
                  <input type="text" className="form-control form-control-sm" required />
                </div>{/* End .form-group */}
                <div className="form-group mb-2">
                  <label>Review <span className="required">*</span></label>
                  <textarea cols={5} rows={6} className="form-control form-control-sm" />
                </div>{/* End .form-group */}
                <input type="submit" className="btn btn-primary" defaultValue="Submit Review" />
              </form>
            </div>{/* End .add-product-review */}
          </div>
        </Tab.Pane>
      </Tab.Content>

    </Tab.Container>
  </div>
);

export default ProductDescription;
