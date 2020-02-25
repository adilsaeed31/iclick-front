import React, { Component, Fragment } from "react";
import Nouislider from "nouislider-react";
import Link from "custom/iclick/components/Link";
import Collapse from "custom/iclick/components/Collapse";

class TagFilters extends Component {
  render() {
    return (
      <Fragment>
        <aside className="sidebar-shop col-lg-3 order-lg-first">
          <div className="sidebar-wrapper">
            <Collapse heading="Fashion">
              <ul className="cat-list">
                <li>
                  <Link route="/">Women</Link>
                </li>
                <li>
                  <Link route="/">Men</Link>
                </li>
              </ul>
            </Collapse>
            <Collapse heading="Price">
              <form action="#">
                <div className="price-slider-wrapper">
                  <Nouislider
                    range={{ min: 0, max: 1000 }}
                    start={[200, 700]}
                    step={100}
                    connect
                    margin={100}
                  />
                </div>
                <div className="filter-price-action">
                  <button type="submit" className="btn btn-dark">
                        Filter
                  </button>

                  <div className="filter-price-text">
                    <span id="filter-price-range">$200.00 - $700.00</span>
                  </div>
                </div>
              </form>
            </Collapse>
            <Collapse heading="Size">
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
            </Collapse>
            <Collapse heading="Brand">
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
            </Collapse>
            <Collapse heading="Color">
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
            </Collapse>
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default TagFilters;
