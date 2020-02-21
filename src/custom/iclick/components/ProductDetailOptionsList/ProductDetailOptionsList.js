import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { observer } from "mobx-react";
import BadgeOverlay from "@reactioncommerce/components/BadgeOverlay/v1";
import { BADGE_LABELS, BADGE_TYPES, badgeStatus } from "@reactioncommerce/components/BadgeOverlay/v1/utils";
import ProductDetailOption from "custom/iclick/components/ProductDetailOption";
import ColorOption from "custom/iclick/components/ColorOption";
import SizeItem from "custom/iclick/components/SizeItem";

@observer
export default class OptionsList extends Component {
  static propTypes = {
    onSelectOption: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    productSlug: PropTypes.string,
    selectedOptionId: PropTypes.string,
    theme: PropTypes.object
  }

  renderBadges(option) {
    const status = badgeStatus(option, BADGE_LABELS);

    if (!status) return null;

    return (
      <div>
        <BadgeOverlay
          product={option}
          filterOnly={BADGE_TYPES.SALE}
          shouldShowPrimaryOnly={true}
          label={status.label}
        />
      </div>
    );
  }

  renderColors(options = []) {
    // const type = option.attributeLabel;
    // console.log(type);
    // if (!status) return null;
    const { onSelectOption, selectedOptionId } = this.props;
    return (
      <Fragment>
        <label htmlFor="config-swatch-list">Colors:</label>
        <ul className="config-swatch-list">
          {options.map((option) =>
            <ColorOption key={option._id} isActive={selectedOptionId === option._id} onClick={onSelectOption} option={option} />)}
        </ul>
      </Fragment>
    );
  }

  renderSize(options = []) {
    const { onSelectOption, selectedOptionId } = this.props;

    return (
      <Fragment>
        <label htmlFor="config-size-list">Sizes:</label>
        <ul className="config-size-list">
          {options.map((option) =>
            <SizeItem
              currencyCode={""}
              handleClick={() => {
                onSelectOption(option);
              }}
              key={option._id}
              isActive={selectedOptionId === option._id}
              variant={option}
            />)}
        </ul>
      </Fragment>
    );
  }

  render() {
    const { onSelectOption, options, selectedOptionId, theme } = this.props;

    if (!Array.isArray(options)) return null;

    const formattedOptions = options.reduce((acc, option) => {
      if (!acc[option.attributeLabel.toLowerCase()]) {
        acc[option.attributeLabel.toLowerCase()] = [];
      }

      acc[option.attributeLabel.toLowerCase()].push(option);

      return acc;
    }, {});

    const list = [];

    for (const key in formattedOptions) {
      if (key === "color" || key === "colors") {
        list.push(this.renderColors(formattedOptions[key]));
      } else if (key === "size" || key === "sizes") {
        list.push(this.renderSize(formattedOptions[key]));
      } else {
        list.push(<div className="d-flex flex-wrap">
          {formattedOptions[key].map((option) => (
            <Fragment>
              <ProductDetailOption key={option._id} isActive={selectedOptionId === option._id} onClick={onSelectOption} option={option} />
              {this.renderBadges(option)}
            </Fragment>
          ))}
        </div>);
      }
    }
    return (
      <Fragment>
        {list}
      </Fragment>
    );
  }
}
