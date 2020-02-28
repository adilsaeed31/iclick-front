import React, { Component, Fragment } from "react";
import Link from "custom/iclick/components/Link";
import Collapse from "custom/iclick/components/Collapse";
import PriceSlider from "custom/iclick/components/PriceSlider";
import ColorOption from "custom/iclick/components/ColorOption";
import SizeItem from "custom/iclick/components/SizeItem";
import withCatalogFilters from "containers/catalog/withCatalogFilters";
import color from "@material-ui/core/colors/amber";

@withCatalogFilters
class TagFilters extends Component {
  formatFilters = (items, obj = {}) => items.reduce((acc, item) => {
    const label = item.attributeLabel.trim().toLowerCase();
    const title = item.optionTitle.trim().toLowerCase();
    if (!acc[label]) {
      acc[label] = [];
    }
    if (acc[label].indexOf(title) < 0) {
      acc[label].push(title);
    }
    if (Array.isArray(item.options) && item.options.length) {
      this.formatFilters(item.options, acc);
    }
    return acc;
  }, obj);
  renderColors = (colors) => (
    <Collapse heading="Color">
      <ul className="config-swatch-list">
        {colors.map((col) => <ColorOption option={{ optionTitle: col }} />)}
      </ul>
    </Collapse>
  );

  renderSize = (sizes) => {
    const { shop } = this.props;
    if (!sizes || !sizes.length) return null;
    return (
      <Collapse heading="Size">
        <ul className="config-size-list">
          {sizes.map((si) => <SizeItem variant={{ optionTitle: si }} currencyCode={shop.currency.code} />)}
        </ul>
      </Collapse>
    );
  };

  renderFilters = (filters, heading) => {
    const { shop } = this.props;
    if (!filters || !filters.length) return null;
    return (
      <Collapse heading={heading}>
        {
          filters.map((fi) => (
            <button className={`btn btn-xs my-1 mx-1 ${false ? "btn-primary" : "btn-outline-secondary"}`}>
              <span>{fi}</span>
            </button>
          ))
        }
      </Collapse>
    );
  };


  renderPrice = (min, max) => {
    console.log(min, max);
    const { shop } = this.props;
    const _min = min;// Math.floor(min);
    const _max = max;// Math.floor(max);
    if (_max === _min) return null;
    return (
      <Collapse heading="Price">
        <form action="#">
          <PriceSlider min={_min} max={_max} currencyCode={shop.currency.code} />
        </form>
      </Collapse>
    );
  };
  render() {
    const { catalogItems: products = [] } = this.props;
    const formattedFilters = products.reduce((acc, { node: { product = {} } = {} }) => {
      if (!acc.pricing && product.pricing) {
        acc.pricing = {};
        acc.pricing.minPrice = product.pricing[0].minPrice;
        acc.pricing.maxPrice = product.pricing[0].maxPrice;
      } else if (acc.pricing) {
        if (product.pricing[0].minPrice && Number(product.pricing[0].minPrice) < Number(acc.pricing.minPrice)) {
          acc.pricing.minPrice = product.pricing[0].minPrice;
        }
        if (product.pricing[0].maxPrice && Number(product.pricing[0].maxPrice) > Number(acc.pricing.maxPrice)) {
          acc.pricing.maxPrice = product.pricing[0].maxPrice;
        }
      }
      return this.formatFilters(product.variants || [], acc);
    }, {});
    // console.log(formattedFilters);
    const list = [];
    // eslint-disable-next-line guard-for-in
    for (const key in formattedFilters) {
      if (key === "pricing") {
        list.push(this.renderPrice(formattedFilters[key].minPrice, formattedFilters[key].maxPrice));
      } else if (key === "color" || key === "colors") {
        list.push(this.renderColors(formattedFilters[key]));
      } else if (key === "size" || key === "sizes") {
        list.push(this.renderSize(formattedFilters[key]));
      } else {
        list.push(this.renderFilters(formattedFilters[key], key));
      }
    }
    return (
      <Fragment>
        <aside className="sidebar-shop col-lg-3 order-lg-first">
          <div className="sidebar-wrapper">
            <Collapse heading="Tags">
              <ul className="cat-list">
                <li>
                  <Link route="/tag/laptops">Laptop</Link>
                </li>
                <li>
                  <Link route="/tag/smart-gadgets">Smart Gadgets</Link>
                </li>
              </ul>
            </Collapse>
            {list}
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default TagFilters;
