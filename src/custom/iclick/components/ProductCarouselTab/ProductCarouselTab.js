import React from "react";
import PropTypes from "prop-types";
import MyCarousel from "custom/iclick/components/MyCarousel";

const ProductCarouselTab = ({ title, style }) => (
  <div className="home-product-tabs">
    <div className="container">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="featured-products-tab"
            data-toggle="tab"
            href="#featured-products"
            role="tab"
            aria-controls="featured-products"
            aria-selected="true"
          >
            {title}
          </a>
        </li>
      </ul>
    </div>
    <div className="tab-content" style={style}>
      <div
        className="tab-pane fade show active"
        id="featured-products"
        role="tabpanel"
        aria-labelledby="featured-products-tab"
      >
        <div className="container">
          <MyCarousel className="tab-products-carousel owl-theme" loop items={5}>
            <div className="product">
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img src="/static/images/products/product-10.jpg" alt="product" />
                </a>
                <a href="ajax/product-quick-view.html" className="btn-quickview">
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "80%" }} />
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">Wireless Headset</a>
                </h2>
                <div className="price-box">
                  <span className="product-price">$28.00</span>
                </div>

                <div className="product-action">
                  <a href="/" className="paction add-wishlist" title="Add to Wishlist">
                    <span>Add to Wishlist</span>
                  </a>

                  <a href="product.html" className="paction add-cart" title="Add to Cart">
                    <span>Add to Cart</span>
                  </a>

                  <a href="/" className="paction add-compare" title="Add to Compare">
                    <span>Add to Compare</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img src="/static/images/products/product-8.jpg" alt="product" />
                </a>
                <a href="ajax/product-quick-view.html" className="btn-quickview">
                  Quick View
                </a>
                <span className="product-label label-sale">-20%</span>
                <span className="product-label label-hot">New</span>
              </figure>
              <div className="product-details">
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "0%" }} />
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">G632 Headset</a>
                </h2>
                <div className="price-box">
                  <span className="old-price">$60.00</span>
                  <span className="product-price">$48.00</span>
                </div>

                <div className="product-action">
                  <a href="/" className="paction add-wishlist" title="Add to Wishlist">
                    <span>Add to Wishlist</span>
                  </a>

                  <a href="product.html" className="paction add-cart" title="Add to Cart">
                    <span>Add to Cart</span>
                  </a>

                  <a href="/" className="paction add-compare" title="Add to Compare">
                    <span>Add to Compare</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img src="/static/images/products/product-5.jpg" alt="product" />
                </a>
                <a href="ajax/product-quick-view.html" className="btn-quickview">
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "60%" }} />
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">Skullcanddy</a>
                </h2>
                <div className="price-box">
                  <span className="product-price">$850.00</span>
                </div>

                <div className="product-action">
                  <a href="/" className="paction add-wishlist" title="Add to Wishlist">
                    <span>Add to Wishlist</span>
                  </a>

                  <a href="product.html" className="paction add-cart" title="Add to Cart">
                    <span>Add to Cart</span>
                  </a>

                  <a href="/" className="paction add-compare" title="Add to Compare">
                    <span>Add to Compare</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img src="/static/images/products/product-4.jpg" alt="product" />
                </a>
                <a href="ajax/product-quick-view.html" className="btn-quickview">
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "40%" }} />
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">Phillips</a>
                </h2>
                <div className="price-box">
                  <span className="product-price">$299.00</span>
                </div>

                <div className="product-action">
                  <a href="/" className="paction add-wishlist" title="Add to Wishlist">
                    <span>Add to Wishlist</span>
                  </a>

                  <a href="product.html" className="paction add-cart" title="Add to Cart">
                    <span>Add to Cart</span>
                  </a>

                  <a href="/" className="paction add-compare" title="Add to Compare">
                    <span>Add to Compare</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img src="/static/images/products/product-3.jpg" alt="product" />
                </a>
                <a href="ajax/product-quick-view.html" className="btn-quickview">
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "50%" }} />
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">Optical Mouse</a>
                </h2>
                <div className="price-box">
                  <span className="product-price">$79.00</span>
                </div>

                <div className="product-action">
                  <a href="/" className="paction add-wishlist" title="Add to Wishlist">
                    <span>Add to Wishlist</span>
                  </a>

                  <a href="product.html" className="paction add-cart" title="Add to Cart">
                    <span>Add to Cart</span>
                  </a>

                  <a href="/" className="paction add-compare" title="Add to Compare">
                    <span>Add to Compare</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="product">
              <figure className="product-image-container">
                <a href="product.html" className="product-image">
                  <img src="/static/images/products/product-14.jpg" alt="product" />
                </a>
                <a href="ajax/product-quick-view.html" className="btn-quickview">
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "50%" }} />
                  </div>
                </div>
                <h2 className="product-title">
                  <a href="product.html">Drone Standard</a>
                </h2>
                <div className="price-box">
                  <span className="product-price">$199.00</span>
                </div>

                <div className="product-action">
                  <a href="/" className="paction add-wishlist" title="Add to Wishlist">
                    <span>Add to Wishlist</span>
                  </a>

                  <a href="product.html" className="paction add-cart" title="Add to Cart">
                    <span>Add to Cart</span>
                  </a>

                  <a href="/" className="paction add-compare" title="Add to Compare">
                    <span>Add to Compare</span>
                  </a>
                </div>
              </div>
            </div>
          </MyCarousel>
        </div>
      </div>
    </div>
  </div>
);

ProductCarouselTab.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default ProductCarouselTab;
