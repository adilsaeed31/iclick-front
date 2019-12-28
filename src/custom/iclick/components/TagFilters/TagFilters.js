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
                      <Link route="/" style={{ backgroundColor: "#4090d5" }} />
                    </li>
                    <li className="active">
                      <Link route="/" style={{ backgroundColor: "#f5494a" }} />
                    </li>
                    <li>
                      <Link route="/" style={{ backgroundColor: "#fca309" }} />
                    </li>
                    <li>
                      <Link route="/" style={{ backgroundColor: "#11426b" }} />
                    </li>
                    <li>
                      <Link route="/" style={{ backgroundColor: "#f0f0f0" }} />
                    </li>
                    <li>
                      <Link route="/" style={{ backgroundColor: "#3fd5c9" }} />
                    </li>
                    <li>
                      <Link route="/" style={{ backgroundColor: "#979c1c" }} />
                    </li>
                    <li>
                      <Link route="/" style={{ backgroundColor: "#7d5a3c" }} />
                    </li>
                  </ul>
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
      </Fragment>
    );
  }
}

export default TagFilters;
