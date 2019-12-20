import React, {Component} from "react";

class TagFilters extends Component{
  render(){
    return(
      <aside className="sidebar-shop col-lg-3 order-lg-first">
          <div className="sidebar-wrapper">
            <div className="widget">
              <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Fashion</a>
              </h3>
              <div className="collapse show" id="widget-body-1">
                <div className="widget-body">
                  <ul className="cat-list">
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
              </h3>
              <div className="collapse show" id="widget-body-2">
                <div className="widget-body">
                  <form action="#">
                    <div className="price-slider-wrapper">
                      <div id="price-slider" />
                    </div>
                    <div className="filter-price-action">
                      <button type="submit" className="btn btn-dark">Filter</button>
                      <div className="filter-price-text">
                        <span id="filter-price-range" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Size</a>
              </h3>
              <div className="collapse show" id="widget-body-3">
                <div className="widget-body">
                  <ul className="config-size-list">
                    <li className="active"><a href="#">S</a></li>
                    <li><a href="#">M</a></li>
                    <li><a href="#">L</a></li>
                    <li><a href="#">XL</a></li>
                    <li><a href="#">2XL</a></li>
                    <li><a href="#">3XL</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Brand</a>
              </h3>
              <div className="collapse show" id="widget-body-4">
                <div className="widget-body">
                  <ul className="cat-list">
                    <li><a href="#">Adidas <span>18</span></a></li>
                    <li><a href="#">Camel <span>22</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
              </h3>
              <div className="collapse show" id="widget-body-6">
                <div className="widget-body">
                  <ul className="config-swatch-list">
                    <li>
                      <a href="#" style={{backgroundColor: '#4090d5'}} />
                    </li>
                    <li className="active">
                      <a href="#" style={{backgroundColor: '#f5494a'}} />
                    </li>
                    <li>
                      <a href="#" style={{backgroundColor: '#fca309'}} />
                    </li>
                    <li>
                      <a href="#" style={{backgroundColor: '#11426b'}} />
                    </li>
                    <li>
                      <a href="#" style={{backgroundColor: '#f0f0f0'}} />
                    </li>
                    <li>
                      <a href="#" style={{backgroundColor: '#3fd5c9'}} />
                    </li>
                    <li>
                      <a href="#" style={{backgroundColor: '#979c1c'}} />
                    </li>
                    <li>
                      <a href="#" style={{backgroundColor: '#7d5a3c'}} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget widget-featured">
              <h3 className="widget-title">Featured Proucts</h3>
              <div className="widget-body">
                <div className="owl-carousel widget-featured-products">
                  <div className="featured-col">
                    <div className="product product-sm">
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src="/static/images/products/small/product-1.jpg" alt="product" />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h2 className="product-title">
                          <a href="product.html">Ring</a>
                        </h2>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '80%'}} />
                          </div>
                        </div>
                        <div className="price-box">
                          <span className="product-price">$45.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-sm">
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src="/static/images/products/small/product-2.jpg" alt="product" />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h2 className="product-title">
                          <a href="product.html">Headphone</a>
                        </h2>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '20%'}} />
                          </div>
                        </div>
                        <div className="price-box">
                          <span className="old-price">$60.00</span>
                          <span className="product-price">$45.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-sm">
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src="/static/images/products/small/product-3.jpg" alt="product" />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h2 className="product-title">
                          <a href="product.html">Shoes</a>
                        </h2>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '100%'}} />
                          </div>
                        </div>
                        <div className="price-box">
                          <span className="product-price">$50.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="featured-col">
                    <div className="product product-sm">
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src="/static/images/products/small/product-4.jpg" alt="product" />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h2 className="product-title">
                          <a href="product.html">Watch-Black</a>
                        </h2>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '100%'}} />
                          </div>
                        </div>
                        <div className="price-box">
                          <span className="old-price">$50.00</span>
                          <span className="product-price">$35.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-sm">
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src="/static/images/products/small/product-5.jpg" alt="product" />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h2 className="product-title">
                          <a href="product.html">Watch-Gray</a>
                        </h2>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '60%'}} />
                          </div>
                        </div>
                        <div className="price-box">
                          <span className="product-price">$29.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="product product-sm">
                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src="/static/images/products/small/product-6.jpg" alt="product" />
                        </a>
                      </figure>
                      <div className="product-details">
                        <h2 className="product-title">
                          <a href="product.html">Hat</a>
                        </h2>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '20%'}} />
                          </div>
                        </div>
                        <div className="price-box">
                          <span className="product-price">$40.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget widget-block">
              <h3 className="widget-title">Custom HTML Block</h3>
              <h5>This is a custom sub-title.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>
            </div>
          </div>
        </aside>
    )
  }
}

export default TagFilters;
