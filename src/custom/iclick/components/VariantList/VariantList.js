import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import BadgeOverlay from "@reactioncommerce/components/BadgeOverlay/v1";
import { badgeStatus, BADGE_LABELS } from "@reactioncommerce/components/BadgeOverlay/v1/utils";
import InventoryStatus from "@reactioncommerce/components/InventoryStatus/v1";
import VariantItem from "custom/iclick/components/VariantItem";
import ProductDetailOptionsList from "custom/iclick/components/ProductDetailOptionsList";
import Divider from "custom/iclick/components/Divider";

export default class VariantList extends Component {
  static propTypes = {
    currencyCode: PropTypes.string.isRequired,
    onSelectOption: PropTypes.func,
    onSelectVariant: PropTypes.func,
    product: PropTypes.object.isRequired,
    selectedOptionId: PropTypes.string,
    selectedVariantId: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  renderVariant = (variant) => {
    const { currencyCode, onSelectVariant, selectedVariantId } = this.props;

    const active = selectedVariantId === variant._id;

    return (
      <div key={variant._id}>
        <VariantItem
          currencyCode={currencyCode}
          handleClick={() => {
            onSelectVariant(variant);
          }}
          isActive={active}
          variant={variant}
        />
        {this.renderBadges(variant)}
      </div>
    );
  }

  renderBadges(variant) {
    const status = badgeStatus(variant, BADGE_LABELS);

    if (!status) return null;

    return (
      <div>
        <BadgeOverlay
          product={variant}
          filterOnly={"MERCHANDISING"}
          shouldShowPrimaryOnly={true}
          label={status.label}
        />
      </div>
    );
  }

  renderInventoryStatusText() {
    const { selectedOptionId, selectedVariantId, variants } = this.props;
    const selectedVariant = variants.find((variant) => variant._id === selectedVariantId);

    if (selectedOptionId) {
      // Check to make sure the selected option is from this current page, and not left over from a previous page
      const options =
        selectedVariant && Array.isArray(selectedVariant.options) && selectedVariant.options.length
          ? selectedVariant.options
          : null;

      if (options) {
        const selectedOption = options.find((option) => option._id === selectedOptionId);
        return <InventoryStatus product={selectedOption} />;
      }
    }

    // If we don't have an option, use the variant for inventory status information
    if (selectedVariantId) {
      return <InventoryStatus product={selectedVariant} />;
    }

    // We should always have a selected option or variant, so we should never get this far
    return null;
  }

  renderOptionsList() {
    const { onSelectOption, product, selectedOptionId, selectedVariantId, variants } = this.props;
    const selectedVariant = variants.find((variant) => variant._id === selectedVariantId);

    // If currently selected variant has options, then render them.
    const options =
      selectedVariant && Array.isArray(selectedVariant.options) && selectedVariant.options.length
        ? selectedVariant.options
        : null;

    if (!options) return null;

    return (
      <Fragment>
        <Divider label="Available Options" />
        <ProductDetailOptionsList
          productSlug={product.slug}
          onSelectOption={onSelectOption}
          options={options}
          selectedOptionId={selectedOptionId}
        />
      </Fragment>
    );
  }

  render() {
    const { variants } = this.props;
    return (
      <div>
        {variants.map(this.renderVariant)}
        {this.renderOptionsList()}
        <div>{this.renderInventoryStatusText()}</div>
      </div>
    );
  }
}
