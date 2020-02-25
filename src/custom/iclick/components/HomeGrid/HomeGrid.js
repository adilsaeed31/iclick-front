import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CatalogGrid from "custom/iclick/components/CatalogGrid";
// import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import track from "lib/tracking/track";
import trackProductClicked from "lib/tracking/trackProductClicked";
import PageLoading from "custom/iclick/components/PageLoading";
import PageSizeSelector from "custom/iclick/components/PageSizeSelector";
import SortBySelector from "custom/iclick/components/SortBySelector";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import LoadMore from "custom/iclick/components/LoadMore";
import ProductGridEmptyMessage from "./HomeGridEmptyMessage";

const styles = (theme) => ({
  filters: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing.unit * 2
  }
});

@withStyles(styles, { name: "SkProductGrid" })
@track()
export default class HomeGrid extends Component {
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
	};


	@trackProductClicked()
	renderMainArea() {
	  const { catalogItems, initialSize, isLoadingCatalogItems, pageInfo, pageSize, setPageSize, totalCount } = this.props;
	  if (isLoadingCatalogItems) return <PageLoading />;

	  const products = (catalogItems || []).map((item) => {
	    item.node.product.isOnSale = true;
	    return item.node.product;
	  });

	  if (products.length === 0) return <ProductGridEmptyMessage />;

	  return (
	    <Fragment>
	      <Grid container spacing={24}>
	        <Grid item sm={12}>
	          <CatalogGrid
	            initialSize={initialSize}
  products={products}
  placeholderImageURL="/static/images/placeholder.gif"
  {...this.props}
	          />
	        </Grid>
	      </Grid>
		  <LoadMore {...pageInfo} isLoading={isLoadingCatalogItems} />
	    </Fragment>
	  );
	}

	render() {
	  return (
	    <Fragment>
	      {this.renderMainArea()}
	    </Fragment>
	  );
	}
}
