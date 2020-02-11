import React, { Component, Fragment } from "react";
import Link from "custom/iclick/components/Link";

class TagFilters extends Component {
  render() {
    return (
      <Fragment>
        <aside className="sidebar-shop col-lg-3 order-lg-first">
          <div className="sidebar-wrapper">
            <div className="widget">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-body-1"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-body-1"
                >
                  Fashion
                </a>
              </h3>
              <div className="collapse show" id="widget-body-1">
                <div className="widget-body">
                  <ul className="cat-list">
                    <li>
                      <Link route="/">Women</Link>
                    </li>
                    <li>
                      <Link route="/">Men</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-body-2"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-body-2"
                >
                  Price
                </a>
              </h3>
              <div className="collapse show" id="widget-body-2">
                <div className="widget-body">
                  <form action="#">
                    <div className="price-slider-wrapper">
                      <div id="price-slider" />
                    </div>
                    <div className="filter-price-action">
                      <button type="submit" className="btn btn-dark">
                        Filter
                      </button>
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
                <a
                  data-toggle="collapse"
                  href="#widget-body-3"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-body-3"
                >
                  Size
                </a>
              </h3>
              <div className="collapse show" id="widget-body-3">
                <div className="widget-body">
                  <ul className="config-size-list">
                    <li className="active">
                      <Link route="/">S</Link>
                    </li>
                    <li>
                      <Link route="/">M</Link>
                    </li>
                    <li>
                      <Link route="/">L</Link>
                    </li>
                    <li>
                      <Link route="/">XL</Link>
                    </li>
                    <li>
                      <Link route="/">2XL</Link>
                    </li>
                    <li>
                      <Link route="/">3XL</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-body-4"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-body-4"
                >
                  Brand
                </a>
              </h3>
              <div className="collapse show" id="widget-body-4">
                <div className="widget-body">
                  <ul className="cat-list">
                    <li>
                      <Link route="/">
                        Adidas <span>18</span>
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        Camel <span>22</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-body-6"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-body-6"
                >
                  Color
                </a>
              </h3>
              <div className="collapse show" id="widget-body-6">
                <div className="widget-body">
                  <ul className="config-swatch-list">
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#4090d5" }} className="color-box" />
                      </Link>
                    </li>
                    <li className="active">
                      <Link route="/">
                        <div style={{ backgroundColor: "#f5494a" }} className="color-box" />
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#fca309" }} className="color-box" />
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#11426b" }} className="color-box" />
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#f0f0f0" }} className="color-box" />
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#3fd5c9" }} className="color-box" />
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#979c1c" }} className="color-box" />
                      </Link>
                    </li>
                    <li>
                      <Link route="/">
                        <div style={{ backgroundColor: "#7d5a3c" }} className="color-box" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default TagFilters;
