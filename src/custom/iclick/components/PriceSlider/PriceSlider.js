import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Nouislider from "nouislider-react";

export default class PriceSlider extends Component {
  static propTypes = {
    currencyCode: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    setValues: PropTypes.func
  };
  render() {
    const { min, max, ...rest } = this.props;
    return (
      <Fragment>
        <div className="price-slider-wrapper">
          <Nouislider
            range={{ min, max }}
            start={[min, max]}
            step={5}
            connect
            margin={5}
            {...rest}
          />
        </div>
        <div className="filter-price-action">
          <button type="submit" className="btn btn-dark">Filter</button>

          <div className="filter-price-text">
            <span id="filter-price-range">{min} - {max}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

PriceSlider.defaultProps = {
  min: 0,
  currencyCode: "AED",
  max: 100
};
