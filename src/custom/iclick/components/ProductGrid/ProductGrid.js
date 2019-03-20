import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import track from "lib/tracking/track";
import trackProductClicked from "lib/tracking/trackProductClicked";
import PageLoading from "custom/iclick/components/PageLoading";
import PageStepper from "custom/iclick/components/PageStepper";
import PageSizeSelector from "custom/iclick/components/PageSizeSelector";
import SortBySelector from "custom/iclick/components/SortBySelector";
import ProductGridEmptyMessage from "./ProductGridEmptyMessage";

@track()
export default class ProductGrid extends Component {
  static propTypes = {
    catalogItems: PropTypes.arrayOf(PropTypes.object),
    currencyCode: PropTypes.string.isRequired,
    initialSize: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    pageInfo: PropTypes.shape({
      startCursor: PropTypes.string,
      endCursor: PropTypes.string,
      hasNextPage: PropTypes.bool,
      hasPreviousPage: PropTypes.bool,
      loadNextPage: PropTypes.func,
      loadPreviousPage: PropTypes.func
    }),
    pageSize: PropTypes.number.isRequired,
    setPageSize: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired
  }

  renderFilters() {
    const { pageSize, setPageSize, setSortBy, sortBy } = this.props;

    return (
      <div>
        <div>
          <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
        </div>
        <div>
          <SortBySelector sortBy={sortBy} onChange={setSortBy} />
        </div>
      </div>
    );
  }

  @trackProductClicked()
  onItemClick = (event, product) => {} // eslint-disable-line no-unused-vars

  renderMainArea() {
    const { catalogItems, initialSize, isLoadingCatalogItems, pageInfo } = this.props;

    if (isLoadingCatalogItems) return <PageLoading />;

    const products = (catalogItems || []).map((item) => item.node.product);
    if (products.length === 0) return <ProductGridEmptyMessage />;

    return (
      <Fragment>
        <div>
          <CatalogGrid
            initialSize={initialSize}
            onItemClick={this.onItemClick}
            products={products}
            placeholderImageURL="/static/images/placeholder.gif"
            {...this.props}
          />
        </div>
        {pageInfo && <PageStepper pageInfo={pageInfo} />}
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderFilters()}
        {this.renderMainArea()}
      </Fragment>
    );
  }
}
