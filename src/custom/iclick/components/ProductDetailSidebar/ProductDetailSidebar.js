import React, {Fragment} from "react";

const ProductDteailContainer = () => (
  <Fragment>
    <div className="sidebar-overlay" />
    <div className="sidebar-toggle"><i className="icon-sliders" /></div>
    <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
      <div className="sidebar-wrapper">
        <div className="widget widget-brand">
          <a href="#">
            <img src="/static/images/product-brand.png" alt="brand name" />
          </a>
        </div>
        <div className="widget widget-info">
          <ul>
            <li>
              <i className="icon-shipping" />
              <h4>FREE<br />SHIPPING</h4>
            </li>
            <li>
              <i className="icon-us-dollar" />
              <h4>100% MONEY<br />BACK GUARANTEE</h4>
            </li>
            <li>
              <i className="icon-online-support" />
              <h4>ONLINE<br />SUPPORT 24/7</h4>
            </li>
          </ul>
        </div>
        <div className="widget widget-banner">
          <div className="banner banner-image">
            <a href="#">
              <img src="/static/images/banners/banner-sidebar.jpg" alt="Banner Desc" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  </Fragment>
);

export default ProductDteailContainer;
