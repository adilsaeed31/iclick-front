import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { observer } from "mobx-react";
import BadgeOverlay from "@reactioncommerce/components/BadgeOverlay/v1";
import { BADGE_LABELS, BADGE_TYPES, badgeStatus } from "@reactioncommerce/components/BadgeOverlay/v1/utils";
import ProductDetailOption from "custom/iclick/components/ProductDetailOption";

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

  render() {
    const { onSelectOption, options, selectedOptionId, theme } = this.props;

    if (!Array.isArray(options)) return null;

    return (
      <div className="d-flex flex-wrap">
        {options.map((option) => (
          <Fragment>
            <ProductDetailOption isActive={selectedOptionId === option._id} onClick={onSelectOption} option={option} />
            {this.renderBadges(option)}
          </Fragment>
        ))}
      </div>
    );
  }
}
